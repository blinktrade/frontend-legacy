goog.provide('bitex.view.ProfileView');
goog.provide('bitex.view.ProfileView.EventType');
goog.require('bitex.view.View');

goog.require('bitex.ui.ChangePassword');

goog.require('goog.date.UtcDateTime');
goog.require('goog.graphics.Stroke');
goog.require('goog.i18n.DateTimeFormat');
goog.require('bitex.view.ProfileView.templates');


/**
 * @param {*} app
 * @param {goog.dom.DomHelper=} opt_domHelper
 * @constructor
 * @extends {goog.ui.Component}
 */
bitex.view.ProfileView = function(app, opt_domHelper) {
  bitex.view.View.call(this, app, opt_domHelper);
};
goog.inherits(bitex.view.ProfileView, bitex.view.View);

/**
 * @type {bitex.ui.ChangePassword}
 */
bitex.view.ProfileView.prototype.change_password_;

/**
 * @type {string}
 */
bitex.view.ProfileView.prototype.client_id_;

/**
 * @type {Object}
 */
bitex.view.AccountOverview.prototype.update_profile_data_;


bitex.view.ProfileView.prototype.enterView = function() {
  goog.base(this, 'enterView');
  var model = this.getApplication().getModel();
  var handler = this.getHandler();

  var customer = {};
  customer['ID'] = model.get('Profile')['UserID'];
  customer['Username'] = model.get('Profile')['Username'];
  customer['Email'] = model.get('Profile')['Email'];

  var state = model.get('Profile')['State'];
  if (!goog.isDefAndNotNull(state) ) {
      state = model.get('Broker')['State'];
  }

  customer['State'] = state;
  customer['CountryCode'] = model.get('Profile')['Country'];
  customer['Verified'] = model.get('Profile')['Verified'];
  customer['EmailLang'] = model.get('Profile')['EmailLang'];

  customer['ConfirmationOrder'] =  false;
  if (goog.isDefAndNotNull(model.get('Profile')['ConfirmationOrder'])){
    customer['ConfirmationOrder'] = model.get('Profile')['ConfirmationOrder'];
  }

  var account_overview_header_el = goog.dom.getElement('account_overview_user_id');
  goog.soy.renderElement(account_overview_header_el,
                          bitex.view.ProfileView.templates.AccountOverviewUser, {msg_customer_detail: customer});


  var enabled = this.getApplication().getModel().get("TwoFactorEnabled");

  var btnEnableEl = goog.dom.getElement('id_btn_enable_two_factor');
  var btnDisableEl = goog.dom.getElement('id_btn_disable_two_factor');
  goog.style.showElement(btnEnableEl, !enabled);
  goog.style.showElement(btnDisableEl, enabled);

  var change_password_place_holder_compoenent = new goog.ui.Component();
  change_password_place_holder_compoenent.createDom = function(e){
    this.setElementInternal(
        goog.soy.renderAsElement( bitex.view.ProfileView.templates.ProfileViewChangePasswordPlaceHolder ) );
  };
  this.addChild(change_password_place_holder_compoenent, true);

  this.change_password_ = new bitex.ui.ChangePassword();
  change_password_place_holder_compoenent.addChild(this.change_password_, true);
  this.change_password_.enterDocument();

  handler.listen(this, bitex.ui.ChangePassword.EventType.CHANGE_PASSWORD, this.onChangePassword_);
};

/**
 * @param {goog.events.Event} e
 * @private
 */
bitex.view.ProfileView.prototype.onChangePassword_ = function(e) {
  var current_password = e.target.getCurrentPassword();
  var password = e.target.getPassword();
  var password2 = e.target.getNewPassword();

  if ( goog.string.isEmpty(current_password) ) {
    /**
     * @desc Validation error on SignUp view
     */
    var MSG_CHANGE_PASSWORD_EMPTY_PASSWORD = goog.getMsg('Password must not be empty');

    this.getApplication().showDialog(MSG_CHANGE_PASSWORD_EMPTY_PASSWORD );
    return;
  }

  if ( goog.string.isEmpty(password)  || password.length < 8) {
    /**
     * @desc Validation error on SignUp view
     */
    var MSG_CHANGE_PASSWORD_INVALID_PASSWORD = goog.getMsg('New password must have at least 8 characters');

    this.getApplication().showDialog(MSG_CHANGE_PASSWORD_INVALID_PASSWORD );
    return;
  }

  if ( password !== password2 ) {
    /**
     * @desc Validation error on SignUp view
     */
    var MSG_CHANGE_PASSWORDS_DOES_NOT_MATCH = goog.getMsg('Passwords does not match');

    this.getApplication().showDialog(MSG_CHANGE_PASSWORDS_DOES_NOT_MATCH );
    return;
  }

  this.dispatchEvent(bitex.view.View.EventType.CHANGE_PASSWORD);
};

/**
 * @return {string}
 */
bitex.view.ProfileView.prototype.getCurrentPassword = function(){
  return this.change_password_.getCurrentPassword();
};

/**
 * @return {string}
 */
bitex.view.ProfileView.prototype.getPassword = function(){
  return this.change_password_.getPassword();
};

/**
 * @return {string}
 */
bitex.view.ProfileView.prototype.getNewPassword = function(){
  return this.change_password_.getNewPassword();
};



bitex.view.ProfileView.prototype.exitView = function() {
  goog.base(this, 'exitView');
  this.removeChildren(true);
};

/** @override */
bitex.view.ProfileView.prototype.enterDocument = function() {
  goog.base(this, 'enterDocument');

  var handler = this.getHandler();

  var model = this.getApplication().getModel();

  handler.listen(this.getElement(), goog.events.EventType.CHANGE, this.onElementChange_ );

  handler.listen(goog.dom.getElement('id_btn_disable_two_factor'), goog.events.EventType.CLICK, function(e){
    this.dispatchEvent(bitex.view.View.EventType.DISABLE_TWOFACTOR);
  }, this);
};

/**
 * @return {String}
 */
bitex.view.ProfileView.prototype.getClientID = function() {
  return this.client_id_;
};

/**
 * @return {Object}
 */
bitex.view.ProfileView.prototype.getProfileTagNewValues = function() {
  return this.update_profile_data_;
};


/**
 * @param {goog.events.Event} e
 */
bitex.view.ProfileView.prototype.onElementChange_ = function(e){
  var el = e.target;
  if (goog.isDefAndNotNull(el.getAttribute('data-profile-change') )){
    var changed_attribute = el.getAttribute('data-profile-change');

    this.client_id_ = null;

    var new_value = goog.dom.forms.getValue(el);
    var type = el.type;
    switch (type.toLowerCase()) {
      case goog.dom.InputType.CHECKBOX:
      case goog.dom.InputType.RADIO:
        new_value = new_value == 'on' ? true : false;
    }

    this.update_profile_data_ = {};
    this.update_profile_data_[changed_attribute] = new_value;
    this.dispatchEvent(bitex.view.View.EventType.UPDATE_PROFILE);
  }
};
