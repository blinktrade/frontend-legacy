goog.provide('bitex.ui.SimpleOrderBook');
goog.provide('bitex.ui.SimpleOrderBook.Side');
// goog.provide('bitex.ui.OrderBook.EventType');
// goog.provide('bitex.ui.OrderBookEvent');

goog.require('bitex.ui.OrderBook.templates');
goog.require('goog.i18n.NumberFormat');
goog.require('goog.ui.Component');
goog.require('goog.dom.classes');
goog.require('goog.object');

goog.require('goog.Timer');
goog.require('bitex.ui.OrderBookCurrencyModel');

goog.require('bitex.primitives.Price');

// goog.require('goog.style');

/**
 * @typedef {{ code:String, format:String, description:String, sign:String, pip:number, is_crypto:Boolean  }}
 */
bitex.ui.SimpleOrderBookCurrencyModel;


/**
 * @param {string} username
 * @param {bitex.ui.SimpleOrderBook.Side} side
 * @param {bitex.ui.OrderBookCurrencyModel} qtyCurrencyDef
 * @param {bitex.ui.OrderBookCurrencyModel} priceCurrencyDef
 * @param {number} opt_blinkDelay. Defaults to 1200 milliseconds
 * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
 *
 * @extends {goog.ui.Component}
 * @constructor
 */
bitex.ui.SimpleOrderBook = function(side, qtyCurrencyDef, priceCurrencyDef, opt_blinkDelay, opt_domHelper) {
  goog.base(this, opt_domHelper);

  this.blink_delay_ = opt_blinkDelay || 1200;

  this.qtyCurrencyDef_ = qtyCurrencyDef;
  this.priceCurrencyDef_ = priceCurrencyDef;

  this.side_ = side;

  this.show_cum_qty_ = false;
  this.show_fees_ = false;
  this.fee_ = 1;

};
goog.inherits(bitex.ui.SimpleOrderBook, goog.ui.Component);

/**
 * @enum {string}
 */
bitex.ui.SimpleOrderBook.Side = {
  BUY: '0',
  SELL: '1'
};

/**
 * @type {bitex.ui.SimpleOrderBook.Side}
 * @private
 */
bitex.ui.SimpleOrderBook.prototype.side_;

/**
 * @type {bitex.ui.OrderBookCurrencyModel}
 * @private
 */
bitex.ui.SimpleOrderBook.prototype.qtyCurrencyDef_;

/**
 * @type {bitex.ui.OrderBookCurrencyModel}
 * @private
 */
bitex.ui.SimpleOrderBook.prototype.priceCurrencyDef_;

/**
 * @type {number}
 * @private
 */
bitex.ui.SimpleOrderBook.prototype.blink_delay_;

/**
 * @type {Element}
 * @private
 */
bitex.ui.SimpleOrderBook.prototype.bodyEl_;

/**
 * @type {boolean}
 * @private
 */
bitex.ui.SimpleOrderBook.prototype.show_cum_qty_;

/**
 * @type {boolean}
 * @private
 */
bitex.ui.SimpleOrderBook.prototype.show_fees_;

/**
 * @type {number}
 * @private
 */
bitex.ui.SimpleOrderBook.prototype.fee_;



