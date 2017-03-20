goog.provide('bitex.ui.WithdrawList');

goog.require('goog.dom');
goog.require('goog.object');
goog.require('bitex.ui.DataGrid');
goog.require('goog.ui.registry');
goog.require('bitex.ui.WithdrawList.templates');

goog.require('goog.dom.TagName');

goog.require('bitex.util');

/**
 * @desc Column ID of the Withdraw List
 */
var MSG_WITHDRAW_TABLE_COLUMN_ID = goog.getMsg('ID');

/**
 * @desc Column Status of the Withdraw List
 */
var MSG_WITHDRAW_TABLE_COLUMN_STATUS = goog.getMsg('Status');

/**
 * @desc Column Status of the Withdraw List
 */
var MSG_WITHDRAW_TABLE_COLUMN_STATUS_PENDING = goog.getMsg('Pending');

/**
 * @desc Column Status of the Withdraw List
 */
var MSG_WITHDRAW_TABLE_COLUMN_STATUS_UNCONFIRMED = goog.getMsg('Unconfirmed');

/**
 * @desc Column Status of the Withdraw List
 */
var MSG_WITHDRAW_TABLE_COLUMN_STATUS_PROGRESS = goog.getMsg('In progress...');

/**
 * @desc Column Status of the Withdraw List
 */
var MSG_WITHDRAW_TABLE_COLUMN_STATUS_COMPLETED = goog.getMsg('Completed');

/**
 * @desc Column Status of the Withdraw List
 */
var MSG_WITHDRAW_TABLE_COLUMN_STATUS_CANCELLED = goog.getMsg('Cancelled');

/**
 * @desc Column Currency of the Withdraw List
 */
var MSG_WITHDRAW_TABLE_COLUMN_CURRENCY = goog.getMsg('Currency');

/**
 * @desc Column Amount of the Withdraw List
 */
var MSG_WITHDRAW_TABLE_COLUMN_AMOUNT = goog.getMsg('Amount');

/**
 * @desc Column Method of the Withdraw List
 */
var MSG_WITHDRAW_TABLE_COLUMN_METHOD = goog.getMsg('Method');

/**
 * @desc Column Created of the Withdraw List
 */
var MSG_WITHDRAW_TABLE_COLUMN_CREATED = goog.getMsg('Date/Hour');

/**
 * @desc Column Actions of the Withdraw List
 */
var MSG_WITHDRAW_TABLE_COLUMN_ACTIONS = goog.getMsg('Actions');

/**
 * @desc Column Detail of the Withdraw List
 */
var MSG_WITHDRAW_TABLE_COLUMN_DETAIL = goog.getMsg('Details');

/**
 * @desc Column Username of the Withdraw List
 */
var MSG_WITHDRAW_TABLE_COLUMN_USERNAME = goog.getMsg('Username');


/** 
 * @desc reason for cancelling withdraw 
 */
var MSG_WITHDRAW_REASON_INSUFFICIENT_FUNDS = goog.getMsg('Insufficient funds');

/** 
 * @desc reason for cancelling withdraw 
 */
  var MSG_WITHDRAW_REASON_ACCOUNT_NOT_VERIFIED = goog.getMsg('Account not verified');

/** 
 * @desc reason for cancelling withdraw 
 */
var MSG_WITHDRAW_REASON_SUSPICION_OF_FRAUD = goog.getMsg('Suspicion of fraud');

/** 
 * @desc reason for cancelling withdraw 
 */
var MSG_WITHDRAW_REASON_DIFFERENT_ACCOUNT = goog.getMsg('Withdrawing to a different account than yours');

/** 
 * @desc reason for cancelling withdraw 
 */
var MSG_WITHDRAW_REASON_INVALID_WALLET = goog.getMsg('Invalid wallet');

/** 
 * @desc reason for cancelling withdraw 
 */
var MSG_WITHDRAW_REASON_INVALID_BANK_ACCOUNT = goog.getMsg('Invalid bank account');

/** 
 * @desc reason for cancelling withdraw 
 */
var MSG_WITHDRAW_REASON_OVER_LIMIT = goog.getMsg('Amount exceeded your daily withdraw limit');

/** 
 * @desc reason for cancelling withdraw 
 */
var MSG_WITHDRAW_REASON_UNCONFIRMED_DEPOSITS = goog.getMsg('User has deposits that are not yet confirmed');

/** 
 * @desc reason for cancelling withdraw 
 */
var MSG_WITHDRAW_REASON_ACCOUNT_HAS_WITHDRAWAL_BLOCK = goog.getMsg('The withdraw function is temporarily blocked for your account');

/**
 * @param {Object} methodDescriptionObj
 * @param {boolean} opt_broker_mode
 * @param {boolean} opt_show_customers
 * @param {goog.dom.DomHelper=} opt_domHelper
 * @constructor
 * @extends {goog.ui.Component}
 */
