goog.provide('bitex.ui.CardDataEntry');
goog.provide('bitex.ui.CardDataEntry.EventType');

goog.require('bitex.ui.CardDataEntry.templates');
goog.require('goog.ui.Component');

goog.require('goog.i18n.NumberFormat');

goog.require('goog.string');
goog.require('goog.dom.forms');

goog.require('bitex.util');
goog.require('bitex.util.PriceAmountCalculatorVerb');

goog.require('bitex.primitives.Price');

goog.require('uniform.Uniform');


/**
 * @param {Object} opt_model
 * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
 *
 * @extends {goog.ui.Component}
 * @constructor
 */
bitex.ui.CardDataEntry = function(opt_model, opt_domHelper) {
  goog.base(this, opt_domHelper);

  this.setModel(opt_model || {'methods':[]});

  this.uniform_ = new uniform.Uniform({ 'control_holder_class' : 'control-group' });
};
goog.inherits(bitex.ui.CardDataEntry, goog.ui.Component);

/**
 * @type {uniform.Uniform}
 * @private
 */
bitex.ui.CardDataEntry.prototype.uniform_;

/**
 * Name of base CSS class
 * @type {string}
 * @private
 */
bitex.ui.CardDataEntry.BASE_CSS_CLASS_ = goog.getCssName('card-data-entry');


/**
 * @enum {string}
 */
bitex.ui.CardDataEntry.EventType = {
  CANCEL:'card_data_entry_cancel',
  SUBMIT: 'card_data_entry_submit'
};

/**
 * Returns base CSS class. This getter is used to get base CSS class part.
 * All CSS class names in component are created as:
 *   goog.getCssName(this.getBaseCssClass(), 'CLASS_NAME')
 * @return {string} Base CSS class.
 */
bitex.ui.CardDataEntry.prototype.getBaseCssClass = function() {
  return bitex.ui.CardDataEntry.BASE_CSS_CLASS_;
};

/** @override */
bitex.ui.CardDataEntry.prototype.decorateInternal = function(element) {
  this.setElementInternal(element);
};

/** @override */
bitex.ui.CardDataEntry.prototype.createDom = function() {
  var el = goog.soy.renderAsElement(bitex.ui.CardDataEntry.templates.CardDataEntry, {
    id      : this.makeId('card'),
    methods : this.getModel()['methods']
  });
  this.setElementInternal(el);

};

/** @override */
bitex.ui.CardDataEntry.prototype.enterDocument = function() {
  goog.base(this, 'enterDocument');

  var handler = this.getHandler();
  var dom  = this.getDomHelper();

  this.uniform_.decorate(goog.dom.getElement(this.makeId('card_form')));
  handler.listen(goog.dom.getElement(this.makeId('card_cancel_btn')), goog.events.EventType.CLICK, this.onCancel_);
  handler.listen(goog.dom.getElement(this.makeId('card_create_btn')), goog.events.EventType.CLICK, this.onSubmit_);

  handler.listen(goog.dom.getElement(this.makeId('card_method')), goog.events.EventType.CHANGE, this.onSelectMethod_);
};

/**
 * @returns {string}
 */
bitex.ui.CardDataEntry.prototype.getLabel = function(){
  return goog.dom.forms.getValue(goog.dom.getElement(this.makeId('card_label')));
};

/**
 * @returns {string}
 */
bitex.ui.CardDataEntry.prototype.getCardID = function(){
  return goog.dom.forms.getValue(goog.dom.getElement(this.makeId('card_id')));
};

/**
 * @param {goog.events.Event} e
 * @private
 */
bitex.ui.CardDataEntry.prototype.onCancel_ = function(e) {
  e.preventDefault();
  this.dispatchEvent(bitex.ui.CardDataEntry.EventType.CANCEL);
};

/**
 * @param {goog.events.Event} e
 * @private
 */
bitex.ui.CardDataEntry.prototype.onSubmit_ = function(e) {
  e.preventDefault();

  var error_list = this.uniform_.validate();
  if (error_list.length > 0) {
    e.stopPropagation();
  } else {
    this.dispatchEvent( bitex.ui.CardDataEntry.EventType.SUBMIT);
  }
};

/**
 * @param {goog.events.Event} e
 * @private
 */
bitex.ui.CardDataEntry.prototype.onSelectMethod_ = function(e) {
};

