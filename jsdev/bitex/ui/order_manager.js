goog.provide('bitex.ui.OrderManager');
goog.provide('bitex.ui.OrderManager.Status');
goog.provide('bitex.ui.OrderManagerEvent');

goog.require('bitex.ui.OrderManager.templates');

goog.require('goog.dom');
goog.require('goog.object');
goog.require('bitex.ui.DataGrid');
goog.require('goog.ui.registry');

goog.require('bitex.util');
goog.require('goog.dom.TagName');


/**
 * @desc Column ID of the Order Manager
 */
var MSG_ORDER_MANAGER_ACTIVITY_TABLE_COLUMN_ID = goog.getMsg('ID');

/**
 * @desc Column Status of the Order Manager
 */
var MSG_ORDER_MANAGER_ACTIVITY_TABLE_COLUMN_DESCRIPTION = goog.getMsg('Description');

/**
 * @desc Column Status of the Order Manager
 */
var MSG_ORDER_MANAGER_ACTIVITY_TABLE_COLUMN_STATUS = goog.getMsg('Status');

/**
 * @desc Column Side of the Order Manager
 */
var MSG_ORDER_MANAGER_ACTIVITY_TABLE_COLUMN_SIDE = goog.getMsg('Side');

/**
 * @desc Column Qty of the Order Manager
 */
var MSG_ORDER_MANAGER_ACTIVITY_TABLE_COLUMN_QTY = goog.getMsg('Qty');

/**
 * @desc Column Price of the Order Manager
 */
var MSG_ORDER_MANAGER_ACTIVITY_TABLE_COLUMN_PRICE = goog.getMsg('Price');

/**
 * @desc Column  Leaves Qty of the Order Manager
 */
var MSG_ORDER_MANAGER_ACTIVITY_TABLE_COLUMN_LEAVES_QTY = goog.getMsg('Leaves Qty');

/**
 * @desc Column  Cum Qty of the Order Manager
 */
var MSG_ORDER_MANAGER_ACTIVITY_TABLE_COLUMN_CUM_QTY = goog.getMsg('Cum Qty');

/**
 * @desc Column Average Price of the Order Manager
 */
var MSG_ORDER_MANAGER_ACTIVITY_TABLE_COLUMN_AVG_PX = goog.getMsg('Average Price');

/**
 * @desc Column Volume Price of the Order Manager
 */
var MSG_ORDER_MANAGER_ACTIVITY_TABLE_COLUMN_VOLUME = goog.getMsg('Total');

/**
 * @desc Column Order Date of the Order Manager
 */
var MSG_ORDER_MANAGER_ACTIVITY_TABLE_COLUMN_ORDER_DATE = goog.getMsg('Date/Time');

/**
 * @desc Column Actions of the Order Manager
 */
var MSG_ORDER_MANAGER_ACTIVITY_TABLE_COLUMN_ACTIONS = goog.getMsg('Actions');

/**
 * @desc Column Buy Side of the Order Manager
 */
var MSG_ORDER_MANAGER_ACTIVITY_TABLE_COLUMN_SIDE_BUY = goog.getMsg('Buy');

/**
 * @desc Column Sell Side of the Order Manager
 */
var MSG_ORDER_MANAGER_ACTIVITY_TABLE_COLUMN_SIDE_SELL = goog.getMsg('Sell');

/**
 * @desc cancel order button on order manager component
 */
var MSG_ORDER_MANAGER_ACTION_CANCEL_ORDER = goog.getMsg('cancel');


/**
 * @desc Order Manager Status description
 */
var MSG_ORDER_MANAGER_STATUS_PENDING = goog.getMsg('Pending');

/**
 * @desc Order Manager Status description
 */
var MSG_ORDER_MANAGER_STATUS_NEW = goog.getMsg('New');

/**
 * @desc Order Manager Status description
 */
var MSG_ORDER_MANAGER_STATUS_PARTIALL_FILL = goog.getMsg('Partially filled');

