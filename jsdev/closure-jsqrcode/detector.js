goog.provide('jsqrcode.Detector');
goog.provide('jsqrcode.DetectorResult');

goog.require('jsqrcode.grid_sampler');
goog.require('jsqrcode.Version');
goog.require('jsqrcode.QRCode');
goog.require('jsqrcode.AlignmentPatternFinder');

/**
 * @param {number} bits
 * @param {number} points
 * @constructor
 */
jsqrcode.DetectorResult = function (bits, points) {
	this.bits = bits;
	this.points = points;
};

/**
 * @param {*} image
 * @param {jsqrcode.QRCode} qrcode
 * @constructor
 */
jsqrcode.Detector = function(image, qrcode) {
  this.image = image;
  this.resultPointCallback = null;
  this.qrcode = qrcode;
};


jsqrcode.Detector.prototype.sizeOfBlackWhiteBlackRun = function (fromX, fromY, toX, toY) {
  // Mild variant of Bresenham's algorithm;
  // see http://en.wikipedia.org/wiki/Bresenham's_line_algorithm
  var steep = Math.abs(toY - fromY) > Math.abs(toX - fromX);
  if (steep) {
    var temp = fromX;
    fromX = fromY;
    fromY = temp;
    temp = toX;
    toX = toY;
    toY = temp;
  }

  var dx = Math.abs(toX - fromX);
  var dy = Math.abs(toY - fromY);
  var error = -dx >> 1;
  var ystep = fromY < toY ? 1 : -1;
  var xstep = fromX < toX ? 1 : -1;
  var state = 0; // In black pixels, looking for white, first or second time
  for (var x = fromX, y = fromY; x != toX; x += xstep) {

    var realX = steep ? y : x;
    var realY = steep ? x : y;
    if (state == 1) {
      // In white pixels, looking for black
      if (this.image[realX + realY * this.qrcode.width]) {
        state++;
      }
    }
    else {
      if (!this.image[realX + realY * this.qrcode.width]) {
        state++;
      }
    }

    if (state == 3) {
      // Found black, white, black, and stumbled back onto white; done
      var diffX = x - fromX;
      var diffY = y - fromY;
      return Math.sqrt((diffX * diffX + diffY * diffY));
    }
    error += dy;
    if (error > 0) {
      if (y == toY) {
        break;
      }
      y += ystep;
      error -= dx;
    }
  }
  var diffX2 = toX - fromX;
  var diffY2 = toY - fromY;
  return Math.sqrt((diffX2 * diffX2 + diffY2 * diffY2));
};

jsqrcode.Detector.prototype.sizeOfBlackWhiteBlackRunBothWays = function (fromX, fromY, toX, toY) {
  var result = this.sizeOfBlackWhiteBlackRun(fromX, fromY, toX, toY);

  // Now count other way -- don't run off image though of course
  var scale = 1.0;
  var otherToX = fromX - (toX - fromX);
  if (otherToX < 0) {
    scale = fromX / (fromX - otherToX);
    otherToX = 0;
  }
  else if (otherToX >= this.qrcode.width) {
    scale = (this.qrcode.width - 1 - fromX) / (otherToX - fromX);
    otherToX = this.qrcode.width - 1;
  }
  var otherToY = Math.floor(fromY - (toY - fromY) * scale);

  scale = 1.0;
  if (otherToY < 0) {
    scale = fromY / (fromY - otherToY);
    otherToY = 0;
  }
  else if (otherToY >= jsqrcode.height) {
    scale = (jsqrcode.height - 1 - fromY) / (otherToY - fromY);
    otherToY = jsqrcode.height - 1;
  }
  otherToX = Math.floor(fromX + (otherToX - fromX) * scale);

  result += this.sizeOfBlackWhiteBlackRun(fromX, fromY, otherToX, otherToY);
  return result - 1.0; // -1 because we counted the middle pixel twice
};

jsqrcode.Detector.prototype.calculateModuleSizeOneWay = function (pattern, otherPattern) {
  var moduleSizeEst1 = this.sizeOfBlackWhiteBlackRunBothWays(Math.floor(pattern.getX()), Math.floor(pattern.getY()), Math.floor(otherPattern.getX()), Math.floor(otherPattern.getY()));
  var moduleSizeEst2 = this.sizeOfBlackWhiteBlackRunBothWays(Math.floor(otherPattern.getX()), Math.floor(otherPattern.getY()), Math.floor(pattern.getX()), Math.floor(pattern.getY()));
  if (isNaN(moduleSizeEst1)) {
    return moduleSizeEst2 / 7.0;
  }
  if (isNaN(moduleSizeEst2)) {
    return moduleSizeEst1 / 7.0;
  }
  // Average them, and divide by 7 since we've counted the width of 3 black modules,
  // and 1 white and 1 black module on either side. Ergo, divide sum by 14.
  return (moduleSizeEst1 + moduleSizeEst2) / 14.0;
};



jsqrcode.Detector.prototype.calculateModuleSize = function (topLeft, topRight, bottomLeft) {
  // Take the average
  return (this.calculateModuleSizeOneWay(topLeft, topRight) + this.calculateModuleSizeOneWay(topLeft, bottomLeft)) / 2.0;
};

jsqrcode.Detector.prototype.distance = function (pattern1, pattern2) {
  var xDiff = pattern1.getX() - pattern2.getX();
  var yDiff = pattern1.getY() - pattern2.getY();
  return Math.sqrt((xDiff * xDiff + yDiff * yDiff));
};

