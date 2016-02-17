goog.provide('jsqrcode.AlignmentPatternFinder');
goog.require('jsqrcode.AlignmentPattern');

/**
 * @param image
 * @param startX
 * @param startY
 * @param width
 * @param height
 * @param moduleSize
 * @param resultPointCallback
 * @param qrcode
 * @constructor
 */
jsqrcode.AlignmentPatternFinder = function(image, startX, startY, width, height, moduleSize, resultPointCallback, qrcode) {
  this.image = image;
  this.possibleCenters = [];
  this.startX = startX;
  this.startY = startY;
  this.width = width;
  this.height = height;
  this.moduleSize = moduleSize;
  this.crossCheckStateCount = [0, 0, 0];
  this.resultPointCallback = resultPointCallback;
  this.qrcode = qrcode;
};

jsqrcode.AlignmentPatternFinder.prototype.centerFromEnd = function (stateCount, end) {
  return (end - stateCount[2]) - stateCount[1] / 2.0;
};

jsqrcode.AlignmentPatternFinder.prototype.foundPatternCross = function (stateCount) {
  var moduleSize = this.moduleSize;
  var maxVariance = moduleSize / 2.0;
  for (var i = 0; i < 3; i++) {
    if (Math.abs(moduleSize - stateCount[i]) >= maxVariance) {
      return false;
    }
  }
  return true;
};

jsqrcode.AlignmentPatternFinder.prototype.crossCheckVertical = function (startI, centerJ, maxCount, originalStateCountTotal) {
  var image = this.image;
  var maxI = this.qrcode.height;
  var stateCount = this.crossCheckStateCount;
  stateCount[0] = 0;
  stateCount[1] = 0;
  stateCount[2] = 0;

  // Start counting up from center
  var i = startI;
  while (i >= 0 && image[centerJ + i * this.qrcode.width] && stateCount[1] <= maxCount) {
    stateCount[1]++;
    i--;
  }
  // If already too many modules in this state or ran off the edge:
  if (i < 0 || stateCount[1] > maxCount) {
    return NaN;
  }
  while (i >= 0 && !image[centerJ + i * this.qrcode.width] && stateCount[0] <= maxCount) {
    stateCount[0]++;
    i--;
  }
  if (stateCount[0] > maxCount) {
    return NaN;
  }

  // Now also count down from center
  i = startI + 1;
  while (i < maxI && image[centerJ + i * this.qrcode.width] && stateCount[1] <= maxCount) {
    stateCount[1]++;
    i++;
  }
  if (i == maxI || stateCount[1] > maxCount) {
    return NaN;
  }
  while (i < maxI && !image[centerJ + i * this.qrcode.width] && stateCount[2] <= maxCount) {
    stateCount[2]++;
    i++;
  }
  if (stateCount[2] > maxCount) {
    return NaN;
  }

  var stateCountTotal = stateCount[0] + stateCount[1] + stateCount[2];
  if (5 * Math.abs(stateCountTotal - originalStateCountTotal) >= 2 * originalStateCountTotal) {
    return NaN;
  }

  return this.foundPatternCross(stateCount) ? this.centerFromEnd(stateCount, i) : NaN;
};

jsqrcode.AlignmentPatternFinder.prototype.handlePossibleCenter = function (stateCount, i, j) {
  var stateCountTotal = stateCount[0] + stateCount[1] + stateCount[2];
  var centerJ = this.centerFromEnd(stateCount, j);
  var centerI = this.crossCheckVertical(i, Math.floor(centerJ), 2 * stateCount[1], stateCountTotal);
  if (!isNaN(centerI)) {
    var estimatedModuleSize = (stateCount[0] + stateCount[1] + stateCount[2]) / 3.0;
    var max = this.possibleCenters.length;
    for (var index = 0; index < max; index++) {
      var center = this.possibleCenters[index];
      // Look for about the same center and module size:
      if (center.aboutEquals(estimatedModuleSize, centerI, centerJ)) {
        return new jsqrcode.AlignmentPattern(centerJ, centerI, estimatedModuleSize);
      }
    }
    // Hadn't found this before; save it
    var point = new jsqrcode.AlignmentPattern(centerJ, centerI, estimatedModuleSize);
    this.possibleCenters.push(point);
    if (this.resultPointCallback != null) {
      this.resultPointCallback.foundPossibleResultPoint(point);
    }
  }
  return null;
};

jsqrcode.AlignmentPatternFinder.prototype.find = function () {
  var startX = this.startX;
  var height = this.height;
  var maxJ = startX + width;
  var middleI = startY + (height >> 1);
  // We are looking for black/white/black modules in 1:1:1 ratio;
  // this tracks the number of black/white/black modules seen so far
  var stateCount = [0, 0, 0];
  for (var iGen = 0; iGen < height; iGen++) {
    // Search from middle outwards
    var i = middleI + ((iGen & 0x01) == 0 ? ((iGen + 1) >> 1) : -((iGen + 1) >> 1));
    stateCount[0] = 0;
    stateCount[1] = 0;
    stateCount[2] = 0;
    var j = startX;
    // Burn off leading white pixels before anything else; if we start in the middle of
    // a white run, it doesn't make sense to count its length, since we don't know if the
    // white run continued to the left of the start point
    while (j < maxJ && !image[j + this.qrcode.width * i]) {
      j++;
    }
    var currentState = 0;
    while (j < maxJ) {
      if (image[j + i * this.qrcode.width]) {
        // Black pixel
        if (currentState == 1) {
          // Counting black pixels
          stateCount[currentState]++;
        }
        else {
          // Counting white pixels
          if (currentState == 2) {
            // A winner?
            if (this.foundPatternCross(stateCount)) {
              // Yes
              var confirmed = this.handlePossibleCenter(stateCount, i, j);
              if (confirmed != null) {
                return confirmed;
              }
            }
            stateCount[0] = stateCount[2];
            stateCount[1] = 1;
            stateCount[2] = 0;
            currentState = 1;
          }
          else {
            stateCount[++currentState]++;
          }
        }
      }
      else {
        // White pixel
        if (currentState == 1) {
          // Counting black pixels
          currentState++;
        }
        stateCount[currentState]++;
      }
      j++;
    }
    if (this.foundPatternCross(stateCount)) {
      var confirmed = this.handlePossibleCenter(stateCount, i, maxJ);
      if (confirmed != null) {
        return confirmed;
      }
    }
  }

  // Hmm, nothing we saw was observed and confirmed twice. If we had
  // any guess at all, return it.
  if (this.possibleCenters.length != 0) {
    return this.possibleCenters[0];
  }

  throw "Couldn't find enough alignment patterns";
};

