goog.provide('bitex.ui.LineOfCreditTable');
goog.provide('bitex.ui.LineOfCreditTable.EventType');

goog.require('goog.dom');
goog.require('goog.object');
goog.require('bitex.ui.DataGrid');
goog.require('bitex.ui.LineOfCreditTable.templates');
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
 * @desc Column  Actions of the Line Of Credit Table
 */
var MSG_LINE_OF_CREDIT_TABLE_COLUMN_ACTIONS = goog.getMsg('Actions');


/**
 * @param {number} accountID
 * @param {goog.dom.DomHelper=} opt_domHelper
 * @constructor
 * @extends {bitex.ui.DataGrid}
 */
bitex.ui.LineOfCreditTable = function(accountID, opt_domHelper) {
  var grid_columns = [
    {
      'property': 'Currency',
      'label': MSG_LINE_OF_CREDIT_TABLE_COLUMN_CURRENCY,
      'sortable': false,
      'classes': function() { return goog.getCssName(bitex.ui.LineOfCreditTable.CSS_CLASS, 'currency'); },
      'formatter': function(s, rowSet){
        if (rowSet['DeliveryCurrencies'][0] != rowSet['Currency'] || rowSet['DeliveryCurrencies'].length > 1 ) {
          /**
           * @desc Currency information on line of credit when the currency differs from delivery currency
           */
          var MSG_LINE_OF_CREDIT_DELIVERY_CURRENCIES_INFO = goog.getMsg('{$c} get/paid in {$l}',  { c:rowSet['Currency'], l:rowSet['DeliveryCurrencies'].join(",") })
          return MSG_LINE_OF_CREDIT_DELIVERY_CURRENCIES_INFO;
        }
        return rowSet['Currency'];
      }
    },{
      'property': 'Description',
      'label': MSG_LINE_OF_CREDIT_TABLE_COLUMN_DESCRIPTION,
      'sortable': false,
      'classes': function() { return goog.getCssName(bitex.ui.LineOfCreditTable.CSS_CLASS, 'description'); }
    },{
      'property': 'Balance',
      'label': MSG_LINE_OF_CREDIT_TABLE_COLUMN_BALANCE,
      'sortable': false,
      'classes': function() { return goog.getCssName(bitex.ui.LineOfCreditTable.CSS_CLASS, 'balance'); }
    },{
      'property': 'CreditLimit',
      'label': MSG_LINE_OF_CREDIT_TABLE_COLUMN_LIMIT,
      'sortable': false,
      'classes': function() { return goog.getCssName(bitex.ui.LineOfCreditTable.CSS_CLASS, 'limit'); }
    },{
      'property': 'IsActive',
      'label': MSG_LINE_OF_CREDIT_TABLE_COLUMN_ACTIONS,
      'sortable': false,
      'formatter': function(s, rowSet) {
        var is_provider = false;
        var is_taker = false;
        if (accountID == rowSet['ProviderID']) {
          is_provider = true;
        } else if (accountID == rowSet['TakerID']) {
          is_taker = true;
        }

        var data_row = goog.json.serialize(rowSet);

        if (rowSet['IsActive'] && is_provider) {
          return goog.soy.renderAsElement(bitex.ui.LineOfCreditTable.templates.btnGroup, {
            button1: 'info',
            button2: 'disable',
            dataRow: data_row
          });
        } else if (!rowSet['IsActive'] && is_provider) {
          return goog.soy.renderAsElement(bitex.ui.LineOfCreditTable.templates.btnGroup, {
            button1: 'info',
            button2: 'enable',
            dataRow: data_row
          });
        } else if (rowSet['IsActive'] && is_taker) {
          return goog.soy.renderAsElement(bitex.ui.LineOfCreditTable.templates.btnGroup, {
            button1: 'info',
            button2: 'get',
            button3: 'payback',
            dataRow: data_row
          });
        } else {
          return goog.soy.renderAsElement(bitex.ui.LineOfCreditTable.templates.btnInfo, {
            dataRow: data_row
          });
        }
      },
      'classes': function() { return goog.getCssName(bitex.ui.LineOfCreditTable.CSS_CLASS, 'date-time'); }
    }
  ];

  /**
   * @desc deposit table title
   */
  var MSG_LINE_OF_CREDIT_TITLE  = goog.getMsg('Line of Credit');

  var options = {
    'title': MSG_LINE_OF_CREDIT_TITLE,
    'showSearch': false,
    'rowIDFn':this.getRowId,
    'columns': grid_columns
  };

  bitex.ui.DataGrid.call(this,  options , opt_domHelper);
};
goog.inherits(bitex.ui.LineOfCreditTable, bitex.ui.DataGrid);



