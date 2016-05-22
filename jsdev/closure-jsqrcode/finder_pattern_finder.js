goog.provide('jsqrcode.FinderPatternInfo');
goog.provide('jsqrcode.FinderPatternFinder');
goog.require('jsqrcode.QRCode');


/**
 * @param {*} patternCenters
 * @constructor
 */
jsqrcode.FinderPatternInfo = function (patternCenters) {
	this.bottomLeft = patternCenters[0];
	this.topLeft = patternCenters[1];
	this.topRight = patternCenters[2];
};

jsqrcode.FinderPatternInfo.prototype.getBottomLeft = function () {
  return this.bottomLeft;
};

jsqrcode.FinderPatternInfo.prototype.getTopLeft = function () {
  return this.topLeft;
};

jsqrcode.FinderPatternInfo.prototype.getTopRight = function () {
  return this.topRight;
};


/**
 * @param {jsqrcode.QRCode} qrcode
 * @constructor
 */
jsqrcode.FinderPatternFinder = function (qrcode) {
  this.image = null;
  this.possibleCenters = [];
  this.hasSkipped = false;
  this.crossCheckStateCount = [0, 0, 0, 0, 0];
  this.resultPointCallback = null;
  this.qrcode = qrcode;
};

/**
 * @type {number}
 */
jsqrcode.FinderPatternFinder.CENTER_QUORUM = 2;

/**
 * @type {number}
 */
jsqrcode.FinderPatternFinder.MAX_MODULES = 57;

/**
 * @type {number}
 */
jsqrcode.FinderPatternFinder.MIN_SKIP = 3;

/**
 * @type {number}
 */
jsqrcode.FinderPatternFinder.INTEGER_MATH_SHIFT = 3;

/**
 * @returns {Array.<number>}
 */
jsqrcode.FinderPatternFinder.prototype.getCrossCheckStateCount = function () {
  this.crossCheckStateCount[0] = 0;
  this.crossCheckStateCount[1] = 0;
  this.crossCheckStateCount[2] = 0;
  this.crossCheckStateCount[3] = 0;
  this.crossCheckStateCount[4] = 0;
  return this.crossCheckStateCount;
};


jsqrcode.FinderPatternFinder.prototype.foundPatternCross = function (stateCount) {
  var totalModuleSize = 0;
  for (var i = 0; i < 5; i++) {
    var count = stateCount[i];
    if (count == 0) {
      return false;
    }
    totalModuleSize += count;
  }
  if (totalModuleSize < 7) {
    return false;
  }

  var moduleSize = Math.floor((totalModuleSize << jsqrcode.FinderPatternFinder.INTEGER_MATH_SHIFT) / 7);
  var maxVariance = Math.floor(moduleSize / 2);
  // Allow less than 50% variance from 1-1-3-1-1 proportions
  return Math.abs(moduleSize - (stateCount[0] << jsqrcode.FinderPatternFinder.INTEGER_MATH_SHIFT)) < maxVariance && Math.abs(moduleSize - (stateCount[1] << jsqrcode.FinderPatternFinder.INTEGER_MATH_SHIFT)) < maxVariance && Math.abs(3 * moduleSize - (stateCount[2] << jsqrcode.FinderPatternFinder.INTEGER_MATH_SHIFT)) < 3 * maxVariance && Math.abs(moduleSize - (stateCount[3] << jsqrcode.FinderPatternFinder.INTEGER_MATH_SHIFT)) < maxVariance && Math.abs(moduleSize - (stateCount[4] << jsqrcode.FinderPatternFinder.INTEGER_MATH_SHIFT)) < maxVariance;
};

jsqrcode.FinderPatternFinder.prototype.centerFromEnd = function (stateCount, end) {
  return (end - stateCount[4] - stateCount[3]) - stateCount[2] / 2.0;
};

