goog.provide('bitex.view.AlgorithmTradingView');
goog.require('bitex.view.View');

goog.require('bitex.ui.OrderManager');

goog.require('bitex.util');
goog.require('bitex.ui.AlgorithmSelector');
goog.require('bitex.ui.AlgorithmRunner');

/**
 * @param {*} app
 * @param {goog.dom.DomHelper=} opt_domHelper
 * @constructor
 * @extends {bitex.view.View}
 */
bitex.view.AlgorithmTradingView = function(app, opt_domHelper) {
  bitex.view.View.call(this, app, opt_domHelper);

  this.market_data_subscription_id_ = null;
  this.market_data_subscription_symbol_ = null;
  this.algo_selector_ = null;
  this.algo_runner_ = null;

  this.order_id_ = null;
  this.client_order_id = null;
  this.request_order_id_ = null;

  this.bids_ = [];
  this.asks_ = [];
};
goog.inherits(bitex.view.AlgorithmTradingView, bitex.view.View);

/**
 * @type {.Array<Object>}
 */
bitex.view.AlgorithmTradingView.prototype.bids_;

/**
 * @type {.Array<Object>}
 */
bitex.view.AlgorithmTradingView.prototype.asks_;


/**
 * @type {number}
 */
bitex.view.AlgorithmTradingView.prototype.market_data_subscription_id_;

/**
 * @type {string}
 */
bitex.view.AlgorithmTradingView.prototype.market_data_subscription_symbol_;


/**
 * @type {number}
 */
bitex.view.AlgorithmTradingView.prototype.order_id_;

/**
 * @type {number}
 */
bitex.view.AlgorithmTradingView.prototype.client_order_id;

/**
 * @type {bitex.ui.OrderManager}
 */
bitex.view.AlgorithmTradingView.prototype.order_manager_table_;

/**
 * @type {bitex.ui.AlgorithmSelector}
 */
bitex.view.AlgorithmTradingView.prototype.algo_selector_;


/**
 * @type {goog.ui.Component}
 */
bitex.view.AlgorithmTradingView.prototype.algo_runner_container_;



/**
 * @type {number}
 */
bitex.view.AlgorithmTradingView.prototype.request_order_id_;


bitex.view.AlgorithmTradingView.prototype.enterView = function() {
  goog.base(this, 'enterView');
  var model = this.getApplication().getModel();
  var selected_symbol = model.get('SelectedSymbol');
  if (goog.isDefAndNotNull(selected_symbol)) {
    this.recreateComponents_(selected_symbol);
  }
};

bitex.view.AlgorithmTradingView.prototype.exitView = function() {
  goog.base(this, 'exitView');
  this.destroyComponents_();
};


/**
 * @param {Element} element Element to decorate.
 * @protected
 */
bitex.view.AlgorithmTradingView.prototype.decorateInternal = function(element) {
  this.setElementInternal(element);
};


/**
 * @private
 */
bitex.view.AlgorithmTradingView.prototype.destroyComponents_ = function( ) {
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

    this.removeChildAt(2, true);
    this.order_manager_table_ = null;
  }

  this.request_order_id_ = null;
};

/**
 * @param {*} selected_symbol
 * @private
 */
bitex.view.AlgorithmTradingView.prototype.recreateComponents_ = function( selected_symbol ) {
  var handler = this.getHandler();
  var model = this.getApplication().getModel();


  if (this.market_data_subscription_symbol_ === selected_symbol.symbol) {
    return;
  }

  this.destroyComponents_();

  if (!goog.isDefAndNotNull(this.algo_selector_)){
    this.algo_selector_ = new bitex.ui.AlgorithmSelector();
    this.addChild(this.algo_selector_, true);
    handler.listen(this.algo_selector_,bitex.ui.AlgorithmSelector.EventType.ERROR, this.onAlgoSelectorError_);
    handler.listen(this.algo_selector_,bitex.ui.AlgorithmSelector.EventType.SELECTED_ALGO, this.onAlgoSelectorSelected_);
  }

  if (!goog.isDefAndNotNull(this.algo_runner_container_)){
    this.algo_runner_container_ = new goog.ui.Component();
    this.addChild(this.algo_runner_container_, true);
  }

  this.request_order_id_ = parseInt( 1e7 * Math.random() , 10 );

  this.order_manager_table_ =  new bitex.ui.OrderManager('advanced');

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


  this.order_manager_table_.setColumnFormatter('Side', this.orderFormatter_, this);
  this.order_manager_table_.setColumnFormatter('OrdStatus', this.simpleStatusFormatter_, this);
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

  handler.listen( conn ,bitex.api.BitEx.EventType.TRADE + '.' + this.market_data_subscription_id_, this.onTrade_ );
  this.dispatchEvent(bitex.view.View.EventType.MARKET_DATA_SUBSCRIBE);



};

