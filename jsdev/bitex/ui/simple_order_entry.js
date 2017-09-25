goog.provide('bitex.ui.SimpleOrderEntry');
goog.provide('bitex.ui.SimpleOrderEntry.EventType');
goog.provide('bitex.ui.SimpleOrderEntry.Side');

goog.require('bitex.ui.SimpleOrderEntry.templates');
goog.require('goog.ui.Component');

goog.require('goog.i18n.NumberFormat');

goog.require('goog.string');
goog.require('goog.dom.forms');

goog.require('bitex.util');
goog.require('bitex.util.PriceAmountCalculatorVerb');

goog.require('uniform.Uniform');


/**
 * @param {number} opt_blinkDelay. Defaults to 700 milliseconds
 * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
 *
 * @extends {goog.ui.Component}
 * @constructor
 */
bitex.ui.SimpleOrderEntry = function(opt_blinkDelay, opt_domHelper) {
  goog.base(this, opt_domHelper);

  this.order_depth_ = [];
  this.uniform_ = new uniform.Uniform( { 'control_holder_class' : 'uniform-control-holder' } );
  this.uniformAdvanced_ = new uniform.Uniform({ 'control_holder_class': 'uniform-control-holder' });

  this.factor_amount_ = 1e8;
  this.factor_price_ = 1e8;
};
goog.inherits(bitex.ui.SimpleOrderEntry, goog.ui.Component);

/**
 * @type {uniform.Uniform}
 * @private
 */
bitex.ui.SimpleOrderEntry.prototype.uniform_;

/**
 * @type {uniform.Uniform}
 * @private
 */
bitex.ui.SimpleOrderEntry.prototype.uniformAdvanced_;


/**
 * @type {.Array<.Array<Object>>}
 * @private
 */
bitex.ui.SimpleOrderEntry.prototype.order_depth_;

/**
 * @type {Element}
 * @private
 */
bitex.ui.SimpleOrderEntry.prototype.qty_element_;

/**
 * @type {Element}
 * @private
 */
bitex.ui.SimpleOrderEntry.prototype.total_element_;

/**
 * @type {string}
 * @private
 */
bitex.ui.SimpleOrderEntry.prototype.last_changed_field_;

/**
 * @type {string}
 * @private
 */
bitex.ui.SimpleOrderEntry.prototype.factor_amount_;

/**
 * @type {string}
 * @private
 */
bitex.ui.SimpleOrderEntry.prototype.factor_price_;

/**
 * Name of base CSS class
 * @type {string}
 * @private
 */
bitex.ui.SimpleOrderEntry.BASE_CSS_CLASS_ = goog.getCssName('simple-order-entry');

/**
 * @type {boolean}
 * @private
 */
bitex.ui.SimpleOrderEntry.ADVANCED_ = false;


/**
 * @enum {string}
 */
bitex.ui.SimpleOrderEntry.EventType = {
  SUBMIT: 'simple_order_entry_submitted'
};


/**
 * @enum {string}
 */
bitex.ui.SimpleOrderEntry.Side = {
  BUY: '1',
  SELL: '2'
};

/**
 * @enum {number}
 */
bitex.ui.SimpleOrderEntry.OrderDepthIndex = {
  PRICE: 0,
  SIZE: 1,
  USERNAME: 2
};


/**
 * Returns base CSS class. This getter is used to get base CSS class part.
 * All CSS class names in component are created as:
 *   goog.getCssName(this.getBaseCssClass(), 'CLASS_NAME')
 * @return {string} Base CSS class.
 */
bitex.ui.SimpleOrderEntry.prototype.getBaseCssClass = function() {
  return bitex.ui.SimpleOrderEntry.BASE_CSS_CLASS_;
};

/** @override */
bitex.ui.SimpleOrderEntry.prototype.decorateInternal = function(element) {
  this.setElementInternal(element);
};

/** @override */
bitex.ui.SimpleOrderEntry.prototype.createDom = function() {

  var el = goog.soy.renderAsElement(bitex.ui.SimpleOrderEntry.templates.SimpleOrderEntry, {
    id: this.makeId('order_entry'),
    symbol:this.getModel().symbol,
    crypto_currency_symbol:this.getModel().crypto_currency_symbol,
    cryptocurrencydescription:this.getModel().crypto_currency_description,
    currency_symbol:this.getModel().currency_symbol,
    currency_description:this.getModel().currency_description,
    side:this.getModel().side,
    type:this.getModel().type,
    broker_id:this.getModel().broker_id,
    formatted_fee: this.getModel().formatted_fee,
    client_id:this.getModel().client_id
  });
  this.setElementInternal(el);
};

