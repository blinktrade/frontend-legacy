goog.provide('bitex.view.AdminView');
goog.require('bitex.view.View');

goog.require('bitex.ui.Customers');
goog.require('bitex.ui.DepositList');

goog.require('bitex.ui.WithdrawList');
goog.require('bitex.ui.WithdrawMethods');
goog.require('bitex.ui.WithdrawMethodEditor');


goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.events.EventType');
goog.require('goog.object');
goog.require('goog.string');
goog.require('goog.ui.Component.EventType');
goog.require('goog.ui.Tab');
goog.require('goog.ui.TabBar');
goog.require('bootstrap3.Tabs');

goog.require('bitex.templates');


/**
 * @param {*} app
 * @param {goog.dom.DomHelper=} opt_domHelper
 * @constructor
 * @extends {bitex.view.View}
 */
bitex.view.AdminView = function(app, opt_domHelper) {
  bitex.view.View.call(this, app, opt_domHelper);

  this.request_id_customer_ = null;
  this.request_id_deposits_ = null;
  this.request_id_withdraw_ = null;
};
goog.inherits(bitex.view.AdminView, bitex.view.View);

bitex.view.AdminView.prototype.enterView = function() {
  goog.base(this, 'enterView');
  this.recreateComponents_();

  var tabs = new bootstrap3.Tabs();
  tabs.decorate(goog.dom.getElement('admin-tabs'));

  this.toggleSidebar_(false);
};

/**
 * @const
 * @type {string}
 * @private
 */
bitex.view.AdminView.prototype.CLASS_CONTAINER_IN  = 'col-md-10';

/**
 * @const
 * @type {string}
 * @private
 */
bitex.view.AdminView.prototype.CLASS_CONTAINER_OUT = 'col-md-8';

/**
 * @type {bitex.ui.Customers}
 */
bitex.view.AdminView.prototype.customers_table_;

/**
 * @type {bitex.ui.DepositList}
 */
bitex.view.AdminView.prototype.deposit_list_table_;

/**
 * @return {number}
 */
bitex.view.AdminView.prototype.getAmount = function() {
  return this.amount_;
};

/**
 * @return {number}
 */
bitex.view.AdminView.prototype.getDepositMethodID = function() {
  return this.method_;
};

/**
 * @return {string}
 */
bitex.view.AdminView.prototype.getCurrency = function() {
  return this.currency_;
};

/**
 * @return {String}
 */
bitex.view.AdminView.prototype.getDepositAction = function() {
  return this.action_;
};

/**
 * @return {Object}
 */
bitex.view.AdminView.prototype.getDepositData = function() {
  return this.data_;
};

/**
 * @return {Object}
 */
bitex.view.AdminView.prototype.getQrData = function() {
  return this.qr_data_;
};

/**
 * @return {Object}
 */
bitex.view.AdminView.prototype.getQrDataVerb = function() {
  return this.qr_data_verb_;
};

/**
 * @return {Object}
 */
bitex.view.AdminView.prototype.getReceiptData = function() {
  return this.receipt_data_;
};

// WITHDRAW
/**
 * @type {bitex.ui.WithdrawList}
 */
bitex.view.AdminView.prototype.withdraw_list_table_;

/**
 * @type {string}
 */
bitex.view.AdminView.prototype.withdraw_action_;

/**
 * @type {bitex.ui.WithdrawMethods}
 */
bitex.view.AdminView.prototype.withdraw_methods;

/**
 * @type {string}
 */
bitex.view.AdminView.prototype.confirmation_token_;

/**
 * @type {number}
 */
bitex.view.AdminView.prototype.amount_;

/**
 * @type {string}
 */
bitex.view.AdminView.prototype.currency_;

/**
 * @type {string}
 */
bitex.view.AdminView.prototype.method_;

/**
 * @type {Object}
 */
bitex.view.AdminView.prototype.data_;

/**
 * @type {Object}
 */
bitex.view.AdminView.prototype.qr_data_;

/**
 * @type {string}
 */
bitex.view.AdminView.prototype.qr_data_verb_;

