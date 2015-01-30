goog.provide('bitex.ui.DepositWithdrawButtonGroup');

goog.require('bitex.ui.DepositWithdrawButtonGroup.templates');
goog.require('goog.dom');
goog.require('goog.ui.Component');
goog.require('goog.events.Event');

/**
 * @param {goog.dom.DomHelper=} opt_domHelper
 * @constructor
 * @extends {goog.ui.Component}
 */
bitex.ui.DepositWithdrawButtonGroup = function(opt_domHelper) {
  goog.ui.Component.call(this, opt_domHelper);
  var mode = opt_mode || 'deposit';
  this.setModel([]);
};
goog.inherits(bitex.ui.DepositWithdrawButtonGroup, goog.ui.Component);


/**
 * @type {string}
 */
bitex.ui.DepositWithdrawButtonGroup.CSS_CLASS = goog.getCssName('deposit-withdraw-button-group');

/** @inheritDoc */
bitex.ui.DepositWithdrawButtonGroup.prototype.getCssClass = function() {
  return bitex.ui.DepositWithdrawButtonGroup.CSS_CLASS;
};

/** @inheritDoc */
bitex.ui.DepositWithdrawButtonGroup.prototype.createDom = function() {
  var dom = this.getDomHelper();

  var el = goog.soy.renderAsElement(bitex.ui.DepositWithdrawButtonGroup.templates.DepositWithdrawButtonGroup, {
    id               : this.makeId( 'deposit_withdraw_bg' ),
    buttons          : this.getModel()
  });
  this.setElementInternal(el);
};


/** @inheritDoc */
bitex.ui.DepositWithdrawButtonGroup.prototype.decorateInternal = function(element) {
  goog.base(this, 'decorateInternal', element);
  var dom = this.getDomHelper();
  return element;
};

/**
 * @param {string} mode
 * @param {string} currency 
 * @param {string} currencyDescription 
 * @param {string} currencySign 
 */
bitex.ui.DepositWithdrawButtonGroup.prototype.addButton = function(mode, currency, currencyDescription, currencySign) {
  var button_info = {"mode":mode, "currency":currency, "currencyDescription":currencyDescription, "currencySign":currencySign};
  this.getModel().push(button_info);
};


/**
 * A logger to help debugging
 * @type {goog.debug.Logger}
 * @private
 */
bitex.ui.DepositWithdrawButtonGroup.prototype.logger_ =
    goog.debug.Logger.getLogger('bitex.ui.DepositWithdrawButtonGroup');


/** @inheritDoc */
bitex.ui.DepositWithdrawButtonGroup.prototype.enterDocument = function() {
  goog.base(this, 'enterDocument');
};

