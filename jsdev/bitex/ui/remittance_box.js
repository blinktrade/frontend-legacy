goog.provide('bitex.ui.RemittanceBox');

goog.require('bitex.ui.RemittancesBox.templates');
goog.require('goog.dom');
goog.require('goog.object');
goog.require('goog.ui.Component');
goog.require('goog.ui.registry');
goog.require('goog.debug.Logger');
goog.require('goog.events.Event');
goog.require('goog.i18n.NumberFormat');
goog.require('goog.dom.classes');

/**
 * @param {goog.dom.DomHelper=} opt_domHelper
 * @constructor
 * @extends {goog.ui.Component}
 */
bitex.ui.RemittanceBox = function(opt_domHelper) {
  goog.ui.Component.call(this, opt_domHelper);
};
goog.inherits(bitex.ui.RemittanceBox, goog.ui.Component);

/**
 * @type {string}
 */
bitex.ui.RemittanceBox.CSS_CLASS = goog.getCssName('remittance-box');

/** @inheritDoc */
bitex.ui.RemittanceBox.prototype.getCssClass = function() {
  return bitex.ui.RemittanceBox.CSS_CLASS;
};

/** @inheritDoc */
bitex.ui.RemittanceBox.prototype.createDom = function() {
  var dom = this.getDomHelper();

  var el = goog.soy.renderAsElement(bitex.ui.RemittancesBox.templates.RemittancesBox, {
    id                        : this.makeId( 'remittance_box' ),
    remittance_data_table     : this.getModel()
  });
  this.setElementInternal(el);
};

/** @inheritDoc */
bitex.ui.RemittanceBox.prototype.decorateInternal = function(element) {
  goog.base(this, 'decorateInternal', element);
  var dom = this.getDomHelper();
  return element;
};

bitex.ui.RemittanceBox.prototype.clearCurrencies = function() {
};

bitex.ui.RemittanceBox.prototype.setCurrencyFormatterFunction = function(fmt){
  this.fmt_  = fmt;
};

bitex.ui.RemittanceBox.prototype.setCurrentCurrency = function(currency) {
  var remittance_box_elements = goog.dom.getElementsByClass('remittance-box-table', this.getElement());
  goog.array.forEach(remittance_box_elements, function(el){
    goog.style.showElement(el, false);
  }, this);

  goog.style.showElement(goog.dom.getElement(this.makeId( 'remittance_box_' + currency ) ), true);
};

/**
 * A logger to help debugging
 * @type {goog.debug.Logger}
 * @private
 */
bitex.ui.RemittanceBox.prototype.logger_ =
    goog.debug.Logger.getLogger('bitex.ui.RemittanceBox');


/** @inheritDoc */
bitex.ui.RemittanceBox.prototype.enterDocument = function() {
  goog.base(this, 'enterDocument');
  var handler = this.getHandler();
};


/** @inheritDoc */
bitex.ui.RemittanceBox.prototype.exitDocument = function(){
  goog.base(this, 'exitDocument');
};
