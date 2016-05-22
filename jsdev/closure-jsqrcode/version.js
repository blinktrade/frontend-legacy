goog.provide('jsqrcode.Version');
goog.provide('jsqrcode.Version.VERSION_DECODE_INFO');
goog.provide('jsqrcode.Version.VERSIONS');

goog.require('jsqrcode.ECB');
goog.require('jsqrcode.ECBlocks');
goog.require('jsqrcode.BitMatrix');
goog.require('jsqrcode.FormatInformation');

/**
 *
 * @param {number} versionNumber
 * @param {Array.<number>} alignmentPatternCenters
 * @param {jsqrcode.ECBlocks} ecBlocks1
 * @param {jsqrcode.ECBlocks} ecBlocks2
 * @param {jsqrcode.ECBlocks} ecBlocks3
 * @param {jsqrcode.ECBlocks} ecBlocks4
 * @constructor
 */
jsqrcode.Version = function(versionNumber, alignmentPatternCenters, ecBlocks1, ecBlocks2, ecBlocks3, ecBlocks4) {
  this.versionNumber = versionNumber;
  this.alignmentPatternCenters = alignmentPatternCenters;
  this.ecBlocks = new Array(ecBlocks1, ecBlocks2, ecBlocks3, ecBlocks4);

  var total = 0;
  var ecCodewords = ecBlocks1.getECCodewordsPerBlock();
  var ecbArray = ecBlocks1.getECBlocks();

  for (var i = 0; i < ecbArray.length; i++) {
    var ecBlock = ecbArray[i];
    total += ecBlock.getCount() * (ecBlock.getDataCodewords() + ecCodewords);
  }

  this.totalCodewords = total;
};

/**
 * @returns {number}
 */
jsqrcode.Version.prototype.getVersionNumber = function () {
		return this.versionNumber;
};

/**
 * @returns {Array.<number>}
 */
jsqrcode.Version.prototype.getAlignmentPatternCenters = function () {
  return this.alignmentPatternCenters;
};

/**
 * @returns {number}
 */
jsqrcode.Version.prototype.getTotalCodewords = function () {
  return this.totalCodewords;
};

/**
 * @returns {number}
 */
jsqrcode.Version.prototype.getDimensionForVersion = function () {
  return 17 + 4 * this.versionNumber;
};


/**
 * @type {Array.<number>}
 */
jsqrcode.Version.VERSION_DECODE_INFO = [
  0x07C94, 
  0x085BC, 
  0x09A99, 
  0x0A4D3, 
  0x0BBF6, 
  0x0C762, 
  0x0D847, 
  0x0E60D, 
  0x0F928, 
  0x10B78, 
  0x1145D, 
  0x12A17, 
  0x13532, 
  0x149A6, 
  0x15683, 
  0x168C9, 
  0x177EC, 
  0x18EC4, 
  0x191E1, 
  0x1AFAB, 
  0x1B08E, 
  0x1CC1A, 
  0x1D33F, 
  0x1ED75, 
  0x1F250, 
  0x209D5, 
  0x216F0, 
  0x228BA, 
  0x2379F, 
  0x24B0B, 
  0x2542E, 
  0x26A64, 
  0x27541, 
  0x28C69
];

/**
 * @type {Array.<jsqrcode.Version>}
 */
