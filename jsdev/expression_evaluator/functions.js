/*!
 Based on ndef.parser, by Raphael Graf(r@undefined.ch)
 http://www.undefined.ch/mparser/index.html
 Ported to JavaScript and modified by Matthew Crumley (email@matthewcrumley.com, http://silentmatt.com/)
 You are free to use and modify this code in anyway you find useful. Please leave this comment in the code
 to acknowledge its original source. If you feel like it, I enjoy hearing about projects that use my code,
 but don't feel like you have to let me know or ask permission.
*/

goog.provide('expression_evaluator.functions');

expression_evaluator.functions.add = function(a, b) {
  return Number(a) + Number(b);
};

expression_evaluator.functions.sub = function(a, b) {
  return a - b;
};

expression_evaluator.functions.mul = function(a, b) {
  return a * b;
};

expression_evaluator.functions.div = function(a, b) {
  return a / b;
};

expression_evaluator.functions.mod = function(a, b) {
  return a % b;
};

expression_evaluator.functions.concat = function(a, b) {
  return "" + a + b;
};

expression_evaluator.functions.sinh = function(a) {
  return Math.sinh ? Math.sinh(a) : ((Math.exp(a) - Math.exp(-a)) / 2);
};

expression_evaluator.functions.cosh = function(a) {
  return Math.cosh ? Math.cosh(a) : ((Math.exp(a) + Math.exp(-a)) / 2);
};

expression_evaluator.functions.tanh = function(a) {
  if (Math.tanh) return Math.tanh(a);
  if(a === Infinity) return 1;
  if(a === -Infinity) return -1;
  return (Math.exp(a) - Math.exp(-a)) / (Math.exp(a) + Math.exp(-a));
};

expression_evaluator.functions.asinh = function(a) {
  if (Math.asinh) return Math.asinh(a);
  if(a === -Infinity) return a;
  return Math.log(a + Math.sqrt(a * a + 1));
};

expression_evaluator.functions.acosh = function(a) {
  return Math.acosh ? Math.acosh(a) : Math.log(a + Math.sqrt(a * a - 1));
};

expression_evaluator.functions.atanh = function(a) {
  return Math.atanh ? Math.atanh(a) : (Math.log((1+a)/(1-a)) / 2);
};

expression_evaluator.functions.log10 = function(a) {
      return Math.log(a) * Math.LOG10E;
};

expression_evaluator.functions.neg = function(a) {
  return -a;
};

expression_evaluator.functions.trunc = function(a) {
  if(Math.trunc) return Math.trunc(a);
  else return x < 0 ? Math.ceil(x) : Math.floor(x);
};

expression_evaluator.functions.random = function(a) {
  return Math.random() * (a || 1);
};

expression_evaluator.functions.fac = function(a) { //a!
  a = Math.floor(a);
  var b = a;
  while (a > 1) {
    b = b * (--a);
  }
  return b;
};

// TODO: use hypot that doesn't overflow
expression_evaluator.functions.hypot = function() {
  if(Math.hypot) return Math.hypot.apply(this, arguments);
  var y = 0;
  var length = arguments.length;
  for (var i = 0; i < length; i++) {
    if (arguments[i] === Infinity || arguments[i] === -Infinity) {
      return Infinity;
    }
    y += arguments[i] * arguments[i];
  }
  return Math.sqrt(y);
};

expression_evaluator.functions.append = function(a, b) {
  if (Object.prototype.toString.call(a) != "[object Array]") {
    return [a, b];
  }
  a = a.slice();
  a.push(b);
  return a;
};