/** @override */
bitex.ui.SimpleOrderEntry.prototype.enterDocument = function() {
  goog.base(this, 'enterDocument');

  var handler = this.getHandler();
  var dom  = this.getDomHelper();

  this.uniform_.decorate( goog.dom.getElement( this.makeId('order_entry') ) );
  this.uniformAdvanced_.decorate(goog.dom.getElement(this.makeId('order_entry_advanced')));

  this.qty_element_ = goog.dom.getElement( this.makeId('order_entry_qty') );
  this.total_element_ = goog.dom.getElement( this.makeId('order_entry_total') );

  var open_advanced_order_el = goog.dom.getElement(this.makeId('order_entry_open_action_advanced'));
  var cancel_advanced_order_button_el = goog.dom.getElement(this.makeId('order_entry_cancel_action_advanced'));

  handler.listen(open_advanced_order_el,
                 goog.events.EventType.CLICK,
                 this.onAdvancedOrderButtonClick_);

  handler.listen(cancel_advanced_order_button_el,
                 goog.events.EventType.CLICK,
                 this.onCancelAdvancedOrderButtonClick_);

  handler.listen( new goog.events.InputHandler( this.total_element_ ),
                  goog.events.InputHandler.EventType.INPUT,
                  this.onChangeTotal_ );
  handler.listen( new goog.events.InputHandler( this.qty_element_ ),
                  goog.events.InputHandler.EventType.INPUT,
                  this.onChangeQty_ );


  handler.listen( goog.dom.getElement( this.makeId('order_entry_action_simple') ),
                  goog.events.EventType.CLICK,
                  this.onActionSimple_ );

  // Advanced Handlers
  handler.listen(new goog.events.InputHandler(goog.dom.getElement(this.makeId('order_entry_amount'))),
                 goog.events.InputHandler.EventType.INPUT,
                 this.onChangeAmountAdvanced_);
  handler.listen(new goog.events.InputHandler(goog.dom.getElement(this.makeId('order_entry_price'))),
                 goog.events.InputHandler.EventType.INPUT,
                 this.onChangePriceAdvanced_);
  handler.listen(new goog.events.InputHandler(goog.dom.getElement(this.makeId('order_entry_total_advanced'))),
                 goog.events.InputHandler.EventType.INPUT,
                 this.onChangeTotalAdvanced_);

  handler.listen(goog.dom.getElement(this.makeId('order_entry_action_advanced')),
                 goog.events.EventType.CLICK,
                 this.onActionAdvanced_);

  goog.style.showElement(goog.dom.getElement(this.makeId('order_entry_advanced')), false);
};

/**
 * @param {goog.events.Event} e
 * @private
 */
bitex.ui.SimpleOrderEntry.prototype.onActionSimple_ = function(e) {
  e.preventDefault();

  var error_list = this.uniform_.validate();
  if (error_list.length > 0) {
    e.stopPropagation();
  } else {
    this.dispatchEvent( bitex.ui.SimpleOrderEntry.EventType.SUBMIT);
  }
};

bitex.ui.SimpleOrderEntry.prototype.onActionAdvanced_ = function(e) {
  e.preventDefault();

  var error_list = this.uniformAdvanced_.validate();
  if(error_list.length > 0){
    e.stopPropagation();
  } else {
    this.dispatchEvent(bitex.ui.SimpleOrderEntry.EventType.SUBMIT);
  }
};

bitex.ui.SimpleOrderEntry.prototype.disableActions_ = function(enabled) {
  var action_button = new goog.ui.Button();
  action_button.decorate(goog.dom.getElement( this.makeId('order_entry_action_simple')));
  action_button.setEnabled(enabled);

  if ( enabled ) {
      goog.dom.setTextContent(  goog.dom.getElement( this.makeId('order_entry_avg_price') ), "" );
  }
  else {
      /**
       * @desc no orders available to provide market liquidity ( simple order entry )
      */
      var MSG_NO_LIQUIDITY_ERROR = goog.getMsg('  ** No liquidity to complete this transaction **');

      goog.dom.setTextContent(  goog.dom.getElement( this.makeId('order_entry_avg_price') ), MSG_NO_LIQUIDITY_ERROR );
  }
};

