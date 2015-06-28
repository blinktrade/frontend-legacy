goog.provide('bitex.view.LineOfCreditView');

goog.require('bitex.view.View');

goog.require('bitex.ui.LineOfCreditTable');

goog.require('bitex.util');
goog.require('goog.json');

/**
 * @param {*} app
 * @param {goog.dom.DomHelper=} opt_domHelper
 * @constructor
 * @extends {bitex.view.View}
 */
bitex.view.LineOfCreditView = function(app, opt_domHelper) {
  bitex.view.View.call(this, app, opt_domHelper);

  this.request_id_ = null;
};
goog.inherits(bitex.view.LineOfCreditView, bitex.view.View);

/**
 * @type {bitex.ui.LineOfCreditTable}
 * @private
 */
bitex.view.LineOfCreditView.prototype.line_of_credit_table_;

bitex.view.LineOfCreditView.prototype.enterView = function() {
  goog.base(this, 'enterView');
  this.recreateComponents_();
};

bitex.view.LineOfCreditView.prototype.exitView = function() {
  goog.base(this, 'exitView');
  this.destroyComponents_();
};

/**
 * @type {number}
 */
bitex.view.LineOfCreditView.prototype.request_id_;

/**
 * @private
 */
bitex.view.LineOfCreditView.prototype.destroyComponents_ = function( ) {
  var handler = this.getHandler();


  if (goog.isDefAndNotNull(this.line_of_credit_table_)) {

    handler.unlisten(this.line_of_credit_table_,
                     bitex.ui.DataGrid.EventType.REQUEST_DATA,
                     this.onLineOfCreditTableRequestData_);

    handler.unlisten(this.getApplication().getBitexConnection(),
                     bitex.api.BitEx.EventType.LINE_OF_CREDIT_LIST_RESPONSE + '.' + this.request_id_,
                     this.onLineOfCreditListResponse_);

  }

  this.removeChildren(true);
  this.line_of_credit_table_ = null;
  this.request_id_ = null;
};


/**
 * @private
 */
bitex.view.LineOfCreditView.prototype.recreateComponents_ = function() {
  var handler = this.getHandler();
  var model = this.getApplication().getModel();

  this.destroyComponents_();

  this.request_id_ = parseInt( 1e7 * Math.random() , 10 );

  this.line_of_credit_table_ =  new bitex.ui.LineOfCreditTable();

  handler.listen(this.line_of_credit_table_,
                 bitex.ui.DataGrid.EventType.REQUEST_DATA,
                 this.onLineOfCreditTableRequestData_);

  handler.listen(this.getApplication().getBitexConnection(),
                 bitex.api.BitEx.EventType.LINE_OF_CREDIT_LIST_RESPONSE + '.' + this.request_id_,
                 this.onLineOfCreditListResponse_);

  this.addChild(this.line_of_credit_table_, true );

  this.line_of_credit_table_.setColumnFormatter('Amount',  this.amountFormatter_, this);
  this.line_of_credit_table_.setColumnFormatter('Balance', this.balanceFormatter_, this);
};

/**
 * @param {*} value
 * @param {Object} rowSet
 */
bitex.view.LineOfCreditView.prototype.amountFormatter_ = function(value, rowSet) {
  if (rowSet['Operation'] == 'D') {
    value = value * -1;
  }
  return this.getApplication().formatCurrency(value/1e8, rowSet['Currency']);
};

/**
 * @param {*} value
 * @param {Object} rowSet
 */
bitex.view.LineOfCreditView.prototype.balanceFormatter_ = function(value, rowSet) {
  return this.getApplication().formatCurrency(value/1e8, rowSet['Currency']);
};

/**
 *
 * @param {goog.events.Event} e
 */
bitex.view.LineOfCreditView.prototype.onLineOfCreditTableRequestData_ = function(e) {
  var page = e.options['Page'];
  var limit = e.options['Limit'];
  var conn = this.getApplication().getBitexConnection();
  conn.requestLineOfCreditList(page, limit, this.request_id_);
};


/**
 *
 * @param {goog.events.Event} e
 */
bitex.view.LineOfCreditView.prototype.onLineOfCreditListResponse_ = function(e) {
  if (!goog.isDefAndNotNull(this.line_of_credit_table_) ) {
    return
  }
  var msg = e.data;
  this.line_of_credit_table_.setResultSet( msg['LineOfCreditListGrp'], msg['Columns'] );
};
