goog.provide('jsqrcode.Decoder');
goog.provide('jsqrcode.Decoder.rsDecoder');

goog.require('jsqrcode.ReedSolomonDecoder');
goog.require('jsqrcode.BitMatrixParser');
goog.require('jsqrcode.DataBlock');
goog.require('jsqrcode.QRCodeDataBlockReader');

/**
 * @constructor
 */
jsqrcode.Decoder = function(){
};


/**
 * @type {jsqrcode.ReedSolomonDecoder}
 */
jsqrcode.Decoder.rsDecoder = new jsqrcode.ReedSolomonDecoder(jsqrcode.GF256.QR_CODE_FIELD);


jsqrcode.Decoder.correctErrors = function (codewordBytes, numDataCodewords) {
	var numCodewords = codewordBytes.length;
	// First read into an array of ints
	var codewordsInts = new Array(numCodewords);
	for (var i = 0; i < numCodewords; i++) {
		codewordsInts[i] = codewordBytes[i] & 0xFF;
	}
	var numECCodewords = codewordBytes.length - numDataCodewords;
	try {
		jsqrcode.Decoder.rsDecoder.decode(codewordsInts, numECCodewords);
	} catch (rse) {
		throw rse;
	}
	// Copy back into array of bytes -- only need to worry about the bytes that were data
	// We don't care about errors in the error-correction codewords
	for (var i = 0; i < numDataCodewords; i++) {
		codewordBytes[i] = codewordsInts[i];
	}
};

/**
 * @param {jsqrcode.BitMatrix} bits
 * @returns {jsqrcode.QRCodeDataBlockReader}
 */
jsqrcode.Decoder.decode = function (bits) {
	var parser = new jsqrcode.BitMatrixParser(bits);
	var version = parser.readVersion();
	var ecLevel = parser.readFormatInformation().getErrorCorrectionLevel();

	// Read codewords
	var codewords = parser.readCodewords();

	// Separate into data blocks
	var dataBlocks = jsqrcode.DataBlock.getDataBlocks(codewords, version, ecLevel);

	// Count total number of data bytes
	var totalBytes = 0;
	for (var i = 0; i < dataBlocks.length; i++) {
		totalBytes += dataBlocks[i].getNumDataCodewords();
	}
	var resultBytes = new Array(totalBytes);
	var resultOffset = 0;

	// Error-correct and copy data blocks together into a stream of bytes
	for (var j = 0; j < dataBlocks.length; j++) {
		var dataBlock = dataBlocks[j];
		var codewordBytes = dataBlock.getCodewords();
		var numDataCodewords = dataBlock.getNumDataCodewords();
		jsqrcode.Decoder.correctErrors(codewordBytes, numDataCodewords);
		for (var i = 0; i < numDataCodewords; i++) {
			resultBytes[resultOffset++] = codewordBytes[i];
		}
	}

	// Decode the contents of that stream of bytes
	var reader = new jsqrcode.QRCodeDataBlockReader(resultBytes, version.getVersionNumber(), ecLevel.Bits);
	return reader;
};
