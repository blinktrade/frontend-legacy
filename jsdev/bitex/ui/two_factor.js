goog.provide('bitex.ui.TwoFactor');

goog.require('bitex.ui.TwoFactor.templates');
goog.require('goog.ui.Component');

goog.require('goog.string');
goog.require('goog.dom.forms');

goog.require('bitex.util');

/**
 * @param {Object} opt_model
 * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
 *
 * @extends {goog.ui.Component}
 * @constructor
 */
bitex.ui.TwoFactor = function(opt_domHelper) {
  goog.base(this, opt_domHelper);
};
goog.inherits(bitex.ui.TwoFactor, goog.ui.Component);


/** @override */
bitex.ui.TwoFactor.prototype.decorateInternal = function(element) {
  this.setElementInternal(element);
};

/** @override */
bitex.ui.TwoFactor.prototype.createDom = function() {
  var el = goog.soy.renderAsElement(bitex.ui.TwoFactor.templates.TwoFactor, {
    id : this.makeId('card')
  });
  this.setElementInternal(el);
};

/** @override */
bitex.ui.TwoFactor.prototype.enterDocument = function() {
  goog.base(this, 'enterDocument');
};


/**
 * @param {goog.events.Event} e
 * @private
 */
bitex.ui.TwoFactor.prototype.onSubmit_ = function(e) {
  e.preventDefault();

  var error_list = this.uniform_.validate();
  if (error_list.length > 0) {
    e.stopPropagation();
  } else {
    this.dispatchEvent(bitex.ui.TwoFactor.EventType.SUBMIT);
  }
};

