goog.provide('bitex.app.BlinkTrade');
goog.provide('bitex.app.blink_trade');

goog.require('goog.structs.Map');
goog.require('goog.structs.Set');

goog.require('bitex.util');
goog.require('bitex.api.BitEx');

goog.require('goog.soy');
goog.require('bitex.templates');
goog.require('bitex.ui.WithdrawRequestDataEntry.templates');

goog.require('bitex.ui.OrderBook');
goog.require('bitex.ui.OrderBook.Side');

goog.require('bitex.ui.SimpleOrderBook');
goog.require('bitex.ui.SimpleOrderBook.Side');

goog.require('bitex.ui.SimpleOrderEntry.EventType');
goog.require('bitex.ui.AdvancedOrderEntry.EventType');

goog.require('bitex.ui.OrderBook.EventType');
goog.require('bitex.ui.OrderBookEvent');

goog.require('bitex.ui.OrderManager');
goog.require('bitex.ui.AccountActivity');
goog.require('bitex.ui.WithdrawList');

goog.require('bitex.ui.Customers');

goog.require('bitex.ui.TwoFactor');

goog.require('bitex.ui.WebCamQR');

goog.require('goog.Uri');

goog.require('goog.fx');
goog.require('goog.fx.dom');

goog.require('goog.events.InputHandler');

goog.require('goog.events');
goog.require('goog.dom.forms');
goog.require('goog.dom.classes');
goog.require('goog.dom.TagName');

goog.require('goog.ui.Button');

goog.require('goog.array');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.json');

goog.require('bitex.app.UrlRouter');
goog.require('bitex.model.Model');
goog.require('bitex.model.Model.EventType');

goog.require('bitex.ui.Dialog');
goog.require('bitex.ui.Dialog.ButtonSet');
goog.require('bootstrap.Alert');
goog.require('bootstrap.Dropdown');
goog.require('bootstrap.Accordion');

goog.require('bitex.primitives.Price');

goog.require('goog.debug');

goog.require('bitex.view.NullView');
goog.require('bitex.view.AdminView');
goog.require('bitex.view.SignupView');
goog.require('bitex.view.LoginView');
goog.require('bitex.view.StartView');
goog.require('bitex.view.ForgotPasswordView');
goog.require('bitex.view.SetNewPasswordView');
goog.require('bitex.view.VerificationView');
goog.require('bitex.view.DepositView');
goog.require('bitex.view.OfferBookView');
goog.require('bitex.view.HistoryView');
goog.require('bitex.view.SideBarView');
goog.require('bitex.view.WithdrawView');
goog.require('bitex.view.ServicesView');

goog.require('bitex.view.CardView');
goog.require('bitex.view.CustomersView');
goog.require('bitex.view.AccountOverview');
goog.require('bitex.view.BrokerView');
goog.require('bitex.view.TradingView');
goog.require('bitex.view.AlgorithmTradingView');
goog.require('bitex.view.ToolBarView');
goog.require('bitex.view.MarketView');
goog.require('bitex.view.LedgerView');
goog.require('bitex.view.ProfileView');
goog.require('bitex.view.RankingView');
goog.require('bitex.view.APIView');
goog.require('bitex.view.LineOfCreditView');
goog.require('bitex.view.TwoFactor');

goog.require('uniform.Uniform');
goog.require('uniform.Meta');               // Switch according to the test($MODULE_NAME$)
goog.require('uniform.Validators');         // Switch according to the test($MODULE_NAME$)

goog.require('goog.dom.iframe');
goog.require('goog.html.SafeHtml');

goog.require('goog.net.cookies');


/**
 * @desc Password changed message
 */
var MSG_SUCCESS_PASSWORD_CHANGE = goog.getMsg('Password changed!');

/**
 * @desc Password Chanced with success dialog title
 */
var MSG_BITEX_PASSWORD_CHANGED_OK_TITLE = goog.getMsg('Success');

/**
 * @desc NetAmount "Total" Label on DepositWithdrawDialogContent
 */
var MSG_NET_AMOUNT_LABEL_TOTAL = goog.getMsg('Total');

/**
 * @desc NetAmount "Net amount" Label on DepositWithdrawDialogContent
 */
var MSG_NET_AMOUNT_LABEL_NET_AMOUNT = goog.getMsg('Net amount');

/**  @desc Withdraw field on the withdrawal dialog */
var MSG_WITHDRAW_FIELD_ACCT_NUMBER  = goog.getMsg('Account number');

/**  @desc Withdraw field on the withdrawal dialog */
var MSG_WITHDRAW_FIELD_ACCT_HOLDER  = goog.getMsg('Account holder name');

/**  @desc Withdraw field on the withdrawal dialog */
var MSG_WITHDRAW_FIELD_ACCT_HOLDER_ID  = goog.getMsg('Account holder ID');

/**  @desc Withdraw field on the withdrawal dialog */
var MSG_WITHDRAW_FIELD_BANK_NAME  = goog.getMsg('Bank name');

/**  @desc Withdraw field on the withdrawal dialog */
var MSG_WITHDRAW_FIELD_BANK_NUMBER  = goog.getMsg('Bank number');

/**  @desc Withdraw field on the withdrawal dialog */
var MSG_WITHDRAW_FIELD_CPF_CNPJ  = goog.getMsg('CPF or CNPJ');

/**  @desc Withdraw field on the withdrawal dialog */
var MSG_WITHDRAW_FIELD_ACCT_BRANCH = goog.getMsg('Account branch');

/**  @desc Withdraw field on the withdrawal dialog */
var MSG_WITHDRAW_FIELD_ROUTING_NUMBER = goog.getMsg('Routing number');

/**  @desc Withdraw field on the withdrawal dialog */
var MSG_WITHDRAW_FIELD_BANK_SWIFT = goog.getMsg('Bank Swift');

/**  @desc Withdraw field on the withdrawal dialog */
var MSG_WITHDRAW_FIELD_EMAIL = goog.getMsg('Email');

/**  @desc Withdraw field on the withdrawal dialog */
var MSG_WITHDRAW_FIELD_ACCT_TYPE = goog.getMsg('Account Type');

/**  @desc Withdraw field on the withdrawal dialog */
var MSG_WITHDRAW_FIELD_WALLET = goog.getMsg('Wallet');

/**  @desc Withdraw field on the withdrawal dialog */
var MSG_WITHDRAW_FIELD_LINK = goog.getMsg('Broker receipt');

/**  @desc Withdraw field on the withdrawal dialog */
var MSG_WITHDRAW_FIELD_TRANSACTION_ID = goog.getMsg('Transaction ID');

/**  @desc Withdraw field on the withdrawal dialog */
var MSG_WITHDRAW_FIELD_KYC = goog.getMsg('KYC');

/**  @desc Withdraw field on the withdrawal dialog */
var MSG_WITHDRAW_FIELD_SENDER_NAME = goog.getMsg('Sender Name');

/**  @desc Withdraw field on the withdrawal dialog */
var MSG_WITHDRAW_FIELD_SENDER_ID = goog.getMsg('Sender ID');

/**  @desc Withdraw field on the withdrawal dialog */
var MSG_WITHDRAW_FIELD_SENDER_PHONE_NUMBER = goog.getMsg('Sender phone #');

/**  @desc Withdraw field on the withdrawal dialog */
var MSG_WITHDRAW_FIELD_SENDER_KYC = goog.getMsg('Sender KYC');

/**  @desc Withdraw field on the withdrawal dialog */
var MSG_WITHDRAW_FIELD_ACCT_HOLDER_ID_PHONE_NUMBER = goog.getMsg('Account holder phone #');

/**  @desc Withdraw field on the withdrawal dialog */
var MSG_WITHDRAW_FIELD_INTENDED_PURPOSE = goog.getMsg('Purpose');

/**  @desc Withdraw field on the withdrawal dialog */
var MSG_WITHDRAW_FIELD_BILL_NUMBER = goog.getMsg('Bill number');

/**  @desc Withdraw field on the withdrawal dialog */
var MSG_WITHDRAW_FIELD_BILL_TYPE = goog.getMsg('Bill type');

/**  @desc Withdraw field on the withdrawal dialog */
var MSG_WITHDRAW_FIELD_DUE_DATE = goog.getMsg('Due date');

/** @desc Withdraw field Memo on the withdrawal dialog */
var MSG_WITHDRAW_FIELD_MEMO = goog.getMsg('Memo');

/**
 * @param {number=} broker_id
 * @param {Array.<Array.<string> > remittance_box
 * @param {string=} opt_default_country
 * @param {string=} opt_default_state
 * @param {number=} opt_test_request_timer_in_ms. Defaults to 30 seconds
 * @param {number=} opt_maximum_allowed_delay_in_ms. Defaults to 10 seconds
 * @constructor
 * @extends {goog.events.EventTarget}
 */
bitex.app.BlinkTrade = function(broker_id,
                                remittance_box,
                                opt_default_country,
                                opt_default_symbol,
                                opt_default_state,
                                opt_test_request_timer_in_ms,
                                opt_maximum_allowed_delay_in_ms) {
  goog.events.EventTarget.call(this);

  bootstrap.Dropdown.install();
  bootstrap.Accordion.install();
  bootstrap.Alert.install();

  this.uri_ = new goog.Uri(window.location.href, true);
  var uri_broker_id = this.uri_.getParameterValue('bid');
  if (goog.isDefAndNotNull(uri_broker_id)){
    broker_id = parseInt(uri_broker_id, 10);
  }

  this.dialog_ = null;
  this.error_message_alert_timeout_ = 5000;

  try {
    if (goog.net.cookies.isEnabled() && goog.net.cookies.containsKey('finger_print')) {
      this.finger_print_ = parseInt(goog.net.cookies.get('finger_print'),10);
    } else {
      this.finger_print_ = bitex.util.getBrowserFingerPrint();
      if (goog.net.cookies.isEnabled()){
        goog.net.cookies.set('finger_print', this.finger_print_, -1, '/');
      }
    }
  } catch (e) {}

  this.ip_addresses_ = {'local':undefined, 'public':[]};

  bitex.util.getSTUNIpAddress(goog.bind(this.onSTUNTIpAddressCallback_, this));

  try {
    this.router_  = new bitex.app.UrlRouter( this, '', 'start');
    this.model_   = new bitex.model.Model(document.body);
    this.conn_    = new bitex.api.BitEx(this.finger_print_);
    this.views_   = new goog.ui.Component();
  } catch ( error) {
    this.showDialog(error);
  }

  if (goog.isDefAndNotNull(opt_default_country)) {
    this.model_.set('DefaultCountry', opt_default_country);
  }

  this.model_.set('FingerPrint', this.finger_print_);
  this.model_.set('DefaultBrokerID', broker_id);
  this.model_.set('SelectedBrokerID', broker_id);
  this.model_.set('DefaultSymbol', opt_default_symbol);

  if (goog.isDefAndNotNull(opt_default_state)) {
    this.model_.set('DefaultState', opt_default_state);
  }

  this.model_.set('RemittanceBoxInfo', remittance_box);

  this.open_orders_request_id_ = parseInt( 1e7 * Math.random() , 10 );

  this.maximum_allowed_delay_in_ms_ = opt_maximum_allowed_delay_in_ms || 15000;
  this.test_request_delay_          = opt_test_request_timer_in_ms || 20000;
  this.currency_info_               = {};
  this.all_markets_                 = {};
  this.current_login_request_       = {};
  this.test_request_timer_          = new goog.Timer(this.test_request_delay_);
  this.test_request_timer_.start();
};
goog.inherits(bitex.app.BlinkTrade, goog.events.EventTarget);
goog.addSingletonGetter(bitex.app.BlinkTrade);


/**
 * @type {bitex.app.UrlRouter}
 * @private
 */
bitex.app.BlinkTrade.prototype.router_;

/**
 * @type {bitex.model.Model}
 * @private
 */
bitex.app.BlinkTrade.prototype.model_;


/**
 * @type {number}
 * @private
 */
bitex.app.BlinkTrade.prototype.finger_print_;

/**
 * @type {string}
 * @private
 */
bitex.app.BlinkTrade.prototype.wss_url_;

/**
 * @type {string}
 * @private
 */
bitex.app.BlinkTrade.prototype.rest_url_;

/**
 * @type {bitex.api.BitEx}
 * @private
 */
bitex.app.BlinkTrade.prototype.conn_;

/**
 * @type {goog.Timer}
 * @private
 */
bitex.app.BlinkTrade.prototype.test_request_timer_;

/**
 * @type {goog.Timer}
 * @private
 */
bitex.app.BlinkTrade.prototype.test_request_deadline_timer_;

/**
 * @type {number}
 * @private
 */
bitex.app.BlinkTrade.prototype.maximum_allowed_delay_in_ms_;

/**
 * @type {goog.Timer}
 * @private
 */
bitex.app.BlinkTrade.prototype.test_request_delay_;


/**
 * @type {Object}
 * @private
 */
bitex.app.BlinkTrade.prototype.currency_info_;

/**
 * @type {Array}
 * @private
 */
bitex.app.BlinkTrade.prototype.all_markets_;


/**
 * Event handler.
 * TODO(user): rename it to handler_ after all component subclasses in
 * inside Google have been cleaned up.
 * Code search: http://go/component_code_search
 * @type {goog.events.EventHandler}
 * @private
 */
bitex.app.BlinkTrade.prototype.handler_;

/**
 * @type {goog.ui.Dialog}
 */
bitex.app.BlinkTrade.prototype.dialog_;

/**
 * @type {bitex.view.LoginView}
 */
bitex.app.BlinkTrade.prototype.loginView_;

/**
 * @type {bitex.view.LoginView}
 */
bitex.app.BlinkTrade.prototype.profileView_;

/**
 * @type {goog.ui.Component}
 */
bitex.app.BlinkTrade.prototype.views_;

/**
 * @type {number}
 */
bitex.app.BlinkTrade.prototype.open_orders_request_id_;

/**
 * @type {number}
 */
bitex.app.BlinkTrade.prototype.error_message_alert_timeout_;

/**
 * @type {Object}
 */
bitex.app.BlinkTrade.prototype.ip_addresses_;


/**
 * @type {Object}
 */
bitex.app.BlinkTrade.prototype.current_login_request_;

/**
 * @type {goog.Uri}
 */
bitex.app.BlinkTrade.prototype.uri_;

/**
 * @return {goog.events.EventHandler}
 */
bitex.app.BlinkTrade.prototype.getHandler = function() {
  return this.handler_ ||
      (this.handler_ = new goog.events.EventHandler(this));

};


/**
 * @returns {Object}
 */
bitex.app.BlinkTrade.prototype.getSTUNTIp = function(){
  return this.ip_addresses_;
};

/**
 * @param {string} ip_address
 * @private
 */
bitex.app.BlinkTrade.prototype.onSTUNTIpAddressCallback_ = function(ip_address) {
  if (goog.isDefAndNotNull(ip_address)){
    if (ip_address.match(/^(192\.168\.|169\.254\.|10\.|172\.(1[6-9]|2\d|3[01]))/)) {
      this.ip_addresses_['local'] = ip_address;
    } else {
      this.ip_addresses_['public'].push(ip_address);
    }
    this.conn_.setSTUNTIp(this.ip_addresses_);
  }
};

/**
 * @return {string}
 */
bitex.app.BlinkTrade.prototype.getRestURL = function() {
  return this.rest_url_;
};


bitex.app.BlinkTrade.validateBitcoinAddress_ = function(el, condition, minLength, caption) {

  if (condition && !eval(condition)) {
    return;
  }
  /** @desc Error Validade Required in Validators*/
  var MSG_BITEX_ERROR_VALIDATE_REQUIRED = goog.getMsg("{$c} is required", {c:caption});

  /** @desc Error Validade Bitcoin Address*/
  var MSG_BITEX_ERROR_VALIDATE_BTC_ADDRESS = goog.getMsg("{$c} is not a valid address", {c:caption});


  var elValue = goog.dom.forms.getValue(el);
  if (!goog.isDefAndNotNull(elValue) || goog.string.isEmpty(elValue)) {
    throw MSG_BITEX_ERROR_VALIDATE_REQUIRED;
  }

  if ( !bitex.util.isValidAddress( elValue ) ) {
    throw MSG_BITEX_ERROR_VALIDATE_BTC_ADDRESS;
  }

};

/**
 * @param {string} host_api
 * @param {number} opt_required_level_to_be_a_pro_trader
 */
bitex.app.BlinkTrade.prototype.run = function(host_api, opt_required_level_to_be_a_pro_trader) {
  this.instance_ = this;
  this.host_api_ = host_api;

  this.rest_url_ = 'https://' + this.host_api_;
  this.wss_url_ = 'wss://' + this.host_api_ + '/trade/';

  uniform.Validators.getInstance().registerValidatorFn('validateAddress',  bitex.app.BlinkTrade.validateBitcoinAddress_);


  // Populate all the views
  var startView           = new bitex.view.NullView(this);
  var adminView           = new bitex.view.AdminView(this);
  var twoFactorView       = new bitex.view.TwoFactor(this);
  var faqView             = new bitex.view.NullView(this);
  var themesView          = new bitex.view.NullView(this);
  var partnersView        = new bitex.view.NullView(this);
  var purseioView         = new bitex.view.NullView(this);
  var setNewPasswordView  = new bitex.view.SetNewPasswordView(this);
  var loginView           = new bitex.view.LoginView(this);
  var signUpView          = new bitex.view.SignupView(this);
  var forgotPasswordView  = new bitex.view.ForgotPasswordView(this);
  var depositView         = new bitex.view.DepositView(this, false);
  var depositRequestsView = new bitex.view.DepositView(this, true);
  var verificationView    = new bitex.view.VerificationView(this);
  var offerBookView       = new bitex.view.OfferBookView(this);
  var historyView         = new bitex.view.HistoryView(this);
  var withdrawView        = new bitex.view.WithdrawView(this, false);
  var withdrawRequestsView= new bitex.view.WithdrawView(this, true);
  var cardView            = new bitex.view.CardView(this);
  var customersView       = new bitex.view.CustomersView(this);
  var accountOverviewView = new bitex.view.AccountOverview(this);
  var brokerView          = new bitex.view.BrokerView(this);
  var marketView          = new bitex.view.MarketView(this);
  var rankingView         = new bitex.view.RankingView(this);
  var tradingView         = new bitex.view.TradingView(this);
  var algorithmTradingView= new bitex.view.AlgorithmTradingView(this);
  var toolBarView         = new bitex.view.ToolBarView(this);
  var sideBarView         = new bitex.view.SideBarView(this);
  var ledgerView          = new bitex.view.LedgerView(this);
  var profileView         = new bitex.view.ProfileView(this);
  var apiView             = new bitex.view.APIView(this);
  var lineOfCreditView    = new bitex.view.LineOfCreditView(this);
  var brokerApplicationView= new bitex.view.NullView(this);

  this.views_.addChild( toolBarView         );
  this.views_.addChild( sideBarView         );
  this.views_.addChild( startView           );
  this.views_.addChild( adminView           );
  this.views_.addChild( twoFactorView       );
  this.views_.addChild( faqView             );
  this.views_.addChild( themesView          );
  this.views_.addChild( partnersView        );
  this.views_.addChild( purseioView         );
  this.views_.addChild( setNewPasswordView  );
  this.views_.addChild( loginView           );
  this.views_.addChild( signUpView          );
  this.views_.addChild( forgotPasswordView  );
  this.views_.addChild( tradingView         );
  this.views_.addChild( algorithmTradingView);
  this.views_.addChild( offerBookView       );
  this.views_.addChild( historyView         );
  this.views_.addChild( depositView         );
  this.views_.addChild( depositRequestsView );
  this.views_.addChild( withdrawView        );
  this.views_.addChild( withdrawRequestsView);
  this.views_.addChild( cardView            );
  this.views_.addChild( customersView       );
  this.views_.addChild( accountOverviewView );
  this.views_.addChild( verificationView    );
  this.views_.addChild( brokerView          );
  this.views_.addChild( marketView          );
  this.views_.addChild( rankingView         );
  this.views_.addChild( ledgerView          );
  this.views_.addChild( apiView             );
  this.views_.addChild( lineOfCreditView    );
  this.views_.addChild( profileView          , false);
  this.views_.addChild( brokerApplicationView);

  startView.decorate(goog.dom.getElement('start'));
  faqView.decorate(goog.dom.getElement('faq'));
  themesView.decorate(goog.dom.getElement('themes'));
  sideBarView.decorate(goog.dom.getElement('id_sidebar'));
  toolBarView.decorate(goog.dom.getElement('id_toolbar'));
  loginView.decorate(goog.dom.getElement('signin'));
  signUpView.decorate(goog.dom.getElement('signup'));
  this.views_.decorate(document.body);


  this.router_.addView( '(account_overview)/(\\w+)/$'   , accountOverviewView );
  this.router_.addView( '(start)'                       , startView           );
  this.router_.addView( '(admin_view)'                  , adminView           );
  this.router_.addView( '(twofactor)'                   , twoFactorView       );
  this.router_.addView( '(faq)'                         , faqView             );
  this.router_.addView( '(themes)'                      , themesView          );
  this.router_.addView( '(partners)'                    , partnersView        );
  this.router_.addView( '(purseio)'                     , purseioView         );
  this.router_.addView( '(admin)'                       , startView           );
  this.router_.addView( '(set_new_password)'            , setNewPasswordView  );
  this.router_.addView( '(signin)'                      , loginView           );
  this.router_.addView( '(signup)'                      , signUpView          );
  this.router_.addView( '(forgot_password)'             , forgotPasswordView  );
  this.router_.addView( '(algotrading)'                 , algorithmTradingView);
  this.router_.addView( '(trading)'                     , tradingView         );
  this.router_.addView( '(offerbook)'                   , offerBookView       );
  this.router_.addView( '(history)'                     , historyView         );
  this.router_.addView( '(deposit_requests)'            , depositRequestsView );
  this.router_.addView( '(deposit)'                     , depositView         );
  this.router_.addView( '(withdraw_requests)'           , withdrawRequestsView);
  this.router_.addView( '(withdraw)'                    , withdrawView        );
  this.router_.addView( '(card)'                        , cardView            );
  this.router_.addView( '(customers)'                   , customersView       );
  this.router_.addView( '(verification)'                , verificationView    );
  this.router_.addView( '(my_broker)'                   , brokerView          );
  this.router_.addView( '(market)'                      , marketView          );
  this.router_.addView( '(ranking)'                     , rankingView         );
  this.router_.addView( '(ledger)'                      , ledgerView          );
  this.router_.addView( '(profile)'                     , profileView         );
  this.router_.addView( '(api)'                         , apiView             );
  this.router_.addView( '(line_of_credit)'              , lineOfCreditView    );
  this.router_.addView( '(broker_application)'          , brokerApplicationView);

  var handler = this.getHandler();

  handler.listen( this.router_ , bitex.app.UrlRouter.EventType.SET_VIEW, this.onBeforeSetView_ );

  handler.listen( this.conn_, bitex.api.BitEx.EventType.OPENED, this.onConnectionOpen_ );
  handler.listen( this.conn_, bitex.api.BitEx.EventType.CLOSED, this.onConnectionClose_);
  handler.listen( this.conn_, bitex.api.BitEx.EventType.ERROR ,  this.onConnectionError_);
  handler.listen( this.conn_, bitex.api.BitEx.EventType.ERROR_MESSAGE, this.onConnectionErrorMessage_);


  handler.listen( this.conn_ , bitex.api.BitEx.EventType.BROKER_LIST_RESPONSE, this.onBrokerListResponse_);
  handler.listen( this.conn_ , bitex.api.BitEx.EventType.SECURITY_LIST, this.onSecurityList_);
  handler.listen( this.conn_ , bitex.api.BitEx.EventType.LOGIN_OK, this.onUserLoginOk_);
  handler.listen( this.conn_ , bitex.api.BitEx.EventType.LOGIN_ERROR, this.onUserLoginError_);

  handler.listen( this.test_request_timer_, goog.Timer.TICK, this.onTestRequestTimer_ );
  handler.listen( this.conn_ , bitex.api.BitEx.EventType.HEARTBEAT, this.onHearbeat_);
  handler.listen( this.conn_ , bitex.api.BitEx.EventType.TEST_REQUEST, this.onTestRequest_);

  handler.listen(this.views_, bitex.view.View.EventType.CHANGE_PASSWORD, this.onUserChangePassword_ );
  handler.listen( this.conn_ , bitex.api.BitEx.EventType.CHANGE_PASSWORD_RESPONSE, this.onChangePasswordResponse_);

  handler.listen( this.conn_ , bitex.api.BitEx.EventType.TWO_FACTOR_SECRET, this.onBitexTwoFactorSecretResponse_);
  handler.listen( this.conn_ , bitex.api.BitEx.EventType.BALANCE_RESPONSE, this.onBitexBalanceResponse_);
  handler.listen( this.conn_ , bitex.api.BitEx.EventType.POSITION_RESPONSE, this.onBitexPositionResponse_);

  handler.listen( this.conn_ , bitex.api.BitEx.EventType.PASSWORD_CHANGED_OK, this.onBitexPasswordChangedOk_);
  handler.listen( this.conn_ , bitex.api.BitEx.EventType.PASSWORD_CHANGED_ERROR, this.onBitexPasswordChangedError_);
  handler.listen( this.conn_ , bitex.api.BitEx.EventType.DEPOSIT_METHODS_RESPONSE, this.onBitexDepositMethodsResponse_ );

  handler.listen( this.conn_ , bitex.api.BitEx.EventType.DEPOSIT_REFRESH, this.onBitexDepositIncrementalUpdate_);
  handler.listen( this.conn_ , bitex.api.BitEx.EventType.WITHDRAW_REFRESH, this.onBitexWithdrawIncrementalUpdate_);

  handler.listen( this.conn_, bitex.api.BitEx.EventType.ORDER_LIST_RESPONSE + '.' + this.open_orders_request_id_, this.onBitexOrderListResponse_);
  handler.listen( this.conn_ , bitex.api.BitEx.EventType.EXECUTION_REPORT, this.onBitexExecutionReport_);

  handler.listen( this.conn_, bitex.api.BitEx.EventType.VERIFY_CUSTOMER_UPDATE, this.onBitexVerifyCustomerUpdate_ );

  handler.listen( this.conn_,bitex.api.BitEx.EventType.WITHDRAW_RESPONSE, this.onBitexWithdrawResponse_);
  handler.listen( this.conn_,bitex.api.BitEx.EventType.WITHDRAW_CONFIRMATION_RESPONSE, this.onBitexWithdrawConfirmationResponse_);

  handler.listen( this.conn_, bitex.api.BitEx.EventType.UPDATE_PROFILE_RESPONSE, this.onUpdateProfileResponse_);

  handler.listen( this.conn_, bitex.api.BitEx.EventType.SECURITY_STATUS, this.onBitexSecurityStatus_ );

  handler.listen( document.body, goog.events.EventType.CLICK , this.onBodyClick_);
  handler.listen( document.body, goog.events.EventType.CHANGE , this.onBodyChange_);


  // Listen to the views
  handler.listen(signUpView, bitex.view.SignupView.EventType.SIGNUP, this.onUserSignupButton_ );
  handler.listen(loginView, bitex.view.LoginView.EventType.LOGIN, this.onUserLoginButtonClick_) ;

  handler.listen(this.views_, bitex.view.View.EventType.ENABLE_TWOFACTOR, this.onUserEnableTwoFactor_);
  handler.listen(this.views_, bitex.view.View.EventType.DISABLE_TWOFACTOR, this.onUserDisableTwoFactor_);

  handler.listen(forgotPasswordView, bitex.view.ForgotPasswordView.EventType.RECOVER_PASSWORD, this.onUserForgotPassword_);
  handler.listen(setNewPasswordView, bitex.view.SetNewPasswordView.EventType.SET_NEW_PASSWORD, this.onUserSetNewPassword_);
  handler.listen(sideBarView, bitex.view.SideBarView.EventType.CHANGE_MARKET, this.onUserChangeMarket_ );

  handler.listen(this.views_, bitex.ui.AdvancedOrderEntry.EventType.SUBMIT, this.onUserOrderEntry_ );
  handler.listen(this.views_, bitex.ui.SimpleOrderEntry.EventType.SUBMIT, this.onUserOrderEntry_ );
  handler.listen(this.views_, bitex.view.View.EventType.CANCEL_ORDER, this.onUserCancelOrder_ );
  handler.listen(this.views_, bitex.view.View.EventType.CANCEL_REPLACE_ORDER, this.onUserCancelReplaceOrder_ );

  handler.listen(this.views_, bitex.view.View.EventType.MARKET_DATA_SUBSCRIBE, this.onUserMarketDataSubscribe_);
  handler.listen(this.views_, bitex.view.View.EventType.MARKET_DATA_UNSUBSCRIBE, this.onUserMarketDataUnsubscribe_);

  handler.listen(this.views_, bitex.view.View.EventType.SECURITY_STATUS_SUBSCRIBE, this.onUserSecurityStatusSubscribe_);
  handler.listen(this.views_, bitex.view.View.EventType.SECURITY_STATUS_UNSUBSCRIBE, this.onUserSecurityStatusUnsubscribe_);

  handler.listen(this.views_, bitex.view.View.EventType.USER_CANCEL_WITHDRAW, this.onUserCancelWithdrawal_ );
  handler.listen(this.views_, bitex.view.View.EventType.REQUEST_WITHDRAW, this.onUserWithdrawRequest_ );
  handler.listen(this.views_, bitex.view.View.EventType.CONFIRM_WITHDRAW, this.onUserConfirmWithdraw_ );
  handler.listen(this.views_, bitex.view.View.EventType.PROCESS_WITHDRAW, this.onBrokerProcessWithdraw_ );
  handler.listen(this.views_, bitex.view.View.EventType.USER_COMMENT, this.onUserWithdrawComment_ );

  handler.listen(this.views_, bitex.view.View.EventType.DEPOSIT_REQUEST, this.onUserDepositRequest_ );
  handler.listen(this.views_, bitex.view.View.EventType.PROCESS_DEPOSIT, this.onProcessDeposit_ );
  handler.listen(this.views_, bitex.view.View.EventType.INSTANTANEOUS_DEPOSIT, this.onInstantFiatDeposit_);


  handler.listen(this.views_, bitex.view.View.EventType.CONNECT_BITEX, this.onUserConnectBitEx_);

  handler.listen(this.views_, bitex.view.View.EventType.SHOW_QR, this.onUserShowQr_);
  handler.listen(this.views_, bitex.view.View.EventType.SHOW_KYC, this.onUserShowKYC_);


  handler.listen(this.views_, bitex.view.View.EventType.SHOW_RECEIPT, this.onShowReceipt_);
  handler.listen(this.views_, bitex.view.View.EventType.UPLOAD_RECEIPT, this.onUserUploadReceipt_);

  handler.listen(this.views_, bitex.view.View.EventType.SET_VERIFIED, this.onBrokerSetUserAsVerified_);
  handler.listen(this.views_, bitex.view.View.EventType.UPDATE_PROFILE, this.onUpdateProfile_ );
  handler.listen(this.views_, bitex.view.View.EventType.CHANGE_EMAIL, this.onBrokerChangeEmail_);

  handler.listen(this.views_, bitex.view.View.EventType.FILE_VIEW, this.onUserFileView_);

  handler.listen(this.getModel(),
                  bitex.model.Model.EventType.SET + "Balance", this.onUpdateBalance_ );
  handler.listen(this.getModel(),
                  bitex.model.Model.EventType.SET + "LockedBalance", this.onUpdateLockedBalance_ );
  handler.listen(this.getModel(),
                  bitex.model.Model.EventType.SET + "AvailableBalance", this.onUpdateAvailableBalance_ );


  var initial_view = 'start';
  if (!goog.string.isEmpty(location.hash)){
    initial_view = location.hash.substr(1);
  }

  this.router_.setView(initial_view);
  this.router_.init();

  this.loginView_ = loginView;
  this.profileView_ = profileView;


  // don't forget to set those variables during the connectionOpen because the
  // model is clear during the connection open.
  this.getModel().set('RequiredLevelProTrader', opt_required_level_to_be_a_pro_trader || 0);
  var referrer = this.uri_.getParameterValue('r');
  if (goog.isDefAndNotNull(referrer) && goog.string.isNumeric( referrer )){
    referrer = parseInt(referrer, 10);
  }


  var user_token = this.uri_.getParameterValue('token');
  if (!goog.isDefAndNotNull(user_token)) {
    var uri_fragment_list = this.uri_.getFragment().split('#');
    if (uri_fragment_list.length > 1) {
      var uri_fragment_token = uri_fragment_list.pop();
      if (uri_fragment_token.length > 0 && goog.string.isNumeric(uri_fragment_token) ) {
        user_token  = uri_fragment_token;
        this.uri_.setFragment(uri_fragment_list.join('#'));
        window.location.replace(this.uri_.toString());  // remove the token from the url.
      }
    }
  }




  this.getModel().set('HasToken', goog.isDefAndNotNull(user_token) );

  var trust_device = this.uri_.getParameterValue('trust');
  if (goog.isDefAndNotNull(trust_device) && trust_device == '1' ){
    trust_device = true;
  } else {
    trust_device = false;
  }
  this.getModel().set('Token',user_token);
  this.getModel().set('Referrer',referrer);
  this.getModel().set('TrustDevice',trust_device);
  this.getModel().set('JSVersion', '0.3' );
  this.getModel().set('UserLogged',false);
  this.getModel().set('UriPath', this.uri_.removeParameter("token").toString());

  this.connectBitEx();

  this.preventReload();

  if ("Notification" in window ) {
    if (Notification.permission !== "granted" && Notification.permission !== 'denied') {
      Notification.requestPermission();
    }
  }

};