bitex.ui.WithdrawList = function( methodDescriptionObj, opt_broker_mode,  opt_show_customers, opt_domHelper) {
  var broker_mode = false;
  var data_row;
  if (opt_broker_mode === true) {
    broker_mode = opt_broker_mode;
  }

  var show_customers = false;
  if (opt_show_customers === true ) {
    show_customers = opt_show_customers;
  }

  /**
   * @desc Withdraw cancel button label in the  withdraw list
   */
  var MSG_WITHDRAW_TABLE_COLUMN_ACTION_CANCEL = goog.getMsg('Cancel');

  /**
   * @desc Withdraw redo button label in the  withdraw list
   */
  var MSG_WITHDRAW_TABLE_COLUMN_ACTION_REDO = goog.getMsg('Redo');




  var grid_columns = [
    {
      'property': 'Created',
      'label': MSG_WITHDRAW_TABLE_COLUMN_CREATED,
      'sortable': broker_mode,
      'formatter': function(s, rowSet) {
        return  bitex.util.convertServerUTCDateTimeStrToTimestamp(s.substr(0, 10), s.substr(11)).toLocaleString();
      },
      'classes': function() { return goog.getCssName(bitex.ui.WithdrawList.CSS_CLASS, 'created'); }
    },{
      'property': 'Status',
      'label': MSG_WITHDRAW_TABLE_COLUMN_STATUS,
      'sortable': false,
      'formatter': function(s, rowSet){
        var status = function(s) {
          switch(s){
            case '0': return [''          , MSG_WITHDRAW_TABLE_COLUMN_STATUS_UNCONFIRMED];
            case '1': return ['warning'   , MSG_WITHDRAW_TABLE_COLUMN_STATUS_PENDING];
            case '2': return ['info'      , MSG_WITHDRAW_TABLE_COLUMN_STATUS_PROGRESS];
            case '4': return ['success'   , MSG_WITHDRAW_TABLE_COLUMN_STATUS_COMPLETED];
            case '8': return ['important' , MSG_WITHDRAW_TABLE_COLUMN_STATUS_CANCELLED];
          }
          return ['',''];
        };
        var label_class_text = status(s);



        var reason_id = rowSet['ReasonID'];
        var reason    = rowSet['Reason'];

        if (goog.isDefAndNotNull(reason_id)) {


          // var status_el = goog.dom.createDom('span', ['label', 'label-' + label_class_text[0] ] );
          var status_el = goog.soy.renderAsElement(bitex.ui.WithdrawList.templates.labelStatus, {
            label: label_class_text[0],
            status: label_class_text[1]
          });
          var reason_el;
          switch(reason_id) {
            case 0:
              // reason_el = goog.dom.createDom('abbr', {'title': reason},  label_class_text[1] );
              status_el = goog.soy.renderAsElement(bitex.ui.WithdrawList.templates.labelStatus, {
                label: label_class_text[0],
                status: label_class_text[1],
                reason: MSG_WITHDRAW_REASON_INSUFFICIENT_FUNDS
              });
              break;
            case -1:
              // reason_el = goog.dom.createDom('abbr', {'title': MSG_WITHDRAW_REASON_INSUFFICIENT_FUNDS},  label_class_text[1] );
              status_el = goog.soy.renderAsElement(bitex.ui.WithdrawList.templates.labelStatus, {
                label: label_class_text[0],
                status: label_class_text[1],
                reason: MSG_WITHDRAW_REASON_ACCOUNT_NOT_VERIFIED
              });
              break;
            case -2:
              // reason_el = goog.dom.createDom('abbr', {'title': MSG_WITHDRAW_REASON_ACCOUNT_NOT_VERIFIED},  label_class_text[1] );
              status_el = goog.soy.renderAsElement(bitex.ui.WithdrawList.templates.labelStatus, {
                label: label_class_text[0],
                status: label_class_text[1],
                reason: MSG_WITHDRAW_REASON_ACCOUNT_NOT_VERIFIED
              });
              break;
            case -3:
              // reason_el = goog.dom.createDom('abbr', {'title': MSG_WITHDRAW_REASON_SUSPICION_OF_FRAUD},  label_class_text[1] );
              status_el = goog.soy.renderAsElement(bitex.ui.WithdrawList.templates.labelStatus, {
                label: label_class_text[0],
                status: label_class_text[1],
                reason: MSG_WITHDRAW_REASON_SUSPICION_OF_FRAUD
              });
              break;
            case -4:
              // reason_el = goog.dom.createDom('abbr', {'title': MSG_WITHDRAW_REASON_DIFFERENT_ACCOUNT},  label_class_text[1] );
              status_el = goog.soy.renderAsElement(bitex.ui.WithdrawList.templates.labelStatus, {
                label: label_class_text[0],
                status: label_class_text[1],
                reason: MSG_WITHDRAW_REASON_DIFFERENT_ACCOUNT
              });
              break;
            case -5:
              // reason_el = goog.dom.createDom('abbr', {'title': MSG_WITHDRAW_REASON_INVALID_WALLET},  label_class_text[1] );
              status_el = goog.soy.renderAsElement(bitex.ui.WithdrawList.templates.labelStatus, {
                label: label_class_text[0],
                status: label_class_text[1],
                reason: MSG_WITHDRAW_REASON_INVALID_WALLET
              });
              break;
            case -6:
              // reason_el = goog.dom.createDom('abbr', {'title': MSG_WITHDRAW_REASON_INVALID_BANK_ACCOUNT},  label_class_text[1] );
              status_el = goog.soy.renderAsElement(bitex.ui.WithdrawList.templates.labelStatus, {
                label: label_class_text[0],
                status: label_class_text[1],
                reason: MSG_WITHDRAW_REASON_INVALID_BANK_ACCOUNT
              });
              break;
            case -7:
              // reason_el = goog.dom.createDom('abbr', {'title': MSG_WITHDRAW_REASON_OVER_LIMIT},  label_class_text[1] );
              status_el = goog.soy.renderAsElement(bitex.ui.WithdrawList.templates.labelStatus, {
                label: label_class_text[0],
                status: label_class_text[1],
                reason: MSG_WITHDRAW_REASON_OVER_LIMIT
              });
              break;
            case -8:
              // reason_el = goog.dom.createDom('abbr', {'title': MSG_WITHDRAW_REASON_UNCONFIRMED_DEPOSITS},  label_class_text[1] );
              status_el = goog.soy.renderAsElement(bitex.ui.WithdrawList.templates.labelStatus, {
                label: label_class_text[0],
                status: label_class_text[1],
                reason: MSG_WITHDRAW_REASON_UNCONFIRMED_DEPOSITS
              });
              break;
            case -9:
              // reason_el = goog.dom.createDom('abbr', {'title': MSG_WITHDRAW_REASON_ACCOUNT_HAS_WITHDRAWAL_BLOCK},  label_class_text[1] );
              status_el = goog.soy.renderAsElement(bitex.ui.WithdrawList.templates.labelStatus, {
                label: label_class_text[0],
                status: label_class_text[1],
                reason: MSG_WITHDRAW_REASON_ACCOUNT_HAS_WITHDRAWAL_BLOCK
              });
              break;
            default:
              return status_el;
          }
          // return goog.soy.renderAsElement(bitex.ui.WithdrawList.templates.labelStatus, {
            // label: reason_el,
            // status: label_class_text[0]
          // });
          // goog.dom.appendChild(status_el, reason_el);
          return status_el;
        } else {
          // return goog.dom.createDom('span', ['label', 'label-' + label_class_text[0] ],  label_class_text[1]  );
          return goog.soy.renderAsElement(bitex.ui.WithdrawList.templates.labelStatus, {
            label: label_class_text[0],
            status: label_class_text[1]
          });
        }
      },
      'classes': function() { return goog.getCssName(bitex.ui.WithdrawList.CSS_CLASS, 'status'); }
    },{
      'property': 'Amount',
      'label': MSG_WITHDRAW_TABLE_COLUMN_AMOUNT,
      'sortable': false,
      'classes': function() { return goog.getCssName(bitex.ui.WithdrawList.CSS_CLASS, 'amount'); }
    },{
      'property': 'Data',
      'label': MSG_WITHDRAW_TABLE_COLUMN_DETAIL,
      'sortable': false,
      'formatter': function(data, rowSet){
        var element = goog.dom.createDom( 'table' );

        if(!goog.isDefAndNotNull(methodDescriptionObj[rowSet['Currency']])){
          return;
        }

        var method = methodDescriptionObj[rowSet['Currency']][ rowSet['Method'] ];
        goog.dom.appendChild(element,
            goog.dom.createDom('tr', goog.getCssName(bitex.ui.WithdrawList.CSS_CLASS, 'details-tr'),
                  goog.dom.createDom('td', goog.getCssName(bitex.ui.WithdrawList.CSS_CLASS, 'details-td-key'), MSG_WITHDRAW_TABLE_COLUMN_METHOD ),
                  goog.dom.createDom('td', goog.getCssName(bitex.ui.WithdrawList.CSS_CLASS, 'details-td-value'), method ))
        );

        if (goog.isDefAndNotNull(data['Link'])) {
          /** @desc reason for cancelling withdraw */
          var MSG_WITHDRAW_BROKER_RECEIPT_COLUMN = goog.getMsg('Broker receipt');

          /** @desc reason for cancelling withdraw */
          var MSG_WITHDRAW_BROKER_RECEIPT_BUTTON_LABEL = goog.getMsg('view');

          if (!goog.string.isEmpty(data['Link'])){
            goog.dom.appendChild(element, goog.dom.createDom('tr', goog.getCssName(bitex.ui.WithdrawList.CSS_CLASS, 'details-tr'),
                goog.dom.createDom('td', goog.getCssName(bitex.ui.WithdrawList.CSS_CLASS, 'details-td-key'), MSG_WITHDRAW_BROKER_RECEIPT_COLUMN ),
                goog.dom.createDom('td', goog.getCssName(bitex.ui.WithdrawList.CSS_CLASS, 'details-td-value'),
                  goog.soy.renderAsElement(bitex.ui.WithdrawList.templates.btnBrokerReceipt, {
                    link: data['Link']
                  })
                )));
          }
        }
        /**
         * @desc Withdraw qr button label in the  broker's withdraw list
         */
        var MSG_WITHDRAW_TABLE_DETAILS_COLUMN_TRANSACTION_ID  = goog.getMsg('Transaction ID');

        goog.object.forEach(data, function(value, key) {
          if (key != 'Link' && key != 'Currency'  && key != 'Fees' && key != 'TransactionID' && key != 'Comments') {
            if (goog.isDefAndNotNull(value) && !goog.string.isEmpty(value) )  {
              if (key == 'Wallet') {
                /**
                 * @desc Withdraw qr button label in the  broker's withdraw list
                 */
                var MSG_WITHDRAW_TABLE_WALLET_KEY  = goog.getMsg('Wallet');

                var btn_qr = goog.soy.renderAsElement(bitex.ui.WithdrawList.templates.btnQR, {
                  dataRow: goog.json.serialize(rowSet)
                });

                goog.dom.appendChild(element, goog.dom.createDom('tr', goog.getCssName(bitex.ui.WithdrawList.CSS_CLASS, 'details-tr'),
                    goog.dom.createDom('td', goog.getCssName(bitex.ui.WithdrawList.CSS_CLASS, 'details-td-key'), MSG_WITHDRAW_TABLE_WALLET_KEY ),
                    goog.dom.createDom('td', goog.getCssName(bitex.ui.WithdrawList.CSS_CLASS, 'details-td-value'), btn_qr)));
              } else {
                /**  @desc Withdraw column label in the  broker's withdraw list detail table */
                var MSG_WITHDRAW_TABLE_DETAILS_COLUMN_ACCT_NUMBER  = goog.getMsg('Account number');

                /**  @desc Withdraw column label in the  broker's withdraw list detail table */
                var MSG_WITHDRAW_TABLE_DETAILS_COLUMN_ACCT_HOLDER  = goog.getMsg('Account holder name');

                /**  @desc Withdraw column label in the  broker's withdraw list detail table */
                var MSG_WITHDRAW_TABLE_DETAILS_COLUMN_ACCT_HOLDER_ID  = goog.getMsg('Account holder ID');

                /**  @desc Withdraw column label in the  broker's withdraw list detail table */
                var MSG_WITHDRAW_TABLE_DETAILS_COLUMN_BANK_NAME  = goog.getMsg('Bank name');

                /**  @desc Withdraw column label in the  broker's withdraw list detail table */
                var MSG_WITHDRAW_TABLE_DETAILS_COLUMN_BANK_NUMBER  = goog.getMsg('Bank number');

                /**  @desc Withdraw column label in the  broker's withdraw list detail table */
                var MSG_WITHDRAW_TABLE_DETAILS_COLUMN_CPF_CNPJ  = goog.getMsg('CPF or CNPJ');

                /**  @desc Withdraw column label in the  broker's withdraw list detail table */
                var MSG_WITHDRAW_TABLE_DETAILS_COLUMN_ACCT_BRANCH = goog.getMsg('Account branch');

                /**  @desc Withdraw column label in the  broker's withdraw list detail table */
                var MSG_WITHDRAW_TABLE_DETAILS_COLUMN_ROUTING_NUMBER = goog.getMsg('Routing number');

                /**  @desc Withdraw column label in the  broker's withdraw list detail table */
                var MSG_WITHDRAW_TABLE_DETAILS_COLUMN_BANK_SWIFT = goog.getMsg('Bank Swift');

                /**  @desc Withdraw column label in the  broker's withdraw list detail table */
                var MSG_WITHDRAW_TABLE_DETAILS_COLUMN_EMAIL = goog.getMsg('Email');

                /**  @desc Withdraw column label in the  broker's withdraw list detail table */
                var MSG_WITHDRAW_TABLE_DETAILS_COLUMN_ACCT_TYPE = goog.getMsg('Account Type');

                /**  @desc Withdraw column label in the  broker's withdraw list detail table */
                var MSG_WITHDRAW_TABLE_DETAILS_COLUMN_KYC = goog.getMsg('KYC');

                /**  @desc Withdraw column label in the  broker's withdraw list detail table */
                var MSG_WITHDRAW_TABLE_DETAILS_COLUMN_SENDER_NAME = goog.getMsg('Sender Name');

                /**  @desc Withdraw column label in the  broker's withdraw list detail table */
                var MSG_WITHDRAW_TABLE_DETAILS_COLUMN_SENDER_ID = goog.getMsg('Sender ID');

                /**  @desc Withdraw column label in the  broker's withdraw list detail table */
                var MSG_WITHDRAW_TABLE_DETAILS_COLUMN_SENDER_PHONE_NUMBER = goog.getMsg('Sender phone #');

                /**  @desc Withdraw column label in the  broker's withdraw list detail table */
                var MSG_WITHDRAW_TABLE_DETAILS_COLUMN_SENDER_KYC = goog.getMsg('Sender KYC');

                /**  @desc Withdraw column label in the  broker's withdraw list detail table */
                var MSG_WITHDRAW_TABLE_DETAILS_COLUMN_ACCT_HOLDER_ID_PHONE_NUMBER = goog.getMsg('Account holder phone #');

                /**  @desc Withdraw column label in the  broker's withdraw list detail table */
                var MSG_WITHDRAW_TABLE_DETAILS_COLUMN_INTENDED_PURPOSE = goog.getMsg('Purpose');

                var key_description = key;

                switch(key){
                  case 'SenderID':
                    key_description = MSG_WITHDRAW_TABLE_DETAILS_COLUMN_SENDER_ID;
                    break;
                  case 'SenderName':
                    key_description = MSG_WITHDRAW_TABLE_DETAILS_COLUMN_SENDER_NAME;
                    break;
                  case 'SenderPhone':
                    key_description = MSG_WITHDRAW_TABLE_DETAILS_COLUMN_SENDER_PHONE_NUMBER;
                    break;
                  case 'SenderKYC':
                    key_description = MSG_WITHDRAW_TABLE_DETAILS_COLUMN_SENDER_KYC;
                    break;
                  case 'AccountHolderPhone':
                    key_description = MSG_WITHDRAW_TABLE_DETAILS_COLUMN_ACCT_HOLDER_ID_PHONE_NUMBER;
                    break;
                  case 'AccountNumber':
                    key_description = MSG_WITHDRAW_TABLE_DETAILS_COLUMN_ACCT_NUMBER;
                    break;
                  case 'BankName':
                    key_description  = MSG_WITHDRAW_TABLE_DETAILS_COLUMN_BANK_NAME;
                    break;
                  case 'BankNumber':
                    key_description = MSG_WITHDRAW_TABLE_DETAILS_COLUMN_BANK_NUMBER;
                    break;
                  case 'CPF_CNPJ':
                  case 'CPFCNPJ':
                    key_description = MSG_WITHDRAW_TABLE_DETAILS_COLUMN_CPF_CNPJ;
                    break;
                  case 'AccountType':
                    key_description = MSG_WITHDRAW_TABLE_DETAILS_COLUMN_ACCT_TYPE;
                    break;
                  case 'BankBranch':
                  case 'AccountBranch':
                    key_description = MSG_WITHDRAW_TABLE_DETAILS_COLUMN_ACCT_BRANCH;
                    break;
                  case 'AccountName':
                    key_description = MSG_WITHDRAW_TABLE_DETAILS_COLUMN_ACCT_HOLDER;
                    break;
                  case 'AccountHolderID':
                    key_description = MSG_WITHDRAW_TABLE_DETAILS_COLUMN_ACCT_HOLDER_ID;
                    break;
                  case 'KYC':
                    key_description = MSG_WITHDRAW_TABLE_DETAILS_COLUMN_KYC;
                    break;
                  case 'RoutingNumber':
                    key_description = MSG_WITHDRAW_TABLE_DETAILS_COLUMN_ROUTING_NUMBER;
                    break;
                  case 'BankSwift':
                    key_description = MSG_WITHDRAW_TABLE_DETAILS_COLUMN_BANK_SWIFT;
                    break;
                  case 'Email':
                    key_description = MSG_WITHDRAW_TABLE_DETAILS_COLUMN_EMAIL;
                    break;
                  case 'IntendedPurpose':
                    key_description = MSG_WITHDRAW_TABLE_DETAILS_COLUMN_INTENDED_PURPOSE;
                    break;
                }

                if (key != 'Instant' || (key == 'Instant' && broker_mode) ){
                  if (key == 'KYC' || key == 'SenderKYC' ) {

                    goog.dom.appendChild(element, goog.dom.createDom('tr', goog.getCssName(bitex.ui.WithdrawList.CSS_CLASS, 'details-tr'),
                        goog.dom.createDom('td', goog.getCssName(bitex.ui.WithdrawList.CSS_CLASS, 'details-td-key'), key_description ),
                        goog.dom.createDom('td', goog.getCssName(bitex.ui.WithdrawList.CSS_CLASS, 'details-td-value'),
                          goog.soy.renderAsElement(bitex.ui.WithdrawList.templates.btnKYC, {
                            dataRow: goog.json.serialize(rowSet)
                          })
                        )));
                  } else {
                    goog.dom.appendChild(element,
                       goog.dom.createDom('tr', goog.getCssName(bitex.ui.WithdrawList.CSS_CLASS, 'details-tr'),
                         goog.dom.createDom('td', goog.getCssName(bitex.ui.WithdrawList.CSS_CLASS, 'details-td-key'), key_description ),
                         goog.dom.createDom('td', goog.getCssName(bitex.ui.WithdrawList.CSS_CLASS, 'details-td-value'), '' + value ))
                    );
                  }
                }
              }
            }
          }
        }, this);

        if ( goog.isDefAndNotNull(data['Fees'])) {
          /**  @desc Withdraw column label in the  broker's withdraw list detail table */
          var MSG_WITHDRAW_TABLE_DETAILS_COLUMN_FEES = goog.getMsg('Fees');
          if ( goog.string.countOf(data['Fees'], '|') == 0 ) {
            goog.dom.appendChild(element,
               goog.dom.createDom('tr', goog.getCssName(bitex.ui.WithdrawList.CSS_CLASS, 'details-tr'),
                  goog.dom.createDom('td', goog.getCssName(bitex.ui.WithdrawList.CSS_CLASS, 'details-td-key'), MSG_WITHDRAW_TABLE_DETAILS_COLUMN_FEES ),
                  goog.dom.createDom('td', goog.getCssName(bitex.ui.WithdrawList.CSS_CLASS, 'details-td-value'), data['Fees'] )));
          } else {
            var original_fee = data['Fees'].split('|')[0];
            var effective_fee = data['Fees'].split('|')[1];

            var original_fee_element = goog.dom.createDom('s', {'style':'color: gray; padding-right: 10px;' } , original_fee);
            var effective_fee_element = goog.dom.createDom('b', undefined,  effective_fee);

            goog.dom.appendChild(element,
               goog.dom.createDom('tr', goog.getCssName(bitex.ui.WithdrawList.CSS_CLASS, 'details-tr'),
                  goog.dom.createDom('td', goog.getCssName(bitex.ui.WithdrawList.CSS_CLASS, 'details-td-key'), MSG_WITHDRAW_TABLE_DETAILS_COLUMN_FEES ),
                  goog.dom.createDom('td', goog.getCssName(bitex.ui.WithdrawList.CSS_CLASS, 'details-td-value'), original_fee_element, effective_fee_element  )));
          }
        }

        if (goog.isDefAndNotNull(data['TransactionID'])) {
          if (data['Currency'] == 'BTC' && typeof rowSet['Data']['Wallet'] !== 'undefined') {
             /**
              * @desc Withdraw qr button label in the  broker's withdraw list
              */
             var MSG_WITHDRAW_TABLE_DETAILS_COLUMN_BTN_BLOCKCHAIN  = goog.getMsg('blockchain');

             var block_explorer = 'https://live.blockcypher.com/btc';
             switch (rowSet['Data']['Wallet'][0]) {
               case 'm':
               case 'n':
               case '2':
               case '9':
               case 'c':
                 block_explorer = 'https://live.blockcypher.com/btc-testnet';
             }

             var btn_blockchain = goog.soy.renderAsElement(bitex.ui.WithdrawList.templates.btnBlockchain, {
                link: block_explorer + '/tx/' + data['TransactionID']
             });

             goog.dom.appendChild(element, goog.dom.createDom('tr', goog.getCssName(bitex.ui.WithdrawList.CSS_CLASS, 'details-tr'),
                                                              goog.dom.createDom('td', goog.getCssName(bitex.ui.WithdrawList.CSS_CLASS, 'details-td-key'), MSG_WITHDRAW_TABLE_DETAILS_COLUMN_TRANSACTION_ID ),
                                                              goog.dom.createDom('td', goog.getCssName(bitex.ui.WithdrawList.CSS_CLASS, 'details-td-value'), btn_blockchain)));

          }  else {
            goog.dom.appendChild(element,
               goog.dom.createDom('tr', goog.getCssName(bitex.ui.WithdrawList.CSS_CLASS, 'details-tr'),
                  goog.dom.createDom('td', goog.getCssName(bitex.ui.WithdrawList.CSS_CLASS, 'details-td-key'), MSG_WITHDRAW_TABLE_DETAILS_COLUMN_TRANSACTION_ID ),
                  goog.dom.createDom('td', goog.getCssName(bitex.ui.WithdrawList.CSS_CLASS, 'details-td-value'), data['TransactionID'] ))
            );
          }
        }

        if (goog.isDefAndNotNull(data['Comments'])) {
          /**
          * @desc Withdraw comments in the  broker's withdraw list
          */
          var MSG_WITHDRAW_TABLE_DETAILS_COLUMN_COMMENTS  = goog.getMsg('Comments');

          var comments = goog.dom.createDom('div', goog.getCssName(bitex.ui.WithdrawList.CSS_CLASS, 'messages'));
          goog.object.forEach(data['Comments'], function(comment) {
            goog.dom.appendChild(comments, goog.dom.createDom('p', goog.getCssName(bitex.ui.WithdrawList.CSS_CLASS, 'comment-message'), comment));
          });

          goog.dom.appendChild(element, goog.dom.createDom('tr', goog.getCssName(bitex.ui.WithdrawList.CSS_CLASS, 'details-tr'),
                                                          goog.dom.createDom('td', goog.getCssName(bitex.ui.WithdrawList.CSS_CLASS, 'details-td-key'), MSG_WITHDRAW_TABLE_DETAILS_COLUMN_COMMENTS),
                                                          goog.dom.createDom('td', goog.getCssName(bitex.ui.WithdrawList.CSS_CLASS, 'details-td-value'), comments)));
        }


        if (!broker_mode) {
          data_row = goog.json.serialize(rowSet);

          var btn_user_redo = goog.soy.renderAsElement(bitex.ui.WithdrawList.templates.btnRedo,  { dataRow: data_row });

          switch(rowSet['Status']){
            case '0':
                goog.dom.appendChild(element,
                    goog.dom.createDom('tr', goog.getCssName(bitex.ui.WithdrawList.CSS_CLASS, 'details-tr'),
                        goog.dom.createDom('td', goog.getCssName(bitex.ui.WithdrawList.CSS_CLASS, 'details-td-key'), MSG_WITHDRAW_TABLE_COLUMN_ACTIONS ),
                        goog.dom.createDom('td', goog.getCssName(bitex.ui.WithdrawList.CSS_CLASS, 'details-td-value'),
                            goog.soy.renderAsElement(bitex.ui.WithdrawList.templates.btnGroup, {
                              button1: 'redo',
                              button2: 'user_cancel',
                              dataRow: data_row
                            })
                            )));
              break;
            case '1':
                goog.dom.appendChild(element,
                    goog.dom.createDom('tr', goog.getCssName(bitex.ui.WithdrawList.CSS_CLASS, 'details-tr'),
                        goog.dom.createDom('td', goog.getCssName(bitex.ui.WithdrawList.CSS_CLASS, 'details-td-key'), MSG_WITHDRAW_TABLE_COLUMN_ACTIONS ),
                        goog.dom.createDom('td', goog.getCssName(bitex.ui.WithdrawList.CSS_CLASS, 'details-td-value'),
                          goog.soy.renderAsElement(bitex.ui.WithdrawList.templates.btnGroup, {
                            button1: 'redo',
                            button2: 'user_cancel',
                            dataRow: data_row
                          })
                        )));
              break;
            case '2':
                goog.dom.appendChild(element,
                    goog.dom.createDom('tr', goog.getCssName(bitex.ui.WithdrawList.CSS_CLASS, 'details-tr'),
                        goog.dom.createDom('td', goog.getCssName(bitex.ui.WithdrawList.CSS_CLASS, 'details-td-key'), MSG_WITHDRAW_TABLE_COLUMN_ACTIONS ),
                        goog.dom.createDom('td', goog.getCssName(bitex.ui.WithdrawList.CSS_CLASS, 'details-td-value'),btn_user_redo )));
              break;
            case '4':
                goog.dom.appendChild(element,
                    goog.dom.createDom('tr', goog.getCssName(bitex.ui.WithdrawList.CSS_CLASS, 'details-tr'),
                        goog.dom.createDom('td', goog.getCssName(bitex.ui.WithdrawList.CSS_CLASS, 'details-td-key'), MSG_WITHDRAW_TABLE_COLUMN_ACTIONS ),
                        goog.dom.createDom('td', goog.getCssName(bitex.ui.WithdrawList.CSS_CLASS, 'details-td-value'),btn_user_redo )));
              break;
            case '8':
                goog.dom.appendChild(element,
                    goog.dom.createDom('tr', goog.getCssName(bitex.ui.WithdrawList.CSS_CLASS, 'details-tr'),
                        goog.dom.createDom('td', goog.getCssName(bitex.ui.WithdrawList.CSS_CLASS, 'details-td-key'), MSG_WITHDRAW_TABLE_COLUMN_ACTIONS ),
                        goog.dom.createDom('td', goog.getCssName(bitex.ui.WithdrawList.CSS_CLASS, 'details-td-value'),btn_user_redo )));
              break;
          }
        }

        var reason_id = rowSet['ReasonID'];
        var reason    = rowSet['Reason'];
        var has_reason = false;
        if (goog.isDefAndNotNull(reason)) {
          has_reason = true;
        } else if (goog.isDefAndNotNull(reason_id)) {
          has_reason = true;
          switch (reason_id) {
            case 0:
              reason = MSG_WITHDRAW_REASON_INSUFFICIENT_FUNDS
              break;
            case -1:
              reason = MSG_WITHDRAW_REASON_ACCOUNT_NOT_VERIFIED
              break;
            case -2:
              reason = MSG_WITHDRAW_REASON_ACCOUNT_NOT_VERIFIED
              break;
            case -3:
              reason = MSG_WITHDRAW_REASON_SUSPICION_OF_FRAUD
              break;
            case -4:
              reason = MSG_WITHDRAW_REASON_DIFFERENT_ACCOUNT
              break;
            case -5:
              reason = MSG_WITHDRAW_REASON_INVALID_WALLET
              break;
            case -6:
              reason = MSG_WITHDRAW_REASON_INVALID_BANK_ACCOUNT
              break;
            case -7:
              reason = MSG_WITHDRAW_REASON_OVER_LIMIT
              break;
            case -8:
              reason = MSG_WITHDRAW_REASON_UNCONFIRMED_DEPOSITS
              break;
            case -9:
              reason = MSG_WITHDRAW_REASON_ACCOUNT_HAS_WITHDRAWAL_BLOCK
              break;
          }
        }
        if (has_reason) {
          goog.dom.appendChild(element,
            goog.dom.createDom('tr', goog.getCssName(bitex.ui.WithdrawList.CSS_CLASS, 'details-tr'),
               goog.dom.createDom('td', goog.getCssName(bitex.ui.WithdrawList.CSS_CLASS, 'details-td-key'), MSG_WITHDRAW_TABLE_COLUMN_STATUS),
               goog.dom.createDom('td', goog.getCssName(bitex.ui.WithdrawList.CSS_CLASS, 'details-td-value'), '' + reason)));
        }

        return element;

      },
      'classes': function() { return goog.getCssName(bitex.ui.WithdrawList.CSS_CLASS, 'details');}
    }
  ];

  if (show_customers) {
    grid_columns.push({
                        'property': 'Username',
                        'label': MSG_WITHDRAW_TABLE_COLUMN_USERNAME,
                        'sortable': false,
                        'classes': function() { return goog.getCssName(bitex.ui.WithdrawList.CSS_CLASS, 'username'); }
                      });
  }

  if (broker_mode){
    grid_columns.push({
      'property' : 'WithdrawID',
      'label': MSG_WITHDRAW_TABLE_COLUMN_ACTIONS,
      'sortable': false,
      'classes': function() { return goog.getCssName(bitex.ui.WithdrawList.CSS_CLASS, 'actions');},
      'formatter': function(s, row_set_obj){
        data_row = goog.json.serialize( row_set_obj );

        var btn_kyc;
        if (goog.object.containsKey(row_set_obj, 'UserVerificationData') && goog.isDefAndNotNull(row_set_obj['UserVerificationData']) ) {
          btn_kyc = goog.soy.renderAsElement(bitex.ui.WithdrawList.templates.btnKYC, {
            userVerification: goog.json.serialize(row_set_obj['UserVerificationData'])
          });
        }

        var btn_cancel  = goog.soy.renderAsElement(bitex.ui.WithdrawList.templates.btnCancel,  { dataRow: data_row });
        var btn_comment = goog.soy.renderAsElement(bitex.ui.WithdrawList.templates.btnComment, { dataRow: data_row });

        if (goog.isDefAndNotNull(btn_kyc)) {
          var userVerificationData = goog.json.serialize(row_set_obj['UserVerificationData']);
          switch(row_set_obj['Status']){
            case '0':
              return goog.soy.renderAsElement(bitex.ui.WithdrawList.templates.btnGroup, {
                button1: 'kyc',
                button2: 'cancel',
                button3: 'comment',
                dataRow: data_row,
                userVerification: userVerificationData
              });
            case '1':
              return goog.soy.renderAsElement(bitex.ui.WithdrawList.templates.btnGroup, {
                button1: 'kyc',
                button2: 'cancel',
                button3: 'progress',
                button4: 'comment',
                dataRow: data_row,
                userVerification: userVerificationData
              });
            case '2':
              return goog.soy.renderAsElement(bitex.ui.WithdrawList.templates.btnGroup, {
                button1: 'kyc',
                button2: 'cancel',
                button3: 'complete',
                button4: 'comment',
                dataRow: data_row,
                userVerification: userVerificationData
              });
            case '4':
              return goog.soy.renderAsElement(bitex.ui.WithdrawList.templates.btnGroup, {
                button1: 'kyc',
                button2: 'comment',
                dataRow: data_row,
                userVerification: userVerificationData
              });
            case '8':
              return goog.soy.renderAsElement(bitex.ui.WithdrawList.templates.btnGroup, {
                button1: 'kyc',
                button2: 'comment',
                dataRow: data_row,
                userVerification: userVerificationData
              });
          }
        } else {
          switch(row_set_obj['Status']){
            case '0':
              return goog.soy.renderAsElement(bitex.ui.WithdrawList.templates.btnGroup, {
                button1: 'cancel',
                button2: 'comment',
                dataRow: data_row
              });
            case '1':
              return goog.soy.renderAsElement(bitex.ui.WithdrawList.templates.btnGroup, {
                button1: 'cancel',
                button2: 'progress',
                button3: 'comment',
                dataRow: data_row
              });
            case '2':
              return goog.soy.renderAsElement(bitex.ui.WithdrawList.templates.btnGroup, {
                button1: 'cancel',
                button2: 'complete',
                button3: 'comment',
                dataRow: data_row
              });
            case '4': return btn_comment;
            case '8': return btn_comment;
          }
        }
      }
    });
  }

  this.selected_withdraw_ = null;


  /**
   * @desc deposit table title
   */
  var MSG_WITHDRAW_LIST_TABLE_TITLE  = goog.getMsg('Withdrawals');

  /**
   * @desc placeholder for the search input text
   */
  var MSG_WITHDRAW_LIST_SEARCH_PLACEHOLDER = goog.getMsg('Search ...');

  /**
   * @desc All records button filter on withdrawal list
   */
  var MSG_WITHDRAW_LIST_BUTTON_FILTER_ALL = goog.getMsg('All');

  var buttonFilters = [
      { 'label': MSG_WITHDRAW_LIST_BUTTON_FILTER_ALL,          'value': 'all'},
      { 'label': MSG_WITHDRAW_TABLE_COLUMN_STATUS_PENDING,     'value': '1' },
      { 'label': MSG_WITHDRAW_TABLE_COLUMN_STATUS_PROGRESS,    'value': '2' },
      { 'label': MSG_WITHDRAW_TABLE_COLUMN_STATUS_COMPLETED,   'value': '4' },
      { 'label': MSG_WITHDRAW_TABLE_COLUMN_STATUS_CANCELLED,   'value': '8' }
  ];

  if (broker_mode && show_customers){
    buttonFilters = [
      { 'label': MSG_WITHDRAW_TABLE_COLUMN_STATUS_PENDING,     'value': '1' },
      { 'label': MSG_WITHDRAW_TABLE_COLUMN_STATUS_PROGRESS,    'value': '2' },
      { 'label': MSG_WITHDRAW_TABLE_COLUMN_STATUS_COMPLETED,   'value': '4' },
      { 'label': MSG_WITHDRAW_TABLE_COLUMN_STATUS_CANCELLED,   'value': '8' }
    ];
  }

  var options = {
    'rowIDFn':this.getRowId,
    'rowClassFn':this.getRowClass,
    'columns': grid_columns,
    'title': MSG_WITHDRAW_LIST_TABLE_TITLE,
    'showSearch': true,
    'searchPlaceholder':  MSG_WITHDRAW_LIST_SEARCH_PLACEHOLDER,
    'wrapperHeight': 600,
    'buttonFilters': buttonFilters
  };
  bitex.ui.DataGrid.call(this,  options , opt_domHelper);
};
goog.inherits(bitex.ui.WithdrawList, bitex.ui.DataGrid);