bitex.view.AlgorithmTradingView.prototype.enterDocument = function() {
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
 * @param {goog.events.Event} e
 */
bitex.view.AlgorithmTradingView.prototype.onAlgoSelectorError_ = function(e) {
  this.getApplication().showNotification('error', '', e.target.getLastError() );
};

/**
 * @param {goog.events.Event} e
 */
bitex.view.AlgorithmTradingView.prototype.onAlgoSelectorSelected_ = function(e) {
  var algoRunner = new bitex.ui.AlgorithmRunner();
  var model = this.getApplication().getModel();

  var instance_id = bitex.util.generateGUID();
  algoRunner.setModel({
    instanceID: instance_id,
    algorithmDefinition: e.target.getAlgoDefinition(),
    algo: e.target.getAlgo(),
    symbol: model.get('SelectedSymbol'),
    status: '0'
  });
  this.algo_runner_container_.addChild(algoRunner, true);

  var handler = this.getHandler();
  handler.listen(algoRunner, bitex.ui.AlgorithmRunner.EventType.PARAMS_ERROR, this.onAlgoParamsError_);
  handler.listen(algoRunner, bitex.ui.AlgorithmRunner.EventType.PARAMS, this.onAlgoParams_);
  handler.listen(algoRunner, bitex.ui.AlgorithmRunner.EventType.STOP, this.onAlgoStop_);
};

/**
 * @param {goog.events.Event} e
 */
bitex.view.AlgorithmTradingView.prototype.onAlgoStop_ = function(e) {
  var algo_instance_id = e.target.getModel().instanceID;
  var model = this.getApplication().getModel();
  model.set( algo_instance_id + '_status', '3' ); // 3 - pending stop
};

/**
 * @param {goog.events.Event} e
 */
bitex.view.AlgorithmTradingView.prototype.onAlgoParamsError_ = function(e) {
  var error_list = e.target.getErrorList();
  if (error_list.length > 0) {
    goog.array.forEach(error_list, function(error_msg) {
      this.getApplication().showNotification( 'error', error_msg );
    }, this );
  }
};


/**
 * @param {goog.events.Event} e
 */
bitex.view.AlgorithmTradingView.prototype.onAlgoParams_ = function(e) {
  var model = this.getApplication().getModel();
  var handler = this.getHandler();
  var runner_object = e.target;

  var algo_instance_id = runner_object.getModel().instanceID;
  if ( !goog.isDefAndNotNull(model.get(algo_instance_id + '_status')) ) {
    runner_object.setStatus('1');

    model.set( algo_instance_id + '_status', '1' ); // 0 - pending start
    model.set( algo_instance_id + '_params', runner_object.getModel().params );
    model.set( algo_instance_id + '_algo', runner_object.getModel().algo );
    model.set( algo_instance_id + '_symbol', runner_object.getModel().symbol );
    model.set( algo_instance_id + '_definition', runner_object.getModel().algorithmDefinition );

    handler.listen( model,  bitex.model.Model.EventType.SET + algo_instance_id + '_status', function(e) {
      runner_object.setStatus( e.data );
    });

    this.getApplication().registerAlgorithmInstance(algo_instance_id);
  } else {
    model.set( algo_instance_id + '_params', runner_object.getModel().params );
  }
};


/**
 * @param {*} value
 * @param {Object} rowSet
 */
bitex.view.AlgorithmTradingView.prototype.orderFormatter_ = function(value, rowSet) {
  /** @desc Order Status message on Simple Order Manager */
  var MSG_ALGORITHM_TRADING_ORDER_MANAGER_DESC_BUY = goog.getMsg('BUY');

  /** @desc Order Status message on Simple Order Manager */
  var MSG_ALGORITHM_TRADING_ORDER_MANAGER_DESC_SELL = goog.getMsg('SELL');

  if (rowSet['Side'] == '1') { // buying
    return MSG_ALGORITHM_TRADING_ORDER_MANAGER_DESC_BUY;
  } else { // selling
    return MSG_ALGORITHM_TRADING_ORDER_MANAGER_DESC_SELL;
  }
};

/**
 * @param {*} value
 * @param {Object} rowSet
 */
bitex.view.AlgorithmTradingView.prototype.simpleStatusFormatter_ = function(value, rowSet) {
  /** @desc Order Status message on Simple Order Manager */
  var MSG_ALGORITHM_TRADING_ORDER_MANAGER_SIMPLE_STATUS_PENDING = goog.getMsg('PENDING');

  /** @desc Order Status message on Simple Order Manager */
  var MSG_ALGORITHM_TRADING_ORDER_MANAGER_SIMPLE_STATUS_NEW = goog.getMsg('NEW');

  /** @desc Order Status message on Simple Order Manager */
  var MSG_ALGORITHM_TRADING_ORDER_MANAGER_SIMPLE_STATUS_PARTIAL_FILL = goog.getMsg('PARTIAL');

  /** @desc Order Status message on Simple Order Manager */
  var MSG_ALGORITHM_TRADING_ORDER_MANAGER_SIMPLE_STATUS_FILLED = goog.getMsg('FILLED');

  /** @desc Order Status message on Simple Order Manager */
  var MSG_ALGORITHM_TRADING_ORDER_MANAGER_SIMPLE_STATUS_CANCELLED = goog.getMsg('CANCELLED');

  /** @desc Order Status message on Simple Order Manager */
  var   MSG_ALGORITHM_TRADING_ORDER_MANAGER_SIMPLE_STATUS_COMPLETED = goog.getMsg('COMPLETE');

  switch (value) {
    case '-': // Pending ...
      return MSG_ALGORITHM_TRADING_ORDER_MANAGER_SIMPLE_STATUS_PENDING;
    case '0': // New
      return MSG_ALGORITHM_TRADING_ORDER_MANAGER_SIMPLE_STATUS_NEW;
    case '1': // Partial fill
      return MSG_ALGORITHM_TRADING_ORDER_MANAGER_SIMPLE_STATUS_PARTIAL_FILL;
    case '2': // filled
      return MSG_ALGORITHM_TRADING_ORDER_MANAGER_SIMPLE_STATUS_FILLED;
    case '4': // Cancelled
      if (rowSet['CumQty'] == 0 ) {
        return MSG_ALGORITHM_TRADING_ORDER_MANAGER_SIMPLE_STATUS_CANCELLED;
      } else {
        return MSG_ALGORITHM_TRADING_ORDER_MANAGER_SIMPLE_STATUS_COMPLETED;
      }
  }
};


/**
 * @param {*} value
 * @param {Object} rowSet
 */
bitex.view.AlgorithmTradingView.prototype.avgPriceFormatter_ = function(value, rowSet) {
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
bitex.view.AlgorithmTradingView.prototype.priceFormatter_ = function(value, rowSet) {
  var priceCurrency = this.getApplication().getPriceCurrencyFromSymbol(rowSet['Symbol']);
  return this.getApplication().formatCurrency(value/1e8, priceCurrency, true);
};

/**
 * @param {*} value
 * @param {Object} rowSet
 */
bitex.view.AlgorithmTradingView.prototype.qtyFormatter_ = function(value, rowSet) {
  var priceCurrency = this.getApplication().getQtyCurrencyFromSymbol(rowSet['Symbol']);
  return this.getApplication().formatCurrency(value/1e8, priceCurrency, true);
};


/**
 * @return {number}
 */
bitex.view.AlgorithmTradingView.prototype.getMDSubscriptionId = function(){
  return this.market_data_subscription_id_;
};

/**
 * @return {Array.<string>}
 */
bitex.view.AlgorithmTradingView.prototype.getMDInstruments = function(){
  return [this.market_data_subscription_symbol_];
};

/**
 * @return {number}
 */
bitex.view.AlgorithmTradingView.prototype.getMDMarketDepth = function(){
  return 0;
};

/**
 * @return {Array.<string>}
 */
bitex.view.AlgorithmTradingView.prototype.getMDEntries = function(){
  return ['0', '1', '2']; // bid, ask, trade
};

bitex.view.AlgorithmTradingView.prototype.getOrderId = function() {
  return this.order_id_;
};

bitex.view.AlgorithmTradingView.prototype.getClientOrderId = function() {
  return this.client_order_id_;
};

/**
 * @param {bitex.api.BitExEvent} e
 * @private
 */
bitex.view.AlgorithmTradingView.prototype.onCancelOrder_ = function(e) {
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
bitex.view.AlgorithmTradingView.prototype.onExecutionReport_ = function(e){
  if (!goog.isDefAndNotNull(this.order_manager_table_) ) {
    return;
  }

  this.order_manager_table_.processExecutionReport(e.data);
};


/**
 *
 * @param {goog.events.Event} e
 */
bitex.view.AlgorithmTradingView.prototype.onOrderManagerRequestData_ = function(e) {
  var page = e.options['Page'];
  var limit = e.options['Limit'];

  var conn = this.getApplication().getBitexConnection();
  conn.requestOrderList(this.request_order_id_, page, limit, ['0', '1', '2', '4'] );
};


/**
 * @param {goog.events.Event} e
 */
bitex.view.AlgorithmTradingView.prototype.onOrderListResponse_ = function(e) {
  if (!goog.isDefAndNotNull(this.order_manager_table_) ) {
    return;
  }
  var msg = e.data;
  this.order_manager_table_.setResultSet(msg['OrdListGrp'], msg['Columns']);
};


bitex.view.AlgorithmTradingView.prototype.onOBClear_ = function(e){
  this.bids_ = [];
  this.asks_ = [];
  //this.ask_order_entry_.setOrderDepth(this.bids_);
  //this.bid_order_entry_.setOrderDepth(this.asks_);
};

bitex.view.AlgorithmTradingView.prototype.onOBDeleteOrdersThru_ = function(e){
  var msg   = e.data;
  var index = msg['MDEntryPositionNo'];
  var side  = msg['MDEntryType'];

  if (side == '0') {
    this.bids_.splice(0,index);

    //this.ask_order_entry_.setOrderDepth(this.bids_);
  } else if (side == '1') {
    this.asks_.splice(0,index);

    //this.bid_order_entry_.setOrderDepth(this.asks_);
  }
};

bitex.view.AlgorithmTradingView.prototype.onOBDeleteOrder_ = function(e){
  var msg   = e.data;
  var index = msg['MDEntryPositionNo'] - 1;
  var side  = msg['MDEntryType'];

  if (side == '0') {
    this.bids_.splice(index,1);

    //this.ask_order_entry_.setOrderDepth(this.bids_);
  } else if (side == '1') {
    this.asks_.splice(index,1);

    //this.bid_order_entry_.setOrderDepth(this.asks_);
  }
};

bitex.view.AlgorithmTradingView.prototype.onOBUpdateOrder_ = function(e){
  var msg   = e.data;
  var index = msg['MDEntryPositionNo'] - 1;
  var qty   = msg['MDEntrySize'];
  var side  = msg['MDEntryType'];

  if (side == '0') {
    this.bids_[index] = [ this.bids_[index][0], qty, this.bids_[index][2] ];

    //this.ask_order_entry_.setOrderDepth(this.bids_);
  } else if (side == '1') {
    this.asks_[index] = [ this.asks_[index][0], qty, this.asks_[index][2] ];

    //this.bid_order_entry_.setOrderDepth(this.asks_);
  }
};

bitex.view.AlgorithmTradingView.prototype.onOBNewOrder_ = function(e){
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

    //this.ask_order_entry_.setOrderDepth(this.bids_);
  } else if (side == '1') {
    goog.array.insertAt( this.asks_, [price, qty, username], index );


    //this.bid_order_entry_.setOrderDepth(this.asks_);
  }
};



/**
 * @param {goog.events.Event} e
 */
bitex.view.MarketView.prototype.onTrade_ = function(e) {
  var msg = e.data;
  var record = [];

  record["TradeID"] = msg["TradeID"];
  record["Market"] = msg["Symbol"];
  record["Size"] = msg['MDEntrySize'];
  record["Price"] = msg['MDEntryPx'];
  record["Side"] = msg['Side'];
  record["Buyer"] = msg['MDEntryBuyerID'];
  record["Seller"] = msg['MDEntrySellerID'];
  if (goog.isDefAndNotNull( msg['MDEntryBuyer'] )) {
    record["BuyerUsername"] = msg['MDEntryBuyer'];
  }
  if (goog.isDefAndNotNull( msg['MDEntrySeller'] )) {
    record["SellerUsername"] = msg['MDEntrySeller'];
  }
  record["Created"] = msg['MDEntryDate'] + " " + msg['MDEntryTime'];

  //this.last_trades_table_.insertOrUpdateRecord(record, 0);
};