bitex.app.BlinkTrade.prototype.onBitexSecurityStatus_ = function(e) {
  var msg = e.data;

  var model = this.getModel();
  var currency = msg["Symbol"].substr(3);
  var crypto_currency = msg["Symbol"].substr(0,3);

  var vwap = parseInt(msg["BuyVolume"]/msg["SellVolume"] * 1.e8,10);
  if ('VWAP' in msg) {
    vwap = msg["VWAP"];
  }

  model.set(msg['Market'] + '_' + msg['Symbol'] + '_VWAP',vwap, true);
  model.set(msg['Market'] + '_' + msg['Symbol'] + '_VOLUME', msg["SellVolume"], true);
  model.set(msg['Market'] + '_' + msg['Symbol'] + '_SELL_VOLUME',msg["SellVolume"], true);
  model.set(msg['Market'] + '_' + msg['Symbol'] + '_BUY_VOLUME',msg["BuyVolume"], true);
  model.set(msg['Market'] + '_' + msg['Symbol'] + '_LOW_PX',msg["LowPx"], true);
  model.set(msg['Market'] + '_' + msg['Symbol'] + '_HIGH_PX',msg["HighPx"], true);
  model.set(msg['Market'] + '_' + msg['Symbol'] + '_BEST_BID',msg["BestBid"], true);
  model.set(msg['Market'] + '_' + msg['Symbol'] + '_BEST_ASK',msg["BestAsk"], true);
  model.set(msg['Market'] + '_' + msg['Symbol'] + '_LAST_PX',msg["LastPx"], true);


  model.set('formatted_' + msg['Market'] + '_' + msg['Symbol'] + '_VWAP',this.formatCurrency(vwap/1.e8, currency, true), true);
  model.set('formatted_' + msg['Market'] + '_' + msg['Symbol'] + '_VOLUME',this.formatCurrency(msg["SellVolume"]/1.e8,crypto_currency, true), true);
  model.set('formatted_' + msg['Market'] + '_' + msg['Symbol'] + '_SELL_VOLUME',this.formatCurrency(msg["SellVolume"]/1.e8,crypto_currency, true), true);
  model.set('formatted_' + msg['Market'] + '_' + msg['Symbol'] + '_BUY_VOLUME',this.formatCurrency(msg["BuyVolume"]/1.e8,currency, true), true);
  model.set('formatted_' + msg['Market'] + '_' + msg['Symbol'] + '_LOW_PX',this.formatCurrency(msg["LowPx"]/1.e8,currency, true ), true);
  model.set('formatted_' + msg['Market'] + '_' + msg['Symbol'] + '_HIGH_PX',this.formatCurrency(msg["HighPx"]/1.e8,currency, true ), true);
  model.set('formatted_' + msg['Market'] + '_' + msg['Symbol'] + '_BEST_BID',this.formatCurrency(msg["BestBid"]/1.e8,currency, true ), true);
  model.set('formatted_' + msg['Market'] + '_' + msg['Symbol'] + '_BEST_ASK',this.formatCurrency(msg["BestAsk"]/1.e8,currency, true ), true);
  model.set('formatted_' + msg['Market'] + '_' + msg['Symbol'] + '_LAST_PX',this.formatCurrency(msg["LastPx"]/1.e8,currency, true ), true);

  this.calculatePortfolioValue(currency);
  this.calculatePortfolioValue(crypto_currency);

  this.changeTitleTicker_();
};

/**
 * @private
 */
bitex.app.BlinkTrade.prototype.changeTitleTicker_  = function() {
  var currentTitle = document.title.replace(new RegExp(/^.*?-/), "");
  if (goog.isDefAndNotNull(this.getModel().get('DefaultSymbol'))) {
    document.title = this.getModel().get(
      'formatted_BLINK_' + this.getModel().get('DefaultSymbol') + '_LAST_PX') + ' - ' + currentTitle;
  }
};

/**
 * @param {bitex.model.ModelEvent} e
 * @private
 */
bitex.app.BlinkTrade.prototype.onUpdateAvailableBalance_  = function(e) {
  var value_fmt = new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.DECIMAL);
  value_fmt.setMaximumFractionDigits(8);
  value_fmt.setMinimumFractionDigits(2);


  goog.object.forEach(e.data, function(broker_balance, broker_id){
    goog.object.forEach(broker_balance, function(account_balance, account_id){
      goog.object.forEach(account_balance, function(balance, currency){
        var available_balance_key = 'available_balance_' + broker_id + ':' + account_id + '_'  + currency;
        this.getModel().set( available_balance_key , balance );

        balance = new bitex.primitives.Price(balance, this.getCurrencyPip(currency)  ).floor();
        this.getModel().set('formatted_' + available_balance_key, this.formatCurrency(balance/1e8, currency, true));
        this.getModel().set('formatted_' + available_balance_key + '_value', value_fmt.format(balance/1e8));
      }, this);
    }, this);
  }, this);
};

/**
 * @returns {number}
 */
bitex.app.BlinkTrade.prototype.getFingerPrint = function(){
  return this.finger_print_;
};


/**
 * @param {bitex.model.ModelEvent} e
 * @private
 */
bitex.app.BlinkTrade.prototype.onUpdateLockedBalance_ = function(e) {
  var should_update_available_balance = false;
  var available_balance = this.getModel().get('AvailableBalance');
  if (!goog.isDefAndNotNull(available_balance)) {
    available_balance = {};
    should_update_available_balance = true;
  }
  var deposit_balance = this.getModel().get('Balance');


  var value_fmt = new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.DECIMAL);
  value_fmt.setMaximumFractionDigits(8);
  value_fmt.setMinimumFractionDigits(2);


  goog.object.forEach(e.data, function(broker_balance, broker_id){
    if (!goog.isDefAndNotNull(available_balance[broker_id])) {
      available_balance[broker_id] = {};
      should_update_available_balance = true;
    }

    goog.object.forEach(broker_balance, function(account_balance, account_id){
      if (!goog.isDefAndNotNull(available_balance[broker_id][account_id])) {
        available_balance[broker_id][account_id] = {};
        should_update_available_balance = true;
      }

      goog.object.forEach(account_balance, function(balance, currency){

        if (!goog.isDefAndNotNull(available_balance[broker_id][account_id][currency])) {
          available_balance[broker_id][account_id][currency] = balance;
          try {
            available_balance[broker_id][account_id][currency] = deposit_balance[broker_id][account_id][currency] - balance;
          } catch(e){}
          should_update_available_balance = true;
        }

        try {
          if (available_balance[broker_id][account_id][currency] != (deposit_balance[broker_id][account_id][currency] - balance)){
            available_balance[broker_id][account_id][currency] = deposit_balance[broker_id][account_id][currency] - balance;
            should_update_available_balance = true;
          }
        } catch(e){}

        var locked_balance_key = 'locked_balance_' + broker_id + ':' + account_id + '_'  + currency;
        this.getModel().set( locked_balance_key , balance );
        this.getModel().set('formatted_' + locked_balance_key, this.formatCurrency(balance/1e8, currency, true));
        this.getModel().set('formatted_' + locked_balance_key + '_value', value_fmt.format(balance/1e8));
      }, this);
    }, this);
  }, this);

  if (should_update_available_balance) {
    this.getModel().set('AvailableBalance', available_balance, true);
  }
};


/**
 * @param {string} portfolio_currency
 */
bitex.app.BlinkTrade.prototype.calculatePortfolioValue = function(portfolio_currency) {
  var appModel = this.getModel();

  var broker = appModel.get('Broker');
  if (!goog.isDefAndNotNull(broker)) {
    return;
  }

  if (portfolio_currency.length != 3){  // not a currency
    return;
  }

  var balance_model_key = 'Balance_' + appModel.get('Broker')['BrokerID'] +  '_' + appModel.get('UserID');
  var position_model_key = 'Position_' + appModel.get('Broker')['BrokerID'] +  '_' + appModel.get('UserID');
  var balance_portfolio_balance = appModel.get(balance_model_key + '_' + portfolio_currency, 0);
  var position_portfolio_balance = appModel.get(position_model_key + '_' + portfolio_currency, 0);

  var user_balances = appModel.get(balance_model_key);
  goog.object.forEach(user_balances, function(balance, balance_currency){
    if ( ! goog.string.endsWith(balance_currency, '_locked')
        && balance_currency.length == 3
        && portfolio_currency != balance_currency) {

      var portfolio_currency_exchange_ticker;
      if (this.isCryptoCurrency(balance_currency)) {
        portfolio_currency_exchange_ticker = 'BLINK_' + balance_currency + portfolio_currency + '_BEST_BID';
        balance_portfolio_balance += (
          appModel.get(balance_model_key + '_' + balance_currency, 0) *
          appModel.get(portfolio_currency_exchange_ticker, 0) /  1e8 );

        position_portfolio_balance += (
          appModel.get(position_model_key + '_' + balance_currency, 0) *
          appModel.get(portfolio_currency_exchange_ticker, 0) /  1e8 );

      } else if (this.isCryptoCurrency(portfolio_currency)) {
        portfolio_currency_exchange_ticker = 'BLINK_' + portfolio_currency + balance_currency + '_BEST_ASK';
        balance_portfolio_balance += (
          appModel.get(balance_model_key + '_' + balance_currency, 0) /
          appModel.get(portfolio_currency_exchange_ticker, 0) *  1e8 );

        position_portfolio_balance += (
          appModel.get(position_model_key + '_' + balance_currency, 0) /
          appModel.get(portfolio_currency_exchange_ticker, 0) *  1e8 );
      } else {
        var currency_bitcoin_exchange_ticker = 'BLINK_BTC' + balance_currency + '_BEST_ASK';
        var portfolio_bitcoin_exchange_ticker = 'BLINK_BTC' + portfolio_currency + '_BEST_BID';

        balance_portfolio_balance += (
          appModel.get(balance_model_key + '_' + balance_currency, 0) /
          appModel.get(currency_bitcoin_exchange_ticker) * appModel.get(portfolio_bitcoin_exchange_ticker) );

        position_portfolio_balance += (
          appModel.get(position_model_key + '_' + balance_currency, 0) /
          appModel.get(currency_bitcoin_exchange_ticker) * appModel.get(portfolio_bitcoin_exchange_ticker) );
      }
    }
  }, this);
  appModel.set('Portfolio_' + balance_model_key + '_' + portfolio_currency, balance_portfolio_balance);
  appModel.set('Portfolio_' + position_model_key + '_' + portfolio_currency, position_portfolio_balance);
};

/**
 * @param {bitex.model.ModelEvent} e
 * @private
 */
bitex.app.BlinkTrade.prototype.onUpdateBalance_ = function(e) {
  var should_update_available_balance = false;
  var available_balance = this.getModel().get('AvailableBalance');
  if (!goog.isDefAndNotNull(available_balance)) {
    available_balance = {};
    should_update_available_balance = true;
  }

  var locked_balance = this.getModel().get('LockedBalance');

  var value_fmt = new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.DECIMAL);
  value_fmt.setMaximumFractionDigits(8);
  value_fmt.setMinimumFractionDigits(2);


  goog.object.forEach(e.data, function(broker_balance, broker_id){
    if (!goog.isDefAndNotNull(available_balance[broker_id])) {
      available_balance[broker_id] = {};
      should_update_available_balance = true;
    }

    goog.object.forEach(broker_balance, function(account_balance, account_id){
      if (!goog.isDefAndNotNull(available_balance[broker_id][account_id])) {
        available_balance[broker_id][account_id] = {};
        should_update_available_balance = true;
      }


      goog.object.forEach(account_balance, function(balance, currency){
        if (!goog.isDefAndNotNull(available_balance[broker_id][account_id][currency])) {
          available_balance[broker_id][account_id][currency] = balance;
          try {
            available_balance[broker_id][account_id][currency] = balance - locked_balance[broker_id][account_id][currency];
          } catch(e){}
          should_update_available_balance = true;
        }

        try {
          if (available_balance[broker_id][account_id][currency] != (balance - locked_balance[broker_id][account_id][currency])){
            available_balance[broker_id][account_id][currency] = balance - locked_balance[broker_id][account_id][currency];
            should_update_available_balance = true;
          }
        } catch(e){}

        var balance_key = 'balance_' + broker_id + ':' + account_id + '_'  + currency;
        if (this.getApplication().isCryptoCurrency(currency)) {

        }

        this.getModel().set( balance_key , balance );

        balance = new bitex.primitives.Price(balance, this.getCurrencyPip(currency)  ).floor();
        this.getModel().set('formatted_' + balance_key, this.formatCurrency(balance/1e8, currency, true));
        this.getModel().set('formatted_' + balance_key + '_value', value_fmt.format(balance/1e8));
      }, this);
    }, this);
  }, this);

  if (should_update_available_balance) {
    this.getModel().set('AvailableBalance', available_balance, true);
  }

  var securityList = this.getModel().get('SecurityList');
  if (goog.isDefAndNotNull(securityList)) {
    goog.array.forEach(securityList['Instruments'], function(instrument) {
      if (instrument["Market"] == "BLINK") {
        this.calculatePortfolioValue(instrument['Currency']);
      }
    }, this);
  }

  var broker = this.getModel().get('Broker');
  goog.array.forEach(broker['CryptoCurrencies'], function(broker_crypto_currency_info) {
    this.calculatePortfolioValue(broker_crypto_currency_info['CurrencyCode']);
  }, this);
};

bitex.app.BlinkTrade.prototype.onBitexWithdrawConfirmationResponse_ = function(e) {
  var msg = e.data;

  if (!goog.isDefAndNotNull(msg['Status']) || msg['Status'] != '1' ) {

      /** @desc invalid confirmation toker */
      var MSG_INVALID_CONFIRMATION_TOKEN = goog.getMsg("Invalid confirmation token!");

      this.showNotification('error', MSG_INVALID_CONFIRMATION_TOKEN  );
      this.onBitexWithdrawResponse_(e);
  }
};


/**
 * @param {goog.events.Event} e
 * @private
 */
bitex.app.BlinkTrade.prototype.onBitexWithdrawResponse_ = function(e) {
  var msg = e.data;



  if (msg['Status'] == "0") {
    var dlg_content;
    var need_second_factor = true;
    var second_factor_type = msg['SecondFactorType'];

    if (second_factor_type == 'EMAIL') {
      dlg_content = bitex.templates.WithdrawConfirmationDialogContent();
    } else if (second_factor_type == 'OTP') {
      dlg_content = bitex.templates.GoogleAuthenticationCodeDialogContent();
    } else if (second_factor_type == 'OTP+EMAIL') {
      dlg_content = bitex.templates.EmailGoogleAuthenticationCodeDialogContent();
    } else if (this.getModel().get('Profile')['NeedWithdrawEmail']) {
      if (this.getModel().get('TwoFactorEnabled')) {
        dlg_content = bitex.templates.EmailGoogleAuthenticationCodeDialogContent();
        second_factor_type = 'OTP+EMAIL';
      } else {
        dlg_content = bitex.templates.WithdrawConfirmationDialogContent();
        second_factor_type = 'EMAIL';
      }
    } else {
      need_second_factor = false;
    }

    if (need_second_factor) {
      /**
       * @desc withdraw confirmation dialog title
       */
      var MSG_WITHDRAW_CONFIRMATION_DIALOG_TITLE = goog.getMsg('Confirm');

      var withdrawConfirmationDialog = this.showDialog(dlg_content,
                                                       MSG_WITHDRAW_CONFIRMATION_DIALOG_TITLE,
                                                       bitex.ui.Dialog.ButtonSet.createOkCancel());

      var form_element = goog.dom.getFirstElementChild(withdrawConfirmationDialog.getContentElement());
      var withdraw_confirmation_uniform = new uniform.Uniform();
      withdraw_confirmation_uniform.decorate(  form_element );

      var handler = this.getHandler();
      handler.listen(withdrawConfirmationDialog, goog.ui.Dialog.EventType.SELECT, function(e) {
        if (e.key == 'ok') {

          var error_list = withdraw_confirmation_uniform.validate();
          if (error_list.length > 0) {
            goog.array.forEach(error_list, function(error_msg) {
              this.showNotification( 'error', error_msg );
            }, this );

            e.stopPropagation();
            e.preventDefault();
          } else {
            var withdraw_confirmation_data = withdraw_confirmation_uniform.getAsJSON();
            var withdraw_id = msg['WithdrawID'];
            var token = withdraw_confirmation_data['token'];
            var confirmation_code = withdraw_confirmation_data['confirmation_code'];

            if (second_factor_type == "OTP") {
              this.conn_.confirmWithdraw(undefined, withdraw_id, token);
            } else if (second_factor_type == 'OTP+EMAIL') {
              this.conn_.confirmWithdraw( confirmation_code, withdraw_id, token );
            } else if (second_factor_type == "EMAIL") {
              this.conn_.confirmWithdraw( confirmation_code, withdraw_id );
            }
          }
        }
      }, this);
    }
  }



};

/**
 * Prevent reload page
 */
bitex.app.BlinkTrade.prototype.preventReload = function() {
  /**
   * @desc Warning message to prevent page reload
   */
  var MSG_PREVENT_RELOAD = goog.getMsg('You will lose your connection');
  window.onbeforeunload = function(e){
      if(this.conn_.isLogged())
          return MSG_PREVENT_RELOAD;
      else
          e.preventDefault();
  }.bind(this);
};


/**
 * Connect to the bitex Server
 */
bitex.app.BlinkTrade.prototype.connectBitEx = function(){
  try {
    this.conn_.open(this.wss_url_);
  } catch( e ) {
    /**
     * @desc Connection error message when trying to open websockets connection for the first time
     */
    var MSG_CONNECTION_ERROR = goog.getMsg('Error connecting to the server. Your browser MUST SUPPORT WebSockets.');

    var error_dialog = bitex.templates.ErrorDialogContent({
                                                            error_message: MSG_CONNECTION_ERROR,
                                                            error_code: 'WebSocket: ' + e
                                                          });

    var dlg = this.showDialog(error_dialog, undefined, bitex.ui.Dialog.ButtonSet.createYesNoCancel());
  }
};

bitex.app.BlinkTrade.prototype.getBitexConnection = function(){
  return this.conn_;
};

/**
 * @param {string} view_id
 */
bitex.app.BlinkTrade.prototype.setView = function(view_id){

  this.router_.setView(view_id);
};


bitex.app.BlinkTrade.prototype.onUserMarketDataSubscribe_ = function(e) {
  this.conn_.subscribeMarketData(e.target.getMDMarketDepth(),
                                 e.target.getMDInstruments(),
                                 e.target.getMDEntries(),
                                 e.target.getMDSubscriptionId());
};

bitex.app.BlinkTrade.prototype.onUserMarketDataUnsubscribe_ = function(e) {
  this.conn_.unSubscribeMarketData(e.target.getMDSubscriptionId());
};

bitex.app.BlinkTrade.prototype.onUserSecurityStatusSubscribe_ = function(e) {
//  this.conn_.subscribeSecurityStatus(e.target.getSecurities(),
//                                 e.target.getSecSubscriptionId());
};

bitex.app.BlinkTrade.prototype.onUserSecurityStatusUnsubscribe_ = function(e) {
//  this.conn_.unSubscribeSecurityStatus(e.target.getSecSubscriptionId());
};


/**
 * @param {string} symbol
 * @return {string}
 */
bitex.app.BlinkTrade.prototype.getPriceCurrencyFromSymbol = function(symbol) {
  return symbol.substr(3);
};
/**
 * @param {string} symbol
 * @return {string}
 */
bitex.app.BlinkTrade.prototype.getQtyCurrencyFromSymbol = function(symbol) {
  return symbol.substr(0,3);
};

/**
 * @param {goog.events.Event} e
 */
bitex.app.BlinkTrade.prototype.onUserChangePassword_ = function(e) {

  var password = e.target.getCurrentPassword();
  var new_password = e.target.getNewPassword();


  this.getBitexConnection().changePassword(this.getModel().get('SelectedBrokerID'),
                                           password,
                                           new_password);
};

/**
 * @param {bitex.api.BitExEvent} e
 */
bitex.app.BlinkTrade.prototype.onChangePasswordResponse_ = function(e) {
  var msg = e.data;

  if (msg['NeedSecondFactor']) {
    /**
     * @desc google authentication dialog title
     */
    var MSG_CHANGE_PASSWORD_TWO_STEPS_AUTHENTICATION_DIALOG_TITLE = goog.getMsg('2 steps authentication');



    var dlg_content = bitex.templates.GoogleAuthenticationCodeDialogContent();

    var dlg_ = this.showDialog(dlg_content,
                               MSG_CHANGE_PASSWORD_TWO_STEPS_AUTHENTICATION_DIALOG_TITLE,
                               bitex.ui.Dialog.ButtonSet.createOkCancel() );
    var gauth_uniform = new uniform.Uniform();
    gauth_uniform.decorate(goog.dom.getFirstElementChild(dlg_.getContentElement()));

    var handler = this.getHandler();
    handler.listen(dlg_, goog.ui.Dialog.EventType.SELECT, function(e) {
      if (e.key == 'ok') {
        var error_list = gauth_uniform.validate();
        if (error_list.length > 0) {
          goog.array.forEach(error_list, function(error_msg) {
            this.showNotification( 'error', error_msg );
          }, this );

          e.stopPropagation();
          e.preventDefault();
        } else {
          var second_factor = gauth_uniform.getAsJSON()['token'];

          var password = this.profileView_.getCurrentPassword();
          var new_password = this.profileView_.getNewPassword();

          this.getBitexConnection().changePassword(this.getModel().get('SelectedBrokerID'),
                                                   password,
                                                   new_password,
                                                   second_factor );
          dlg_.dispose();
        }
      }
    });
  } else {
    if (msg['UserStatusText'] == 'MSG_SUCCESS_PASSWORD_CHANGE') {
      this.showDialog( MSG_SUCCESS_PASSWORD_CHANGE,  MSG_BITEX_PASSWORD_CHANGED_OK_TITLE );
    } else {
      this.showDialog( msg['UserStatusText'] );
    }
  }
};


/**
 * @param {goog.events.Event} e
 */
bitex.app.BlinkTrade.prototype.onUserChangeMarket_ = function(e) {

  var symbol = e.target.getSymbol();
  var qtyCurrency = this.getQtyCurrencyFromSymbol(symbol);
  var priceCurrency = this.getPriceCurrencyFromSymbol(symbol);

  /**
   * @type {bitex.model.OrderBookCurrencyModel}
   */
  var qtyCurrencyDef = this.currency_info_[qtyCurrency];

  /**
   * @type {bitex.model.OrderBookCurrencyModel}
   */
  var priceCurrencyDef = this.currency_info_[priceCurrency];

  this.getModel().set('SelectedSymbol', {
    symbol: symbol ,
    qty_currency: qtyCurrencyDef,
    price_currency: priceCurrencyDef
  });

};



/**
 * @param {bitex.api.BitExEvent} e
 * @private
 */
bitex.app.BlinkTrade.prototype.onBitexDepositMethodsResponse_ = function(e) {
  var msg = e.data;


  var deposit_methods = [];
  goog.array.forEach( msg['DepositMethodGrp'], function(deposit_method) {
    var deposit_method_id = deposit_method['DepositMethodID'];
    var description = deposit_method['Description'];
    var disclaimer = deposit_method['Disclaimer'];
    var type = deposit_method['Type'];
    var currency = deposit_method['Currency'];
    var percent_fee = deposit_method['PercentFee'];
    var fixed_fee = deposit_method['FixedFee'];
    var deposit_limits = deposit_method['DepositLimits'];
    var user_receipt_url = deposit_method['UserReceiptURL'];

    deposit_methods.push({ id:deposit_method_id,
                           description:description,
                           disclaimer:disclaimer,
                           type: type,
                           currency:currency,
                           percent_fee: percent_fee,
                           fixed_fee: fixed_fee,
                           deposit_limits: deposit_limits,
                           user_receipt_url: user_receipt_url});
  });

  this.getModel().set('DepositMethods', deposit_methods);
};

/**
 * @param {bitex.api.BitExEvent} e
 * @private
 */
bitex.app.BlinkTrade.prototype.onBitexPasswordChangedOk_ = function(e) {
  var msg = e.data;

  if (msg['UserStatusText'] == 'MSG_SUCCESS_PASSWORD_CHANGE') {
    this.showDialog( MSG_SUCCESS_PASSWORD_CHANGE, MSG_BITEX_PASSWORD_CHANGED_OK_TITLE );
  } else {
    this.showDialog( msg['UserStatusText'], MSG_BITEX_PASSWORD_CHANGED_OK_TITLE );
  }

  this.router_.setView('signin');
};

/**
 * @param {bitex.api.BitExEvent} e
 * @private
 */
bitex.app.BlinkTrade.prototype.onBitexPasswordChangedError_ = function(e) {
  /**
   * @desc Password Chanced with success dialog title
   */
  var MSG_BITEX_PASSWORD_CHANGED_ERROR_TITLE = goog.getMsg('Error');

  /**
   * @desc Password Chanced with success dialog content
   */
  var MSG_BITEX_PASSWORD_CHANGED_ERROR_CONTENT = goog.getMsg('There was an error changing the password');

  var msg = e.data;
  if (msg['UserStatusText'] == 'MSG_CHANGE_PASSWORD_INVALID_SECURITY_CODE') {
    /**
     * @desc Password changed message
     */
    var MSG_CHANGE_PASSWORD_INVALID_SECURITY_CODE = goog.getMsg('Invalid security code.');

    this.showDialog( MSG_CHANGE_PASSWORD_INVALID_SECURITY_CODE , MSG_BITEX_PASSWORD_CHANGED_ERROR_TITLE );
  } else {

    this.showDialog( MSG_BITEX_PASSWORD_CHANGED_ERROR_CONTENT, MSG_BITEX_PASSWORD_CHANGED_ERROR_TITLE );
  }

};

/**
 * @param {bitex.api.BitExEvent} e
 * @private
 */
