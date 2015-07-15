/*!
 Based on ndef.parser, by Raphael Graf(r@undefined.ch)
 http://www.undefined.ch/mparser/index.html
 Ported to JavaScript and modified by Matthew Crumley (email@matthewcrumley.com, http://silentmatt.com/)
 You are free to use and modify this code in anyway you find useful. Please leave this comment in the code
 to acknowledge its original source. If you feel like it, I enjoy hearing about projects that use my code,
 but don't feel like you have to let me know or ask permission.
*/

goog.provide('expression_evaluator.Parser');

goog.require('expression_evaluator.util');
goog.require('expression_evaluator.functions');
goog.require('expression_evaluator.Expression');

/**
 * @constructor
 */
expression_evaluator.Parser = function() {
  this.success = false;
  this.errormsg = "";
  this.expression = "";

  this.pos = 0;

  this.tokennumber = 0;
  this.tokenprio = 0;
  this.tokenindex = 0;
  this.tmpprio = 0;

  this.ops1 = {
    "sin": Math.sin,
    "cos": Math.cos,
    "tan": Math.tan,
    "asin": Math.asin,
    "acos": Math.acos,
    "atan": Math.atan,
    "sinh": expression_evaluator.functions.sinh,
    "cosh": expression_evaluator.functions.cosh,
    "tanh": expression_evaluator.functions.tanh,
    "asinh": expression_evaluator.functions.asinh,
    "acosh": expression_evaluator.functions.acosh,
    "atanh": expression_evaluator.functions.atanh,
    "sqrt": Math.sqrt,
    "log": Math.log,
    "lg" : expression_evaluator.functions.log10,
    "log10" : expression_evaluator.functions.log10,
    "abs": Math.abs,
    "ceil": Math.ceil,
    "floor": Math.floor,
    "round": Math.round,
    "trunc": expression_evaluator.functions.trunc,
    "-": expression_evaluator.functions.neg,
    "exp": Math.exp
  };

  this.ops2 = {
    "+": expression_evaluator.functions.add,
    "-": expression_evaluator.functions.sub,
    "*": expression_evaluator.functions.mul,
    "/": expression_evaluator.functions.div,
    "%": expression_evaluator.functions.mod,
    "^": Math.pow,
    ",": expression_evaluator.functions.append,
    "||": expression_evaluator.functions.concat
  };

  this.functions = {
    "random": expression_evaluator.functions.random,
    "fac": expression_evaluator.functions.fac,
    "min": Math.min,
    "max": Math.max,
    "hypot": expression_evaluator.functions.hypot,
    "pyt": expression_evaluator.functions.hypot, // backward compat
    "pow": Math.pow,
    "atan2": Math.atan2
  };

  this.consts = {
    "E": Math.E,
    "PI": Math.PI
  };
};


/**
 * @enum {number}
 */
expression_evaluator.Parser.Token = {
	PRIMARY      : 1 << 0,
	OPERATOR     : 1 << 1,
	FUNCTION     : 1 << 2,
	LPAREN       : 1 << 3,
	RPAREN       : 1 << 4,
	COMMA        : 1 << 5,
	SIGN         : 1 << 6,
	CALL         : 1 << 7,
	NULLARY_CALL : 1 << 8
};



