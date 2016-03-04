goog.provide('jsqrcode.ECB');

/**
 * @param {number} count
 * @param {number} dataCodewords
 * @constructor
 */
jsqrcode.ECB = function(count, dataCodewords){
	this.count = count;
	this.dataCodewords = dataCodewords;
};

/**
 * @returns {number}
 */
jsqrcode.ECB.prototype.getCount = function(){
  return this.count;
};

/**
 * @returns {number}
 */
jsqrcode.ECB.prototype.getDataCodewords = function(){
  return this.dataCodewords;
};