/** @override */
bitex.ui.SimpleOrderBook.prototype.createDom = function() {
  /**
   * @desc Title in the bid side on the order book
   */
  var MSG_SIMPLE_ORDER_BOOK_BID_TITLE = goog.getMsg('BID');

  /**
   * @desc Title in the ask side on the order book
   */
  var MSG_SIMPLE_ORDER_BOOK_ASK_TITLE = goog.getMsg('ASK');

  /**
   * @desc Buyer column on the order book
   */
  var MSG_SIMPLE_ORDER_BOOK_BUYER_COLUMN = goog.getMsg('Buyer');

  /**
   * @desc Seller column on the order book
   */
  var MSG_SIMPLE_ORDER_BOOK_SELLER_COLUMN = goog.getMsg('Seller');

  /**
   * @desc Amount column on the order book
   */
  var MSG_SIMPLE_ORDER_BOOK_AMOUNT_COLUMN = goog.getMsg('Amount');

  /**
   * @desc Price column on the order book
   */
  var MSG_SIMPLE_ORDER_BOOK_PRICE_COLUMN = goog.getMsg('Price');

  var title = MSG_SIMPLE_ORDER_BOOK_BID_TITLE;
  var columns = [MSG_SIMPLE_ORDER_BOOK_BUYER_COLUMN, MSG_SIMPLE_ORDER_BOOK_AMOUNT_COLUMN, MSG_SIMPLE_ORDER_BOOK_PRICE_COLUMN];

  if (this.side_ == bitex.ui.SimpleOrderBook.Side.SELL) {
    title = MSG_SIMPLE_ORDER_BOOK_ASK_TITLE;
    columns = [MSG_SIMPLE_ORDER_BOOK_PRICE_COLUMN, MSG_SIMPLE_ORDER_BOOK_AMOUNT_COLUMN, MSG_SIMPLE_ORDER_BOOK_SELLER_COLUMN];
  }

  var el = goog.soy.renderAsElement(bitex.ui.OrderBook.templates.OrderBook, {
    title: title,
    columns: columns
  });
  this.decorateInternal(el);
};

bitex.ui.SimpleOrderBook.prototype.setFee = function(fee) {
  this.fee_ = fee;
};

/**
 * @return {boolean}
 */
bitex.ui.SimpleOrderBook.prototype.isShowingCumQty = function(){
  return this.show_cum_qty_;
};

/** @override */
bitex.ui.SimpleOrderBook.prototype.decorateInternal = function(element) {
  this.setElementInternal(element);

  var dom = this.getDomHelper();

  this.bodyEl_ = dom.getElementsByTagNameAndClass('tbody', undefined, element)[0];
};

/** @override */
bitex.ui.SimpleOrderBook.prototype.enterDocument = function() {
  goog.base(this, 'enterDocument');
};


/**
 *
 * @param {string} type
 * @param {string=} opt_orderId
 * @param {number=} opt_qty
 * @param {number=} opt_cum_qty
 * @param {number=} opt_price
 * @extends {goog.events.Event}
 * @constructor
 */
bitex.ui.SimpleOrderBookEvent = function(type, opt_orderId, opt_qty, opt_cum_qty, opt_price) {
  goog.events.Event.call(this, type);

  /**
   * @type {string}
   */
  this.order_id = opt_orderId;

  /**
   * @type {number}
   */
  this.qty = opt_qty;

  /**
   * @type {number}
   */
  this.cum_qty = opt_cum_qty;

  /**
   * @type {number}
   */
  this.price = opt_price;
};
goog.inherits(bitex.ui.SimpleOrderBookEvent, goog.events.Event);


bitex.ui.SimpleOrderBook.prototype.clear = function(){
  var dom = this.getDomHelper();
  goog.dom.removeChildren(this.bodyEl_);
};


/**
 * @param {number} index
 * @param {number} qty
 */
bitex.ui.SimpleOrderBook.prototype.updateOrder = function(index, qty) {
  var dom = this.getDomHelper();

  var formatter = new goog.i18n.NumberFormat(this.qtyCurrencyDef_.format, this.qtyCurrencyDef_.code);
  formatted_qty = formatter.format(qty/1e8);

  var row_elements = dom.getChildren(this.bodyEl_);

  var trEl = row_elements[index];
  var old_qty = trEl.getAttribute('data-qty-value');
  var diff_qty = qty - old_qty;


  trEl.setAttribute('data-qty-value', qty);


  // update cumulative qty of the following orders
  for (var next_index = index; next_index < row_elements.length; ++next_index) {
    var nextRowEl = row_elements[next_index];
    var new_cum_qty = parseInt(nextRowEl.getAttribute('data-cum-qty-value'), 10) + diff_qty;
    nextRowEl.setAttribute('data-cum-qty-value',new_cum_qty);

    if (this.show_cum_qty_){
      var formatted_cum_qty = formatter.format(new_cum_qty/1e8);
      dom.setTextContent(dom.getChildren(nextRowEl)[1], formatted_cum_qty);
    }
  }

  var tdQtyEl = dom.getChildren(trEl)[1];
  if (!this.show_cum_qty_){
    dom.setTextContent(tdQtyEl, formatted_qty);
  }

  var blink_class = 'md-blink';
  goog.dom.classes.add(tdQtyEl, blink_class);

  goog.Timer.callOnce(function(){
    goog.dom.classes.remove(tdQtyEl, blink_class);
  }, this.blink_delay_, this);
};