bitex.ui.SimpleOrderEntry.prototype.disableActionsAdvanced_ = function(enabled) {
  var action_button = new goog.ui.Button();
  action_button.decorate(goog.dom.getElement(this.makeId('order_entry_action_advanced')));
  action_button.setEnabled(!enabled);
};


/**
 * @param {goog.events.Event} e
 * @private
 */
bitex.ui.SimpleOrderEntry.prototype.onAdvancedOrderButtonClick_ = function(e){
  this.ADVANCED_ = true;
  goog.style.showElement(goog.dom.getElement(this.makeId('order_entry')), false);
  goog.style.showElement(goog.dom.getElement(this.makeId('order_entry_advanced')), true);
};

/**
 * @param {goog.events.Event} e
 * @private
 */
bitex.ui.SimpleOrderEntry.prototype.onCancelAdvancedOrderButtonClick_ = function(e){
  this.ADVANCED_ = false;
  goog.style.showElement(goog.dom.getElement(this.makeId('order_entry')), true);
  goog.style.showElement(goog.dom.getElement(this.makeId('order_entry_advanced')), false);
};

/**
 * @param {goog.events.Event} e
 * @private
 */
bitex.ui.SimpleOrderEntry.prototype.onChangeAmountAdvanced_ = function(e) {
  var total = (this.getPrice() * this.getAmount()) / 1e8;

  this.setTotal(total);

  this.last_changed_field_ = "amount";

  this.disableActionsAdvanced_(this.getTotal()<=0);

  var total_fee_paid = bitex.util.calculateTotalFee(this.getAmount(),
                                                    this.getPrice(),
                                                    this.order_depth_,
                                                    this.getModel().username,
                                                    this.getModel().taker_fee,
                                                    this.getModel().maker_fee,
                                                    this.getModel().side);
  var formmatter;
  if (this.getModel().side == bitex.ui.SimpleOrderEntry.Side.BUY) {
    formatter = new goog.i18n.NumberFormat( this.getModel().crypto_currency_format,
                                            this.getModel().crypto_currency_code );
    formatter.setMaximumFractionDigits(8);
    formatter.setMinimumFractionDigits(2);
  } else {
    formatter = new goog.i18n.NumberFormat( this.getModel().currency_format,
                                            this.getModel().currency_code );
    formatter.setMaximumFractionDigits(2);
    formatter.setMinimumFractionDigits(2);
  }

  var formatted_fee = formatter.format(total_fee_paid/1e8);
  goog.dom.setTextContent( goog.dom.getElement( this.makeId('order_entry_fee_advanced') ), formatted_fee );

};

/**
 * @param {goog.events.Event} e
 * @private
 */
bitex.ui.SimpleOrderEntry.prototype.onChangePriceAdvanced_ = function(e) {
  if (this.last_changed_field_ === "amount") {
    var total = (this.getPrice() * this.getAmount()) / 1e8;
    this.setTotal(total);
  } else {
    if (this.getPrice() > 0) {
      var amount = this.getTotal() / this.getPrice() * 1e8;
      this.setAmount(amount);
    }
  }

  this.disableActionsAdvanced_(this.getTotal()<=0);

  var total_fee_paid = bitex.util.calculateTotalFee(this.getAmount(),
                                                    this.getPrice(),
                                                    this.order_depth_,
                                                    this.getModel().username,
                                                    this.getModel().taker_fee,
                                                    this.getModel().maker_fee,
                                                    this.getModel().side);
  var formmatter;
  if (this.getModel().side == bitex.ui.SimpleOrderEntry.Side.BUY) {
    formatter = new goog.i18n.NumberFormat( this.getModel().crypto_currency_format,
                                            this.getModel().crypto_currency_code );
    formatter.setMaximumFractionDigits(8);
    formatter.setMinimumFractionDigits(2);
  } else {
    formatter = new goog.i18n.NumberFormat( this.getModel().currency_format,
                                            this.getModel().currency_code );
    formatter.setMaximumFractionDigits(2);
    formatter.setMinimumFractionDigits(2);
  }

  var formatted_fee = formatter.format(total_fee_paid/1e8);
  goog.dom.setTextContent( goog.dom.getElement( this.makeId('order_entry_fee_advanced') ), formatted_fee );


};

/**
 * @param {goog.events.Event} e
 * @private
 */