/**
 * @desc Order Manager Status description
 */
var MSG_ORDER_MANAGER_STATUS_FILL = goog.getMsg('Filled');

/**
 * @desc Order Manager Status description
 */
var MSG_ORDER_MANAGER_STATUS_CXL = goog.getMsg('Cancelled');

/**
 * @desc Order Manager Status description
 */
var MSG_ORDER_MANAGER_STATUS_REJECTED = goog.getMsg('Rejected');


/**
 * @param {string=} opt_mode. Defaults to advanced mode
 * @param {boolean=} opt_openOrdersTitle.
 * @param {string=} opt_filterOrder
 * @param {number=} opt_blinkDelay. Defaults to 700 milliseconds
 * @param {goog.dom.DomHelper=} opt_domHelper
 * @constructor
 * @extends {goog.ui.Component}
 */
bitex.ui.OrderManager = function(opt_mode, opt_openOrdersTitle, opt_filterOrder, opt_blinkDelay, opt_domHelper) {
  this.mode_ = opt_mode || 'advanced';
  this.blink_delay_ = opt_blinkDelay || 700;
  this.filter_order_ = opt_filterOrder || 'OECA';


  var grid_columns_simple = [
    {
      'property': 'OrderDate',
      'label': MSG_ORDER_MANAGER_ACTIVITY_TABLE_COLUMN_ORDER_DATE,
      'sortable': false,
      'formatter': function(s, rowSet) {
        return  bitex.util.convertServerUTCDateTimeStrToTimestamp(s.substr(0, 10), s.substr(11)).toLocaleString();
      },
      'classes': function() { return goog.getCssName(bitex.ui.OrderManager.CSS_CLASS, 'order-date'); }
    },{
      'property': 'Side',
      'label': MSG_ORDER_MANAGER_ACTIVITY_TABLE_COLUMN_DESCRIPTION,
      'sortable': false,
      'formatter': function(s){ return bitex.ui.OrderManager.Status[s]; },
      'classes': function() { return goog.getCssName(bitex.ui.OrderManager.CSS_CLASS, 'description'); }
    },{
      'property': 'OrdStatus',
      'label': MSG_ORDER_MANAGER_ACTIVITY_TABLE_COLUMN_STATUS,
      'sortable': false,
      'formatter': function(s){ return bitex.ui.OrderManager.Status[s]; },
      'classes': function() { return goog.getCssName(bitex.ui.OrderManager.CSS_CLASS, 'status'); }
    },{
      'property': 'AvgPx',
      'label': MSG_ORDER_MANAGER_ACTIVITY_TABLE_COLUMN_PRICE,
      'sortable': false,
      'classes': function() { return goog.getCssName(bitex.ui.OrderManager.CSS_CLASS, 'avg-price'); }
    },{
      'property': 'Volume',
      'label': MSG_ORDER_MANAGER_ACTIVITY_TABLE_COLUMN_VOLUME,
      'sortable': false,
      'classes': function() { return goog.getCssName(bitex.ui.OrderManager.CSS_CLASS, 'volume'); }
    },{
      'property': 'ClOrdID',
      'label': MSG_ORDER_MANAGER_ACTIVITY_TABLE_COLUMN_ACTIONS,
      'sortable': false,
      'formatter': function(id, row_set_obj){
        var attributes = { dataClientOrderId: id, dataOrderId:null } ;

        if ( goog.isDefAndNotNull(row_set_obj) ) {
          attributes = { dataClientOrderId: id, dataOrderId:row_set_obj["OrderID"]} ;
          if (row_set_obj["LeavesQty"] == 0) {
            return "";
          }
        }

        return goog.soy.renderAsElement(bitex.ui.OrderManager.templates.CancelOrder, attributes);
      },
      'classes': function() { return goog.getCssName(bitex.ui.OrderManager.CSS_CLASS, 'actions'); }
    }
  ];

  var grid_columns_advanced = [
     {
      'property': 'OrderDate',
      'label': MSG_ORDER_MANAGER_ACTIVITY_TABLE_COLUMN_ORDER_DATE,
      'sortable': false,
      'formatter': function(s, rowSet) {
        return  bitex.util.convertServerUTCDateTimeStrToTimestamp(s.substr(0, 10), s.substr(11)).toLocaleString();
      },
      'classes': function() { return goog.getCssName(bitex.ui.OrderManager.CSS_CLASS, 'order-date'); }
    },{
      'property': 'OrdStatus',
      'label': MSG_ORDER_MANAGER_ACTIVITY_TABLE_COLUMN_STATUS,
      'sortable': false,
      'formatter': function(s){ return bitex.ui.OrderManager.Status[s]; },
      'classes': function() { return goog.getCssName(bitex.ui.OrderManager.CSS_CLASS, 'status'); }
    },{
      'property': 'Side',
      'label': MSG_ORDER_MANAGER_ACTIVITY_TABLE_COLUMN_SIDE,
      'sortable': false,
      'formatter': function(s){
        switch(s){
          case '1': return MSG_ORDER_MANAGER_ACTIVITY_TABLE_COLUMN_SIDE_BUY;
          case '2': return MSG_ORDER_MANAGER_ACTIVITY_TABLE_COLUMN_SIDE_SELL;
        }
        return '';
      },
      'classes': function() { return goog.getCssName(bitex.ui.OrderManager.CSS_CLASS, 'side'); }
    },{
      'property': 'OrderQty',
      'label': MSG_ORDER_MANAGER_ACTIVITY_TABLE_COLUMN_QTY,
      'sortable': false,
      'formatter': function(s){return (s/1e8).toFixed(8);},
      'classes': function() { return goog.getCssName(bitex.ui.OrderManager.CSS_CLASS, 'order-qty'); }
    },{
      'property': 'Price',
      'label': MSG_ORDER_MANAGER_ACTIVITY_TABLE_COLUMN_PRICE,
      'sortable': false,
      'formatter': function(s){return (s/1e8).toFixed(5);},
      'classes': function() { return goog.getCssName(bitex.ui.OrderManager.CSS_CLASS, 'price'); }
    },{
      'property': 'LeavesQty',
      'label': MSG_ORDER_MANAGER_ACTIVITY_TABLE_COLUMN_LEAVES_QTY,
      'sortable': false,
      'formatter': function(s){return (s/1e8).toFixed(8);},
      'classes': function() { return goog.getCssName(bitex.ui.OrderManager.CSS_CLASS, 'leaves_qty'); }
    },{
      'property': 'CumQty',
      'label': MSG_ORDER_MANAGER_ACTIVITY_TABLE_COLUMN_CUM_QTY,
      'sortable': false,
      'formatter': function(s){return (s/1e8).toFixed(8);},
      'classes': function() { return goog.getCssName(bitex.ui.OrderManager.CSS_CLASS, 'cum-qty'); }
    },{
      'property': 'AvgPx',
      'label': MSG_ORDER_MANAGER_ACTIVITY_TABLE_COLUMN_AVG_PX,
      'sortable': false,
      'formatter': function(s){return (s/1e8).toFixed(5);},
      'classes': function() { return goog.getCssName(bitex.ui.OrderManager.CSS_CLASS, 'avg-price'); }
    },{
      'property': 'ClOrdID',
      'label': MSG_ORDER_MANAGER_ACTIVITY_TABLE_COLUMN_ACTIONS,
      'sortable': false,
      'formatter': function(id, row_set_obj){
        var attributes = { dataClientOrderId: id, dataOrderId:null } ;

        if ( goog.isDefAndNotNull(row_set_obj) ) {
          attributes = { dataClientOrderId: id, dataOrderId:row_set_obj["OrderID"]} ;
          if (row_set_obj["LeavesQty"] == 0) {
            return "";
          }
        }

        return goog.soy.renderAsElement(bitex.ui.OrderManager.templates.CancelOrder, attributes);
      },
      'classes': function() { return goog.getCssName(bitex.ui.OrderManager.CSS_CLASS, 'actions'); }
    }
  ];


  /** @desc Order manager table tittle */
  var MSG_ORDER_MANAGER_TABLE_TITLE = goog.getMsg('My orders');

  /** @desc Order manager table tittle */
  var MSG_ORDER_MANAGER_TABLE_TITLE_OPEN_ORDERS = goog.getMsg('My open orders');


  /**
   * @desc All option on the Orders filters
   */
  var MSG_ORDER_MANAGER_TABLE_BUTTON_FILTER_ALL = goog.getMsg('All');

  /**
   * @desc Open Orders option on the Orders filters
   */
  var MSG_ORDER_MANAGER_TABLE_BUTTON_FILTER_OPEN_ORDERS = goog.getMsg('Open');

  /**
   * @desc Open Orders option on the Orders filters
   */
  var MSG_ORDER_MANAGER_TABLE_BUTTON_FILTER_FILLED = goog.getMsg('Filled');

  /**
   * @desc Cancelled option on the Orders filters
   */
  var MSG_ORDER_MANAGER_TABLE_BUTTON_FILTER_CANCELED = goog.getMsg('Cancelled');


  var options = {
    'rowIDFn': this.getRowID ,
    'rowClassFn':this.getRowClass,
    'columns': grid_columns_advanced,
    'title': MSG_ORDER_MANAGER_TABLE_TITLE,
    'showSearch': false,
    'buttonFilters': []
  };

  var getFilterButton = function(button_type){
    switch (button_type){
      case 'A':
        return { 'label': MSG_ORDER_MANAGER_TABLE_BUTTON_FILTER_ALL,         'value': 'all'};
      case 'O':
        return { 'label': MSG_ORDER_MANAGER_TABLE_BUTTON_FILTER_OPEN_ORDERS, 'value': 'has_leaves_qty eq 1'};
      case 'E':
        return { 'label': MSG_ORDER_MANAGER_TABLE_BUTTON_FILTER_FILLED,      'value': 'has_cum_qty eq 1'};
      case 'C':
        return { 'label': MSG_ORDER_MANAGER_TABLE_BUTTON_FILTER_CANCELED,    'value': 'has_cxl_qty eq 1'};
    }
  };

  for (var i in this.filter_order_) {
    var button_filter_type =  this.filter_order_[i];
    options['buttonFilters'].push(getFilterButton(button_filter_type));
  }

  if (opt_openOrdersTitle) {
    options['title'] = MSG_ORDER_MANAGER_TABLE_TITLE_OPEN_ORDERS;
  }

  if (this.mode_ == 'simple') {
    options['columns'] = grid_columns_simple;
  }

  bitex.ui.DataGrid.call(this,  options , opt_domHelper);
};
goog.inherits(bitex.ui.OrderManager, bitex.ui.DataGrid);

