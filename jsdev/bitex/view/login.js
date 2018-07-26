goog.provide('bitex.view.LoginView');
goog.provide('bitex.view.LoginView.EventType');
goog.require('bitex.view.View');

goog.require('bitex.util');

goog.require('goog.dom.forms');
goog.require('goog.style');
goog.require('bitex.model.Model');

/**
 * @param {*} app
 * @param {goog.dom.DomHelper=} opt_domHelper
 * @constructor
 * @extends {goog.ui.Component}
 */
bitex.view.LoginView = function(app, opt_domHelper) {
  bitex.view.View.call(this, app, opt_domHelper);
  this.username_el_ = null;
  this.password_el_ = null;
  this.trusted_device_el_ = null;
};
goog.inherits(bitex.view.LoginView, bitex.view.View);

/**
 * The events fired
 * @enum {string} The event types
 */
bitex.view.LoginView.EventType = {
  LOGIN: 'login_click'
};

/**
 * @type {Element}
 */
bitex.view.LoginView.prototype.username_el_;

/**
 * @type {Element}
 */
bitex.view.LoginView.prototype.password_el_;

/**
 * @type {Element}
 */
bitex.view.LoginView.prototype.trusted_device_el_;

/**
 * @type {Element}
 */
bitex.view.LoginView.prototype.second_factor_el;

/**
 * @type {Element}
 */
bitex.view.LoginView.prototype.second_factor_group_el;

/**
 * @override
 */
bitex.view.LoginView.prototype.enterDocument = function(){
  goog.base(this, 'enterDocument');
  var handler = this.getHandler();

  handler.listen( goog.dom.getElement('id_landing_signin'), 'click', function(e){
    e.stopPropagation();
    e.preventDefault();
    this.onLoginClick_(
        goog.dom.getElement("id_landing_username"),
        goog.dom.getElement("id_landing_password"),
        goog.dom.getElement("id_landing_second_factor")
    );
  });

  handler.listen(goog.dom.getElement('id_open_second_factor'), 'click', goog.bind(this.openSecondFactor));

  handler.listen( goog.dom.getElement('id_btn_login'), 'click', function(e){
    e.stopPropagation();
    e.preventDefault();
    this.onLoginClick_(
      goog.dom.getElement("id_username"),
      goog.dom.getElement("id_password"),
      goog.dom.getElement("id_second_factor"),
      goog.dom.getElement("id_trusted_device")
    );
  });
};

/**
 * @return {string}
 */
bitex.view.LoginView.prototype.getUsername = function() {
  return goog.dom.forms.getValue(this.username_el_);
};

/**
 * @return {string}
 */
bitex.view.LoginView.prototype.getPassword = function() {
  return goog.dom.forms.getValue(this.password_el_);
};

/**
 * @return {string}
 */
bitex.view.LoginView.prototype.getSecondFactor = function() {
  if (goog.isDefAndNotNull(this.second_factor_el)){
    return goog.dom.forms.getValue(this.second_factor_el);
  } else {
    return "";
  }
};

/**
 * @return {boolean}
 */
bitex.view.LoginView.prototype.getTrustedDevice = function() {
  if (goog.isDefAndNotNull(this.trusted_device_el_)){
    return (goog.dom.forms.getValue(this.trusted_device_el_)  == 'checked'
            || goog.dom.forms.getValue(this.trusted_device_el_)  == 'on');
  } else {
    return false;
  }
};


/**
 *
 * @param {Element} username_el
 * @param {Element} password_el
 * @private
 */
bitex.view.LoginView.prototype.onLoginClick_ = function(username_el, password_el, second_factor_el, trusted_device_el) {
  this.username_el_ = username_el;
  this.password_el_ = password_el;
  this.second_factor_el = second_factor_el;
  this.trusted_device_el_ = trusted_device_el;

  var username = this.getUsername();
  var password = this.getPassword();

  if (goog.string.isEmpty(username) ) {
    /**
     * @desc Invalid Username Alert error message when pushing the login button
     */
    var MSG_LOGIN_VIEW_INVALID_USERNAME = goog.getMsg('Invalid username');
    this.getApplication().showDialog( MSG_LOGIN_VIEW_INVALID_USERNAME );

    this.username_el_.focus();
    return;
  }
  if ( goog.string.isEmpty(password)  || password.length < 8) {
    /**
     * @desc Invalid Password Alert error message when pushing the login button
     */
    var MSG_LOGIN_VIEW_INVALID_PASSWORD = goog.getMsg('Password must have at least 8 characters');
    this.getApplication().showDialog( MSG_LOGIN_VIEW_INVALID_PASSWORD );
    this.password_el_.focus();
    return;
  }

  this.dispatchEvent(bitex.view.LoginView.EventType.LOGIN);
};


bitex.view.LoginView.prototype.clear = function(){
  if (goog.isDefAndNotNull(this.username_el_)) {
    goog.dom.forms.setValue(this.username_el_, "");
  }
  if (goog.isDefAndNotNull(this.password_el_)) {
    goog.dom.forms.setValue(this.password_el_, "");
  }
  if (goog.isDefAndNotNull(this.second_factor_el)) {
    goog.dom.forms.setValue(this.second_factor_el, "");
  }
  if (goog.isDefAndNotNull(this.trusted_device_el_)) {
    goog.dom.forms.setValue(this.trusted_device_el_, "");
  }
};

bitex.view.LoginView.prototype.openSecondFactor = function(e) {
  e.stopPropagation();
  e.preventDefault();
  goog.style.showElement(goog.dom.getElement('id_open_second_factor'), false);
  goog.style.showElement(goog.dom.getElement('id_second_factor_group'), true);
};
