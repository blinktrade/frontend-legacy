goog.provide('jsqrcode.ECBlocks');
goog.require('jsqrcode.ECB');

/**
 * @param {number} ecCodewordsPerBlock
 * @param {jsqrcode.ECB} ecBlocks1
 * @param {jsqrcode.ECB=} opt_ecBlocks2
 * @constructor
 */
jsqrcode.ECBlocks = function (ecCodewordsPerBlock, ecBlocks1, opt_ecBlocks2) {
	this.ecCodewordsPerBlock = ecCodewordsPerBlock;
	if (goog.isDefAndNotNull(opt_ecBlocks2)) {
		this.ecBlocks = new Array(ecBlocks1, opt_ecBlocks2);
  }	else {
    this.ecBlocks = new Array(ecBlocks1);
  }
};

/**
 * @returns {number}
 */
jsqrcode.ECBlocks.prototype.getECCodewordsPerBlock = function(){
  return this.ecCodewordsPerBlock;
};

/**
 * @returns {number}
 */
jsqrcode.ECBlocks.prototype.getTotalECCodewords = function(){
  return this.ecCodewordsPerBlock * this.getNumBlocks();
};

/**
 * @returns {number}
 */
jsqrcode.ECBlocks.prototype.getNumBlocks = function(){
		var total = 0;
		for (var i = 0; i < this.ecBlocks.length; i++) {
			total += this.ecBlocks[i].length;
		}
		return total;
};


/**
 * @returns {Array.<jsqrcode.ECB>}
 */
jsqrcode.ECBlocks.prototype.getECBlocks = function(){
  return this.ecBlocks;
};
