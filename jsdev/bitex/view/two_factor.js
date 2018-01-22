goog.provide('bitex.view.TwoFactor');
goog.require('bitex.view.View');

goog.require('bitex.templates');
goog.require('bitex.ui.TwoFactor.templates');

/**
 * @param {*} app
 * @param {goog.dom.DomHelper=} opt_domHelper
 * @constructor
 * @extends {goog.ui.Component}
 */
bitex.view.TwoFactor = function(app, opt_domHelper) {
  bitex.view.View.call(this, app, opt_domHelper);
};
goog.inherits(bitex.view.TwoFactor, bitex.view.View);

bitex.view.TwoFactor.prototype.enterView = function() {
  goog.base(this, 'enterView');
  this.recreateComponents_();
};

bitex.view.TwoFactor.prototype.exitView = function() {
  goog.base(this, 'exitView');
  this.destroyComponents_();
};


bitex.view.TwoFactor.prototype.enterDocument = function() {
  goog.base(this, 'enterDocument');
};

bitex.view.TwoFactor.prototype.recreateComponents_ = function() {

  var handler = this.getHandler();
  var model   = this.getApplication().getModel();
  var enabled = this.getApplication().getModel().get('TwoFactorEnabled');

  if (enabled) {
    this.getApplication().router_.setView('trading');
  } else {

    handler.listen(model, bitex.model.Model.EventType.SET + 'TwoFactorSecret', this.onModelSetTwoFactorSecret_);
    handler.listen(model, bitex.model.Model.EventType.SET + 'TwoFactorEnabled', this.onModelSetTwoFactorEnabled_);

    this.two_factor_component = new bitex.ui.TwoFactor();
    this.two_factor_component.render(goog.dom.getElement('twofactor_content'));

    handler.listen(goog.dom.getElement('id_btn_enable_two_factor_view'), goog.events.EventType.CLICK, function(e){
      this.dispatchEvent(bitex.view.View.EventType.ENABLE_TWOFACTOR);
    }, this);

    this.dispatchEvent(bitex.view.View.EventType.ENABLE_TWOFACTOR);
  }
};

bitex.view.TwoFactor.prototype.destroyComponents_ = function() {
  var handler = this.getHandler();
  var model   = this.getApplication().getModel();

  handler.unlisten(model, bitex.model.Model.EventType.SET + 'TwoFactorSecret', this.onModelSetTwoFactorSecret_);
  handler.unlisten(model, bitex.model.Model.EventType.SET + 'TwoFactorEnabled', this.onModelSetTwoFactorEnabled_);

  goog.dom.removeChildren(goog.dom.getElement('twofactor_content'));
};

/**
 * @param  {bitex.model.ModelEvent} e
 * @private
 */
bitex.view.TwoFactor.prototype.onModelSetTwoFactorSecret_ = function(e) {
  var model = this.getApplication().getModel();

  var secret = e.data;
  var has_secret = goog.isDefAndNotNull(secret) && !goog.string.isEmpty(secret);


  if (has_secret) {
    var issuer = model.get('Broker')['ShortName'];

    var qr_code = 'https://chart.googleapis.com/chart?chs=200x200&chld=M%7C0&cht=qr&chl=' +
        encodeURIComponent('otpauth://totp/' + model.get('Profile')['Email'] + '?secret=')  + secret +
        encodeURIComponent('&issuer=' + issuer);

    goog.dom.getElement('id_secret_qr_view').setAttribute('src', qr_code);
  }
};

/**
 * @param  {bitex.model.ModelEvent} e
 * @private
 */
bitex.view.TwoFactor.prototype.onModelSetTwoFactorEnabled_ = function(e) {

  var enabled = e.data;
  var secret = this.getApplication().getModel().get('TwoFactorSecret');
  var has_secret = goog.isDefAndNotNull(secret) && !goog.string.isEmpty(secret);

  var btnEnableEl = goog.dom.getElement('id_btn_enable_two_factor');
  var btnDisableEl = goog.dom.getElement('id_btn_disable_two_factor');

  goog.style.showElement(btnEnableEl, !enabled);
  goog.style.showElement(btnDisableEl, enabled);
  this.getApplication().router_.setView('trading');
};

/**
 * @return {string}
 */
bitex.view.TwoFactor.prototype.getCode = function() {
  return goog.dom.forms.getValue(goog.dom.getElement('id_second_step_verification_view'));
};
