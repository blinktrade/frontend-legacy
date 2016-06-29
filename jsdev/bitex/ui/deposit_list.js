goog.provide('bitex.ui.DepositList');

goog.require('goog.dom');
goog.require('goog.object');
goog.require('bitex.ui.DataGrid');
goog.require('goog.ui.registry');

goog.require('bitex.ui.DepositList.templates');
goog.require('goog.dom.TagName');
goog.require('bitex.util');

/**
 * @desc Column ID of the Deposit List
 */
var MSG_DEPOSIT_TABLE_COLUMN_ID = goog.getMsg('ID');

/**
 * @desc Column Status of the Deposit List
 */
var MSG_DEPOSIT_TABLE_COLUMN_STATUS = goog.getMsg('Status');

/**
 * @desc Column Currency of the Deposit List
 */
var MSG_DEPOSIT_TABLE_COLUMN_CURRENCY = goog.getMsg('Currency');

/**
 * @desc Column Amount of the Deposit List
 */
var MSG_DEPOSIT_TABLE_COLUMN_VALUE = goog.getMsg('Value');


/**
 * @desc Column Amount of the Deposit List
 */
var MSG_DEPOSIT_TABLE_COLUMN_PAID_VALUE = goog.getMsg('Paid Value');

/**
 * @desc Column Method of the Deposit List
 */
var MSG_DEPOSIT_TABLE_COLUMN_CTRL_NUMBER = goog.getMsg('Control Number');

/**
 * @desc Column Created of the Deposit List
 */
var MSG_DEPOSIT_TABLE_COLUMN_CREATED = goog.getMsg('Date/Hour');

/**
 * @desc Column Actions of the Deposit List
 */
var MSG_DEPOSIT_TABLE_COLUMN_ACTIONS = goog.getMsg('Actions');

/**
 * @desc Admin Column Despoit Method of the Deposit List
 */
var MSG_DEPOSIT_TABLE_COLUMN_DEPOSIT_METHOD = goog.getMsg('Method');

/**
 * @desc Column Detail of the Deposit List
 */
var MSG_DEPOSIT_TABLE_COLUMN_DETAIL = goog.getMsg('Details');

/**
 * @desc Column Username of the Deposit List
 */
var MSG_DEPOSIT_TABLE_COLUMN_USERNAME = goog.getMsg('Username');


/**
 * @desc Column Status of the Deposit List
 */
var MSG_DEPOSIT_TABLE_COLUMN_STATUS_PENDING = goog.getMsg('Pending');

/**
 * @desc Column Status of the Deposit List
 */
var MSG_DEPOSIT_TABLE_COLUMN_STATUS_UNCONFIRMED = goog.getMsg('Unconfirmed');

/**
 * @desc Column Status of the Deposit List
 */
var MSG_DEPOSIT_TABLE_COLUMN_STATUS_PROGRESS = goog.getMsg('In progress...');

/**
 * @desc Column Status of the Deposit List
 */
var MSG_DEPOSIT_TABLE_COLUMN_STATUS_PROGRESS_PRE_APPROVED = goog.getMsg('Pre-approved');


/**
 * @desc Column Status of the Deposit List
 */
var MSG_DEPOSIT_TABLE_COLUMN_STATUS_COMPLETED = goog.getMsg('Completed');

/**
 * @desc Column Status of the Deposit List
 */
var MSG_DEPOSIT_TABLE_COLUMN_STATUS_CANCELLED = goog.getMsg('Cancelled');

/**
 * @param {Array.<Object>} crypto_currencies_def
 * @param {boolean=} opt_broker_mode. Default to false
 * @param {boolean=} opt_show_customers. Default to false
 * @param {string=} opt_rest_url
 * @param {goog.dom.DomHelper=} opt_domHelper
 * @constructor
 * @extends {goog.ui.Component}
 */
