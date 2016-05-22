goog.provide('jsqrcode.QRCodeDataBlockReader');

/**
 *
 * @param {Array.<number>} blocks
 * @param {number} version
 * @param {number} numErrorCorrectionCode
 * @constructor
 */
jsqrcode.QRCodeDataBlockReader = function(blocks, version, numErrorCorrectionCode) {
  this.blockPointer = 0;
  this.bitPointer = 7;
  this.dataLength = 0;
  this.blocks = blocks;
  this.numErrorCorrectionCode = numErrorCorrectionCode;
  if (version <= 9){
    this.dataLengthMode = 0;
  } else if (version >= 10 && version <= 26){
    this.dataLengthMode = 1;
  } else if (version >= 27 && version <= 40){
    this.dataLengthMode = 2;
  }
};


jsqrcode.QRCodeDataBlockReader.prototype.getNextBits = function (numBits) {
  var bits = 0, mask1;
  if (numBits < this.bitPointer + 1) {
    // next word fits into current data block
    var mask = 0;
    for (var i = 0; i < numBits; i++) {
      mask += (1 << i);
    }
    mask <<= (this.bitPointer - numBits + 1);

    bits = (this.blocks[this.blockPointer] & mask) >> (this.bitPointer - numBits + 1);
    this.bitPointer -= numBits;
    return bits;
  } else if (numBits < this.bitPointer + 1 + 8) {
    // next word crosses 2 data blocks
    mask1 = 0;
    for (var i = 0; i < this.bitPointer + 1; i++) {
      mask1 += (1 << i);
    }
    bits = (this.blocks[this.blockPointer] & mask1) << (numBits - (this.bitPointer + 1));
    this.blockPointer++;
    bits += ((this.blocks[this.blockPointer]) >> (8 - (numBits - (this.bitPointer + 1))));

    this.bitPointer = this.bitPointer - numBits % 8;
    if (this.bitPointer < 0) {
      this.bitPointer = 8 + this.bitPointer;
    }
    return bits;
  } else if (numBits < this.bitPointer + 1 + 16) {
    // next word crosses 3 data blocks
    mask1 = 0; // mask of first block
    var mask3 = 0; // mask of 3rd block
    //bitPointer + 1 : number of bits of the 1st block
    //8 : number of the 2nd block (note that use already 8bits because next word uses 3 data blocks)
    //numBits - (bitPointer + 1 + 8) : number of bits of the 3rd block
    for (var i = 0; i < this.bitPointer + 1; i++) {
      mask1 += (1 << i);
    }
    var bitsFirstBlock = (this.blocks[this.blockPointer] & mask1) << (numBits - (this.bitPointer + 1));
    this.blockPointer++;

    var bitsSecondBlock = this.blocks[this.blockPointer] << (numBits - (this.bitPointer + 1 + 8));
    this.blockPointer++;

    for (var i = 0; i < numBits - (this.bitPointer + 1 + 8) ; i++) {
      mask3 += (1 << i);
    }
    mask3 <<= 8 - (numBits - (this.bitPointer + 1 + 8));
    var bitsThirdBlock = (this.blocks[this.blockPointer] & mask3) >> (8 - (numBits - (this.bitPointer + 1 + 8)));

    bits = bitsFirstBlock + bitsSecondBlock + bitsThirdBlock;
    this.bitPointer = this.bitPointer - (numBits - 8) % 8;
    if (this.bitPointer < 0) {
      this.bitPointer = 8 + this.bitPointer;
    }
    return bits;
  } else {
    return 0;
  }
};

jsqrcode.QRCodeDataBlockReader.prototype.NextMode = function () {
  if ((this.blockPointer > this.blocks.length - this.numErrorCorrectionCode - 2))
    return 0;
  else
    return this.getNextBits(4);
};

jsqrcode.QRCodeDataBlockReader.prototype.getDataLength = function (modeIndicator) {
  var index = 0;

  while ((modeIndicator >> index) != 1) {
    index++;
  }

  return this.getNextBits(jsqrcode.QRCode.sizeOfDataLengthInfo[this.dataLengthMode][index]);
};

jsqrcode.QRCodeDataBlockReader.prototype.getRomanAndFigureString = function (dataLength) {
  var length = dataLength;
  var intData = 0;
  var strData = "";
  var tableRomanAndFigure = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:'.split('');
  do {
    if (length > 1) {
      intData = this.getNextBits(11);
      var firstLetter = Math.floor(intData / 45);
      var secondLetter = intData % 45;
      strData += tableRomanAndFigure[firstLetter];
      strData += tableRomanAndFigure[secondLetter];
      length -= 2;
    } else if (length == 1) {
      intData = this.getNextBits(6);
      strData += tableRomanAndFigure[intData];
      length -= 1;
    }
  } while (length > 0);

  return strData;
};