bitex.view.AdminView.prototype.exitView = function() {
  goog.base(this, 'exitView');
  this.destroyComponents_();

  this.toggleSidebar_(true);
};

bitex.view.AdminView.prototype.enterDocument = function() {
  goog.base(this, 'enterDocument');
};

bitex.view.AdminView.prototype.recreateComponents_ = function() {
  this.getCustomers();
  this.getDepositsRequests();
  this.getWithdrawRequests();
  this.getWithdrawMethods();
};

bitex.view.AdminView.prototype.destroyComponents_ = function() {
  this.destroyCustomers();
  this.destroyDepositsRequests();
  this.destroyWithdrawRequests();
  this.destroyWithdrawMethods();
};


bitex.view.AdminView.prototype.toggleSidebar_ = function(enable) {
  var sidebar = goog.dom.getElement('sidebar_remittances');
  var content = goog.dom.getElement('sidebar_content');

  var container_in  = enable ? this.CLASS_CONTAINER_IN  : this.CLASS_CONTAINER_OUT;
  var container_out = enable ? this.CLASS_CONTAINER_OUT : this.CLASS_CONTAINER_IN;

  if(goog.isDefAndNotNull(sidebar) && goog.isDefAndNotNull(content)) {
    goog.dom.classes.swap(content, container_in, container_out);
    goog.dom.classes.toggle(sidebar, 'bitex-hide-if-admin-view');
  }
};

bitex.view.AdminView.prototype.destroyCustomers = function() {
  var handler = this.getHandler();

  if (goog.isDefAndNotNull(this.customers_table_)) {

    handler.unlisten(this.customers_table_,
                     bitex.ui.DataGrid.EventType.REQUEST_DATA,
                     this.onCustomerListTableRequestData_);

    handler.unlisten(this.getApplication().getBitexConnection(),
                     bitex.api.BitEx.EventType.CUSTOMER_LIST_RESPONSE + '.' + this.request_id_customer_,
                     this.onCustomerListReponse_);
  }

  goog.dom.removeChildren(goog.dom.getElement('admin_customers'));

  this.customers_table_ = null;
  this.request_id_customer_ = null;
};

bitex.view.AdminView.prototype.getCustomers = function() {
  var handler = this.getHandler();

  if (goog.isDefAndNotNull(this.customers_table_)) {
    this.customers_table_.reload();
    return;
  }

  this.request_id_customer_ = parseInt(1e7 * Math.random(), 10);


  this.customers_table_ = new bitex.ui.Customers();


  handler.listen(this.customers_table_,
                 bitex.ui.DataGrid.EventType.REQUEST_DATA,
                 this.onCustomerListTableRequestData_);

  handler.listen(this.getApplication().getBitexConnection(),
                 bitex.api.BitEx.EventType.CUSTOMER_LIST_RESPONSE + '.' + this.request_id_customer_,
                 this.onCustomerListReponse_);

  handler.listen(this.customers_table_,
                 bitex.ui.Customers.EventType.DETAIL,
                 this.onUserDetailsClick_);

  this.customers_table_.render(goog.dom.getElement('admin_customers'));
};


bitex.view.AdminView.prototype.destroyDepositsRequests = function() {

  var handler = this.getHandler();
  var model = this.getApplication().getModel();

  if (goog.isDefAndNotNull(this.deposit_button_group_)) {
    this.deposit_button_group_.dispose(true);
  }

  if (goog.isDefAndNotNull(this.deposit_list_table_)) {

    handler.unlisten(this.deposit_list_table_,
                     bitex.ui.DataGrid.EventType.REQUEST_DATA,
                     this.onDepositListTableRequestData_);

    handler.unlisten(this.getApplication().getBitexConnection(),
                     bitex.api.BitEx.EventType.DEPOSIT_LIST_RESPONSE  + '.' + this.request_id_deposits_,
                     this.onDepositListReponse_);


    handler.unlisten(this.getApplication().getBitexConnection(),
                     bitex.api.BitEx.EventType.DEPOSIT_REFRESH + '.' + model.get('UserID'),
                     this.onDepositRefresh_);

    handler.unlisten(this.deposit_list_table_.getElement(),
                     goog.events.EventType.CLICK,
                     this.onDepositListTableClick_);
  }

  goog.dom.removeChildren(goog.dom.getElement('admin_deposit_requests'));
  this.deposit_list_table_ = null;
  this.request_id_deposits_ = null;

}

