goog.provide('jsqrcode.GF256Poly');
goog.require('jsqrcode.GF256');

/**
 * @param {jsqrcode.GF256} field
 * @param {Array.<number>} coefficients
 * @constructor
 */
jsqrcode.GF256Poly = function(field, coefficients) {
	if (coefficients == null || coefficients.length == 0) {
		throw "System.ArgumentException";
	}
	this.field = field;
	var coefficientsLength = coefficients.length;
	if (coefficientsLength > 1 && coefficients[0] == 0) {
		// Leading term must be non-zero for anything except the constant polynomial "0"
		var firstNonZero = 1;
		while (firstNonZero < coefficientsLength && coefficients[firstNonZero] == 0) {
			firstNonZero++;
		}
		if (firstNonZero == coefficientsLength) {
			this.coefficients = field.Zero.coefficients;
		} else {
			this.coefficients = new Array(coefficientsLength - firstNonZero);
			for (var i = 0; i < this.coefficients.length; i++) this.coefficients[i] = 0;
			//Array.Copy(coefficients, firstNonZero, this.coefficients, 0, this.coefficients.length);
			for (var ci = 0; ci < this.coefficients.length; ci++) this.coefficients[ci] = coefficients[firstNonZero + ci];
		}
	} else {
		this.coefficients = coefficients;
	}
};

/**
 * @type {jsqrcode.GF256}
 */
jsqrcode.GF256Poly.prototype.field;

/**
 * @type {Array.<number>}
 */
jsqrcode.GF256Poly.prototype.coefficients;


jsqrcode.GF256Poly.prototype.getZero = function(){
  return this.coefficients[0] == 0;
};

jsqrcode.GF256Poly.prototype.getDegree = function () {
  return this.coefficients.length - 1;
};


jsqrcode.GF256Poly.prototype.getCoefficients = function () {
  return this.coefficients;
};

jsqrcode.GF256Poly.prototype.getCoefficient = function (degree) {
  return this.coefficients[this.coefficients.length - 1 - degree];
};

jsqrcode.GF256Poly.prototype.evaluateAt = function (a) {
  if (a == 0) {
    // Just return the x^0 coefficient
    return this.getCoefficient(0);
  }
  var size = this.coefficients.length;
  if (a == 1) {
    // Just the sum of the coefficients
    var result = 0;
    for (var i = 0; i < size; i++) {
      result = jsqrcode.GF256.addOrSubtract(result, this.coefficients[i]);
    }
    return result;
  }
  var result2 = this.coefficients[0];
  for (var i = 1; i < size; i++) {
    result2 = jsqrcode.GF256.addOrSubtract(this.field.multiply(a, result2), this.coefficients[i]);
  }
  return result2;
};

jsqrcode.GF256Poly.prototype.addOrSubtract = function (other) {
  if (this.field != other.field) {
    throw "GF256Polys do not have same GF256 field";
  }
  if (this.getZero()) {
    return other;
  }
  if (other.getZero()) {
    return this;
  }

  var smallerCoefficients = this.coefficients;
  var largerCoefficients = other.coefficients;
  if (smallerCoefficients.length > largerCoefficients.length) {
    var temp = smallerCoefficients;
    smallerCoefficients = largerCoefficients;
    largerCoefficients = temp;
  }
  var sumDiff = new Array(largerCoefficients.length);
  var lengthDiff = largerCoefficients.length - smallerCoefficients.length;
  // Copy high-order terms only found in higher-degree polynomial's coefficients
  //Array.Copy(largerCoefficients, 0, sumDiff, 0, lengthDiff);
  for (var ci = 0; ci < lengthDiff; ci++) sumDiff[ci] = largerCoefficients[ci];

  for (var i = lengthDiff; i < largerCoefficients.length; i++) {
    sumDiff[i] = jsqrcode.GF256.addOrSubtract(smallerCoefficients[i - lengthDiff], largerCoefficients[i]);
  }

  return new jsqrcode.GF256Poly(field, sumDiff);
};

jsqrcode.GF256Poly.prototype.multiply1 = function (other) {
  if (this.field != other.field) {
    throw "GF256Polys do not have same GF256 field";
  }
  if (this.getZero() || other.getZero()) {
    return this.field.getZero();
  }
  var aCoefficients = this.getCoefficients();
  var aLength = aCoefficients.length;
  var bCoefficients = other.getCoefficients();
  var bLength = bCoefficients.length;
  var product = new Array(aLength + bLength - 1);
  for (var i = 0; i < aLength; i++) {
    var aCoeff = aCoefficients[i];
    for (var j = 0; j < bLength; j++) {
      product[i + j] = jsqrcode.GF256.addOrSubtract(product[i + j], this.field.multiply(aCoeff, bCoefficients[j]));
    }
  }
  return new jsqrcode.GF256Poly(this.field, product);
};

jsqrcode.GF256Poly.prototype.multiply2 = function (scalar) {
  if (scalar == 0) {
    return this.field.getZero();
  }
  if (scalar == 1) {
    return this;
  }
  var size = this.coefficients.length;
  var product = new Array(size);
  for (var i = 0; i < size; i++) {
    product[i] = this.field.multiply(this.coefficients[i], scalar);
  }
  return new jsqrcode.GF256Poly(this.field, product);
};

jsqrcode.GF256Poly.prototype.multiplyByMonomial = function (degree, coefficient) {
  if (degree < 0) {
    throw "System.ArgumentException";
  }
  if (coefficient == 0) {
    return this.field.getZero();
  }
  var size = this.coefficients.length;
  var product = new Array(size + degree);
  for (var i = 0; i < product.length; i++) product[i] = 0;
  for (var i = 0; i < size; i++) {
    product[i] = this.field.multiply(this.coefficients[i], coefficient);
  }
  return new jsqrcode.GF256Poly(this.field, product);
};

jsqrcode.GF256Poly.prototype.divide = function (other) {
  if (this.field != other.field) {
    throw "GF256Polys do not have same GF256 field";
  }
  if (other.getZero()) {
    throw "Divide by 0";
  }

  var quotient = this.field.getZero();
  var remainder = this;

  var denominatorLeadingTerm = other.getCoefficient(other.getDegree());
  var inverseDenominatorLeadingTerm = this.field.inverse(denominatorLeadingTerm);

  while (remainder.getDegree() >= other..getDegree() && !remainder.getZero()) {
    var degreeDifference = remainder.getDegree() - other.getDegree();
    var scale = this.field.multiply(remainder.getCoefficient(remainder.getDegree()), inverseDenominatorLeadingTerm);
    var term = other.multiplyByMonomial(degreeDifference, scale);
    var iterationQuotient = this.field.buildMonomial(degreeDifference, scale);
    quotient = quotient.addOrSubtract(iterationQuotient);
    remainder = remainder.addOrSubtract(term);
  }

  return new Array(quotient, remainder);
};
