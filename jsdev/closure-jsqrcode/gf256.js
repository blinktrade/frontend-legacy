goog.provide('jsqrcode.GF256');
goog.provide('jsqrcode.GF256.QR_CODE_FIELD');
goog.provide('jsqrcode.GF256.DATA_MATRIX_FIELD');

goog.require('jsqrcode.GF256Poly');


/**
 * @param {number} primitive
 * @constructor
 */
jsqrcode.GF256 = function(primitive) {
  this.expTable = new Array(256);
  this.logTable = new Array(256);
  var x = 1;
  for (var i = 0; i < 256; i++) {
    this.expTable[i] = x;
    x <<= 1; // x = x * 2; we're assuming the generator alpha is 2
    if (x >= 0x100) {
      x ^= primitive;
    }
  }
  for (var i = 0; i < 255; i++) {
    this.logTable[this.expTable[i]] = i;
  }
  // logTable[0] == 0 but this should never be used
  this.zero = new jsqrcode.GF256Poly(this, [0]);
  this.one = new jsqrcode.GF256Poly(this, [1]);
};


/**
 * @type {jsqrcode.GF256}
 */
jsqrcode.GF256.QR_CODE_FIELD = new jsqrcode.GF256(0x011D);


/**
 * @type {jsqrcode.GF256}
 */
jsqrcode.GF256.DATA_MATRIX_FIELD = new jsqrcode.GF256(0x012D);


/**
 * @returns {jsqrcode.GF256Poly}
 */
jsqrcode.GF256.prototype.getZero =  function () {
  return this.zero;
};

/**
 * @returns {jsqrcode.GF256Poly}
 */
jsqrcode.GF256.prototype.getOne = function () {
  return this.one;
};

/**
 * @param {number} degree
 * @param {number} coefficient
 * @returns {jsqrcode.GF256Poly}
 */
jsqrcode.GF256.prototype.buildMonomial = function (degree, coefficient) {
  if (degree < 0) {
    throw "System.ArgumentException";
  }
  if (coefficient == 0) {
    return this.zero;
  }
  var coefficients = new Array(degree + 1);

  for (var i = 0; i < coefficients.length; i++)
    coefficients[i] = 0;

  coefficients[0] = coefficient;

  return new jsqrcode.GF256Poly(this, coefficients);
};

jsqrcode.GF256.prototype.exp = function (a) {
  return this.expTable[a];
};

jsqrcode.GF256.prototype.log = function (a) {
  if (a == 0) {
    throw "System.ArgumentException";
  }
  return this.logTable[a];
};

jsqrcode.GF256.prototype.inverse = function (a) {
  if (a == 0) {
    throw "System.ArithmeticException";
  }
  return this.expTable[255 - this.logTable[a]];
};

jsqrcode.GF256.prototype.multiply = function (a, b) {
  if (a == 0 || b == 0) {
    return 0;
  }
  if (a == 1) {
    return b;
  }
  if (b == 1) {
    return a;
  }
  return this.expTable[(this.logTable[a] + this.logTable[b]) % 255];
};

jsqrcode.GF256.addOrSubtract = function (a, b) {
	return a ^ b;
};