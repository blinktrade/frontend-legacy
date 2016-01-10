goog.provide('bitex.view.SideBarView');
goog.provide('bitex.view.SideBarView.EventType');
goog.require('bitex.view.View');

goog.require('bitex.model.Model');
goog.require('goog.style');
goog.require('goog.string');
goog.require('goog.object');

goog.require('bitex.ui.RemittanceBox');

goog.require('expression_evaluator.Parser');
goog.require('bitex.view.SideBarView.templates')

/**
 * @param {*} app
 * @param {goog.dom.DomHelper=} opt_domHelper
 * @constructor
 * @extends {goog.ui.Component}
 */
bitex.view.SideBarView = function(app, opt_domHelper) {
  bitex.view.View.call(this, app, opt_domHelper);
};
goog.inherits(bitex.view.SideBarView, bitex.view.View);

/**
 * The events fired
 * @enum {string} The event types
 */
bitex.view.SideBarView.EventType = {
  CHANGE_MARKET: 'changed_market'
};

/**
 * @type {string}
 */
bitex.view.SideBarView.prototype.currency_;

/**
 * @type {number}
 */
bitex.view.MarketView.prototype.market_data_subscription_id_;

/**
 * @type {Array.<string>}
 */
bitex.view.MarketView.prototype.market_data_subscription_symbol_;

/**
 * @type {bitex.ui.RemittanceBox}
 */
bitex.view.SideBarView.prototype.remittance_box_;

/**
 * @param {goog.events.Event} e
 */
bitex.view.SideBarView.prototype.onSelectedBroker_ = function(e){
  var model = this.getApplication().getModel();
  var selectedBrokerID = model.get('SelectedBrokerID');
  if (goog.isDefAndNotNull(selectedBrokerID)) {
    var element_id = 'id_account_summary_' + selectedBrokerID;
    var element =  goog.dom.getElement(element_id);
    var broker_elements = goog.dom.getElementsByClass('account-summary-broker');

    if (goog.isDefAndNotNull(broker_elements)) {
      goog.array.forEach(broker_elements, function(broker_element) {
        goog.dom.classes.remove(broker_element, 'account-summary-broker-selected');
      }, this);
    }

    if (goog.isDefAndNotNull(element)) {
      goog.dom.classes.add(element, 'account-summary-broker-selected');
    }
  }
};

/**
 * @param {Element} element Element to decorate.
 * @protected
 */
bitex.view.SideBarView.prototype.decorateInternal = function(element) {
  this.setElementInternal(element);

};