bitex.ui.SimpleOrderEntry.prototype.onChangeQty_ = function(e) {
  this.last_changed_field_ = 'qty';

  this.disableActions_(true);

  if (!goog.isDefAndNotNull(this.order_depth_)) {
    this.disableActions_(false);
    return;
  }

  if (!this.order_depth_.length) {
    this.disableActions_(false);
    return;
  }

  var value_fmt = new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.DECIMAL);
  value_fmt.setMaximumFractionDigits(8);
  value_fmt.setMinimumFractionDigits(2);

  var form_values = this.uniform_.getAsJSON();
  var value = form_values['qty'];
  if (value <= 0 ) {
    e.stopPropagation();
    e.preventDefault();
    return;
  }
  value = value * 1e8;


  var price_amount_fee;
  price_amount_fee = bitex.util.calculatePriceAmountAndFee( value,
                                                            bitex.util.PriceAmountCalculatorVerb.GET,
                                                            this.order_depth_,
                                                            this.getModel().username,
                                                            this.getModel().taker_fee,
                                                            this.getModel().side);


  if (!goog.isDefAndNotNull(price_amount_fee)) {
    this.disableActions_(false);
    return;
  }
  this.getModel().price = price_amount_fee[0];
  this.getModel().amount = value;

  var order_fee =  price_amount_fee[2];
  var vwap = price_amount_fee[3];

  var currency_formatter = new goog.i18n.NumberFormat( this.getModel().currency_format,
                                                       this.getModel().currency_code );
  currency_formatter.setMinimumFractionDigits(2);


  var crypto_currency_formatter = new goog.i18n.NumberFormat( this.getModel().crypto_currency_format,
                                                              this.getModel().crypto_currency_code );
  crypto_currency_formatter.setMaximumFractionDigits(8);
  crypto_currency_formatter.setMinimumFractionDigits(2);

  var price_amount_fee_formated = value_fmt.format(price_amount_fee[1]/1e8);
  goog.dom.forms.setValue( this.total_element_, price_amount_fee_formated);

  var formatted_fee = crypto_currency_formatter.format(order_fee/1e8);
  if (this.getModel().side == bitex.ui.SimpleOrderEntry.Side.SELL) {
    formatted_fee = currency_formatter.format(order_fee/1e8);
  }
  goog.dom.setTextContent(goog.dom.getElement(this.makeId('order_entry_fee')), formatted_fee);

  var human_average_price = currency_formatter.format(vwap);
  goog.dom.setTextContent(goog.dom.getElement(this.makeId('order_entry_avg_price')), human_average_price);
};

/**
 * @param {goog.events.Event} e
 * @private
 */
bitex.ui.SimpleOrderEntry.prototype.onChangeTotal_ = function(e) {
  this.last_changed_field_ = 'total';

  this.disableActions_(true);

  if (!goog.isDefAndNotNull(this.order_depth_)) {
    this.disableActions_(false);
    return;
  }

  if (!this.order_depth_.length) {
    this.disableActions_(false);
    return;
  }

  var value_fmt = new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.DECIMAL);
  value_fmt.setMaximumFractionDigits(8);
  value_fmt.setMinimumFractionDigits(2);

  var form_values = this.uniform_.getAsJSON();
  var value = form_values['total'];
  if (value <= 0 ) {
    e.stopPropagation();
    e.preventDefault();
    return;
  }
  value = value * 1e8;

  var price_amount_fee;
  price_amount_fee = bitex.util.calculatePriceAmountAndFee(value,
                                                           bitex.util.PriceAmountCalculatorVerb.SPEND,
                                                           this.order_depth_ ,
                                                           this.getModel().username,
                                                           this.getModel().taker_fee,
                                                           this.getModel().side);

  if (!goog.isDefAndNotNull(price_amount_fee)) {
    this.disableActions_(false);
    return;
  }
  this.getModel().price = price_amount_fee[0];
  this.getModel().amount = price_amount_fee[1];
  var order_fee =  price_amount_fee[2];
  var vwap = price_amount_fee[3];

  var spend_formatter;
  var receive_formatter;
  if (this.getModel().side == bitex.ui.SimpleOrderEntry.Side.BUY) {
    spend_formatter = new goog.i18n.NumberFormat( this.getModel().currency_format,
                                                  this.getModel().currency_code );

    receive_formatter = new goog.i18n.NumberFormat( this.getModel().crypto_currency_format,
                                                    this.getModel().crypto_currency_code );
  } else {
    spend_formatter = new goog.i18n.NumberFormat( this.getModel().crypto_currency_format ,
                                                  this.getModel().crypto_currency_code);

    receive_formatter = new goog.i18n.NumberFormat( this.getModel().currency_format,
                                                    this.getModel().currency_code );
  }
  spend_formatter.setMaximumFractionDigits(8);
  receive_formatter.setMinimumFractionDigits(2);

  var currency_formatter = new goog.i18n.NumberFormat( this.getModel().currency_format,
                                                       this.getModel().currency_code );
  currency_formatter.setMaximumFractionDigits(8);
  currency_formatter.setMinimumFractionDigits(2);

  goog.dom.forms.setValue(this.qty_element_, value_fmt.format(this.getModel().amount/1e8));

  var formatted_fee = receive_formatter.format(order_fee/1e8);
  if (this.getModel().side == bitex.ui.SimpleOrderEntry.Side.SELL) {
      formatted_fee = receive_formatter.format(order_fee/1e8);
  }
  goog.dom.setTextContent( goog.dom.getElement( this.makeId('order_entry_fee') ), formatted_fee );

  var human_average_price = spend_formatter.format(vwap);
  if (this.getModel().side == bitex.ui.SimpleOrderEntry.Side.SELL) {
    human_average_price = receive_formatter.format(vwap);
  }
  goog.dom.setTextContent(  goog.dom.getElement( this.makeId('order_entry_avg_price') ), human_average_price );
};