bitex.ui.DepositList = function( crypto_currencies_def, opt_broker_mode, opt_show_customers,opt_rest_url ,opt_domHelper) {
  var broker_mode = false;
  if (opt_broker_mode === true) {
    broker_mode = opt_broker_mode;
  }

  var show_customers = false;
  if (opt_show_customers === true ) {
    show_customers = opt_show_customers;
  }

  var grid_columns = [
    {
      'property': 'Created',
      'label': MSG_DEPOSIT_TABLE_COLUMN_CREATED,
      'sortable': broker_mode,
      'formatter': function(s, rowSet) {
        return  bitex.util.convertServerUTCDateTimeStrToTimestamp(s.substr(0, 10), s.substr(11)).toLocaleString();
      },
      'classes': function() { return goog.getCssName(bitex.ui.DepositList.CSS_CLASS, 'created'); }
    },{
      'property': 'Status',
      'label': MSG_DEPOSIT_TABLE_COLUMN_STATUS,
      'sortable': false,
      'formatter': function(s, rowSet){

        var progress_message = MSG_DEPOSIT_TABLE_COLUMN_STATUS_PROGRESS;
        if ( rowSet['State'] === 'PROGRESS_CREDIT_GIVEN' ) {
          s = "24";
          progress_message = MSG_DEPOSIT_TABLE_COLUMN_STATUS_PROGRESS_PRE_APPROVED;
        }

        var number_of_necessary_confirmations = null;
        if (rowSet['Type'] == 'CRY' ) {
          // search for currency
          var crypto_currency_def = goog.array.find(crypto_currencies_def,function(c){
            if (c['CurrencyCode'] == rowSet['Currency']  ) {
              return true;
            }
          });

          if (goog.isDefAndNotNull(crypto_currency_def)) {
            var confirmation_info_array;
            if (goog.isDefAndNotNull(rowSet['PaidValue']) && rowSet['PaidValue'] > 0 ) {
              confirmation_info_array = goog.array.find( crypto_currency_def['Confirmations'], function(conf_info){
                if ( rowSet['PaidValue'] >= conf_info[0]  &&  rowSet['PaidValue'] < conf_info[1] ) {
                  return true;
                }
              });
            }
            if (goog.isDefAndNotNull(confirmation_info_array)) {
              number_of_necessary_confirmations = confirmation_info_array[2];

              var number_of_confirmations = 0;
              if (goog.isDef(rowSet['Data']) && goog.isDef(rowSet['Data']['Confirmations'] ) ) {
                number_of_confirmations = rowSet['Data']['Confirmations'] ;
              }


              /**
               * @desc status message for double spent on crypto coin deposits
               */
              var MSG_DOUBLE_SPENT_MESSAGE_FOR_CRYPTO_CURRENCY = goog.getMsg('Double spent');

              /**
               * @desc status message for confirming crypto coin deposits
               */
              var MSG_PROGRESS_MESSAGE_FOR_CRYPTO_CURRENCY =
                  goog.getMsg('{$confirmations} of {$necessaryconfirmations} confirmations',{
                    'confirmations': number_of_confirmations,
                    'necessaryconfirmations': number_of_necessary_confirmations
                  });

              if (number_of_confirmations < 0) {
                progress_message = MSG_DOUBLE_SPENT_MESSAGE_FOR_CRYPTO_CURRENCY;
              } else {
                progress_message = MSG_PROGRESS_MESSAGE_FOR_CRYPTO_CURRENCY;
              }
            }
          }
        }

        var status = function(s) {
          switch(s){
            case '0':  return [''          , MSG_DEPOSIT_TABLE_COLUMN_STATUS_UNCONFIRMED];
            case '1':  return ['warning'   , MSG_DEPOSIT_TABLE_COLUMN_STATUS_PENDING];
            case '2':  return ['info'      , progress_message];
            case '24': return ['info'      , progress_message];
            case '4':  return ['success'   , MSG_DEPOSIT_TABLE_COLUMN_STATUS_COMPLETED];
            case '8':  return ['important' , MSG_DEPOSIT_TABLE_COLUMN_STATUS_CANCELLED];
          }
          return ['',''];
        };
        var label_class_text = status(s);
        return goog.soy.renderAsElement(bitex.ui.DepositList.templates.LabelStatus, {
          label: label_class_text[0] || "default",
          status: label_class_text[1]
        });
      },
      'classes': function() { return goog.getCssName(bitex.ui.DepositList.CSS_CLASS, 'status'); }
    },{
      'property': 'Value',
      'label': MSG_DEPOSIT_TABLE_COLUMN_VALUE,
      'sortable': false,
      'classes': function() { return goog.getCssName(bitex.ui.DepositList.CSS_CLASS, 'value'); }
    },{
      'property':'ControlNumber',
      'label': MSG_DEPOSIT_TABLE_COLUMN_CTRL_NUMBER,
      'sortable': false,
      'formatter': function(value, rowSet) {
        switch (rowSet['Type'] ) {
          case 'CRY':

            if (rowSet['Currency'] == 'BTC') {

              var blockchain_address = 'https://blockchain.info/address/'  + rowSet['Data']['InputAddress'];
              if (goog.isDefAndNotNull(rowSet['Data']['InputAddress'])){
                switch (rowSet['Data']['InputAddress'][0]) {
                  case 'm':
                  case 'n':
                  case '2':
                  case '9':
                  case 'c':
                    blockchain_address = 'https://live.blockcypher.com/btc-testnet/address/' + rowSet['Data']['InputAddress'];
                }
              }

              return goog.soy.renderAsElement(bitex.ui.DepositList.templates.InputAddress, {
                address: rowSet['Data']['InputAddress'],
                blockchainAddress: blockchain_address
              });
            }

          default:
            return '' + value;
        }
      },
      'classes': function() { return goog.getCssName(bitex.ui.DepositList.CSS_CLASS, 'method'); }
    },{
      'property': 'Data',
      'label': MSG_DEPOSIT_TABLE_COLUMN_DETAIL,
      'sortable': false,
      'formatter': function(value, rowSet){
        var data_row = goog.json.serialize( rowSet );

        /**
         * @desc Deposit delete button label in the  broker's deposit list
         */
        var MSG_DEPOSIT_TABLE_DETAILS_COLUMN_BTN_VIEW  = goog.getMsg('view');

        /**
         * @desc Deposit delete button label in the  broker's deposit list
         */
        var MSG_DEPOSIT_TABLE_DETAILS_COLUMN_BTN_QR  = goog.getMsg('qr');

        /**
         * @desc Deposit delete button label in the  broker's deposit list
         */
        var MSG_DEPOSIT_TABLE_DETAILS_COLUMN_BTN_TRANSACTION  = goog.getMsg('blockchain');

        var btn_view;
        if (goog.object.containsKey(rowSet, 'Data') && goog.object.containsKey(rowSet['Data'], 'DepositReceipt' ) ) {
          btn_view = goog.soy.renderAsElement(bitex.ui.DepositList.templates.btnShowReceipt, {
            dataRow: data_row
          });
        } else {
          btn_view = goog.soy.renderAsElement(bitex.ui.DepositList.templates.btnDepositDetails, {
            url: opt_rest_url + '/get_deposit?deposit_id=' + rowSet['DepositID']
          });
        }

        btn_qr = goog.soy.renderAsElement(bitex.ui.DepositList.templates.btnShowQRCode, {
          dataRow: data_row
        });

        switch (rowSet['Type'] ) {
          case 'CRY':
            switch( rowSet['Status'] ) {
              case '0':
              case '1':
                return btn_qr;
              case '2':
                if ( rowSet['State'] === 'PROGRESS_CREDIT_GIVEN' ) {
                  return goog.soy.renderAsElement(bitex.ui.DepositList.templates.LabelStatus, {
                    label: "success",
                    status: MSG_DEPOSIT_TABLE_COLUMN_STATUS_PROGRESS_PRE_APPROVED
                  });
                }

                var progress_bar_el;

                var number_of_node_count = 0;
                var confidence_factor = 0;
                if (goog.isDef(rowSet['Data'])){
                  if (goog.isDef(rowSet['Data']['NodeCount'] ) ) {
                    number_of_node_count = rowSet['Data']['NodeCount'];
                  }
                  if (goog.isDef(rowSet['Data']['Confidence'] ) ) {
                    confidence_factor = rowSet['Data']['Confidence'];
                  }
                }

                if (number_of_node_count > 0 || confidence_factor > 0) {
                  confidence_factor -= 80;
                  if (confidence_factor < 0) {
                    confidence_factor = 0;
                  }
                  confidence_factor = (confidence_factor / 20) * 100;

                  progress_bar_el = goog.soy.renderAsElement(bitex.ui.DepositList.templates.NodesProgressBar, {
                    count: number_of_node_count,
                    confidence: confidence_factor
                  });
                }

                if (goog.isDefAndNotNull(progress_bar_el)) {
                  return progress_bar_el;
                }

              case '4':
              case '8':
                return '';
            }
            break;

          case 'BBS':
          case 'WTP':
          case 'DTP':
            switch( rowSet['Status'] ) {
              case '0':
              case '1':
              case '2':
              case '4':
              case '8':
                return btn_view;
            }
        }

      },
      'classes': function() { return goog.getCssName(bitex.ui.DepositList.CSS_CLASS, 'details');}
    }
  ];


  /**
   * @desc Deposit delete button label in the  broker's deposit list
   */
  var MSG_DEPOSIT_TABLE_DETAILS_COLUMN_BTN_CANCEL  = goog.getMsg('cancel');

  /**
   * @desc Deposit delete button label in the  broker's deposit list
   */
  var MSG_DEPOSIT_TABLE_DETAILS_COLUMN_BTN_UPLOAD  = goog.getMsg('send receipt');

  /**
   * @desc Deposit instantaneous button label in the deposit list
   */
  var MSG_DEPOSIT_TABLE_INSTANTANEOUS_BTN = goog.getMsg('Pre Approve');


  /**
   * @desc Withdraw progress button label in the  broker's withdraw list
   */
  var MSG_DEPOSIT_TABLE_COLUMN_ACTION_PROGRESS = goog.getMsg('Set in progress');

  /**
   * @desc Withdraw progress button label in the  broker's withdraw list
   */
  var MSG_DEPOSIT_TABLE_COLUMN_ACTION_COMPLETE = goog.getMsg('Set as complete');


  if (show_customers) {
    grid_columns.push({
      'property': 'Username',
      'label': MSG_DEPOSIT_TABLE_COLUMN_USERNAME,
      'sortable': false,
      'classes': function() { return goog.getCssName(bitex.ui.DepositList.CSS_CLASS, 'username'); }
    });
  }

  if (broker_mode ){
    grid_columns.push({
      'property': 'DepositMethodName',
      'label': MSG_DEPOSIT_TABLE_COLUMN_DEPOSIT_METHOD,
      'sortable': false,
      'classes': function() { return goog.getCssName(bitex.ui.DepositList.CSS_CLASS, 'deposit_method'); }
    }, {
      'property' : 'DepositID',
      'label': MSG_DEPOSIT_TABLE_COLUMN_ACTIONS,
      'sortable': false,
      'formatter': function(value, rowSet){
        var data_row = goog.json.serialize(rowSet);

        var btn_cancel = goog.soy.renderAsElement(bitex.ui.DepositList.templates.btnBrokerDespositCancel, {
          dataRow: data_row
        });

        var btn_progress = goog.soy.renderAsElement(bitex.ui.DepositList.templates.btnBrokerDespositProgress, {
          dataRow: data_row
        });

        var btn_complete = goog.soy.renderAsElement(bitex.ui.DepositList.templates.btnBrokerDespositComplete, {
          dataRow: data_row
        });

        var btn_kyc;
        if (goog.object.containsKey(rowSet, 'UserVerificationData') && goog.isDefAndNotNull(rowSet['UserVerificationData']) ) {
          btn_kyc = goog.soy.renderAsElement(bitex.ui.DepositList.templates.btnBrokerKYC, {
            userVerification: goog.json.serialize(rowSet['UserVerificationData'])
          });
        }

        switch (rowSet['Type']) {
          case 'CRY':
            switch(rowSet['Status']) {
              case '0':
              case '1':
                return btn_progress;
              case '2':
                return btn_complete;
              case '4':
                return '';
              case '8':
                return btn_progress;
            }
            break;

          default:
            if (goog.isDefAndNotNull(btn_kyc)) {
              var userVerificationData = goog.json.serialize(rowSet['UserVerificationData']);
              switch(rowSet['Status']) {
                case '0':
                  return goog.soy.renderAsElement(bitex.ui.DepositList.templates.btnGroup, {
                    button1: 'cancel',
                    button2: 'progress',
                    dataRow: data_row,
                    userVerification: userVerificationData
                  });
                case '1':
                  return goog.soy.renderAsElement(bitex.ui.DepositList.templates.btnGroup, {
                    button1: 'kyc',
                    button2: 'cancel',
                    button3: 'progress',
                    dataRow: data_row,
                    userVerification: userVerificationData
                  });
                case '2':
                  return goog.soy.renderAsElement(bitex.ui.DepositList.templates.btnGroup, {
                    button1: 'kyc',
                    button2: 'cancel',
                    button3: 'complete',
                    dataRow: data_row,
                    userVerification: userVerificationData
                  });
                case '4':
                  return goog.soy.renderAsElement(bitex.ui.DepositList.templates.btnGroup, {
                    button1: 'kyc',
                    button2: 'cancel',
                    dataRow: data_row,
                    userVerification: userVerificationData
                  });
                case '8':
                  return goog.soy.renderAsElement(bitex.ui.DepositList.templates.btnGroup, {
                    button1: 'kyc',
                    button2: 'progress',
                    dataRow: data_row,
                    userVerification: userVerificationData
                  });
              }
            } else {
              switch(rowSet['Status']) {
                case '0':
                  return goog.soy.renderAsElement(bitex.ui.DepositList.templates.btnGroup, {
                    button1: 'cancel',
                    button2: 'progress',
                    dataRow: data_row
                  });
                case '1':
                  return goog.soy.renderAsElement(bitex.ui.DepositList.templates.btnGroup, {
                    button1: 'cancel',
                    button2: 'progress',
                    dataRow: data_row
                  });
                case '2':
                  return goog.soy.renderAsElement(bitex.ui.DepositList.templates.btnGroup, {
                    button1: 'cancel',
                    button2: 'complete',
                    dataRow: data_row
                  });
                case '4':
                  return btn_cancel;
                case '8':
                  return btn_progress;
              }
            }
        }

      },
      'classes': function() { return goog.getCssName(bitex.ui.DepositList.CSS_CLASS, 'actions');}
    });
  } else {
    grid_columns.push({
      'property' : 'DepositID',
      'label': MSG_DEPOSIT_TABLE_COLUMN_ACTIONS,
      'sortable': false,
      'formatter':function(value, rowSet){
        var data_row = goog.json.serialize( rowSet );

        /**
         * @desc Request support action button label on deposit table
         */
        var MSG_DEPOSIT_TABLE_COLUMN_ACTION_REQUEST_SUPPORT = goog.getMsg('Where are my coins ?');

        var btn_upload = goog.soy.renderAsElement(bitex.ui.DepositList.templates.btnUpload, {
          dataRow: data_row
        });

        var btn_instantFiatDeposit = goog.soy.renderAsElement(bitex.ui.DepositList.templates.btnInstantFiatDeposit, {
          dataRow: data_row
        });

        switch (rowSet['Type'] ) {
          case 'CRY':
            switch(rowSet['Status']) {
              case '0':
              case '1':
              case '2':
              case '4':
              case '8':
                return '';
            }
            break;

          default:
            switch(rowSet['Status']) {
              case '0':
                return btn_upload;
              case '1':
                return btn_instantFiatDeposit;
              case '2':
              case '4':
              case '8':
                return '';
            }
        }
      },
      'classes': function() { return goog.getCssName(bitex.ui.DepositList.CSS_CLASS, 'actions');}
    });
  }

  this.selected_deposit_ = null;

  /**
   * @desc deposit table title
   */
  var MSG_DEPOSIT_LIST_TABLE_TITLE  = goog.getMsg('Deposits');

  /**
   * @desc placeholder for the search input text
   */
  var MSG_DEPOSIT_LIST_SEARCH_PLACEHOLDER = goog.getMsg('Search ...');

  /**
   * @desc All records button filter on deposit list
   */
  var MSG_DEPOSIT_LIST_BUTTON_FILTER_ALL = goog.getMsg('All');

  var buttonFilters = [
      { 'label': MSG_DEPOSIT_LIST_BUTTON_FILTER_ALL,          'value': 'all'},
      { 'label': MSG_DEPOSIT_TABLE_COLUMN_STATUS_UNCONFIRMED, 'value': '0' },
      { 'label': MSG_DEPOSIT_TABLE_COLUMN_STATUS_PENDING,     'value': '1' },
      { 'label': MSG_DEPOSIT_TABLE_COLUMN_STATUS_PROGRESS,    'value': '2' },
      { 'label': MSG_DEPOSIT_TABLE_COLUMN_STATUS_COMPLETED,   'value': '4' },
      { 'label': MSG_DEPOSIT_TABLE_COLUMN_STATUS_CANCELLED,   'value': '8' }
  ];

  if (broker_mode && show_customers){
    buttonFilters = [
      { 'label': MSG_DEPOSIT_TABLE_COLUMN_STATUS_PENDING,     'value': '1' },
      { 'label': MSG_DEPOSIT_TABLE_COLUMN_STATUS_PROGRESS,    'value': '2' },
      { 'label': MSG_DEPOSIT_TABLE_COLUMN_STATUS_COMPLETED,   'value': '4' },
      { 'label': MSG_DEPOSIT_TABLE_COLUMN_STATUS_CANCELLED,   'value': '8' },
      { 'label': MSG_DEPOSIT_TABLE_COLUMN_STATUS_UNCONFIRMED, 'value': '0' }
    ];
  }


  var options = {
    'rowIDFn':this.getRowId,
    'rowClassFn':this.getRowClass,
    'columns': grid_columns,
    'title': MSG_DEPOSIT_LIST_TABLE_TITLE,
    'showSearch': true,
    'searchPlaceholder':  MSG_DEPOSIT_LIST_SEARCH_PLACEHOLDER,
    'wrapperHeight': 600,
    'buttonFilters': buttonFilters
  };

  bitex.ui.DataGrid.call(this, options, opt_domHelper);
};
goog.inherits(bitex.ui.DepositList, bitex.ui.DataGrid);

