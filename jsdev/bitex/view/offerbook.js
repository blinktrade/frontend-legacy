goog.provide('bitex.view.OfferBookView');
goog.provide('bitex.view.OfferBookView.EventType');

goog.require('bitex.view.View');
goog.require('bitex.view.View.EventType');

goog.require('bitex.ui.AdvancedOrderEntry');

goog.require('bootstrap.Button');
goog.require('bootstrap.ButtonRenderer');
goog.require('goog.ui.ToggleButton');

goog.require('bitex.ui.LockedBalanceDisplay');

/**
 * @param {*} app
 * @param {goog.dom.DomHelper=} opt_domHelper
 * @constructor
 * @extends {bitex.view.View}
 */
bitex.view.OfferBookView = function(app, opt_domHelper) {
  bitex.view.View.call(this, app, opt_domHelper);

  this.order_book_bid_ = null;
  this.order_book_offer_ = null;
  this.locked_balance_display_ = null;

  this.market_data_subscription_id_ = null;
  this.market_data_subscription_symbol_ = null;

  this.order_id_ = null;
  this.client_order_id = null;
};
goog.inherits(bitex.view.OfferBookView, bitex.view.View);


/**
 * @type {bitex.ui.OrderBook}
 */
bitex.view.OfferBookView.prototype.order_book_bid_;

/**
 * @type {bitex.ui.OrderBook}
 */
bitex.view.OfferBookView.prototype.order_book_offer_;

/**
 * @type {bitex.ui.LockedBalanceDisplay}
 */
bitex.view.OfferBookView.prototype.locked_balance_display_;

/**
 * @type {number}
 */
bitex.view.OfferBookView.prototype.market_data_subscription_id_;

/**
 * @type {string}
 */
bitex.view.OfferBookView.prototype.market_data_subscription_symbol_;

/**
 * @type {number}
 */
bitex.view.OfferBookView.prototype.order_id_;

/**
 * @type {number}
 */
bitex.view.OfferBookView.prototype.client_order_id;

/**
 * @type {bitex.ui.AdvancedOrderEntry}
 */
bitex.view.OfferBookView.prototype.buy_order_entry_;

/**
 * @type {bitex.ui.AdvancedOrderEntry}
 */
bitex.view.OfferBookView.prototype.sell_order_entry_;

/**
 * @type {bootstrap.Button}
 */
bitex.view.OfferBookView.prototype.cum_qty_btn_;

/**
 * @type {bootstrap.Button}
 */
bitex.view.OfferBookView.prototype.fee_btn_;

/**
 * The events fired
 * @enum {string} The event types
 */
bitex.view.OfferBookView.EventType = {
};

bitex.view.OfferBookView.prototype.enterView = function() {
  goog.base(this, 'enterView');

  var model = this.getApplication().getModel();
  if (goog.isDefAndNotNull(model.get('SelectedBrokerID')) && goog.isDefAndNotNull(model.get('SelectedSymbol')) ) {
    this.onSelectedSymbol_();
    this.onSelectedBrokerID_();
  }
};

bitex.view.OfferBookView.prototype.exitView = function() {
  goog.base(this, 'exitView');
  this.destroyOrderBookComponents_();
};

/**
 * @param {Element} element Element to decorate.
 * @protected
 */
bitex.view.OfferBookView.prototype.decorateInternal = function(element) {
  this.setElementInternal(element);

  this.buy_order_entry_ = new bitex.ui.AdvancedOrderEntry( {side: 1, type:2} );
  this.sell_order_entry_ = new bitex.ui.AdvancedOrderEntry( {side: 2, type:2} );
  this.locked_balance_display_ = new bitex.ui.LockedBalanceDisplay();

  this.getContentElement = function() {
    return goog.dom.getElement('offer_book_order_entry_content');
  };

  this.addChild(this.buy_order_entry_, true);
  this.addChild(this.sell_order_entry_, true);
  this.addChild(this.locked_balance_display_, true);

};

/**
 * @private
 */