bitex.app.BlinkTrade.prototype.onBitexWithdrawIncrementalUpdate_ = function(e) {
  var msg = e.data;

  /**
   * @desc Withdraw user notification
   */
  var MSG_WITHDRAW_NOTIFICATION_USER_UNCONFIRMED_TITLE = goog.getMsg('Created withdraw [{$id}] ', {id: msg['WithdrawID']});

  /**
   * @desc Withdraw user notification
   */
  var MSG_WITHDRAW_NOTIFICATION_USER_CONFIRMED_TITLE = goog.getMsg('Withdraw [{$id}] confirmed', {id: msg['WithdrawID']});

  /**
   * @desc Withdraw user notification
   */
  var MSG_WITHDRAW_NOTIFICATION_USER_PROGRESS_TITLE = goog.getMsg('Withdraw [{$id}] in progress', {id: msg['WithdrawID']});

  /**
   * @desc Withdraw user notification
   */
  var MSG_WITHDRAW_NOTIFICATION_USER_COMPLETE_TITLE = goog.getMsg('Withdraw [{$id}] completed', {id: msg['WithdrawID']});

  /**
   * @desc Withdraw user notification
   */
  var MSG_WITHDRAW_NOTIFICATION_USER_CANCEL_TITLE = goog.getMsg('withdraw [{$id}] cancelled', {id: msg['WithdrawID']});

  /**
   * @desc Withdraw admin notification
   */
  var MSG_WITHDRAW_NOTIFICATION_BROKER_CONFIRMED_TITLE =
      goog.getMsg('User {$username} requested withdrawal of', {username: msg['Username']});


  var formatted_value = this.formatCurrency(msg['Amount']/1e8, msg['Currency'] );

  var notification_type_title;
  switch (msg['Status']) {
    case '1': // CONFIRMED
      if (this.getModel().get('IsBroker') && msg['Currency'] != 'BTC') {
        bitex.util.playSound('/assets/res/withdrawal-admin.mp3');
        notification_type_title = ['warning', MSG_WITHDRAW_NOTIFICATION_BROKER_CONFIRMED_TITLE, 300000, true];
      } else if (!this.getModel().get('IsBroker')) {
        notification_type_title = ['info', MSG_WITHDRAW_NOTIFICATION_USER_CONFIRMED_TITLE, 3000, false];
      }
      break;
    case '2': // IN PROGRESS
      if (!this.getModel().get('IsBroker')) {
        notification_type_title = ['info', MSG_WITHDRAW_NOTIFICATION_USER_PROGRESS_TITLE, 3000, false];
      }
      break;
    case '4': // COMPLETED
      if (!this.getModel().get('IsBroker')) {
        bitex.util.playSound('/assets/res/withdrawal-admin.mp3');
        notification_type_title = ['success', MSG_WITHDRAW_NOTIFICATION_USER_COMPLETE_TITLE, 60000, true];
      }
      break;
    case '8': // CANCELLED
      if (!this.getModel().get('IsBroker')) {
        notification_type_title = ['danger', MSG_WITHDRAW_NOTIFICATION_USER_CANCEL_TITLE, 60000, true];
        bitex.util.playSound('/assets/res/error.mp3');
      }
      break;
  }
  if (goog.isDefAndNotNull(notification_type_title)) {
    this.showNotification(notification_type_title[0],
                          notification_type_title[1],
                          formatted_value,
                          notification_type_title[2],
                          notification_type_title[3]);
  }
};


/**
 * @param {bitex.api.BitExEvent} e
 * @private
 */
bitex.app.BlinkTrade.prototype.onBitexDepositIncrementalUpdate_ = function(e) {
  var msg = e.data;

  /**
   * @desc Fiat deposit confirmed user notification
   */
  var MSG_DEPOSIT_NOTIFICATION_COMPLETE = goog.getMsg('Your deposit request {$id} was credited into your account', {id: msg['ControlNumber']});

  /**
   * @desc Fiat deposit confirmed user notification
   */
  var MSG_DEPOSIT_NOTIFICATION_CANCELLED = goog.getMsg('Your deposit request {$id} was cancelled', {id: msg['ControlNumber']});


  /**
   * @desc Fiat deposit confirmed user notification
   */
  var MSG_DEPOSIT_NOTIFICATION_USER_CONFIRMATION =
      goog.getMsg('User just sent a deposit receipt for the deposit {$id}', {id: msg['ControlNumber']});


  var formatted_value = this.formatCurrency(msg['PaidValue']/1e8, msg['Currency'] );

  var notification_type_title;

  if (msg['Type'] != 'CRY' ) { // Ignore all crypto currency deposits
    if (msg['Status'] == '4' && !this.getModel().get('IsBroker') ) { // When the user gets his deposit completed
      notification_type_title = ['success', MSG_DEPOSIT_NOTIFICATION_COMPLETE];

      bitex.util.playSound('/assets/res/deposit.mp3');
    } else if (msg['Status'] == '8' && !this.getModel().get('IsBroker') ) { // When the user gets his deposit cancelled

      formatted_value = this.formatCurrency(msg['Value']/1e8, msg['Currency'] );
      notification_type_title = ['error', MSG_DEPOSIT_NOTIFICATION_CANCELLED];
      bitex.util.playSound('/assets/res/error.mp3');

    } else if (msg['Status'] == '1' && this.getModel().get('IsBroker') ) { // When the broker gets an deposit receipt
      formatted_value = this.formatCurrency(msg['Value']/1e8, msg['Currency'] );
      notification_type_title = ['success', MSG_DEPOSIT_NOTIFICATION_USER_CONFIRMATION];

      bitex.util.playSound('/assets/res/deposit-admin.mp3');
    }
  }

  if (goog.isDefAndNotNull(notification_type_title)) {
    this.showNotification(notification_type_title[0], notification_type_title[1], formatted_value, 60000, true);
  }
};

/**
 * @param {bitex.api.BitExEvent} e
 * @private
 */
bitex.app.BlinkTrade.prototype.onBitexVerifyCustomerUpdate_ = function(e) {
  var msg = e.data;

  var profile = this.getModel().get('Profile');
  var old_verified = profile['Verified'];

  profile['Verified']         = msg['Verified'];
  profile['VerificationData'] = msg['VerificationData'];
  this.getModel().set('Profile', profile);

  this.getModel().set('IsVerified',           profile['Verified'] > 1);
  this.getModel().set('IsMissingVerification',profile['Verified'] == 0);
  this.getModel().set('IsAccountBlocked',     profile['Verified'] < 0);


  /** @desc verification notification title msg */
  var MSG_NOTIFICATION_VERIFY_TITLE = goog.getMsg('Verification:');

  /** @desc pending verification notification content msg */
  var MSG_PENDING_VERIFICATION_CONTENT = goog.getMsg('Sent to the broker.');

  /** @desc pending verification notification content msg */
  var MSG_PROGRESS_VERIFICATION_CONTENT = goog.getMsg('In progress.');

  /** @desc level 2 verification notification content msg */
  var MSG_ACCOUNT_VERIFIED_CONTENT = goog.getMsg('You account has been verified. level - {$level}', {level : profile['Verified'] - 2 });


  if (old_verified == 0 && profile['Verified'] == 1  ) {
    if (!this.getModel().get('IsBroker')){
      this.router_.setView('trading');
      this.showNotification('success', MSG_NOTIFICATION_VERIFY_TITLE, MSG_PENDING_VERIFICATION_CONTENT);
    }
  } else if (profile['Verified'] == 2  ) {
    if (!this.getModel().get('IsBroker')) {
      this.showNotification('success', MSG_NOTIFICATION_VERIFY_TITLE, MSG_PROGRESS_VERIFICATION_CONTENT);
    }
  } else if (profile['Verified'] >= 3  ) {
    if (!this.getModel().get('IsBroker')) {
      this.showNotification('success', MSG_NOTIFICATION_VERIFY_TITLE, MSG_ACCOUNT_VERIFIED_CONTENT, 3000, true);
    }
  }
};


/**
 * @param {bitex.api.BitExEvent} e
 * @private
 */
bitex.app.BlinkTrade.prototype.onBitexOrderListResponse_ = function(e) {
  var msg = e.data;

  //msg['OrdListGrp'], msg['Columns']
  goog.array.forEach(msg['OrdListGrp'], function(record_array){
    var execution_report_msg = {};
    goog.array.forEach(record_array, function(col_data, col_index){
      execution_report_msg[ msg['Columns'][col_index] ] = col_data;
    }, this);

    this.processExecutionReport_(execution_report_msg);
  }, this);

  if (msg['OrdListGrp'].length == msg['PageSize'] ) {

    this.conn_.requestOrderList(this.open_orders_request_id_, msg['Page'] + 1, msg['PageSize'], [ "has_leaves_qty eq 1" ] );
  } else {
    this.getModel().set('FinishedInitialOpenOrdersRequest',  true);
  }
};

/**
 * @param {Object} execution_report
 */
bitex.app.BlinkTrade.prototype.processExecutionReport_ = function(execution_report) {
  var open_orders = this.getModel().get('OpenOrdersIndex');
  if (!goog.isDefAndNotNull(open_orders)) {
    open_orders = [];
  }

  var should_update_open_order_index_model = false;
  if (execution_report['LeavesQty'] == 0) {
    if (goog.array.binaryRemove( open_orders, execution_report['ClOrdID'] )) {
      this.getModel().remove('order_' + execution_report['ClOrdID']);
      should_update_open_order_index_model = true;
    }
  } else {
    var idx_open_order = goog.array.binarySearch( open_orders, execution_report['ClOrdID']  );
    if (idx_open_order < 0 ) {
      goog.array.binaryInsert(open_orders, execution_report['ClOrdID'] ) ;
      should_update_open_order_index_model = true;
    }
    this.getModel().set('order_' + execution_report['ClOrdID'], execution_report);
  }

  if (should_update_open_order_index_model) {
    this.getModel().set('OpenOrdersIndex', open_orders);
  }

  if (this.getModel().get('FinishedInitialOpenOrdersRequest')) {
    // Update all running algorithms.
    var running_algorithms = this.getModel().get('RunningAlgorithms');
    goog.object.forEach(running_algorithms, function( running_algorithm) {
      var worker = running_algorithm['worker'];
      worker.postMessage( { 'req': 'execution_report', 'execution_report': execution_report } );
    }, this);
  }
};

/**
 * @param {bitex.api.BitExEvent} e
 * @private
 */
bitex.app.BlinkTrade.prototype.onBitexExecutionReport_ = function(e) {
  var msg = e.data;

  this.processExecutionReport_(msg);

  var order_id = msg['OrderID'];
  if (!goog.isDefAndNotNull(order_id)) {
    order_id = msg['ClOrdID'];
  }

  /**
   * @desc - execution report title notification message
   */
  var MSG_ORDER_EXECUTION_TITLE_NOTIFICATION = goog.getMsg("Order {$id} ", {id: order_id} );

  /**
   * @desc - Partially filled notification message
   */
  var MSG_NOTIFICATION_ORDER_PARTIALLY_FILLED = goog.getMsg('partially filled');

  /**
   * @desc - filled notification message
   */
  var MSG_NOTIFICATION_ORDER_FILLED = goog.getMsg('filled');

  /**
   * @desc - Canceled notification message
   */
  var MSG_NOTIFICATION_ORDER_CANCELLED = goog.getMsg('cancelled');

  /**
   * @desc - Rejected notification message
   */
  var MSG_NOTIFICATION_ORDER_REJECTED = goog.getMsg('rejected - {$err}', {err:msg['OrdRejReason']});

  var should_beep = false;

  switch( msg['ExecType'] ) {
    case '1':  //Partial Execution
      should_beep = true;
      this.showNotification('success', MSG_ORDER_EXECUTION_TITLE_NOTIFICATION, MSG_NOTIFICATION_ORDER_PARTIALLY_FILLED);
      break;
    case '2':  //Execution
      should_beep = true;
      this.showNotification('success', MSG_ORDER_EXECUTION_TITLE_NOTIFICATION, MSG_NOTIFICATION_ORDER_FILLED);
      break;
    case '4':  //Offer Cancelled
      this.showNotification('success', MSG_ORDER_EXECUTION_TITLE_NOTIFICATION, MSG_NOTIFICATION_ORDER_CANCELLED);
      break;
    case '8':  //Offer Rejected
      this.showNotification('error', MSG_ORDER_EXECUTION_TITLE_NOTIFICATION, MSG_NOTIFICATION_ORDER_REJECTED);
      break;
  }

  if (should_beep) {
    bitex.util.playSound('/assets/res/beep.wav');
  }
};


/**
 * @param {bitex.api.BitExEvent} e
 * @private
 */
bitex.app.BlinkTrade.prototype.onBitexTwoFactorSecretResponse_ = function(e){
  var msg = e.data;
  this.getModel().set('TwoFactorSecret', msg['TwoFactorSecret']);
  this.getModel().set('TwoFactorEnabled', msg['TwoFactorEnabled'] );
};


/**
 * @param {bitex.api.BitExEvent} e
 * @private
 */
bitex.app.BlinkTrade.prototype.onBitexPositionResponse_ = function(e) {
  var msg = e.data;
  delete msg['MsgType'];
  delete msg['PositionReqID'];

  var clientID = msg['ClientID'];
  var has_any_position = false;

  var model_balances = this.getModel().get('Position');
  if (!goog.isDefAndNotNull(model_balances)) {
    model_balances = {};
  }
  var changed_balance = false;
  goog.object.forEach(msg, function( balances, brokerID ) {
    goog.object.forEach(balances, function( balance, currency ) {
      if ( ! goog.string.endsWith(currency, '_locked') ) {
        if (!goog.isDefAndNotNull(model_balances[brokerID])) {
          model_balances[brokerID] = {};
        }
        if (!goog.isDefAndNotNull(model_balances[brokerID][clientID])) {
          model_balances[brokerID][clientID] = {};
        }

        var balance = new bitex.primitives.Price(balance, this.getCurrencyPip(currency)).floor();

        model_balances[brokerID][clientID][currency] = balance;
        if (balance != 0) {
          has_any_position = true;
        }

        changed_balance = true;
      }
    }, this);
  },this);
  if (changed_balance) {
    this.getModel().set('Position', model_balances, true);
  }
  this.getModel().set('HasAnyPosition', has_any_position);

  goog.object.forEach(msg, function( positions, broker ) {
    goog.object.forEach(positions, function( position, currency ) {
      position = position / 1e8;
      // formatted_position_9000001:2_BTC
      var position_key = 'position_' + broker + ':' + clientID + '_'  + currency;
      this.getModel().set( position_key , position );
      this.calculatePortfolioValue(currency);


      if ( goog.isDefAndNotNull(position) ){
        this.getModel().set('formatted_' + position_key, this.formatCurrency(position, currency, true));
      } else {
        this.getModel().set('formatted_' + position_key, '');
      }
    }, this);
  },this);

};

/**
 * @param {bitex.api.BitExEvent} e
 * @private
 */
bitex.app.BlinkTrade.prototype.onBitexBalanceResponse_ = function(e) {
  var msg = e.data;
  delete msg['MsgType'];
  delete msg['BalanceReqID'];

  var clientID = msg['ClientID'];

  // Update all running algorithms.
  var running_algorithms = this.getModel().get('RunningAlgorithms');
  goog.object.forEach(running_algorithms, function( running_algorithm) {
    var worker = running_algorithm['worker'];
    var broker_id = this.getModel().get('SelectedBrokerID');
    if ( goog.object.containsKey(msg, broker_id ) ) {
      worker.postMessage( { 'req': 'balance', 'balances': msg[broker_id] } );
    }
  }, this);

  var model_balances = this.getModel().get('Balance');
  var changed_balance = false;
  goog.object.forEach(msg, function( balances, brokerID ) {
    goog.object.forEach(balances, function( balance, currency ) {
      if ( ! goog.string.caseInsensitiveEndsWith(currency, '_locked') ) {
        if (!goog.isDefAndNotNull(model_balances[brokerID])) {
          model_balances[brokerID] = {};
        }
        if (!goog.isDefAndNotNull(model_balances[brokerID][clientID])) {
          model_balances[brokerID][clientID] = {};
        }

        var balance = new bitex.primitives.Price(balance, this.getCurrencyPip(currency)).floor();

        model_balances[brokerID][clientID][currency] = balance;
        changed_balance = true;
      }
    }, this);
  },this);
  if (changed_balance) {
    this.getModel().set('Balance', model_balances, true);
  }

  changed_locked_balance = false;
  model_locked_balances = this.getModel().get('LockedBalance');
  goog.object.forEach(msg, function( locked_balances, brokerID ) {
    goog.object.forEach(locked_balances, function( locked_balance, currency ) {
      if ( goog.string.endsWith(currency, '_locked') ) {
        currency = goog.string.remove(currency, '_locked');

        if (!goog.isDefAndNotNull(model_locked_balances[brokerID])){
          model_locked_balances[brokerID] = {};
        }
        if (!goog.isDefAndNotNull(model_locked_balances[brokerID][clientID])) {
          model_locked_balances[brokerID][clientID] = {};
        }

        var locked_balance = new bitex.primitives.Price(locked_balance, this.getCurrencyPip(currency)).ceil();

        model_locked_balances[brokerID][clientID][currency] = locked_balance;
        changed_locked_balance = true;
      }
    }, this);
  },this);
  if (changed_locked_balance) {
    this.getModel().set('LockedBalance', model_locked_balances, true);
  }
};

/**
 * @param {string} currency
 * @param {number=} opt_clientID
 * @private
 */
bitex.app.BlinkTrade.prototype.getDepositedAmount = function(currency, opt_clientID) {
  var broker_id = this.getModel().get('SelectedBrokerID');
  var clientID = this.getModel().get('UserID');
  if (goog.isDefAndNotNull(opt_clientID)){
    clientID = opt_clientID;
  }

  var balance_key = 'balance_' + broker_id + ':' + clientID + '_'  + currency;

  if (goog.isDefAndNotNull(this.getModel().get( balance_key ))) {
    return this.getModel().get( balance_key );
  }
  return 0;
};

/**
 * @param {string} currency
 * @param {number=} opt_clientID
 * @private
 */
bitex.app.BlinkTrade.prototype.getLockedAmount = function(currency, opt_clientID) {
  var broker_id = this.getModel().get('SelectedBrokerID');
  var clientID = this.getModel().get('UserID');
  if (goog.isDefAndNotNull(opt_clientID)){
    clientID = opt_clientID;
  }

  var balance_key = 'balance_' + broker_id + ':' + clientID + '_'  + currency;
  var locked_balance_key = 'locked_' + balance_key;

  if (goog.isDefAndNotNull(this.getModel().get( locked_balance_key ))) {
    return this.getModel().get( locked_balance_key );
  }

  return 0;
};


/**
 * @param {string} currency
 * @param {string} type
 * @param {number=} opt_clientID
 */
bitex.app.BlinkTrade.prototype.getBalance = function(currency, type, opt_clientID) {
  var broker_id = this.getModel().get('SelectedBrokerID');
  var clientID = this.getModel().get('UserID');
  if (goog.isDefAndNotNull(opt_clientID)){
    clientID = opt_clientID;
  }

  var balance_key = 'balance_' + broker_id + ':' + clientID + '_'  + currency;
  var locked_balance_key = 'locked_' + balance_key;

  if (type == "deposit" ) {
    return this.getModel().get( balance_key );
  } else if (type == "available") {
    if (goog.isDefAndNotNull(this.getModel().get( balance_key ))) {
      if (goog.isDefAndNotNull(this.getModel().get( locked_balance_key ))) {
        return Math.round(this.getModel().get( balance_key ) - this.getModel().get( locked_balance_key ));
      } else {
        return this.getModel().get( balance_key )
      }
    } else {
      return 0;
    }
  } else if (type == 'locked') {
    if (goog.isDefAndNotNull(this.getModel().get( locked_balance_key ))) {
      return this.getModel().get( locked_balance_key );
    } else {
      return 0;
    }
  } else {
    return 0;
  }

};



/**
 * @param {goog.events.Event} e
 * @private
 */
bitex.app.BlinkTrade.prototype.onUserWithdrawRequest_ = function(e){
  var currency = e.target.getWithdrawSelectedCurrency();
  var preFilledData = e.target.getWithdrawUserData();
  this.showWithdrawalDialog(currency, preFilledData);
};


/**
 * @param {string} currency
 * @param {Object=} opt_preData  Pre filled data
 */
bitex.app.BlinkTrade.prototype.showWithdrawalDialog = function(currency, opt_preData){
  var preData = opt_preData || {};

  this.setView('withdraw');

  var withdraw_methods = goog.object.unsafeClone(this.getModel().get('Broker')['WithdrawStructure'][currency]);

  var user_verification_level = this.getModel().get('Profile')['Verified'];

  var currency_value_fmt = new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.DECIMAL);

  var user_withdrawal_percent_fee = this.getModel().get('Profile')['WithdrawPercentFee'];
  if (goog.isDefAndNotNull(user_withdrawal_percent_fee)) {
    user_withdrawal_percent_fee = parseFloat(user_withdrawal_percent_fee);
  }

  var user_withdrawal_fixed_fee = this.getModel().get('Profile')['WithdrawFixedFee'];
  if (goog.isDefAndNotNull(user_withdrawal_fixed_fee)) {
    user_withdrawal_fixed_fee = parseFloat(user_withdrawal_fixed_fee);
  }


  var balance_key = 'available_balance_' +
      this.getModel().get('Broker')['BrokerID'] + ':' + this.getModel().get('UserID') + '_' + currency;
  var user_balance = new bitex.primitives.Price(this.getModel().get(balance_key,0),
                                                this.getCurrencyPip(currency)).floor();

  var user_verified_withdraw_methods = [];
  goog.array.forEach(withdraw_methods, function(withdrawal_method){
    var preData_data = {}
    if ( goog.object.containsKey(preData, 'Method') ) {
      preData_data = preData['Data'];
    }

    if (goog.isDefAndNotNull(user_withdrawal_percent_fee)) {
      withdrawal_method['percent_fee'] = user_withdrawal_percent_fee;
    }

    if (goog.isDefAndNotNull(user_withdrawal_fixed_fee)) {
      withdrawal_method['fixed_fee'] = user_withdrawal_fixed_fee;
    }

    if (this.getModel().get('IsMSB') && currency !== 'BTC') {
      if (!goog.array.contains(withdrawal_method['fields'], "SenderName" )) {
        withdrawal_method['fields'].push({"side":"client",
                                           "name": "SenderName",
                                           "validator":"required",
                                           "type":"text",
                                           "value":"",
                                           "label": MSG_WITHDRAW_FIELD_SENDER_NAME,
                                           "placeholder":""});
      }
      if (!goog.array.contains(withdrawal_method['fields'], "SenderID" )) {
        withdrawal_method['fields'].push({"side":"client",
                                           "name": "SenderID",
                                           "validator":"required",
                                           "type":"text",
                                           "value":"",
                                           "label": MSG_WITHDRAW_FIELD_SENDER_ID,
                                           "placeholder":""});
      }
      if (!goog.array.contains(withdrawal_method['fields'], "SenderPhone" )) {
        withdrawal_method['fields'].push({"side":"client",
                                           "name": "SenderPhone",
                                           "validator":"required",
                                           "type":"text",
                                           "value":"",
                                           "label": MSG_WITHDRAW_FIELD_SENDER_PHONE_NUMBER,
                                           "placeholder":""});
      }

      if (!goog.array.contains(withdrawal_method['fields'], "AccountName" )) {
        withdrawal_method['fields'].push({"side":"client",
                                           "name": "AccountName",
                                           "validator":"required",
                                           "type":"text",
                                           "value":"",
                                           "label": MSG_WITHDRAW_FIELD_ACCT_HOLDER,
                                           "placeholder":""});
      }

      if (!goog.array.contains(withdrawal_method['fields'], "AccountHolderPhone" )) {
        withdrawal_method['fields'].push({"side":"client",
                                           "name": "AccountHolderPhone",
                                           "validator":"required",
                                           "type":"text",
                                           "value":"",
                                           "label": MSG_WITHDRAW_FIELD_ACCT_HOLDER_ID_PHONE_NUMBER,
                                           "placeholder":""});
      }

      if (!goog.array.contains(withdrawal_method['fields'], "IntendedPurpose" )) {
        withdrawal_method['fields'].push({"side":"client",
                                           "name": "IntendedPurpose",
                                           "validator":"",
                                           "type":"text",
                                           "value":"",
                                           "label": MSG_WITHDRAW_FIELD_INTENDED_PURPOSE,
                                           "placeholder":""});
      }
    }

    if (!goog.array.contains(withdrawal_method['fields'], "Memo" )) {
      withdrawal_method['fields'].push({"side":"client",
                                         "name": "Memo",
                                         "validator":"",
                                         "type":"text",
                                         "value":"",
                                         "label": MSG_WITHDRAW_FIELD_MEMO,
                                         "placeholder":""});
    }
  
    goog.array.forEach(withdrawal_method['fields'], function(field) {
      if (goog.object.containsKey(preData_data, field["name"])) {
        field["value"] = preData_data[field["name"]];
      }

      switch(field["name"]){
        case 'AccountNumber':
          field["label"] = MSG_WITHDRAW_FIELD_ACCT_NUMBER;
          break;
        case 'KYC':
          field["label"] = MSG_WITHDRAW_FIELD_KYC;
          break;
        case 'Link':
          field["Link"] = MSG_WITHDRAW_FIELD_LINK;
          break;
        case 'TransactionID':
          field["TransactionID"] = MSG_WITHDRAW_FIELD_TRANSACTION_ID;
          break;
        case 'Wallet':
          field["Wallet"] = MSG_WITHDRAW_FIELD_WALLET;
          break;
        case 'BankName':
          field["label"] = MSG_WITHDRAW_FIELD_BANK_NAME;
          break;
        case 'BankNumber':
          field["label"] = MSG_WITHDRAW_FIELD_BANK_NUMBER;
          break;
        case 'CPF_CNPJ':
        case 'CPFCNPJ':
          field["label"] = MSG_WITHDRAW_FIELD_CPF_CNPJ;
          break;
        case 'AccountType':
          field["label"] = MSG_WITHDRAW_FIELD_ACCT_TYPE;
          break;
        case 'BankBranch':
        case 'AccountBranch':
          field["label"] = MSG_WITHDRAW_FIELD_ACCT_BRANCH;
          break;
        case 'AccountName':
          field["label"] = MSG_WITHDRAW_FIELD_ACCT_HOLDER;
          break;
        case 'RoutingNumber':
          field["label"] = MSG_WITHDRAW_FIELD_ROUTING_NUMBER;
          break;
        case 'BankSwift':
          field["label"] = MSG_WITHDRAW_FIELD_BANK_SWIFT;
          break;
        case 'Email':
          field["label"] = MSG_WITHDRAW_FIELD_EMAIL;
          break;
        case 'IntendedPurpose':
          field["label"] = MSG_WITHDRAW_FIELD_INTENDED_PURPOSE;
          break;
        case 'BillNumber':
          field["label"] = MSG_WITHDRAW_FIELD_BILL_NUMBER;
          break;
        case 'DueDate':
          field["label"] = MSG_WITHDRAW_FIELD_DUE_DATE;
          break;
        case 'BillType':
          field["label"] = MSG_WITHDRAW_FIELD_BILL_TYPE;
          break;
        case 'Memo':
          field["label"] = MSG_WITHDRAW_FIELD_MEMO;
          break;
          
      }
    }, this);

    var withdrawal_limit;
    var withdrawal_limit_index;
    for (withdrawal_limit_index = user_verification_level; withdrawal_limit_index>=0;withdrawal_limit_index--) {
      withdrawal_limit = withdrawal_method['limits'][ withdrawal_limit_index ];
      if (goog.isDefAndNotNull(withdrawal_limit)) {
        break;
      }
    }

    var has_limits_enabled = false;
    if ( goog.isDefAndNotNull(withdrawal_limit) && goog.isDefAndNotNull(withdrawal_limit['enabled'])) {
      has_limits_enabled = withdrawal_limit['enabled'];
    }


    if ((!goog.isDefAndNotNull(withdrawal_limit['max'])) || (withdrawal_limit['max'] > user_balance) ) {
      var formatted_balance_key = 'formatted_available_balance_' +
          this.getModel().get('Broker')['BrokerID'] + ':' + this.getModel().get('UserID') + '_' + currency;
      var formatted_balance_value_key = formatted_balance_key + '_value';

      withdrawal_limit['max']                 = user_balance;
    }

    if (has_limits_enabled) {
      var max_witdrawal_amount =  new bitex.primitives.Price(
          (withdrawal_limit['max'] - withdrawal_method['fixed_fee']) / (1 + (withdrawal_method['percent_fee']/100.0)),
          this.getCurrencyPip(currency)).floor();
      withdrawal_limit['max']                 = max_witdrawal_amount;
      withdrawal_limit['formatted_max']       = this.formatCurrency(max_witdrawal_amount/1e8, currency, true);

      currency_value_fmt.setMaximumFractionDigits(this.getCurrencyNumberOfDecimals(currency));
      currency_value_fmt.setMinimumFractionDigits(this.getCurrencyNumberOfDecimals(currency));

      withdrawal_limit['formatted_max_value'] = currency_value_fmt.format(max_witdrawal_amount/1e8);
    }

    withdrawal_method['limits'][ withdrawal_limit_index ] = withdrawal_limit;

    if (has_limits_enabled) {
      if (goog.object.containsKey(preData, 'Method')  ) {
        if (preData['Method'] == withdrawal_method['method']) {
          user_verified_withdraw_methods.push(withdrawal_method);
        }
      } else {
        user_verified_withdraw_methods.push(withdrawal_method);
      }
    }
  }, this);

  var form_id = goog.string.getRandomString();
  var fmt = new goog.i18n.NumberFormat( goog.i18n.NumberFormat.Format.DECIMAL);
  var dialogContent = bitex.ui.WithdrawRequestDataEntry.templates.WithdrawRequestDataEntry({
    id:form_id,
    fmt:fmt,
    currency: currency,
    currencySign: this.getCurrencySign(currency),
    methods: user_verified_withdraw_methods,
    verificationLevel: this.getModel().get('Profile')['Verified'],
    netAmountLabel:MSG_NET_AMOUNT_LABEL_TOTAL
  });

  /**
   * @desc Crypto Currency Withdraw accordion title
   */
  var MSG_CURRENCY_WITHDRAW_DIALOG_TITLE =
      goog.getMsg('{$currency} withdrawal', {currency :  this.getCurrencyDescription(currency) });

  var dlg =  this.showDialog(dialogContent,
                             MSG_CURRENCY_WITHDRAW_DIALOG_TITLE,
                             bitex.ui.Dialog.ButtonSet.createOkCancel());
  this.getModel().updateDom();

  if (user_verified_withdraw_methods.length > 1 ) {
    goog.dom.forms.setValue(goog.dom.getElement(form_id + '_method'));
  }

  var handler = this.getHandler();
  var withdrawal_form_el = goog.dom.getFirstElementChild(dlg.getContentElement());
  var withdrawal_uniform = new uniform.Uniform();
  withdrawal_uniform.decorate(withdrawal_form_el);


  if (currency === 'BTC') {
    var open_webcam_el = goog.dom.getElement(form_id + '_open_webcam');
    var webcam_el = goog.dom.getElement(form_id + '_webcam');
    handler.listen(open_webcam_el, goog.events.EventType.CLICK, function(e){
      e.preventDefault();
      this.webcam_ = new bitex.ui.WebCamQR(goog.dom.getElement(form_id + '_Wallet'));
      this.webcam_.render(webcam_el);
    });
  }

  goog.array.forEach( user_verified_withdraw_methods, function(withdraw_method) {
    var method_id = withdraw_method['method'];
    var method_amount_el = goog.dom.getElement(form_id + '_method_' + method_id + '_amount');

    handler.listen(new goog.events.InputHandler(method_amount_el),goog.events.InputHandler.EventType.INPUT,function(e){
      this.doCalculateFees_(
          form_id + '_method_' + method_id + '_amount',
          form_id + '_method_' + method_id + '_fixed_fee',
          form_id + '_method_' + method_id + '_percent_fee',
          currency,
          form_id + '_method_' + method_id + '_fees',
          form_id + '_method_' + method_id + '_net_value',
          true,   // opt_add_fees
          true,   // opt_is_fixed_fee_in_satoshis
          false,  // opt_is_fixed_fee_formatted
          false,  // opt_is_amount_in_satoshis
          true,   // opt_is_amount_formatted
          false   // opt_is_percent_fee_formatted
          );
    }, this);
  }, this );


  var value_fmt = new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.DECIMAL);
  value_fmt.setMaximumFractionDigits(8);
  value_fmt.setMinimumFractionDigits(2);

  handler.listen(dlg, goog.ui.Dialog.EventType.SELECT, function(e) {
    if(goog.isDefAndNotNull(this.webcam_)) {
      this.webcam_.destroy();
    }

    if (e.key == 'ok') {
      var error_list = withdrawal_uniform.validate();
      if (error_list.length > 0) {
        goog.array.forEach(error_list, function(error_msg) {
          this.showNotification( 'error', error_msg );
        }, this );

        e.stopPropagation();
        e.preventDefault();
      } else {
          try {
            var position_key = 'Position_' + this.getModel().get('Broker')['BrokerID'] + '_' +
                this.getModel().get('UserID');

            var positions = this.getModel().get( position_key);
            if (goog.isDefAndNotNull(positions)) {
              var has_open_positions = false;
              goog.object.forEach(positions, function( balance, currency ) {
                if (balance != 0) {
                  has_open_positions = true;
                }
              }, this);

              if (has_open_positions) {

                /**
                 * @desc User has unconfirmed deposits warning message during the withdrawal.
                 */
                var MSG_WITHDRAWAL_UNCONFIRMED_DEPOSITS = goog.getMsg('You have deposits that are not confirmed yet');

                this.showNotification( 'error', MSG_WITHDRAWAL_UNCONFIRMED_DEPOSITS );

                e.stopPropagation();
                e.preventDefault();

                return;
              }
            }

          } catch (e){}

          var withdraw_data = withdrawal_uniform.getAsJSON();

          var amount = withdraw_data['Amount'];
          if (amount < 0) {
            /**
             * @desc Invalid withdrawal amount notification message during the withdrawal.
             */
            var MSG_INVALID_WITHDRAWAL_AMOUNT_VALUE = goog.getMsg('Invalid withdrawal amount');

            this.showNotification( 'error', MSG_INVALID_WITHDRAWAL_AMOUNT_VALUE );

            e.stopPropagation();
            e.preventDefault();
            return;
          }
          amount = new bitex.primitives.Price((amount * 1e8).toFixed(0),
                                              this.getCurrencyPip(withdraw_data['Currency'])).floor();

          var pos = [0];
          var net_amount_el_value_id = form_id + '_method_' + withdraw_data['Method'] + '_net_value_value';
          var net_amount_value = parseInt(goog.dom.forms.getValue(goog.dom.getElement(net_amount_el_value_id)),10);

          withdraw_data['Fees'] =
              goog.dom.getTextContent(goog.dom.getElement(
                  form_id + '_method_' + withdraw_data['Method'] + '_fees' ));
          delete withdraw_data['Amount'];

          var method = withdraw_data['Method']; delete withdraw_data['Method'];
          var currency = withdraw_data['Currency']; delete withdraw_data['Currency'];

          this.conn_.requestWithdraw( e.target.getRequestId(),
                                      amount,
                                      method,
                                      currency,
                                      withdraw_data );
      }
    }
  }, this);
};


