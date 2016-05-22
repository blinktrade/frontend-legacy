goog.provide('jsqrcode.BitMatrix');

/**
 * @param {number} width
 * @param {number=} opt_height
 * @constructor
 */
jsqrcode.BitMatrix = function(width, opt_height) {
  var height = opt_height || width;

  if (width < 1 || height < 1) {
    throw "Both dimensions must be greater than 0";
  }

  this.width = width;
  this.height = height;
  var rowSize = width >> 5;
  if ((width & 0x1f) != 0) {
    rowSize++;
  }
  this.rowSize = rowSize;
  this.bits = new Array(rowSize * height);
  for (var i = 0; i < this.bits.length; i++)
    this.bits[i] = 0;
};

jsqrcode.BitMatrix.prototype.getWidth = function () {
  return this.width;
};

jsqrcode.BitMatrix.prototype.getHeight = function () {
  return this.height;
};


jsqrcode.BitMatrix.prototype.getDimension = function () {
  if (this.getWidth() != this.getHeight()) {
    throw "Can't call getDimension() on a non-square matrix";
  }
  return this.width;
};


jsqrcode.BitMatrix.prototype.get_Renamed = function (x, y) {
  var offset = y * this.rowSize + (x >> 5);
  return ((jsqrcode.utils.URShift(this.bits[offset], (x & 0x1f))) & 1) != 0;
};

jsqrcode.BitMatrix.prototype.set_Renamed = function (x, y) {
  var offset = y * this.rowSize + (x >> 5);
  this.bits[offset] |= 1 << (x & 0x1f);
};


jsqrcode.BitMatrix.prototype.flip = function (x, y) {
  var offset = y * this.rowSize + (x >> 5);
  this.bits[offset] ^= 1 << (x & 0x1f);
};

jsqrcode.BitMatrix.prototype.clear = function () {
  var max = this.bits.length;
  for (var i = 0; i < max; i++) {
    this.bits[i] = 0;
  }
};

jsqrcode.BitMatrix.prototype.setRegion = function (left, top, width, height) {
  if (top < 0 || left < 0) {
    throw "Left and top must be nonnegative";
  }
  if (height < 1 || width < 1) {
    throw "Height and width must be at least 1";
  }
  var right = left + width;
  var bottom = top + height;
  if (bottom > this.getHeight() || right > this.getWidth()){
    throw "The region must fit inside the matrix";
  }
  for (var y = top; y < bottom; y++) {
    var offset = y * this.rowSize;
    for (var x = left; x < right; x++) {
      this.bits[offset + (x >> 5)] |= 1 << (x & 0x1f);
    }
  }
};
