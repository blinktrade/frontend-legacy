goog.provide('bitex.ui.OrderBook');
goog.provide('bitex.ui.OrderBookDrag');
goog.provide('bitex.ui.OrderBook.Side');
goog.provide('bitex.ui.OrderBook.EventType');
goog.provide('bitex.ui.OrderBookEvent');

goog.require('bitex.ui.OrderBook.templates');
goog.require('goog.i18n.NumberFormat');
goog.require('goog.ui.Component');
goog.require('goog.dom.classes');
goog.require('goog.object');

goog.require('goog.Timer');
goog.provide('bitex.ui.OrderBookCurrencyModel');

goog.require('bitex.primitives.Price');

goog.require('goog.style');
goog.require('goog.fx.DragDrop');
goog.require('goog.fx.DragDropGroup');

/**
 * @constructor
 */
bitex.ui.OrderBookDrag =  function() {
  goog.fx.DragDropGroup.call(this);
};
goog.inherits(bitex.ui.OrderBookDrag, goog.fx.DragDropGroup);

bitex.ui.OrderBookDrag.prototype.createDragElement = function(element) {
  return goog.soy.renderAsElement(bitex.ui.OrderBook.templates.OrderBookDragOrder, {
    price: parseInt(element.getAttribute('data-price-value'), 10 )
  });
};


/**
 * @typedef {{ code:String, format:String, description:String, sign:String, pip:number, is_crypto:Boolean  }}
 */
bitex.ui.OrderBookCurrencyModel;


/**
 * @param {string} username
 * @param {bitex.ui.OrderBook.Side} side
 * @param {bitex.ui.OrderBookCurrencyModel} qtyCurrencyDef
 * @param {bitex.ui.OrderBookCurrencyModel} priceCurrencyDef
 * @param {number} opt_blinkDelay. Defaults to 1200 milliseconds
 * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
 *
 * @extends {goog.ui.Component}
 * @constructor
 */
bitex.ui.OrderBook = function ( username, side, qtyCurrencyDef, priceCurrencyDef , opt_blinkDelay, opt_domHelper) {
  goog.base(this, opt_domHelper);

  this.blink_delay_ = opt_blinkDelay || 1200;

  this.qtyCurrencyDef_ = qtyCurrencyDef;
  this.priceCurrencyDef_ = priceCurrencyDef;

  this.username_ = username;
  this.side_ = side;

  this.show_cum_qty_ = false;
  this.show_fees_ = false;
  this.fee_ = 1;

  this.drag_drop_group_ = new bitex.ui.OrderBookDrag();
};
goog.inherits( bitex.ui.OrderBook, goog.ui.Component);

/**
 * @enum {string}
 */
bitex.ui.OrderBook.Side = {
  BUY: '0',
  SELL: '1'
};

/**
 * Events fired by Grid
 * @enum {string}
 */
bitex.ui.OrderBook.EventType = {
  CANCEL: 'cancel',
  CANCEL_REPLACE: 'cancel_replace',
  PRICE_CLICK: 'price_click',
  QTY_CLICK: 'qty_click'
};


/**
 * @type {string}
 * @private
 */
bitex.ui.OrderBook.prototype.username_;


/**
 * @type {bitex.ui.OrderBook.Side}
 * @private
 */
bitex.ui.OrderBook.prototype.side_;

/**
 * @type {bitex.ui.OrderBookCurrencyModel}
 * @private
 */
bitex.ui.OrderBook.prototype.qtyCurrencyDef_;

/**
 * @type {bitex.ui.OrderBookCurrencyModel}
 * @private
 */
bitex.ui.OrderBook.prototype.priceCurrencyDef_;

/**
 * @type {number}
 * @private
 */
bitex.ui.OrderBook.prototype.blink_delay_;

/**
 * @type {Element}
 * @private
 */
bitex.ui.OrderBook.prototype.bodyEl_;

/**
 * @type {boolean}
 * @private
 */
bitex.ui.OrderBook.prototype.show_cum_qty_;

