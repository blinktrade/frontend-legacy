goog.provide('jsqrcode.AlignmentPattern');


jsqrcode.FinderPattern = function(posX, posY, estimatedModuleSize) {
  this.x = posX;
  this.y = posY;
  this.count = 1;
  this.estimatedModuleSize = estimatedModuleSize;
};

jsqrcode.FinderPattern.prototype.getEstimatedModuleSize = function () {
  return this.estimatedModuleSize;
};

jsqrcode.FinderPattern.prototype.getCount = function () {
  return this.count;
};

jsqrcode.FinderPattern.prototype.getX = function () {
  return this.x;
};

jsqrcode.FinderPattern.prototype.getY = function () {
  return this.y;
};

jsqrcode.FinderPattern.prototype.incrementCount = function () {
  this.count++;
};

jsqrcode.FinderPattern.prototype.aboutEquals = function (moduleSize, i, j) {
  if (Math.abs(i - this.y) <= moduleSize && Math.abs(j - this.x) <= moduleSize) {
    var moduleSizeDiff = Math.abs(moduleSize - this.estimatedModuleSize);
    return moduleSizeDiff <= 1.0 || moduleSizeDiff / this.estimatedModuleSize <= 1.0;
  }
  return false;
};