expression_evaluator.Parser.prototype.parse = function (expr) {
  this.errormsg = "";
  this.success = true;
  var operstack = [];
  var tokenstack = [];
  this.tmpprio = 0;
  var expected = (expression_evaluator.Parser.Token.PRIMARY |
                  expression_evaluator.Parser.Token.LPAREN |
                  expression_evaluator.Parser.Token.FUNCTION |
                  expression_evaluator.Parser.Token.SIGN);
  var noperators = 0;
  this.expression = expr;
  this.pos = 0;

  while (this.pos < this.expression.length) {
    if (this.isOperator()) {
      if (this.isSign() && (expected & expression_evaluator.Parser.Token.SIGN)) {
        if (this.isNegativeSign()) {
          this.tokenprio = 2;
          this.tokenindex = "-";
          noperators++;
          this.addfunc(tokenstack, operstack, expression_evaluator.Token.TokenType.TOP1);
        }
        expected = (expression_evaluator.Parser.Token.PRIMARY |
                    expression_evaluator.Parser.Token.LPAREN |
                    expression_evaluator.Parser.Token.FUNCTION |
                    expression_evaluator.Parser.Token.SIGN);
      }
      else if (this.isComment()) {

      }
      else {
        if ((expected & expression_evaluator.Parser.Token.OPERATOR) === 0) {
          this.error_parsing(this.pos, "unexpected operator");
        }
        noperators += 2;
        this.addfunc(tokenstack, operstack, expression_evaluator.Token.TokenType.TOP2);
        expected = (expression_evaluator.Parser.Token.PRIMARY |
                    expression_evaluator.Parser.Token.LPAREN |
                    expression_evaluator.Parser.Token.FUNCTION |
                    expression_evaluator.Parser.Token.SIGN);
      }
    }
    else if (this.isNumber()) {
      if ((expected & expression_evaluator.Parser.Token.PRIMARY) === 0) {
        this.error_parsing(this.pos, "unexpected number");
      }
      var token = new expression_evaluator.Token(expression_evaluator.Token.TokenType.TNUMBER,
                                                          0,
                                                          0,
                                                          this.tokennumber);
      tokenstack.push(token);

      expected = (expression_evaluator.Parser.Token.OPERATOR |
                  expression_evaluator.Parser.Token.RPAREN |
                  expression_evaluator.Parser.Token.COMMA);
    }
    else if (this.isString()) {
      if ((expected & expression_evaluator.Parser.Token.PRIMARY) === 0) {
        this.error_parsing(this.pos, "unexpected string");
      }
      var token = new expression_evaluator.Token(expression_evaluator.Token.TokenType.TNUMBER,
                                                          0,
                                                          0,
                                                          this.tokennumber);
      tokenstack.push(token);

      expected = (expression_evaluator.Parser.Token.OPERATOR |
                  expression_evaluator.Parser.Token.RPAREN |
                  expression_evaluator.Parser.Token.COMMA);
    }
    else if (this.isLeftParenth()) {
      if ((expected & expression_evaluator.Parser.Token.LPAREN) === 0) {
        this.error_parsing(this.pos, "unexpected \"(\"");
      }

      if (expected & expression_evaluator.Parser.Token.CALL) {
        noperators += 2;
        this.tokenprio = -2;
        this.tokenindex = -1;
        this.addfunc(tokenstack, operstack, expression_evaluator.Token.TokenType.TFUNCALL);
      }

      expected = (expression_evaluator.Parser.Token.PRIMARY |
                  expression_evaluator.Parser.Token.LPAREN |
                  expression_evaluator.Parser.Token.FUNCTION |
                  expression_evaluator.Parser.Token.SIGN |
                  expression_evaluator.Parser.Token.NULLARY_CALL);
    }
    else if (this.isRightParenth()) {
        if (expected & expression_evaluator.Parser.Token.NULLARY_CALL) {
        var token = new expression_evaluator.Token(expression_evaluator.Token.TokenType.TNUMBER,
                                                            0,
                                                            0,
                                                            []);
        tokenstack.push(token);
      }
      else if ((expected & expression_evaluator.Parser.Token.RPAREN) === 0) {
        this.error_parsing(this.pos, "unexpected \")\"");
      }

      expected = (expression_evaluator.Parser.Token.OPERATOR |
                  expression_evaluator.Parser.Token.RPAREN |
                  expression_evaluator.Parser.Token.COMMA |
                  expression_evaluator.Parser.Token.LPAREN |
                  expression_evaluator.Parser.Token.CALL);
    }
    else if (this.isComma()) {
      if ((expected & expression_evaluator.Parser.Token.COMMA) === 0) {
        this.error_parsing(this.pos, "unexpected \",\"");
      }
      this.addfunc(tokenstack, operstack, expression_evaluator.Token.TokenType.TOP2);
      noperators += 2;
      expected = (expression_evaluator.Parser.Token.PRIMARY |
                  expression_evaluator.Parser.Token.LPAREN |
                  expression_evaluator.Parser.Token.FUNCTION |
                  expression_evaluator.Parser.Token.SIGN);
    }
    else if (this.isConst()) {
      if ((expected & expression_evaluator.Parser.Token.PRIMARY) === 0) {
        this.error_parsing(this.pos, "unexpected constant");
      }
      var consttoken = new expression_evaluator.Token(expression_evaluator.Token.TokenType.TNUMBER,
                                                               0,
                                                               0,
                                                               this.tokennumber);
      tokenstack.push(consttoken);
      expected = (expression_evaluator.Parser.Token.OPERATOR |
                  expression_evaluator.Parser.Token.RPAREN |
                  expression_evaluator.Parser.Token.COMMA);
    }
    else if (this.isOp2()) {
      if ((expected & expression_evaluator.Parser.Token.FUNCTION) === 0) {
        this.error_parsing(this.pos, "unexpected function");
      }
      this.addfunc(tokenstack, operstack, expression_evaluator.Token.TokenType.TOP2);
      noperators += 2;
      expected = (expression_evaluator.Parser.Token.LPAREN);
    }
    else if (this.isOp1()) {
      if ((expected & expression_evaluator.Parser.Token.FUNCTION) === 0) {
        this.error_parsing(this.pos, "unexpected function");
      }
      this.addfunc(tokenstack, operstack, expression_evaluator.Token.TokenType.TOP1);
      noperators++;
      expected = (expression_evaluator.Parser.Token.LPAREN);
    }
    else if (this.isVar()) {
      if ((expected & expression_evaluator.Parser.Token.PRIMARY) === 0) {
        this.error_parsing(this.pos, "unexpected variable");
      }
      var vartoken = new expression_evaluator.Token(expression_evaluator.Token.TokenType.TVAR,
                                                             this.tokenindex,
                                                             0,
                                                             0);
      tokenstack.push(vartoken);

      expected = (expression_evaluator.Parser.Token.OPERATOR |
                  expression_evaluator.Parser.Token.RPAREN |
                  expression_evaluator.Parser.Token.COMMA |
                  expression_evaluator.Parser.Token.LPAREN |
                  expression_evaluator.Parser.Token.CALL);
    }
    else if (this.isWhite()) {
    }
    else {
      if (this.errormsg === "") {
        this.error_parsing(this.pos, "unknown character");
      }
      else {
        this.error_parsing(this.pos, this.errormsg);
      }
    }
  }
  if (this.tmpprio < 0 || this.tmpprio >= 10) {
    this.error_parsing(this.pos, "unmatched \"()\"");
  }
  while (operstack.length > 0) {
    var tmp = operstack.pop();
    tokenstack.push(tmp);
  }
  if (noperators + 1 !== tokenstack.length) {
    //print(noperators + 1);
    //print(tokenstack);
    this.error_parsing(this.pos, "parity");
  }

  return new expression_evaluator.Expression(tokenstack,
                                             expression_evaluator.util.object(this.ops1),
                                             expression_evaluator.util.object(this.ops2),
                                             expression_evaluator.util.object(this.functions));
};

