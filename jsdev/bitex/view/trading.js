goog.provide('bitex.view.TradingView');
goog.require('bitex.view.View');

goog.require('bitex.ui.SimpleOrderEntry');
goog.require('bitex.ui.OrderManager');

goog.require('bitex.templates');

/**
 * @param {*} app
 * @param {goog.dom.DomHelper=} opt_domHelper
 * @constructor
 * @extends {bitex.view.View}
 */
bitex.view.TradingView = function(app, opt_domHelper) {
  bitex.view.View.call(this, app, opt_domHelper);

  this.market_data_subscription_id_ = null;
  this.market_data_subscription_symbol_ = null;

  this.order_id_ = null;
  this.client_order_id = null;
  this.request_order_id_ = null;

  this.bids_ = [];
  this.asks_ = [];
};
goog.inherits(bitex.view.TradingView, bitex.view.View);

/**
 * @type {.Array<Object>}
 */
bitex.view.TradingView.prototype.bids_;

/**
 * @type {.Array<Object>}
 */
bitex.view.TradingView.prototype.asks_;


/**
 * @type {number}
 */
bitex.view.TradingView.prototype.market_data_subscription_id_;

/**
 * @type {string}
 */
bitex.view.TradingView.prototype.market_data_subscription_symbol_;

/**
 * @type {number}
 */
bitex.view.TradingView.prototype.order_id_;

/**
 * @type {number}
 */
bitex.view.TradingView.prototype.client_order_id;

/**
 * @type {bitex.ui.OrderManager}
 */
bitex.view.TradingView.prototype.order_manager_table_;

/**
 * @type {bitex.ui.SimpleOrderEntry}
 */
bitex.view.TradingView.prototype.bid_order_entry_;

/**
 * @type {bitex.ui.SimpleOrderEntry}
 */
bitex.view.TradingView.prototype.ask_order_entry_;

/**
 * @type {number}
 */
bitex.view.TradingView.prototype.request_order_id_;


bitex.view.TradingView.prototype.enterView = function() {
  goog.base(this, 'enterView');
  var model = this.getApplication().getModel();
  var selected_symbol = model.get('SelectedSymbol');
  if (goog.isDefAndNotNull(selected_symbol)) {
    this.recreateComponents_(selected_symbol);
  }
};

bitex.view.TradingView.prototype.exitView = function() {
  goog.base(this, 'exitView');
  this.destroyComponents_();
};


/**
 * @param {Element} element Element to decorate.
 * @protected
 */
bitex.view.TradingView.prototype.decorateInternal = function(element) {
  this.setElementInternal(element);
};


/**
 * @private
 */
bitex.view.TradingView.prototype.destroyComponents_ = function( ) {
  var handler = this.getHandler();

  if (goog.isDefAndNotNull(this.market_data_subscription_id_)) {
    var conn = this.getApplication().getBitexConnection() ;
    handler.unlisten( conn, bitex.api.BitEx.EventType.ORDER_BOOK_CLEAR + '.' + this.market_data_subscription_id_, this.onOBClear_);
    handler.unlisten( conn, bitex.api.BitEx.EventType.ORDER_BOOK_DELETE_ORDERS_THRU + '.' + this.market_data_subscription_id_, this.onOBDeleteOrdersThru_);
    handler.unlisten( conn, bitex.api.BitEx.EventType.ORDER_BOOK_DELETE_ORDER + '.' + this.market_data_subscription_id_, this.onOBDeleteOrder_);
    handler.unlisten( conn, bitex.api.BitEx.EventType.ORDER_BOOK_UPDATE_ORDER + '.' + this.market_data_subscription_id_, this.onOBUpdateOrder_);
    handler.unlisten( conn, bitex.api.BitEx.EventType.ORDER_BOOK_NEW_ORDER + '.' + this.market_data_subscription_id_, this.onOBNewOrder_);


    this.dispatchEvent(bitex.view.View.EventType.MARKET_DATA_UNSUBSCRIBE);
    this.market_data_subscription_id_ = null;
    this.market_data_subscription_symbol_ = null;
  }

  if (goog.isDefAndNotNull(this.bid_order_entry_ )) {
    this.bid_order_entry_.dispose();
  }

  if (goog.isDefAndNotNull(this.ask_order_entry_ )) {
    this.ask_order_entry_.dispose();
  }

  if (goog.isDefAndNotNull(this.order_manager_table_)) {

    handler.unlisten(this.getApplication().getBitexConnection(),
                     bitex.api.BitEx.EventType.EXECUTION_REPORT,
                     this.onExecutionReport_ );

    handler.unlisten(this.order_manager_table_,
                     bitex.ui.DataGrid.EventType.REQUEST_DATA,
                     this.onOrderManagerRequestData_);

    handler.unlisten(this.getApplication().getBitexConnection(),
                     bitex.api.BitEx.EventType.ORDER_LIST_RESPONSE + '.' + this.request_order_id_,
                     this.onOrderListResponse_);

  }
  goog.dom.removeChildren( goog.dom.getElement('trading_order_entry_content'));

  this.removeChildren(true);
  this.order_manager_table_ = null;
  this.request_order_id_ = null;
};