bitex.view.AdminView.prototype.getDepositsRequests = function() {
  var handler = this.getHandler();
  var model = this.getApplication().getModel();
  var profile = model.get('Profile');

  this.request_id_deposits_ = parseInt(1e7 * Math.random(), 10);

  this.deposit_list_table_ = new bitex.ui.DepositList(profile['CryptoCurrencies'],
                                                      true,
                                                      true,
                                                      this.getApplication().getRestURL());

  handler.listen(this.deposit_list_table_,
                 bitex.ui.DataGrid.EventType.REQUEST_DATA,
                 this.onDepositListTableRequestData_);

  handler.listen(this.getApplication().getBitexConnection(),
                 bitex.api.BitEx.EventType.DEPOSIT_LIST_RESPONSE + '.' + this.request_id_deposits_,
                 this.onDepositListReponse_);

  handler.listen(this.getApplication().getBitexConnection(),
                 bitex.api.BitEx.EventType.DEPOSIT_REFRESH + '.' + model.get('UserID'),
                 this.onDepositRefresh_);


  this.deposit_list_table_.render(goog.dom.getElement('admin_deposit_requests'));

  this.deposit_list_table_.setColumnFormatter('Value', this.valuePriceFormatter_, this);

  handler.listen(this.deposit_list_table_.getElement(),
                 goog.events.EventType.CLICK,
                 this.onDepositListTableClick_);
};

bitex.view.AdminView.prototype.destroyWithdrawRequests = function() {
  var handler = this.getHandler();
  var model = this.getApplication().getModel();

  if (goog.isDefAndNotNull(this.withdraw_list_table_)) {

    handler.unlisten(this.withdraw_list_table_,
                     bitex.ui.DataGrid.EventType.REQUEST_DATA,
                     this.onWithdrawListTableRequestData_);

    handler.unlisten(this.getApplication().getBitexConnection(),
                     bitex.api.BitEx.EventType.WITHDRAW_LIST_RESPONSE,
                     this.onWithdrawListReponse_);


    handler.unlisten(this.getApplication().getBitexConnection(),
                     bitex.api.BitEx.EventType.WITHDRAW_REFRESH + '.' + model.get('UserID'),
                     this.onWithdrawRefresh_);

    handler.unlisten(this.withdraw_list_table_.getElement(),
                     goog.events.EventType.CLICK,
                     this.onWithdrawListTableClick_);

    handler.unlisten(this.withdraw_list_table_,
                     bitex.ui.WithdrawList.EventType.KYC,
                     this.onUserKYC_);

    handler.unlisten(this.withdraw_list_table_,
                     bitex.ui.WithdrawList.EventType.CANCEL,
                     this.BrokerCancelWithdraw_);

    handler.unlisten(this.withdraw_list_table_,
                     bitex.ui.WithdrawList.EventType.USER_CANCEL,
                     this.onUserCancelWithdraw_);

    handler.unlisten(this.withdraw_list_table_,
                     bitex.ui.WithdrawList.EventType.REDO,
                     this.onUserRedoWithdraw_);

    handler.unlisten(this.withdraw_list_table_,
                     bitex.ui.WithdrawList.EventType.PROGRESS,
                     this.onUserSetWithdrawInProgress_);

    handler.unlisten(this.withdraw_list_table_,
                     bitex.ui.WithdrawList.EventType.COMPLETE,
                     this.onUserSetWithdrawComplete_);

  handler.unlisten(this.withdraw_list_table_,
                 bitex.ui.WithdrawList.EventType.COMMENT,
                 this.onUserComment_);

    goog.dom.removeChildren(goog.dom.getElement('admin_withdraw_requests'));
  }

  this.withdraw_list_table_ = null;
  this.request_id_withdraw_ = null;
};

