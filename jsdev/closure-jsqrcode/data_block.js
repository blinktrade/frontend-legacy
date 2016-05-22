goog.provide('jsqrcode.DataBlock');
goog.require('jsqrcode.Version');

/**
 * @param numDataCodewords
 * @param codewords
 * @constructor
 */
jsqrcode.DataBlock = function(numDataCodewords, codewords) {
	this.numDataCodewords = numDataCodewords;
	this.codewords = codewords;
};

jsqrcode.DataBlock.prototype.getNumDataCodewords = function () {
  return this.numDataCodewords;
};

jsqrcode.DataBlock.prototype.getCodewords = function () {
  return this.codewords;
};


jsqrcode.DataBlock.getDataBlocks = function (rawCodewords, version, ecLevel) {
	if (rawCodewords.length != version.getTotalCodewords()) {
		throw "ArgumentException";
	}

	// Figure out the number and size of data blocks used by this version and
	// error correction level
	var ecBlocks = version.getECBlocksForLevel(ecLevel);

	// First count the total number of data blocks
	var totalBlocks = 0, i;
	var ecBlockArray = ecBlocks.getECBlocks();
	for (i = 0; i < ecBlockArray.length; i++) {
		totalBlocks += ecBlockArray[i].getCount();
	}

	// Now establish DataBlocks of the appropriate size and number of data codewords
	var result = new Array(totalBlocks);
	var numResultBlocks = 0, j;
	for (j = 0; j < ecBlockArray.length; j++) {
		var ecBlock = ecBlockArray[j];
		for (i = 0; i < ecBlock.getCount(); i++) {
			var numDataCodewords = ecBlock.getDataCodewords();
			var numBlockCodewords = ecBlocks.getECCodewordsPerBlock() + numDataCodewords;
			result[numResultBlocks++] = new jsqrcode.DataBlock(numDataCodewords, new Array(numBlockCodewords));
		}
	}

	// All blocks have the same amount of data, except that the last n
	// (where n may be 0) have 1 more byte. Figure out where these start.
	var shorterBlocksTotalCodewords = result[0].codewords.length;
	var longerBlocksStartAt = result.length - 1;
	while (longerBlocksStartAt >= 0) {
		var numCodewords = result[longerBlocksStartAt].codewords.length;
		if (numCodewords == shorterBlocksTotalCodewords) {
			break;
		}
		longerBlocksStartAt--;
	}
	longerBlocksStartAt++;

	var shorterBlocksNumDataCodewords = shorterBlocksTotalCodewords - ecBlocks.getECCodewordsPerBlock();
	// The last elements of result may be 1 element longer;
	// first fill out as many elements as all of them have
	var rawCodewordsOffset = 0;
	for (i = 0; i < shorterBlocksNumDataCodewords; i++) {
		for (j = 0; j < numResultBlocks; j++) {
			result[j].codewords[i] = rawCodewords[rawCodewordsOffset++];
		}
	}
	// Fill out the last data block in the longer ones
	for (j = longerBlocksStartAt; j < numResultBlocks; j++) {
		result[j].codewords[shorterBlocksNumDataCodewords] = rawCodewords[rawCodewordsOffset++];
	}
	// Now add in error correction blocks
	var max = result[0].codewords.length;
	for (i = shorterBlocksNumDataCodewords; i < max; i++) {
		for (j = 0; j < numResultBlocks; j++) {
			var iOffset = j < longerBlocksStartAt ? i : i + 1;
			result[j].codewords[iOffset] = rawCodewords[rawCodewordsOffset++];
		}
	}
	return result;
};