/**
 * @type {boolean}
 * @private
 */
bitex.ui.OrderBook.prototype.show_fees_;

/**
 * @type {number}
 * @private
 */
bitex.ui.OrderBook.prototype.fee_;


/**
 * @type {bitex.ui.OrderBookDrag}
 * @private
 */
bitex.ui.OrderBook.prototype.drag_drop_group_;

/**
 * Name of base CSS class
 * @type {string}
 * @private
 */
bitex.ui.OrderBook.BASE_CSS_CLASS_ = goog.getCssName('order-book');

bitex.ui.OrderBook.prototype.getBaseCssClass = function() {
  return bitex.ui.OrderBook.BASE_CSS_CLASS_;
};

/** @override */
bitex.ui.OrderBook.prototype.createDom = function() {
  /**
   * @desc Title in the bid side on the order book
   */
  var MSG_ORDER_BOOK_BID_TITLE = goog.getMsg('BID');

  /**
   * @desc Title in the ask side on the order book
   */
  var MSG_ORDER_BOOK_ASK_TITLE = goog.getMsg('ASK');

  /**
   * @desc Buyer column on the order book
   */
  var MSG_ORDER_BOOK_BUYER_COLUMN = goog.getMsg('Buyer');

  /**
   * @desc Seller column on the order book
   */
  var MSG_ORDER_BOOK_SELLER_COLUMN = goog.getMsg('Seller');

  /**
   * @desc Amount column on the order book
   */
  var MSG_ORDER_BOOK_AMOUNT_COLUMN = goog.getMsg('Amount');

  /**
   * @desc Price column on the order book
   */
  var MSG_ORDER_BOOK_PRICE_COLUMN = goog.getMsg('Price');

  var title = MSG_ORDER_BOOK_BID_TITLE;
  var columns = [MSG_ORDER_BOOK_BUYER_COLUMN, MSG_ORDER_BOOK_AMOUNT_COLUMN, MSG_ORDER_BOOK_PRICE_COLUMN];

  if (this.side_ == bitex.ui.OrderBook.Side.SELL ) {
    title = MSG_ORDER_BOOK_ASK_TITLE;
    columns = [MSG_ORDER_BOOK_PRICE_COLUMN, MSG_ORDER_BOOK_AMOUNT_COLUMN, MSG_ORDER_BOOK_SELLER_COLUMN];
  }

  var el = goog.soy.renderAsElement(bitex.ui.OrderBook.templates.OrderBook, {
    side: this.side_,
    title: title,
    columns: columns
  });
  this.decorateInternal(el);
};

bitex.ui.OrderBook.prototype.setFee = function(fee) {
  this.fee_ = fee;
};

/**
 * @param {boolean} show
 */
bitex.ui.OrderBook.prototype.showFees = function(show) {
  this.show_fees_ = show;

  var price_element_index = 0;
  if (this.side_ ==  bitex.ui.OrderBook.Side.BUY) {
    price_element_index = 2;
  }

  var dom = this.getDomHelper();
  var formatter = new goog.i18n.NumberFormat( this.priceCurrencyDef_.format, this.priceCurrencyDef_.code );
  var row_elements = dom.getChildren(this.bodyEl_ );

  for (index = 0; index<row_elements.length; ++index) {
    var row_element = row_elements[index];
    var price = parseInt(row_element.getAttribute('data-price-value'),10 );

    if (this.show_fees_) {
      price = price + price * this.fee_;
    }

    var price_el = dom.getChildren( row_element )[price_element_index];
    dom.setTextContent(price_el, formatter.format(price/1e8));
  }
};


bitex.ui.OrderBook.prototype.showCumulativeQty = function() {
  this.show_cum_qty_ = true;

  var dom = this.getDomHelper();
  var formatter = new goog.i18n.NumberFormat( this.qtyCurrencyDef_.format, this.qtyCurrencyDef_.code );

  var row_elements = dom.getChildren(this.bodyEl_ );
  for (index = 0; index<row_elements.length; ++index) {
    var row_element = row_elements[index];
    var qty = parseInt(row_element.getAttribute('data-cum-qty-value'),10 );

    formatted_qty = formatter.format(qty/1e8);

    var tdQtyEl = dom.getChildren( row_element )[1];
    dom.setTextContent(tdQtyEl, formatted_qty);
  }
};