bitex.view.AdminView.prototype.getWithdrawRequests = function() {

  var handler = this.getHandler();
  var model = this.getApplication().getModel();

  this.request_id_withdraw_ = parseInt(1e7 * Math.random() , 10);

  var currency_method_description_obj = {};
  var broker = model.get('Broker');
  broker = model.get('Profile');
  broker = goog.array.find(model.get('BrokerList'), function(broker_obj) {
    if (broker_obj['BrokerID'] ==  model.get('UserID')) {
      return true;
    }
  });

  goog.object.forEach(broker['WithdrawStructure'], function(method_list, currency){
    currency_method_description_obj[currency] = {};
    goog.array.forEach(method_list, function(method) {
      currency_method_description_obj[currency][method['method']] = method['description'];
    });
  });

  this.withdraw_list_table_ = new bitex.ui.WithdrawList(currency_method_description_obj, true, true);

  handler.listen(this.withdraw_list_table_,
                 bitex.ui.DataGrid.EventType.REQUEST_DATA,
                 this.onWithdrawListTableRequestData_);

  handler.listen(this.getApplication().getBitexConnection(),
                 bitex.api.BitEx.EventType.WITHDRAW_LIST_RESPONSE + '.' + this.request_id_withdraw_,
                 this.onWithdrawListReponse_);

  handler.listen(this.getApplication().getBitexConnection(),
                 bitex.api.BitEx.EventType.WITHDRAW_REFRESH + '.' + model.get('UserID'),
                 this.onWithdrawRefresh_);

  handler.listen(this.withdraw_list_table_,
                 bitex.ui.WithdrawList.EventType.KYC,
                 this.onUserKYC_);

  handler.listen(this.withdraw_list_table_,
                 bitex.ui.WithdrawList.EventType.CANCEL,
                 this.onBrokerCancelWithdraw_);

  handler.listen(this.withdraw_list_table_,
                 bitex.ui.WithdrawList.EventType.USER_CANCEL,
                 this.onUserCancelWithdraw_);

  handler.listen(this.withdraw_list_table_,
                 bitex.ui.WithdrawList.EventType.REDO,
                 this.onUserRedoWithdraw_);

  handler.listen(this.withdraw_list_table_,
                 bitex.ui.WithdrawList.EventType.PROGRESS,
                 this.onUserSetWithdrawInProgress_);

  handler.listen(this.withdraw_list_table_,
                 bitex.ui.WithdrawList.EventType.COMPLETE,
                 this.onUserSetWithdrawComplete_);

  handler.listen(this.withdraw_list_table_,
                 bitex.ui.WithdrawList.EventType.COMMENT,
                 this.onUserComment_);


  this.withdraw_list_table_.render(goog.dom.getElement('admin_withdraw_requests'));

  this.withdraw_list_table_.setColumnFormatter('Amount', this.priceFormatter_, this);

  handler.listen(this.withdraw_list_table_.getElement(),
                 goog.events.EventType.CLICK,
                 this.onWithdrawListTableClick_);

};

/**
 * @param {goog.events.Event} e
 * @private
 */
bitex.view.AdminView.prototype.onCustomerListTableRequestData_ = function(e) {
  var page = e.options['Page'];
  var limit = e.options['Limit'];
  var filter = e.options['Filter'];

  var status = [ 0, 1, 2, 3, 4, 5];

  if (goog.isDefAndNotNull(filter)) {
    goog.array.forEach(filter, function(f, idx_filter){
      var idx_status = goog.array.indexOf(status, parseInt(f, 10));
      if (idx_status >= 0) {
        status = [parseInt(f)];
        goog.array.removeAt(filter, idx_filter);
        return true;
      }
    }, this);

    if (filter.length == 0) {
      filter = undefined;
    }
  }

  var conn = this.getApplication().getBitexConnection();
  conn.requestCustomerList(this.request_id_customer_, undefined, undefined, filter, page, limit, status);
};