/**
 * @enum {string}
 */
bitex.ui.OrderManager.Status = {
  'A': MSG_ORDER_MANAGER_STATUS_PENDING,
  '0': MSG_ORDER_MANAGER_STATUS_NEW,
  '1': MSG_ORDER_MANAGER_STATUS_PARTIALL_FILL,
  '2': MSG_ORDER_MANAGER_STATUS_FILL,
  '4': MSG_ORDER_MANAGER_STATUS_CXL,
  '8': MSG_ORDER_MANAGER_STATUS_REJECTED
};

/**
 * Events fired by Grid
 * @enum {string}
 */
bitex.ui.OrderManager.EventType = {
  CANCEL: 'cancel'
};

/**
 * @type {number}
 * @private
 */
bitex.ui.OrderManager.prototype.blink_delay_;

/**
 * @type {string}
 * @private
 */
bitex.ui.OrderManager.prototype.mode_;

/**
 * @type {string}
 */
bitex.ui.OrderManager.CSS_CLASS = goog.getCssName('order-manager');

/** @inheritDoc */
bitex.ui.OrderManager.prototype.getCssClass = function() {
  return bitex.ui.OrderManager.CSS_CLASS;
};

/**
 * @param {Object} row_set
 * @return {string}
 */
bitex.ui.OrderManager.prototype.getRowID = function(row_set){
  return this.getId() + '_' + row_set['ClOrdID'];
};