/**
 * @param {goog.events.Event} e
 * @private
 */
bitex.ui.SimpleOrderEntry.prototype.onChangeTotalAdvanced_ = function(e) {
  var amount = this.getTotal() / this.getPrice() * 1e8;
  this.setAmount(amount);
  this.last_changed_field_ = "total";

  var total_fee_paid = bitex.util.calculateTotalFee(this.getAmount(),
                                                    this.getPrice(),
                                                    this.order_depth_,
                                                    this.getModel().username,
                                                    this.getModel().taker_fee,
                                                    this.getModel().maker_fee,
                                                    this.getModel().side);
  var formmatter;
  if (this.getModel().side == bitex.ui.SimpleOrderEntry.Side.BUY) {
    formatter = new goog.i18n.NumberFormat( this.getModel().crypto_currency_format,
                                            this.getModel().crypto_currency_code );
    formatter.setMaximumFractionDigits(8);
    formatter.setMinimumFractionDigits(2);
  } else {
    formatter = new goog.i18n.NumberFormat( this.getModel().currency_format,
                                            this.getModel().currency_code );
    formatter.setMaximumFractionDigits(2);
    formatter.setMinimumFractionDigits(2);
  }

  var formatted_fee = formatter.format(total_fee_paid/1e8);
  goog.dom.setTextContent( goog.dom.getElement( this.makeId('order_entry_fee_advanced') ), formatted_fee );

  this.disableActionsAdvanced_(this.getTotal() <= 0);
}

/**
 * @param {.Array<.Array>} order_depth
 */
bitex.ui.SimpleOrderEntry.prototype.setOrderDepth = function(order_depth) {
  this.order_depth_ = order_depth;

  if (this.last_changed_field_ == 'total') {
    this.onChangeTotal_();
  } else if (this.last_changed_field_ == 'qty') {
    this.onChangeQty_();
  }
};

/**
 * @return {string}
 */
bitex.ui.SimpleOrderEntry.prototype.getSymbol = function(){
  return this.getModel().symbol;
};

/**
 * @return {string}
 */
bitex.ui.SimpleOrderEntry.prototype.getSide = function(){
  return this.getModel().side;
};


/**
 * @return {string}
 */
bitex.ui.SimpleOrderEntry.prototype.getType = function(){
  if (goog.style.isElementShown(goog.dom.getElement(this.makeId('order_entry_advanced')))) {
    return goog.dom.forms.getValue(goog.dom.getElement(this.makeId('order_entry_type')));
  } else {
    return this.getModel().type;
  }
};

/**
 * @param {string} type
 */
bitex.ui.SimpleOrderEntry.prototype.setType = function(type){
  goog.dom.forms.setValue(goog.dom.getElement(this.makeId('order_entry_broker_id')), type);
  this.getModel().type = type;
};

/**
 * @return {number}
 */
bitex.ui.SimpleOrderEntry.prototype.getBrokerID = function(){
  return this.getModel().broker_id;
};

/**
 * @param {number} broker_id
 */
