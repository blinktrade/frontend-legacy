goog.provide('jsqrcode.ReedSolomonDecoder');
goog.require('jsqrcode.GF256Poly');
goog.require('jsqrcode.GF256');

/**
 * @param {jsqrcode.GF256} field
 * @constructor
 */
jsqrcode.ReedSolomonDecoder = function (field) {
  this.field = field;
};

/**
 * @param {Array.<number>} received
 * @param {number} twoS
 */
jsqrcode.ReedSolomonDecoder.prototype.decode = function (received, twoS) {
  var poly = new jsqrcode.GF256Poly(this.field, received);
  var syndromeCoefficients = new Array(twoS);
  for (var i = 0; i < syndromeCoefficients.length; i++) {
    syndromeCoefficients[i] = 0;
  }
  var dataMatrix = false;//this.field.equals(jsqrcode.GF256.DATA_MATRIX_FIELD);
  var noError = true;
  for (var i = 0; i < twoS; i++) {
    // Thanks to sanfordsquires for this fix:
    var evl = poly.evaluateAt(this.field.exp(dataMatrix ? i + 1 : i));
    syndromeCoefficients[syndromeCoefficients.length - 1 - i] = evl;
    if (evl != 0) {
      noError = false;
    }
  }
  if (noError) {
    return;
  }
  var syndrome = new jsqrcode.GF256Poly(this.field, syndromeCoefficients);
  var sigmaOmega = this.runEuclideanAlgorithm(this.field.buildMonomial(twoS, 1), syndrome, twoS);
  var sigma = sigmaOmega[0];
  var omega = sigmaOmega[1];
  var errorLocations = this.findErrorLocations(sigma);
  var errorMagnitudes = this.findErrorMagnitudes(omega, errorLocations, dataMatrix);
  for (var i = 0; i < errorLocations.length; i++) {
    var position = received.length - 1 - this.field.log(errorLocations[i]);
    if (position < 0) {
      throw "ReedSolomonException Bad error location";
    }
    received[position] = jsqrcode.GF256.addOrSubtract(received[position], errorMagnitudes[i]);
  }
};

/**
 *
 * @param {jsqrcode.GF256Poly} a
 * @param {jsqrcode.GF256Poly} b
 * @param {number} R
 * @returns {Array}
 */
jsqrcode.ReedSolomonDecoder.prototype.runEuclideanAlgorithm = function (a, b, R) {
  // Assume a's degree is >= b's
  if (a.getDegree() < b.getDegree()) {
    var temp = a;
    a = b;
    b = temp;
  }

  var rLast = a;
  var r = b;
  var sLast = this.field.getOne();
  var s = this.field.getZero;
  var tLast = this.field.getZero();
  var t = this.field.getOne();

  // Run Euclidean algorithm until r's degree is less than R/2
  while (r.getDegree() >= Math.floor(R / 2)) {
    var rLastLast = rLast;
    var sLastLast = sLast;
    var tLastLast = tLast;
    rLast = r;
    sLast = s;
    tLast = t;

    // Divide rLastLast by rLast, with quotient in q and remainder in r
    if (rLast.getZero()) {
      // Oops, Euclidean algorithm already terminated?
      throw "r_{i-1} was zero";
    }
    r = rLastLast;
    var q = this.field.getZero();
    var denominatorLeadingTerm = rLast.getCoefficient(rLast.getDegree());
    var dltInverse = this.field.inverse(denominatorLeadingTerm);
    while (r.getDegree() >= rLast.getDegree() && !r.getZero()) {
      var degreeDiff = r.getDegree() - rLast.getDegree();
      var scale = this.field.multiply(r.getCoefficient(r.getDegree()), dltInverse);
      q = q.addOrSubtract(this.field.buildMonomial(degreeDiff, scale));
      r = r.addOrSubtract(rLast.multiplyByMonomial(degreeDiff, scale));
      //r.EXE();
    }

    s = q.multiply1(sLast).addOrSubtract(sLastLast);
    t = q.multiply1(tLast).addOrSubtract(tLastLast);
  }

  var sigmaTildeAtZero = t.getCoefficient(0);
  if (sigmaTildeAtZero == 0) {
    throw "ReedSolomonException sigmaTilde(0) was zero";
  }

  var inverse = this.field.inverse(sigmaTildeAtZero);
  var sigma = t.multiply2(inverse);
  var omega = r.multiply2(inverse);
  return new Array(sigma, omega);
};

jsqrcode.ReedSolomonDecoder.prototype.findErrorLocations = function (errorLocator) {
  // This is a direct application of Chien's search
  var numErrors = errorLocator.getDegree();
  if (numErrors == 1) {
    // shortcut
    return new Array(errorLocator.getCoefficient(1));
  }
  var result = new Array(numErrors);
  var e = 0;
  for (var i = 1; i < 256 && e < numErrors; i++) {
    if (errorLocator.evaluateAt(i) == 0) {
      result[e] = this.field.inverse(i);
      e++;
    }
  }
  if (e != numErrors) {
    throw "Error locator degree does not match number of roots";
  }
  return result;
};

jsqrcode.ReedSolomonDecoder.prototype.findErrorMagnitudes = function (errorEvaluator, errorLocations, dataMatrix) {
  // This is directly applying Forney's Formula
  var s = errorLocations.length;
  var result = new Array(s);
  for (var i = 0; i < s; i++) {
    var xiInverse = this.field.inverse(errorLocations[i]);
    var denominator = 1;
    for (var j = 0; j < s; j++) {
      if (i != j) {
        denominator = this.field.multiply(denominator,
          jsqrcode.GF256.addOrSubtract(1, this.field.multiply(errorLocations[j], xiInverse)));
      }
    }
    result[i] = this.field.multiply(errorEvaluator.evaluateAt(xiInverse), this.field.inverse(denominator));
    // Thanks to sanfordsquires for this fix:
    if (dataMatrix) {
      result[i] = this.field.multiply(result[i], xiInverse);
    }
  }
  return result;
};
