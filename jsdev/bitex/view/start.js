goog.provide('bitex.view.StartView');
goog.require('bitex.view.View');

goog.require('bitex.view.OfferBookView');
goog.require('bitex.templates');

/**
 * @param {*} app
 * @param {goog.dom.DomHelper=} opt_domHelper
 * @constructor
 * @extends {goog.ui.Component}
 */
bitex.view.StartView = function(app, opt_domHelper) {
  bitex.view.View.call(this, app, opt_domHelper);
};
goog.inherits(bitex.view.StartView, bitex.view.View);

bitex.view.StartView.prototype.enterView = function() {
  goog.base(this, 'enterView');
  if (goog.isDefAndNotNull(goog.dom.getElement('id_simple_order_book_bid_content'))) {
    this.recreateComponents_();
  }
};

bitex.view.StartView.prototype.exitView = function() {
  goog.base(this, 'exitView');
  this.destroyComponents_();
};


bitex.view.StartView.prototype.enterDocument = function() {
  goog.base(this, 'enterDocument');
};

bitex.view.StartView.prototype.exitDocument = function() {
};

bitex.view.StartView.prototype.recreateComponents_ = function() {
  var handler = this.getHandler();
  var model = this.getApplication().getModel();
  var defaultSymbol = model.get('DefaultSymbol');

  this.destroyOrderBookComponents_();

  handler.listen(model, bitex.model.Model.EventType.SET + 'SecurityList', function(e){
    model = this.getApplication().getModel();
    msg   = model.get('SecurityList');

    var app = this.getApplication();
    var qtyCurrency = app.getQtyCurrencyFromSymbol(defaultSymbol);
    var priceCurrency = app.getPriceCurrencyFromSymbol(defaultSymbol);

    var selected_symbol = {
      symbol: defaultSymbol,
      qty_currency: app.getCurrency(qtyCurrency),
      price_currency: app.getCurrency(priceCurrency)
    };

    this.order_book_bid_ = new bitex.ui.SimpleOrderBook(bitex.ui.SimpleOrderBook.Side.BUY,
                                                  selected_symbol.qty_currency,
                                                  selected_symbol.price_currency);

    this.order_book_offer_ = new bitex.ui.SimpleOrderBook(bitex.ui.SimpleOrderBook.Side.SELL,
                                                    selected_symbol.qty_currency,
                                                    selected_symbol.price_currency);

    this.order_book_bid_.render(goog.dom.getElement('id_simple_order_book_bid_content'));
    this.order_book_offer_.render(goog.dom.getElement('id_simple_order_book_ask_content'));

    this.market_data_subscription_id_ = parseInt(1e7 * Math.random(), 10);
    this.market_data_subscription_symbol_ = selected_symbol.symbol;

    var conn = this.getApplication().getBitexConnection();

    handler.listen(conn, bitex.api.BitEx.EventType.ORDER_BOOK_CLEAR + '.' + this.market_data_subscription_id_, this.onOBClear_);
    handler.listen(conn, bitex.api.BitEx.EventType.ORDER_BOOK_DELETE_ORDERS_THRU + '.' + this.market_data_subscription_id_, this.onOBDeleteOrdersThru_);
    handler.listen(conn, bitex.api.BitEx.EventType.ORDER_BOOK_DELETE_ORDER + '.' + this.market_data_subscription_id_, this.onOBDeleteOrder_);
    handler.listen(conn, bitex.api.BitEx.EventType.ORDER_BOOK_UPDATE_ORDER + '.' + this.market_data_subscription_id_, this.onOBUpdateOrder_);
    handler.listen(conn, bitex.api.BitEx.EventType.ORDER_BOOK_NEW_ORDER + '.' + this.market_data_subscription_id_, this.onOBNewOrder_);

    this.dispatchEvent(bitex.view.View.EventType.MARKET_DATA_SUBSCRIBE);
  }, this);
};

bitex.view.StartView.prototype.destroyComponents_ = function() {
};

bitex.view.StartView.prototype.onOBClear_ = function(e){
  if (!goog.isDefAndNotNull(this.order_book_offer_)) {
    return;
  }
  this.order_book_bid_.clear();
  this.order_book_offer_.clear();
};

bitex.view.StartView.prototype.onOBDeleteOrdersThru_ = function(e){
  if (!goog.isDefAndNotNull(this.order_book_offer_)) {
    return;
  }

  var msg   = e.data;
  var index = msg['MDEntryPositionNo'];
  var side  = msg['MDEntryType'];

  if (side == '0') {
    this.order_book_bid_.deleteOrderThru(index);
  } else if (side == '1') {
    this.order_book_offer_.deleteOrderThru(index);
  }
};


bitex.view.StartView.prototype.onOBDeleteOrder_ = function(e){
  if (!goog.isDefAndNotNull(this.order_book_offer_)) {
    return;
  }
  var msg   = e.data;
  var index = msg['MDEntryPositionNo'] - 1;
  var side  = msg['MDEntryType'];

  if (side == '0') {
    this.order_book_bid_.deleteOrder(index);
  } else if (side == '1') {
    this.order_book_offer_.deleteOrder(index);
  }
};

bitex.view.StartView.prototype.onOBUpdateOrder_ = function(e){
  if (!goog.isDefAndNotNull(this.order_book_offer_)){
    return;
  }

  var msg   = e.data;
  var index = msg['MDEntryPositionNo'] - 1;
  var qty   = msg['MDEntrySize'];
  var side  = msg['MDEntryType'];

  if (side == '0') {
    this.order_book_bid_.updateOrder(index, qty);
  } else if (side == '1') {
    this.order_book_offer_.updateOrder(index, qty);
  }
};

bitex.view.StartView.prototype.onOBNewOrder_ = function(e){
  if (!goog.isDefAndNotNull(this.order_book_offer_)){
    return;
  }

  var model = this.getApplication().getModel();

  var msg   = e.data;
  var index = msg['MDEntryPositionNo'] - 1;
  var price = msg['MDEntryPx'];
  var qty   = msg['MDEntrySize'];

  var username;
  if (goog.isDefAndNotNull(msg['Username'])) {
    username = msg['Username'];
  } else {
    username = bitex.util.getPseudoName(msg['UserID'], msg['Broker']);
  }

  if (msg['UserID'] === model.get('UserID')) {
    username = model.get('Username');
  }

  var broker  = msg['Broker'];
  var orderId = msg['OrderID'];
  var side    = msg['MDEntryType'];

  if (side == '0') {
    this.order_book_bid_.insertOrder(index, orderId, price, qty, username, broker);
  } else if (side == '1') {
    this.order_book_offer_.insertOrder(index, orderId, price, qty, username, broker);
  }
};

/**
 * @return {number}
 */
bitex.view.StartView.prototype.getMDSubscriptionId = function(){
  return this.market_data_subscription_id_;
};

/**
 * @return {Array.<string>}
 */
bitex.view.StartView.prototype.getMDInstruments = function(){
  return [this.market_data_subscription_symbol_];
};

/**
 * @return {number}
 */
bitex.view.StartView.prototype.getMDMarketDepth = function(){
  return 10;
};

/**
 * @return {Array.<string>}
 */
bitex.view.StartView.prototype.getMDEntries = function(){
  return ['0', '1'];
};

bitex.view.StartView.prototype.getOrderId = function() {
  return this.order_id_;
};

bitex.view.StartView.prototype.getClientOrderId = function() {
  return this.client_order_id_;
};