/**
 * @param {*} selected_symbol
 * @private
 */
bitex.view.TradingView.prototype.recreateComponents_ = function( selected_symbol ) {
  var handler = this.getHandler();
  var model = this.getApplication().getModel();

  if (this.market_data_subscription_symbol_ === selected_symbol.symbol) {
    return;
  }

  this.destroyComponents_();


  this.bid_order_entry_ = new bitex.ui.SimpleOrderEntry();
  this.bid_order_entry_.setModel( {
    username: model.get('UserID'),
    symbol: selected_symbol.symbol,
    crypto_currency_symbol: this.getApplication().getCurrencySign( selected_symbol.symbol.substr(0,3) ) ,
    crypto_currency_description: this.getApplication().getCurrencyDescription(selected_symbol.symbol.substr(0,3)),
    currency_symbol:this.getApplication().getCurrencySign( selected_symbol.symbol.substr(3) ) ,
    currency_description:this.getApplication().getCurrencyDescription(selected_symbol.symbol.substr(3)),
    side:'1',
    type:'2',
    client_id: model.get('UserID'),
    broker_id: model.get('BrokerID'),
    currency_code: selected_symbol.symbol.substr(3),
    currency_format:this.getApplication().getCurrencyHumanFormat(selected_symbol.symbol.substr(3)),
    crypto_currency_code: selected_symbol.symbol.substr(0,3),
    crypto_currency_format:this.getApplication().getCurrencyHumanFormat(selected_symbol.symbol.substr(0,3)),
    maker_fee: model.get('Broker')['TransactionFeeBuy'],
    taker_fee: model.get('Broker')['TakerTransactionFeeBuy'],
    formatted_maker_fee: model.get('Broker')['FormattedTransactionFeeBuy'],
    formatted_taker_fee: model.get('Broker')['FormattedTakerTransactionFeeBuy']
  });
  this.addChild(this.bid_order_entry_, true);


  this.ask_order_entry_ = new bitex.ui.SimpleOrderEntry();
  this.ask_order_entry_.setModel({
    username: model.get('UserID'),
    symbol: selected_symbol.symbol,
    crypto_currency_symbol: this.getApplication().getCurrencySign( selected_symbol.symbol.substr(0,3) ) ,
    crypto_currency_description: this.getApplication().getCurrencyDescription(selected_symbol.symbol.substr(0,3)),
    currency_symbol:this.getApplication().getCurrencySign( selected_symbol.symbol.substr(3) ) ,
    currency_description:this.getApplication().getCurrencyDescription(selected_symbol.symbol.substr(3)),
    side:'2',
    type:'2',
    client_id: model.get('UserID'),
    broker_id: model.get('BrokerID'),
    currency_code: selected_symbol.symbol.substr(3,3),
    currency_format:this.getApplication().getCurrencyHumanFormat(selected_symbol.symbol.substr(3)),
    crypto_currency_code: selected_symbol.symbol.substr(3,3),
    crypto_currency_format:this.getApplication().getCurrencyHumanFormat(selected_symbol.symbol.substr(3,3)),
    maker_fee: model.get('Broker')['TransactionFeeSell'],
    taker_fee: model.get('Broker')['TakerTransactionFeeSell'],
    formatted_maker_fee: model.get('Broker')['FormattedTransactionFeeSell'],
    formatted_taker_fee: model.get('Broker')['FormattedTakerTransactionFeeSell']
  });
  this.addChild(this.ask_order_entry_, true);


  handler.listen(this.bid_order_entry_, bitex.ui.SimpleOrderEntry.EventType.SUBMIT, this.onSimpleOrderAction_ );
  handler.listen(this.ask_order_entry_, bitex.ui.SimpleOrderEntry.EventType.SUBMIT, this.onSimpleOrderAction_ );


  this.request_order_id_ = parseInt( 1e7 * Math.random() , 10 );

  this.order_manager_table_ =  new bitex.ui.OrderManager('simple');

  handler.listen(this.getApplication().getBitexConnection(),
                 bitex.api.BitEx.EventType.EXECUTION_REPORT,
                 this.onExecutionReport_ );

  handler.listen(this.order_manager_table_,
                 bitex.ui.DataGrid.EventType.REQUEST_DATA,
                 this.onOrderManagerRequestData_);

  handler.listen(this.getApplication().getBitexConnection(),
                 bitex.api.BitEx.EventType.ORDER_LIST_RESPONSE + '.' + this.request_order_id_,
                 this.onOrderListResponse_);

  this.addChild(this.order_manager_table_, true);


  this.order_manager_table_.setColumnFormatter('Side', this.orderFormatter_ , this);
  this.order_manager_table_.setColumnFormatter('OrdStatus', bitex.util.simpleOrderStatusFormatter, this);
  this.order_manager_table_.setColumnFormatter('AvgPx', this.avgPriceFormatter_, this);
  this.order_manager_table_.setColumnFormatter('Volume', this.priceFormatter_, this);
  handler.listen(this.order_manager_table_.getElement(), goog.events.EventType.CLICK, this.onCancelOrder_ );


  this.market_data_subscription_id_ = parseInt( 1e7 * Math.random() , 10 );
  this.market_data_subscription_symbol_ = selected_symbol.symbol;


  var conn = this.getApplication().getBitexConnection() ;
  handler.listen( conn, bitex.api.BitEx.EventType.ORDER_BOOK_CLEAR + '.' + this.market_data_subscription_id_, this.onOBClear_);
  handler.listen( conn, bitex.api.BitEx.EventType.ORDER_BOOK_DELETE_ORDERS_THRU + '.' + this.market_data_subscription_id_, this.onOBDeleteOrdersThru_);
  handler.listen( conn, bitex.api.BitEx.EventType.ORDER_BOOK_DELETE_ORDER + '.' + this.market_data_subscription_id_, this.onOBDeleteOrder_);
  handler.listen( conn, bitex.api.BitEx.EventType.ORDER_BOOK_UPDATE_ORDER + '.' + this.market_data_subscription_id_, this.onOBUpdateOrder_);
  handler.listen( conn, bitex.api.BitEx.EventType.ORDER_BOOK_NEW_ORDER + '.' + this.market_data_subscription_id_, this.onOBNewOrder_);
  this.dispatchEvent(bitex.view.View.EventType.MARKET_DATA_SUBSCRIBE);
};

