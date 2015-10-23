goog.provide('bitex.view.HistoryView');
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
bitex.view.HistoryView = function(app, opt_domHelper) {
  bitex.view.View.call(this, app, opt_domHelper);

  this.request_order_id_ = null;
};
goog.inherits(bitex.view.HistoryView, bitex.view.View);

/**
 * @type {bitex.ui.OrderManager}
 */
bitex.view.HistoryView.prototype.order_manager_table_;

/**
 * @type {number}
 */
bitex.view.HistoryView.prototype.request_order_id_;

/**
 * @type {number}
 */
bitex.view.HistoryView.prototype.market_data_subscription_id_;

/**
 * @type {string}
 */
bitex.view.HistoryView.prototype.market_data_subscription_symbol_;


bitex.view.HistoryView.prototype.enterView = function() {
  goog.base(this, 'enterView');
  this.recreateComponents_();
};

bitex.view.HistoryView.prototype.exitView = function() {
  goog.base(this, 'exitView');
  this.destroyComponents_();
};

/**
 * @param {Element} element Element to decorate.
 * @protected
 */
bitex.view.HistoryView.prototype.decorateInternal = function(element){
  this.setElementInternal(element);
};

/**
 * @private
 */
bitex.view.HistoryView.prototype.destroyComponents_ = function(){
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
 * @private
 */
bitex.view.HistoryView.prototype.recreateComponents_ = function(){
  var handler = this.getHandler();
  var model = this.getApplication().getModel();

  this.destroyComponents_();

  this.request_order_id_ = parseInt( 1e7 * Math.random() , 10 );

  this.order_manager_table_ =  new bitex.ui.OrderManager('simple');

  handler.listen(this.getApplication().getBitexConnection(),
                 bitex.api.BitEx.EventType.EXECUTION_REPORT,
                 this.onExecutionReport_);

  handler.listen(this.order_manager_table_,
                 bitex.ui.DataGrid.EventType.REQUEST_DATA,
                 this.onOrderManagerRequestData_);

  handler.listen(this.getApplication().getBitexConnection(),
                 bitex.api.BitEx.EventType.ORDER_LIST_RESPONSE + '.' + this.request_order_id_,
                 this.onOrderListResponse_);

  this.addChild(this.order_manager_table_, true);

  this.order_manager_table_.setColumnFormatter('Side', this.orderFormatter_, this);
  // this.order_manager_table_.setColumnFormatter('OrdStatus', this.simpleStatusFormatter_, this);
  this.order_manager_table_.setColumnFormatter('AvgPx', this.avgPriceFormatter_, this);
  this.order_manager_table_.setColumnFormatter('Volume', this.priceFormatter_, this);
  handler.listen(this.order_manager_table_.getElement(), goog.events.EventType.CLICK, this.onCancelOrder_ );

  this.market_data_subscription_id_ = parseInt( 1e7 * Math.random() , 10 );
  this.market_data_subscription_symbol_ = selected_symbol.symbol;

  var conn = this.getApplication().getBitexConnection() ;
  handler.listen(conn, bitex.api.BitEx.EventType.ORDER_BOOK_CLEAR + '.' + this.market_data_subscription_id_, this.onOBClear_);
  handler.listen(conn, bitex.api.BitEx.EventType.ORDER_BOOK_DELETE_ORDERS_THRU + '.' + this.market_data_subscription_id_, this.onOBDeleteOrdersThru_);
  handler.listen(conn, bitex.api.BitEx.EventType.ORDER_BOOK_DELETE_ORDER + '.' + this.market_data_subscription_id_, this.onOBDeleteOrder_);
  handler.listen(conn, bitex.api.BitEx.EventType.ORDER_BOOK_UPDATE_ORDER + '.' + this.market_data_subscription_id_, this.onOBUpdateOrder_);
  handler.listen(conn, bitex.api.BitEx.EventType.ORDER_BOOK_NEW_ORDER + '.' + this.market_data_subscription_id_, this.onOBNewOrder_);
  this.dispatchEvent(bitex.view.View.EventType.MARKET_DATA_SUBSCRIBE);
};

bitex.view.HistoryView.prototype.enterDocument = function() {
  goog.base(this, 'enterDocument');

  var handler = this.getHandler();
  var model = this.getApplication().getModel();

  this.recreateComponents_();

}

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
bitex.view.TradingView.prototype.qtyFormatter_ = function(value, rowSet) {
  var priceCurrency = this.getApplication().getQtyCurrencyFromSymbol(rowSet['Symbol']);
  return this.getApplication().formatCurrency(value/1e8, priceCurrency, true);
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
bitex.view.HistoryView.prototype.simpleStatusFormatter_ = function(value, rowSet) {
  /** @desc Order Status message on Simple Order Manager */
  // var MSG_ORDER_MANAGER_SIMPLE_STATUS_SENDING = goog.getMsg('Sending...');

  /** @desc Order Status message on Simple Order Manager */
  // var MSG_ORDER_MANAGER_SIMPLE_STATUS_WAITING_BUYERS = goog.getMsg('Waiting buyers');

  /** @desc Order Status message on Simple Order Manager */
  // var MSG_ORDER_MANAGER_SIMPLE_STATUS_WAITING_SELLERS = goog.getMsg('Waiting sellers');

  /** @desc Order Status message on Simple Order Manager */
  // var MSG_ORDER_MANAGER_SIMPLE_STATUS_PARTIAL_BOUGHT = goog.getMsg('Partially bought');

  /** @desc Order Status message on Simple Order Manager */
  // var MSG_ORDER_MANAGER_SIMPLE_STATUS_PARTIAL_SOLD = goog.getMsg('Partially sold');

  /** @desc Order Status message on Simple Order Manager */
  // var MSG_ORDER_MANAGER_SIMPLE_STATUS_COMPLETE = goog.getMsg('Done');

  /** @desc Order Status message on Simple Order Manager */
  // var MSG_ORDER_MANAGER_SIMPLE_STATUS_CANCELLED = goog.getMsg('Cancelled');

  /** @desc Order Status message on Simple Order Manager */
  // var MSG_ORDER_MANAGER_SIMPLE_STATUS_REJECTED = goog.getMsg('Rejected');

  // switch (value) {
    // case '-': // Pending ...
      // return MSG_ORDER_MANAGER_SIMPLE_STATUS_SENDING;
    // case '0': // New
      // if (rowSet['Side'] == '1') { // buying
        // return MSG_ORDER_MANAGER_SIMPLE_STATUS_WAITING_SELLERS;
      // } else { // selling
        // return MSG_ORDER_MANAGER_SIMPLE_STATUS_WAITING_BUYERS;
      // }
    // case '1': // Partial fill
      // if (rowSet['Side'] == '1') { // buying
        // return MSG_ORDER_MANAGER_SIMPLE_STATUS_PARTIAL_BOUGHT;
      // } else { // selling
        // return MSG_ORDER_MANAGER_SIMPLE_STATUS_PARTIAL_SOLD;
      // }
    // case '2': // filled
      // return MSG_ORDER_MANAGER_SIMPLE_STATUS_COMPLETE;
    // case '4': // Cancelled
      // if (rowSet['CumQty'] == 0 ) {
        // return MSG_ORDER_MANAGER_SIMPLE_STATUS_CANCELLED;
      // } else {
        // return MSG_ORDER_MANAGER_SIMPLE_STATUS_COMPLETE;
      // }
    // case '8': // Rejected 
      // return MSG_ORDER_MANAGER_SIMPLE_STATUS_REJECTED;
  // }
};

/**
 *
 * @param {goog.events.Event} e
 */
bitex.view.HistoryView.prototype.onOrderManagerRequestData_ = function(e) {
  var page = e.options['Page'];
  var limit = e.options['Limit'];
  var filter = e.options['Filter'];
  var conn = this.getApplication().getBitexConnection();
  conn.requestOrderList(this.request_order_id_, page, limit, filter );
};

/**
 * @param {goog.events.Event} e
 */
bitex.view.HistoryView.prototype.onOrderListResponse_ = function(e) {
  if (!goog.isDefAndNotNull(this.order_manager_table_) ) {
    return;
  }
  var msg = e.data;
  this.order_manager_table_.setResultSet(msg['OrdListGrp'], msg['Columns']);
};

bitex.view.HistoryView.prototype.onOBClear_ = function(e){
  this.bids_ = [];
  this.asks_ = [];
  this.ask_order_entry_.setOrderDepth(this.bids_);
  this.bid_order_entry_.setOrderDepth(this.asks_);
};


bitex.view.HistoryView.prototype.onOBDeleteOrdersThru_ = function(e){
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

bitex.view.HistoryView.prototype.onOBDeleteOrder_ = function(e){
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

bitex.view.HistoryView.prototype.onOBUpdateOrder_ = function(e){
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

bitex.view.HistoryView.prototype.onOBNewOrder_ = function(e){
  var msg       = e.data;
  var index     = msg['MDEntryPositionNo'] - 1;
  var price     = msg['MDEntryPx'];
  var qty       = msg['MDEntrySize'];
  var username  = msg['Username'];
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