jsqrcode.Version.VERSIONS = [
  new jsqrcode.Version(1, [], new jsqrcode.ECBlocks(7, new jsqrcode.ECB(1, 19)), new jsqrcode.ECBlocks(10, new jsqrcode.ECB(1, 16)), new jsqrcode.ECBlocks(13, new jsqrcode.ECB(1, 13)), new jsqrcode.ECBlocks(17, new jsqrcode.ECB(1, 9))),
  new jsqrcode.Version(2, [6, 18], new jsqrcode.ECBlocks(10, new jsqrcode.ECB(1, 34)), new jsqrcode.ECBlocks(16, new jsqrcode.ECB(1, 28)), new jsqrcode.ECBlocks(22, new jsqrcode.ECB(1, 22)), new jsqrcode.ECBlocks(28, new jsqrcode.ECB(1, 16))),
  new jsqrcode.Version(3, [6, 22], new jsqrcode.ECBlocks(15, new jsqrcode.ECB(1, 55)), new jsqrcode.ECBlocks(26, new jsqrcode.ECB(1, 44)), new jsqrcode.ECBlocks(18, new jsqrcode.ECB(2, 17)), new jsqrcode.ECBlocks(22, new jsqrcode.ECB(2, 13))),
  new jsqrcode.Version(4, [6, 26], new jsqrcode.ECBlocks(20, new jsqrcode.ECB(1, 80)), new jsqrcode.ECBlocks(18, new jsqrcode.ECB(2, 32)), new jsqrcode.ECBlocks(26, new jsqrcode.ECB(2, 24)), new jsqrcode.ECBlocks(16, new jsqrcode.ECB(4, 9))),
  new jsqrcode.Version(5, [6, 30], new jsqrcode.ECBlocks(26, new jsqrcode.ECB(1, 108)), new jsqrcode.ECBlocks(24, new jsqrcode.ECB(2, 43)), new jsqrcode.ECBlocks(18, new jsqrcode.ECB(2, 15), new jsqrcode.ECB(2, 16)), new jsqrcode.ECBlocks(22, new jsqrcode.ECB(2, 11), new jsqrcode.ECB(2, 12))),
  new jsqrcode.Version(6, [6, 34], new jsqrcode.ECBlocks(18, new jsqrcode.ECB(2, 68)), new jsqrcode.ECBlocks(16, new jsqrcode.ECB(4, 27)), new jsqrcode.ECBlocks(24, new jsqrcode.ECB(4, 19)), new jsqrcode.ECBlocks(28, new jsqrcode.ECB(4, 15))),
  new jsqrcode.Version(7, [6, 22, 38], new jsqrcode.ECBlocks(20, new jsqrcode.ECB(2, 78)), new jsqrcode.ECBlocks(18, new jsqrcode.ECB(4, 31)), new jsqrcode.ECBlocks(18, new jsqrcode.ECB(2, 14), new jsqrcode.ECB(4, 15)), new jsqrcode.ECBlocks(26, new jsqrcode.ECB(4, 13), new jsqrcode.ECB(1, 14))),
  new jsqrcode.Version(8, [6, 24, 42], new jsqrcode.ECBlocks(24, new jsqrcode.ECB(2, 97)), new jsqrcode.ECBlocks(22, new jsqrcode.ECB(2, 38), new jsqrcode.ECB(2, 39)), new jsqrcode.ECBlocks(22, new jsqrcode.ECB(4, 18), new jsqrcode.ECB(2, 19)), new jsqrcode.ECBlocks(26, new jsqrcode.ECB(4, 14), new jsqrcode.ECB(2, 15))),
  new jsqrcode.Version(9, [6, 26, 46], new jsqrcode.ECBlocks(30, new jsqrcode.ECB(2, 116)), new jsqrcode.ECBlocks(22, new jsqrcode.ECB(3, 36), new jsqrcode.ECB(2, 37)), new jsqrcode.ECBlocks(20, new jsqrcode.ECB(4, 16), new jsqrcode.ECB(4, 17)), new jsqrcode.ECBlocks(24, new jsqrcode.ECB(4, 12), new jsqrcode.ECB(4, 13))),
  new jsqrcode.Version(10, [6, 28, 50], new jsqrcode.ECBlocks(18, new jsqrcode.ECB(2, 68), new jsqrcode.ECB(2, 69)), new jsqrcode.ECBlocks(26, new jsqrcode.ECB(4, 43), new jsqrcode.ECB(1, 44)), new jsqrcode.ECBlocks(24, new jsqrcode.ECB(6, 19), new jsqrcode.ECB(2, 20)), new jsqrcode.ECBlocks(28, new jsqrcode.ECB(6, 15), new jsqrcode.ECB(2, 16))),
  new jsqrcode.Version(11, [6, 30, 54], new jsqrcode.ECBlocks(20, new jsqrcode.ECB(4, 81)), new jsqrcode.ECBlocks(30, new jsqrcode.ECB(1, 50), new jsqrcode.ECB(4, 51)), new jsqrcode.ECBlocks(28, new jsqrcode.ECB(4, 22), new jsqrcode.ECB(4, 23)), new jsqrcode.ECBlocks(24, new jsqrcode.ECB(3, 12), new jsqrcode.ECB(8, 13))),
  new jsqrcode.Version(12, [6, 32, 58], new jsqrcode.ECBlocks(24, new jsqrcode.ECB(2, 92), new jsqrcode.ECB(2, 93)), new jsqrcode.ECBlocks(22, new jsqrcode.ECB(6, 36), new jsqrcode.ECB(2, 37)), new jsqrcode.ECBlocks(26, new jsqrcode.ECB(4, 20), new jsqrcode.ECB(6, 21)), new jsqrcode.ECBlocks(28, new jsqrcode.ECB(7, 14), new jsqrcode.ECB(4, 15))),
  new jsqrcode.Version(13, [6, 34, 62], new jsqrcode.ECBlocks(26, new jsqrcode.ECB(4, 107)), new jsqrcode.ECBlocks(22, new jsqrcode.ECB(8, 37), new jsqrcode.ECB(1, 38)), new jsqrcode.ECBlocks(24, new jsqrcode.ECB(8, 20), new jsqrcode.ECB(4, 21)), new jsqrcode.ECBlocks(22, new jsqrcode.ECB(12, 11), new jsqrcode.ECB(4, 12))),
  new jsqrcode.Version(14, [6, 26, 46, 66], new jsqrcode.ECBlocks(30, new jsqrcode.ECB(3, 115), new jsqrcode.ECB(1, 116)), new jsqrcode.ECBlocks(24, new jsqrcode.ECB(4, 40), new jsqrcode.ECB(5, 41)), new jsqrcode.ECBlocks(20, new jsqrcode.ECB(11, 16), new jsqrcode.ECB(5, 17)), new jsqrcode.ECBlocks(24, new jsqrcode.ECB(11, 12), new jsqrcode.ECB(5, 13))),
  new jsqrcode.Version(15, [6, 26, 48, 70], new jsqrcode.ECBlocks(22, new jsqrcode.ECB(5, 87), new jsqrcode.ECB(1, 88)), new jsqrcode.ECBlocks(24, new jsqrcode.ECB(5, 41), new jsqrcode.ECB(5, 42)), new jsqrcode.ECBlocks(30, new jsqrcode.ECB(5, 24), new jsqrcode.ECB(7, 25)), new jsqrcode.ECBlocks(24, new jsqrcode.ECB(11, 12), new jsqrcode.ECB(7, 13))),
  new jsqrcode.Version(16, [6, 26, 50, 74], new jsqrcode.ECBlocks(24, new jsqrcode.ECB(5, 98), new jsqrcode.ECB(1, 99)), new jsqrcode.ECBlocks(28, new jsqrcode.ECB(7, 45), new jsqrcode.ECB(3, 46)), new jsqrcode.ECBlocks(24, new jsqrcode.ECB(15, 19), new jsqrcode.ECB(2, 20)), new jsqrcode.ECBlocks(30, new jsqrcode.ECB(3, 15), new jsqrcode.ECB(13, 16))),
  new jsqrcode.Version(17, [6, 30, 54, 78], new jsqrcode.ECBlocks(28, new jsqrcode.ECB(1, 107), new jsqrcode.ECB(5, 108)), new jsqrcode.ECBlocks(28, new jsqrcode.ECB(10, 46), new jsqrcode.ECB(1, 47)), new jsqrcode.ECBlocks(28, new jsqrcode.ECB(1, 22), new jsqrcode.ECB(15, 23)), new jsqrcode.ECBlocks(28, new jsqrcode.ECB(2, 14), new jsqrcode.ECB(17, 15))),
  new jsqrcode.Version(18, [6, 30, 56, 82], new jsqrcode.ECBlocks(30, new jsqrcode.ECB(5, 120), new jsqrcode.ECB(1, 121)), new jsqrcode.ECBlocks(26, new jsqrcode.ECB(9, 43), new jsqrcode.ECB(4, 44)), new jsqrcode.ECBlocks(28, new jsqrcode.ECB(17, 22), new jsqrcode.ECB(1, 23)), new jsqrcode.ECBlocks(28, new jsqrcode.ECB(2, 14), new jsqrcode.ECB(19, 15))),
  new jsqrcode.Version(19, [6, 30, 58, 86], new jsqrcode.ECBlocks(28, new jsqrcode.ECB(3, 113), new jsqrcode.ECB(4, 114)), new jsqrcode.ECBlocks(26, new jsqrcode.ECB(3, 44), new jsqrcode.ECB(11, 45)), new jsqrcode.ECBlocks(26, new jsqrcode.ECB(17, 21), new jsqrcode.ECB(4, 22)), new jsqrcode.ECBlocks(26, new jsqrcode.ECB(9, 13), new jsqrcode.ECB(16, 14))),
  new jsqrcode.Version(20, [6, 34, 62, 90], new jsqrcode.ECBlocks(28, new jsqrcode.ECB(3, 107), new jsqrcode.ECB(5, 108)), new jsqrcode.ECBlocks(26, new jsqrcode.ECB(3, 41), new jsqrcode.ECB(13, 42)), new jsqrcode.ECBlocks(30, new jsqrcode.ECB(15, 24), new jsqrcode.ECB(5, 25)), new jsqrcode.ECBlocks(28, new jsqrcode.ECB(15, 15), new jsqrcode.ECB(10, 16))),
  new jsqrcode.Version(21, [6, 28, 50, 72, 94], new jsqrcode.ECBlocks(28, new jsqrcode.ECB(4, 116), new jsqrcode.ECB(4, 117)), new jsqrcode.ECBlocks(26, new jsqrcode.ECB(17, 42)), new jsqrcode.ECBlocks(28, new jsqrcode.ECB(17, 22), new jsqrcode.ECB(6, 23)), new jsqrcode.ECBlocks(30, new jsqrcode.ECB(19, 16), new jsqrcode.ECB(6, 17))),
  new jsqrcode.Version(22, [6, 26, 50, 74, 98], new jsqrcode.ECBlocks(28, new jsqrcode.ECB(2, 111), new jsqrcode.ECB(7, 112)), new jsqrcode.ECBlocks(28, new jsqrcode.ECB(17, 46)), new jsqrcode.ECBlocks(30, new jsqrcode.ECB(7, 24), new jsqrcode.ECB(16, 25)), new jsqrcode.ECBlocks(24, new jsqrcode.ECB(34, 13))),
  new jsqrcode.Version(23, [6, 30, 54, 74, 102], new jsqrcode.ECBlocks(30, new jsqrcode.ECB(4, 121), new jsqrcode.ECB(5, 122)), new jsqrcode.ECBlocks(28, new jsqrcode.ECB(4, 47), new jsqrcode.ECB(14, 48)), new jsqrcode.ECBlocks(30, new jsqrcode.ECB(11, 24), new jsqrcode.ECB(14, 25)), new jsqrcode.ECBlocks(30, new jsqrcode.ECB(16, 15), new jsqrcode.ECB(14, 16))),
  new jsqrcode.Version(24, [6, 28, 54, 80, 106], new jsqrcode.ECBlocks(30, new jsqrcode.ECB(6, 117), new jsqrcode.ECB(4, 118)), new jsqrcode.ECBlocks(28, new jsqrcode.ECB(6, 45), new jsqrcode.ECB(14, 46)), new jsqrcode.ECBlocks(30, new jsqrcode.ECB(11, 24), new jsqrcode.ECB(16, 25)), new jsqrcode.ECBlocks(30, new jsqrcode.ECB(30, 16), new jsqrcode.ECB(2, 17))),
  new jsqrcode.Version(25, [6, 32, 58, 84, 110], new jsqrcode.ECBlocks(26, new jsqrcode.ECB(8, 106), new jsqrcode.ECB(4, 107)), new jsqrcode.ECBlocks(28, new jsqrcode.ECB(8, 47), new jsqrcode.ECB(13, 48)), new jsqrcode.ECBlocks(30, new jsqrcode.ECB(7, 24), new jsqrcode.ECB(22, 25)), new jsqrcode.ECBlocks(30, new jsqrcode.ECB(22, 15), new jsqrcode.ECB(13, 16))),
  new jsqrcode.Version(26, [6, 30, 58, 86, 114], new jsqrcode.ECBlocks(28, new jsqrcode.ECB(10, 114), new jsqrcode.ECB(2, 115)), new jsqrcode.ECBlocks(28, new jsqrcode.ECB(19, 46), new jsqrcode.ECB(4, 47)), new jsqrcode.ECBlocks(28, new jsqrcode.ECB(28, 22), new jsqrcode.ECB(6, 23)), new jsqrcode.ECBlocks(30, new jsqrcode.ECB(33, 16), new jsqrcode.ECB(4, 17))),
  new jsqrcode.Version(27, [6, 34, 62, 90, 118], new jsqrcode.ECBlocks(30, new jsqrcode.ECB(8, 122), new jsqrcode.ECB(4, 123)), new jsqrcode.ECBlocks(28, new jsqrcode.ECB(22, 45), new jsqrcode.ECB(3, 46)), new jsqrcode.ECBlocks(30, new jsqrcode.ECB(8, 23), new jsqrcode.ECB(26, 24)), new jsqrcode.ECBlocks(30, new jsqrcode.ECB(12, 15), new jsqrcode.ECB(28, 16))),
  new jsqrcode.Version(28, [6, 26, 50, 74, 98, 122], new jsqrcode.ECBlocks(30, new jsqrcode.ECB(3, 117), new jsqrcode.ECB(10, 118)), new jsqrcode.ECBlocks(28, new jsqrcode.ECB(3, 45), new jsqrcode.ECB(23, 46)), new jsqrcode.ECBlocks(30, new jsqrcode.ECB(4, 24), new jsqrcode.ECB(31, 25)), new jsqrcode.ECBlocks(30, new jsqrcode.ECB(11, 15), new jsqrcode.ECB(31, 16))),
  new jsqrcode.Version(29, [6, 30, 54, 78, 102, 126], new jsqrcode.ECBlocks(30, new jsqrcode.ECB(7, 116), new jsqrcode.ECB(7, 117)), new jsqrcode.ECBlocks(28, new jsqrcode.ECB(21, 45), new jsqrcode.ECB(7, 46)), new jsqrcode.ECBlocks(30, new jsqrcode.ECB(1, 23), new jsqrcode.ECB(37, 24)), new jsqrcode.ECBlocks(30, new jsqrcode.ECB(19, 15), new jsqrcode.ECB(26, 16))),
  new jsqrcode.Version(30, [6, 26, 52, 78, 104, 130], new jsqrcode.ECBlocks(30, new jsqrcode.ECB(5, 115), new jsqrcode.ECB(10, 116)), new jsqrcode.ECBlocks(28, new jsqrcode.ECB(19, 47), new jsqrcode.ECB(10, 48)), new jsqrcode.ECBlocks(30, new jsqrcode.ECB(15, 24), new jsqrcode.ECB(25, 25)), new jsqrcode.ECBlocks(30, new jsqrcode.ECB(23, 15), new jsqrcode.ECB(25, 16))),
  new jsqrcode.Version(31, [6, 30, 56, 82, 108, 134], new jsqrcode.ECBlocks(30, new jsqrcode.ECB(13, 115), new jsqrcode.ECB(3, 116)), new jsqrcode.ECBlocks(28, new jsqrcode.ECB(2, 46), new jsqrcode.ECB(29, 47)), new jsqrcode.ECBlocks(30, new jsqrcode.ECB(42, 24), new jsqrcode.ECB(1, 25)), new jsqrcode.ECBlocks(30, new jsqrcode.ECB(23, 15), new jsqrcode.ECB(28, 16))),
  new jsqrcode.Version(32, [6, 34, 60, 86, 112, 138], new jsqrcode.ECBlocks(30, new jsqrcode.ECB(17, 115)), new jsqrcode.ECBlocks(28, new jsqrcode.ECB(10, 46), new jsqrcode.ECB(23, 47)), new jsqrcode.ECBlocks(30, new jsqrcode.ECB(10, 24), new jsqrcode.ECB(35, 25)), new jsqrcode.ECBlocks(30, new jsqrcode.ECB(19, 15), new jsqrcode.ECB(35, 16))),
  new jsqrcode.Version(33, [6, 30, 58, 86, 114, 142], new jsqrcode.ECBlocks(30, new jsqrcode.ECB(17, 115), new jsqrcode.ECB(1, 116)), new jsqrcode.ECBlocks(28, new jsqrcode.ECB(14, 46), new jsqrcode.ECB(21, 47)), new jsqrcode.ECBlocks(30, new jsqrcode.ECB(29, 24), new jsqrcode.ECB(19, 25)), new jsqrcode.ECBlocks(30, new jsqrcode.ECB(11, 15), new jsqrcode.ECB(46, 16))),
  new jsqrcode.Version(34, [6, 34, 62, 90, 118, 146], new jsqrcode.ECBlocks(30, new jsqrcode.ECB(13, 115), new jsqrcode.ECB(6, 116)), new jsqrcode.ECBlocks(28, new jsqrcode.ECB(14, 46), new jsqrcode.ECB(23, 47)), new jsqrcode.ECBlocks(30, new jsqrcode.ECB(44, 24), new jsqrcode.ECB(7, 25)), new jsqrcode.ECBlocks(30, new jsqrcode.ECB(59, 16), new jsqrcode.ECB(1, 17))),
  new jsqrcode.Version(35, [6, 30, 54, 78, 102, 126, 150], new jsqrcode.ECBlocks(30, new jsqrcode.ECB(12, 121), new jsqrcode.ECB(7, 122)), new jsqrcode.ECBlocks(28, new jsqrcode.ECB(12, 47), new jsqrcode.ECB(26, 48)), new jsqrcode.ECBlocks(30, new jsqrcode.ECB(39, 24), new jsqrcode.ECB(14, 25)), new jsqrcode.ECBlocks(30, new jsqrcode.ECB(22, 15), new jsqrcode.ECB(41, 16))),
  new jsqrcode.Version(36, [6, 24, 50, 76, 102, 128, 154], new jsqrcode.ECBlocks(30, new jsqrcode.ECB(6, 121), new jsqrcode.ECB(14, 122)), new jsqrcode.ECBlocks(28, new jsqrcode.ECB(6, 47), new jsqrcode.ECB(34, 48)), new jsqrcode.ECBlocks(30, new jsqrcode.ECB(46, 24), new jsqrcode.ECB(10, 25)), new jsqrcode.ECBlocks(30, new jsqrcode.ECB(2, 15), new jsqrcode.ECB(64, 16))),
  new jsqrcode.Version(37, [6, 28, 54, 80, 106, 132, 158], new jsqrcode.ECBlocks(30, new jsqrcode.ECB(17, 122), new jsqrcode.ECB(4, 123)), new jsqrcode.ECBlocks(28, new jsqrcode.ECB(29, 46), new jsqrcode.ECB(14, 47)), new jsqrcode.ECBlocks(30, new jsqrcode.ECB(49, 24), new jsqrcode.ECB(10, 25)), new jsqrcode.ECBlocks(30, new jsqrcode.ECB(24, 15), new jsqrcode.ECB(46, 16))),
  new jsqrcode.Version(38, [6, 32, 58, 84, 110, 136, 162], new jsqrcode.ECBlocks(30, new jsqrcode.ECB(4, 122), new jsqrcode.ECB(18, 123)), new jsqrcode.ECBlocks(28, new jsqrcode.ECB(13, 46), new jsqrcode.ECB(32, 47)), new jsqrcode.ECBlocks(30, new jsqrcode.ECB(48, 24), new jsqrcode.ECB(14, 25)), new jsqrcode.ECBlocks(30, new jsqrcode.ECB(42, 15), new jsqrcode.ECB(32, 16))),
  new jsqrcode.Version(39, [6, 26, 54, 82, 110, 138, 166], new jsqrcode.ECBlocks(30, new jsqrcode.ECB(20, 117), new jsqrcode.ECB(4, 118)), new jsqrcode.ECBlocks(28, new jsqrcode.ECB(40, 47), new jsqrcode.ECB(7, 48)), new jsqrcode.ECBlocks(30, new jsqrcode.ECB(43, 24), new jsqrcode.ECB(22, 25)), new jsqrcode.ECBlocks(30, new jsqrcode.ECB(10, 15), new jsqrcode.ECB(67, 16))),
  new jsqrcode.Version(40, [6, 30, 58, 86, 114, 142, 170], new jsqrcode.ECBlocks(30, new jsqrcode.ECB(19, 118), new jsqrcode.ECB(6, 119)), new jsqrcode.ECBlocks(28, new jsqrcode.ECB(18, 47), new jsqrcode.ECB(31, 48)), new jsqrcode.ECBlocks(30, new jsqrcode.ECB(34, 24), new jsqrcode.ECB(34, 25)), new jsqrcode.ECBlocks(30, new jsqrcode.ECB(20, 15), new jsqrcode.ECB(61, 16)))
];


