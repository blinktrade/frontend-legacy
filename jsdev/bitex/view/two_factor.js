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

  var handler = this.getHandler();
  var model   = this.getApplication().getModel();

  handler.listen(model, bitex.model.Model.EventType.SET + 'TwoFactorSecret', this.onModelSetTwoFactorSecret_);

};

bitex.view.TwoFactor.prototype.exitDocument = function() {
};

bitex.view.TwoFactor.prototype.recreateComponents_ = function() {

  this.two_factor_component = new bitex.ui.TwoFactor();
  this.two_factor_component.render(goog.dom.getElement('twofactor_content'));

  this.dispatchEvent(bitex.view.View.EventType.ENABLE_TWOFACTOR);
};

bitex.view.TwoFactor.prototype.destroyComponents_ = function() {
  handler.unlisten(model, bitex.model.Model.EventType.SET + 'TwoFactorSecret', this.onModelSetTwoFactorSecret_);
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