jsqrcode.FinderPatternFinder.prototype.crossCheckVertical = function (startI, centerJ, maxCount, originalStateCountTotal) {
  var image = this.image;

  var maxI = this.qrcode.height;
  var stateCount = this.getCrossCheckStateCount();

  // Start counting up from center
  var i = startI;
  while (i >= 0 && image[centerJ + i * this.qrcode.width]) {
    stateCount[2]++;
    i--;
  }
  if (i < 0) {
    return NaN;
  }
  while (i >= 0 && !image[centerJ + i * this.qrcode.width] && stateCount[1] <= maxCount) {
    stateCount[1]++;
    i--;
  }
  // If already too many modules in this state or ran off the edge:
  if (i < 0 || stateCount[1] > maxCount) {
    return NaN;
  }
  while (i >= 0 && image[centerJ + i * this.qrcode.width] && stateCount[0] <= maxCount) {
    stateCount[0]++;
    i--;
  }
  if (stateCount[0] > maxCount) {
    return NaN;
  }

  // Now also count down from center
  i = startI + 1;
  while (i < maxI && image[centerJ + i * this.qrcode.width]) {
    stateCount[2]++;
    i++;
  }
  if (i == maxI) {
    return NaN;
  }
  while (i < maxI && !image[centerJ + i * this.qrcode.width] && stateCount[3] < maxCount) {
    stateCount[3]++;
    i++;
  }
  if (i == maxI || stateCount[3] >= maxCount) {
    return NaN;
  }
  while (i < maxI && image[centerJ + i * this.qrcode.width] && stateCount[4] < maxCount) {
    stateCount[4]++;
    i++;
  }
  if (stateCount[4] >= maxCount) {
    return NaN;
  }

  // If we found a finder-pattern-like section, but its size is more than 40% different than
  // the original, assume it's a false positive
  var stateCountTotal = stateCount[0] + stateCount[1] + stateCount[2] + stateCount[3] + stateCount[4];
  if (5 * Math.abs(stateCountTotal - originalStateCountTotal) >= 2 * originalStateCountTotal) {
    return NaN;
  }

  return this.foundPatternCross(stateCount) ? this.centerFromEnd(stateCount, i) : NaN;
};

jsqrcode.FinderPatternFinder.prototype.crossCheckHorizontal = function (startJ, centerI, maxCount, originalStateCountTotal) {
  var image = this.image;

  var maxJ = this.qrcode.width;
  var stateCount = this.getCrossCheckStateCount();

  var j = startJ;
  while (j >= 0 && image[j + centerI * this.qrcode.width]) {
    stateCount[2]++;
    j--;
  }
  if (j < 0) {
    return NaN;
  }
  while (j >= 0 && !image[j + centerI * this.qrcode.width] && stateCount[1] <= maxCount) {
    stateCount[1]++;
    j--;
  }
  if (j < 0 || stateCount[1] > maxCount) {
    return NaN;
  }
  while (j >= 0 && image[j + centerI * this.qrcode.width] && stateCount[0] <= maxCount) {
    stateCount[0]++;
    j--;
  }
  if (stateCount[0] > maxCount) {
    return NaN;
  }

  j = startJ + 1;
  while (j < maxJ && image[j + centerI * this.qrcode.width]) {
    stateCount[2]++;
    j++;
  }
  if (j == maxJ) {
    return NaN;
  }
  while (j < maxJ && !image[j + centerI * this.qrcode.width] && stateCount[3] < maxCount) {
    stateCount[3]++;
    j++;
  }
  if (j == maxJ || stateCount[3] >= maxCount) {
    return NaN;
  }
  while (j < maxJ && image[j + centerI * this.qrcode.width] && stateCount[4] < maxCount) {
    stateCount[4]++;
    j++;
  }
  if (stateCount[4] >= maxCount) {
    return NaN;
  }

  // If we found a finder-pattern-like section, but its size is significantly different than
  // the original, assume it's a false positive
  var stateCountTotal = stateCount[0] + stateCount[1] + stateCount[2] + stateCount[3] + stateCount[4];
  if (5 * Math.abs(stateCountTotal - originalStateCountTotal) >= originalStateCountTotal) {
    return NaN;
  }

  return this.foundPatternCross(stateCount) ? this.centerFromEnd(stateCount, j) : NaN;
};