bitex.view.SideBarView.prototype.enterDocument = function() {
  goog.base(this, 'enterDocument');
  var handler = this.getHandler();
  var app = this.getApplication();
  var model = this.getApplication().getModel();
  var conn = this.getApplication().getBitexConnection();
  this.market_data_subscription_id_ = parseInt( 1e7 * Math.random() , 10 );

  /**
   * @desc Portfolio caption on the accounts view
   */
  var MSG_MY_CUSTOMERS_ACCOUNT_PORTFOLIO_LABEL = goog.getMsg('PORTFOLIO');


  /**
   * @desc My customers account balance label
   */
  var MSG_MY_CUSTOMERS_ACCOUNT_BALANCE_LABEL = goog.getMsg('My customers');

  /**
   * @desc My account balance label
   */
  var MSG_MY_ACCOUNTS_BALANCE_LABEL = goog.getMsg('My account');


  handler.listen(model, bitex.model.Model.EventType.SET + 'SelectedBrokerID', this.onSelectedBroker_);

  handler.listen( model, bitex.model.Model.EventType.SET + 'UserLogged', function(){
    if (model.get('UserLogged')) {
      if (model.get('IsBroker')) {
        var broker_balance_model_key = 'Balance_' + model.get('UserID') +  '_' + model.get('UserID');
        handler.listenOnce( model, bitex.model.Model.EventType.SET + broker_balance_model_key, function(e){
          goog.dom.removeChildren( goog.dom.getElement("id_account_summary_content"));
          var account_boxes = [];
          account_boxes.push({
            'title': MSG_MY_CUSTOMERS_ACCOUNT_BALANCE_LABEL,
            'balances': []
          });

          goog.array.forEach(model.get('Profile')['BrokerCurrencies'], function(currency) {
            account_boxes[account_boxes.length-1]['balances'].push({
              'currency': currency,
              'currencyPattern': this.getApplication().getCurrencyHumanFormat(currency),
              'currencyPip': this.getApplication().getCurrencyPip(currency),
              'brokerID': model.get('Profile')['BrokerID'],
              'accountID': model.get('UserID'),
              'showDeposit': false,
              'showWithdraw': false
             });
          },this);

          goog.object.forEach(model.get('Profile')['AllowedMarkets'], function(market, symbol) {
            var currency = 'MMP_' + symbol;
            account_boxes[account_boxes.length-1]['balances'].push({
              'currency': currency,
              'currencyPattern': this.getApplication().getCurrencyHumanFormat(currency),
              'currencyPip': this.getApplication().getCurrencyPip(currency),
              'brokerID': model.get('Profile')['BrokerID'],
              'accountID': model.get('UserID'),
              'showDeposit': false,
              'showWithdraw': false
             });
          }, this);

          if (goog.isDefAndNotNull( model.get('Profile')['Accounts'] )) {
            goog.object.forEach( model.get('Profile')['Accounts'], function(account_data, account_name) {
              account_boxes.push({
                'title': account_name,
                'balances': []
              });

              goog.array.forEach(model.get('Profile')['BrokerCurrencies'], function(currency) {
                account_boxes[account_boxes.length-1]['balances'].push({
                  'currency': currency,
                  'currencyPattern': this.getApplication().getCurrencyHumanFormat(currency),
                  'currencyPip': this.getApplication().getCurrencyPip(currency),
                  'brokerID':  model.get('Profile')['BrokerID'],
                  'accountID': account_data[0],
                  'showDeposit': false,
                  'showWithdraw': false
                 });
              },this);
            }, this);
          }
          goog.soy.renderElement(goog.dom.getElement('id_account_summary_content'),
                                 bitex.view.SideBarView.templates.YourAccountSummary, {
                                  id: this.makeId('summary'),
                                  boxes: account_boxes
                                });
          model.updateDom();
        }, this);
      } else {
        var balance_model_key = 'Balance_' + model.get('Broker')['BrokerID'] +  '_' + model.get('UserID');
        handler.listenOnce( model, bitex.model.Model.EventType.SET + balance_model_key, function(e){
          goog.dom.removeChildren( goog.dom.getElement("id_account_summary_content"));

          var account_boxes = [];

          account_boxes.push({
            'title': MSG_MY_ACCOUNTS_BALANCE_LABEL,
            'balances': []
          });

          var broker_currencies = model.get('BrokerCurrencies');
          goog.object.forEach(model.get(balance_model_key), function(balance, currency) {
            currency_code = currency;
            var show_deposit = goog.array.contains(broker_currencies, currency);
            var currency_pattern = this.getApplication().getCurrencyHumanFormat(currency_code);

            account_boxes[account_boxes.length-1]['balances'].push({
              'currency': currency,
              'currencyPattern': currency_pattern,
              'currencyPip': this.getApplication().getCurrencyPip(currency_code),
              'brokerID': model.get('Broker')['BrokerID'],
              'accountID': model.get('UserID'),
              'showDeposit': show_deposit,
              'showWithdraw': show_deposit
             });

          }, this);

          goog.soy.renderElement(goog.dom.getElement('id_account_summary_content'),
                                 bitex.view.SideBarView.templates.YourAccountSummary, {
                                  id: this.makeId('summary'),
                                  boxes: account_boxes
                                });

          this.showPortfolioValue_();
          model.updateDom();
        }, this);
      }
    }
  }, this);

  var remittance_info = model.get('RemittanceBoxInfo');

  handler.listen( model,  bitex.model.Model.EventType.SET + 'SecurityList', function(e){
    var msg = model.get('SecurityList');

    this.market_data_subscription_symbol_ =  [];
    goog.array.forEach(model.get('SecurityList')['Instruments'], function(instrument_info) {
      this.market_data_subscription_symbol_.push(instrument_info['Symbol'] );
    }, this);


    goog.dom.removeChildren(goog.dom.getElement('id_instrument_1'));
    goog.array.forEach(msg['Instruments'], function( instrument) {
      if (instrument['Market'] == 'BLINK') {
        var el = goog.dom.createDom('option', {'value': instrument['Symbol'] }, instrument['Description']);
        goog.dom.appendChild( goog.dom.getElement('id_instrument_1'), el );
      }
    }, this);

    if (!goog.isDefAndNotNull(this.remittance_box_)) {
      var remittance_box_model = [];
      goog.object.forEach(remittance_info, function(remitttance_info_currency, currency){
        remittance_box_model.push([currency]);
        goog.array.forEach(remitttance_info_currency, function(remittance_data) {
          var data = [ remittance_data[0],
                       remittance_data[1],
                       this.getApplication().getCurrencyHumanFormat(remittance_data[1])];


          var data_field_formulas = [];
          goog.array.forEach(remittance_data, function(remittance_formula, idx){
            if (idx < 2) {
              return;
            }

            var formula = new expression_evaluator.Parser().parse(remittance_formula);
            data_field_formulas.push([remittance_formula, formula.variables().join(',')]);
          },this);
          data.push(data_field_formulas)
          remittance_box_model.push(data);
        }, this);
      }, this );

      var remittance_box_el = goog.dom.getElement("id_remittance_box");
      if (goog.isDefAndNotNull(remittance_box_el)) {
        this.remittance_box_ = new bitex.ui.RemittanceBox();
        this.remittance_box_.setModel(remittance_box_model);
        this.remittance_box_.render(remittance_box_el);
      }

    }

  },this);


  handler.listen( model,  bitex.model.Model.EventType.SET + 'AllowedMarkets', function(e) {
    var allowed_markets = model.get('AllowedMarkets');

    var allowed_markets_array = goog.object.getKeys(allowed_markets);
    if (allowed_markets_array.length > 0 ) {
      goog.dom.forms.setValue(goog.dom.getElement('id_instrument_1'), allowed_markets_array[0] );
      this.dispatchEvent(bitex.view.SideBarView.EventType.CHANGE_MARKET);

      if (goog.isDefAndNotNull(this.remittance_box_)) {
        var currency = this.getApplication().getPriceCurrencyFromSymbol(allowed_markets_array[0]);
        this.remittance_box_.setCurrentCurrency(currency);
      }
    }
  }, this);

  handler.listen(goog.dom.getElement('id_instrument_1'), goog.events.EventType.CHANGE  , function(e) {
    var symbol = this.getSymbol();
    var currency = this.getApplication().getPriceCurrencyFromSymbol(symbol);

    this.showPortfolioValue_(currency);

    this.dispatchEvent(bitex.view.SideBarView.EventType.CHANGE_MARKET);

    if (goog.isDefAndNotNull(this.remittance_box_)) {
      this.remittance_box_.setCurrentCurrency(currency);
    }
  }, this);

  /*
  handler.listen( this.getElement(), goog.events.EventType.CLICK, function(e){
    if (e.target.getAttribute('data-action') === 'withdraw' ) {
      this.currency_ = e.target.getAttribute('data-currency');
      this.dispatchEvent(bitex.view.View.EventType.REQUEST_WITHDRAW);
    } else if (e.target.getAttribute('data-action') === 'deposit' ) {
      this.currency_ = e.target.getAttribute('data-currency');
      this.dispatchEvent(bitex.view.View.EventType.DEPOSIT_REQUEST);
    }
  }, this);
  */
};

