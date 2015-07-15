goog.provide('bitex.view.LineOfCreditView');

goog.require('bitex.view.LineOfCreditView.templates');

goog.require('bitex.view.View');

goog.require('bitex.ui.LineOfCreditTable');
goog.require('bitex.ui.LineOfCreditTable.EventType');

goog.require('bitex.util');
goog.require('goog.json');

/**
 * @param {*} app
 * @param {goog.dom.DomHelper=} opt_domHelper
 * @constructor
 * @extends {bitex.view.View}
 */
bitex.view.LineOfCreditView = function(app, opt_domHelper) {
  bitex.view.View.call(this, app, opt_domHelper);

  this.request_id_ = null;
};
goog.inherits(bitex.view.LineOfCreditView, bitex.view.View);

/**
 * @type {bitex.ui.LineOfCreditTable}
 * @private
 */
bitex.view.LineOfCreditView.prototype.line_of_credit_table_;

bitex.view.LineOfCreditView.prototype.enterView = function() {
  goog.base(this, 'enterView');
  this.recreateComponents_();
};

bitex.view.LineOfCreditView.prototype.exitView = function() {
  goog.base(this, 'exitView');
  this.destroyComponents_();
};

/**
 * @type {number}
 */
bitex.view.LineOfCreditView.prototype.request_id_;

/**
 * @private
 */
bitex.view.LineOfCreditView.prototype.destroyComponents_ = function( ) {
  var handler = this.getHandler();


  if (goog.isDefAndNotNull(this.line_of_credit_table_)) {

    handler.unlisten(this.line_of_credit_table_,
                     bitex.ui.DataGrid.EventType.REQUEST_DATA,
                     this.onLineOfCreditTableRequestData_);

    handler.unlisten(this.getApplication().getBitexConnection(),
                     bitex.api.BitEx.EventType.LINE_OF_CREDIT_LIST_RESPONSE + '.' + this.request_id_,
                     this.onLineOfCreditListResponse_);

  }

  this.removeChildren(true);
  this.line_of_credit_table_ = null;
  this.request_id_ = null;
};


/**
 * @private
 */
bitex.view.LineOfCreditView.prototype.recreateComponents_ = function() {
  var handler = this.getHandler();
  var model = this.getApplication().getModel();

  this.destroyComponents_();

  this.request_id_ = parseInt( 1e7 * Math.random() , 10 );

  this.line_of_credit_table_ =  new bitex.ui.LineOfCreditTable(model.get('UserID'));

  handler.listen(this.line_of_credit_table_,
                 bitex.ui.DataGrid.EventType.REQUEST_DATA,
                 this.onLineOfCreditTableRequestData_);

  handler.listen(this.getApplication().getBitexConnection(),
                 bitex.api.BitEx.EventType.LINE_OF_CREDIT_LIST_RESPONSE + '.' + this.request_id_,
                 this.onLineOfCreditListResponse_);

  handler.listen(this.line_of_credit_table_, bitex.ui.LineOfCreditTable.EventType.INFO,    this.onLineOfCreditInfo_);
  handler.listen(this.line_of_credit_table_, bitex.ui.LineOfCreditTable.EventType.ENABLE,  this.onLineOfCreditEnable_);
  handler.listen(this.line_of_credit_table_, bitex.ui.LineOfCreditTable.EventType.DISABLE, this.onLineOfCreditDisable_);
  handler.listen(this.line_of_credit_table_, bitex.ui.LineOfCreditTable.EventType.GET,     this.onLineOfCreditGet_);
  handler.listen(this.line_of_credit_table_, bitex.ui.LineOfCreditTable.EventType.PAYBACK, this.onLineOfCreditPayback_);

  this.addChild(this.line_of_credit_table_, true );

  this.line_of_credit_table_.setColumnFormatter('Balance',     this.currencyFormatter_, this);
  this.line_of_credit_table_.setColumnFormatter('CreditLimit', this.currencyFormatter_, this);
};

/**
 * @param {Object} line_of_credit
 * @return {Object}
 */