jsqrcode.Detector.prototype.computeDimension = function (topLeft, topRight, bottomLeft, moduleSize) {
  var tltrCentersDimension = Math.round(this.distance(topLeft, topRight) / moduleSize);
  var tlblCentersDimension = Math.round(this.distance(topLeft, bottomLeft) / moduleSize);
  var dimension = ((tltrCentersDimension + tlblCentersDimension) >> 1) + 7;

  switch (dimension & 0x03) {
    // mod 4
    case 0:
      dimension++;
      break;
      // 1? do nothing
    case 2:
      dimension--;
      break;
    case 3:
      throw "Error";
  }

  return dimension;
};

jsqrcode.Detector.prototype.findAlignmentInRegion = function (overallEstModuleSize, estAlignmentX, estAlignmentY, allowanceFactor) {
  // Look for an alignment pattern (3 modules in size) around where it
  // should be
  var allowance = Math.floor(allowanceFactor * overallEstModuleSize);
  var alignmentAreaLeftX = Math.max(0, estAlignmentX - allowance);
  var alignmentAreaRightX = Math.min(this.qrcode.width - 1, estAlignmentX + allowance);
  if (alignmentAreaRightX - alignmentAreaLeftX < overallEstModuleSize * 3) {
    throw "Error";
  }

  var alignmentAreaTopY = Math.max(0, estAlignmentY - allowance);
  var alignmentAreaBottomY = Math.min(this.qrcode.height - 1, estAlignmentY + allowance);

  var alignmentFinder = new jsqrcode.AlignmentPatternFinder(this.image,
      alignmentAreaLeftX,
      alignmentAreaTopY,
      alignmentAreaRightX - alignmentAreaLeftX,
      alignmentAreaBottomY - alignmentAreaTopY,
      overallEstModuleSize,
      this.resultPointCallback,
      this.qrcode);
  return alignmentFinder.find();
};

jsqrcode.Detector.prototype.createTransform = function (topLeft, topRight, bottomLeft, alignmentPattern, dimension) {
  var dimMinusThree = dimension - 3.5;
  var bottomRightX;
  var bottomRightY;
  var sourceBottomRightX;
  var sourceBottomRightY;
  if (alignmentPattern != null) {
    bottomRightX = alignmentPattern.getX();
    bottomRightY = alignmentPattern.getY();
    sourceBottomRightX = sourceBottomRightY = dimMinusThree - 3.0;
  }
  else {
    // Don't have an alignment pattern, just make up the bottom-right point
    bottomRightX = (topRight.getX() - topLeft.getX()) + bottomLeft.getX();
    bottomRightY = (topRight.getY() - topLeft.getY()) + bottomLeft.getY();
    sourceBottomRightX = sourceBottomRightY = dimMinusThree;
  }

  var transform = jsqrcode.PerspectiveTransform.utils.quadrilateralToQuadrilateral(
      3.5,
      3.5,
      dimMinusThree,
      3.5,
      sourceBottomRightX,
      sourceBottomRightY,
      3.5,
      dimMinusThree,
      topLeft.getX(),
      topLeft.getY(),
      topRight.getX(),
      topRight.getY(),
      bottomRightX,
      bottomRightY,
      bottomLeft.getX(),
      bottomLeft.getY());

  return transform;
};

jsqrcode.Detector.prototype.sampleGrid = function (image, transform, dimension) {
  return jsqrcode.grid_sampler.sampleGrid3(image, dimension, transform, this.qrcode);
};

jsqrcode.Detector.prototype.processFinderPatternInfo = function (info) {
  var topLeft = info.getTopLeft();
  var topRight = info.getTopRight();
  var bottomLeft = info.getBottomLeft();

  var moduleSize = this.calculateModuleSize(topLeft, topRight, bottomLeft);
  if (moduleSize < 1.0) {
    throw "Error";
  }
  var dimension = this.computeDimension(topLeft, topRight, bottomLeft, moduleSize);
  var provisionalVersion = jsqrcode.Version.getProvisionalVersionForDimension(dimension);
  var modulesBetweenFPCenters = provisionalVersion.getDimensionForVersion() - 7;

  var alignmentPattern = null;
  // Anything above version 1 has an alignment pattern
  if (provisionalVersion.getAlignmentPatternCenters().length > 0) {

    // Guess where a "bottom right" finder pattern would have been
    var bottomRightX = topRight.getX() - topLeft.getX() + bottomLeft.getX();
    var bottomRightY = topRight.getY() - topLeft.getY() + bottomLeft.getY();

    // Estimate that alignment pattern is closer by 3 modules
    // from "bottom right" to known top left location
    var correctionToTopLeft = 1.0 - 3.0 / modulesBetweenFPCenters;
    var estAlignmentX = Math.floor(topLeft.getX() + correctionToTopLeft * (bottomRightX - topLeft.getX()));
    var estAlignmentY = Math.floor(topLeft.getY() + correctionToTopLeft * (bottomRightY - topLeft.getY()));

    // Kind of arbitrary -- expand search radius before giving up
    for (var i = 4; i <= 16; i <<= 1) {
      alignmentPattern = this.findAlignmentInRegion(moduleSize, estAlignmentX, estAlignmentY, i);
      break;
    }
    // If we didn't find alignment pattern... well try anyway without it
  }

  var transform = this.createTransform(topLeft, topRight, bottomLeft, alignmentPattern, dimension);
  var bits = this.sampleGrid(this.image, transform, dimension);
  var points;

  if (alignmentPattern == null) {
    points = [bottomLeft, topLeft, topRight];
  } else {
    points = [bottomLeft, topLeft, topRight, alignmentPattern];
  }

  return new jsqrcode.DetectorResult(bits, points);
};


jsqrcode.Detector.prototype.detect = function () {
  var info = new jsqrcode.FinderPatternFinder(this.qrcode).findFinderPattern(this.image);
  return this.processFinderPatternInfo(info);
};