bitex.view.OfferBookView.prototype.destroyOrderBookComponents_ = function( ) {
  var handler = this.getHandler();

  if (goog.isDefAndNotNull(this.order_book_bid_) ) {
    handler.unlisten(this.order_book_bid_ ,bitex.ui.OrderBook.EventType.CANCEL, this.onCancelOrder_ );
    handler.unlisten(this.order_book_bid_ ,bitex.ui.OrderBook.EventType.QTY_CLICK, this.onPriceQtyClick_ );
    handler.unlisten(this.order_book_bid_ ,bitex.ui.OrderBook.EventType.PRICE_CLICK, this.onPriceQtyClick_ );
    handler.unlisten(this.order_book_bid_ ,bitex.ui.OrderBook.EventType.CANCEL_REPLACE, goog.bind(this.onCancelReplaceOrder_, this, '1'));


    this.order_book_bid_.dispose();
  }
  if (goog.isDefAndNotNull(this.order_book_offer_) ) {
    handler.unlisten(this.order_book_offer_ ,bitex.ui.OrderBook.EventType.CANCEL, this.onCancelOrder_ );
    handler.unlisten(this.order_book_offer_ ,bitex.ui.OrderBook.EventType.QTY_CLICK, this.onPriceQtyClick_ );
    handler.unlisten(this.order_book_offer_ ,bitex.ui.OrderBook.EventType.PRICE_CLICK, this.onPriceQtyClick_ );
    handler.unlisten(this.order_book_offer_ ,bitex.ui.OrderBook.EventType.CANCEL_REPLACE, goog.bind(this.onCancelReplaceOrder_, this, '2'));

    this.order_book_offer_.dispose();
  }
  if (goog.isDefAndNotNull(this.market_data_subscription_id_)) {
    var conn = this.getApplication().getBitexConnection();
    handler.unlisten( conn, bitex.api.BitEx.EventType.ORDER_BOOK_CLEAR + '.' + this.market_data_subscription_id_, this.onOBClear_);
    handler.unlisten( conn, bitex.api.BitEx.EventType.ORDER_BOOK_DELETE_ORDERS_THRU + '.' + this.market_data_subscription_id_, this.onOBDeleteOrdersThru_);
    handler.unlisten( conn, bitex.api.BitEx.EventType.ORDER_BOOK_DELETE_ORDER + '.' + this.market_data_subscription_id_, this.onOBDeleteOrder_);
    handler.unlisten( conn, bitex.api.BitEx.EventType.ORDER_BOOK_UPDATE_ORDER + '.' + this.market_data_subscription_id_, this.onOBUpdateOrder_);
    handler.unlisten( conn, bitex.api.BitEx.EventType.ORDER_BOOK_NEW_ORDER + '.' + this.market_data_subscription_id_, this.onOBNewOrder_);

    this.dispatchEvent(bitex.view.View.EventType.MARKET_DATA_UNSUBSCRIBE);
    this.market_data_subscription_id_ = null;
    this.market_data_subscription_symbol_ = null;
  }

  this.order_book_bid_ = null;
  this.order_book_offer_ = null;
};

/**
 * @param {*} selected_symbol
 * @private
 */
