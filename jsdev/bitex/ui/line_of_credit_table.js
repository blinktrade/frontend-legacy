goog.provide('bitex.ui.LineOfCreditTable');

goog.require('goog.dom');
goog.require('goog.object');
goog.require('bitex.ui.DataGrid');
goog.require('goog.ui.registry');

goog.require('goog.dom.TagName');
goog.require('bitex.util');

/**
 * @desc Column ID of the Line Of Credit Table
 */
var MSG_LINE_OF_CREDIT_TABLE_COLUMN_ID = goog.getMsg('ID');

/**
 * @desc Column  Date / Time of the Line Of Credit Table
 */
var MSG_LINE_OF_CREDIT_TABLE_COLUMN_DATE_TIME = goog.getMsg('Date/Time');

/**
 * @desc Column Currency of the Line Of Credit Table
 */
var MSG_LINE_OF_CREDIT_TABLE_COLUMN_CURRENCY = goog.getMsg('Currency');

/**
 * @desc Column Provider of the Line Of Credit Table
 */
var MSG_LINE_OF_CREDIT_TABLE_COLUMN_PROVIDER_NAME = goog.getMsg('Provider');

/**
 * @desc Column Balance of the Line Of Credit Table
 */
var MSG_LINE_OF_CREDIT_TABLE_COLUMN_BALANCE = goog.getMsg('Balance');

/**
 * @desc Column Limit of the Line Of Credit Table
 */
var MSG_LINE_OF_CREDIT_TABLE_COLUMN_LIMIT = goog.getMsg('Limit');

/**
 * @desc Column Description of the Line Of Credit Table
 */
var MSG_LINE_OF_CREDIT_TABLE_COLUMN_DESCRIPTION = goog.getMsg('Description');

/**
 * @param {goog.dom.DomHelper=} opt_domHelper
 * @constructor
 * @extends {bitex.ui.DataGrid}
 */
bitex.ui.LineOfCreditTable = function(opt_domHelper) {
  var grid_columns = [
    {
      'property': 'Created',
      'label': MSG_LINE_OF_CREDIT_TABLE_COLUMN_DATE_TIME,
      'sortable': false,
      'formatter': function(s, rowSet) {
        return  bitex.util.convertServerUTCDateTimeStrToTimestamp(s.substr(0, 10), s.substr(11)).toLocaleString();
      },
      'classes': function() { return goog.getCssName(bitex.ui.LineOfCreditTable.CSS_CLASS, 'date-time'); }
    },{
      'property': 'Currency',
      'label': MSG_LINE_OF_CREDIT_TABLE_COLUMN_CURRENCY,
      'sortable': false,
      'classes': function() { return goog.getCssName(bitex.ui.LineOfCreditTable.CSS_CLASS, 'currency'); }
    },{
      'property': 'Description',
      'label': MSG_LINE_OF_CREDIT_TABLE_COLUMN_DESCRIPTION,
      'sortable': false,
      'classes': function() { return goog.getCssName(bitex.ui.LineOfCreditTable.CSS_CLASS, 'description'); }
    },{
      'property': 'ProviderID',
      'label': MSG_LINE_OF_CREDIT_TABLE_COLUMN_PROVIDER_NAME,
      'sortable': false,
      'formatter': function(s, rowSet){
          return rowSet['ProviderFirstName'] + ' ' + rowSet['ProviderLastName'];
      },
      'classes': function() { return goog.getCssName(bitex.ui.DepositList.CSS_CLASS, 'provider'); }
    },{
      'property': 'Balance',
      'label': MSG_LINE_OF_CREDIT_TABLE_COLUMN_BALANCE,
      'sortable': false,
      'classes': function() { return goog.getCssName(bitex.ui.LineOfCreditTable.CSS_CLASS, 'balance'); }
    }
  ];

  /**
   * @desc deposit table title
   */
  var MSG_LINE_OF_CREDIT_TITLE  = goog.getMsg('Line of Credit');

  var options = {
    'title': MSG_LINE_OF_CREDIT_TITLE,
    'showSearch': false,
    'columns': grid_columns
  };

  bitex.ui.DataGrid.call(this,  options , opt_domHelper);
};
goog.inherits(bitex.ui.LineOfCreditTable, bitex.ui.DataGrid);


/**
 * @type {string}
 */
bitex.ui.LineOfCreditTable.CSS_CLASS = goog.getCssName('line-of-credit-table');

/** @inheritDoc */
bitex.ui.LineOfCreditTable.prototype.getCssClass = function() {
  return bitex.ui.LineOfCreditTable.CSS_CLASS;
};


goog.ui.registry.setDecoratorByClassName(
    bitex.ui.LineOfCreditTable.CSS_CLASS,
    function() {
      return new bitex.ui.LineOfCreditTable();
    });