jsqrcode.FinderPatternFinder.prototype.handlePossibleCenter = function (stateCount, i, j) {
  var stateCountTotal = stateCount[0] + stateCount[1] + stateCount[2] + stateCount[3] + stateCount[4];
  var centerJ = this.centerFromEnd(stateCount, j); //float
  var centerI = this.crossCheckVertical(i, Math.floor(centerJ), stateCount[2], stateCountTotal); //float
  if (!isNaN(centerI)) {
    // Re-cross check
    centerJ = this.crossCheckHorizontal(Math.floor(centerJ), Math.floor(centerI), stateCount[2], stateCountTotal);
    if (!isNaN(centerJ)) {
      var estimatedModuleSize = stateCountTotal / 7.0;
      var found = false;
      var max = this.possibleCenters.length;
      for (var index = 0; index < max; index++) {
        var center = this.possibleCenters[index];
        // Look for about the same center and module size:
        if (center.aboutEquals(estimatedModuleSize, centerI, centerJ)) {
          center.incrementCount();
          found = true;
          break;
        }
      }
      if (!found) {
        var point = new jsqrcode.FinderPattern(centerJ, centerI, estimatedModuleSize);
        this.possibleCenters.push(point);
        if (this.resultPointCallback != null) {
          this.resultPointCallback.foundPossibleResultPoint(point);
        }
      }
      return true;
    }
  }
  return false;
};

jsqrcode.FinderPatternFinder.prototype.selectBestPatterns = function () {

  var startSize = this.possibleCenters.length;
  if (startSize < 3) {
    // Couldn't find enough finder patterns
    throw "Couldn't find enough finder patterns";
  }

  // Filter outlier possibilities whose module size is too different
  if (startSize > 3) {
    // But we can only afford to do so if we have at least 4 possibilities to choose from
    var totalModuleSize = 0.0;
    var square = 0.0;
    for (var i = 0; i < startSize; i++) {
      //totalModuleSize +=  this.possibleCenters[i].getEstimatedModuleSize();
      var centerValue = this.possibleCenters[i].getEstimatedModuleSize();
      totalModuleSize += centerValue;
      square += (centerValue * centerValue);
    }
    var average = totalModuleSize / startSize;
    this.possibleCenters.sort(function (center1, center2) {
      var dA = Math.abs(center2.getEstimatedModuleSize() - average);
      var dB = Math.abs(center1.getEstimatedModuleSize() - average);
      if (dA < dB) {
        return (-1);
      } else if (dA == dB) {
        return 0;
      } else {
        return 1;
      }
    });

    var stdDev = Math.sqrt(square / startSize - average * average);
    var limit = Math.max(0.2 * average, stdDev);
    for (var i = 0; i < this.possibleCenters.length && this.possibleCenters.length > 3; i++) {
      var pattern = this.possibleCenters[i];
      if (Math.abs(pattern.getEstimatedModuleSize() - average) > limit) {
        this.possibleCenters.splice(i, 1);
        i--;
      }
    }
  }

  if (this.possibleCenters.length > 3) {
    // Throw away all but those first size candidate points we found.
    this.possibleCenters.sort(function (a, b) {
      if (a.count > b.count) { return -1; }
      if (a.count < b.count) { return 1; }
      return 0;
    });
  }

  return [this.possibleCenters[0], this.possibleCenters[1], this.possibleCenters[2]];
};

jsqrcode.FinderPatternFinder.prototype.findRowSkip = function () {
  var max = this.possibleCenters.length;
  if (max <= 1) {
    return 0;
  }
  var firstConfirmedCenter = null;
  for (var i = 0; i < max; i++) {
    var center = this.possibleCenters[i];
    if (center.Count >= jsqrcode.FinderPatternFinder.CENTER_QUORUM) {
      if (firstConfirmedCenter == null) {
        firstConfirmedCenter = center;
      }
      else {
        // We have two confirmed centers
        // How far down can we skip before resuming looking for the next
        // pattern? In the worst case, only the difference between the
        // difference in the x / y coordinates of the two centers.
        // This is the case where you find top left last.
        this.hasSkipped = true;
        return Math.floor((Math.abs(firstConfirmedCenter.getX() - center.getX()) - Math.abs(firstConfirmedCenter.getY() - center.getY())) / 2);
      }
    }
  }
  return 0;
};