/**
 * @param {goog.events.Event} e
 * @private
 */
bitex.app.BlinkTrade.prototype.onUserConfirmWithdraw_ = function(e){
  this.conn_.confirmWithdraw(e.target.getConfirmationToken());
};


/**
 * @param {goog.events.Event} e
 * @private
 */
bitex.app.BlinkTrade.prototype.onUpdateProfile_ = function(e){
  var client_id = e.target.getClientID();
  var new_values = e.target.getProfileTagNewValues();
  this.conn_.updateUserProfile( new_values , client_id);
};

/**
 * @param {goog.events.Event} e
 * @private
 */
bitex.app.BlinkTrade.prototype.onBrokerChangeEmail_ = function(e){
  var client_id = e.target.getClientID();
  var dialog_id = goog.string.getRandomString()
  var handler = this.getHandler();

  /**
   * @desc Change Email Dialog Title
   */
  var MSG_CHANGE_EMAIL_DIALOG_TITLE = goog.getMsg('Change Email');

  /**
   * @desc Change Email assign terms
   */
  var MSG_CHANGE_EMAIL_TERMS_ERROR = goog.getMsg('You must assign the terms');


  var dlg_content = bitex.templates.BrokerChangeEmailDialogContent({
    id: dialog_id
  });

  var change_email_dialog = this.showDialog(dlg_content,
                    MSG_CHANGE_EMAIL_DIALOG_TITLE,
                    bitex.ui.Dialog.ButtonSet.createOkCancel());

  var email_el  = goog.dom.getElement(dialog_id + '_new_email');
  var warning_1 = goog.dom.getElement(dialog_id + '_check_warning_1');
  var warning_2 = goog.dom.getElement(dialog_id + '_check_warning_2');
  var warning_3 = goog.dom.getElement(dialog_id + '_check_warning_3');


  var email_uniform = new uniform.Uniform();
  email_uniform.decorate(goog.dom.getFirstElementChild(change_email_dialog.getContentElement()));

  handler.listen(change_email_dialog, goog.ui.Dialog.EventType.SELECT, function(e) {
    if (e.key == 'ok') {
      error_list = email_uniform.validate();
      if(error_list.length > 0) {
        goog.array.forEach(error_list, function(error_msg) {
          this.showNotification('error', error_msg);
        }, this);
        e.stopPropagation();
        e.preventDefault();
        return;
      }

      if(!warning_1.checked || !warning_2.checked || !warning_3.checked) {
        this.showNotification('error', MSG_CHANGE_EMAIL_TERMS_ERROR);
        e.stopPropagation();
        e.preventDefault();
        return;
      }

      var update_profile_data_ = {};
      update_profile_data_['Email'] = email_el.value
      this.conn_.updateUserProfile(update_profile_data_, client_id);
    }
  });
};


/**
 * @param {goog.events.Event} e
 * @private
 */
bitex.app.BlinkTrade.prototype.onUserFileView_ = function(e){
  /**
   * @desc File view dialog title
   */
  var MSG_FILE_VIEW_DIALOG_TITLE = goog.getMsg('View');


  var file_view_dialog_content = bitex.templates.FileViewDialogContent( {filename:e.target.getFilename()});
  this.showDialog( file_view_dialog_content,
                   MSG_FILE_VIEW_DIALOG_TITLE,
                   bitex.ui.Dialog.ButtonSet.createOk() );
};


/**
 * @param {goog.events.Event} e
 * @private
 */
bitex.app.BlinkTrade.prototype.onBrokerSetUserAsVerified_ = function(e){
  var request_id = e.target.getRequestId();
  var client_id = e.target.getClientID();
  var verification_data = e.target.getVerificationData();
  var verification_level = e.target.getVerificationLevel();

  this.conn_.verifyCustomer(request_id, client_id, verification_level, verification_data );
};

/**
 * @param {goog.events.Event} e
 * @private
 */
bitex.app.BlinkTrade.prototype.onUserCancelWithdrawal_ = function(e){
  var withdraw_data = e.target.getWithdrawData();
  var request_id = e.target.getRequestId();
  var action = e.target.getWithdrawAction();

  var handler = this.getHandler();
  var model = this.getModel();

  this.getBitexConnection().cancelWithdraw(withdraw_data['WithdrawID'],request_id);
};

/**
 * @param {goog.events.Event} e
 * @private
 */
bitex.app.BlinkTrade.prototype.onBrokerProcessWithdraw_ = function(e){
  var valueFormatter = new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.DECIMAL);
  valueFormatter.setMinimumFractionDigits(2);
  valueFormatter.setMaximumFractionDigits(8);

  var withdraw_data = e.target.getWithdrawData();
  var request_id = e.target.getRequestId();
  var action = e.target.getWithdrawAction();
  var handler = this.getHandler();
  var model = this.getModel();

  var method_element_id = goog.string.getRandomString();
  var withdraw_amount_element_id = goog.string.getRandomString();
  var fixed_fee_element_id = goog.string.getRandomString();
  var percent_fee_element_id = goog.string.getRandomString();
  var total_fees_element_id = goog.string.getRandomString();
  var net_value_element_id = goog.string.getRandomString();


  if (action === 'CANCEL') {

    /**
     * @desc Cancel Withdraw dialog title
     */
    var MSG_WITHDRAW_CANCEL_DIALOG_TITLE = goog.getMsg('Cancel withdraw');

    var cancel_reason_dialog_content =
        bitex.view.WithdrawView.templates.CancelWithdrawDialogContent({
                                                                        reason_id:'id_select_reason',
                                                                        custom_reason_id:'id_custom_reason_text'
                                                                      });
    var cancelWithdrawDlg =  this.showDialog( cancel_reason_dialog_content,
                                               MSG_WITHDRAW_CANCEL_DIALOG_TITLE,
                                               bitex.ui.Dialog.ButtonSet.createOkCancel() );


    var select_reason_el = goog.dom.getElement('id_select_reason');
    var reason_el = goog.dom.getElement('id_custom_reason_text');
    handler.listen(select_reason_el, goog.events.EventType.CHANGE, function(e){
      var reason_id = goog.string.toNumber(goog.dom.forms.getValue( select_reason_el ));
      goog.style.showElement ( reason_el, (reason_id === 0 )) ;
    });

    handler.listen(cancelWithdrawDlg, goog.ui.Dialog.EventType.SELECT, function(e) {
      if (e.key == 'ok') {
        var reason_id = goog.string.toNumber(goog.dom.forms.getValue( select_reason_el ));
        var reason;

        if (reason_id === 0 ) {
          reason = goog.string.trim(goog.dom.forms.getValue(reason_el));

          if (goog.string.isEmpty(reason)) {
            e.stopPropagation();
            e.preventDefault();
            goog.dom.getElement('id_custom_reason_text').focus();
            return;
          }
        }

        this.getBitexConnection().processWithdraw(request_id,
                                                  action,
                                                  withdraw_data['WithdrawID'],
                                                  reason_id,
                                                  reason);
      }
    }, this);
  } else if (action === 'PROGRESS') {
    var formatted_amount = this.formatCurrency(withdraw_data['Amount']/1e8, withdraw_data['Currency'] );

    var fixed_fee = valueFormatter.format(withdraw_data['FixedFee']/1e8);
    var percent_fee = valueFormatter.format(withdraw_data['PercentFee']);
    if ( this.getModel().get('Profile')['IsMarketMaker']) {
      fixed_fee = 0;
      percent_fee = 0;
    }

    var feeDialogContent = bitex.templates.FeesForm({
       amount: withdraw_data['Amount'],
       formattedAmount: formatted_amount,
       currency: withdraw_data['Currency'],
       currencySign: this.getCurrencySign(withdraw_data['Currency']),
       amountID: withdraw_amount_element_id,
       fixedFeeID: fixed_fee_element_id,
       percentFeeID: percent_fee_element_id,
       totalFeesID: total_fees_element_id,
       netValueID: net_value_element_id,
       fixedFee: fixed_fee,
       percentFee: percent_fee
    });

    /**
     * @desc Crypto Currency Withdraw accordion title
     */
    var MSG_WITHDRAW_IN_PROGRESS_DIALOG_TITLE =
        goog.getMsg('Set {$currency} withdrawal in progress',
                    {currency :  this.getCurrencyDescription(withdraw_data['Currency']) });


    var feeDlg =  this.showDialog(feeDialogContent,
                                  MSG_WITHDRAW_IN_PROGRESS_DIALOG_TITLE,
                               bitex.ui.Dialog.ButtonSet.createOkCancel());

    this.doCalculateFees_ (withdraw_amount_element_id,
                           fixed_fee_element_id,
                           percent_fee_element_id,
                           withdraw_data['Currency'],
                           total_fees_element_id,
                           net_value_element_id,
                           true,    // opt_add_fees
                           false,   // opt_is_fixed_fee_in_satoshis
                           true,    // opt_is_fixed_fee_formatted
                           true,    // opt_is_amount_in_satoshis
                           false,   // opt_is_amount_formatted
                           true     //  opt_is_percent_fee_formatted
    );

    handler.listen( new goog.events.InputHandler(goog.dom.getElement(withdraw_amount_element_id) ),
                    goog.events.InputHandler.EventType.INPUT,
                    goog.bind(this.doCalculateFees_, this,
                              withdraw_amount_element_id,
                              fixed_fee_element_id,
                              percent_fee_element_id,
                              withdraw_data['Currency'],
                              total_fees_element_id,
                              net_value_element_id,
                              true,    // opt_add_fees
                              false,   // opt_is_fixed_fee_in_satoshis
                              true,    // opt_is_fixed_fee_formatted
                              true,    // opt_is_amount_in_satoshis
                              false,   // opt_is_amount_formatted
                              true     //  opt_is_percent_fee_formatted
                    ));

    handler.listen( new goog.events.InputHandler(goog.dom.getElement(percent_fee_element_id)),
                    goog.events.InputHandler.EventType.INPUT,
                    goog.bind(this.doCalculateFees_, this,
                              withdraw_amount_element_id,
                              fixed_fee_element_id,
                              percent_fee_element_id,
                              withdraw_data['Currency'],
                              total_fees_element_id,
                              net_value_element_id,
                              true,    // opt_add_fees
                              false,   // opt_is_fixed_fee_in_satoshis
                              true,    // opt_is_fixed_fee_formatted
                              true,    // opt_is_amount_in_satoshis
                              false,   // opt_is_amount_formatted
                              true     //  opt_is_percent_fee_formatted
                    ));

    handler.listen( new goog.events.InputHandler(goog.dom.getElement(fixed_fee_element_id)),
                    goog.events.InputHandler.EventType.INPUT,
                    goog.bind(this.doCalculateFees_, this,
                              withdraw_amount_element_id,
                              fixed_fee_element_id,
                              percent_fee_element_id,
                              withdraw_data['Currency'],
                              total_fees_element_id,
                              net_value_element_id,
                              true,    // opt_add_fees
                              false,   // opt_is_fixed_fee_in_satoshis
                              true,    // opt_is_fixed_fee_formatted
                              true,    // opt_is_amount_in_satoshis
                              false,   // opt_is_amount_formatted
                              true     //  opt_is_percent_fee_formatted
                    ));


    handler.listen(feeDlg, goog.ui.Dialog.EventType.SELECT, function(e) {
      if (e.key == 'ok') {
        var form_data = bitex.util.getFormAsJSON(goog.dom.getFirstElementChild(feeDlg.getContentElement()));


        var percent_fee = form_data['PercentFee'];
        var pos = [0];
        var percent_fee_value = valueFormatter.parse(percent_fee, pos);
        if (isNaN(percent_fee_value)) {
          percent_fee_value = 0;
        }
        if (pos[0] != percent_fee.length || isNaN(percent_fee_value) || percent_fee_value < 0 ) {
          e.stopPropagation();
          e.preventDefault();
          return;
        }

        var fixed_fee = form_data['FixedFee'];
        pos = [0];
        var fixed_fee_value = valueFormatter.parse(fixed_fee, pos);
        if (isNaN(fixed_fee_value)) {
          fixed_fee_value = 0;
        }

        if (pos[0] != fixed_fee.length || isNaN(fixed_fee_value) || fixed_fee_value < 0 ) {
          e.stopPropagation();
          e.preventDefault();
          return;
        }
        fixed_fee_value = fixed_fee_value * 1e8;

        var original_fees = parseInt((withdraw_data['Amount'] - withdraw_data['FixedFee']) * (withdraw_data['PercentFee']/100.0),10)
        var effective_fees = parseInt((withdraw_data['Amount'] - fixed_fee_value) * (percent_fee_value/100.0),10)

        if (original_fees < effective_fees) {
          // The broker tried to increase the amount of fees.
          e.stopPropagation();
          e.preventDefault();
          return;
        } else if (original_fees > effective_fees) {
          form_data['Fees'] = this.formatCurrency(original_fees / 1e8, withdraw_data['Currency'] , true) +
              '|' + this.formatCurrency(effective_fees / 1e8,withdraw_data['Currency'] , true);
        }

        delete form_data['Amount'];
        delete form_data['FixedFee'];
        delete form_data['PercentFee'];

        this.getBitexConnection().processWithdraw(request_id,
                                                  action,
                                                  withdraw_data['WithdrawID'],
                                                  undefined,  // opt_reason_id
                                                  undefined,  // opt_reason
                                                  form_data,  // opt_data
                                                  percent_fee_value, // opt_percent_fee
                                                  fixed_fee_value); // opt_fixed_fee

      }
    }, this);

  } else if (action === 'COMPLETE') {
    var dialogContent = bitex.templates.DepositWithdrawDialogContent({
      side: 'broker',
      currency: withdraw_data['Currency'],
      currencySign: this.getCurrencySign(withdraw_data['Currency']),
      force_method: withdraw_data['Method'],
      amount: withdraw_data['Amount'],
      methods: model.get('Profile')['WithdrawStructure'][withdraw_data['Currency'] ],
      methodID: method_element_id,
      showFeeDataEntry:false,
      amountID: withdraw_amount_element_id,
      fixedFeeID: fixed_fee_element_id,
      percentFeeID: percent_fee_element_id,
      totalFeesID: total_fees_element_id,
      netValueID: net_value_element_id,
      hideNetAmount:false,
      type:'confirm_withdrawal',
      netAmountLabel:MSG_NET_AMOUNT_LABEL_NET_AMOUNT
    });

    /**
     * @desc Crypto Currency Withdraw accordion title
     */
    var MSG_CURRENCY_BROKER_WITHDRAW_DIALOG_TITLE =
        goog.getMsg('Confirm {$currency} withdrawal', {currency :  this.getCurrencyDescription(withdraw_data['Currency']) });


    var dlg =  this.showDialog(dialogContent,
                               MSG_CURRENCY_BROKER_WITHDRAW_DIALOG_TITLE,
                               bitex.ui.Dialog.ButtonSet.createOkCancel());
    this.getModel().updateDom();

    handler.listen(dlg, goog.ui.Dialog.EventType.SELECT, function(e) {
      if (e.key == 'ok') {
        var broker_withdraw_data = bitex.util.getFormAsJSON(goog.dom.getFirstElementChild(dlg.getContentElement()));
        delete broker_withdraw_data['Amount'];

        this.getBitexConnection().processWithdraw(request_id,
                                                  action,
                                                  withdraw_data['WithdrawID'],
                                                  undefined,
                                                  undefined,
                                                  broker_withdraw_data);
      }
    }, this);
  }
};

/**
 * @param {goog.events.Event} e
 * @private
 */
bitex.app.BlinkTrade.prototype.onUserWithdrawComment_ = function(e){
  var model = this.getModel();
  var handler = this.getHandler();
  var withdraw_data = e.target.getWithdrawData();
  var request_id = e.target.getRequestId();
  var withdraw_id = withdraw_data["WithdrawID"];
  var comments = withdraw_data["Data"]["Comments"] || [];

  /**
   * @desc Comment Withdraw dialog title
   */
  var MSG_WITHDRAW_COMMENT_DIALOG_TITLE = goog.getMsg('Comments withdraw');

  var comment_dialog_content = bitex.view.WithdrawView.templates.WithdrawCommentDialogContent({
    comments: comments
  });

  var commentWithdrawDlg = this.showDialog(comment_dialog_content,
                                           MSG_WITHDRAW_COMMENT_DIALOG_TITLE,
                                           bitex.ui.Dialog.ButtonSet.createOkCancel());

  var comment_el = goog.dom.getElement('id_withdraw_comment');
  handler.listen(commentWithdrawDlg, goog.ui.Dialog.EventType.SELECT, function(e) {
    if (e.key == 'ok') {
      var comment = goog.string.trim(goog.dom.forms.getValue(comment_el));
      this.getBitexConnection().commentWithdraw(request_id, comment, withdraw_id);
    }
  }, this);
};


/**
 * @param {goog.events.Event} e
 * @private
 */
bitex.app.BlinkTrade.prototype.onUserOrderEntry_ = function(e){
  /**
   * @desc notification for send order request
   */
  var MSG_SEND_ORDER_NOTIFICATION_TITLE = goog.getMsg('Sending order...');


  /**
   * @desc notification for send order request
   */
  var MSG_SEND_ORDER_NOTIFICATION_SIDE_BUY = goog.getMsg('BUY');


  /**
   * @desc notification for send order request
   */
  var MSG_SEND_ORDER_NOTIFICATION_SIDE_SELL = goog.getMsg('SELL');

  var side_msg =  MSG_SEND_ORDER_NOTIFICATION_SIDE_BUY;

  if (e.target.getSide() == '2') {
    side_msg = MSG_SEND_ORDER_NOTIFICATION_SIDE_SELL;
  }

  //
  // lets check if the user has available balance
  //
  if (!this.getModel().get('IsBroker')) {
    var balance_needed_to_send_the_order;
    var balance_currency;
    if (e.target.getSide() == '1') { // Buy
      balance_currency =  this.getPriceCurrencyFromSymbol(e.target.getSymbol());
      balance_needed_to_send_the_order = parseInt(e.target.getPrice() * e.target.getAmount() / 1e8, 10);
    } else if (e.target.getSide() == '2') {
      balance_currency =  this.getQtyCurrencyFromSymbol(e.target.getSymbol());
      balance_needed_to_send_the_order =  e.target.getAmount();
    }

    var broker_id = this.getModel().get('SelectedBrokerID');
    var client_id = this.getModel().get('UserID');


    var user_available_balance_for_trading = this.getBalance(balance_currency, "available");
    var amount = Math.round(balance_needed_to_send_the_order - user_available_balance_for_trading);
    if (amount > 0) {
      var instructions = [{
        'Timeout': 60,  // 60 seconds to deposit
        'Filter': {'PaidValue': amount},
        'Msg': {
          'MsgType': 'D',
          'ClOrdID': '' + new Date().getTime()  + '.L',
          'Symbol': e.target.getSymbol(),
          'Side': e.target.getSide(),
          'OrdType': '2', // Limited order
          'Price': e.target.getPrice(),
          'OrderQty': e.target.getAmount(),
          'BrokerID': e.target.getBrokerID()
        }
      }];

      var confirmDialogContent = bitex.templates.InsufficientFundsContentDialog({
        currencyDescription: this.getCurrencyDescription(balance_currency),
        balanceKey: broker_id + ':' + client_id + '_'  + balance_currency,
        depositFormattedBalance: this.formatCurrency(this.getDepositedAmount(balance_currency)/1e8, balance_currency, true),
        lockedFormattedBalance: this.formatCurrency(this.getLockedAmount(balance_currency)/1e8, balance_currency, true),
        availableFormattedBalance: this.formatCurrency(user_available_balance_for_trading/1e8, balance_currency, true)
      });

      /**
       * @desc dialog shown when the user doesn't have enough funds to buy/sell
       */
      var MSG_INSUFFICIENT_BALANCE_DIALOG_TITLE = goog.getMsg('Insufficient funds');

      /**
       * @desc dialog shown when the user doesn't have enough funds to buy/sell
       */
      var MSG_INSUFFICIENT_BALANCE_DEPOSIT_BUTTON_CAPTION = goog.getMsg('Deposit {$amount}', {
        amount: this.formatCurrency(amount/1e8, balance_currency, true)});


      var option_buttons = new bitex.ui.Dialog.ButtonSet().
          addButton({
                       key: 'deposit',
                       caption: MSG_INSUFFICIENT_BALANCE_DEPOSIT_BUTTON_CAPTION
                    }, true, true).
          addButton(goog.ui.Dialog.ButtonSet.DefaultButtons.CANCEL, false, true);


      var dlgConfirm =  this.showDialog(confirmDialogContent,
                                        MSG_INSUFFICIENT_BALANCE_DIALOG_TITLE,
                                        option_buttons);

      var handler = this.getHandler();
      handler.listen(dlgConfirm, goog.ui.Dialog.EventType.SELECT, function(e) {
        if (e.key == 'deposit') {
          e.preventDefault();
          e.stopPropagation();

          var formatted_amount = new bitex.primitives.Price(amount, this.getCurrencyPip(balance_currency) ).format();

          this.showDepositDialog(balance_currency, (amount/1e8).toFixed(8), formatted_amount, false, instructions);
        }
      }, this);
      return;
    }
  }

  this.executeOrder = function() {

    /**
    * @desc notification for send order request
    */
    var MSG_SEND_ORDER_NOTIFICATION_CONTENT = goog.getMsg('{$side} {$amount} @ {$price}', {
      side: side_msg,
      amount: this.formatCurrency(e.target.getAmount()/1e8,  this.getQtyCurrencyFromSymbol(e.target.getSymbol()), true),
      price: this.formatCurrency(e.target.getPrice()/1e8,  this.getPriceCurrencyFromSymbol(e.target.getSymbol()), true)
    });

    this.showNotification( 'info', MSG_SEND_ORDER_NOTIFICATION_TITLE,MSG_SEND_ORDER_NOTIFICATION_CONTENT );

    this.conn_.sendLimitedOrder(e.target.getSymbol(),
                                e.target.getAmount(),
                                e.target.getPrice(),
                                e.target.getSide(),
                                e.target.getBrokerID(),
                                e.target.getClientID());
  };

  var confirmationOrder = false;
  if (goog.isDefAndNotNull(this.getModel().get('Profile')['ConfirmationOrder'])){
    confirmationOrder = this.getModel().get('Profile')['ConfirmationOrder'];
  }
  if (confirmationOrder === true) {
    /**
     * @desc dialog shown when user send an order
     */
    var MSG_CONFIRMATION_ORDER = goog.getMsg('Confirm Your Order');

    var confirmOrderDialogContent = bitex.templates.ConfirmOrderContentDialog({
      amount: this.formatCurrency(e.target.getAmount() / 1e8, this.getQtyCurrencyFromSymbol(e.target.getSymbol()),   true),
      price:  this.formatCurrency(e.target.getPrice() / 1e8,  this.getPriceCurrencyFromSymbol(e.target.getSymbol()), true),
      total:  this.formatCurrency(e.target.getTotal() / 1e8,  this.getPriceCurrencyFromSymbol(e.target.getSymbol()), true),
      side:   e.target.getSide()
    });


    var dlgConfirm = this.showDialog(confirmOrderDialogContent,
                                    MSG_CONFIRMATION_ORDER,
                                    bitex.ui.Dialog.ButtonSet.createOkCancel());

    var handler = this.getHandler();
    handler.listen(dlgConfirm, goog.ui.Dialog.EventType.SELECT, function(d) {
      if(d.key == 'ok') {
        this.executeOrder();
      }
    }, this);
  } else {
    this.executeOrder();
  }
};

/**
 * @param {goog.events.Event} e
 * @private
 */
bitex.app.BlinkTrade.prototype.onUserCancelOrder_ = function(e){
  /**
   * @desc notification for order cancel request
   */
  var MSG_CANCEL_ORDER_NOTIFICATION_TITLE = goog.getMsg('Cancelling order...');

  if (goog.isDefAndNotNull(e.target.getClientOrderId())) {
    this.showNotification('info', MSG_CANCEL_ORDER_NOTIFICATION_TITLE, ':' + e.target.getClientOrderId() );
  } else {
    this.showNotification('info', MSG_CANCEL_ORDER_NOTIFICATION_TITLE, ':' + e.target.getOrderId() );
  }
  this.conn_.cancelOrder(e.target.getClientOrderId(), e.target.getOrderId());
};

/**
 * @param {goog.events.Event} e
 * @private
 */
bitex.app.BlinkTrade.prototype.onUserCancelReplaceOrder_ = function(e) {
  this.conn_.cancelOrder(e.target.getClientOrderId(), e.target.getOrderId());

  this.conn_.sendLimitedOrder(e.target.getSymbol(),
                              e.target.getAmount(),
                              e.target.getPrice(),
                              e.target.getSide(),
                              e.target.getBrokerID(),
                              e.target.getClientID());
};

/**
 * @param {goog.events.Event} e
 * @private
 */
bitex.app.BlinkTrade.prototype.onShowReceipt_ = function(e){
  var receiptData = e.target.getReceiptData();
  var depositDetailTemplateData = [];
  goog.object.forEach( e.target.getReceiptData(), function( data, k ) {
    if (k != 'DepositReceipt' && k != 'SubmissionID') {
      depositDetailTemplateData.push ( { "key": k, "value": data  }  );
    }
  }, this);

  var depositReceiptTemplateData = [];
  goog.array.forEach(e.target.getReceiptData()['DepositReceipt'], function(url) {
    var is_pdf = goog.string.caseInsensitiveEndsWith(url, 'pdf');
    var is_txt = goog.string.caseInsensitiveEndsWith(url, 'txt');

    var data = {
      'url': url,
      'type': 'image'
    };
    if (is_pdf) {
      data['type'] = 'pdf';
    } else if (is_txt) {
      data['type'] = 'txt';
    }
    depositReceiptTemplateData.push(data);
  }, this);

  /**
   * @desc Crypto Currency Withdraw deposit title
   */
  var MSG_SHOW_DEPOSIT_RECEIPT_DIALOG_TITLE =
      goog.getMsg("Submission {$submissionid}", { submissionid : receiptData['SubmissionID'] });

  var dlg =  this.showDialog(bitex.templates.DepositDetailDialogContent({ depositDetailData:depositDetailTemplateData,
                                                                          depositReceiptList:depositReceiptTemplateData}),
                             MSG_SHOW_DEPOSIT_RECEIPT_DIALOG_TITLE,
                             bitex.ui.Dialog.ButtonSet.createOk());
};