/**
 * @param {string=} opt_currency
 * @private
 */
bitex.view.SideBarView.prototype.showPortfolioValue_ = function(opt_currency) {
  var portfolio_currency = opt_currency;
  if (!goog.isDefAndNotNull(opt_currency)) {
    portfolio_currency = this.getApplication().getPriceCurrencyFromSymbol(this.getSymbol());
  }

  var appModel = this.getApplication().getModel();
  var portfolio_value_el =  goog.dom.getElement( this.makeId('summary_portfolio_value') );
  if (goog.isDefAndNotNull(portfolio_value_el)) {
    portfolio_value_el.innerHTML = '';
  }

  if (goog.isDefAndNotNull(portfolio_value_el)) {
    var variable_list = new goog.structs.Set();
    var formula_list = [];
    var balance_model_key = 'Balance_' + appModel.get('Broker')['BrokerID'] +  '_' + appModel.get('UserID');

    var balance_portfolio_currency_key = balance_model_key + '_' + portfolio_currency;
    var balance_portfolio_currency = appModel.get(balance_portfolio_currency_key);
    if (goog.isDefAndNotNull(balance_portfolio_currency)) {
      variable_list.add(balance_portfolio_currency_key);
      formula_list.push('(' + balance_portfolio_currency_key + ' / 100000000 )' );
    }


    var user_balances = appModel.get(balance_model_key);
    goog.object.forEach(user_balances, function(balance, balance_currency){
      if ( ! goog.string.endsWith(balance_currency, '_locked') &&
          balance_currency.length == 3 &&
          portfolio_currency != balance_currency) {

        if (this.getApplication().isCryptoCurrency(balance_currency)) {
          var portfolio_currency_exchange_ticker = 'BLINK_' + balance_currency + portfolio_currency + '_BEST_BID';
          variable_list.add(portfolio_currency_exchange_ticker);
          variable_list.add(balance_model_key + '_' + balance_currency);

          formula_list.push(
              '( (' + balance_model_key + '_' + balance_currency + ' / 100000000 ) * ' +
                '(' + portfolio_currency_exchange_ticker + ' / 100000000' + ') )');
        }  else {
          var currency_bitcoin_exchange_ticker = 'BLINK_BTC' + balance_currency + '_BEST_ASK';
          var portfolio_bitcoin_exchange_ticker = 'BLINK_BTC' + portfolio_currency + '_BEST_BID';
          var balance_currency_key = balance_model_key + '_' + balance_currency;

          variable_list.add(currency_bitcoin_exchange_ticker);
          variable_list.add(portfolio_bitcoin_exchange_ticker);
          variable_list.add(balance_currency_key);

          formula_list.push(
              '(' + balance_currency_key
              + ' / ' + currency_bitcoin_exchange_ticker
              + ' * ' + portfolio_bitcoin_exchange_ticker
              + ' / 100000000 )' );
        }
      }
    }, this);

    portfolio_value_el.innerHTML = bitex.view.SideBarView.templates.YourAccountPortfolioValue({
          desc: this.getApplication().getCurrencyDescription(portfolio_currency),
          pattern: this.getApplication().getCurrencyHumanFormat(portfolio_currency),
          variables: variable_list.getValues().join(','),
          formula:  formula_list.join(' + ')
        });
  }
  appModel.updateDom();

};

/**
 * @return {number}
 */
bitex.view.SideBarView.prototype.getSecSubscriptionId = function(){
  return this.market_data_subscription_id_;
};


/**
 * @return {Array.<string>}
 */
bitex.view.SideBarView.prototype.getSecurities = function(){
  return this.market_data_subscription_symbol_;
};

/**
 * @return {string}
 */
bitex.view.SideBarView.prototype.getSymbol = function() {
  return goog.dom.forms.getValue(goog.dom.getElement('id_instrument_1') );
};