jsqrcode.FinderPatternFinder.prototype.haveMultiplyConfirmedCenters = function () {
  var confirmedCount = 0;
  var totalModuleSize = 0.0;
  var max = this.possibleCenters.length;
  var pattern;
  for (var i = 0; i < max; i++) {
    pattern = this.possibleCenters[i];
    if (pattern.getCount() >= jsqrcode.FinderPatternFinder.CENTER_QUORUM) {
      confirmedCount++;
      totalModuleSize += pattern.getEstimatedModuleSize();
    }
  }
  if (confirmedCount < 3) {
    return false;
  }
  // OK, we have at least 3 confirmed centers, but, it's possible that one is a "false positive"
  // and that we need to keep looking. We detect this by asking if the estimated module sizes
  // vary too much. We arbitrarily say that when the total deviation from average exceeds
  // 5% of the total module size estimates, it's too much.
  var average = totalModuleSize / max;
  var totalDeviation = 0.0;
  for (var i = 0; i < max; i++) {
    pattern = this.possibleCenters[i];
    totalDeviation += Math.abs(pattern.getEstimatedModuleSize() - average);
  }
  return totalDeviation <= 0.05 * totalModuleSize;
};

jsqrcode.FinderPatternFinder.prototype.findFinderPattern = function (image) {
  var tryHarder = false;
  this.image = image;
  var maxI = this.qrcode.height;
  var maxJ = this.qrcode.width;

  var iSkip = Math.floor((3 * maxI) / (4 * jsqrcode.FinderPatternFinder.MAX_MODULES));
  if (iSkip < jsqrcode.FinderPatternFinder.MIN_SKIP || tryHarder) {
    iSkip = jsqrcode.FinderPatternFinder.MIN_SKIP;
  }

  var done = false;
  var stateCount = new Array(5);
  for (var i = iSkip - 1; i < maxI && !done; i += iSkip) {
    // Get a row of black/white values
    stateCount[0] = 0;
    stateCount[1] = 0;
    stateCount[2] = 0;
    stateCount[3] = 0;
    stateCount[4] = 0;
    var currentState = 0;
    for (var j = 0; j < maxJ; j++) {
      if (image[j + i * this.qrcode.width]) {
        // Black pixel
        if ((currentState & 1) == 1) {
          // Counting white pixels
          currentState++;
        }
        stateCount[currentState]++;
      }
      else {
        // White pixel
        if ((currentState & 1) == 0) {
          // Counting black pixels
          if (currentState == 4) {
            // A winner?
            if (this.foundPatternCross(stateCount)) {
              // Yes
              var confirmed = this.handlePossibleCenter(stateCount, i, j);
              if (confirmed) {
                // Start examining every other line. Checking each line turned out to be too
                // expensive and didn't improve performance.
                iSkip = 2;
                if (this.hasSkipped) {
                  done = this.haveMultiplyConfirmedCenters();
                }
                else {
                  var rowSkip = this.findRowSkip();
                  if (rowSkip > stateCount[2]) {
                    // Skip rows between row of lower confirmed center
                    // and top of presumed third confirmed center
                    // but back up a bit to get a full chance of detecting
                    // it, entire width of center of finder pattern

                    // Skip by rowSkip, but back off by stateCount[2] (size of last center
                    // of pattern we saw) to be conservative, and also back off by iSkip which
                    // is about to be re-added
                    i += rowSkip - stateCount[2] - iSkip;
                    j = maxJ - 1;
                  }
                }
              }
              else {
                // Advance to next black pixel
                do {
                  j++;
                }
                while (j < maxJ && !image[j + i * this.qrcode.width]);
                j--; // back up to that last white pixel
              }
              // Clear state to start looking again
              currentState = 0;
              stateCount[0] = 0;
              stateCount[1] = 0;
              stateCount[2] = 0;
              stateCount[3] = 0;
              stateCount[4] = 0;
            }
            else {
              // No, shift counts back by two
              stateCount[0] = stateCount[2];
              stateCount[1] = stateCount[3];
              stateCount[2] = stateCount[4];
              stateCount[3] = 1;
              stateCount[4] = 0;
              currentState = 3;
            }
          }
          else {
            stateCount[++currentState]++;
          }
        }
        else {
          // Counting white pixels
          stateCount[currentState]++;
        }
      }
    }
    if (this.foundPatternCross(stateCount)) {
      var confirmed = this.handlePossibleCenter(stateCount, i, maxJ);
      if (confirmed) {
        iSkip = stateCount[0];
        if (this.hasSkipped) {
          // Found a third one
          done = this.haveMultiplyConfirmedCenters();
        }
      }
    }
  }

  var patternInfo = this.selectBestPatterns();
  jsqrcode.orderBestPatterns(patternInfo);

  return new jsqrcode.FinderPatternInfo(patternInfo);
};