/**
 * Events fired by Deposit
 * @enum {string}
 */
bitex.ui.DepositList.EventType = {
  CANCEL: 'deposit_cancel',
  PROGRESS: 'deposit_progress',
  COMPLETE: 'deposit_complete'
};

/**
 * @type {Object}
 */
bitex.ui.DepositList.prototype.selected_deposit_;

/**
 * @type {string}
 */
bitex.ui.DepositList.CSS_CLASS = goog.getCssName('deposit-list');

/** @inheritDoc */
bitex.ui.DepositList.prototype.getCssClass = function() {
  return bitex.ui.DepositList.CSS_CLASS;
};


/** @inheritDoc */
bitex.ui.DepositList.prototype.enterDocument = function() {
  goog.base(this, 'enterDocument');

  var handler = this.getHandler();
  handler.listen(this.getElement(), goog.events.EventType.CLICK, this.handleClick_);
};

/**
 * @return {Object}
 */
bitex.ui.DepositList.prototype.getDepositData = function() {
  return this.selected_deposit_;
};

/**
 * @return {string}
 */
bitex.ui.DepositList.prototype.getDepositID = function() {
  if (goog.isDefAndNotNull(this.selected_deposit_)){
    return this.selected_deposit_['DepositID'];
  }
  return "";
};