/**
 * @param {bitex.api.BitExEvent} e
 * @private
 */
bitex.app.BlinkTrade.prototype.onUpdateProfileResponse_ = function(e) {
  var msg = e.data;
  var new_profile = msg['Profile'];
  var model = this.getModel();
  model.set('SelectedCustomer', new_profile);
  model.set('Profile', new_profile);
};


/**
 * @param {goog.events.Event} e
 * @private
 */
bitex.app.BlinkTrade.prototype.onUserShowKYC_ = function(e) {
  var verification_data = e.target.getData();

  var html = bitex.util.verificationData2HTML(verification_data);

  /**
   * @desc kyc dialog title
   */
  var MSG_SHOW_KYC_DIALOG_TITLE = goog.getMsg('KYC');

  this.showDialog(html, MSG_SHOW_KYC_DIALOG_TITLE);
};


/**
 * @param {goog.events.Event} e
 * @private
 */
bitex.app.BlinkTrade.prototype.onUserShowQr_ = function(e){
  var qrData = e.target.getQrData();

  /**
   * @desc Crypto Currency Withdraw deposit title
   */
  var MSG_SHOW_QR_CURRENCY_DEPOSIT_DIALOG_TITLE =
      goog.getMsg('{$currency} deposit', {currency :  this.getCurrencyDescription(qrData['Currency']) });

  /**
   * @desc Crypto Currency Withdraw withdraw title
   */
  var MSG_SHOW_QR_CURRENCY_WITHDRAW_DIALOG_TITLE =
      goog.getMsg('{$currency} withdraw', {currency :  this.getCurrencyDescription(qrData['Currency']) });

  var dialog_title = MSG_SHOW_QR_CURRENCY_WITHDRAW_DIALOG_TITLE;
  if (e.target.getQrDataVerb() === 'DEPOSIT') {
    dialog_title = MSG_SHOW_QR_CURRENCY_DEPOSIT_DIALOG_TITLE;
  }

  var dlg =  this.showDialog(bitex.templates.CryptoCurrencyQRContentDialog({data:qrData }),
                             dialog_title,
                             bitex.ui.Dialog.ButtonSet.createCancel());

  var handler = this.getHandler();
  var input_address =  qrData['Wallet'];
  handler.listenOnce(this.conn_ , bitex.api.BitEx.EventType.DEPOSIT_REFRESH, function(e){
    var refresh_msg = e.data;
    if (refresh_msg['Data']['InputAddress'] !== input_address ) {
      return;
    }
    if (goog.isDefAndNotNull( refresh_msg['Data']['Confirmations'] ) && refresh_msg['Data']['Confirmations']  == '0') {
      dlg.dispose();
    }
  });
};

/**
 * @param {goog.events.Event} e
 * @private
 */
bitex.app.BlinkTrade.prototype.onUserUploadReceipt_ = function(e){
  var model = this.getModel();
  var deposit_data = e.target.getDepositData();

  var broker = model.get('Broker');
  if (!goog.isDefAndNotNull(broker)){
    return;
  }

  var stunt_ip_str = goog.json.serialize(this.getSTUNTIp());

  var deposit_method = goog.array.find(this.getModel().get('DepositMethods'), function(dm){
    return (dm.id == deposit_data['DepositMethodID']);
  });


  var upload_form_url =  broker['UploadForm'];
  if (deposit_method) {
    upload_form_url = deposit_method.user_receipt_url;
  }

  upload_form_url = upload_form_url.replace('{{UserID}}', model.get('UserID'));
  upload_form_url = upload_form_url.replace('{{Username}}', model.get('Username'));
  upload_form_url = upload_form_url.replace('{{BrokerID}}', model.get('Broker')['BrokerID']);
  upload_form_url = upload_form_url.replace('{{BrokerUsername}}', model.get('Broker')['ShortName']);
  upload_form_url = upload_form_url.replace('{{Email}}', model.get('Profile')['Email']);
  upload_form_url = upload_form_url.replace('{{DepositMethod}}', deposit_data['DepositMethodName']);
  upload_form_url = upload_form_url.replace('{{ControlNumber}}', deposit_data['ControlNumber']);
  upload_form_url = upload_form_url.replace('{{DepositID}}', deposit_data['DepositID']);
  upload_form_url = upload_form_url.replace('{{Value}}',  deposit_data['Value']);
  upload_form_url = upload_form_url.replace('{{FingerPrint}}',  this.getFingerPrint());
  upload_form_url = upload_form_url.replace('{{STUNTIp}}',  stunt_ip_str);

  try {
    var formmatted_value = this.formatCurrency( deposit_data['Value']/1e8, deposit_data['Currency']  , true);
    upload_form_url = upload_form_url.replace('{{FormattedValue}}',  formmatted_value );
  } catch (e) {}


  var form_src = upload_form_url;
  window.open(form_src,
              'blank',
              'scrollbars=yes,toolbar=no,width=700,height=500');
};

/**
 * @param {string} amount_element_id
 * @param {string} fixed_fee_element_id
 * @param {string} percent_fee_element_id
 * @param {string} currency
 * @param {string=} opt_fee_value_element_id
 * @param {string=} opt_net_amount_element_id
 * @param {boolean=} opt_add_fees.  Default to true
 * @param {boolean=} opt_is_fixed_fee_in_satoshis. Default to true
 * @param {boolean=} opt_is_fixed_fee_formatted. Default to true
 * @param {boolean=} opt_is_amount_in_satoshis. Default to false
 * @param {boolean=} opt_is_amount_formatted. Default to true
 * @param {boolean=} opt_is_percent_fee_formatted. Default to true
 * @private
 */
bitex.app.BlinkTrade.prototype.doCalculateFees_ = function(amount_element_id,
                                                           fixed_fee_element_id,
                                                           percent_fee_element_id,
                                                           currency,
                                                           opt_fee_value_element_id,
                                                           opt_net_amount_element_id,
                                                           opt_add_fees,
                                                           opt_is_fixed_fee_in_satoshis,
                                                           opt_is_fixed_fee_formatted,
                                                           opt_is_amount_in_satoshis,
                                                           opt_is_amount_formatted,
                                                           opt_is_percent_fee_formatted ){
  var add_fees = true;
  if (opt_add_fees === false) {
    add_fees = opt_add_fees;
  }
  var is_fixed_fee_in_satoshis = true;
  if (opt_is_fixed_fee_in_satoshis === false) {
    is_fixed_fee_in_satoshis = opt_is_fixed_fee_in_satoshis;
  }

  var is_fixed_fee_formatted = true;
  if (opt_is_fixed_fee_formatted === false) {
    is_fixed_fee_formatted = opt_is_fixed_fee_formatted;
  }

  var is_amount_in_satoshis = false;
  if (opt_is_amount_in_satoshis === true) {
    is_amount_in_satoshis = opt_is_amount_in_satoshis;
  }

  var is_amount_formatted = true;
  if (opt_is_amount_formatted === false) {
    is_amount_formatted = opt_is_amount_formatted;
  }

  var is_percent_fee_formatted = true;
  if (opt_is_percent_fee_formatted === false) {
    is_percent_fee_formatted = opt_is_percent_fee_formatted;
  }

  var valueFormatter = new goog.i18n.NumberFormat( goog.i18n.NumberFormat.Format.DECIMAL);

  var pos = [0];

  var raw_amount = goog.dom.forms.getValue( goog.dom.getElement(amount_element_id) );
  var amount = 0;
  if (is_amount_formatted) {
    pos = [0];
    amount = valueFormatter.parse(raw_amount , pos );
    if (pos[0] != raw_amount.length || isNaN(amount) || amount <= 0 ) {
      return;
    }
    if (isNaN(amount)) {
      amount = 0;
    }
  } else {
    amount = goog.string.toNumber(raw_amount);
  }
  if (!is_amount_in_satoshis) {
    amount = amount * 1e8;
  }


  var percent_fee = goog.dom.forms.getValue( goog.dom.getElement(percent_fee_element_id) );
  var percent_fee_value = 0.;
  if (is_percent_fee_formatted) {
    pos = [0];
    percent_fee_value = valueFormatter.parse(percent_fee, pos);
    if (isNaN(percent_fee_value)) {
      percent_fee_value = 0.;
    }
  } else {
    percent_fee_value = goog.string.toNumber(percent_fee);
  }


  var fixed_fee = goog.dom.forms.getValue( goog.dom.getElement(fixed_fee_element_id) );
  var fixed_fee_value = 0;
  if (is_fixed_fee_formatted) {
    pos = [0];
    fixed_fee_value = valueFormatter.parse(fixed_fee, pos);
    if (isNaN(fixed_fee_value)) {
      fixed_fee_value = 0;
    }
  } else {
    fixed_fee_value = goog.string.toNumber(fixed_fee);
  }
  if (!is_fixed_fee_in_satoshis) {
    fixed_fee_value = fixed_fee_value * 1e8;
  }



  var total_percent_fee_value = parseInt(((amount - fixed_fee_value) * ((percent_fee_value)/100.0)),10);
  var total_fixed_fee_value = fixed_fee_value;
  var total_fees = parseInt(total_percent_fee_value + total_fixed_fee_value,10);
  var net_amount = parseInt(amount - total_fees,10);
  if (add_fees) {
    net_amount = amount + total_fees
  }

  if (goog.isDefAndNotNull(opt_fee_value_element_id)) {
    var formatted_total_fee = this.formatCurrency(total_fees/1e8, currency, true);
    goog.dom.setTextContent( goog.dom.getElement(opt_fee_value_element_id) , formatted_total_fee);
  }
  if (goog.isDefAndNotNull(opt_net_amount_element_id)) {
    var formatted_net_amount = this.formatCurrency(net_amount/1e8, currency, true);
    goog.dom.setTextContent(goog.dom.getElement(opt_net_amount_element_id), formatted_net_amount);

    var net_amount_element_value_id = opt_net_amount_element_id + '_value';
    goog.dom.forms.setValue(goog.dom.getElement(net_amount_element_value_id), net_amount);

    var net_amount_element_validator_id = opt_net_amount_element_id + '_validator';
    if (goog.isDefAndNotNull(goog.dom.getElement(net_amount_element_validator_id))){
      var validatorFormatter = new goog.i18n.NumberFormat( goog.i18n.NumberFormat.Format.DECIMAL);
      validatorFormatter.setMaximumFractionDigits(8);
      validatorFormatter.setMinimumFractionDigits(2);

      goog.dom.forms.setValue(goog.dom.getElement(net_amount_element_validator_id),
          validatorFormatter.format(net_amount/1e8));
    }
  }

  return [ amount, percent_fee_value, fixed_fee_value, net_amount ];
};

/**
 * @param {goog.events.Event} e
 * @private
 */
bitex.app.BlinkTrade.prototype.onProcessDeposit_ = function(e){
  var model = this.getModel();
  var deposit_data = e.target.getDepositData();
  var request_id = e.target.getRequestId();
  var action = e.target.getDepositAction();
  var handler = this.getHandler();

  if (action === 'CANCEL') {

    /**
     * @desc Cancel Deposit dialog title
     */
    var MSG_DEPOSIT_CANCEL_DIALOG_TITLE = goog.getMsg('Cancel deposit');

    var cancel_reason_dialog_content = bitex.templates.CancelDepositDialogContent({
      reason_id:'id_select_reason',
      custom_reason_id:'id_custom_reason_text'
    });

    var cancelWithdrawDlg =  this.showDialog( cancel_reason_dialog_content,
                                              MSG_DEPOSIT_CANCEL_DIALOG_TITLE,
                                              bitex.ui.Dialog.ButtonSet.createOkCancel() );


    var select_reason_el = goog.dom.getElement('id_select_reason');
    var reason_el = goog.dom.getElement('id_custom_reason_text');
    handler.listen(select_reason_el, goog.events.EventType.CHANGE, function(e){
      var reason_id = goog.string.toNumber(goog.dom.forms.getValue( select_reason_el ));
      goog.style.showElement ( reason_el, (reason_id === 0 )) ;
    });

    handler.listen(cancelWithdrawDlg, goog.ui.Dialog.EventType.SELECT, function(e) {
      if (e.key == 'ok') {
        var reason_id = goog.string.toNumber(goog.dom.forms.getValue( select_reason_el ));
        var reason;

        if (reason_id === 0 ) {
          reason = goog.string.trim(goog.dom.forms.getValue(reason_el));

          if (goog.string.isEmpty(reason)) {
            e.stopPropagation();
            e.preventDefault();
            goog.dom.getElement('id_custom_reason_text').focus();
            return;
          }
        }

        this.getBitexConnection().processDeposit (request_id,
                                                  action,
                                                  undefined,
                                                  deposit_data['DepositID'],
                                                  reason_id,
                                                  reason);
      }
    }, this);
  } else if (action === 'PROGRESS') {
    this.getBitexConnection().processDeposit (request_id,
                                              action,
                                              undefined,
                                              deposit_data['DepositID']);

  } else if (action === 'COMPLETE') {
    var valueFormatter = new goog.i18n.NumberFormat( goog.i18n.NumberFormat.Format.DECIMAL);
    valueFormatter.setMaximumFractionDigits(8);
    valueFormatter.setMinimumFractionDigits(2);


    var paid_value_element_id = goog.string.getRandomString();
    var fixed_fee_element_id = goog.string.getRandomString();
    var percent_fee_element_id = goog.string.getRandomString();
    var total_fees_element_id = goog.string.getRandomString();
    var net_value_element_id = goog.string.getRandomString();

    var control_number  = deposit_data['ControlNumber'];
    if (deposit_data['Type'] == 'CRY') {
      control_number  = deposit_data['Data']['InputAddress'];
    }

    var confirm_deposit_dialog_content = bitex.templates.BrokerConfirmDepositContent({
      id_value:paid_value_element_id,
      fixedFeeID: fixed_fee_element_id,
      percentFeeID: percent_fee_element_id,
      totalFeesID: total_fees_element_id,
      netValueID: net_value_element_id,
      controlNumber:control_number ,
      currencySign:this.getCurrencySign(deposit_data['Currency']),
      value: valueFormatter.format(deposit_data['Value']/1e8),
      percentFee: valueFormatter.format(deposit_data['PercentFee']),
      fixedFee: valueFormatter.format(deposit_data['FixedFee']/1e8)
    });

    /**
     * @desc Dialog title to get deposit paid value
     */
    var MSG_DLG_TITLE_GET_DEPOSIT_PAID_VALUE = goog.getMsg('Confirm deposit');

    var confirmDepositDlg = this.showDialog(confirm_deposit_dialog_content,
                                            MSG_DLG_TITLE_GET_DEPOSIT_PAID_VALUE,
                                            bitex.ui.Dialog.ButtonSet.createOkCancel());


    this.doCalculateFees_ (paid_value_element_id,
                           fixed_fee_element_id,
                           percent_fee_element_id,
                           deposit_data['Currency'],
                           total_fees_element_id,
                           net_value_element_id,
                           false,  // opt_add_fees
                           false,  // opt_is_fixed_fee_in_satoshis
                           true,   // opt_is_fixed_fee_formatted
                           false,  // opt_is_amount_in_satoshis
                           true,   // opt_is_amount_formatted
                           true   //  opt_is_percent_fee_formatted
    );

    handler.listen( new goog.events.InputHandler(goog.dom.getElement(paid_value_element_id) ),
        goog.events.InputHandler.EventType.INPUT,
        goog.bind(this.doCalculateFees_, this,
                  paid_value_element_id,
                  fixed_fee_element_id,
                  percent_fee_element_id,
                  deposit_data['Currency'],
                  total_fees_element_id,
                  net_value_element_id,
                  false,  // opt_add_fees
                  false,  // opt_is_fixed_fee_in_satoshis
                  true,   // opt_is_fixed_fee_formatted
                  false,  // opt_is_amount_in_satoshis
                  true,   // opt_is_amount_formatted
                  true   //  opt_is_percent_fee_formatted
        ));

    handler.listen( new goog.events.InputHandler(goog.dom.getElement(percent_fee_element_id) ),
        goog.events.InputHandler.EventType.INPUT,
        goog.bind(this.doCalculateFees_, this,
                  paid_value_element_id,
                  fixed_fee_element_id,
                  percent_fee_element_id,
                  deposit_data['Currency'],
                  total_fees_element_id,
                  net_value_element_id,
                  false,  // opt_add_fees
                  false,  // opt_is_fixed_fee_in_satoshis
                  true,   // opt_is_fixed_fee_formatted
                  false,  // opt_is_amount_in_satoshis
                  true,   // opt_is_amount_formatted
                  true   //  opt_is_percent_fee_formatted
        ));

    handler.listen( new goog.events.InputHandler(goog.dom.getElement(fixed_fee_element_id) ),
        goog.events.InputHandler.EventType.INPUT,
        goog.bind(this.doCalculateFees_, this,
                  paid_value_element_id,
                  fixed_fee_element_id,
                  percent_fee_element_id,
                  deposit_data['Currency'],
                  total_fees_element_id,
                  net_value_element_id,
                  false,  // opt_add_fees
                  false,  // opt_is_fixed_fee_in_satoshis
                  true,   // opt_is_fixed_fee_formatted
                  false,  // opt_is_amount_in_satoshis
                  true,   // opt_is_amount_formatted
                  true   //  opt_is_percent_fee_formatted
        ));

    handler.listen(confirmDepositDlg, goog.ui.Dialog.EventType.SELECT, function(e) {
      if (e.key == 'ok') {
        var pos = [0];
        var raw_paid_value = goog.dom.forms.getValue( goog.dom.getElement(paid_value_element_id) );

        var paid_value = valueFormatter.parse(raw_paid_value , pos );
        if (pos[0] != raw_paid_value.length || isNaN(paid_value) || paid_value <= 0 ) {
          e.stopPropagation();
          e.preventDefault();
          goog.dom.getElement(paid_value_element_id).focus();
          return;
        }
        paid_value = paid_value * 1e8;


        var percent_fee = goog.dom.forms.getValue( goog.dom.getElement(percent_fee_element_id) );
        pos = [0];
        var percent_fee_value = valueFormatter.parse(percent_fee, pos);
        if (isNaN(percent_fee_value)) {
          percent_fee_value = 0;
        }
        if (pos[0] != percent_fee.length || isNaN(percent_fee_value) || percent_fee_value < 0 ) {
          e.stopPropagation();
          e.preventDefault();
          goog.dom.getElement(percent_fee_element_id).focus();
          return;
        }

        var fixed_fee = goog.dom.forms.getValue( goog.dom.getElement(fixed_fee_element_id) );
        pos = [0];
        var fixed_fee_value = valueFormatter.parse(fixed_fee, pos);
        if (isNaN(fixed_fee_value)) {
          fixed_fee_value = 0;
        }

        if (pos[0] != fixed_fee.length || isNaN(fixed_fee_value) || fixed_fee_value < 0 ) {
          e.stopPropagation();
          e.preventDefault();
          goog.dom.getElement(fixed_fee_element_id).focus();
          return;
        }
        fixed_fee_value = fixed_fee_value * 1e8;

        this.getBitexConnection().processDeposit (request_id,
                                                  action,
                                                  undefined, // opt_secret
                                                  deposit_data['DepositID'],
                                                  undefined, // opt_reasonId
                                                  undefined, // opt_reason
                                                  paid_value, // opt_amount
                                                  percent_fee_value,
                                                  fixed_fee_value);

      }
    }, this);
  }
};

/**
 * @param {goog.events.Event} e
 * @private
 */
bitex.app.BlinkTrade.prototype.onInstantFiatDeposit_ = function(e){
  var model = this.getModel();
  var deposit_data = e.target.getDepositData();
  var request_id = e.target.getRequestId();
  var handler = this.getHandler();

  var portfolio_currency = deposit_data['Currency'];

  var portfolio_balance_model_key = 'Portfolio_Balance_' +
      model.get('Broker')['BrokerID'] +  '_' + model.get('UserID')  + '_' + portfolio_currency;
  var portfolio_position_model_key = 'Portfolio_Position_' +
      model.get('Broker')['BrokerID'] +  '_' + model.get('UserID')  + '_' + portfolio_currency;

  var gross_limit_credit_formula = '(((' +portfolio_balance_model_key +
      ' + ' + portfolio_position_model_key + ' ) * 3) + ' + portfolio_position_model_key + ') ';


  var expected_fees_formula = '( ' + deposit_data['FixedFee']
      + ' + ( (' +  gross_limit_credit_formula + ' - ' + deposit_data['FixedFee'] + ')'
      + ' * (' + deposit_data['PercentFee']/100.0 + ') ) )';


  var formula = '(' + gross_limit_credit_formula + ' - ' +  expected_fees_formula + ' ) / 100000000';


  var variable_list = new goog.structs.Set();
  variable_list.add(portfolio_balance_model_key);
  variable_list.add(portfolio_position_model_key);

  var total_percent_fee_value = parseInt(
      ((deposit_data['Value'] - deposit_data['FixedFee']) * ((deposit_data['PercentFee'])/100.0)),10);
  var total_fees = parseInt(total_percent_fee_value + deposit_data['FixedFee'],10);
  var net_value = (deposit_data['Value'] - total_fees) / 1e8;

  /**
   * @desc Pre approval deposit dialog
   */
  var MSG_SHOW_DEPOSIT_PRE_APPROVE_DIALOG_TITLE = goog.getMsg("Deposit pre approval");

  var dlg = this.showDialog(bitex.templates.InstantFiatDepositDialogContent({
      variables: variable_list.getValues().join(','),
      currency: portfolio_currency,
      pattern: this.getCurrencyHumanFormat(portfolio_currency),
      formula: formula,
      value: net_value
  }), MSG_SHOW_DEPOSIT_PRE_APPROVE_DIALOG_TITLE, bitex.ui.Dialog.ButtonSet.createYesNo());

  model.updateDom();


  handler.listen(dlg, goog.ui.Dialog.EventType.SELECT, function(e) {
    if (e.key == 'yes') {
        this.getBitexConnection().processInstantDepositFiat(deposit_data['DepositID'], request_id);
    }
  }, this);
};

/**
 *
 * @param {string} currency
 * @param {number=} opt_amount
 * @param {string=} opt_formatted_amount
 * @param {boolean=} opt_switch_view  Defaults to true
 * @param {Object=} opt_instructions
 */
bitex.app.BlinkTrade.prototype.showDepositDialog = function(currency,
                                                            opt_amount,
                                                            opt_formatted_amount,
                                                            opt_switch_view,
                                                            opt_instructions) {
  var handler = this.getHandler();
  var user_verification_level = this.getModel().get('Profile')['Verified'];

  var switch_view = (opt_switch_view!==false);
  if (switch_view) {
    this.setView('deposit');
  }


  /**
   * @desc Crypto Currency Withdraw accordion title
   */
  var MSG_CURRENCY_DEPOSIT_DIALOG_TITLE =
      goog.getMsg('{$currency} deposit', {currency :  this.getCurrencyDescription(currency) });


  if (this.isCryptoCurrency(currency)) {

    var confirmDialogContent = bitex.templates.ConfirmDepositCryptoCurrencyContentDialog({
        currencydescription: this.getCurrencyDescription(currency)
      });

    var dlgConfirm =  this.showDialog(confirmDialogContent,
                                      MSG_CURRENCY_DEPOSIT_DIALOG_TITLE,
                                      bitex.ui.Dialog.ButtonSet.createYesNoCancel());

    handler.listen(dlgConfirm, goog.ui.Dialog.EventType.SELECT, function(e) {
      if (e.key == 'yes') {
        e.preventDefault();
        e.stopPropagation();

        var request_id = parseInt( 1e7 * Math.random() , 10 );
        this.conn_.requestDeposit(
          request_id, undefined , opt_formatted_amount, undefined, currency, undefined, opt_instructions);

        goog.soy.renderElement(goog.dom.getFirstElementChild(dlgConfirm.getContentElement()),
                               bitex.templates.WaitingForDepositResponseDialogContent);

        dlgConfirm.setButtonSet( bitex.ui.Dialog.ButtonSet.createCancel() );


        handler.listenOnce( this.conn_ , bitex.api.BitEx.EventType.ERROR_MESSAGE + '.' + request_id, function(e){
          dlgConfirm.dispose();
        });

        handler.listenOnce( this.conn_ , bitex.api.BitEx.EventType.DEPOSIT_RESPONSE + '.' + request_id, function(e){
          var msg = e.data;

          var enabled_instant_deposits = user_verification_level >= 3;

          var input_address = msg['Data']['InputAddress'];
          goog.soy.renderElement(goog.dom.getFirstElementChild(dlgConfirm.getContentElement()),
                                 bitex.templates.DepositCryptoCurrencyContentDialog, {
                                   deposit_message:msg,
                                   hasInstantDepositsEnabled:enabled_instant_deposits,
                                   amount: opt_amount,
                                   formattedAmount: opt_formatted_amount
                                 });


          handler.listen(this.conn_ , bitex.api.BitEx.EventType.DEPOSIT_REFRESH, function(e){
            var refresh_msg = e.data;
            if (refresh_msg['Data']['InputAddress'] !== input_address ) {
              return;
            }
            if (goog.isDefAndNotNull( refresh_msg['Data']['Confirmations'] ) && refresh_msg['Data']['Confirmations']  == '0') {
              dlgConfirm.dispose();
            }
          });
        }, this);
      }
    });
    return;
  }

  var value_fmt = new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.DECIMAL);
  value_fmt.setMaximumFractionDigits(8);
  value_fmt.setMinimumFractionDigits(2);


  var deposit_methods = [];
  goog.array.forEach(this.getModel().get('DepositMethods'), function(deposit_method){
    if (deposit_method.currency == currency) {

      var deposit_method_limit;

      for (var x = user_verification_level; x>=0;x--) {
        deposit_method_limit = deposit_method.deposit_limits[ x ];
        if (goog.isDefAndNotNull(deposit_method_limit)) {
          break;
        }
      }

      var deposit_limit = { 'enabled':false };

      var has_limits_enabled_on_deposit_method = false;

      if ( goog.isDefAndNotNull(deposit_method_limit) && goog.isDefAndNotNull(deposit_method_limit['enabled'])) {
        has_limits_enabled_on_deposit_method = deposit_method_limit['enabled'];
      }

      if (has_limits_enabled_on_deposit_method) {
        deposit_limit['enabled'] = true;
        deposit_limit['min'] = deposit_method_limit['min'];
        deposit_limit['max'] = deposit_method_limit['max'];
        deposit_limit['formatted_min'] = this.formatCurrency(deposit_limit['min']/1e8, currency, true);
        deposit_limit['formatted_max'] = this.formatCurrency(deposit_limit['max']/1e8, currency, true);
        deposit_limit['formatted_min_value'] = value_fmt.format(deposit_limit['min']/1e8);
        deposit_limit['formatted_max_value'] = value_fmt.format(deposit_limit['max']/1e8);
      }

      var limits = {};
      limits['' + user_verification_level] = deposit_limit;
      if ( goog.isDefAndNotNull(deposit_limit) && deposit_limit['enabled']) {
        deposit_methods.push({
                               'method': deposit_method.id,
                               'description': deposit_method.description,
                               'disclaimer': deposit_method.disclaimer,
                               'percent_fee': deposit_method.percent_fee,
                               'fixed_fee': deposit_method.fixed_fee,
                               'limits': limits ,
                               'fields': []
                             });

      }
    }
  }, this);

  var method_element_id = goog.string.getRandomString();
  var amount_element_id = goog.string.getRandomString();
  var fixed_fee_element_id = goog.string.getRandomString();
  var percent_fee_element_id = goog.string.getRandomString();
  var total_fees_element_id = goog.string.getRandomString();
  var net_value_element_id = goog.string.getRandomString();

  var dialogContent = bitex.templates.DepositWithdrawDialogContent( {
                                                                      side: 'client',
                                                                      currency: currency,
                                                                      verificationLevel: user_verification_level,
                                                                      currencySign: this.getCurrencySign(currency),
                                                                      methods: deposit_methods,
                                                                      methodID: method_element_id,
                                                                      amountID: amount_element_id,
                                                                      showFeeDataEntry:false,
                                                                      amount:opt_amount,
                                                                      formattedAmount:opt_formatted_amount,
                                                                      fixedFeeID: fixed_fee_element_id,
                                                                      percentFeeID: percent_fee_element_id,
                                                                      totalFeesID: total_fees_element_id,
                                                                      netValueID: net_value_element_id,
                                                                      hideNetAmount:false,
                                                                      type:'deposit',
                                                                      netAmountLabel:MSG_NET_AMOUNT_LABEL_NET_AMOUNT
                                                                    });


  var dlg =  this.showDialog(dialogContent,
                             MSG_CURRENCY_DEPOSIT_DIALOG_TITLE,
                             bitex.ui.Dialog.ButtonSet.createOkCancel());
  this.getModel().updateDom();

  if (deposit_methods.length > 1 ) {
    goog.dom.forms.setValue(goog.dom.getElement(method_element_id));
  }

  var deposit_form_uniform = new uniform.Uniform();
  deposit_form_uniform.decorate(  goog.dom.getFirstElementChild(dlg.getContentElement()) );



  goog.array.forEach( deposit_methods, function(deposit_method) {
    var method_id = deposit_method['method'];
    handler.listen( new goog.events.InputHandler(goog.dom.getElement(method_id + '_' + amount_element_id) ),goog.events.InputHandler.EventType.INPUT,function(e) {
      this.doCalculateFees_(
          method_id + '_' + amount_element_id,
          method_id + '_' + fixed_fee_element_id,
          method_id + '_' + percent_fee_element_id,
          currency,
          method_id + '_' + total_fees_element_id,
          method_id + '_' + net_value_element_id,
          false,  // opt_add_fees
          true,   // opt_is_fixed_fee_in_satoshis
          false,  // opt_is_fixed_fee_formatted
          false,  // opt_is_amount_in_satoshis
          true,   // opt_is_amount_formatted
          false   // opt_is_percent_fee_formatted
      );
    }, this);

    this.doCalculateFees_(
        method_id + '_' + amount_element_id,
        method_id + '_' + fixed_fee_element_id,
        method_id + '_' + percent_fee_element_id,
        currency,
        method_id + '_' + total_fees_element_id,
        method_id + '_' + net_value_element_id,
        false,  // opt_add_fees
        true,   // opt_is_fixed_fee_in_satoshis
        false,  // opt_is_fixed_fee_formatted
        false,  // opt_is_amount_in_satoshis
        true,   // opt_is_amount_formatted
        false   // opt_is_percent_fee_formatted
    );

  }, this );



  handler.listen(dlg, goog.ui.Dialog.EventType.SELECT, function(e) {
    if (e.key == 'ok') {
      e.preventDefault();
      e.stopPropagation();

      var deposit_form_el = goog.dom.getFirstElementChild(dlg.getContentElement());

      if (deposit_form_el.getAttribute('data-deposit-status') != 'prepare')  {
        dlg.dispose();
      } else {
        var error_list = deposit_form_uniform.validate();
        if (error_list.length > 0) {
          goog.array.forEach(error_list, function(error_msg) {
            this.showNotification( 'error', error_msg );
          }, this );

          e.stopPropagation();
          e.preventDefault();
          return;
        }

        var deposit_data = deposit_form_uniform.getAsJSON();
        var amount = deposit_data['Amount'];
        if (amount < 0) {
          amount = 0;
        }

        amount = amount * 1e8;

        var deposit_method_id = goog.string.toNumber(deposit_data['Method']);
        if (deposit_method_id <= 0) {

          e.stopPropagation();
          e.preventDefault();
          return;
        }

        var request_id = parseInt( 1e7 * Math.random() , 10 );
        this.conn_.requestDeposit( request_id, deposit_method_id , amount, undefined, deposit_data['Currency']);

        goog.soy.renderElement(dlg.getContentElement(),
                               bitex.templates.WaitingForDepositResponseDialogContent);


        handler.listenOnce( this.conn_ , bitex.api.BitEx.EventType.DEPOSIT_RESPONSE + '.' + request_id, function(e){
          var msg = e.data;

          // Request deposit method details
          var deposit_method_detail_req_id = this.conn_.requestDepositMethodDetail(msg['DepositMethodID']);
          handler.listenOnce(this.conn_, bitex.api.BitEx.EventType.DEPOSIT_METHOD_DETAIL_RESPONSE + '.' + deposit_method_detail_req_id, function(e){
              var deposit_method_resp_msg = e.data;
              if (deposit_method_resp_msg["Type"] == 'DTP') {
                  var html_template = deposit_method_resp_msg["HtmlTemplate"];
                  html_template = goog.string.replaceAll(html_template, '*|control_number|*', '' + msg['ControlNumber']);
                  html_template = goog.string.replaceAll(html_template, '*|account_id|*', '' + msg['AccountID']);
                  html_template = goog.string.replaceAll(html_template, '*|broker_id|*', '' + msg['BrokerID']);
                  html_template = goog.string.replaceAll(html_template, '*|cl_ord_id|*', '' + msg['ClOrdID']);
                  html_template = goog.string.replaceAll(html_template, '*|created|*', '' + msg['Created']);
                  html_template = goog.string.replaceAll(html_template, '*|currency|*', '' + msg['Currency']);
                  html_template = goog.string.replaceAll(html_template, '*|deposit_id|*', '' + msg['DepositID']);
                  html_template = goog.string.replaceAll(html_template, '*|deposit_method_id|*', '' + msg['DepositMethodID']);
                  html_template = goog.string.replaceAll(html_template, '*|deposit_method_name|*', '' + msg['DepositMethodName']);
                  html_template = goog.string.replaceAll(html_template, '*|fixed_fee|*', '' + msg['FixedFee']);
                  html_template = goog.string.replaceAll(html_template, '*|user_id|*', '' + msg['UserID']);
                  html_template = goog.string.replaceAll(html_template, '*|username|*', '' + msg['Username']);
                  html_template = goog.string.replaceAll(html_template, '*|value|*', this.formatCurrency(msg['Value'] / 1e8 ,msg['Currency']));

                  goog.soy.renderElement(dlg.getContentElement(),bitex.templates.BlankDepositSlipContentDialog);
                  goog.dom.iframe.writeContent(
                      goog.dom.getFirstElementChild(goog.dom.getFirstElementChild(dlg.getContentElement())),
                      html_template);

              } else {
                  goog.soy.renderElement(dlg.getContentElement(),
                                         bitex.templates.DepositSlipContentDialog,
                                         {deposit_id:msg['DepositID'], rest_url:this.rest_url_  });
              }
              dlg.setButtonSet(bitex.ui.Dialog.ButtonSet.createPrintOk() );

              handler.listen(dlg, goog.ui.Dialog.EventType.SELECT, function(e) {
                if (e.key == 'print') {
                  window.open( this.rest_url_ + '/get_deposit?deposit_id=' +  msg['DepositID'] );
                }
              });
          });
        });
      }
    }
  }, this);
};

