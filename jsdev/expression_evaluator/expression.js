/*!
 Based on ndef.parser, by Raphael Graf(r@undefined.ch)
 http://www.undefined.ch/mparser/index.html
 Ported to JavaScript and modified by Matthew Crumley (email@matthewcrumley.com, http://silentmatt.com/)
 You are free to use and modify this code in anyway you find useful. Please leave this comment in the code
 to acknowledge its original source. If you feel like it, I enjoy hearing about projects that use my code,
 but don't feel like you have to let me know or ask permission.
*/

goog.provide('expression_evaluator.Expression');


goog.require('expression_evaluator.util');
goog.require('expression_evaluator.Token');
goog.require('expression_evaluator.Token.TokenType');

/**
 * @param tokens
 * @param ops1
 * @param ops2
 * @param functions
 * @constructor
 */
expression_evaluator.Expression = function(tokens, ops1, ops2, functions) {
  this.tokens = tokens;
  this.ops1 = ops1;
  this.ops2 = ops2;
  this.functions = functions;
};

/**
 *
 * @param {Object=} value
 * @returns {expression_evaluator.Expression}
 */
expression_evaluator.Expression.prototype.simplify = function(values) {
  values = values || {};
  var nstack = [];
  var newexpression = [];
  var n1;
  var n2;
  var f;
  var L = this.tokens.length;
  var item;
  var i = 0;
  for (i = 0; i < L; i++) {
    item = this.tokens[i];
    var type_ = item.type_;
    if (type_ === expression_evaluator.Token.TokenType.TNUMBER) {
      nstack.push(item);
    }
    else if (type_ === expression_evaluator.Token.TokenType.TVAR && (item.index_ in values)) {
      item = new expression_evaluator.Token(expression_evaluator.Token.TokenType.TNUMBER,
                                           0,
                                           0,
                                           values[item.index_]);
      nstack.push(item);
    }
    else if (type_ === expression_evaluator.Token.TokenType.TOP2 && nstack.length > 1) {
      n2 = nstack.pop();
      n1 = nstack.pop();
      f = this.ops2[item.index_];
      item = new expression_evaluator.Token(expression_evaluator.Token.TokenType.TNUMBER,
                                                     0,
                                                     0,
                                                     f(n1.number_, n2.number_));
      nstack.push(item);
    }
    else if (type_ === expression_evaluator.Token.TokenType.TOP1 && nstack.length > 0) {
      n1 = nstack.pop();
      f = this.ops1[item.index_];
      item = new expression_evaluator.Token(expression_evaluator.Token.TokenType.TNUMBER,
                                                     0,
                                                     0,
                                                     f(n1.number_));
      nstack.push(item);
    }
    else {
      while (nstack.length > 0) {
        newexpression.push(nstack.shift());
      }
      newexpression.push(item);
    }
  }
  while (nstack.length > 0) {
    newexpression.push(nstack.shift());
  }

  return new expression_evaluator.Expression(newexpression,
                                             expression_evaluator.util.object(this.ops1),
                                             expression_evaluator.util.object(this.ops2),
                                             expression_evaluator.util.object(this.functions));
};

/**
 * @param {*} variable
 * @param {expression_evaluator.Expression} expr
 * @returns {expression_evaluator.Expression}
 */
expression_evaluator.Expression.prototype.substitute = function (variable, expr) {
  if (!(expr instanceof expression_evaluator.Expression)) {
    expr = new expression_evaluator.Parser().parse(String(expr));
  }
  var newexpression = [];
  var L = this.tokens.length;
  var item;
  var i = 0;
  for (i = 0; i < L; i++) {
    item = this.tokens[i];
    var type_ = item.type_;
    if (type_ === expression_evaluator.Token.TokenType.TVAR && item.index_ === variable) {
      for (var j = 0; j < expr.tokens.length; j++) {
        var expritem = expr.tokens[j];
        var replitem = new expression_evaluator.Token(expritem.type_,
                                                               expritem.index_,
                                                               expritem.prio_,
                                                               expritem.number_);
        newexpression.push(replitem);
      }
    }
    else {
      newexpression.push(item);
    }
  }

  var ret = new expression_evaluator.Expression(newexpression,
                                                expression_evaluator.util.object(this.ops1),
                                                expression_evaluator.util.object(this.ops2),
                                                expression_evaluator.util.object(this.functions));
  return ret;
};

/**
 * @param {Object=} values
 * @returns {*}
 */