expression_evaluator.Parser.prototype.evaluate = function (expr, variables) {
  return this.parse(expr).evaluate(variables);
};

expression_evaluator.Parser.prototype.error_parsing = function (column, msg) {
  this.success = false;
  this.errormsg = "parse error [column " + (column) + "]: " + msg;
  this.column = column;
  throw new Error(this.errormsg);
};

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\

expression_evaluator.Parser.prototype.addfunc = function (tokenstack, operstack, type_) {
  var operator = new expression_evaluator.Token(type_,
                                                this.tokenindex,
                                                this.tokenprio + this.tmpprio,
                                                0);
  while (operstack.length > 0) {
    if (operator.prio_ <= operstack[operstack.length - 1].prio_) {
      tokenstack.push(operstack.pop());
    }
    else {
      break;
    }
  }
  operstack.push(operator);
};

expression_evaluator.Parser.prototype.isNumber = function () {
  var r = false;
  var str = "";
  while (this.pos < this.expression.length) {
    var code = this.expression.charCodeAt(this.pos);
    if ((code >= 48 && code <= 57) || code === 46) {
      str += this.expression.charAt(this.pos);
      this.pos++;
      this.tokennumber = parseFloat(str);
      r = true;
    }
    else {
      break;
    }
  }
  return r;
};