bitex.ui.OrderBook.prototype.showQty = function() {
  this.show_cum_qty_ = false;

  var dom = this.getDomHelper();
  var formatter = new goog.i18n.NumberFormat( this.qtyCurrencyDef_.format, this.qtyCurrencyDef_.code );

  var row_elements = dom.getChildren(this.bodyEl_ );
  for (index = 0; index<row_elements.length; ++index) {
    var row_element = row_elements[index];
    var qty = parseInt(row_element.getAttribute('data-qty-value'),10 );

    formatted_qty = formatter.format(qty/1e8);

    var tdQtyEl = dom.getChildren( row_element )[1];
    dom.setTextContent(tdQtyEl, formatted_qty);
  }
};

/**
 * @return {boolean}
 */
bitex.ui.OrderBook.prototype.isShowingCumQty = function(){
  return this.show_cum_qty_;
};

/** @override */
bitex.ui.OrderBook.prototype.decorateInternal = function(element) {
  this.setElementInternal(element);

  var dom = this.getDomHelper();

  this.bodyEl_ = dom.getElementsByTagNameAndClass('tbody', undefined, element)[0];
};

/** @override */
bitex.ui.OrderBook.prototype.enterDocument = function() {
  goog.base(this, 'enterDocument');
  this.getHandler().listen( this.getElement(), goog.events.EventType.CLICK, this.onClick_ );

  this.drag_drop_group_.addTarget(this.drag_drop_group_);
  this.drag_drop_group_.setSourceClass(goog.getCssName(this.getBaseCssClass(),  'source'));
  this.drag_drop_group_.setTargetClass(goog.getCssName(this.getBaseCssClass(),  'target'));
  this.drag_drop_group_.init();


  this.getHandler().listen( this.drag_drop_group_,
                            goog.fx.AbstractDragDrop.EventType.DRAG, this.onDrag_ );

  this.getHandler().listen( this.drag_drop_group_,
                            goog.fx.AbstractDragDrop.EventType.DROP, this.onDrop_ );

  this.getHandler().listen( this.drag_drop_group_,
                            goog.fx.AbstractDragDrop.EventType.DRAGOVER, this.onDragOver_ );

  this.getHandler().listen( this.drag_drop_group_,
                          goog.fx.AbstractDragDrop.EventType.DRAGOUT, this.onDragOut_ );

  this.getHandler().listen( this.drag_drop_group_,
                            goog.fx.AbstractDragDrop.EventType.DRAGSTART, this.onDragStart_ );

  this.getHandler().listen( this.drag_drop_group_,
                            goog.fx.AbstractDragDrop.EventType.DRAGEND, this.onDragEnd_ );

};


/**
 * @param {goog.fx.DragListGroupEvent} e
 */
bitex.ui.OrderBook.prototype.onDrag_  = function(e) {};

/**
 * @param {goog.fx.DragListGroupEvent} e
 */
bitex.ui.OrderBook.prototype.onDrop_  = function(e) {
  var dest_el  = e.dropTargetItem.element;
  goog.dom.classes.remove(dest_el,  goog.getCssName(this.getBaseCssClass(),  'drag') );

  var src_el = e.dragSourceItem.element;

  if (src_el !== dest_el) {
    var original_order_id = src_el.getAttribute('data-order-id');
    var original_qty = parseInt(src_el.getAttribute('data-qty-value'), 10);
    var cum_qty = parseInt(src_el.getAttribute('data-cum-qty-value'), 10);
    var original_price = parseInt(src_el.getAttribute('data-price-value'), 10);
    var pip = this.priceCurrencyDef_.pip;

    var new_price = parseInt(dest_el.getAttribute('data-price-value'), 10);
    var new_qty = original_qty;
    if (this.side_ ==  bitex.ui.OrderBook.Side.BUY) {
      new_price = new bitex.primitives.Price(new_price, pip).pipUp();
      new_qty = parseInt(original_price * original_qty / new_price, 10);
    } else {
      new_price = new bitex.primitives.Price(new_price, pip).pipDown();
    }

    this.dispatchEvent(
        new bitex.ui.OrderBookEvent(bitex.ui.OrderBook.EventType.CANCEL_REPLACE,
                                    original_order_id, new_qty, cum_qty,new_price));
  }
};