bitex.view.LineOfCreditView.prototype.formatLineOfCredit_ = function(line_of_credit) {
  /**
   {"ID":1,
   "ProviderID":null,
   "TakerID":90800393,
   "ProviderFirstName":"Owen",
   "ProviderLastName":"Gunden",
   "TakerFirstName":"Rodrigo",
   "TakerLastName":"Souza",
   "Description":"BlinkTrade Remittances",
   "Currency":"USD","DeliveryCurrencies":["BTC"],
   "ContractInfo":{
    "interest_rate":0.0667,
    "limit":5000000000000,
    "deliver_currencies":["BTC"],
    "BTC":{
      "payback_ticker":{
        "min_interval":600,
        "instrument":"BTCUSD",
        "premium":[[0,500000000000,0.25],[500000000000,1500000000000,0.35]],
        "column":"BEST_ASK",
        "market":"BITFINEX"
      },
      "get_ticker":{
        "min_interval":600,
        "instrument":"BTCUSD",
        "premium":[[0,500000000000,0.25],[500000000000,1500000000000,0.35]],
        "column":"BEST_BID",
        "market":"BITFINEX"}
      }
   },
   "InterestRate":0.0667,
   "CreditLimit":5000000000000,
   "Balance":0,
   "LastUpdate":"2015-06-25 09:05:11",
   "Created":"2015-06-25 09:05:11",
   "PercentFee":0,
   "FixedFee":0,
   "IsActive":1
   }
   */

  var percent_fmt = new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.PERCENT);
  percent_fmt.setMaximumFractionDigits(2);
  percent_fmt.setMinimumFractionDigits(2);

  // Currencies
  line_of_credit["CurrencySign"] = this.getApplication().getCurrencySign(line_of_credit['Currency']);
  line_of_credit["DeliveryCurrenciesSign"] = {};
  goog.array.forEach(line_of_credit["DeliveryCurrencies"], function(delivery_currency){
    line_of_credit["DeliveryCurrenciesSign"][delivery_currency] = this.getApplication().getCurrencySign(delivery_currency);
  }, this);

  // Balance
  line_of_credit["BalanceHumanFormat"] =
      this.getApplication().formatCurrency(line_of_credit["Balance"]/1e8, line_of_credit['Currency']);

  // percent fee
  line_of_credit["PercentFee"] = percent_fmt.format(line_of_credit["PercentFee"]);

  // fixed fee
  line_of_credit["FixedFeeHumanFormat"] =
      this.getApplication().formatCurrency(line_of_credit["FixedFee"]/1e8, line_of_credit['Currency']);

  // Credit limit
  line_of_credit["CreditLimitHumanFormat"] =
      this.getApplication().formatCurrency(line_of_credit["CreditLimit"]/1e8, line_of_credit['Currency']);
  line_of_credit["ContractInfo"]["limit_human_format"] =
      this.getApplication().formatCurrency(line_of_credit["ContractInfo"]["limit"]/1e8, line_of_credit['Currency']);

  // Interest rate
  percent_fmt.setMaximumFractionDigits(4);
  percent_fmt.setMinimumFractionDigits(4);
  line_of_credit["InterestRateHumanFormat"] = percent_fmt.format(line_of_credit["InterestRate"]);
  line_of_credit["ContractInfo"]["interest_rate_human_format"] =
      percent_fmt.format(line_of_credit["ContractInfo"]["interest_rate"]);
  percent_fmt.setMinimumFractionDigits(2);
  percent_fmt.setMaximumFractionDigits(2);

  // adjust premium information for each delivery currency
  goog.array.forEach(line_of_credit["ContractInfo"]["deliver_currencies"], function(delivery_currency){
    line_of_credit["ContractInfo"][delivery_currency]["CurrencySign"] = this.getApplication().getCurrencySign(delivery_currency);

    if ("payback_ticker" in line_of_credit["ContractInfo"][delivery_currency]) {
      if ("premium" in line_of_credit["ContractInfo"][delivery_currency]["payback_ticker"]) {
        line_of_credit["ContractInfo"][delivery_currency]["payback_ticker"]["premium_human_format"] = [];
        goog.array.forEach(line_of_credit["ContractInfo"][delivery_currency]["payback_ticker"]["premium"],function(p){
          p_human_format = [
              this.getApplication().formatCurrency(p[0]/1e8, line_of_credit['Currency']),
              this.getApplication().formatCurrency(p[1]/1e8, line_of_credit['Currency']),
              percent_fmt.format(p[2])
          ];
          line_of_credit["ContractInfo"][delivery_currency]["payback_ticker"]["premium_human_format"].push(p_human_format);
        }, this);
      }
    }

    if ("get_ticker" in line_of_credit["ContractInfo"][delivery_currency]) {
      if ("premium" in line_of_credit["ContractInfo"][delivery_currency]["get_ticker"]) {
        line_of_credit["ContractInfo"][delivery_currency]["get_ticker"]["premium_human_format"] = [];
        var min_get = line_of_credit["ContractInfo"][delivery_currency]["get_ticker"]["premium"][0];
        var max_get = line_of_credit["ContractInfo"][delivery_currency]["get_ticker"]["premium"][1];

        goog.array.forEach(line_of_credit["ContractInfo"][delivery_currency]["get_ticker"]["premium"],function(p){
          p_human_format = [
              this.getApplication().formatCurrency(p[0]/1e8, line_of_credit['Currency']),
              this.getApplication().formatCurrency(p[1]/1e8, line_of_credit['Currency']),
              percent_fmt.format(p[2])
          ];
          max_get = p[1];
          line_of_credit["ContractInfo"][delivery_currency]["get_ticker"]["premium_human_format"].push(p_human_format);
        }, this);
        line_of_credit["ContractInfo"][delivery_currency]["get_ticker"]["min_size"] = min_get;
        line_of_credit["ContractInfo"][delivery_currency]["get_ticker"]["max_size"] = max_get;

        line_of_credit["ContractInfo"][delivery_currency]["get_ticker"]["min_size_human_format"] =
          this.getApplication().formatCurrency(min_get/1e8, line_of_credit['Currency']);
        line_of_credit["ContractInfo"][delivery_currency]["get_ticker"]["max_size_human_format"] =
          this.getApplication().formatCurrency(max_get/1e8, line_of_credit['Currency']);
      }
    }
  }, this);


  return line_of_credit;
};