/**
 * Events fired by Withdraw
 * @enum {string}
 */
bitex.ui.WithdrawList.EventType = {
  CANCEL: 'withdraw_cancel',
  USER_CANCEL: 'withdraw_user_cancel',
  PROGRESS: 'withdraw_progress',
  COMPLETE: 'withdraw_complete',
  KYC: 'withdraw_kyc',
  REDO: 'withdraw_redo',
  COMMENT: 'withdraw_comment'
};

/**
 * @type {Object}
 */
bitex.ui.WithdrawList.prototype.selected_withdraw_;

/**
 * @type {string}
 */
bitex.ui.WithdrawList.CSS_CLASS = goog.getCssName('withdraw-list');

/** @inheritDoc */
bitex.ui.WithdrawList.prototype.getCssClass = function() {
  return bitex.ui.WithdrawList.CSS_CLASS;
};


/** @inheritDoc */
bitex.ui.WithdrawList.prototype.enterDocument = function() {
  goog.base(this, 'enterDocument');

  var handler = this.getHandler();
  handler.listen(this.getElement(), goog.events.EventType.CLICK, this.handleClick_);
};

/**
 * @return {Object}
 */
bitex.ui.WithdrawList.prototype.getWithdrawData = function() {
  return this.selected_withdraw_;
};