// Ported from the yajjl JSON parser at http://code.google.com/p/yajjl/
expression_evaluator.Parser.prototype.unescape = function(v, pos) {
  var buffer = [];
  var escaping = false;

  for (var i = 0; i < v.length; i++) {
    var c = v.charAt(i);

    if (escaping) {
      switch (c) {
      case "'":
        buffer.push("'");
        break;
      case '\\':
        buffer.push('\\');
        break;
      case '/':
        buffer.push('/');
        break;
      case 'b':
        buffer.push('\b');
        break;
      case 'f':
        buffer.push('\f');
        break;
      case 'n':
        buffer.push('\n');
        break;
      case 'r':
        buffer.push('\r');
        break;
      case 't':
        buffer.push('\t');
        break;
      case 'u':
        // interpret the following 4 characters as the hex of the unicode code point
        var codePoint = parseInt(v.substring(i + 1, i + 5), 16);
        buffer.push(String.fromCharCode(codePoint));
        i += 4;
        break;
      default:
        throw this.error_parsing(pos + i, "Illegal escape sequence: '\\" + c + "'");
      }
      escaping = false;
    } else {
      if (c == '\\') {
        escaping = true;
      } else {
        buffer.push(c);
      }
    }
  }

  return buffer.join('');
};

expression_evaluator.Parser.prototype.isString = function () {
  var r = false;
  var str = "";
  var startpos = this.pos;
  if (this.pos < this.expression.length && this.expression.charAt(this.pos) == "'") {
    this.pos++;
    while (this.pos < this.expression.length) {
      var code = this.expression.charAt(this.pos);
      if (code != "'" || str.slice(-1) == "\\") {
        str += this.expression.charAt(this.pos);
        this.pos++;
      }
      else {
        this.pos++;
        this.tokennumber = this.unescape(str, startpos);
        r = true;
        break;
      }
    }
  }
  return r;
};

expression_evaluator.Parser.prototype.isConst = function () {
  var str;
  for (var i in this.consts) {
    if (true) {
      var L = i.length;
      str = this.expression.substr(this.pos, L);
      if (i === str) {
        this.tokennumber = this.consts[i];
        this.pos += L;
        return true;
      }
    }
  }
  return false;
};

expression_evaluator.Parser.prototype.isOperator = function () {
  var code = this.expression.charCodeAt(this.pos);
  if (code === 43) { // +
    this.tokenprio = 0;
    this.tokenindex = "+";
  }
  else if (code === 45) { // -
    this.tokenprio = 0;
    this.tokenindex = "-";
  }
  else if (code === 124) { // |
    if (this.expression.charCodeAt(this.pos + 1) === 124) {
      this.pos++;
      this.tokenprio = 0;
      this.tokenindex = "||";
    }
    else {
      return false;
    }
  }
  else if (code === 42 || code === 8729 || code === 8226) { // * or ∙ or •
    this.tokenprio = 1;
    this.tokenindex = "*";
  }
  else if (code === 47) { // /
    this.tokenprio = 2;
    this.tokenindex = "/";
  }
  else if (code === 37) { // %
    this.tokenprio = 2;
    this.tokenindex = "%";
  }
  else if (code === 94) { // ^
    this.tokenprio = 3;
    this.tokenindex = "^";
  }
  else {
    return false;
  }
  this.pos++;
  return true;
};

expression_evaluator.Parser.prototype.isSign = function () {
  var code = this.expression.charCodeAt(this.pos - 1);
  if (code === 45 || code === 43) { // -
    return true;
  }
  return false;
};