/**
 * @param {goog.events.Event} e
 * @private
 */
bitex.app.BlinkTrade.prototype.onUserDepositRequest_ = function(e){
  var currency = e.target.getCurrency();
  this.showDepositDialog(currency);
};

/**
 * @param {goog.events.Event} e
 * @private
 */
bitex.app.BlinkTrade.prototype.onUserForgotPassword_ = function(e){
  this.conn_.forgotPassword( this.getModel().get('SelectedBrokerID'), e.target.getEmail());
  this.router_.setView('set_new_password');
};

/**
 * @param {goog.events.Event} e
 * @private
 */
bitex.app.BlinkTrade.prototype.onUserSetNewPassword_ = function(e){
  this.conn_.resetPassword(e.target.getToken() ,  e.target.getPassword() );
};



/**
 * @param {goog.events.Event} e
 * @private
 */
bitex.app.BlinkTrade.prototype.onUserEnableTwoFactor_ = function(e){
  var code = e.target.getCode();
  var has_code = !goog.string.isEmpty(code);
  var secret = "";
  if (has_code) {
    secret = this.getModel().get('TwoFactorSecret');
  }

  var req_id = parseInt(Math.random() * 1000000, 10);
  this.conn_.enableTwoFactor( true, secret, code, undefined, req_id );

  var handler = this.getHandler();
  handler.listenOnce(this.conn_, bitex.api.BitEx.EventType.TWO_FACTOR_SECRET + '.' +  req_id, function(e){
    var msg = e.data;
    if (has_code && !msg['TwoFactorEnabled']) {

      /**
       * @desc Error message when user missed the google authentication code
       */
      var MSG_ERROR_SETTING_TWO_FACTOR = goog.getMsg('Wrong authentication code. ' +
         'Please, make sure that you are using Google Authenticator and your cellphone time is exact synched with google servers.');

      this.showDialog(MSG_ERROR_SETTING_TWO_FACTOR);
    }
  }, this);
};

/**
 * @param {goog.events.Event} e
 * @private
 */
bitex.app.BlinkTrade.prototype.onUserDisableTwoFactor_ = function(e){
  this.conn_.enableTwoFactor( false );
};


/**
 * @param {goog.events.Event} e
 * @private
 */
bitex.app.BlinkTrade.prototype.onBodyClick_ =function(e){
  var element = e.target;

  var view_name = element.getAttribute('data-switch-view');
  if (goog.isDefAndNotNull(view_name)) {
    e.preventDefault();
    e.stopPropagation();

    this.router_.setView(view_name );
  }

  var model = this.getModel();
  var model_set_element;
  if (goog.dom.classes.has(e.target, 'model-action-set')){
    model_set_element = e.target;
  } else {
    model_set_element = goog.dom.getAncestorByClass(e.target, 'model-action-set');
  }
  if (goog.isDefAndNotNull(model_set_element)) {
    if ( goog.isDefAndNotNull(model_set_element.getAttribute('data-key'))) {
      model.set(model_set_element.getAttribute('data-key'),model_set_element.getAttribute('data-value'));
    }
  }

  var action_element = goog.dom.getAncestor(e.target, function(node) {
    if (goog.isFunction(node.getAttribute) && goog.isDefAndNotNull(node.getAttribute('data-action'))) {
      return true;
    }
  }, true );
  if (goog.isDefAndNotNull(action_element)) {
    var action = action_element.getAttribute('data-action');
    var param1;
    var param2;
    switch(action) {
      case 'deposit':
        param1 = action_element.getAttribute('data-currency');
        this.showDepositDialog(param1);
        break;
      case 'withdraw':
      case 'service':
        param1 = action_element.getAttribute('data-currency');
        param2 = action_element.getAttribute('data-pre-filled-data');
        if (goog.isDefAndNotNull(param2)) {
          param2 = goog.json.parse(param2);
        }
        this.showWithdrawalDialog(param1, param2);
        break;
    }
    e.preventDefault();
    e.stopPropagation();
    return;
  }
};

/**
 * @param {goog.events.Event} e
 * @private
 */
bitex.app.BlinkTrade.prototype.onBodyChange_ =function(e){
  if (goog.dom.classes.has( e.target, 'withdraw-method-selector' )) {
    var selected_method = goog.dom.forms.getValue( e.target );

    var elements = goog.dom.getElementsByClass( 'withdraw-method');

    goog.array.forEach(elements, function(element) {
      var method = element.getAttribute('data-withdraw-method');
      goog.style.showElement(element, method == selected_method );

      var field_elements = goog.dom.getElementsByClass('withdraw-field', element);
      goog.array.forEach(field_elements, function(element){
        element.disabled = (method != selected_method);
      });
    }, this);
  }
};

/**
 * @param {goog.events.Event} e
 * @private
 */
bitex.app.BlinkTrade.prototype.onUserLoginButtonClick_ = function(e){
  var username = e.target.getUsername();
  var password = e.target.getPassword();
  var second_factor = e.target.getSecondFactor() || undefined;

  var trusted_device = e.target.getTrustedDevice() || false;
  this.getModel().set('TrustDevice', trusted_device);

  this.model_.set('Password', e.target.getPassword());

  var requestId = this.conn_.login(this.getModel().get('SelectedBrokerID'),
                                   username,
                                   password,
                                   second_factor,
                                   this.getModel().get('Token'),
                                   trusted_device,
                                   this.getModel().get('Referrer'),
                                   this.getModel().get('UriPath'));

  this.current_login_request_[requestId] = [ 'login',
                                             this.getModel().get('SelectedBrokerID'),
                                             username,
                                             password ];

  // Disable login buttons
  goog.array.forEach(goog.dom.getElementsByClass('btn-login'), function(button) {
    button.disabled = true;
  });
};


/**
 * @param {bitex.api.BitExEvent} e
 */
bitex.app.BlinkTrade.prototype.onUserLoginOk_ = function(e) {
  var msg = e.data;

  goog.dom.classes.add( document.body, 'bitex-logged'  );
  goog.dom.classes.remove( document.body, 'bitex-not-logged' );

  this.getModel().set('UserID',           msg['UserID'] );
  this.getModel().set('PseudoName',       bitex.util.getPseudoName(msg['UserID']));
  this.getModel().set('Username',         msg['Username']);
  this.getModel().set('Email',            msg['Email']);
  this.getModel().set('TwoFactorEnabled', msg['TwoFactorEnabled']);
  this.getModel().set('IsBroker',         msg['IsBroker'] );
  this.getModel().set('IsVerified',       msg['Profile']['Verified'] > 1);
  this.getModel().set('IsMissingVerification', msg['Profile']['Verified'] == 0);
  this.getModel().set('IsAccountBlocked', msg['Profile']['Verified'] < 0);
  this.getModel().set('IsMSB',            msg['IsMSB']);
  this.getModel().set('HasLineOfCredit',  msg['HasLineOfCredit']);
  this.getModel().set('EmailLang',        msg['EmailLang']);
  this.getModel().remove('Token');

  // Enable login buttons
  goog.array.forEach(goog.dom.getElementsByClass('btn-login'), function(button) {
    button.disabled = false;
  });

  var broker_currencies = new goog.structs.Set();
  var allowed_markets = {};
  var user_brokers = {};
  var broker_info;
  if (goog.isDefAndNotNull(msg['Broker'])) {
    broker_info = this.adjustBrokerData_(msg['Broker']);
    goog.object.extend(allowed_markets,  broker_info['AllowedMarkets']);
    broker_currencies.addAll(broker_info['BrokerCurrencies']);

    this.getModel().set('Broker', broker_info);


    user_brokers[ broker_info['BrokerID'] ] = broker_info;
    if (!msg['IsBroker'] ) {
      this.getModel().set('UserBrokers', user_brokers);
    }
  }

  var profile = msg['Profile'];
  if (msg['IsBroker'] ) {
    goog.dom.classes.add( document.body, 'bitex-broker');
    profile = this.adjustBrokerData_(profile);

    user_brokers[ profile['BrokerID'] ] = profile;
    this.getModel().set('UserBrokers', user_brokers);

    goog.object.extend(allowed_markets,  profile['AllowedMarkets']);
    broker_currencies.addAll(profile['BrokerCurrencies']);
  } else {
    goog.dom.classes.add( document.body, 'bitex-non-broker');

    if (profile['Verified'] >= 1) {
        goog.style.showElement(goog.dom.$("verification_menu_id"), false);
    }
  }
  this.getModel().set('Profile',  profile);
  this.getModel().set('ShowMMP', (this.getModel().get('IsBroker') || this.getModel().get('Profile')['IsMarketMaker'] ));


  if (goog.isDefAndNotNull(msg['Broker'])) {
    this.getModel().set('SelectedBrokerID', this.getModel().get('Broker')['BrokerID']);
  }

  this.getModel().set('AllowedMarkets', allowed_markets);
  this.getModel().set('BrokerCurrencies', broker_currencies.getValues() );



  var verification_data = profile['VerificationData'];
  if (profile['Verified'] >= 1) {
    try{
      if (goog.isDefAndNotNull(verification_data)){
        verification_data = goog.json.parse(verification_data);
      }
    }catch(e){}
  }
  this.getModel().set('VerificationData', verification_data);

  var verification_name = null;
  if (goog.isArray(verification_data)) {
    goog.array.forEach(verification_data, function(data){
      if (goog.isObject(data)) {
        if ( 'name' in data ) {
          verification_name = data['name'];
        }
      }
    });
  }
  this.getModel().set('VerificationName', verification_name);
  this.getModel().set('DisplayName', profile['Username']);
  if ( goog.isDefAndNotNull(verification_name))  {
    this.getModel().set('DisplayName', verification_name['first'] + ' ' + verification_name['last']);
  }

  try {
    if (goog.isDefAndNotNull($zopim) && goog.isDefAndNotNull($zopim.livechat)) {
      var tags = 'VerificationLevel:';
      switch(profile['Verified']) {
        case 0:
          tags += 'no';
          break;
        case 1:
          tags += 'pending';
          break;
        case 2:
          tags += 'processing';
          break;
        default:
          tags += profile['Verified'] - 2;
          break;
      }
      tags += ', TwoFactorEnabled:' + profile['TwoFactorEnabled'];
      tags += ', UserID:' + profile['ID'];
      tags += ', NeedWithdrawEmail:' + profile['NeedWithdrawEmail'];
      tags += ', TransactionFeeBuy:' + profile['TransactionFeeBuy'];
      tags += ', TransactionFeeSell:' + profile['TransactionFeeSell'];
      tags += ', TakerTransactionFeeBuy:' + profile['TakerTransactionFeeBuy'];
      tags += ', TakerTransactionFeeSell:' + profile['TakerTransactionFeeSell'];

      if (  this.getModel().get('DisplayName') != this.getModel().get('Username') )  {
        tags += ', Username:' + this.getModel().get('Username');
      }

      $zopim.livechat.setName( this.getModel().get('DisplayName') );
      $zopim.livechat.setEmail(profile['Email']);
      $zopim.livechat.addTags(tags);
    }
  } catch (e) {}

  var is_pro_trader = false;
  var required_level_to_be_a_pro_trader = this.getModel().get('RequiredLevelProTrader') || 0;
  if (msg['IsMSB'] || profile['IsMarketMaker'] || profile['Verified'] >= required_level_to_be_a_pro_trader  ){
    is_pro_trader = true;
  }
  this.getModel().set('IsProTrader', is_pro_trader );

  this.conn_.requestBalances();
  this.conn_.requestPositions();
  if (msg['IsBroker'] ) {
    if (goog.isDefAndNotNull( this.getModel().get('Profile')['Accounts'] )) {
      goog.object.forEach( this.getModel().get('Profile')['Accounts'], function(account_data) {
        this.conn_.requestBalances(account_data[0]);
      }, this);
    }
  }

  var value_fmt = new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.DECIMAL);
  value_fmt.setMaximumFractionDigits(8);
  value_fmt.setMinimumFractionDigits(2);


  var balances = {};
  balances[this.getModel().get('SelectedBrokerID')] = {};
  balances[this.getModel().get('SelectedBrokerID')][this.getModel().get('UserID')] = {};
  goog.structs.forEach(broker_currencies, function(currency) {
    balances[this.getModel().get('SelectedBrokerID')][this.getModel().get('UserID')][currency] = 0;
  }, this);
  this.getModel().set('Position', goog.object.unsafeClone(balances), true);
  this.getModel().set('Balance', goog.object.unsafeClone(balances), true);
  this.getModel().set('LockedBalance', goog.object.unsafeClone(balances), true);
  this.getModel().set('AvailableBalance', goog.object.unsafeClone(balances), true);

  this.getModel().set('UserLogged',true);
  this.getModel().set('HasAnyPosition', false);

  // Request Deposit Options
  this.conn_.requestDepositMethods( this.getModel().get('BrokerID') );

  if (msg['IsBroker'] ) {
    this.router_.setView('offerbook');
  } else {
    this.router_.setView('trading');
  }

  // Request Open Orders
  this.getModel().set('FinishedInitialOpenOrdersRequest',  false);
  this.conn_.requestOrderList(this.open_orders_request_id_ , 0, 20, [ "has_leaves_qty eq 1" ] );

};

/**
 * @param {bitex.api.BitExEvent} e
 */
bitex.app.BlinkTrade.prototype.onUserLoginError_ = function(e) {
  goog.dom.classes.add( document.body, 'bitex-not-logged'  );
  goog.dom.classes.remove( document.body, 'bitex-logged' );
  goog.dom.classes.remove( document.body, 'bitex-broker' );
  goog.dom.classes.remove( document.body, 'bitex-non-broker');

  var msg = e.data;

  this.model_.set('UserID', '');
  this.model_.set('Username', '');

  // Enable login buttons
  goog.array.forEach(goog.dom.getElementsByClass('btn-login'), function(button) {
    button.disabled = false;
  });

  /**
   * @desc google authentication dialog title
   */
  var MSG_TWO_STEPS_AUTHENTICATION_DIALOG_TITLE = goog.getMsg('2 steps authentication');

  /**
   * @desc google authentication dialog title
   */
  var MSG_OTP_TWO_STEPS_AUTHENTICATION_DIALOG_CONTENT = goog.getMsg('Enter the Google Authenticator/Authy code');


  /**
   * @desc Email confirmation dialog title when user is sigining up.
   */
  var MSG_SIGNUP_CONFIRM_EMAIL_DIALOG_TITLE = goog.getMsg('Confirm email');


  /**
   * @desc Label requesting user to enter the token sent to their email during login or signup
   */
  var MSG_EMAIL_TWO_STEPS_AUTHENTICATION_DIALOG_CONTENT = goog.getMsg('Enter the confirmation code that we sent you in an email.');

  /**
   * @desc Dialog title of the email second step authenticaiton.
   */
  var MSG_EMAIL_TWO_STEPS_AUTHENTICATION_DIALOG_TITLE = goog.getMsg('Second factor of authentication');

  /**
   * @desc The Server is busy right now, try again later
   */
  var MSG_LOGIN_BUSY = goog.getMsg('The Server is busy right now, try again later');


  /**
   * @desc Anti phishing dialog title
   */
  var MSG_ANTI_PHISHING_DIALOG_TITLE = goog.getMsg('This browser is not authorized to access your account.');


  /**
   * @desc account blocked dialog title
   */
  var MSG_ACCOUNT_BLOCKED_DIALOG_TITLE = goog.getMsg('Your account has been blocked.');

  /**
   * @desc expired or invalid authorization dialog title
   */
  var MSG_INVALID_EXPIRED_AUTHORIZATION_LINK_DIALOG_TITLE = goog.getMsg('Invalid or expired authorization link.');


  // Enable login buttons
  goog.array.forEach(goog.dom.getElementsByClass('btn-login'), function(button) {
    button.disabled = false;
  });

  var is_account_blocked = (msg['UserStatusText'] === 'MSG_LOGIN_ACCOUNT_BLOCKED');
  if (is_account_blocked) {
      this.getModel().remove('Token');
      this.showDialog(bitex.templates.AccountBlockedDialogContent(),
                      MSG_ACCOUNT_BLOCKED_DIALOG_TITLE,
                      bitex.ui.Dialog.ButtonSet.createOk());
      return;
  }


  if (msg['NeedSecondFactor']) {
    var browser_token = this.getModel().get('Token');
    var has_token_setup = goog.isDefAndNotNull(browser_token);
    var does_not_have_token_setup = !(has_token_setup);
    var is_asking_to_confirm_email_after_signup = (
        goog.object.containsKey(msg, 'UserStatusText') && msg['UserStatusText'] === 'MSG_SIGNUP_CONFIRM_EMAIL');

    var is_requesting_the_user_to_click_on_the_authorization_link = false;
    if (!is_asking_to_confirm_email_after_signup) {
      is_requesting_the_user_to_click_on_the_authorization_link = (
          does_not_have_token_setup
          && goog.object.containsKey(msg, 'SecondFactorType')
          && (msg['SecondFactorType'] === 'EMAIL' || msg['SecondFactorType'] === 'OTP+EMAIL' ) )
    }

    var is_authorization_link_expired_or_invalid = (
        has_token_setup
        && goog.object.containsKey(msg, 'SecondFactorType')
        && (msg['SecondFactorType'] === 'EMAIL' || msg['SecondFactorType'] === 'OTP+EMAIL' ) );

    if (is_authorization_link_expired_or_invalid) {
      this.getModel().remove('Token');
      this.showDialog(bitex.templates.InvalidOrExpiredAuthorizationLinkDialogContent(),
                      MSG_INVALID_EXPIRED_AUTHORIZATION_LINK_DIALOG_TITLE,
                      bitex.ui.Dialog.ButtonSet.createOk() );
      return;
    }

    if (is_requesting_the_user_to_click_on_the_authorization_link) {
      this.getModel().remove('Token');
      this.showDialog(bitex.templates.AntiPhishingDialogContent(),
                      MSG_ANTI_PHISHING_DIALOG_TITLE,
                      bitex.ui.Dialog.ButtonSet.createOk() );
      return;
    }

    var dlg_second_factor_id = goog.string.getRandomString();
    var dlg_second_factor_title = MSG_TWO_STEPS_AUTHENTICATION_DIALOG_TITLE;
    var dlg_second_factor_description = MSG_OTP_TWO_STEPS_AUTHENTICATION_DIALOG_CONTENT;
    var dlg_ask_for_trust_device = true;
    if (this.getModel().get('TrustDevice') == true) {
      dlg_ask_for_trust_device = false;
    } else {
      this.getModel().set('TrustDevice', false);
    }


    if (is_asking_to_confirm_email_after_signup ) {
      dlg_second_factor_title = MSG_SIGNUP_CONFIRM_EMAIL_DIALOG_TITLE;
      dlg_second_factor_description = MSG_EMAIL_TWO_STEPS_AUTHENTICATION_DIALOG_CONTENT;
      dlg_ask_for_trust_device = false;
      this.getModel().set('TrustDevice', true);
    }

    var dlg_content = bitex.templates.SecondFactorTokenDialogContent({
      id:dlg_second_factor_id,
      description:dlg_second_factor_description,
      askForTrust:dlg_ask_for_trust_device
    });

    var dlg_ = this.showDialog(dlg_content,
                               dlg_second_factor_title,
                               bitex.ui.Dialog.ButtonSet.createOkCancel() );
    var gauth_uniform = new uniform.Uniform();
    gauth_uniform.decorate(goog.dom.getFirstElementChild(dlg_.getContentElement()));

    var input_element = goog.dom.getElement( dlg_second_factor_id + '_token' );
    if(goog.isDefAndNotNull(input_element)) {
      input_element.focus();
    }

    var handler = this.getHandler();
    handler.listen(dlg_, goog.ui.Dialog.EventType.SELECT, function(e) {
      if (e.key == 'ok') {
        var error_list = gauth_uniform.validate();
        if (error_list.length > 0) {
          goog.array.forEach(error_list, function(error_msg) {
            this.showNotification( 'error', error_msg );
          }, this );

          e.stopPropagation();
          e.preventDefault();
        } else {
          var json_form_data = gauth_uniform.getAsJSON();
          var second_factor;
          if (is_asking_to_confirm_email_after_signup ) {
            this.getModel().set('Token', json_form_data['token']);
            this.getModel().set('TrustDevice', true);
          } else {
            second_factor = json_form_data['token'];
          }
          var trust_device = this.getModel().get('TrustDevice');
          if (dlg_ask_for_trust_device) {
            if (json_form_data['TrustedDevice'] == 'checked' || json_form_data['TrustedDevice'] == 'on') {
              trust_device = true;
            } else {
              trust_device = false;
            }
          }

          var current_request =  this.current_login_request_[msg['UserReqID']];
          var broker_id;
          var username;
          var password;

          if (goog.isDefAndNotNull(current_request)) {
            request_method = current_request[0]
            switch (request_method) {
              case 'login':
                broker_id = current_request[1];
                username = current_request[2];
                password = current_request[3];
                break;
              case 'signUp':
                broker_id = current_request[6];
                username = current_request[1];
                password = current_request[2];
                break;
            }
          } else {
            broker_id = this.getModel().get('SelectedBrokerID');
            username = this.loginView_.getUsername();
            password = this.loginView_.getPassword();
          };
          var requestId = this.conn_.login( broker_id, 
                                            username, 
                                            password, 
                                            second_factor, 
                                            this.getModel().get('Token'),
                                            trust_device,
                                            this.getModel().get('Referrer'),
                                            this.getModel().get('UriPath'));
          this.current_login_request_[requestId] = [ 'login', broker_id, username, password ]
          dlg_.dispose();
        }
      }
    });
  } else {

    /**
     * @desc Invalid Password error
     */
    var MSG_LOGIN_ERROR_INVALID_PASSWORD = goog.getMsg('Invalid password');

    /**
     * @desc Invalid Password error
     */
    var MSG_LOGIN_ERROR_INVALID_USERNAME_OR_PASSWORD = goog.getMsg('Invalid username or password');

    /**
     * @desc Invalid second step auth error
     */
    var MSG_LOGIN_ERROR_INVALID_SECOND_STEP = goog.getMsg('Invalid second step authentication code');

    /**
     * @desc Invalid second step auth error
     */
    var MSG_LOGIN_ERROR_INVALID_BROKER = goog.getMsg('Invalid Broker');

    /**
     * @desc Invalid second step auth error
     */
    var MSG_LOGIN_ERROR_USERNAME_ALREADY_TAKEN = goog.getMsg('Username or email already taken');

    /**
     * @desc OTP code already used error 
     */ 
    var MSG_LOGIN_ERROR_ALREADY_USED_SECOND_STEP = goog.getMsg('Authentication code already used.');

    var user_status_text = msg['UserStatusText'];
    switch(msg['UserStatusText']) {
      case 'MSG_LOGIN_ERROR_INVALID_PASSWORD':
        user_status_text = MSG_LOGIN_ERROR_INVALID_PASSWORD;
        break;
      case 'MSG_LOGIN_ERROR_INVALID_USERNAME_OR_PASSWORD':
        user_status_text = MSG_LOGIN_ERROR_INVALID_USERNAME_OR_PASSWORD;
        break;
      case 'MSG_LOGIN_ERROR_INVALID_SECOND_STEP':
        user_status_text = MSG_LOGIN_ERROR_INVALID_SECOND_STEP;
        break;
      case 'MSG_LOGIN_ERROR_INVALID_BROKER':
        user_status_text = MSG_LOGIN_ERROR_INVALID_BROKER;
        break;
      case 'MSG_LOGIN_ERROR_USERNAME_ALREADY_TAKEN':
        user_status_text = MSG_LOGIN_ERROR_USERNAME_ALREADY_TAKEN;
        break;
      case 'MSG_BUSY_REJECTION':
        user_status_text = MSG_LOGIN_BUSY;
        break;
      case 'MSG_LOGIN_ERROR_ALREADY_USED_SECOND_STEP':
        user_status_text = MSG_LOGIN_ERROR_ALREADY_USED_SECOND_STEP;
        break;
    }

    this.showDialog( user_status_text );
  }
};

/**
 * @param {goog.events.Event} e
 * @private
 */
bitex.app.BlinkTrade.prototype.onUserSignupButton_ = function(e) {

  this.model_.set('Password',         e.target.getPassword() );

  var requestId = this.conn_.signUp( e.target.getUsername(),
                                     e.target.getPassword(),
                                     e.target.getEmail(),
                                     e.target.getState(),
                                     e.target.getCountry(),
                                     e.target.getBroker(),
                                     undefined, // token
                                     this.getModel().get('Referrer'),
                                     this.getModel().get('UriPath'));


  this.current_login_request_[requestId] = [ 'signUp',
                                             e.target.getUsername(),
                                             e.target.getPassword(),
                                             e.target.getEmail(),
                                             e.target.getState(),
                                             e.target.getCountry(),
                                             e.target.getBroker()
                                           ];

};

/**
 * return {bitex.model.Model}
 */
bitex.app.BlinkTrade.prototype.getModel = function() {
  return this.model_;
};

/**
 * return Heart Beat Interval
 */
bitex.app.BlinkTrade.prototype.getHeartBtInt = function() {
  return 30000;
};