/**
 * @return {number}
 */
bitex.ui.WithdrawList.prototype.getWithdrawID = function() {
  if (goog.isDefAndNotNull(this.selected_withdraw_)){
    return this.selected_withdraw_['WithdrawID'];
  }
};

/**
 * @param {goog.events.Event} e
 * @private
 */
bitex.ui.WithdrawList.prototype.handleClick_ = function(e) {
  this.selected_withdraw_ = goog.json.parse(e.target.getAttribute('data-row'));
  if (!goog.isDefAndNotNull(this.selected_withdraw_)) {
    return;
  }

  if (goog.dom.classes.has(e.target, 'btn-withdraw-complete' )) {
    this.dispatchEvent(bitex.ui.WithdrawList.EventType.COMPLETE);
  } else if (goog.dom.classes.has(e.target, 'btn-withdraw-progress' )) {
    this.dispatchEvent(bitex.ui.WithdrawList.EventType.PROGRESS);
  } else if (goog.dom.classes.has(e.target, 'btn-withdraw-cancel' )) {
    this.dispatchEvent(bitex.ui.WithdrawList.EventType.CANCEL);
  } else if (goog.dom.classes.has(e.target, 'btn-withdraw-user-cancel' )) {
    this.dispatchEvent(bitex.ui.WithdrawList.EventType.USER_CANCEL);
  } else if (goog.dom.classes.has(e.target, 'btn-withdraw-kyc' )) {
    this.dispatchEvent(bitex.ui.WithdrawList.EventType.KYC);
  } else if (goog.dom.classes.has(e.target, 'btn-withdraw-redo' )) {
    this.dispatchEvent(bitex.ui.WithdrawList.EventType.REDO);
  } else if (goog.dom.classes.has(e.target, 'btn-withdraw-comment' )) {
    this.dispatchEvent(bitex.ui.WithdrawList.EventType.COMMENT);
  }

  this.selected_withdraw_ = null;
};


/**
 * @param {Object} row_set
 * @return {string}
 */
bitex.ui.WithdrawList.prototype.getRowId = function(row_set) {
  return this.makeId(row_set['WithdrawID'] );
};

/**
 * @param {Object} row_set
 * @return {Array.<string>|string|Object}
 */
bitex.ui.WithdrawList.prototype.getRowClass = function(row_set) {
  var side =  row_set['Status'];

  var class_status;
  switch(side) {
    case '0':
      class_status = goog.getCssName(bitex.ui.WithdrawList.CSS_CLASS, 'unconfirmed');
      break;
    case '1':
      class_status = goog.getCssName(bitex.ui.WithdrawList.CSS_CLASS, 'pending');
      break;
    case '2':
      class_status = goog.getCssName(bitex.ui.WithdrawList.CSS_CLASS, 'processing');
      break;
    case '4':
      class_status = goog.getCssName(bitex.ui.WithdrawList.CSS_CLASS, 'complete');
      break;
    case '8':
      class_status = goog.getCssName(bitex.ui.WithdrawList.CSS_CLASS, 'cancelled');
      break;
  }
  return  class_status;
};