/**
 * @param {Object} row_set
 * @return {string}
 */
bitex.ui.OrderManager.prototype.getRowClass = function(row_set) {
  var status =  row_set['OrdStatus'];

  var class_status;
  switch(status) {
    case 'A':
      class_status = goog.getCssName(bitex.ui.OrderManager.CSS_CLASS, 'pending');
      break;
    case '0':
      class_status = goog.getCssName(bitex.ui.OrderManager.CSS_CLASS, 'new');
      break;
    case '1':
      class_status = goog.getCssName(bitex.ui.OrderManager.CSS_CLASS, 'partial');
      break;
    case '2':
      class_status = goog.getCssName(bitex.ui.OrderManager.CSS_CLASS, 'fill');
      break;
    case '4':
      var cum_qty = row_set['CumQty'];
      if (goog.isDefAndNotNull(cum_qty) && cum_qty > 0 ) {
        class_status = goog.getCssName(bitex.ui.OrderManager.CSS_CLASS, 'fill');
      } else {
        class_status = goog.getCssName(bitex.ui.OrderManager.CSS_CLASS, 'cancel');
      }
      break;
    case '8':
      class_status = goog.getCssName(bitex.ui.OrderManager.CSS_CLASS, 'rejected');
      break;
  }

  return class_status;
};