expression_evaluator.Parser.prototype.isPositiveSign = function () {
  var code = this.expression.charCodeAt(this.pos - 1);
  if (code === 43) { // +
    return true;
  }
  return false;
};

expression_evaluator.Parser.prototype.isNegativeSign = function () {
  var code = this.expression.charCodeAt(this.pos - 1);
  if (code === 45) { // -
    return true;
  }
  return false;
};

expression_evaluator.Parser.prototype.isLeftParenth = function () {
  var code = this.expression.charCodeAt(this.pos);
  if (code === 40) { // (
    this.pos++;
    this.tmpprio += 10;
    return true;
  }
  return false;
};

expression_evaluator.Parser.prototype.isRightParenth = function () {
  var code = this.expression.charCodeAt(this.pos);
  if (code === 41) { // )
    this.pos++;
    this.tmpprio -= 10;
    return true;
  }
  return false;
};

expression_evaluator.Parser.prototype.isComma = function () {
  var code = this.expression.charCodeAt(this.pos);
  if (code === 44) { // ,
    this.pos++;
    this.tokenprio = -1;
    this.tokenindex = ",";
    return true;
  }
  return false;
};

expression_evaluator.Parser.prototype.isWhite = function () {
  var code = this.expression.charCodeAt(this.pos);
  if (code === 32 || code === 9 || code === 10 || code === 13) {
    this.pos++;
    return true;
  }
  return false;
};

expression_evaluator.Parser.prototype.isOp1 = function () {
  var str = "";
  for (var i = this.pos; i < this.expression.length; i++) {
    var c = this.expression.charAt(i);
    if (c.toUpperCase() === c.toLowerCase()) {
      if (i === this.pos || (c != '_' && (c < '0' || c > '9'))) {
        break;
      }
    }
    str += c;
  }
  if (str.length > 0 && (str in this.ops1)) {
    this.tokenindex = str;
    this.tokenprio = 5;
    this.pos += str.length;
    return true;
  }
  return false;
};

expression_evaluator.Parser.prototype.isOp2 = function () {
  var str = "";
  for (var i = this.pos; i < this.expression.length; i++) {
    var c = this.expression.charAt(i);
    if (c.toUpperCase() === c.toLowerCase()) {
      if (i === this.pos || (c != '_' && (c < '0' || c > '9'))) {
        break;
      }
    }
    str += c;
  }
  if (str.length > 0 && (str in this.ops2)) {
    this.tokenindex = str;
    this.tokenprio = 5;
    this.pos += str.length;
    return true;
  }
  return false;
};

expression_evaluator.Parser.prototype.isVar = function () {
  var str = "";
  for (var i = this.pos; i < this.expression.length; i++) {
    var c = this.expression.charAt(i);
    if (c.toUpperCase() === c.toLowerCase()) {
      if (i === this.pos || (c != '_' && (c < '0' || c > '9'))) {
        break;
      }
    }
    str += c;
  }
  if (str.length > 0) {
    this.tokenindex = str;
    this.tokenprio = 4;
    this.pos += str.length;
    return true;
  }
  return false;
};

expression_evaluator.Parser.prototype.isComment = function () {
  var code = this.expression.charCodeAt(this.pos - 1);
  if (code === 47 && this.expression.charCodeAt(this.pos) === 42) {
    this.pos = this.expression.indexOf("*/", this.pos) + 2;
    if (this.pos === 1) {
      this.pos = this.expression.length;
    }
    return true;
  }
  return false;
};

goog.exportSymbol('Parser', expression_evaluator.Parser )
goog.exportProperty(Parser.prototype, 'evaluate', expression_evaluator.Parser.prototype.evaluate );
goog.exportProperty(Parser.prototype, 'variables', expression_evaluator.Parser.prototype.variables );
goog.exportProperty(Parser.prototype, 'simplify', expression_evaluator.Parser.prototype.simplify );
goog.exportProperty(Parser.prototype, 'substitute', expression_evaluator.Parser.prototype.substitute );
goog.exportProperty(Parser.prototype, 'toString', expression_evaluator.Parser.prototype.toString );
