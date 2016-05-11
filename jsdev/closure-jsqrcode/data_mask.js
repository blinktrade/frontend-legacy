goog.provide('jsqrcode.DataMask');
goog.require('jsqrcode.utils');
goog.require('jsqrcode.BitMatrix');

/**
 * @constructor
 */
jsqrcode.DataMask = function() {};

jsqrcode.DataMask.forReference = function(reference) {
	if (reference < 0 || reference > 7) {
		throw "System.ArgumentException";
	}
	return jsqrcode.DataMask.DATA_MASKS[reference];
};

/**
 * @constructor
 */
jsqrcode.DataMaskBase = function () {
};

/**
 * @param {jsqrcode.BitMatrix} bits
 * @param {number} dimension
 */
jsqrcode.DataMaskBase.unmaskBitMatrix  = function (bits, dimension) {
	for (var i = 0; i < dimension; i++) {
		for (var j = 0; j < dimension; j++) {
			if (this.isMasked(i, j)) {
				bits.flip(j, i);
			}
		}
	}
};


/**
 * @constructor
 */
jsqrcode.DataMask000 = function () {
};
goog.inherits(jsqrcode.DataMask000, jsqrcode.DataMaskBase);

/**
 * @constructor
 */
jsqrcode.DataMask001 = function () {
};
goog.inherits(jsqrcode.DataMask001, jsqrcode.DataMaskBase);

/**
 * @constructor
 */
jsqrcode.DataMask010 = function () {
};
goog.inherits(jsqrcode.DataMask010, jsqrcode.DataMaskBase);

/**
 * @constructor
 */
jsqrcode.DataMask011 = function () {
};
goog.inherits(jsqrcode.DataMask011, jsqrcode.DataMaskBase);

/**
 * @constructor
 */
jsqrcode.DataMask100 = function () {
};
goog.inherits(jsqrcode.DataMask100, jsqrcode.DataMaskBase);

/**
 * @constructor
 */
jsqrcode.DataMask101 = function () {
};
goog.inherits(jsqrcode.DataMask101, jsqrcode.DataMaskBase);


/**
 * @constructor
 */
jsqrcode.DataMask110 = function () {
};
goog.inherits(jsqrcode.DataMask110, jsqrcode.DataMaskBase);

/**
 * @constructor
 */
jsqrcode.DataMask111 = function () {
};
goog.inherits(jsqrcode.DataMask111, jsqrcode.DataMaskBase);


/**
 * @param {number} i
 * @param {number} j
 * @returns {boolean}
 */
jsqrcode.DataMask000.prototype.isMasked = function (i, j) {
	return ((i + j) & 0x01) == 0;
};

/**
 * @param {number} i
 * @param {number} j
 * @returns {boolean}
 */
jsqrcode.DataMask001.prototype.isMasked = function (i, j) {
	return (i & 0x01) == 0;
};

/**
 * @param {number} i
 * @param {number} j
 * @returns {boolean}
 */
jsqrcode.DataMask010.prototype.isMasked = function (i, j) {
	return j % 3 == 0;
};

/**
 * @param {number} i
 * @param {number} j
 * @returns {boolean}
 */
jsqrcode.DataMask011.prototype.isMasked = function (i, j) {
	return (i + j) % 3 == 0;
};


/**
 * @param {number} i
 * @param {number} j
 * @returns {boolean}
 */
jsqrcode.DataMask100.prototype.isMasked = function (i, j) {
	return (((jsqrcode.utils.URShift(i, 1)) + (j / 3)) & 0x01) == 0;
};


/**
 * @param {number} i
 * @param {number} j
 * @returns {boolean}
 */
jsqrcode.DataMask101.prototype.isMasked = function (i, j) {
	var temp = i * j;
	return (temp & 0x01) + (temp % 3) == 0;
};

/**
 * @param {number} i
 * @param {number} j
 * @returns {boolean}
 */
jsqrcode.DataMask110.prototype.isMasked = function (i, j) {
	var temp = i * j;
	return (((temp & 0x01) + (temp % 3)) & 0x01) == 0;
};


/**
 * @param {number} i
 * @param {number} j
 * @returns {boolean}
 */
jsqrcode.DataMask111.prototype.isMasked = function (i, j) {
	return ((((i + j) & 0x01) + ((i * j) % 3)) & 0x01) == 0;
};


/**
 * @type {Array.<Object>}
 */
jsqrcode.DataMask.DATA_MASKS = [
	new jsqrcode.DataMask000(),
	new jsqrcode.DataMask001(),
	new jsqrcode.DataMask010(),
	new jsqrcode.DataMask011(),
	new jsqrcode.DataMask100(),
	new jsqrcode.DataMask101(),
	new jsqrcode.DataMask110(),
	new jsqrcode.DataMask111()
];