bitex.ui.SimpleOrderEntry.prototype.setBrokerID = function(broker_id){
  this.getModel().broker_id = broker_id;
  goog.dom.forms.setValue(goog.dom.getElement( this.makeId('order_entry_broker_id')));
};


/**
 * @return {number}
 */
bitex.ui.SimpleOrderEntry.prototype.getClientID = function(){
  return this.getModel().client_id;
};

/**
 * @param {number} client_id
 */
bitex.ui.SimpleOrderEntry.prototype.setClientID = function(client_id){
  this.getModel().client_id = client_id;
  goog.dom.forms.setValue(goog.dom.getElement( this.makeId('order_entry_client_id')));
};

/**
 * @return {number}
 */
bitex.ui.SimpleOrderEntry.prototype.getAmount = function(){
  if (goog.style.isElementShown(goog.dom.getElement(this.makeId('order_entry_advanced')))) {
    var value_fmt = new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.DECIMAL);
    value_fmt.setMaximumFractionDigits(2);
    value_fmt.setMinimumFractionDigits(8);

    var el = goog.dom.getElement(this.makeId('order_entry_amount'));
    var inputValue = goog.dom.forms.getValue(el);

    var pos = [0];
    var value = value_fmt.parse(inputValue, pos);
    if (pos[0] != inputValue.length || isNaN(value) || value <= 0) {
      return 0;
    }

    return parseInt((value * this.factor_amount_).toFixed(0), 10);
  } else {
    return parseInt(this.getModel().amount.toFixed(0));
  }
};

/**
 * @param  {number} value
 */
bitex.ui.SimpleOrderEntry.prototype.setAmount = function(value){
  var fmt = new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.DECIMAL);
  fmt.setMaximumFractionDigits(8);
  fmt.setMinimumFractionDigits(2);

  var el = goog.dom.getElement(this.makeId('order_entry_amount'));
  goog.dom.forms.setValue(el, fmt.format(value/this.factor_amount_));
};

/**
 * @return {number}
 */
bitex.ui.SimpleOrderEntry.prototype.getPrice = function(){
  if (goog.style.isElementShown(goog.dom.getElement(this.makeId('order_entry_advanced')))) {
    var value_fmt = new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.DECIMAL);
    value_fmt.setMaximumFractionDigits(8);
    value_fmt.setMinimumFractionDigits(2);

    var el = goog.dom.getElement(this.makeId('order_entry_price'));
    var inputValue = goog.dom.forms.getValue(el);

    var pos = [0];
    var value = value_fmt.parse(inputValue, pos);
    if (pos[0] != inputValue.length || isNaN(value) || value <= 0 ) {
      return 0;
    }
    return parseInt(value * this.factor_price_, 10);
  } else {
    return this.getModel().price;
  }
};

/**
 * @param  {number} value
 */
bitex.ui.SimpleOrderEntry.prototype.setPrice = function(value){
  var fmt = new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.DECIMAL);
  fmt.setMaximumFractionDigits(8);
  fmt.setMinimumFractionDigits(2);

  var el = goog.dom.getElement(this.makeId('order_entry_price'));
  goog.dom.forms.setValue(el, fmt.format(value/this.factor_price_));
};

/**
 * @return {number}
 */
bitex.ui.SimpleOrderEntry.prototype.getTotal = function(){
  var value_fmt = new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.DECIMAL);
  value_fmt.setMaximumFractionDigits(8);
  value_fmt.setMinimumFractionDigits(2);
  var inputValue;

  if (this.ADVANCED_ === true ) {
    var el_advanced = goog.dom.getElement(this.makeId('order_entry_total_advanced'));
    inputValue = goog.dom.forms.getValue(el_advanced);
  } else {
    var el  = goog.dom.getElement(this.makeId('order_entry_total'));
    inputValue = goog.dom.forms.getValue(el);
  }

  var pos = [0];
  var value = value_fmt.parse(inputValue, pos);
  if (pos[0] != inputValue.length || isNaN(value) || value <= 0) {
    return 0;
  }
  return parseInt(value * this.factor_price_, 10);
};

/**
 * @param  {number} value
 */
bitex.ui.SimpleOrderEntry.prototype.setTotal = function(value){
  var fmt = new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.DECIMAL);
  fmt.setMaximumFractionDigits(8);
  fmt.setMinimumFractionDigits(2);

  var el = goog.dom.getElement(this.makeId('order_entry_total_advanced'));
  goog.dom.forms.setValue(el, fmt.format(value/this.factor_price_));
};