jsqrcode.QRCodeDataBlockReader.prototype.getFigureString = function (dataLength) {
  var length = dataLength;
  var intData = 0;
  var strData = "";
  do {
    if (length >= 3) {
      intData = this.getNextBits(10);
      if (intData < 100)
        strData += "0";
      if (intData < 10)
        strData += "0";
      length -= 3;
    } else if (length == 2) {
      intData = this.getNextBits(7);
      if (intData < 10)
        strData += "0";
      length -= 2;
    } else if (length == 1) {
      intData = this.getNextBits(4);
      length -= 1;
    }
    strData += intData;
  }
  while (length > 0);

  return strData;
};

jsqrcode.QRCodeDataBlockReader.prototype.get8bitByteArray = function (dataLength) {
  var length = dataLength;
  var intData = 0;
  var output = [];

  do {
    intData = this.getNextBits(8);
    output.push(intData);
    length--;
  } while (length > 0);

  return output;
};

jsqrcode.QRCodeDataBlockReader.prototype.getKanjiString = function (dataLength) {
  var length = dataLength;
  var intData = 0;
  var unicodeString = "";

  do {
    intData = getNextBits(13);
    var lowerByte = intData % 0xC0;
    var higherByte = intData / 0xC0;

    var tempWord = (higherByte << 8) + lowerByte;
    var shiftjisWord = 0;
    if (tempWord + 0x8140 <= 0x9FFC) {
      // between 8140 - 9FFC on Shift_JIS character set
      shiftjisWord = tempWord + 0x8140;
    } else {
      // between E040 - EBBF on Shift_JIS character set
      shiftjisWord = tempWord + 0xC140;
    }

    unicodeString += String.fromCharCode(shiftjisWord);
    length--;
  } while (length > 0);

  return unicodeString;
};

jsqrcode.QRCodeDataBlockReader.prototype.DataByte = function () {
  var output = [];
  var MODE_NUMBER = 1;
  var MODE_ROMAN_AND_NUMBER = 2;
  var MODE_8BIT_BYTE = 4;
  var MODE_KANJI = 8;
  do {
    var mode = this.NextMode();
    //canvas.println("mode: " + mode);
    if (mode == 0) {
      if (output.length > 0)
        break;
      else
        throw "Empty data block";
    }
    if (mode != MODE_NUMBER && mode != MODE_ROMAN_AND_NUMBER && mode != MODE_8BIT_BYTE && mode != MODE_KANJI) {
      /*
      canvas.println("Invalid mode: " + mode);
      mode = guessMode(mode);
      canvas.println("Guessed mode: " + mode);
      */
      throw "Invalid mode: " + mode + " in (block:" + this.blockPointer + " bit:" + this.bitPointer + ")";
    }
    var dataLength = this.getDataLength(mode);
    if (dataLength < 1){
      throw "Invalid data length: " + dataLength;
    }
    //canvas.println("length: " + dataLength);
    var temp_str, ta, j;

    switch (mode) {

      case MODE_NUMBER:
        //canvas.println("Mode: Figure");
        temp_str = this.getFigureString(dataLength);
        ta = new Array(temp_str.length);
        for (j = 0; j < temp_str.length; j++)
          ta[j] = temp_str.charCodeAt(j);
        output.push(ta);
        break;

      case MODE_ROMAN_AND_NUMBER:
        //canvas.println("Mode: Roman&Figure");
        temp_str = this.getRomanAndFigureString(dataLength);
        ta = new Array(temp_str.length);
        for (j = 0; j < temp_str.length; j++)
          ta[j] = temp_str.charCodeAt(j);
        output.push(ta);
        break;

      case MODE_8BIT_BYTE:
        //canvas.println("Mode: 8bit Byte");
        var temp_sbyteArray3 = this.get8bitByteArray(dataLength);
        output.push(temp_sbyteArray3);
        break;

      case MODE_KANJI:
        //canvas.println("Mode: Kanji");
        temp_str = this.getKanjiString(dataLength);
        output.push(temp_str);
        break;
    }
    //
    //canvas.println("DataLength: " + dataLength);
    //Console.out.println(dataString);
  } while (true);

  return output;
};