/**
 * @param {string} client_order_id
 */
bitex.ui.OrderManager.prototype.removeOrder = function(client_order_id) {
  var rowId = this.getId() + '_' + client_order_id;

  var el = goog.dom.getElement(rowId);
  if (goog.isDefAndNotNull(el)) {
    goog.dom.removeNode(el);
  }
};

/**
 * @param  {Object} execution_report_msg
 */
bitex.ui.OrderManager.prototype.processExecutionReport = function(execution_report_msg){
  this.insertOrUpdateRecord(execution_report_msg, 0);
};


/** @inheritDoc */
bitex.ui.OrderManager.prototype.enterDocument = function() {
  goog.base(this, 'enterDocument');

  var handler = this.getHandler();

  handler.listen(this.getElement(), 'click', function(e){
    var order_id = e.target.getAttribute('data-order-id');
    if (goog.isDefAndNotNull(order_id)) {
      this.dispatchEvent( new bitex.ui.OrderManagerEvent (bitex.ui.OrderManager.EventType.CANCEL, order_id) );
    } else {
      var client_order_id = e.target.getAttribute('data-client-order-id');
      this.dispatchEvent( new bitex.ui.OrderManagerEvent (bitex.ui.OrderManager.EventType.CANCEL, undefined, client_order_id) );
    }
  });
};


/**
 *
 * @param {string} type
 * @param {=string} opt_order_id
 * @param {=string} opt_client_order_id
 * @extends {goog.events.Event}
 * @constructor
 */
bitex.ui.OrderManagerEvent = function(type, opt_order_id, opt_client_order_id) {
  goog.events.Event.call(this, type);

  /**
   * @type {string}
   */
  this.order_id = opt_order_id;

  /**
   * @type {string}
   */
  this.client_order_id = opt_client_order_id;

};
goog.inherits(bitex.ui.OrderManagerEvent, goog.events.Event);


goog.ui.registry.setDecoratorByClassName(
    bitex.ui.OrderManager.CSS_CLASS,
    function() {
      return new bitex.ui.OrderManager();
    });