/**
 * @param {goog.events.Event} e
 * @private
 */
bitex.view.AdminView.prototype.onCustomerListReponse_ = function(e) {
  if (!goog.isDefAndNotNull(this.customers_table_)) {
    return;
  }

  var msg = e.data;
  this.customers_table_.setResultSet(msg['CustomerListGrp'], msg['Columns']);
};


/**
 * @param {goog.events.Event} e
 * @private
 */
bitex.view.AdminView.prototype.onUserDetailsClick_ = function(e) {
  var data = e.target.getSelectedCustomer();
  this.getApplication().getModel().set('SelectedCustomer', data );
  this.getApplication().setView('account_overview/' + data['Username'] + '/');
};


/**
 * @param {goog.events.Event} e
 */
bitex.view.AdminView.prototype.onDepositListTableClick_ = function(e) {
  var element = e.target;
  if (element.tagName  === goog.dom.TagName.I) {
    element = goog.dom.getParentElement(element);
  }

  var data_action = element.getAttribute('data-action');
  if (goog.isDefAndNotNull(data_action)) {
    e.preventDefault();
    e.stopPropagation();

    this.action_ = data_action;
    this.data_ = goog.json.parse(element.getAttribute('data-row'));

    switch(data_action) {
      case 'SHOW_QR':
        this.qr_data_ = {
          'Wallet': this.data_['Data']['InputAddress'],
          'Currency': this.data_['Currency']
        };
        this.qr_data_verb_ = 'DEPOSIT';

        this.dispatchEvent(bitex.view.View.EventType.SHOW_QR);
        break;
      case 'SHOW_RECEIPT':
        this.receipt_data_ = goog.object.unsafeClone(this.data_['Data']);
        this.dispatchEvent(bitex.view.View.EventType.SHOW_RECEIPT);
        break;
      case 'UPLOAD':
        this.dispatchEvent(bitex.view.View.EventType.UPLOAD_RECEIPT);
        break;
      case 'KYC':
        this.dispatchEvent(bitex.view.View.EventType.SHOW_KYC);
      case 'CANCEL':
      case 'PROGRESS':
      case 'COMPLETE':
        this.dispatchEvent(bitex.view.View.EventType.PROCESS_DEPOSIT);
        break;
      case 'INSTANTANEOUS':
        this.dispatchEvent(bitex.view.View.EventType.INSTANTANEOUS_DEPOSIT);
        break;
    }
  }
};

/**
 * @param {*} value
 * @param {Object} rowSet
 */
bitex.view.AdminView.prototype.valuePriceFormatter_ = function(value, rowSet) {
  var paid_value  = rowSet['PaidValue'];
  var priceCurrency = rowSet['Currency'];
  var currency_description = this.getApplication().getCurrencyDescription(priceCurrency);
  var formatted_value =  this.getApplication().formatCurrency(value/1e8, priceCurrency);

  if (value === 0) {
    if (paid_value  === 0){
      return '-';
    }
    return goog.dom.createDom('abbr',
                              {'title': currency_description },
                              this.getApplication().formatCurrency(paid_value/1e8, priceCurrency));

  } else if (paid_value >0 && paid_value != value) {
    var formatted_paid_value =  this.getApplication().formatCurrency(paid_value/1e8, priceCurrency);

    /**
     * @desc value abbrev title when paid value differs from declared value
     */
    var MSG_DEPOSIT_DIFFERENT_DECLARED_PAID_VALUE_ADMIN =
        goog.getMsg('declared / paid in {$currencydesc}' , { 'currencydesc' : currency_description});

    return goog.dom.createDom('abbr', {'title': MSG_DEPOSIT_DIFFERENT_DECLARED_PAID_VALUE_ADMIN  },
                              formatted_value + ' / ' + formatted_paid_value );

  } else {
    return goog.dom.createDom('abbr', {'title': currency_description }, formatted_value );
  }
};

/**
 * @param {goog.events.Event} e
 */
