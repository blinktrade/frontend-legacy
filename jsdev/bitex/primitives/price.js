goog.provide('bitex.primitives.Price');

goog.require('goog.i18n.NumberFormat');

/**
 * @param {number} value
 * @param {number} pip
 * @constructor
 */
bitex.primitives.Price = function(value, pip) {
  this.value_ = value;
  this.pip_ = pip;
};

/**
 * @type {number}
 * @private
 */
bitex.primitives.Price.prototype.value_;

/**
 * @type {number}
 * @private
 */
bitex.primitives.Price.prototype.pip_;

/**
 * @param {number} opt_number_of_pips   Default to 1
 * @return {number}
 */
bitex.primitives.Price.prototype.pipUp = function(opt_number_of_pips) {
  var number_of_pips = opt_number_of_pips | 1;
  return this.pip(number_of_pips);
};

/**
 * @param {number} opt_number_of_pips   Default to 1
 * @return {number}
 */
bitex.primitives.Price.prototype.pipDown = function(opt_number_of_pips) {
  var number_of_pips = opt_number_of_pips | 1;
  return this.pip(number_of_pips * -1 );
};

/**
 * @param {number} number_of_pips
 * @return {number}
 */
bitex.primitives.Price.prototype.pip = function(number_of_pips) {
  this.setValue( this.getValue() + (number_of_pips * this.getPip() ) );
  return this.getValue();
};

/**
 * @return {number}
 */
bitex.primitives.Price.prototype.floor = function() {
  return Math.floor( this.getValue() / this.getPip()) * this.getPip();
};

/**
 * @return {number}
 */
bitex.primitives.Price.prototype.ceil = function() {
  return Math.ceil( this.getValue() / this.getPip()) * this.getPip();
};

/**
 * @return {number}
 */
bitex.primitives.Price.prototype.round = function() {
  return Math.round( this.getValue() / this.getPip()) * this.getPip();
};

/**
 * @param {number|string=} opt_pattern Optional
 * @param {string=} opt_currency Optional
 * @return {string}
 */
bitex.primitives.Price.prototype.format = function(opt_pattern, opt_currency) {
  var pattern = opt_pattern | goog.i18n.NumberFormat.Format.DECIMAL ;

  var number_of_decimal_digits = parseInt(Math.log(1e8) / Math.LN10 - Math.log(this.getPip()) / Math.LN10, 10) ;

  var value_fmt = new goog.i18n.NumberFormat(pattern, opt_currency);
  value_fmt.setMaximumFractionDigits(number_of_decimal_digits);
  value_fmt.setMinimumFractionDigits(number_of_decimal_digits);

  return value_fmt.format( this.getValue()  / 1e8 );
};

/**
 * @return {number}
 */
bitex.primitives.Price.prototype.getPip = function() {
  return this.pip_;
};


/**
 * @return {number}
 */
bitex.primitives.Price.prototype.getValue = function() {
  return this.value_;
};

/**
 * @param {number} value
 */
bitex.primitives.Price.prototype.setValue = function(value) {
  this.value_ = value;
};