/**
 * @param {goog.events.Event} e
 * @private
 */
bitex.ui.DepositList.prototype.handleClick_ = function(e) {
  this.selected_deposit_ = goog.json.parse(e.target.getAttribute('data-row'));
  if (!goog.isDefAndNotNull(this.selected_deposit_)) {
    return;
  }

  if (goog.dom.classes.has(e.target, 'btn-deposit-complete' )) {
    this.dispatchEvent(bitex.ui.DepositList.EventType.COMPLETE);
  } else if (goog.dom.classes.has(e.target, 'btn-deposit-progress' )) {
    this.dispatchEvent(bitex.ui.DepositList.EventType.PROGRESS);
  } else if (goog.dom.classes.has(e.target, 'btn-deposit-cancel' )) {
    this.dispatchEvent(bitex.ui.DepositList.EventType.CANCEL);
  }

  this.selected_deposit_ = null;
};


/**
 * @param {Object} row_set
 * @return {string}
 */
bitex.ui.DepositList.prototype.getRowId = function(row_set) {
  return this.makeId(row_set['DepositID'] );
};

/**
 * @param {Object} row_set
 * @return {Array.<string>|string|Object}
 */
bitex.ui.DepositList.prototype.getRowClass = function(row_set) {
  var side =  row_set['Status'];

  var class_status;
  switch(side) {
    case '0':
      class_status = goog.getCssName(bitex.ui.DepositList.CSS_CLASS, 'unconfirmed');
      break;
    case '1':
      class_status = goog.getCssName(bitex.ui.DepositList.CSS_CLASS, 'pending');
      break;
    case '2':
      class_status = goog.getCssName(bitex.ui.DepositList.CSS_CLASS, 'processing');
      break;
    case '4':
      class_status = goog.getCssName(bitex.ui.DepositList.CSS_CLASS, 'complete');
      break;
    case '8':
      class_status = goog.getCssName(bitex.ui.DepositList.CSS_CLASS, 'cancelled');
      break;
  }
  return  class_status;
};


  goog.ui.registry.setDecoratorByClassName(
    bitex.ui.DepositList.CSS_CLASS,
    function() {
      return new bitex.ui.DepositList();
    });
