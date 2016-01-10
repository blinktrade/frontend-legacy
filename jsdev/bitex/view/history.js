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

  this.order_id_ = null;
  this.client_order_id = null;
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

bitex.view.HistoryView.prototype.enterView = function() {
  goog.base(this, 'enterView');
  this.recreateComponents_();
};

bitex.view.HistoryView.prototype.exitView = function() {
  goog.base(this, 'exitView');
  this.destroyComponents_();
};

/**
 * @private
 */
bitex.view.HistoryView.prototype.destroyComponents_ = function(){

  var handler = this.getHandler();

  if (goog.isDefAndNotNull(this.order_manager_table_)) {

    handler.unlisten(this.order_manager_table_,
                     bitex.ui.DataGrid.EventType.REQUEST_DATA,
                     this.onOrderManagerRequestData_);

    handler.unlisten(this.getApplication().getBitexConnection(),
                     bitex.api.BitEx.EventType.ORDER_LIST_RESPONSE + '.' + this.request_order_id_,
                     this.onOrderListResponse_);

  }

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

  this.order_manager_table_ = new bitex.ui.OrderManager('simple', false, 'EOCA');

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
  handler.listen(this.order_manager_table_.getElement(), goog.events.EventType.CLICK, this.onCancelOrder_);
};

bitex.view.HistoryView.prototype.enterDocument = function() {
  goog.base(this, 'enterDocument');

  var handler = this.getHandler();
  var model = this.getApplication().getModel();

  this.recreateComponents_();
};

/**
 * @param {*} value
 * @param {Object} rowSet
 */
bitex.view.HistoryView.prototype.orderFormatter_ = function(value, rowSet) {
  var qtyCurrency = this.getApplication().getQtyCurrencyFromSymbol(rowSet['Symbol']);
  var formatter = this.getApplication().getCurrencyFormatter(qtyCurrency, true);
  return bitex.util.simpleOrderSideFormatter(value, rowSet, formatter);
};

/**
 * @param {*} value
 * @param {Object} rowSet
 */
bitex.view.HistoryView.prototype.avgPriceFormatter_ = function(value, rowSet) {
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
bitex.view.HistoryView.prototype.priceFormatter_ = function(value, rowSet) {
  var priceCurrency = this.getApplication().getPriceCurrencyFromSymbol(rowSet['Symbol']);
  return this.getApplication().formatCurrency(value/1e8, priceCurrency, true);
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

/**
 * @param {bitex.api.BitExEvent} e
 * @private
 */
bitex.view.HistoryView.prototype.onCancelOrder_ = function(e) {
  if (e.target.getAttribute('data-action') == 'cancel') {
    e.stopPropagation();
    e.preventDefault();

    this.order_id_        = e.target.getAttribute('data-order-id');
    this.client_order_id_ = e.target.getAttribute('data-client-order-id');

    this.dispatchEvent(bitex.view.View.EventType.CANCEL_ORDER);
  }
};
