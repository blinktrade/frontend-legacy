goog.provide('bitex.ui.LockedBalanceDisplay');

goog.require('bitex.ui.LockedBalanceDisplay.templates');
goog.require('goog.ui.Component');

goog.require('goog.dom.forms');
goog.require('goog.style');

goog.require('uniform.Uniform');

/**
 * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
 *
 * @extends {goog.ui.Component}
 * @constructor
 */
bitex.ui.LockedBalanceDisplay = function(opt_domHelper) {
  goog.base(this, opt_domHelper);
  this.setModel({currency_buy:'', currency_sell:'', broker_id:0, account_id:0});
};
goog.inherits(bitex.ui.LockedBalanceDisplay, goog.ui.Component);

/**
 * Name of base CSS class
 * @type {string}
 * @private
 */
bitex.ui.LockedBalanceDisplay.BASE_CSS_CLASS_ = goog.getCssName('locked-balance-display');


/**
 * Returns base CSS class. This getter is used to get base CSS class part.
 * All CSS class names in component are created as:
 *   goog.getCssName(this.getBaseCssClass(), 'CLASS_NAME')
 * @return {string} Base CSS class.
 */
bitex.ui.LockedBalanceDisplay.prototype.getBaseCssClass = function() {
  return bitex.ui.LockedBalanceDisplay.BASE_CSS_CLASS_;
};

/** @override */
bitex.ui.LockedBalanceDisplay.prototype.decorateInternal = function(element) {
  this.setElementInternal(element);
};

/** @override */
bitex.ui.LockedBalanceDisplay.prototype.createDom = function() {
  var el = goog.soy.renderAsElement(bitex.ui.LockedBalanceDisplay.templates.LockedBalanceDisplay, {
    id: this.makeId('locked'),
    accountBuy: '' + this.getModel().broker_id + ':' + this.getModel().account_id + '_' + this.getModel().currency_buy,
    accountSell: '' + this.getModel().broker_id + ':' + this.getModel().account_id + '_' + this.getModel().currency_sell
   });
  this.setElementInternal(el);
};

/** @override */
bitex.ui.LockedBalanceDisplay.prototype.enterDocument = function() {
  goog.base(this, 'enterDocument');
};


/**
 * @param {string} currency
 */
bitex.ui.LockedBalanceDisplay.prototype.setBuyCurrency = function(currency){
  console.log(currency);
  this.getModel().currency_buy = currency;

  var account_el = goog.dom.getElement(  this.makeId('locked_buy_account') );
  account_el.setAttribute('data-model-key', 'formatted_locked_balance_'
      + this.getModel().broker_id + ':' + this.getModel().account_id + '_' + this.getModel().currency_buy);
};

/**
 * @param {string} currency
 */
bitex.ui.LockedBalanceDisplay.prototype.setSellCurrency = function(currency){
  console.log(currency);
  this.getModel().currency_sell = currency;

  var account_el = goog.dom.getElement(  this.makeId('locked_sell_account') );
  account_el.setAttribute('data-model-key', 'formatted_locked_balance_'
      + this.getModel().broker_id + ':' + this.getModel().account_id + '_' + this.getModel().currency_sell);
};

/**
 * @param {number} broker_id
 */
bitex.ui.LockedBalanceDisplay.prototype.setBrokerID = function(broker_id) {
  console.log(broker_id);
  this.getModel().broker_id = broker_id;

  var buy_account_el = goog.dom.getElement(  this.makeId('locked_buy_account') );
  buy_account_el.setAttribute('data-model-key', 'formatted_locked_balance_'
      + this.getModel().broker_id + ':' + this.getModel().account_id + '_' + this.getModel().currency_buy);


  var sell_account_el = goog.dom.getElement(  this.makeId('locked_sell_account') );
  sell_account_el.setAttribute('data-model-key', 'formatted_locked_balance_'
      + this.getModel().broker_id + ':' + this.getModel().account_id + '_' + this.getModel().currency_sell);
};

/**
 * @param {number} account_id
 */
bitex.ui.LockedBalanceDisplay.prototype.setAccountID = function(account_id) {
  console.log(account_id);
  this.getModel().account_id = account_id;

  var buy_account_el = goog.dom.getElement(  this.makeId('locked_buy_account') );
  buy_account_el.setAttribute('data-model-key', 'formatted_locked_balance_'
      + this.getModel().broker_id + ':' + this.getModel().account_id + '_' + this.getModel().currency_buy);


  var sell_account_el = goog.dom.getElement(  this.makeId('locked_sell_account') );
  sell_account_el.setAttribute('data-model-key', 'formatted_locked_balance_'
      + this.getModel().broker_id + ':' + this.getModel().account_id + '_' + this.getModel().currency_sell);
};