/**
 * @returns {jsqrcode.BitMatrix}
 */
jsqrcode.Version.prototype.buildFunctionPattern = function () {
  var dimension = this.getDimensionForVersion();
  var bitMatrix = new jsqrcode.BitMatrix(dimension);

  // Top left finder pattern + separator + format
  bitMatrix.setRegion(0, 0, 9, 9);
  // Top right finder pattern + separator + format
  bitMatrix.setRegion(dimension - 8, 0, 8, 9);
  // Bottom left finder pattern + separator + format
  bitMatrix.setRegion(0, dimension - 8, 9, 8);

  // Alignment patterns
  var max = this.alignmentPatternCenters.length;
  for (var x = 0; x < max; x++) {
    var i = this.alignmentPatternCenters[x] - 2;
    for (var y = 0; y < max; y++) {
      if ((x == 0 && (y == 0 || y == max - 1)) || (x == max - 1 && y == 0)) {
        // No alignment patterns near the three finder patterns
        continue;
      }
      bitMatrix.setRegion(this.alignmentPatternCenters[y] - 2, i, 5, 5);
    }
  }

  // Vertical timing pattern
  bitMatrix.setRegion(6, 9, 1, dimension - 17);
  // Horizontal timing pattern
  bitMatrix.setRegion(9, 6, dimension - 17, 1);

  if (this.versionNumber > 6) {
    // Version info, top right
    bitMatrix.setRegion(dimension - 11, 0, 3, 6);
    // Version info, bottom left
    bitMatrix.setRegion(0, dimension - 11, 6, 3);
  }

  return bitMatrix;
};