bitex.app.BlinkTrade.prototype.onBeforeSetView_ = function(e){
  var view_id = e.view_id;
  var view = e.view;

  if (view_id == 'admin') {
    this.getModel().set('SelectedBrokerID', 8999999 );
  }

  if (!view.isInDocument()) {
    view.decorate(goog.dom.getElement(view_id));
  }

  if (! this.conn_.isLogged()) {
    switch(view_id) {
      case 'start':
      case 'admin':
      case 'signin':
      case 'signup':
      case 'faq':
      case 'themes':
      case 'forgot_password':
      case 'set_new_password':
      case 'broker_application':
        break;
      case 'market':
      case 'ranking':
        if ( !this.conn_.isConnected() ) {
          this.router_.setView('start');
        }
        break;

      default:
        // redirect non-logged users to the signin page
        this.router_.setView('start');
        return false;
    }
  }

  // remove any active view classes from document body
  var classes = goog.dom.classes.get(document.body );
  var classes_to_remove = [];
  goog.array.forEach( classes, function( cls ) {
    if (goog.string.startsWith(cls, 'active-view-' ) ){
      classes_to_remove.push(cls);
    }
  });
  goog.array.forEach( classes_to_remove, function( cls ) {
    goog.dom.classes.remove( document.body, cls );
  });

  document.body.scrollTop = 0;

  // set the current view
  goog.dom.classes.add( document.body, 'active-view-' + view_id );
  document.body.setAttribute('data-active-view', view_id);

  goog.array.forEach( goog.dom.getElementsByClass('bitex-view'), function(view_el) {
    var element_view_name = view_el.getAttribute('data-view-name');
    if (!goog.isDefAndNotNull(element_view_name)){
      element_view_name = view_el.id;
    }

    if (element_view_name === view_id) {
      goog.dom.classes.add( view_el, 'bitex-view-active' );

      if ( !goog.dom.classes.has(view_el, 'bitex-view-always-show') ) {
        if ( !goog.dom.classes.has(view_el, 'bitex-view-' + view_id) ) {
            goog.style.showElement ( view_el, true);
        } else {
          goog.style.showElement( view_el, false);
        }
      }
    } else {
      goog.dom.classes.remove( view_el, 'bitex-view-active' );
      if (!goog.dom.classes.has(view_el, 'bitex-view-always-show') ) {
        if ( goog.dom.classes.has(view_el, 'bitex-view-' + view_id) ) {
          goog.style.showElement ( view_el, true);
        } else {
          goog.style.showElement ( view_el, false);
        }
      }
    }
  }, this);
};

/**
 *
 * @param {string} country
 * @param {string=} opt_state
 * @return {Array.<Object>}
 */
bitex.app.BlinkTrade.prototype.getBrokersByCountry = function(country, opt_state) {
  var response = [];

  var query = country;
  if (goog.isDefAndNotNull(opt_state)) {
    query += '_' + opt_state;
  }

  var brokers = this.getModel().get('BrokerList');
  if (goog.isDefAndNotNull(brokers)) {
    goog.array.forEach(brokers, function(broker){
      var broker_accept_array = broker['AcceptCustomersFrom'][0];
      var broker_reject_array = broker['AcceptCustomersFrom'][1];

      var is_explicit_accepted = goog.array.findIndex( broker_accept_array, function(accept_data){
        return (accept_data === query || accept_data === country);
      }) >= 0;

      var is_accepted = is_explicit_accepted ||  (broker_accept_array[0] === "*" );

      var is_explicit_rejected = goog.array.findIndex( broker_reject_array, function(accept_data){
        return (accept_data === query || accept_data === country);
      }) >= 0;

      var is_rejected = is_explicit_rejected ||  (broker_reject_array[0] === "*" );

      if (is_explicit_accepted) {
        response.push(broker);
      } else if (is_accepted && !is_rejected ) {
        response.push(broker);
      }
    });
  }


  return response;
};

/**
 * @param {string} currency_code
 * @param {boolean=} opt_human
 * @return {goog.i18n.NumberFormat}
 */
bitex.app.BlinkTrade.prototype.getCurrencyFormatter  =   function(currency_code, opt_human) {
  if (goog.string.caseInsensitiveEndsWith(currency_code, '_Locked') ) {
    currency_code = currency_code.substr(0, currency_code.length-7);
  } else if (goog.string.caseInsensitiveEndsWith(currency_code, '_Position') ) {
    currency_code = currency_code.substr(0, currency_code.length-9);
  }

  /**
   * @type {bitex.model.OrderBookCurrencyModel}
   */
  var currency_def = this.currency_info_[currency_code];
  var formatter;
  if (goog.isDefAndNotNull(opt_human) && opt_human === true) {
    formatter = new goog.i18n.NumberFormat( currency_def.human_format, currency_def.code );
  } else {
    formatter = new goog.i18n.NumberFormat( currency_def.format, currency_def.code );
  }

  return formatter;
};

/**
 * @param {number} amount
 * @param {string} currency_code
 * @param {boolean=} opt_human
 */
bitex.app.BlinkTrade.prototype.formatCurrency  =   function(amount, currency_code, opt_human) {
  return this.getCurrencyFormatter(currency_code, opt_human).format(amount);
};

/**
 * @param {string} currency_code
 * @return {boolean}
 */
bitex.app.BlinkTrade.prototype.isCryptoCurrency  =   function(currency_code) {
  /**
   * @type {bitex.model.OrderBookCurrencyModel}
   */
  var currency_def = this.currency_info_[currency_code];
  return currency_def.is_crypto;
};

/**
 * @param {string} currency_code
 */
bitex.app.BlinkTrade.prototype.getCurrency = function(currency_code){
  /**
   * @type {bitex.model.OrderBookCurrencyModel}
   */
  var currency_def = this.currency_info_[currency_code];
  return currency_def;
};

/**
 * @param {string} currency_code
 * @return {string}
 */
bitex.app.BlinkTrade.prototype.getCurrencySign  =   function(currency_code) {
  /**
   * @type {bitex.model.OrderBookCurrencyModel}
   */
  var currency_def = this.currency_info_[currency_code];
  return currency_def.sign;
};

/**
 * @param {string} currency_code
 * @return {string}
 */
bitex.app.BlinkTrade.prototype.getCurrencyPip =   function(currency_code) {
  /**
   * @type {bitex.model.OrderBookCurrencyModel}
   */
  var currency_def = this.currency_info_[currency_code];
  return currency_def.pip;
};

/**
 * @param {string} currency_code
 * @return {string}
 */
bitex.app.BlinkTrade.prototype.getCurrencyFormat  =   function(currency_code) {
  /**
   * @type {bitex.model.OrderBookCurrencyModel}
   */
  var currency_def = this.currency_info_[currency_code];
  return currency_def.format;
};

/**
 * @param {string} currency_code
 * @return {string}
 */
bitex.app.BlinkTrade.prototype.getCurrencyHumanFormat  =   function(currency_code) {
  /**
   * @type {bitex.model.OrderBookCurrencyModel}
   */
  var currency_def = this.currency_info_[currency_code];
  return currency_def.human_format;
};

/**
 * @param {string} currency_code
 * @return {string}
 */
bitex.app.BlinkTrade.prototype.getCurrencyDescription  =   function(currency_code) {
  /**
   * @type {bitex.model.OrderBookCurrencyModel}
   */
  var currency_def = this.currency_info_[currency_code];
  return currency_def.description;
};

/**
 * @param {string} currency_code
 * @return {number}
 */
bitex.app.BlinkTrade.prototype.getCurrencyNumberOfDecimals  =   function(currency_code) {
  /**
   * @type {bitex.model.OrderBookCurrencyModel}
   */
  var currency_def = this.currency_info_[currency_code];
  return currency_def.number_of_decimals;

};

/**
 * @param {bitex.api.BitExEvent} e
 * @private
 */
bitex.app.BlinkTrade.prototype.onSecurityList_ =   function(e) {
  var msg = e.data;

  goog.array.forEach(msg['Currencies'], function( currency) {
    this.currency_info_[ currency['Code'] ] = {
      code: currency['Code'],
      format: currency['FormatJS'],
      human_format: currency['HumanFormatJS'],
      description : currency['Description'],
      sign : currency['Sign'],
      pip : currency['Pip'],
      is_crypto : currency['IsCrypto'],
      number_of_decimals: currency['NumberOfDecimals']
    };
  }, this);

  var symbols = [];
  goog.array.forEach(msg['Instruments'], function( instrument) {
    var market = instrument['Market'];
    var symbol = instrument['Symbol'];
    var currency = instrument['Currency'];
    var crypto_currency = symbol.substr(0,3);

    this.all_markets_[symbol]  = {
      'market': market,
      'symbol': symbol,
      'description': instrument['Description']
    };

    symbols.push( market + ':' + symbol );

    this.model_.set(market + '_' + symbol + '_VWAP',0, true);
    this.model_.set(market + '_' + symbol + '_VOLUME', 0, true);
    this.model_.set(market + '_' + symbol + '_SELL_VOLUME',0, true);
    this.model_.set(market + '_' + symbol + '_BUY_VOLUME',0, true);
    this.model_.set(market + '_' + symbol + '_LOW_PX',0, true);
    this.model_.set(market + '_' + symbol + '_HIGH_PX',0, true);
    this.model_.set(market + '_' + symbol + '_BEST_BID',0, true);
    this.model_.set(market + '_' + symbol + '_BEST_ASK',0, true);
    this.model_.set(market + '_' + symbol + '_LAST_PX',0, true);

    this.model_.set('formatted_' + market + '_' + symbol + '_VWAP',this.formatCurrency(0, currency, true), true);
    this.model_.set('formatted_' + market + '_' + symbol + '_VOLUME',this.formatCurrency(0,crypto_currency, true ), true);
    this.model_.set('formatted_' + market + '_' + symbol + '_SELL_VOLUME',this.formatCurrency(0,crypto_currency, true ), true);
    this.model_.set('formatted_' + market + '_' + symbol + '_BUY_VOLUME',this.formatCurrency(0,currency, true ), true);
    this.model_.set('formatted_' + market + '_' + symbol + '_LOW_PX', this.formatCurrency(0,currency, true ), true);
    this.model_.set('formatted_' + market + '_' + symbol + '_HIGH_PX',this.formatCurrency(0/1.e8,currency, true ), true);
    this.model_.set('formatted_' + market + '_' + symbol + '_BEST_BID', this.formatCurrency(0,currency, true ), true);
    this.model_.set('formatted_' + market + '_' + symbol + '_BEST_ASK',this.formatCurrency(0,currency, true ), true);
    this.model_.set('formatted_' + market + '_' + symbol + '_LAST_PX',this.formatCurrency(0,currency, true ), true);
  }, this );

  this.model_.set('SecurityList', msg);

  this.conn_.subscribeSecurityStatus( symbols );

};

/**
 * @param {Object} broker_info
 * @return {Object}
 * @private
 */
bitex.app.BlinkTrade.prototype.adjustBrokerData_ = function(broker_info) {
  var percent_fmt = new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.PERCENT);
  percent_fmt.setMaximumFractionDigits(2);
  percent_fmt.setMinimumFractionDigits(2);

  var value_fmt = new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.DECIMAL);
  value_fmt.setMinimumFractionDigits(2);
  value_fmt.setMaximumFractionDigits(8);

  broker_info['Currencies'] = broker_info['Currencies'].split(',');
  if (broker_info['Currencies'].length === 1 && goog.string.isEmpty(broker_info['Currencies'][0])) {
    broker_info['Currencies'] = [];
  }

  goog.object.forEach(broker_info['WithdrawStructure'], function(currency_withdraw_structures, currency_code){
    goog.array.forEach(currency_withdraw_structures, function(currency_withdraw_structure, currency_withdraw_structure_index) {
      currency_withdraw_structure['formatted_fixed_fee'] =
          this.formatCurrency(currency_withdraw_structure['fixed_fee'] / 1e8 ,currency_code,true );

      currency_withdraw_structure['formatted_percent_fee'] = percent_fmt.format(currency_withdraw_structure['percent_fee']);

      goog.object.forEach( currency_withdraw_structure['limits'], function(limits, verification_level) {
        if (goog.isDefAndNotNull(limits['max'])) {
          limits['formatted_max'] = this.formatCurrency(limits['max'] / 1e8 ,currency_code,true );
          limits['formatted_max_value'] = value_fmt.format(limits['max'] / 1e8 );

        }
        if (goog.isDefAndNotNull(limits['min'])) {
          limits['formatted_min'] = this.formatCurrency(limits['min'] / 1e8,currency_code,true );
          limits['formatted_min_value'] = value_fmt.format(limits['min'] / 1e8 );
        }
      }, this );
    }, this);
  }, this );


  var allowed_markets = {};
  var broker_currencies = goog.array.clone(broker_info['Currencies']);
  goog.array.forEach( broker_info['CryptoCurrencies'], function(crypto_currency){
    broker_currencies.push(crypto_currency['CurrencyCode']);


    var market_crypto_currency = goog.object.findKey( this.all_markets_, function(market_info, symbol) {
      if (symbol.indexOf(crypto_currency['CurrencyCode']) >= 0)  {
        return true;
      }
    });

    if (goog.isDefAndNotNull(market_crypto_currency)) {
      goog.array.forEach( broker_info['Currencies'], function(currency) {
        var market_currency = goog.object.findKey( this.all_markets_, function(market_info, symbol) {
          if (symbol.indexOf(currency) >= 0)  {
            return true;
          }
        });
        if (goog.isDefAndNotNull(market_currency)) {
          allowed_markets[market_currency] = this.all_markets_[market_currency];
        }
      },this);
    }
  },this);
  broker_info['BrokerCurrencies'] = broker_currencies;
  broker_info['AllowedMarkets'] = allowed_markets;
  broker_info['FormattedTransactionFeeBuy'] = percent_fmt.format(broker_info['TransactionFeeBuy'] / 10000);
  broker_info['FormattedTransactionFeeSell'] = percent_fmt.format(broker_info['TransactionFeeSell'] / 10000);
  broker_info['FormattedTakerTransactionFeeBuy'] = percent_fmt.format(broker_info['TakerTransactionFeeBuy'] / 10000);
  broker_info['FormattedTakerTransactionFeeSell'] = percent_fmt.format(broker_info['TakerTransactionFeeSell'] / 10000);

  goog.object.forEach(allowed_markets, function(market, symbol) {
    this.currency_info_[ 'MMP_' + symbol ] = {
      code: 'MMP_' + symbol,
      format: '#,##0.00;(#,##0.00)',
      human_format: '#,##0.00;(#,##0.00)',
      description : 'Points',
      sign : 'P',
      pip : 1,
      is_crypto : false,
      number_of_decimals: 2
    };
  }, this);

  return broker_info;
};

/**
 * @param {bitex.api.BitExEvent} e
 * @private
 */
bitex.app.BlinkTrade.prototype.onBrokerListResponse_ =  function(e){
  var msg = e.data;

  var broker_list = [];
  goog.array.forEach(msg['BrokerListGrp'], function( broker_array )  {
    var broker_info = {};
    goog.array.forEach(msg['Columns'], function( column, index )  {
      broker_info[column] = broker_array[index];
    }, this);

    /**
     * @desc label for broker selection on signup form
     */
    var MSG_APPLY_TO_BE_BROKER = goog.getMsg('Apply to be a broker');

    /**
     * @desc label for broker selection on signup form
     */
    var MSG_NOTIFY_ME_WHEN_A_NEW_BROKER_ARRIVE = goog.getMsg('Notify me when a new broker arrive in my region');

    switch(broker_info['SignupLabel']) {
      case '{MSG_BROKER_APPLY}':
        broker_info['SignupLabel'] = MSG_APPLY_TO_BE_BROKER;
        break;

      case '{MSG_NOTIFY_NEW_BROKER}':
        broker_info['SignupLabel'] = MSG_NOTIFY_ME_WHEN_A_NEW_BROKER_ARRIVE;
        break;
    }

    broker_info = this.adjustBrokerData_(broker_info);
    broker_list.push(broker_info);
  }, this );


  this.model_.set('BrokerList', broker_list);
};

/**
 * @param {goog.events.Event} e
 * @protected
 */
bitex.app.BlinkTrade.prototype.onUserConnectBitEx_ = function(e){
  this.connectBitEx();
};

/**
 * @param {goog.events.Event} e
 * @protected
 */
bitex.app.BlinkTrade.prototype.onConnectionOpen_ = function(e){
  goog.dom.classes.remove( document.body, 'ws-not-connected' );
  goog.dom.classes.add( document.body, 'ws-connected' );
  goog.dom.classes.remove( document.body, 'bitex-broker' );
  goog.dom.classes.remove( document.body, 'bitex-non-broker' );

  this.conn_.testRequest();
  this.conn_.requestSecurityList('ALL');
  this.conn_.requestBrokerList();

  // auto login in case of the user reconnecting
  var username = this.getModel().get('Username');
  var password = this.getModel().get('Password');
  var broker_id = this.getModel().get('SelectedBrokerID');


  var required_level_pro_trader = this.getModel().get('RequiredLevelProTrader');
  var token = this.getModel().get('Token');
  var referrer = this.getModel().get('Referrer');
  var js_version = this.getModel().get('JSVersion');
  var uri_path = this.getModel().get('UriPath');
  var trust_device = this.getModel().get('TrustDevice');
  var has_token = this.getModel().get('HasToken');

  var default_country = this.model_.get('DefaultCountry');
  var default_state = this.model_.get('DefaultState');
  var default_symbol = this.getModel().get('DefaultSymbol');

  this.getModel().clear();

  this.getModel().set('DefaultCountry', default_country);
  this.getModel().set('DefaultBrokerID', broker_id);
  this.getModel().set('SelectedBrokerID', broker_id);
  this.getModel().set('DefaultState', default_state);
  this.getModel().set('DefaultSymbol', default_symbol);
  this.getModel().set('RequiredLevelProTrader', required_level_pro_trader);
  this.getModel().set('Referrer', referrer);
  this.getModel().set('Token', token);
  this.getModel().set('JSVersion', js_version);
  this.getModel().set('UserLogged',false);
  this.getModel().set('TrustDevice',trust_device);
  this.getModel().set('UriPath', uri_path);
  this.getModel().set('HasToken', has_token);


  if (goog.isDefAndNotNull(username) && goog.isDefAndNotNull(password)) {
    if (!goog.string.isEmpty(username) && !goog.string.isEmpty(password) ) {
      if (password.length >= 8 ) {
        var requestId = this.conn_.login(broker_id,
                                         username, 
                                         password, 
                                         undefined, 
                                         this.getModel().get('TrustDevice'),
                                         this.getModel().get('Referrer'),
                                         this.getModel().get('UriPath'));
        this.current_login_request_[requestId] = [ 'login',
                                                   broker_id,
                                                   username,
                                                   password ];

      }
    }
  }
};

/**
 * @param {goog.events.Event} e
 * @private
 */
bitex.app.BlinkTrade.prototype.onTestRequestTimer_ = function(e){
  if (goog.isDefAndNotNull(this.conn_) && this.conn_.isConnected()) {
    this.getBitexConnection().testRequest();
  }

  this.test_request_deadline_timer_ = new goog.Timer(this.maximum_allowed_delay_in_ms_);
  this.test_request_deadline_timer_.start();

  this.getHandler().listenOnce(this.test_request_deadline_timer_, goog.Timer.TICK, function(e){
    //location.reload();
  });
};


/**
 * @param {goog.events.Event} e
 * @private
 */
bitex.app.BlinkTrade.prototype.onTestRequest_ = function(e) {
  var msg = e.data;
  this.conn_.sendHeartBeat(msg['TestReqID']);
};


/**
 * @param {goog.events.Event} e
 * @private
 */
bitex.app.BlinkTrade.prototype.onHearbeat_ = function(e) {
  var msg = e.data;
  if (goog.isDefAndNotNull(this.test_request_deadline_timer_)) {
    this.test_request_deadline_timer_.stop();
    this.test_request_deadline_timer_ = null;
  }

  if (goog.isDefAndNotNull(msg['SendTime'])) {
    var sent = new Date(msg['SendTime']);
    var just_now = new Date(Date.now());

    this.getModel().set('latency', just_now - sent );
  }
};


/**
 * @param {goog.events.Event} e
 * @protected
 */
bitex.app.BlinkTrade.prototype.onConnectionClose_ = function(e){
  goog.dom.classes.add( document.body, 'ws-not-connected','bitex-not-logged'  );
  goog.dom.classes.remove( document.body, 'ws-connected' , 'bitex-logged' );
  goog.dom.classes.remove( document.body, 'bitex-broker' );
  goog.dom.classes.remove( document.body, 'bitex-non-broker' );

  this.router_.setView('start');
};

/**
 * @param {goog.events.Event} e
 * @protected
 */
bitex.app.BlinkTrade.prototype.onConnectionError_ = function(e){
  goog.dom.classes.add( document.body, 'ws-not-connected','bitex-not-logged'  );
  goog.dom.classes.remove( document.body, 'ws-connected' , 'bitex-logged' );
  goog.dom.classes.remove( document.body, 'bitex-broker' );
  goog.dom.classes.remove( document.body, 'bitex-non-broker' );

  /**
   * @desc notification title on Connection close
   */
  var MSG_CONNECTION_ERROR_NOTIFICATION_ERROR_TITLE = goog.getMsg('Error');


  /**
   * @desc notification content on Connection close
   */
  var MSG_CONNECTION_ERROR_NOTIFICATION_ERROR_CONTENT = goog.getMsg('detected with the connection.');

  this.showNotification('error',
                        MSG_CONNECTION_ERROR_NOTIFICATION_ERROR_TITLE,
                        MSG_CONNECTION_ERROR_NOTIFICATION_ERROR_CONTENT);

  this.router_.setView('start');
};

/**
 * @param {bitex.api.BitExEvent} e
 * @protected
 */
bitex.app.BlinkTrade.prototype.onConnectionErrorMessage_ = function(e){
  var msg = e.data;

  /**
   * @desc notification content on Connection close
   */
  var MSG_CONNECTION_ERROR_MESSAGE_NOTIFICATION_TITLE = goog.getMsg('Message from server:');

  this.showNotification('error',
                        MSG_CONNECTION_ERROR_MESSAGE_NOTIFICATION_TITLE,
                        msg['Description'] + ' - ' + msg['Detail'],
                        this.error_message_alert_timeout_);
};



/**
 * @param {string} content
 * @param {string} opt_title
 * @param {goog.ui.Dialog.ButtonSet?} opt_button_set The button set to use.
 * @return {bitex.ui.Dialog}
 */
bitex.app.BlinkTrade.prototype.showDialog = function(content, opt_title, opt_button_set) {
  /**
   * @desc Connection error dialog title
   */
  var MSG_CONNECTION_ERROR_DEFAULT_DIALOG_TITLE = goog.getMsg('Error');
  var title = opt_title || MSG_CONNECTION_ERROR_DEFAULT_DIALOG_TITLE ;

  var buttonSet = opt_button_set || bitex.ui.Dialog.ButtonSet.createOk();

  if (goog.isDefAndNotNull(this.dialog_)) {
    this.dialog_.dispose();
    this.dialog_ = null;
  }

  this.dialog_ = new bitex.ui.Dialog();
  this.dialog_.setTitle(title);
  this.dialog_.setContent(content);
  this.dialog_.setButtonSet( buttonSet);
  this.dialog_.setVisible(true);

  return this.dialog_;
};

/**
 * @param {string} type
 * @param {string} title
 * @param {string} content
 * @param {number} opt_display_time.  Defaults to 3000 milliseconds
 * @param {boolean} opt_system
 */
bitex.app.BlinkTrade.prototype.showNotification = function(type , title, content,  opt_display_time, opt_system) {
  if ( opt_system === true && "Notification" in window && Notification.permission === "granted" ) {
    if (type == 'error') {
      new Notification('ERROR: ' + title + ' ' + content);
    } else {
      new Notification(title + ' ' + content);
    }
    return;
  }

  var display_time = 3000;
  if (type == 'error') {
    display_time *= 3;
  }
  if ( goog.isNumber(opt_display_time) ) {
    display_time = opt_display_time;
  }

  var alert_content = goog.dom.createDom( 'span', undefined,
    [goog.dom.createDom( 'strong', undefined, title), ' ', content ] );

  var notification = new bootstrap.Alert(type, alert_content, true );

  notification.render( goog.dom.getElement('id_notifications') );

  if (display_time > 0) {
    var handler = this.getHandler();

    goog.Timer.callOnce(function(e){
      var anim = new goog.fx.dom.FadeOutAndHide(notification.getElement(), 200);
      handler.listenOnce(anim, goog.fx.Transition.EventType.END, function(e) {
        notification.dispose();
        anim.dispose();
      });
      anim.play();
    }, display_time, this);
  }
};

/**
 * @param {string} algo_instance_id
 */
