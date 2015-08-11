goog.provide('bitex.view.LineOfCreditView');

goog.require('bitex.view.LineOfCreditView.templates');

goog.require('bitex.view.View');

goog.require('bitex.ui.LineOfCreditTable');
goog.require('bitex.ui.LineOfCreditTable.EventType');

goog.require('bitex.util');
goog.require('goog.json');
goog.require('goog.structs.Set');

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

  handler.listen(this.getApplication().getBitexConnection(),
                 bitex.api.BitEx.EventType.LINE_OF_CREDIT_LIST_REFRESH + '.' + model.get('UserID'),
                 this.onLineOfCreditListRefresh_);


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
   "Currency":"USD",
   "DeliveryCurrencies":["BTC"],
   "ContractInfo":{
    "interest_rate":0.0667,
    "limit":5000000000000,
    "deliver_currencies":["BTC"],
    "BTC":{
      "payback_ticker":{
        "currency": "USD",
        "min_interval":600,
        "instrument":"BTCUSD",
        "premium":[[0,500000000000,0.25],[500000000000,1500000000000,0.35]],
        "column":"BEST_ASK",
        "market":"BITFINEX"
      },
      "get_ticker":{
        "currency": "USD",
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
   "IsActive":1
   }
   */

  var percent_fmt = new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.PERCENT);
  percent_fmt.setMaximumFractionDigits(2);
  percent_fmt.setMinimumFractionDigits(2);

  var decimal_fmt = new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.DECIMAL);
  decimal_fmt.setMaximumFractionDigits(2);
  decimal_fmt.setMinimumFractionDigits(2);


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
  line_of_credit["PercentFeeHumanFormat"] = percent_fmt.format(line_of_credit["PercentFee"]/100);

  // Credit limit
  line_of_credit["CreditLimitHumanFormat"] =
      this.getApplication().formatCurrency(line_of_credit["CreditLimit"]/1e8, line_of_credit['Currency']);
  line_of_credit["ContractInfo"]["limit_human_format"] =
      this.getApplication().formatCurrency(line_of_credit["ContractInfo"]["limit"]/1e8, line_of_credit['Currency']);

  // Interest rate
  percent_fmt.setMaximumFractionDigits(4);
  percent_fmt.setMinimumFractionDigits(4);
  line_of_credit["InterestRateHumanFormat"] = percent_fmt.format(line_of_credit["InterestRate"]/100);
  line_of_credit["ContractInfo"]["interest_rate_human_format"] = line_of_credit["InterestRateHumanFormat"];
  percent_fmt.setMinimumFractionDigits(2);
  percent_fmt.setMaximumFractionDigits(2);

  // adjust premium information for each delivery currency
  goog.array.forEach(line_of_credit["ContractInfo"]["deliver_currencies"], function(delivery_currency){
    line_of_credit["ContractInfo"][delivery_currency]["CurrencySign"] = this.getApplication().getCurrencySign(delivery_currency);
    line_of_credit["ContractInfo"][delivery_currency]["CurrencyPattern"] = this.getApplication().getCurrencyHumanFormat(delivery_currency);

    if ("payback_ticker" in line_of_credit["ContractInfo"][delivery_currency]) {
      line_of_credit["ContractInfo"][delivery_currency]["payback_ticker"]["ticker"] =
          line_of_credit["ContractInfo"][delivery_currency]["payback_ticker"]["market"] + '_' +
          line_of_credit["ContractInfo"][delivery_currency]["payback_ticker"]["instrument"] + '_' +
          line_of_credit["ContractInfo"][delivery_currency]["payback_ticker"]["column"];


      var payback_ticker_currency = line_of_credit["ContractInfo"][delivery_currency]["payback_ticker"]["currency"];
      line_of_credit["ContractInfo"][delivery_currency]["payback_ticker"]["currency_pattern"] =
        this.getApplication().getCurrencyHumanFormat(payback_ticker_currency);

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
      line_of_credit["ContractInfo"][delivery_currency]["get_ticker"]["ticker"] =
          line_of_credit["ContractInfo"][delivery_currency]["get_ticker"]["market"] + '_' +
          line_of_credit["ContractInfo"][delivery_currency]["get_ticker"]["instrument"] + '_' +
          line_of_credit["ContractInfo"][delivery_currency]["get_ticker"]["column"];

      var get_ticker_currency = line_of_credit["ContractInfo"][delivery_currency]["get_ticker"]["currency"];
      line_of_credit["ContractInfo"][delivery_currency]["get_ticker"]["currency_pattern"] =
        this.getApplication().getCurrencyHumanFormat(get_ticker_currency);

      if ("premium" in line_of_credit["ContractInfo"][delivery_currency]["get_ticker"]) {
        line_of_credit["ContractInfo"][delivery_currency]["get_ticker"]["premium_human_format"] = [];
        var min_get = line_of_credit["ContractInfo"][delivery_currency]["get_ticker"]["premium"][0][0];
        var max_get = line_of_credit["ContractInfo"][delivery_currency]["get_ticker"]["premium"][0][1];

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
          this.getApplication().formatCurrency(
              min_get/1e8,
              line_of_credit["ContractInfo"][delivery_currency]["get_ticker"]["currency"]);
        line_of_credit["ContractInfo"][delivery_currency]["get_ticker"]["max_size_human_format"] =
          this.getApplication().formatCurrency(
              max_get/1e8,
              line_of_credit["ContractInfo"][delivery_currency]["get_ticker"]["currency"] );



        line_of_credit["ContractInfo"][delivery_currency]["get_ticker"]["max_size_decimal"] = decimal_fmt.format(max_get/1e8);
        line_of_credit["ContractInfo"][delivery_currency]["get_ticker"]["min_size_decimal"] = decimal_fmt.format(min_get/1e8);
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
  var handler = this.getHandler();
  line_of_credit = this.formatLineOfCredit_(e.target.getLineOfCredit());
  var model = this.getApplication().getModel();

  goog.array.forEach(line_of_credit['DeliveryCurrencies'], function(delivery_currency) {
    var amount_element_model_key = 'ID_LOC_FORM_AMOUNT_' + line_of_credit['Currency'] + '_' + delivery_currency;
    model.set(amount_element_model_key, 0);

    var amount_premium_element_model_key =
        'ID_LOC_FORM_AMOUNT_' + line_of_credit['Currency'] + '_' + delivery_currency + '_PREMIUM';
    model.set(amount_premium_element_model_key , 0);
  }, this);


  var get_line_of_credit_content =  bitex.view.LineOfCreditView.templates.GetLineOfCredit({id: this.makeId('loc'),
                                                                                           data: line_of_credit });

  var dlg = this.getApplication().showDialog(get_line_of_credit_content,
                                             line_of_credit['Description'],
                                             bitex.ui.Dialog.ButtonSet.createOkCancel());


  var loc_uniform = new uniform.Uniform({ 'control_holder_class' : 'control-group' } );
  loc_uniform.decorate( goog.dom.getElement(this.makeId('loc_form')));


  var fmt_currency = new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.DECIMAL);
  fmt_currency.setMaximumFractionDigits(this.getApplication().getCurrencyNumberOfDecimals(line_of_credit['Currency']))
  fmt_currency.setMinimumFractionDigits(this.getApplication().getCurrencyNumberOfDecimals(line_of_credit['Currency']))

  handler.listen(dlg, goog.ui.Dialog.EventType.SELECT, function(e) {
    if (e.key == 'ok') {
      // Calculate the total
      var error_list = loc_uniform.validate();
      if (error_list.length > 0) {
        goog.array.forEach(error_list, function (error_msg) {
          this.getApplication().showNotification('error', error_msg);
        }, this);
        e.stopPropagation();
        e.preventDefault();
        return;
      }

      var get_line_of_credit_data = loc_uniform.getAsJSON();

      this.getApplication().getBitexConnection().getLineOfCredit(
        get_line_of_credit_data['ID'],
        get_line_of_credit_data['Amount'] * 1e8,
        get_line_of_credit_data['DeliveryMethod']);
    }
  }, this);

  handler.listen(goog.dom.getElement(this.makeId('loc_form_delivery_currency')), goog.events.EventType.CHANGE, function(e){
    var delivery_currency = goog.dom.forms.getValue(goog.dom.getElement(this.makeId('loc_form_delivery_currency')));
    goog.array.forEach(goog.dom.getElementsByClass('line-of-credit-delivery-currency'), function(el){
      goog.style.showElement(el, false);

      if ( el.getAttribute('data-delivery-currency') == delivery_currency ) {
        goog.style.showElement(el, true);
      }
    }, this );

  }, this);


  goog.array.forEach(line_of_credit['DeliveryCurrencies'], function(delivery_currency) {
    var fmt_delivery_currency = new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.DECIMAL);
    fmt_delivery_currency.setMaximumFractionDigits(this.getApplication().getCurrencyNumberOfDecimals(line_of_credit['Currency']))
    fmt_delivery_currency.setMinimumFractionDigits(this.getApplication().getCurrencyNumberOfDecimals(line_of_credit['Currency']))

    var amount_element = goog.dom.getElement(
        this.makeId('loc_form_amount') + '_' + line_of_credit['Currency'] + '_' + delivery_currency );

    handler.listen( new goog.events.InputHandler(amount_element),goog.events.InputHandler.EventType.INPUT,function(e) {
      var pos = [0];
      var amount_string = goog.dom.forms.getValue(amount_element);
      var amount_value = fmt_currency.parse(amount_string, pos);
      if (pos[0] != amount_string.length || isNaN(amount_value) || amount_value < 0 ){
        return;
      }

      // Calculate the total
      var error_list = loc_uniform.validate();
      if (error_list.length > 0) {
        goog.array.forEach(error_list, function (error_msg) {
          this.getApplication().showNotification('error', error_msg);
        }, this);
        return;
      }

      amount_value = parseInt(amount_value * 1e8, 10);

      var premium = 0;
      if ("get_ticker" in line_of_credit["ContractInfo"][delivery_currency] &&
          "premium" in line_of_credit["ContractInfo"][delivery_currency]["get_ticker"]) {

        var premium = goog.array.find(line_of_credit["ContractInfo"][delivery_currency]["get_ticker"]["premium"], function(premium_info){
          if (amount_value > premium_info[0] && amount_value <  premium_info[1] ){
            return true;
          }
        },this);
      };
      if (goog.isDefAndNotNull(premium)) {
        var amount_premium_element_model_key =
            'ID_LOC_FORM_AMOUNT_' + line_of_credit['Currency'] + '_' + delivery_currency + '_PREMIUM';
        model.set(amount_premium_element_model_key , premium[2]);
      }

      var amount_element_model_key = 'ID_LOC_FORM_AMOUNT_' + line_of_credit['Currency'] + '_' + delivery_currency;
      model.set(amount_element_model_key , amount_value);


    }, this);

  },this);

  this.getApplication().getModel().updateDom();
};

/**
 * @param {goog.events.Event} e
 */
bitex.view.LineOfCreditView.prototype.onLineOfCreditPayback_ = function(e) {
  var handler = this.getHandler();
  line_of_credit = this.formatLineOfCredit_(e.target.getLineOfCredit());
  var model = this.getApplication().getModel();

  goog.array.forEach(line_of_credit['DeliveryCurrencies'], function(delivery_currency) {
    var amount_element_model_key = 'ID_LOC_FORM_AMOUNT_' + delivery_currency + '_' + line_of_credit['Currency'];
    model.set(amount_element_model_key, 0);

    var amount_premium_element_model_key =
        'ID_LOC_FORM_AMOUNT_' + delivery_currency + '_' + line_of_credit['Currency'] + '_PREMIUM';
    model.set(amount_premium_element_model_key , 0);
  }, this);


  var pay_line_of_credit_content =  bitex.view.LineOfCreditView.templates.PayLineOfCredit({id: this.makeId('loc'),
                                                                                           data: line_of_credit });

  var dlg = this.getApplication().showDialog(pay_line_of_credit_content,
                                             line_of_credit['Description'],
                                             bitex.ui.Dialog.ButtonSet.createOkCancel());


  var loc_uniform = new uniform.Uniform({ 'control_holder_class' : 'control-group' } );
  loc_uniform.decorate( goog.dom.getElement(this.makeId('loc_form')));


  var fmt_currency = new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.DECIMAL);
  fmt_currency.setMaximumFractionDigits(this.getApplication().getCurrencyNumberOfDecimals(line_of_credit['Currency']))
  fmt_currency.setMinimumFractionDigits(this.getApplication().getCurrencyNumberOfDecimals(line_of_credit['Currency']))

  handler.listen(dlg, goog.ui.Dialog.EventType.SELECT, function(e) {
    if (e.key == 'ok') {
      // Calculate the total
      var error_list = loc_uniform.validate();
      if (error_list.length > 0) {
        goog.array.forEach(error_list, function (error_msg) {
          this.getApplication().showNotification('error', error_msg);
        }, this);
        e.stopPropagation();
        e.preventDefault();
        return;
      }
      var pay_line_of_credit_data = loc_uniform.getAsJSON();

      var min_size = line_of_credit["ContractInfo"][pay_line_of_credit_data['Currency']]["payback_ticker"]["min_size"];
      var max_size = line_of_credit["ContractInfo"][pay_line_of_credit_data['Currency']]["payback_ticker"]["max_size"];

      // TODO: The code bellow is just a workaround that catches 99% of the cases. Must be perfected in the the future.
      if ("payback_ticker" in line_of_credit["ContractInfo"][delivery_currency] &&
          "premium" in line_of_credit["ContractInfo"][delivery_currency]["payback_ticker"]) {
        var ticker_value = model.get(line_of_credit["ContractInfo"][pay_line_of_credit_data['Currency']]["payback_ticker"]["ticker"]);
        var amount_in_currency_value =  parseInt( pay_line_of_credit_data['Amount'] * ticker_value);
        if (amount_in_currency_value < min_size || amount_in_currency_value > max_size ) {
          this.getApplication().showNotification('error', 'Invalid amount');
          e.stopPropagation();
          e.preventDefault();
          return;
        }
      } else {
        if (pay_line_of_credit_data['Amount'] * 1e8 < min_size || pay_line_of_credit_data['Amount'] * 1e8 > max_size){
          this.getApplication().showNotification('error', 'Invalid amount');
          e.stopPropagation();
          e.preventDefault();
          return;
        }
      }

      this.getApplication().getBitexConnection().payLineOfCredit(
        pay_line_of_credit_data['ID'],
        pay_line_of_credit_data['Amount'] * 1e8,
        pay_line_of_credit_data['Currency']);
    }
  }, this);

  handler.listen(goog.dom.getElement(this.makeId('loc_form_delivery_currency')), goog.events.EventType.CHANGE, function(e){
    var delivery_currency = goog.dom.forms.getValue(goog.dom.getElement(this.makeId('loc_form_delivery_currency')));
    goog.array.forEach(goog.dom.getElementsByClass('line-of-credit-delivery-currency'), function(el){
      goog.style.showElement(el, false);

      if ( el.getAttribute('data-delivery-currency') == delivery_currency ) {
        goog.style.showElement(el, true);
      }
    }, this );

  }, this);


  goog.array.forEach(line_of_credit['DeliveryCurrencies'], function(delivery_currency) {
    var fmt_delivery_currency = new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.DECIMAL);
    fmt_delivery_currency.setMaximumFractionDigits(this.getApplication().getCurrencyNumberOfDecimals(line_of_credit['Currency']))
    fmt_delivery_currency.setMinimumFractionDigits(this.getApplication().getCurrencyNumberOfDecimals(line_of_credit['Currency']))

    var amount_element = goog.dom.getElement(
        this.makeId('loc_form_amount') + '_' + delivery_currency + '_' + line_of_credit['Currency'] );

    handler.listen( new goog.events.InputHandler(amount_element),goog.events.InputHandler.EventType.INPUT,function(e) {
      var pos = [0];
      var amount_string = goog.dom.forms.getValue(amount_element);
      var amount_value = fmt_currency.parse(amount_string, pos);
      if (pos[0] != amount_string.length || isNaN(amount_value) || amount_value < 0 ){
        return;
      }

      // Calculate the total
      var error_list = loc_uniform.validate();
      if (error_list.length > 0) {
        goog.array.forEach(error_list, function (error_msg) {
          this.getApplication().showNotification('error', error_msg);
        }, this);
        return;
      }

      amount_value = parseInt(amount_value * 1e8, 10);

      var premium = 0;
      if ("payback_ticker" in line_of_credit["ContractInfo"][delivery_currency] &&
          "premium" in line_of_credit["ContractInfo"][delivery_currency]["payback_ticker"]) {

        var ticker_value = model.get(line_of_credit["ContractInfo"][delivery_currency]["payback_ticker"]["ticker"]);
        var amount_in_currency_value =  parseInt( amount_value * ticker_value / 1e8);

        var premium = goog.array.find(line_of_credit["ContractInfo"][delivery_currency]["payback_ticker"]["premium"], function(premium_info){
          if (amount_in_currency_value > premium_info[0] && amount_in_currency_value <  premium_info[1] ){
            return true;
          }
        },this);
      };
      if (goog.isDefAndNotNull(premium)) {
        var amount_premium_element_model_key =
            'ID_LOC_FORM_AMOUNT_' + delivery_currency + '_' + line_of_credit['Currency'] + '_PREMIUM';
        model.set(amount_premium_element_model_key , premium[2]);
      }

      var amount_element_model_key = 'ID_LOC_FORM_AMOUNT_' + delivery_currency + '_' + line_of_credit['Currency'];
      model.set(amount_element_model_key , amount_value);


    }, this);

  },this);

  this.getApplication().getModel().updateDom();

};

/**
 * @param {goog.events.Event} e
 */
bitex.view.LineOfCreditView.prototype.onLineOfCreditInfo_ = function(e) {
  line_of_credit = this.formatLineOfCredit_(e.target.getLineOfCredit());
  var dialogContent =  bitex.view.LineOfCreditView.templates.InfoLineOfCredit({data: line_of_credit});
  this.getApplication().showDialog(dialogContent, line_of_credit['Description']);
  this.getApplication().getModel().updateDom();
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
 * @param {goog.events.Event} e
 */
bitex.view.LineOfCreditView.prototype.onLineOfCreditListRefresh_ = function(e) {
  var msg = e.data;
  if (!goog.isDefAndNotNull(this.line_of_credit_table_) ) {
    return;
  }
  this.line_of_credit_table_.insertOrUpdateRecord(msg, 0);
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