bitex.view.AdminView.prototype.onDepositListTableRequestData_ = function(e) {
  var page = e.options['Page'];
  var limit = e.options['Limit'];
  var filter = e.options['Filter'];

  var conn = this.getApplication().getBitexConnection();

  var model = this.getApplication().getModel();
  var clientID = model.get('UserID');

  var status = ['0', '1', '2', '4', '8'];
  if (goog.isDefAndNotNull(filter)) {
    goog.array.forEach(filter, function(f, idx_filter){
      var idx_status = goog.array.indexOf(status, f) ;
      if (idx_status >= 0) {
        status = [ f ] ;
        goog.array.removeAt(filter, idx_filter);
        return true;
      }
    }, this);
  }

  conn.requestDepositList(this.request_id_deposits_,    // opt_requestId
                          page,                         // opt_page
                          limit,                        // opt_limit
                          status,                       // opt_status,
                          undefined,                    // opt_clientID
                          filter);                      // opt_filter
};

/**
 * @param {goog.events.Event} e
 */
bitex.view.AdminView.prototype.onDepositRefresh_ = function(e) {
  var msg = e.data;

  if (!goog.isDefAndNotNull(this.deposit_list_table_)) {
    return;
  }
  this.deposit_list_table_.insertOrUpdateRecord(msg, 0);
};

/**
 * @param {goog.events.Event} e
 */
bitex.view.AdminView.prototype.onDepositListReponse_ = function(e) {
  if (!goog.isDefAndNotNull(this.deposit_list_table_)) {
    return
  }

  var msg = e.data;

  this.deposit_list_table_.setResultSet(msg['DepositListGrp'], msg['Columns']);
};

/**
 * @return {Object}
 */
bitex.view.AdminView.prototype.getData = function() {
  return this.data_;
};

/**
 * @return {Object}
 */
bitex.view.AdminView.prototype.getWithdrawData = function() {
  return this.data_;
};


// WITHDRAW

/**
 * @param {goog.events.Event} e
 */
bitex.view.AdminView.prototype.onWithdrawListTableRequestData_ = function(e) {
  var page = e.options['Page'];
  var limit = e.options['Limit'];
  var filter = e.options['Filter'];

  var conn = this.getApplication().getBitexConnection();

  var model = this.getApplication().getModel();

  var status = ['1', '2', '4', '8'];
  if (goog.isDefAndNotNull(filter)) {
    goog.array.forEach(filter, function(f, idx_filter){
      var idx_status = goog.array.indexOf(status, f) ;
      if (idx_status >= 0) {
        status = [ f ] ;
        goog.array.removeAt(filter, idx_filter);
        return true;
      }
    }, this);
  }

  conn.requestWithdrawList(this.request_id_withdraw_,
                           page,
                           limit,
                           status,
                           undefined,
                           filter);
};

/**
 * @param {goog.events.Event} e
 * @private
 */
bitex.view.AdminView.prototype.onBrokerCancelWithdraw_ = function(e) {
  this.withdraw_action_ = 'CANCEL';
  this.data_ = this.withdraw_list_table_.getWithdrawData();
  this.dispatchEvent(bitex.view.View.EventType.PROCESS_WITHDRAW);
};

/**
 * @param {goog.events.Event} e
 * @private
 */
bitex.view.AdminView.prototype.onUserCancelWithdraw_ = function(e) {
  this.withdraw_action_ = 'USER_CANCEL';
  this.data_ = this.withdraw_list_table_.getWithdrawData();
  this.dispatchEvent(bitex.view.View.EventType.USER_CANCEL_WITHDRAW);
};

/**
 * @return {string}
 */
bitex.view.AdminView.prototype.getWithdrawSelectedCurrency = function() {
  return this.data_['Currency'];
};

/**
 *
 * @returns {Object}
 */
bitex.view.AdminView.prototype.getWithdrawUserData = function() {
  return this.data_;
};

/**
 * @param {goog.events.Event} e
 * @private
 */
bitex.view.AdminView.prototype.onUserRedoWithdraw_ = function(e) {
  this.data_ = this.withdraw_list_table_.getWithdrawData();
  this.dispatchEvent(bitex.view.View.EventType.REQUEST_WITHDRAW);
};