/**
 * @param {number} ecLevel
 * @returns {jsqrcode.ECBlocks}
 */
jsqrcode.Version.prototype.getECBlocksForLevel = function (ecLevel) {
  return this.ecBlocks[ecLevel.ordinal()];
};


/**
 * @param {number} versionNumber
 * @returns {jsqrcode.Version}
 */
jsqrcode.Version.getVersionForNumber = function (versionNumber) {
	if (versionNumber < 1 || versionNumber > 40) {
		throw "ArgumentException";
	}
	return jsqrcode.Version.VERSIONS[versionNumber - 1];
};


/**
 * @param {number} dimension
 * @returns {jsqrcode.Version}
 */
jsqrcode.Version.getProvisionalVersionForDimension = function (dimension) {
	if (dimension % 4 != 1) {
		throw "Error getProvisionalVersionForDimension";
	}
	try {
		return jsqrcode.Version.getVersionForNumber((dimension - 17) >> 2);
	} catch (iae) {
		throw "Error getVersionForNumber";
	}
};

jsqrcode.Version.decodeVersionInformation = function (versionBits) {
	var bestDifference = 0xffffffff;
	var bestVersion = 0;
	for (var i = 0; i < jsqrcode.Version.VERSION_DECODE_INFO.length; i++) {
		var targetVersion = jsqrcode.Version.VERSION_DECODE_INFO[i];
		// Do the version info bits match exactly? done.
		if (targetVersion == versionBits) {
			return jsqrcode.Version.getVersionForNumber(i + 7);
		}
		// Otherwise see if this is the closest to a real version info bit string
		// we have seen so far
		var bitsDifference = jsqrcode.FormatInformation.numBitsDiffering(versionBits, targetVersion);
		if (bitsDifference < bestDifference) {
			bestVersion = i + 7;
			bestDifference = bitsDifference;
		}
	}
	// We can tolerate up to 3 bits of error since no two version info codewords will
	// differ in less than 4 bits.
	if (bestDifference <= 3) {
		return jsqrcode.Version.getVersionForNumber(bestVersion);
	}
	// If we didn't find a close enough match, fail
	return null;
};