bitex.view.TradingView.prototype.enterDocument = function() {
  goog.base(this, 'enterDocument');

  var handler = this.getHandler();
  var model = this.getApplication().getModel();

  handler.listen( model,  bitex.model.Model.EventType.SET + 'SelectedSymbol', function(e) {
    if (this.isActiveView()) {
      var selected_symbol = model.get('SelectedSymbol');
      var selected_broker_id = model.get('SelectedBrokerID');
      this.recreateComponents_(selected_symbol);
    }
  }, this);
};


/**
 * @param {*} value
 * @param {Object} rowSet
 */
bitex.view.TradingView.prototype.avgPriceFormatter_ = function(value, rowSet) {
  var priceCurrency = this.getApplication().getPriceCurrencyFromSymbol(rowSet['Symbol']);
  if (value != 0) {
    return this.getApplication().formatCurrency(value/1e8, priceCurrency, true);
  } else {
    return this.getApplication().formatCurrency(rowSet['Price']/1e8, priceCurrency, true);
  }
};


/**
 * @param {*} value
 * @param {Object} rowSet
 */
bitex.view.TradingView.prototype.orderFormatter_ = function(value, rowSet) {
  var qtyCurrency = this.getApplication().getQtyCurrencyFromSymbol(rowSet['Symbol']);
  var formatter = this.getApplication().getCurrencyFormatter(qtyCurrency, true);
  return bitex.util.simpleOrderSideFormatter(value, rowSet, formatter);
};


/**
 * @param {*} value
 * @param {Object} rowSet
 */
bitex.view.TradingView.prototype.priceFormatter_ = function(value, rowSet) {
  var priceCurrency = this.getApplication().getPriceCurrencyFromSymbol(rowSet['Symbol']);
  return this.getApplication().formatCurrency(value/1e8, priceCurrency, true);
};

/**
 * @param {*} value
 * @param {Object} rowSet
 */
bitex.view.TradingView.prototype.qtyFormatter_ = function(value, rowSet) {
  var priceCurrency = this.getApplication().getQtyCurrencyFromSymbol(rowSet['Symbol']);
  return this.getApplication().formatCurrency(value/1e8, priceCurrency, true);
};


/**
 * @return {number}
 */
bitex.view.TradingView.prototype.getMDSubscriptionId = function(){
  return this.market_data_subscription_id_;
};

/**
 * @return {Array.<string>}
 */
bitex.view.TradingView.prototype.getMDInstruments = function(){
  return [this.market_data_subscription_symbol_];
};

/**
 * @return {number}
 */
bitex.view.TradingView.prototype.getMDMarketDepth = function(){
  return 1000;
};

