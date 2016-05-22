goog.provide('jsqrcode.ErrorCorrectionLevel');
goog.provide('jsqrcode.ErrorCorrectionLevel.Bits');
goog.provide('jsqrcode.ErrorCorrectionLevel.FOR_BITS');

/**
 * @param {number} ordinal
 * @param {number} bits
 * @param {string} name
 * @constructor
 */
jsqrcode.ErrorCorrectionLevel = function (ordinal, bits, name) {
	this.ordinal_Renamed_Field = ordinal;
	this.bits = bits;
	this.name = name;
};

/**
 * @returns {number}
 */
jsqrcode.ErrorCorrectionLevel.prototype.getBits = function(){
  return this.bits;
};

/**
 * @returns {string}
 */
jsqrcode.ErrorCorrectionLevel.prototype.getName = function(){
  return this.name;
};

/**
 * @returns {number}
 */
jsqrcode.ErrorCorrectionLevel.prototype.ordinal = function(){
  return this.ordinal_Renamed_Field;
};


/**
 * @enum {string} Bits
 */
jsqrcode.ErrorCorrectionLevel.Bits = {
  L: new jsqrcode.ErrorCorrectionLevel(0, 0x01, "L"),
  M: new jsqrcode.ErrorCorrectionLevel(1, 0x00, "M"),
  Q: new jsqrcode.ErrorCorrectionLevel(2, 0x03, "Q"),
  H: new jsqrcode.ErrorCorrectionLevel(3, 0x02, "H")
};

/**
 * @type {Array.<jsqrcode.ErrorCorrectionLevel.Bits>}
 */
jsqrcode.ErrorCorrectionLevel.FOR_BITS = [
  jsqrcode.ErrorCorrectionLevel.Bits.M,
  jsqrcode.ErrorCorrectionLevel.Bits.L,
  jsqrcode.ErrorCorrectionLevel.Bits.H,
  jsqrcode.ErrorCorrectionLevel.Bits.Q
];

/**
 * @param {number} bits
 * @returns {jsqrcode.ErrorCorrectionLevel.Bits|*}
 */
jsqrcode.ErrorCorrectionLevel.forBits = function (bits) {
	if (bits < 0 || bits >= jsqrcode.ErrorCorrectionLevel.FOR_BITS.length) {
		throw "ArgumentException";
	}
	return jsqrcode.ErrorCorrectionLevel.FOR_BITS[bits];
};