/**
 * @param {goog.fx.DragListGroupEvent} e
 */
bitex.ui.OrderBook.prototype.onDragOut_  = function(e) {
  goog.dom.classes.remove(e.dropTargetItem.element,  goog.getCssName(this.getBaseCssClass(),  'drag') );
};


/**
 * @param {goog.fx.DragListGroupEvent} e
 */
bitex.ui.OrderBook.prototype.onDragOver_  = function(e) {
  var src_el = e.dragSourceItem.element;
  var dest_el  = e.dropTargetItem.element;

  if (src_el !== dest_el) {
    goog.dom.classes.add(e.dropTargetItem.element,  goog.getCssName(this.getBaseCssClass(),  'drag') );
  }
};

/**
 * @param {goog.fx.DragListGroupEvent} e
 */
bitex.ui.OrderBook.prototype.onDragStart_  = function(e) {
  var order_data = e.dragSourceItem.data;

  if (!goog.isDefAndNotNull(order_data) || (!order_data.allowDrag) ) {
    e.preventDefault();
    e.stopPropagation();
    return;
  }

  goog.style.setOpacity(e.dragSourceItem.element, 0.5);
};

/**
 * @param {goog.fx.DragDropEvent} e
 */
bitex.ui.OrderBook.prototype.onDragEnd_  = function(e) {
  goog.style.setOpacity(e.dragSourceItem.element, 1);
};


/**
 * @param {goog.events.Event} e
 */
