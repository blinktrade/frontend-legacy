goog.provide('jsqrcode.AlignmentPattern');


jsqrcode.AlignmentPattern = function (posX, posY, estimatedModuleSize) {
  this.x = posX;
  this.y = posY;
  this.count = 1;
  this.estimatedModuleSize = estimatedModuleSize;
};

jsqrcode.AlignmentPattern.prototype.getEstimatedModuleSize = function () {
  return this.estimatedModuleSize;
};


jsqrcode.AlignmentPattern.prototype.getCount = function () {
  return this.count;
};

jsqrcode.AlignmentPattern.prototype.getX = function () {
  return Math.floor(this.x);
};

jsqrcode.AlignmentPattern.prototype.getY =  function () {
  return Math.floor(this.y);
};

jsqrcode.AlignmentPattern.prototype.incrementCount = function () {
  this.count++;
};

jsqrcode.AlignmentPattern.prototype.aboutEquals = function (moduleSize, i, j) {
  if (Math.abs(i - this.y) <= moduleSize && Math.abs(j - this.x) <= moduleSize) {
    var moduleSizeDiff = Math.abs(moduleSize - this.estimatedModuleSize);
    return moduleSizeDiff <= 1.0 || moduleSizeDiff / this.estimatedModuleSize <= 1.0;
  }
  return false;
};