/**
 * @param {goog.events.Event} e
 */
bitex.view.LineOfCreditView.prototype.onLineOfCreditEnable_ = function(e) {
  line_of_credit = this.formatLineOfCredit_(e.target.getLineOfCredit());
};

/**
 * @param {goog.events.Event} e
 */
bitex.view.LineOfCreditView.prototype.onLineOfCreditDisable_ = function(e) {
  line_of_credit = this.formatLineOfCredit_(e.target.getLineOfCredit());
};

/**
 * @param {goog.events.Event} e
 */
bitex.view.LineOfCreditView.prototype.onLineOfCreditGet_ = function(e) {
  line_of_credit = this.formatLineOfCredit_(e.target.getLineOfCredit());
};

/**
 * @param {goog.events.Event} e
 */
bitex.view.LineOfCreditView.prototype.onLineOfCreditPayback_ = function(e) {
  line_of_credit = this.formatLineOfCredit_(e.target.getLineOfCredit());
};

/**
 * @param {goog.events.Event} e
 */
bitex.view.LineOfCreditView.prototype.onLineOfCreditInfo_ = function(e) {
  line_of_credit = this.formatLineOfCredit_(e.target.getLineOfCredit());
  var dialogContent =  bitex.view.LineOfCreditView.templates.InfoLineOfCredit({data: line_of_credit});
  this.getApplication().showDialog(dialogContent, line_of_credit['Description']);
};



/**
 * @param {*} value
 * @param {Object} rowSet
 */
bitex.view.LineOfCreditView.prototype.currencyFormatter_ = function(value, rowSet) {
  return this.getApplication().formatCurrency(value/1e8, rowSet['Currency']);
};

/**
 *
 * @param {goog.events.Event} e
 */
bitex.view.LineOfCreditView.prototype.onLineOfCreditTableRequestData_ = function(e) {
  var page = e.options['Page'];
  var limit = e.options['Limit'];
  var conn = this.getApplication().getBitexConnection();
  conn.requestLineOfCreditList(page, limit, this.request_id_);
};


/**
 *
 * @param {goog.events.Event} e
 */
bitex.view.LineOfCreditView.prototype.onLineOfCreditListResponse_ = function(e) {
  if (!goog.isDefAndNotNull(this.line_of_credit_table_) ) {
    return
  }
  var msg = e.data;
  this.line_of_credit_table_.setResultSet( msg['LineOfCreditListGrp'], msg['Columns'] );
};