bitex.view.OfferBookView.prototype.recreateOrderBookComponents_ = function( selected_symbol ) {
  var handler = this.getHandler();
  var model = this.getApplication().getModel();

  if (this.market_data_subscription_symbol_ === selected_symbol.symbol) {
    return;
  }

  this.destroyOrderBookComponents_();

  this.order_book_bid_ =  new bitex.ui.OrderBook(model.get('Username'),
                                                 bitex.ui.OrderBook.Side.BUY,
                                                 selected_symbol.qty_currency,
                                                 selected_symbol.price_currency);

  this.order_book_offer_ =  new bitex.ui.OrderBook(model.get('Username'),
                                                   bitex.ui.OrderBook.Side.SELL,
                                                   selected_symbol.qty_currency,
                                                   selected_symbol.price_currency);

  this.order_book_bid_.render( goog.dom.getElement('id_order_book_bid_content') );
  this.order_book_offer_.render( goog.dom.getElement('id_order_book_ask_content') );

  var fee_buy = this.getApplication().getModel().get('Broker')['TransactionFeeBuy'] / 10000 ;
  if (goog.isDefAndNotNull(this.getApplication().getModel().get('Profile')['TransactionFeeBuy'])) {
    fee_buy = this.getApplication().getModel().get('Profile')['TransactionFeeBuy'] / 10000;
  }
  var fee_sell = this.getApplication().getModel().get('Broker')['TransactionFeeSell'] / 10000 ;
  if (goog.isDefAndNotNull(this.getApplication().getModel().get('Profile')['TransactionFeeSell'])) {
    fee_sell = this.getApplication().getModel().get('Profile')['TransactionFeeSell'] / 10000;
  }
  this.order_book_bid_.setFee(fee_buy * -1);
  this.order_book_offer_.setFee(fee_sell);

  var cum_qty_el = goog.dom.getElementByClass('btn-show-cum-qty', this.getElement());
  if (goog.isDefAndNotNull(cum_qty_el)) {
    this.cum_qty_btn_ = new goog.ui.ToggleButton(undefined, bootstrap.ButtonRenderer.getInstance());
    this.cum_qty_btn_.setSupportedState(goog.ui.Component.State.CHECKED, true);
    this.cum_qty_btn_.decorate(cum_qty_el);
  }

  var fee_btn_el = goog.dom.getElementByClass('btn-show-fees', this.getElement());
  if (goog.isDefAndNotNull(fee_btn_el)) {
    this.fee_btn_ = new goog.ui.ToggleButton(undefined, bootstrap.ButtonRenderer.getInstance());
    this.fee_btn_.setSupportedState(goog.ui.Component.State.CHECKED, true);
    this.fee_btn_.decorate(fee_btn_el);
  }

  if (goog.isDefAndNotNull(this.cum_qty_btn_)) {
    handler.listen(this.cum_qty_btn_, goog.ui.Component.EventType.ACTION, this.onCumQtyClick_);
  }

  if (goog.isDefAndNotNull(this.fee_btn_)) {
    handler.listen(this.fee_btn_, goog.ui.Component.EventType.ACTION, this.onFeesClick_);
  }

  handler.listen(this.order_book_bid_ ,bitex.ui.OrderBook.EventType.CANCEL, this.onCancelOrder_ );
  handler.listen(this.order_book_bid_ ,bitex.ui.OrderBook.EventType.CANCEL_REPLACE, goog.bind(this.onCancelReplaceOrder_, this, '1'));
  handler.listen(this.order_book_offer_ ,bitex.ui.OrderBook.EventType.CANCEL, this.onCancelOrder_ );
  handler.listen(this.order_book_offer_ ,bitex.ui.OrderBook.EventType.CANCEL_REPLACE, goog.bind(this.onCancelReplaceOrder_, this, '2'));


  handler.listen(this.order_book_bid_ ,bitex.ui.OrderBook.EventType.QTY_CLICK, goog.bind(this.onPriceQtyClick_, this, 'bid'));
  handler.listen(this.order_book_bid_ ,bitex.ui.OrderBook.EventType.PRICE_CLICK, goog.bind(this.onPriceQtyClick_, this, 'bid'));

  handler.listen(this.order_book_offer_ ,bitex.ui.OrderBook.EventType.QTY_CLICK, goog.bind(this.onPriceQtyClick_, this, 'ask'));
  handler.listen(this.order_book_offer_ ,bitex.ui.OrderBook.EventType.PRICE_CLICK, goog.bind(this.onPriceQtyClick_, this, 'ask'));


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

/**
 * @override
 * @protected
 */
bitex.view.OfferBookView.prototype.enterDocument = function() {
  goog.base(this, 'enterDocument');

  var handler = this.getHandler();

  var model = this.getApplication().getModel();
  handler.listen(model, bitex.model.Model.EventType.SET + 'SelectedSymbol',   this.onSelectedSymbol_);
  handler.listen(model, bitex.model.Model.EventType.SET + 'SelectedBrokerID', this.onSelectedBrokerID_);
};

bitex.view.OfferBookView.prototype.onFeesClick_ = function(e) {
  var isActive = this.fee_btn_.hasState(goog.ui.Component.State.ACTIVE);
  this.fee_btn_.setActive(!isActive);

  this.order_book_bid_.showFees(this.fee_btn_.hasState(goog.ui.Component.State.ACTIVE));
  this.order_book_offer_.showFees(this.fee_btn_.hasState(goog.ui.Component.State.ACTIVE));
};

bitex.view.OfferBookView.prototype.onCumQtyClick_ = function(e) {
  var isActive = this.cum_qty_btn_.hasState(goog.ui.Component.State.ACTIVE);
  this.cum_qty_btn_.setActive( !isActive );

  if (this.cum_qty_btn_.hasState(goog.ui.Component.State.ACTIVE)) {
    this.order_book_bid_.showCumulativeQty();
    this.order_book_offer_.showCumulativeQty();
  } else {
    this.order_book_bid_.showQty();
    this.order_book_offer_.showQty();
  }
};

/**
 * @param  {bitex.model.ModelEvent} e
 * @private
 */
bitex.view.OfferBookView.prototype.onSelectedBrokerID_ = function(e){
  var model = this.getApplication().getModel();

  var selected_broker_id = model.get('SelectedBrokerID');
  var selected_symbol = model.get('SelectedSymbol');
  selected_symbol = goog.isDefAndNotNull(selected_symbol) ? selected_symbol.symbol : null;

  if (!goog.isDefAndNotNull(model.get('UserBrokers'))) {
    return;
  }

  var selectedBroker = model.get('UserBrokers')[ selected_broker_id ];
  this.buy_order_entry_.setBrokerID(selected_broker_id);
  this.buy_order_entry_.setClientID(model.get('UserID'));
  this.sell_order_entry_.setBrokerID(selected_broker_id);
  this.sell_order_entry_.setClientID(model.get('UserID'));
  this.locked_balance_display_.setAccountID(model.get('UserID'));
  this.locked_balance_display_.setBrokerID(selected_broker_id);


  var market = selectedBroker['AllowedMarkets'][selected_symbol];
  goog.style.showElement( this.sell_order_entry_.getElement(), goog.isDefAndNotNull( market));
  goog.style.showElement( this.buy_order_entry_.getElement(), goog.isDefAndNotNull( market));
  goog.style.showElement( this.locked_balance_display_.getElement(), goog.isDefAndNotNull( market));

  this.buy_order_entry_.setBrokerMode(model.get('IsBroker'));
  this.sell_order_entry_.setBrokerMode(model.get('IsBroker'));

  model.updateDom();
};

/**
 * @param  {bitex.model.ModelEvent} e
 * @private
 */
bitex.view.OfferBookView.prototype.onSelectedSymbol_ = function(e){
  var model = this.getApplication().getModel();
  var selected_symbol = model.get('SelectedSymbol');
  var selected_broker_id = model.get('SelectedBrokerID');

  if (!goog.isDefAndNotNull(model.get('UserBrokers'))) {
    return;
  }

  var selectedBroker = model.get('UserBrokers')[ selected_broker_id ];
  var symbol = selected_symbol.symbol;

  this.buy_order_entry_.setSymbol(symbol);
  if (goog.isDefAndNotNull(selected_symbol.qty_currency)) {
    this.buy_order_entry_.setAmountCurrency( selected_symbol.qty_currency.sign,
                                             selected_symbol.qty_currency.code,
                                             selected_symbol.qty_currency.pip,
                                             selected_symbol.qty_currency.number_of_decimals );

  }
  if (goog.isDefAndNotNull(selected_symbol.price_currency)) {
    this.buy_order_entry_.setPriceCurrency( selected_symbol.price_currency.sign,
                                            selected_symbol.price_currency.code,
                                            selected_symbol.price_currency.pip,
                                            selected_symbol.price_currency.number_of_decimals);
  }

  this.sell_order_entry_.setSymbol(symbol);
  if (goog.isDefAndNotNull(selected_symbol.qty_currency)) {
    this.sell_order_entry_.setAmountCurrency( selected_symbol.qty_currency.sign,
                                              selected_symbol.qty_currency.code,
                                              selected_symbol.qty_currency.pip,
                                              selected_symbol.qty_currency.number_of_decimals );
  }
  if (goog.isDefAndNotNull(selected_symbol.price_currency)) {
    this.sell_order_entry_.setPriceCurrency( selected_symbol.price_currency.sign,
                                             selected_symbol.price_currency.code,
                                             selected_symbol.price_currency.pip,
                                             selected_symbol.price_currency.number_of_decimals);
  }

  this.locked_balance_display_.setBuyCurrency(selected_symbol.price_currency.code);
  this.locked_balance_display_.setSellCurrency(selected_symbol.qty_currency.code);
  this.locked_balance_display_.setBrokerID(selected_broker_id);
  this.locked_balance_display_.setAccountID(model.get('UserID'));

  this.buy_order_entry_.setBrokerID(selected_broker_id);
  this.sell_order_entry_.setBrokerID(selected_broker_id);

  var market;
  if (goog.isDefAndNotNull(selectedBroker)) {
    market = selectedBroker['AllowedMarkets'][symbol];
  }

  goog.style.showElement( this.sell_order_entry_.getElement(), goog.isDefAndNotNull( market));
  goog.style.showElement( this.buy_order_entry_.getElement(), goog.isDefAndNotNull( market));

  if (model.get('IsBroker')) {
    this.buy_order_entry_.setBrokerMode(true);
    this.sell_order_entry_.setBrokerMode(true);
  } else {
    this.buy_order_entry_.setBrokerMode(false);
    this.sell_order_entry_.setBrokerMode(false);
  }

  model.updateDom();
  this.recreateOrderBookComponents_(selected_symbol);
};



bitex.view.OfferBookView.prototype.onOBClear_ = function(e){
  if (!goog.isDefAndNotNull(this.order_book_offer_)) {
    return;
  }
  this.order_book_bid_.clear();
  this.order_book_offer_.clear();
};

bitex.view.OfferBookView.prototype.onOBDeleteOrdersThru_ = function(e){
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

bitex.view.OfferBookView.prototype.onOBDeleteOrder_ = function(e){
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

bitex.view.OfferBookView.prototype.onOBUpdateOrder_ = function(e){
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

bitex.view.OfferBookView.prototype.onOBNewOrder_ = function(e){
  if (!goog.isDefAndNotNull(this.order_book_offer_)){
    return;
  }
  var model = this.getApplication().getModel();

  var msg       = e.data;
  var index     = msg['MDEntryPositionNo'] - 1;
  var price     = msg['MDEntryPx'];
  var qty       = msg['MDEntrySize'];


  var username;
  if (goog.isDefAndNotNull(msg['Username'])) {
    username = msg['Username'];
  } else {
    username  = bitex.util.getPseudoName(msg['UserID'], msg['Broker']);
  }

  if (msg['UserID'] === model.get('UserID') ) {
    username = model.get('Username');
  }

  var broker    = msg['Broker'];
  var orderId   = msg['OrderID'];
  var side      = msg['MDEntryType'];

  if (side == '0') {
    this.order_book_bid_.insertOrder(index, orderId, price, qty, username, broker );
  } else if (side == '1') {
    this.order_book_offer_.insertOrder(index, orderId, price, qty, username, broker );
  }
};



/**
 * @return {number}
 */
bitex.view.OfferBookView.prototype.getMDSubscriptionId = function(){
  return this.market_data_subscription_id_;
};

/**
 * @return {Array.<string>}
 */
bitex.view.OfferBookView.prototype.getMDInstruments = function(){
  return [this.market_data_subscription_symbol_];
};

/**
 * @return {number}
 */
bitex.view.OfferBookView.prototype.getMDMarketDepth = function(){
  return 1000;
};

/**
 * @return {Array.<string>}
 */
bitex.view.OfferBookView.prototype.getMDEntries = function(){
  return ['0', '1'];
};

bitex.view.OfferBookView.prototype.getOrderId = function() {
  return this.order_id_;
};

bitex.view.OfferBookView.prototype.getClientOrderId = function() {
  return this.client_order_id_;
};

bitex.view.OfferBookView.prototype.onCancelOrder_ = function(e) {
  this.order_id_        = e.order_id;
  this.client_order_id_ = e.client_order_id;

  this.dispatchEvent(bitex.view.View.EventType.CANCEL_ORDER);
};

bitex.view.OfferBookView.prototype.getSymbol = function(){
  var model = this.getApplication().getModel();
  return  model.get('SelectedSymbol').symbol;
};

bitex.view.OfferBookView.prototype.getAmount = function(){
  return this.new_order_amount_;
};

bitex.view.OfferBookView.prototype.getPrice = function(){
  return this.new_order_price_;
};

bitex.view.OfferBookView.prototype.getSide = function(){
  return this.new_order_side_;
};

bitex.view.OfferBookView.prototype.getBrokerID = function(){
  var model = this.getApplication().getModel();
  return model.get('SelectedBrokerID');
};

bitex.view.OfferBookView.prototype.getClientID = function(){
  var model = this.getApplication().getModel();
  return model.get('UserID');
};


bitex.view.OfferBookView.prototype.onCancelReplaceOrder_ = function(side, e) {
  this.order_id_          = e.order_id;
  this.client_order_id_   = undefined;
  this.new_order_amount_  = e.qty;
  this.new_order_price_   = e.price;
  this.new_order_side_    = side;

  this.dispatchEvent(bitex.view.View.EventType.CANCEL_REPLACE_ORDER);
};


bitex.view.OfferBookView.prototype.onPriceQtyClick_ = function(side, e) {
  this.buy_order_entry_.setPrice(e.price);
  this.sell_order_entry_.setPrice(e.price);

  var symbol = this.buy_order_entry_.getSymbol();
  var qty_currency = this.getApplication().getQtyCurrencyFromSymbol(symbol);
  var price_currency = this.getApplication().getPriceCurrencyFromSymbol(symbol);

  var available_qty = this.getApplication().getBalance(qty_currency, "available");
  available_qty = new bitex.primitives.Price(available_qty,
                                             this.getApplication().getCurrencyPip(qty_currency)).floor();

  var available_price_currency = this.getApplication().getBalance(price_currency, "available");
  available_price_currency = new bitex.primitives.Price(available_price_currency,
                                                        this.getApplication().getCurrencyPip(price_currency)).floor();

  var max_bid_amount = parseInt(available_price_currency / e.price  * 1e8, 10);

  if (side == 'bid') {
    this.sell_order_entry_.setAmount(Math.min(available_qty, e.cum_qty));
    this.buy_order_entry_.setAmount( Math.min(e.qty, max_bid_amount));
  } else {
    this.buy_order_entry_.setAmount( Math.min(e.cum_qty, max_bid_amount));
    this.sell_order_entry_.setAmount(Math.min(available_qty, e.qty));
  }
  this.buy_order_entry_.setTotal((this.buy_order_entry_.getPrice() * this.buy_order_entry_.getAmount()) / 1e8);
  this.sell_order_entry_.setTotal((this.sell_order_entry_.getPrice() * this.sell_order_entry_.getAmount()) / 1e8);
};

/**
 * @override
 * @protected
 */
bitex.view.OfferBookView.prototype.exitDocument = function() {
  goog.base(this, 'exitDocument');
  this.destroyOrderBookComponents_();
};