/**
 * @param {goog.events.Event} e
 * @private
 */
bitex.view.AdminView.prototype.onUserKYC_ = function(e) {
  this.data_ = this.withdraw_list_table_.getWithdrawData();
  this.dispatchEvent(bitex.view.View.EventType.SHOW_KYC);
};


/**
 * @param {goog.events.Event} e
 * @private
 */
bitex.view.AdminView.prototype.onUserSetWithdrawInProgress_ = function(e) {
  this.withdraw_action_ = 'PROGRESS';
  this.data_ = this.withdraw_list_table_.getWithdrawData();
  this.dispatchEvent(bitex.view.View.EventType.PROCESS_WITHDRAW);

};

/**
 * @param {goog.events.Event} e
 * @private
 */
bitex.view.AdminView.prototype.onUserSetWithdrawComplete_ = function(e) {
  this.withdraw_action_ = 'COMPLETE';
  this.data_ = this.withdraw_list_table_.getWithdrawData();
  this.dispatchEvent(bitex.view.View.EventType.PROCESS_WITHDRAW);
};

/**
 * @param {goog.events.Event} e
 * @private
 */
bitex.view.AdminView.prototype.onUserComment_ = function(e) {
  this.withdraw_action_ = 'COMMENT';
  this.data_ = this.withdraw_list_table_.getWithdrawData();
  this.dispatchEvent(bitex.view.View.EventType.USER_COMMENT);
};


/**
 * @param {goog.events.Event} e
 */
bitex.view.AdminView.prototype.onWithdrawRefresh_ = function(e) {
  var msg = e.data;

  if (!goog.isDefAndNotNull(this.withdraw_list_table_)) {
    return;
  }
  this.withdraw_list_table_.insertOrUpdateRecord(msg, 0);
};

/**
 * @param {goog.events.Event} e
 */
bitex.view.AdminView.prototype.onWithdrawListReponse_ = function(e) {
  if (!goog.isDefAndNotNull(this.withdraw_list_table_)) {
    return
  }

  var msg = e.data;

  this.withdraw_list_table_.setResultSet(msg['WithdrawListGrp'], msg['Columns']);
};

/**
 * @param {goog.events.Event} e
 */
bitex.view.AdminView.prototype.onWithdrawListTableClick_ = function(e) {
  var element = e.target;
  if (element.tagName  === goog.dom.TagName.I) {
    element = goog.dom.getParentElement(element);
  }

  var data_action = element.getAttribute('data-action');
  if (goog.isDefAndNotNull(data_action)) {
    e.preventDefault();
    e.stopPropagation();

    var data = goog.json.parse(element.getAttribute('data-row'));

    switch( data_action ) {
      case 'SHOW_QR':
        this.qr_data_ = {
          'Wallet': data['Data']['Wallet'],
          'Currency': data['Currency']
        };
        this.qr_data_verb_ = 'WITHDRAW';
        this.dispatchEvent(bitex.view.View.EventType.SHOW_QR);
        break;
    }
  }
};

/**
 * @param {*} value
 * @param {Object} rowSet
 */
bitex.view.AdminView.prototype.priceFormatter_ = function(value, rowSet) {
  var priceCurrency = rowSet['Currency'];
  var currency_description = this.getApplication().getCurrencyDescription(priceCurrency );

  if (value === 0) {
    return '-'
  }
  return goog.dom.createDom('abbr',
                            {'title': currency_description },
                            this.getApplication().formatCurrency(value/1e8, priceCurrency) );
};

bitex.view.AdminView.prototype.destroyWithdrawMethods = function() {
  var handler = this.getHandler();

  handler.unlisten(this.withdraw_methods, bitex.ui.WithdrawMethods.EventType.CHANGE, this.onChangeWithdrawStructure_);
  handler.unlisten(this.withdraw_methods, bitex.ui.WithdrawMethods.EventType.SAVE, this.onSaveWithdrawStructure_);
  handler.unlisten(this.withdraw_methods, bitex.ui.WithdrawMethods.EventType.CANCEL, this.onCancelWithdrawStructure_);
  handler.unlisten(this.withdraw_methods, bitex.ui.WithdrawMethods.EventType.VALIDATION_ERROR, this.onValidationErrorWithdrawStructure_);

  goog.dom.removeChildren(goog.dom.getElement('admin_withdraw_methods'));
};

