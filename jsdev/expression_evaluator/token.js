/*!
 Based on ndef.parser, by Raphael Graf(r@undefined.ch)
 http://www.undefined.ch/mparser/index.html

 Ported to JavaScript and modified by Matthew Crumley (email@matthewcrumley.com, http://silentmatt.com/)

 You are free to use and modify this code in anyway you find useful. Please leave this comment in the code
 to acknowledge its original source. If you feel like it, I enjoy hearing about projects that use my code,
 but don't feel like you have to let me know or ask permission.
*/

goog.provide('expression_evaluator.Token');
goog.provide('expression_evaluator.Token.TokenType');

/**
 * @constructor
 */
expression_evaluator.Token = function(type_, index_, prio_, number_) {
  this.type_ = type_;
  this.index_ = index_ || 0;
  this.prio_ = prio_ || 0;
  this.number_ = (number_ !== undefined && number_ !== null) ? number_ : 0;
};

/**
 * @enum {number}
 */
expression_evaluator.Token.TokenType = {
  TNUMBER: 0,
  TOP1: 1,
  TOP2: 2,
  TVAR: 3,
  TFUNCALL: 4
};


/**
 * @return {string}
 */
expression_evaluator.Token.prototype.toString = function(){
  switch (this.type_) {
    case expression_evaluator.Token.TokenType.TNUMBER:
      return this.number_;
    case expression_evaluator.Token.TokenType.TOP1:
    case expression_evaluator.Token.TokenType.TOP2:
    case expression_evaluator.Token.TokenType.TVAR:
      return this.index_;
    case expression_evaluator.Token.TokenType.TFUNCALL:
      return "CALL";
    default:
      return "Invalid Token";
  }
};