/**
 * @return {Array.<string>}
 */
bitex.view.TradingView.prototype.getMDEntries = function(){
  return ['0', '1']; // bid, ask
};

bitex.view.TradingView.prototype.getOrderId = function() {
  return this.order_id_;
};

bitex.view.TradingView.prototype.getClientOrderId = function() {
  return this.client_order_id_;
};

/**
 * @param {goog.events.Event} e
 * @private
 */
bitex.view.TradingView.prototype.onSimpleOrderAction_ = function(e) {

};


/**
 * @param {bitex.api.BitExEvent} e
 * @private
 */
bitex.view.TradingView.prototype.onCancelOrder_ = function(e) {
  if (e.target.getAttribute('data-action') == 'cancel') {
    e.stopPropagation();
    e.preventDefault();

    this.order_id_        = e.target.getAttribute('data-order-id');
    this.client_order_id_ = e.target.getAttribute('data-client-order-id');

    this.dispatchEvent(bitex.view.View.EventType.CANCEL_ORDER);
  }
};



/**
 * @param {bitex.api.BitExEvent} e
 * @private
 */
bitex.view.TradingView.prototype.onExecutionReport_ = function(e){
  if (!goog.isDefAndNotNull(this.order_manager_table_) ) {
    return;
  }

  this.order_manager_table_.processExecutionReport(e.data);
};


/**
 *
 * @param {goog.events.Event} e
 */
bitex.view.TradingView.prototype.onOrderManagerRequestData_ = function(e) {
  var page = e.options['Page'];
  var limit = e.options['Limit'];
  var filter = e.options['Filter'];
  var conn = this.getApplication().getBitexConnection();
  conn.requestOrderList(this.request_order_id_, page, limit, filter );
};


/**
 * @param {goog.events.Event} e
 */
bitex.view.TradingView.prototype.onOrderListResponse_ = function(e) {
  if (!goog.isDefAndNotNull(this.order_manager_table_) ) {
    return;
  }
  var msg = e.data;
  this.order_manager_table_.setResultSet(msg['OrdListGrp'], msg['Columns']);
};


bitex.view.TradingView.prototype.onOBClear_ = function(e){
  this.bids_ = [];
  this.asks_ = [];
  this.ask_order_entry_.setOrderDepth(this.bids_);
  this.bid_order_entry_.setOrderDepth(this.asks_);
};

bitex.view.TradingView.prototype.onOBDeleteOrdersThru_ = function(e){
  var msg   = e.data;
  var index = msg['MDEntryPositionNo'];
  var side  = msg['MDEntryType'];

  if (side == '0') {
    this.bids_.splice(0,index);
    this.ask_order_entry_.setOrderDepth(this.bids_);
  } else if (side == '1') {
    this.asks_.splice(0,index);
    this.bid_order_entry_.setOrderDepth(this.asks_);
  }
};

bitex.view.TradingView.prototype.onOBDeleteOrder_ = function(e){
  var msg   = e.data;
  var index = msg['MDEntryPositionNo'] - 1;
  var side  = msg['MDEntryType'];

  if (side == '0') {
    this.bids_.splice(index,1);
    this.ask_order_entry_.setOrderDepth(this.bids_);
  } else if (side == '1') {
    this.asks_.splice(index,1);
    this.bid_order_entry_.setOrderDepth(this.asks_);
  }
};

bitex.view.TradingView.prototype.onOBUpdateOrder_ = function(e){
  var msg   = e.data;
  var index = msg['MDEntryPositionNo'] - 1;
  var qty   = msg['MDEntrySize'];
  var side  = msg['MDEntryType'];

  if (side == '0') {
    this.bids_[index] = [ this.bids_[index][0], qty, this.bids_[index][2] ];
    this.ask_order_entry_.setOrderDepth(this.bids_);
  } else if (side == '1') {
    this.asks_[index] = [ this.asks_[index][0], qty, this.asks_[index][2] ];
    this.bid_order_entry_.setOrderDepth(this.asks_);
  }
};

bitex.view.TradingView.prototype.onOBNewOrder_ = function(e){
  var msg       = e.data;
  var index     = msg['MDEntryPositionNo'] - 1;
  var price     = msg['MDEntryPx'];
  var qty       = msg['MDEntrySize'];
  var username  = msg['UserID'];
  var broker    = msg['Broker'];
  var orderId   = msg['OrderID'];
  var side      = msg['MDEntryType'];

  if (side == '0') {
    goog.array.insertAt( this.bids_, [price, qty, username], index );
    this.ask_order_entry_.setOrderDepth(this.bids_);
  } else if (side == '1') {
    goog.array.insertAt( this.asks_, [price, qty, username], index );
    this.bid_order_entry_.setOrderDepth(this.asks_);
  }

};