bitex.app.BlinkTrade.prototype.registerAlgorithmInstance = function(algo_instance_id) {
  var handler = this.getHandler();

  /**
   * @desc starting algorithm notification message
   */
  var MSG_STARTING_ALGORITHM_NOTIFICATION = goog.getMsg('starting algorithm ....');
  this.showNotification('info', MSG_STARTING_ALGORITHM_NOTIFICATION);


  handler.listen(this.getModel(), bitex.model.Model.EventType.SET + algo_instance_id + '_params' , this.onAlgoParams_);
  handler.listen(this.getModel(), bitex.model.Model.EventType.SET + algo_instance_id + '_status',  this.onAlgoStatusChange_);

  var params          = this.getModel().get( algo_instance_id + '_params');
  var algo            = this.getModel().get( algo_instance_id + '_algo');
  var symbol          = this.getModel().get( algo_instance_id + '_symbol');
  var tickers         = this.getModel().get( algo_instance_id + '_tickers');
  var algo_definition = this.getModel().get( algo_instance_id + '_definition');

  var open_orders_index = this.getModel().get('OpenOrdersIndex');
  var open_orders = {};
  if (goog.isDefAndNotNull(open_orders_index)) {
    goog.array.forEach(open_orders_index, function(order_id){
      open_orders[order_id] = this.getModel().get('order_' + order_id);
    }, this);
  }

  var deposited_balance_broker = this.getModel().get('Balance')[this.getModel().get('SelectedBrokerID')][this.getModel().get('UserID')];
  var locked_balance_broker = this.getModel().get('LockedBalance')[this.getModel().get('SelectedBrokerID')][this.getModel().get('UserID')];

  var balance_broker = {};
  goog.object.forEach(deposited_balance_broker, function( balance, currency ) {
    balance_broker[currency] = balance;
  }, this);
  goog.object.forEach(locked_balance_broker, function( balance, currency ) {
    balance_broker[currency + '_locked' ] = balance;
  }, this);

  /**
   * @desc dialog shown to the user requesting his permissions to run the selected algorithm trading
   */
  var MSG_ALGO_REQUEST_PERMISSION = goog.getMsg('Authorize algorithm');

  var algo_permissions = algo_definition['permissions'];

  var dlg = this.showDialog(bitex.templates.AlgoPermissionsDialogContent({ permissions: algo_permissions} ),
                             MSG_ALGO_REQUEST_PERMISSION,
                             bitex.ui.Dialog.ButtonSet.createYesNo());

  handler.listen(dlg, goog.ui.Dialog.EventType.SELECT, function(e) {
    if (e.key == 'yes') {

      var algo_sandbox = [
        'var context = {\n',
        '  "algo_instance_id": "' + algo_instance_id + '",\n',
        '  "wss_url": "' + this.wss_url_ + '",\n',
        '  "symbol": "' + symbol.symbol +  '",\n',
        '  "tickers": ' + goog.json.serialize(tickers) + ',\n',
        '  "open_orders": '+ goog.json.serialize(open_orders) +',\n',
        '  "balance": ' + goog.json.serialize(balance_broker) + ',\n',
        '  "algo_definition": ' + goog.json.serialize(algo_definition) + '\n',
        '};\n',
        '\n',
        '\n',
        algo,
        '\n',
        '\n',
        'var f,l=this;function m(a){return void 0!==a}\n',
        'function p(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";\n',
        'else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function q(a){return"array"==p(a)}function r(a){var b=p(a);return"array"==b||"object"==b&&"number"==typeof a.length}function t(a){return"string"==typeof a}function u(a){return"function"==p(a)}function v(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}var w="closure_uid_"+(1E9*Math.random()>>>0),aa=0;\n',
        'function x(a){var b=p(a);if("object"==b||"array"==b){if(a.clone)return a.clone();var b="array"==b?[]:{},c;for(c in a)b[c]=x(a[c]);return b}return a}function ba(a,b,c){return a.call.apply(a.bind,arguments)}function ca(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}\n',
        'function y(a,b,c){y=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ba:ca;return y.apply(null,arguments)}function z(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}var da=Date.now||function(){return+new Date},A=null;\n',
        'function B(a,b){var c=a.split("."),d=l;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)!c.length&&m(b)?d[e]=b:d=d[e]?d[e]:d[e]={}}function C(a,b){D.prototype[a]=b};var E=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(t(a))return t(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},ea=Array.prototype.lastIndexOf?function(a,b,c){return Array.prototype.lastIndexOf.call(a,b,null==c?a.length-1:c)}:function(a,b,c){c=null==c?a.length-1:c;0>c&&(c=Math.max(0,a.length+c));if(t(a))return t(b)&&1==b.length?a.lastIndexOf(b,c):-1;for(;0<=\n',
        'c;c--)if(c in a&&a[c]===b)return c;return-1},F=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=t(a)?a.split(""):a,g=0;g<d;g++)g in e&&b.call(c,e[g],g,a)};function G(a,b,c){for(var d=t(a)?a.split(""):a,e=a.length-1;0<=e;--e)e in d&&b.call(c,d[e],e,a)}\n',
        'var fa=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],g=0,h=t(a)?a.split(""):a,k=0;k<d;k++)if(k in h){var n=h[k];b.call(c,n,k,a)&&(e[g++]=n)}return e},ga=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),g=t(a)?a.split(""):a,h=0;h<d;h++)h in g&&(e[h]=b.call(c,g[h],h,a));return e},ha=Array.prototype.reduce?function(a,b,c,d){d&&(b=y(b,d));return Array.prototype.reduce.call(a,\n',
        'b,c)}:function(a,b,c,d){var e=c;F(a,function(c,h){e=b.call(d,e,c,h,a)});return e},ia=Array.prototype.reduceRight?function(a,b,c,d){d&&(b=y(b,d));return Array.prototype.reduceRight.call(a,b,c)}:function(a,b,c,d){var e=c;G(a,function(c,h){e=b.call(d,e,c,h,a)});return e},ja=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=t(a)?a.split(""):a,g=0;g<d;g++)if(g in e&&b.call(c,e[g],g,a))return!0;return!1},ka=Array.prototype.every?function(a,\n',
        'b,c){return Array.prototype.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=t(a)?a.split(""):a,g=0;g<d;g++)if(g in e&&!b.call(c,e[g],g,a))return!1;return!0};function H(a,b,c){for(var d=a.length,e=t(a)?a.split(""):a,g=0;g<d;g++)if(g in e&&b.call(c,e[g],g,a))return g;return-1}function I(a,b,c){for(var d=t(a)?a.split(""):a,e=a.length-1;0<=e;e--)if(e in d&&b.call(c,d[e],e,a))return e;return-1}function J(a,b){return 0<=E(a,b)}function L(a,b,c){M(a,c,0,b)}\n',
        'function N(a,b){return 1==Array.prototype.splice.call(a,b,1).length}function O(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}function M(a,b,c,d){return Array.prototype.splice.apply(a,P(arguments,1))}function P(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}function Q(a,b,c){return R(a,c||S,!1,b)}\n',
        'function R(a,b,c,d,e){for(var g=0,h=a.length,k;g<h;){var n=g+h>>1,K;K=c?b.call(e,a[n],n,a):b(d,a[n]);0<K?g=n+1:(h=n,k=!K)}return k?g:~g}function T(a,b){a.sort(b||S)}function la(a,b,c){var d=c||S;T(a,function(a,c){return d(b(a),b(c))})}function S(a,b){return a>b?1:a<b?-1:0}function U(a,b){return a===b}\n',
        'function V(a){for(var b=[],c=0;c<arguments.length;c++){var d=arguments[c];if(q(d))for(var e=0;e<d.length;e+=8192)for(var g=V.apply(null,P(d,e,e+8192)),h=0;h<g.length;h++)b.push(g[h]);else b.push(d)}return b};function W(a,b,c){for(var d in a)b.call(c,a[d],d,a)}function ma(a,b){for(var c in a)if(a[c]==b)return!0;return!1}function X(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d}function Y(a,b){var c;(c=b in a)&&delete a[b];return c}function na(a){var b=p(a);if("object"==b||"array"==b){if(u(a.clone))return a.clone();var b="array"==b?[]:{},c;for(c in a)b[c]=na(a[c]);return b}return a}var oa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");\n',
        'function pa(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var g=0;g<oa.length;g++)c=oa[g],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}function qa(a){var b=arguments.length;if(1==b&&q(arguments[0]))return qa.apply(null,arguments[0]);if(b%2)throw Error("Uneven number of arguments");for(var c={},d=0;d<b;d+=2)c[arguments[d]]=arguments[d+1];return c}\n',
        'function ra(a){var b=arguments.length;if(1==b&&q(arguments[0]))return ra.apply(null,arguments[0]);for(var c={},d=0;d<b;d++)c[arguments[d]]=!0;return c};function D(a,b,c,d,e,g,h,k){this.P=b;this.a=a;this.j=c;this.h=d;this.m=null;this.f=this.s=this.o=!1;this.v=[];this.c={};this.u=[c];null!=k&&r(k)&&(this.u=k);this.g=g;this.i=new WebSocket(this.P);this.b=h(this,c);this.i.onopen=y(this.L,this);this.i.onmessage=y(this.K,this);this.i.onerror=y(this.J,this)}f=D.prototype;f.M=function(a,b,c){c=c||"algo_"+parseInt(1E7*Math.random(),10);postMessage({rep:"new_order_limited",instance:this.a,qty:a,side:"1",price:b,client_order_id:c});return c};\n',
        'f.N=function(a,b,c){c=c||"algo_"+parseInt(1E7*Math.random(),10);postMessage({rep:"new_order_limited",instance:this.a,qty:a,side:"2",price:b,client_order_id:c});return c};f.A=function(a,b){if(null!=a||null!=b)if(null!=a&&null!=b)this.stop("Invalid paramaters. You must passa either opt_clientOrderId or opt_orderId");else{if(null!=a)Y(this.h,a);else if(null!=b){var c=X(this.h,function(a){return a.OrderID==b});null!=c&&Y(this.h,c)}postMessage({rep:"cancel_order",instance:this.a,client_order_id:a,order_id:b})}else this.stop("Invalid paramaters. Missing opt_clientOrderId or opt_orderId")};\n',
        'f.w=function(){postMessage({rep:"cancel_order",instance:this.a})};f.G=function(){return this.c[this.j]};f.B=function(a,b){return"deposit"==b?this.g[a]:"available"==b?null!=this.g[a+"_locked"]?this.g[a]-this.g[a+"_locked"]:null!=this.g[a]?this.g[a]:0:null!=b?this.g[a+"_"+b]:this.g[a]};f.I=function(){return this.v};f.H=function(){return this.m};f.F=function(){return this.h};f.D=function(){return this.j};f.C=function(){return this.a};\n',
        'f.showNotification=function(a,b,c){postMessage({rep:"notification",instance:this.a,type:c|NaN,title:a,description:b})};f.stop=function(a){try{this.f&&(this.b.stop(),this.f=!1)}catch(b){}null==a?postMessage({rep:"stop",instance:this.a}):postMessage({rep:"stop",instance:this.a,error:a})};\n',
        'f.L=function(){postMessage({rep:"create",instance:this.a,status:"ws_open"});this.i.send(JSON.stringify({MsgType:"V",MDReqID:parseInt(1E7*Math.random(),10),SubscriptionRequestType:"1",MarketDepth:0,MDUpdateType:"1",MDEntryTypes:["0","1","2"],Instruments:[this.j]}));this.i.send(JSON.stringify({MsgType:"e",SecurityStatusReqID:parseInt(1E7*Math.random(),10),SubscriptionRequestType:"1",Instruments:this.u}));setTimeout(y(this.O,this),3E4)};\n',
        'f.O=function(){this.i.send(JSON.stringify({MsgType:"1",TestReqID:parseInt(1E7*Math.random(),10),SendTime:(new Date).getTime()}))};function sa(a){var b=Z;if(!b.f){try{b.m=a,b.b.start(a),b.f=!0}catch(c){}postMessage({rep:"start",instance:b.a})}}function ta(a,b){try{a.f&&(a.b.stop(),a.f=!1)}catch(c){}null==b?postMessage({rep:"terminate",instance:a.a}):postMessage({rep:"terminate",instance:a.a,error:b})}\n',
        'function ua(a){var b=Z;pa(b.g,a);try{W(a,function(a,b){if("locked"==b.substring(4))this.b.onBalanceUpdate(b.substring(0,3),a,AlgorithmTradingInterface.BalanceType.LOCKED);else this.b.onBalanceUpdate(b,a,AlgorithmTradingInterface.BalanceType.DEPOSIT)},b)}catch(c){}postMessage({rep:"balance",instance:b.a})}function va(a){var b=Z;b.m=a;try{b.b.onUpdateParams(a)}catch(c){}postMessage({rep:"params",instance:b.a})}\n',
        'function wa(a){var b=Z;"2"==a.OrdStatus||"4"==a.OrdStatus?Y(b.h,a.ClOrdID):("A"!=a.OrdStatus&&"0"==a.OrdStatus&&Y(b.h,a.ClOrdID),b.h[a.ClOrdID]=a);try{b.b.onExecutionReport(a)}catch(c){}postMessage({rep:"execution_report",instance:b.a})}f.J=function(a){ta(this,a.data)};\n',
        'function xa(a,b){var c=b.Symbol,d=b.MDEntryType,e=b.MDEntryPositionNo-1,g=b.MDEntryPx,h=b.MDEntrySize;null==a.c[c]&&(a.c[c]={bids:[],asks:[]});"0"==d?L(a.c[c].bids,[g,h],e):"1"==d&&L(a.c[c].asks,[g,h],e);if(a.f)try{a.b.onOrderBookNewOrder(b)}catch(k){}}\n',
        'function ya(a,b){var c=new Date,d=b.MDEntryDate.split("-"),e=b.MDEntryTime.split(":");c.setUTCFullYear(d[0]);c.setUTCMonth(d[1]);c.setUTCDate(d[2]);c.setUTCHours(e[0]);c.setUTCMinutes(e[1]);c.setUTCSeconds(e[2]);b.Timestamp=c;a.v.push(b);if(a.f)try{a.b.onTrade(b)}catch(g){}}\n',
        'f.K=function(a){a=JSON.parse(a.data);var b=a.MsgType;delete a.MsgType;switch(b){case "f":if(this.f)try{this.b.onTicker(a)}catch(n){}this.s||postMessage({rep:"create",instance:this.a,status:"received_security_status"});this.s=!0;break;case "W":for(var c in a.MDFullGrp){var d=a.MDFullGrp[c];d.MDReqID=a.MDReqID;switch(d.MDEntryType){case "0":case "1":d.Symbol=a.Symbol;xa(this,d);break;case "2":ya(this,d)}}this.o||postMessage({rep:"create",instance:this.a,status:"received_full_refresh"});this.o=!0;break;\n',
        'case "X":c=!1;for(d in a.MDIncGrp)switch(b=a.MDIncGrp[d],b.MDReqID=a.MDReqID,b.MDEntryType){case "0":case "1":c=!0;switch(b.MDUpdateAction){case "0":xa(this,b);break;case "1":var e=b.Symbol,g=b.MDEntryType,h=b.MDEntryPositionNo-1,k=b.MDEntrySize;"0"==g?this.c[e].bids[h]=[this.c[e].bids[h][0],k]:"1"==g&&(this.c[e].asks[h]=[this.c[e].asks[h][0],k]);if(this.f)try{this.b.onOrderBookUpdateOrder(b)}catch(n){}break;case "2":e=b.Symbol;g=b.MDEntryPositionNo-1;h=b.MDEntryType;"0"==h?this.c[e].bids.splice(g,\n',
        '1):"1"==h&&this.c[e].asks.splice(g,1);if(this.f)try{this.b.onOrderBookDeleteOrder(b)}catch(n){}break;case "3":if(e=b.Symbol,g=b.MDEntryPositionNo,h=b.MDEntryType,"0"==h?this.c[e].bids.splice(0,g):"1"==h&&this.c[e].asks.splice(0,g),this.f)try{this.b.onOrderBookDeleteOrdersThru(b)}catch(n){}}break;case "2":ya(this,b)}try{if(this.f&&c)this.b.onOrderBookChange(this.c[this.j])}catch(n){}}};var Z;\n',
        'addEventListener("message",function(a){try{var b=a.data;switch(b.req){case "create":var c=eval(context.algo_definition.creator);Z=new D(context.algo_instance_id,context.wss_url,context.symbol,context.open_orders,0,context.balance,c,context.tickers);break;case "start":sa(b.params);break;case "params":va(b.params);break;case "execution_report":wa(b.execution_report);break;case "stop":Z.stop();self.close();break;case "balance":ua(b.balances)}}catch(d){null!=Z&&ta(Z,d.message),self.close()}},!1);\n',
        'B("goog.bind",y);B("goog.isDefAndNotNull",function(a){return null!=a});B("goog.typeOf",p);B("goog.isDef",m);B("goog.isNull",function(a){return null===a});B("goog.isArray",q);B("goog.isArrayLike",r);B("goog.isDateLike",function(a){return v(a)&&"function"==typeof a.getFullYear});B("goog.isString",t);B("goog.isBoolean",function(a){return"boolean"==typeof a});B("goog.isNumber",function(a){return"number"==typeof a});B("goog.isFunction",u);B("goog.isObject",v);B("goog.cloneObject",x);B("goog.partial",z);\n',
        'B("goog.mixin",function(a,b){for(var c in b)a[c]=b[c]});B("goog.now",da);\n',
        'B("goog.globalEval",function(a){if(l.execScript)l.execScript(a,"JavaScript");else if(l.eval){if(null==A)if(l.eval("var _evalTest_ = 1;"),"undefined"!=typeof l._evalTest_){try{delete l._evalTest_}catch(d){}A=!0}else A=!1;if(A)l.eval(a);else{var b=l.document,c=b.createElement("SCRIPT");c.type="text/javascript";c.defer=!1;c.appendChild(b.createTextNode(a));b.body.appendChild(c);b.body.removeChild(c)}}else throw Error("goog.globalEval not available");});\n',
        'B("goog.inherits",function(a,b){function c(){}c.prototype=b.prototype;a.l=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.R=function(a,c,g){for(var h=Array(arguments.length-2),k=2;k<arguments.length;k++)h[k-2]=arguments[k];return b.prototype[c].apply(a,h)}});\n',
        'B("goog.base",function(a,b,c){var d=arguments.callee.caller;if(!d)throw Error("arguments.caller not defined.  goog.base() cannot be used with strict mode code. See http://www.ecma-international.org/ecma-262/5.1/#sec-C");if(d.l){for(var e=Array(arguments.length-1),g=1;g<arguments.length;g++)e[g-1]=arguments[g];return d.l.constructor.apply(a,e)}e=Array(arguments.length-2);for(g=2;g<arguments.length;g++)e[g-2]=arguments[g];for(var g=!1,h=a.constructor;h;h=h.l&&h.l.constructor)if(h.prototype[b]===d)g=\n',
        '!0;else if(g)return h.prototype[b].apply(a,e);if(a[b]===d)return a.constructor.prototype[b].apply(a,e);throw Error("goog.base called from a method of one name to a method of a different name");});B("goog.array.splice",M);B("goog.array.insertAt",L);B("goog.array.indexOf",E);B("goog.array.lastIndexOf",ea);B("goog.array.forEach",F);B("goog.array.forEachRight",G);B("goog.array.filter",fa);B("goog.array.map",ga);B("goog.array.reduce",ha);B("goog.array.reduceRight",ia);B("goog.array.some",ja);\n',
        'B("goog.array.every",ka);B("goog.array.count",function(a,b,c){var d=0;F(a,function(a,g,h){b.call(c,a,g,h)&&++d},c);return d});B("goog.array.findIndex",H);B("goog.array.findRight",function(a,b,c){b=I(a,b,c);return 0>b?null:t(a)?a.charAt(b):a[b]});B("goog.array.findIndexRight",I);B("goog.array.contains",J);B("goog.array.isEmpty",function(a){return 0==a.length});B("goog.array.clear",function(a){if(!q(a))for(var b=a.length-1;0<=b;b--)delete a[b];a.length=0});\n',
        'B("goog.array.insert",function(a,b){J(a,b)||a.push(b)});B("goog.array.insertArrayAt",function(a,b,c){z(M,a,c,0).apply(null,b)});B("goog.array.insertBefore",function(a,b,c){var d;2==arguments.length||0>(d=E(a,c))?a.push(b):L(a,b,d)});B("goog.array.remove",function(a,b){var c=E(a,b),d;(d=0<=c)&&N(a,c);return d});B("goog.array.removeAt",N);B("goog.array.removeIf",function(a,b,c){b=H(a,b,c);return 0<=b?(N(a,b),!0):!1});\n',
        'B("goog.array.concat",function(a){return Array.prototype.concat.apply(Array.prototype,arguments)});B("goog.array.toArray",O);B("goog.array.clone",O);B("goog.array.extend",function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(r(d)){var e=a.length||0,g=d.length||0;a.length=e+g;for(var h=0;h<g;h++)a[e+h]=d[h]}else a.push(d)}});B("goog.array.slice",P);\n',
        'B("goog.array.removeDuplicates",function(a,b,c){function d(a){return v(a)?"o"+(a[w]||(a[w]=++aa)):(typeof a).charAt(0)+a}b=b||a;c=c||d;for(var e={},g=0,h=0;h<a.length;){var k=a[h++],n=c(k);Object.prototype.hasOwnProperty.call(e,n)||(e[n]=!0,b[g++]=k)}b.length=g});B("goog.array.binarySearch",Q);B("goog.array.binarySelect",function(a,b,c){return R(a,b,!0,void 0,c)});B("goog.array.sort",T);\n',
        'B("goog.array.stableSort",function(a,b){for(var c=0;c<a.length;c++)a[c]={index:c,value:a[c]};var d=b||S;T(a,function(a,b){return d(a.value,b.value)||a.index-b.index});for(c=0;c<a.length;c++)a[c]=a[c].value});B("goog.array.sortObjectsByKey",function(a,b,c){la(a,function(a){return a[b]},c)});B("goog.array.isSorted",function(a,b,c){b=b||S;for(var d=1;d<a.length;d++){var e=b(a[d-1],a[d]);if(0<e||0==e&&c)return!1}return!0});\n',
        'B("goog.array.equals",function(a,b,c){if(!r(a)||!r(b)||a.length!=b.length)return!1;var d=a.length;c=c||U;for(var e=0;e<d;e++)if(!c(a[e],b[e]))return!1;return!0});B("goog.array.compare3",function(a,b,c){c=c||S;for(var d=Math.min(a.length,b.length),e=0;e<d;e++){var g=c(a[e],b[e]);if(0!=g)return g}return S(a.length,b.length)});B("goog.array.defaultCompare",S);B("goog.array.defaultCompareEquality",U);B("goog.array.binaryInsert",function(a,b,c){c=Q(a,b,c);return 0>c?(L(a,b,-(c+1)),!0):!1});\n',
        'B("goog.array.binaryRemove",function(a,b,c){b=Q(a,b,c);return 0<=b?N(a,b):!1});B("goog.array.bucket",function(a,b,c){for(var d={},e=0;e<a.length;e++){var g=a[e],h=b.call(c,g,e,a);m(h)&&(d[h]||(d[h]=[])).push(g)}return d});B("goog.array.toObject",function(a,b,c){var d={};F(a,function(e,g){d[b.call(c,e,g,a)]=e});return d});B("goog.array.range",function(a,b,c){var d=[],e=0,g=a;c=c||1;void 0!==b&&(e=a,g=b);if(0>c*(g-e))return[];if(0<c)for(a=e;a<g;a+=c)d.push(a);else for(a=e;a>g;a+=c)d.push(a);return d});\n',
        'B("goog.array.repeat",function(a,b){for(var c=[],d=0;d<b;d++)c[d]=a;return c});B("goog.array.flatten",V);B("goog.array.rotate",function(a,b){a.length&&(b%=a.length,0<b?Array.prototype.unshift.apply(a,a.splice(-b,b)):0>b&&Array.prototype.push.apply(a,a.splice(0,-b)));return a});\n',
        'B("goog.array.zip",function(a){if(!arguments.length)return[];for(var b=[],c=arguments[0].length,d=1;d<arguments.length;d++)arguments[d].length<c&&(c=arguments[d].length);for(d=0;d<c;d++){for(var e=[],g=0;g<arguments.length;g++)e.push(arguments[g][d]);b.push(e)}return b});B("goog.array.shuffle",function(a,b){for(var c=b||Math.random,d=a.length-1;0<d;d--){var e=Math.floor(c()*(d+1)),g=a[d];a[d]=a[e];a[e]=g}});B("goog.object.forEach",W);B("goog.object.extend",pa);\n',
        'B("goog.object.filter",function(a,b,c){var d={},e;for(e in a)b.call(c,a[e],e,a)&&(d[e]=a[e]);return d});B("goog.object.map",function(a,b,c){var d={},e;for(e in a)d[e]=b.call(c,a[e],e,a);return d});B("goog.object.some",function(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return!0;return!1});B("goog.object.every",function(a,b,c){for(var d in a)if(!b.call(c,a[d],d,a))return!1;return!0});B("goog.object.getCount",function(a){var b=0,c;for(c in a)b++;return b});B("goog.object.getAnyKey",function(a){for(var b in a)return b});\n',
        'B("goog.object.getAnyValue",function(a){for(var b in a)return a[b]});B("goog.object.contains",function(a,b){return ma(a,b)});B("goog.object.getValues",function(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b});B("goog.object.getKeys",function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b});B("goog.object.getValueByKeys",function(a,b){for(var c=r(b),d=c?b:arguments,c=c?0:1;c<d.length&&(a=a[d[c]],m(a));c++);return a});B("goog.object.containsKey",function(a,b){return null!==a&&b in a});\n',
        'B("goog.object.containsValue",ma);B("goog.object.findKey",X);B("goog.object.findValue",function(a,b,c){return(b=X(a,b,c))&&a[b]});B("goog.object.isEmpty",function(a){for(var b in a)return!1;return!0});B("goog.object.clear",function(a){for(var b in a)delete a[b]});B("goog.object.remove",Y);B("goog.object.add",function(a,b,c){if(null!==a&&b in a)throw Error("The object already contains the key "+b);a[b]=c});B("goog.object.get",function(a,b,c){return null!==a&&b in a?a[b]:c});\n',
        'B("goog.object.set",function(a,b,c){a[b]=c});B("goog.object.setIfUndefined",function(a,b,c){return b in a?a[b]:a[b]=c});B("goog.object.clone",function(a){var b={},c;for(c in a)b[c]=a[c];return b});B("goog.object.unsafeClone",na);B("goog.object.transpose",function(a){var b={},c;for(c in a)b[a[c]]=c;return b});B("goog.object.create",qa);B("goog.object.createSet",ra);B("goog.object.createImmutableView",function(a){var b=a;Object.isFrozen&&!Object.isFrozen(a)&&(b=Object.create(a),Object.freeze(b));return b});\n',
        'B("goog.object.isImmutableView",function(a){return!!Object.isFrozen&&Object.isFrozen(a)});B("Application",D);C("sendBuyLimitedOrder",D.prototype.M);C("sendSellLimitedOrder",D.prototype.N);C("cancelAllOrders",D.prototype.w);C("cancelOrder",D.prototype.A);C("getOrderBook",D.prototype.G);C("getTrades",D.prototype.I);C("getBalance",D.prototype.B);C("getParameters",D.prototype.H);C("getOpenOrders",D.prototype.F);C("getMarket",D.prototype.D);C("getInstanceID",D.prototype.C);C("showNotification",D.prototype.showNotification);\n',
        'C("stop",D.prototype.stop);\n'
      ];

      var blob = new Blob(algo_sandbox);
      var blobURL = window.URL.createObjectURL(blob);

      var running_algorithms = this.getModel().get('RunningAlgorithms');
      if (!goog.isDefAndNotNull(running_algorithms)) {
        running_algorithms = {};
      }

      var worker = new Worker(blobURL);
      running_algorithms[algo_instance_id] = {'blobURL': blobURL, 'worker': worker};
      this.getModel().set('RunningAlgorithms', running_algorithms);


      /**
       * @desc error algorithm notification message
       */
      var MSG_ERROR_RUNNING_ALGORITHM_NOTIFICATION = goog.getMsg('Error running algorithm');

      handler.listen(worker, 'message', function(e) {
        e = e.getBrowserEvent();
        if (   e.data['rep'] != 'create'
            && e.data['rep'] != 'start'
            && e.data['rep'] != 'params'
            && e.data['rep'] != 'error'
            && e.data['rep'] != 'terminate'
            && e.data['rep'] != 'stop') {
          if ( goog.array.indexOf(algo_permissions, e.data['rep'])  < 0 ) {
            if (this.getModel().get( e.data['instance'] + '_status') == '2') {
              this.getModel().set( e.data['instance'] + '_status', '3' );
            }

            /**
             * @desc notification shown when the algorithm executed a illegal operation
             */
            var MSG_ILLEGAL_OPERATION_ALGORITHM_NOTIFICATION = goog.getMsg('Algorithm tried to execute a ilegal operation');

            this.showNotification('error', MSG_ILLEGAL_OPERATION_ALGORITHM_NOTIFICATION, e.data['rep']);

            this.getModel().set( e.data['instance'] + '_status', '0' );
            running_algorithms = this.getModel().get('RunningAlgorithms');
            goog.object.remove(running_algorithms, e.data['instance']);
            this.getModel().set('RunningAlgorithms', running_algorithms);
            return;
          }
        }

        switch(e.data['rep']) {
          case 'create':
            this.getModel().set( e.data['instance'] + '_status', '1' );
            if (e.data['status'] == 'received_security_status') {
              this.getModel().set( e.data['instance'] + '_status_received_security_status', '1' );
            }
            if (e.data['status'] == 'received_full_refresh') {
              this.getModel().set( e.data['instance'] + '_status_received_full_refresh', '1' );
            }
            if (e.data['status'] == 'ws_open') {
              this.getModel().set( e.data['instance'] + '_status_ws_open', '1' );
            }
            if (    this.getModel().get( e.data['instance'] + '_status_ws_open' )
                && this.getModel().get( e.data['instance'] + '_status_received_full_refresh' )
                && this.getModel().get( e.data['instance'] + '_status_received_security_status' )  ) {
              worker.postMessage({'req':'start', 'params': this.getModel().get( algo_instance_id + '_params') });
            }
            break;
          case 'start':
            this.getModel().set( e.data['instance'] + '_status', '2' );
            break;
          case 'notification':
            this.showNotification(e.data['type'], e.data['title'], e.data['description']);
            break;
          case 'error':
          case 'terminate':
          case 'stop':
            if (this.getModel().get( e.data['instance'] + '_status') == '2') {
              this.getModel().set( e.data['instance'] + '_status', '3' );
            }
            if (goog.isDefAndNotNull(e.data['error'])) {
              this.showNotification('error', MSG_ERROR_RUNNING_ALGORITHM_NOTIFICATION,  e.data['error']);
            }
            this.getModel().set( e.data['instance'] + '_status', '0' );
            running_algorithms = this.getModel().get('RunningAlgorithms');
            goog.object.remove(running_algorithms, e.data['instance']);
            this.getModel().set('RunningAlgorithms', running_algorithms);
            break;
          case 'new_order_limited':
            var order_symbol  = this.getModel().get( e.data['instance'] + '_symbol').symbol;
            this.getBitexConnection().sendLimitedOrder( order_symbol,
                                                        parseInt(e.data['qty'],10),
                                                        parseInt(e.data['price'],10),
                                                        e.data['side'],
                                                        this.getModel().get('SelectedBrokerID'),
                                                        undefined,
                                                        e.data['client_order_id']);
            break;
          case 'cancel_order':
            this.conn_.cancelOrder(e.data['client_order_id'], e.data['order_id']);
            break;
          default:
            break;
        }
      }, this);
      worker.postMessage({'req':'create', 'params': params });
    }
  }, this);
};


/**
 * @param {bitex.model.ModelEvent} e
 * @private
 */
bitex.app.BlinkTrade.prototype.onAlgoStatusChange_ = function(e){
  var model = this.getModel();
  var algo_instance_id = e.key.substr(0, e.key.length - '_status'.length  );
  var new_status = e.data;
  if (new_status == '3'){ // '3' - pending stop

    /**
     * @desc starting algorithm notification message
     */
    var MSG_STOPPING_ALGORITHM_NOTIFICATION = goog.getMsg('stopping algorithm ....');
    this.showNotification('info', MSG_STOPPING_ALGORITHM_NOTIFICATION);


    var running_algorithms = this.getModel().get('RunningAlgorithms');
    var worker = running_algorithms[algo_instance_id]['worker'];
    worker.postMessage( { 'req': 'stop' } );
  }

};

/**
 * @param {bitex.model.ModelEvent} e
 * @private
 */
bitex.app.BlinkTrade.prototype.onAlgoParams_ = function(e){
  var algo_instance_id = e.key.substr(0, e.key.length - '_params'.length  );
  var parameters = e.data;

  var running_algorithms = this.getModel().get('RunningAlgorithms');
  var worker = running_algorithms[algo_instance_id]['worker'];

  worker.postMessage( { 'req': 'params', 'params': parameters } );
};


/**
 * @param {Object} token
 */
bitex.app.BlinkTrade.prototype.sendAccessToken = function(token) {
  console.log(token);
};

/**
 * @param {string} url
 */
bitex.app.blink_trade = function( url ) {
  var app = new bitex.app.BlinkTrade();
  app.run(url );
};


goog.exportSymbol('BlinkTradeApp', bitex.app.BlinkTrade);
goog.exportProperty(BlinkTradeApp.prototype, 'sendAccessToken', bitex.app.BlinkTrade.prototype.sendAccessToken);
goog.exportProperty(BlinkTradeApp.prototype, 'showNotification', bitex.app.BlinkTrade.prototype.showNotification);
goog.exportProperty(BlinkTradeApp.prototype, 'showDialog', bitex.app.BlinkTrade.prototype.showDialog);
goog.exportProperty(BlinkTradeApp.prototype, 'getHandler', bitex.app.BlinkTrade.prototype.getHandler);
goog.exportProperty(BlinkTradeApp.prototype, 'getCurrencyDescription', bitex.app.BlinkTrade.prototype.getCurrencyDescription);
goog.exportProperty(BlinkTradeApp.prototype, 'getCurrencySign', bitex.app.BlinkTrade.prototype.getCurrencySign);
goog.exportProperty(BlinkTradeApp.prototype, 'isCryptoCurrency', bitex.app.BlinkTrade.prototype.isCryptoCurrency);
goog.exportProperty(BlinkTradeApp.prototype, 'formatCurrency', bitex.app.BlinkTrade.prototype.formatCurrency);
goog.exportProperty(BlinkTradeApp.prototype, 'getBrokersByCountry', bitex.app.BlinkTrade.prototype.getBrokersByCountry);
goog.exportProperty(BlinkTradeApp.prototype, 'getBalance', bitex.app.BlinkTrade.prototype.getBalance);
goog.exportProperty(BlinkTradeApp.prototype, 'getModel', bitex.app.BlinkTrade.prototype.getModel);
goog.exportProperty(BlinkTradeApp.prototype, 'getQtyCurrencyFromSymbol', bitex.app.BlinkTrade.prototype.getQtyCurrencyFromSymbol);
goog.exportProperty(BlinkTradeApp.prototype, 'getPriceCurrencyFromSymbol', bitex.app.BlinkTrade.prototype.getPriceCurrencyFromSymbol);
goog.exportProperty(BlinkTradeApp.prototype, 'setView', bitex.app.BlinkTrade.prototype.setView);
goog.exportProperty(BlinkTradeApp.prototype, 'run', bitex.app.BlinkTrade.prototype.run);