bitex.ui.OrderBook.prototype.onClick_  = function(e){
  var el = e.target;
  var tr_element = goog.dom.getAncestorByTagNameAndClass(el, goog.dom.TagName.TR);
  if (!goog.isDefAndNotNull(tr_element)) {
    return;
  }

  if (el.tagName == goog.dom.TagName.A || el.tagName == goog.dom.TagName.I ) {
    var orderId = el.getAttribute('data-order-id');
    if ( goog.isDefAndNotNull(orderId)  ) {
      this.dispatchEvent( new bitex.ui.OrderBookEvent (bitex.ui.OrderBook.EventType.CANCEL, orderId) );
      e.preventDefault();
      e.stopPropagation();
    }
    return;
  }

  var price = parseInt(tr_element.getAttribute('data-price-value'));
  var qty = parseInt(tr_element.getAttribute('data-qty-value'));
  var cum_qty = parseInt(tr_element.getAttribute('data-cum-qty-value'));

  if ( goog.dom.classes.has(el, goog.getCssName(this.getBaseCssClass(), 'price')) ) {
    this.dispatchEvent(
        new bitex.ui.OrderBookEvent(bitex.ui.OrderBook.EventType.PRICE_CLICK,undefined, qty, cum_qty, price));
  }
  if ( goog.dom.classes.has(el, goog.getCssName(this.getBaseCssClass(), 'qty')) ) {
    this.dispatchEvent(
        new bitex.ui.OrderBookEvent(bitex.ui.OrderBook.EventType.QTY_CLICK,undefined, qty, cum_qty, price));
  }
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
bitex.ui.OrderBookEvent = function(type, opt_orderId, opt_qty, opt_cum_qty, opt_price) {
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
goog.inherits(bitex.ui.OrderBookEvent, goog.events.Event);




bitex.ui.OrderBook.prototype.clear  = function(){
  var dom = this.getDomHelper();
  goog.dom.removeChildren(this.bodyEl_);

  this.drag_drop_group_.removeItems();
};


/**
 * @param {number} index
 */
bitex.ui.OrderBook.prototype.deleteOrderThru = function( index) {
  var dom = this.getDomHelper();
  var formatter = new goog.i18n.NumberFormat( this.qtyCurrencyDef_.format, this.qtyCurrencyDef_.code );

  var child;
  while ((child = this.bodyEl_.firstChild) && index>0 ) {
    this.bodyEl_.removeChild(child);
    if (goog.isDefAndNotNull(this.drag_drop_group_)) {
      this.drag_drop_group_.removeItem(child);
    }
    index--;
  }

  var row_elements = dom.getChildren(this.bodyEl_ );
  var cum_qty = 0;
  for (index = 0; index<row_elements.length; ++index) {
    var row_element = row_elements[index];
    cum_qty += parseInt(row_element.getAttribute('data-qty-value'),10 );
    row_element.setAttribute('data-cum-qty-value',cum_qty);

    if (this.show_cum_qty_){
      var formatted_qty = formatter.format(cum_qty/1e8);
      var tdQtyEl = dom.getChildren( row_element )[1];
      dom.setTextContent(tdQtyEl, formatted_qty);
    }
  }
};

/**
 * @param {number} index
 */
bitex.ui.OrderBook.prototype.deleteOrder = function( index) {
  var dom = this.getDomHelper();

  var formatter = new goog.i18n.NumberFormat( this.qtyCurrencyDef_.format, this.qtyCurrencyDef_.code );

  var row_elements = dom.getChildren(this.bodyEl_ );
  var trEl = row_elements[index];
  var qty = trEl.getAttribute('data-qty-value');

  // update cumulative qty of the following orders
  for (var next_index = index + 1; next_index<row_elements.length; ++next_index) {
    var nextRowEl = row_elements[next_index];
    var new_cum_qty = parseInt(nextRowEl.getAttribute('data-cum-qty-value'),10 ) - qty;
    nextRowEl.setAttribute('data-cum-qty-value',new_cum_qty);

    if (this.show_cum_qty_){
      var formatted_qty = formatter.format(new_cum_qty/1e8);
      var tdQtyEl = dom.getChildren( nextRowEl )[1];
      dom.setTextContent(tdQtyEl, formatted_qty);
    }

  }

  dom.removeNode(trEl);

  if (goog.isDefAndNotNull(this.drag_drop_group_)) {
    this.drag_drop_group_.removeItem(trEl);
  }
};

/**
 * @param {number} index
 * @param {number} qty
 */
bitex.ui.OrderBook.prototype.updateOrder = function( index, qty) {
  var dom = this.getDomHelper();

  var formatter = new goog.i18n.NumberFormat( this.qtyCurrencyDef_.format, this.qtyCurrencyDef_.code );
  formatted_qty = formatter.format(qty/1e8);

  var row_elements = dom.getChildren(this.bodyEl_ );

  var trEl = row_elements[index];
  var old_qty = trEl.getAttribute('data-qty-value');
  var diff_qty = qty - old_qty;


  trEl.setAttribute('data-qty-value', qty);


  // update cumulative qty of the following orders
  for (var next_index = index; next_index<row_elements.length; ++next_index) {
    var nextRowEl = row_elements[next_index];
    var new_cum_qty = parseInt(nextRowEl.getAttribute('data-cum-qty-value'),10 ) + diff_qty;
    nextRowEl.setAttribute('data-cum-qty-value',new_cum_qty);

    if (this.show_cum_qty_){
      var formatted_cum_qty = formatter.format(new_cum_qty/1e8);
      dom.setTextContent(dom.getChildren( nextRowEl )[1], formatted_cum_qty);
    }
  }

  var tdQtyEl = dom.getChildren( trEl )[1];
  if (!this.show_cum_qty_){
    dom.setTextContent(tdQtyEl, formatted_qty);
  }

  var blink_class = 'md-blink';
  goog.dom.classes.add( tdQtyEl,  blink_class );

  goog.Timer.callOnce( function(){
    goog.dom.classes.remove( tdQtyEl,  blink_class );
  }, this.blink_delay_ , this);
};


/**
 * @param {number} index
 * @param {string} id
 * @param {number} price
 * @param {number} qty
 * @param {string} username
 * @param {string} broker
 */
bitex.ui.OrderBook.prototype.insertOrder = function( index, id, price, qty, username, broker ) {
  var dom = this.getDomHelper();

  /**
   * @desc Title describing your onder on your username
   */
  var MSG_ORDER_BOOK_YOUR_ORDER = goog.getMsg('Your Order');

  var qty_formatter = new goog.i18n.NumberFormat( this.qtyCurrencyDef_.format, this.qtyCurrencyDef_.code );
  formatted_qty = qty_formatter.format(qty/1e8);

  var price_formatter = new goog.i18n.NumberFormat( this.priceCurrencyDef_.format, this.priceCurrencyDef_.code );
  if (this.show_fees_) {
    price = price + price * this.fee_;
  }
  formatted_price = price_formatter.format(price/1e8);

  var orderId = null;
  var isMyOrder = false;
  if (username === this.username_ || broker === this.username_ ){
    orderId = id;
  }
  if (username === this.username_){
    username = MSG_ORDER_BOOK_YOUR_ORDER;
    isMyOrder = true;
  }

  var tmpWrapper = dom.createDom( goog.dom.TagName.TABLE, undefined,dom.createDom( goog.dom.TagName.TBODY ));
  tmpWrapper.innerHTML = bitex.ui.OrderBook.templates.OrderBookOrderRow({
    username: username,
    qty: formatted_qty,
    price: formatted_price,
    side: this.side_,
    orderId: orderId 
  });

  var rowEl = tmpWrapper.firstChild.firstChild;
  rowEl.setAttribute('data-order-id', id);

  var row_elements = dom.getChildren(this.bodyEl_ );
  var cumulative_qty = qty;
  if (isMyOrder) {
    goog.dom.classes.add( rowEl, goog.getCssName(this.getBaseCssClass(), 'movable') );
  }

  rowEl.setAttribute('data-price-value', price);
  rowEl.setAttribute('data-qty-value', qty);
  if (index == 0) {
    rowEl.setAttribute('data-cum-qty-value', cumulative_qty);
  } else {
    var previousRowEl = row_elements[index-1];
    cumulative_qty += parseInt(previousRowEl.getAttribute('data-cum-qty-value'),10 );
    rowEl.setAttribute('data-cum-qty-value', cumulative_qty);
  }
  if (this.show_cum_qty_){
    var formatted_cumulative_qty = qty_formatter.format(cumulative_qty/1e8);
    dom.setTextContent(dom.getChildren( rowEl )[1], formatted_cumulative_qty);
  }

  // update cumulative qty of the following orders
  for (var next_index = index; next_index<row_elements.length; ++next_index) {
    var nextRowEl = row_elements[next_index];
    var new_cum_qty = parseInt(nextRowEl.getAttribute('data-cum-qty-value'),10 ) + qty;
    nextRowEl.setAttribute('data-cum-qty-value',new_cum_qty);

     if (this.show_cum_qty_){
      var formatted_cum_qty = qty_formatter.format(new_cum_qty/1e8);
      dom.setTextContent(dom.getChildren( nextRowEl )[1], formatted_cum_qty);
    }
 }


  dom.insertChildAt( this.bodyEl_, rowEl, index );
  this.drag_drop_group_.addItem(rowEl, { allowDrag: (isMyOrder || broker === this.username_) } );


  var blink_class  = 'md-blink';
  goog.dom.classes.add( rowEl,  blink_class );

  goog.Timer.callOnce( function(){
    goog.dom.classes.remove( rowEl,  blink_class );
  }, this.blink_delay_ , this);
};