bitex.view.AdminView.prototype.getWithdrawMethods = function() {
  var model = this.getApplication().getModel();
  var handler = this.getHandler();

  this.withdraw_methods = new bitex.ui.WithdrawMethods(
    goog.bind(this.getApplication().formatCurrency, this.getApplication()),
    goog.bind(this.getApplication().getCurrencyDescription, this.getApplication()));

  var broker_currencies = [];
  goog.array.forEach(model.get('Profile')['BrokerCurrencies'], function(currency) {
    var obj = {
      'code': currency,
      'description': this.getApplication().getCurrencyDescription(currency)
    };
    broker_currencies.push(obj);
  }, this);

  var withdraw_methods_model = goog.object.unsafeClone(model.get('Profile')['WithdrawStructure']);
  this.withdraw_methods.setModel({
    'withdraw_methods': withdraw_methods_model,
    'currencies': broker_currencies
  });

  this.withdraw_methods.render(goog.dom.getElement('admin_withdraw_methods'));
  this.withdraw_methods.enterDocument();

  handler.listen(this.withdraw_methods, bitex.ui.WithdrawMethods.EventType.CHANGE, this.onChangeWithdrawStructure_);
  handler.listen(this.withdraw_methods, bitex.ui.WithdrawMethods.EventType.SAVE, this.onSaveWithdrawStructure_);
  handler.listen(this.withdraw_methods, bitex.ui.WithdrawMethods.EventType.CANCEL, this.onCancelWithdrawStructure_);
  handler.listen(this.withdraw_methods, bitex.ui.WithdrawMethods.EventType.VALIDATION_ERROR, this.onValidationErrorWithdrawStructure_);
};


/**
 * @param {goog.events.Event} e
 * @private
 */
bitex.view.AdminView.prototype.onChangeWithdrawStructure_ = function(e) {
  var withdraw_structure = e.target.getWithdrawStructure();
};

/**
 * @param {goog.events.Event} e
 * @private
 */
bitex.view.AdminView.prototype.onSaveWithdrawStructure_ = function(e) {
  var withdraw_structure = e.target.getWithdrawStructure();

  var withdraw_method_component = e.target;
  withdraw_method_component.setSavingStatus(true);

  var conn = this.getApplication().getBitexConnection();
  var requestId = conn.updateUserProfile({ 'WithdrawStructure': withdraw_structure });
  var handler = this.getHandler();
  handler.listenOnce(conn, bitex.api.BitEx.EventType.UPDATE_PROFILE_RESPONSE + '.' + requestId, function(e){
    withdraw_method_component.setDirty(false);
    withdraw_method_component.setSavingStatus(false);
  });
};

/**
 * @param {goog.events.Event} e
 * @private
 */
bitex.view.AdminView.prototype.onValidationErrorWithdrawStructure_ = function(e) {
  var error = e.target.getLastError();
  this.getApplication().showNotification('error', error);
};


/**
 * @param {goog.events.Event} e
 * @private
 */
bitex.view.AdminView.prototype.onCancelWithdrawStructure_ = function(e) {
  var model = this.getApplication().getModel();
  var broker_currencies = [];
  goog.array.forEach(model.get('Profile')['BrokerCurrencies'], function(currency) {
    var obj = {
      'code': currency,
      'description': this.getApplication().getCurrencyDescription(currency)
    };
    broker_currencies.push(obj);
  }, this );

  var withdraw_methods_model = goog.object.unsafeClone(model.get('Profile')['WithdrawStructure']);
  e.target.setModel({ 'withdraw_methods':withdraw_methods_model, 'currencies':broker_currencies });
  e.target.updateWindow();
  e.target.setDirty(false);
};