/**
 * @param {number} index
 * @param {string} id
 * @param {number} price
 * @param {number} qty
 * @param {string} username
 * @param {string} broker
 */
bitex.ui.SimpleOrderBook.prototype.insertOrder = function(index, id, price, qty, username, broker) {
  var dom = this.getDomHelper();

  var qty_formatter = new goog.i18n.NumberFormat(this.qtyCurrencyDef_.format, this.qtyCurrencyDef_.code);
  formatted_qty = qty_formatter.format(qty/1e8);

  var price_formatter = new goog.i18n.NumberFormat(this.priceCurrencyDef_.format, this.priceCurrencyDef_.code);
  if (this.show_fees_) {
    price = price + price * this.fee_;
  }
  formatted_price = price_formatter.format(price/1e8);

  var orderId = null;
  if (username === this.username_ || broker === this.username_){
    orderId = id;
  }

  var tmpWrapper = dom.createDom(goog.dom.TagName.TABLE, undefined, dom.createDom(goog.dom.TagName.TBODY));
  tmpWrapper.innerHTML = bitex.ui.OrderBook.templates.OrderBookOrderRow({
    username: username,
    qty: formatted_qty,
    price: formatted_price,
    side: this.side_,
    orderId: orderId
  });

  var rowEl = tmpWrapper.firstChild.firstChild;
  rowEl.setAttribute('data-order-id', id);

  var row_elements = dom.getChildren(this.bodyEl_);
  var cumulative_qty = qty;
  if (username == this.username_) {
    goog.dom.classes.add(rowEl, goog.getCssName(this.getBaseCssClass(), 'movable'));
  }

  rowEl.setAttribute('data-price-value', price);
  rowEl.setAttribute('data-qty-value', qty);
  if (index == 0) {
    rowEl.setAttribute('data-cum-qty-value', cumulative_qty);
  } else {
    var previousRowEl = row_elements[index-1];
    cumulative_qty += parseInt(previousRowEl.getAttribute('data-cum-qty-value'), 10);
    rowEl.setAttribute('data-cum-qty-value', cumulative_qty);
  }
  if (this.show_cum_qty_){
    var formatted_cumulative_qty = qty_formatter.format(cumulative_qty / 1e8);
    dom.setTextContent(dom.getChildren( rowEl )[1], formatted_cumulative_qty);
  }

  // update cumulative qty of the following orders
  for (var next_index = index; next_index < row_elements.length; ++next_index) {
    var nextRowEl = row_elements[next_index];
    var new_cum_qty = parseInt(nextRowEl.getAttribute('data-cum-qty-value'), 10) + qty;
    nextRowEl.setAttribute('data-cum-qty-value',new_cum_qty);

     if (this.show_cum_qty_){
      var formatted_cum_qty = qty_formatter.format(new_cum_qty / 1e8);
      dom.setTextContent(dom.getChildren(nextRowEl)[1], formatted_cum_qty);
    }
  }

  dom.insertChildAt(this.bodyEl_, rowEl, index);

  var blink_class = 'md-blink';
  goog.dom.classes.add(rowEl,  blink_class);

  goog.Timer.callOnce(function(){
    goog.dom.classes.remove(rowEl, blink_class);
  }, this.blink_delay_ , this);
};