/**
 * Events fired by Api
 * @enum {string}
 */
bitex.ui.LineOfCreditTable.EventType = {
  INFO: 'line_of_credit_info',
  DISABLE: 'line_of_credit_disable',
  ENABLE: 'line_of_credit_enable',
  GET: 'line_of_credit_get',
  PAYBACK: 'line_of_credit_payback'
};

/**
 * @type {Object}
 */
bitex.ui.LineOfCreditTable.prototype.line_of_credit_;

/** @override */
bitex.ui.LineOfCreditTable.prototype.enterDocument = function() {
  goog.base(this, 'enterDocument');

  var handler = this.getHandler();
  handler.listen(this.getElement(), goog.events.EventType.CLICK, this.onBtnClick_);
};

/**
 * @returns {Object}
 */
bitex.ui.LineOfCreditTable.prototype.getLineOfCredit = function() {
  return this.line_of_credit_;
};


/**
 * @param {goog.event.Event} e
 * @private
 */
bitex.ui.LineOfCreditTable.prototype.onBtnClick_ = function(e) {
  var el = e.target;

  var action_element = goog.dom.getAncestor(e.target, function(node) {
    if (goog.isFunction(node.getAttribute) && goog.isDefAndNotNull(node.getAttribute('data-row'))) {
      return true;
    }
  }, true );

  if (!goog.isDefAndNotNull(action_element)) {
    return;
  }

  if (!goog.isDefAndNotNull(action_element.getAttribute('data-row'))) {
    return;
  }

  this.line_of_credit_ = goog.json.parse(action_element.getAttribute('data-row'));

  if (goog.dom.classes.has(action_element, 'btn-line-of-credit-info' )) {
    this.dispatchEvent(bitex.ui.LineOfCreditTable.EventType.INFO);
  } else if (goog.dom.classes.has(action_element, 'btn-line-of-credit-disable' )) {
    this.dispatchEvent(bitex.ui.LineOfCreditTable.EventType.DISABLE);
  } else if (goog.dom.classes.has(action_element, 'btn-line-of-credit-enable' )) {
    this.dispatchEvent(bitex.ui.LineOfCreditTable.EventType.ENABLE);
  } else if (goog.dom.classes.has(action_element, 'btn-line-of-credit-get' )) {
    this.dispatchEvent(bitex.ui.LineOfCreditTable.EventType.GET);
  } else if (goog.dom.classes.has(action_element, 'btn-line-of-credit-payback' )) {
    this.dispatchEvent(bitex.ui.LineOfCreditTable.EventType.PAYBACK);
  }
};

/**
 * @type {string}
 */
bitex.ui.LineOfCreditTable.CSS_CLASS = goog.getCssName('line-of-credit-table');

/** @inheritDoc */
bitex.ui.LineOfCreditTable.prototype.getCssClass = function() {
  return bitex.ui.LineOfCreditTable.CSS_CLASS;
};

/**
 * @param {Object} row_set
 * @return {string}
 */
bitex.ui.LineOfCreditTable.prototype.getRowId = function(row_set) {
  return this.makeId(row_set['ID'] );
};


goog.ui.registry.setDecoratorByClassName(
    bitex.ui.LineOfCreditTable.CSS_CLASS,
    function() {
      return new bitex.ui.LineOfCreditTable();
    });