expression_evaluator.Expression.prototype.evaluate = function (values) {
  values = values || {};
  var nstack = [];
  var n1;
  var n2;
  var f;
  var L = this.tokens.length;
  var item;
  var i = 0;
  for (i = 0; i < L; i++) {
    item = this.tokens[i];
    var type_ = item.type_;
    if (type_ === expression_evaluator.Token.TokenType.TNUMBER) {
      nstack.push(item.number_);
    }
    else if (type_ === expression_evaluator.Token.TokenType.TOP2) {
      n2 = nstack.pop();
      n1 = nstack.pop();
      f = this.ops2[item.index_];
      nstack.push(f(n1, n2));
    }
    else if (type_ === expression_evaluator.Token.TokenType.TVAR) {
      if (item.index_ in values) {
        nstack.push(values[item.index_]);
      }
      else if (item.index_ in this.functions) {
        nstack.push(this.functions[item.index_]);
      }
      else {
        throw new Error("undefined variable: " + item.index_);
      }
    }
    else if (type_ === expression_evaluator.Token.TokenType.TOP1) {
      n1 = nstack.pop();
      f = this.ops1[item.index_];
      nstack.push(f(n1));
    }
    else if (type_ === expression_evaluator.Token.TokenType.TFUNCALL) {
      n1 = nstack.pop();
      f = nstack.pop();
      if (f.apply && f.call) {
        if (Object.prototype.toString.call(n1) == "[object Array]") {
          nstack.push(f.apply(undefined, n1));
        }
        else {
          nstack.push(f.call(undefined, n1));
        }
      }
      else {
        throw new Error(f + " is not a function");
      }
    }
    else {
      throw new Error("invalid Expression");
    }
  }
  if (nstack.length > 1) {
    throw new Error("invalid Expression (parity)");
  }
  return nstack[0];
};

/**
 *
 * @param {Boolean} toJS
 * @returns {string}
 */
expression_evaluator.Expression.prototype.toString = function (toJS) {
  var nstack = [];
  var n1;
  var n2;
  var f;
  var L = this.tokens.length;
  var item;
  var i = 0;
  for (i = 0; i < L; i++) {
    item = this.tokens[i];
    var type_ = item.type_;
    if (type_ === expression_evaluator.Token.TokenType.TNUMBER) {
      nstack.push(expression_evaluator.util.escapeValue(item.number_));
    }
    else if (type_ === expression_evaluator.Token.TokenType.TOP2) {
      n2 = nstack.pop();
      n1 = nstack.pop();
      f = item.index_;
      if (toJS && f == "^") {
        nstack.push("Math.pow(" + n1 + "," + n2 + ")");
      }
      else {
        nstack.push("(" + n1 + f + n2 + ")");
      }
    }
    else if (type_ === expression_evaluator.Token.TokenType.TVAR) {
      nstack.push(item.index_);
    }
    else if (type_ === expression_evaluator.Token.TokenType.TOP1) {
      n1 = nstack.pop();
      f = item.index_;
      if (f === "-") {
        nstack.push("(" + f + n1 + ")");
      }
      else {
        nstack.push(f + "(" + n1 + ")");
      }
    }
    else if (type_ === expression_evaluator.Token.TokenType.TFUNCALL) {
      n1 = nstack.pop();
      f = nstack.pop();
      nstack.push(f + "(" + n1 + ")");
    }
    else {
      throw new Error("invalid Expression");
    }
  }
  if (nstack.length > 1) {
    throw new Error("invalid Expression (parity)");
  }
  return nstack[0];
};

/**
 * @returns {Array}
 */
expression_evaluator.Expression.prototype.variables = function () {
  var L = this.tokens.length;
  var vars = [];
  for (var i = 0; i < L; i++) {
    var item = this.tokens[i];
    if (item.type_ === expression_evaluator.Token.TokenType.TVAR && (vars.indexOf(item.index_) == -1)) {
      vars.push(item.index_);
    }
  }

  return vars;
};

goog.exportSymbol('Expression', expression_evaluator.Expression )
goog.exportProperty(Expression.prototype, 'evaluate',   expression_evaluator.Expression.prototype.evaluate );
goog.exportProperty(Expression.prototype, 'variables',  expression_evaluator.Expression.prototype.variables );
goog.exportProperty(Expression.prototype, 'simplify',   expression_evaluator.Expression.prototype.simplify );
goog.exportProperty(Expression.prototype, 'substitute', expression_evaluator.Expression.prototype.substitute );
goog.exportProperty(Expression.prototype, 'toString',   expression_evaluator.Expression.prototype.toString );
