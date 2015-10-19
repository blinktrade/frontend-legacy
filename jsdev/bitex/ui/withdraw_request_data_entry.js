goog.provide('bitex.ui.WithdrawRequestDataEntry');
goog.provide('bitex.ui.WithdrawRequestDataEntry.EventType');

goog.require('bitex.ui.WithdrawRequestDataEntry.templates');
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
bitex.ui.WithdrawRequestDataEntry = function(opt_model, opt_domHelper) {
  goog.base(this, opt_domHelper);

  this.setModel(opt_model || { 'currency'          : '',
                               'currencySign'      : '',
                               'methods'           : [],
                               'verificationLevel' : -1 ,
                               'netAmountLabel'    : ''  });

  this.uniform_ = new uniform.Uniform( { 'control_holder_class' : 'control-group' } );
};
goog.inherits(bitex.ui.WithdrawRequestDataEntry, goog.ui.Component);

/**
 * @type {uniform.Uniform}
 * @private
 */
bitex.ui.WithdrawRequestDataEntry.prototype.uniform_;


/**
 * Name of base CSS class
 * @type {string}
 * @private
 */
bitex.ui.WithdrawRequestDataEntry.BASE_CSS_CLASS_ = goog.getCssName('withdraw-request-data-entry');


/**
 * @enum {string}
 */
bitex.ui.WithdrawRequestDataEntry.EventType = {
  CANCEL:'withdraw_request_data_entry_cancel',
  SUBMIT: 'withdraw_request_data_entry_submit'
};

/**
 * Returns base CSS class. This getter is used to get base CSS class part.
 * All CSS class names in component are created as:
 *   goog.getCssName(this.getBaseCssClass(), 'CLASS_NAME')
 * @return {string} Base CSS class.
 */
bitex.ui.WithdrawRequestDataEntry.prototype.getBaseCssClass = function() {
  return bitex.ui.WithdrawRequestDataEntry.BASE_CSS_CLASS_;
};

/** @override */
bitex.ui.WithdrawRequestDataEntry.prototype.decorateInternal = function(element) {
  this.setElementInternal(element);
};

/** @override */
bitex.ui.WithdrawRequestDataEntry.prototype.createDom = function() {
  var el = goog.soy.renderAsElement(bitex.ui.WithdrawRequestDataEntry.templates.WithdrawRequestDataEntry, {
    id                : this.makeId( 'withdraw_request' ),
    currency          : this.getModel()['currency'],
    currencySign      : this.getModel()['currencySign'],
    methods           : this.getModel()['methods'],
    verificationLevel : this.getModel()['verificationLevel'],
    netAmountLabel    : this.getModel()['netAmountLabel']
  });
  this.setElementInternal(el);
};

/** @override */
bitex.ui.WithdrawRequestDataEntry.prototype.enterDocument = function() {
  goog.base(this, 'enterDocument');

  var handler = this.getHandler();
  var dom  = this.getDomHelper();

  this.uniform_.decorate( goog.dom.getElement( this.makeId('withdraw_request_form') ) );


  handler.listen(
      goog.dom.getElement(this.makeId('withdraw_request_cancel_btn')), goog.events.EventType.CLICK , this.onCancel_);
  handler.listen(
      goog.dom.getElement(this.makeId('withdraw_request_create_btn')), goog.events.EventType.CLICK , this.onSubmit_);
};

/**
 * @param {goog.events.Event} e
 * @private
 */
bitex.ui.WithdrawRequestDataEntry.prototype.onCancel_ = function(e) {
  e.preventDefault();
  this.dispatchEvent(bitex.ui.WithdrawRequestDataEntry.EventType.CANCEL);
};

/**
 * @param {goog.events.Event} e
 * @private
 */
bitex.ui.WithdrawRequestDataEntry.prototype.onSubmit_ = function(e) {
  e.preventDefault();

  var error_list = this.uniform_.validate();
  if (error_list.length > 0) {
    e.stopPropagation();
  } else {
    this.dispatchEvent( bitex.ui.WithdrawRequestDataEntry.EventType.SUBMIT);
  }
};

