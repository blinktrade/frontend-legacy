goog.provide('bitex.ui.APIKeyDataEntry');
goog.provide('bitex.ui.APIKeyDataEntry.EventType');

goog.require('bitex.ui.APIKeyDataEntry.templates');
goog.require('goog.ui.Component');

goog.require('goog.i18n.NumberFormat');

goog.require('goog.string');
goog.require('goog.dom.forms');

goog.require('bitex.util');
goog.require('bitex.util.PriceAmountCalculatorVerb');

goog.require('bitex.primitives.Price');

goog.require('uniform.Uniform');


/**
 * @param {Object} opt_model
 * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
 *
 * @extends {goog.ui.Component}
 * @constructor
 */
bitex.ui.APIKeyDataEntry = function(opt_model, opt_domHelper) {
  goog.base(this, opt_domHelper);

  this.setModel(opt_model || {'deposit_methods':[], 'withdrawal_methods':[]});

  this.uniform_ = new uniform.Uniform( { 'control_holder_class' : 'uniform-control-holder' } );
};
goog.inherits(bitex.ui.APIKeyDataEntry, goog.ui.Component);

/**
 * @type {uniform.Uniform}
 * @private
 */
bitex.ui.APIKeyDataEntry.prototype.uniform_;

/**
 * @type {Object.<string, Array.< Array.<*>>>}
 * @private
 */
bitex.ui.APIKeyDataEntry.prototype.permission_data_;


/**
 * Name of base CSS class
 * @type {string}
 * @private
 */
bitex.ui.APIKeyDataEntry.BASE_CSS_CLASS_ = goog.getCssName('api-key-data-entry');


/**
 * @enum {string}
 */
bitex.ui.APIKeyDataEntry.EventType = {
  CANCEL:'api_key_data_entry_cancel',
  SUBMIT: 'api_key_data_entry_submit'
};

/**
 * Returns base CSS class. This getter is used to get base CSS class part.
 * All CSS class names in component are created as:
 *   goog.getCssName(this.getBaseCssClass(), 'CLASS_NAME')
 * @return {string} Base CSS class.
 */
bitex.ui.APIKeyDataEntry.prototype.getBaseCssClass = function() {
  return bitex.ui.APIKeyDataEntry.BASE_CSS_CLASS_;
};

/** @override */
bitex.ui.APIKeyDataEntry.prototype.decorateInternal = function(element) {
  this.setElementInternal(element);
};

/** @override */
bitex.ui.APIKeyDataEntry.prototype.createDom = function() {
  var el = goog.soy.renderAsElement(bitex.ui.APIKeyDataEntry.templates.APIKeyDataEntry, {
    id                : this.makeId( 'api_key' ),
    depositMethods    : this.getModel()['deposit_methods'],
    withdrawalMethods : this.getModel()['withdrawal_methods'],
    isBroker          : this.getModel()['is_broker'],
    isMSB             : this.getModel()['is_msb']
  });
  this.setElementInternal(el);
};

/** @override */
bitex.ui.APIKeyDataEntry.prototype.enterDocument = function() {
  goog.base(this, 'enterDocument');

  var handler = this.getHandler();
  var dom  = this.getDomHelper();

  this.uniform_.decorate( goog.dom.getElement( this.makeId('api_key_form') ) );
  handler.listen(goog.dom.getElement(this.makeId('api_key_cancel_btn')), goog.events.EventType.CLICK , this.onCancel_);
  handler.listen(goog.dom.getElement(this.makeId('api_key_create_btn')), goog.events.EventType.CLICK , this.onSubmit_);
  handler.listen(goog.dom.getElement(this.makeId('api_key_select_all')), goog.events.EventType.CLICK , this.onSelectAll_);
  handler.listen(goog.dom.getElement(this.makeId('api_key_clear_all')),  goog.events.EventType.CLICK , this.onClearAll_);

  handler.listen(goog.dom.getElement(this.makeId('api_key_permissions_table')), goog.events.EventType.CLICK ,
      this.onPermissionsTableClick_);
};

/**
 *
 * @returns {Object}
 */
bitex.ui.APIKeyDataEntry.prototype.getPermissionList = function(){
  var permission_checkbox_el_list =
      goog.dom.getElementsByClass('api-key-data-entry-form-permissions-check', this.getElement() );

  var permission_data = {};
  goog.array.forEach(permission_checkbox_el_list, function(permission_checkbox_el){
    var is_checked =  goog.dom.forms.getValue(permission_checkbox_el);
    if (is_checked) {
      var permission_msg_type = permission_checkbox_el.getAttribute('data-permission-msg');
      var permission_filters = permission_checkbox_el.getAttribute('data-permission-filters');

      if (goog.isDefAndNotNull(permission_msg_type)){
        if (!(permission_msg_type in permission_data)){
          permission_data[permission_msg_type] = [];
        }
        if (goog.isDefAndNotNull(permission_filters)) {
          var permission_filters_array = goog.json.parse(permission_filters);
          goog.array.forEach(permission_filters_array, function(permission_filter){
            permission_data[permission_msg_type].push(permission_filter);
          }, this);
        }
      }
    }
  }, this);
  return permission_data;
};

/**
 * @returns {string}
 */
bitex.ui.APIKeyDataEntry.prototype.getLabel = function(){
  return goog.dom.forms.getValue(goog.dom.getElement(this.makeId('api_key_label')));
};

/**
 * @returns {Array.<string>}
 */
bitex.ui.APIKeyDataEntry.prototype.getIPWhiteList = function(){
  var ip_white_list = goog.string.trim(
      goog.dom.forms.getValue(
          goog.dom.getElement(
              this.makeId('api_key_ip_whitelist'))));

  var res = [];
  if (goog.isDefAndNotNull(ip_white_list) && !goog.string.isEmpty(ip_white_list)) {

    goog.array.forEach(ip_white_list.split(','), function(ip){
      res.push( goog.string.trim(ip) );
    })
  }

  return res;
};

/**
 * @param {goog.events.Event} e
 * @private
 */
bitex.ui.APIKeyDataEntry.prototype.onPermissionsTableClick_ = function(e) {
  e.stopPropagation();
};

/**
 * @param {goog.events.Event} e
 * @private
 */
bitex.ui.APIKeyDataEntry.prototype.onSelectAll_ = function(e) {
  e.preventDefault();

  var permission_checkbox_el_list =
      goog.dom.getElementsByClass('api-key-data-entry-form-permissions-check', this.getElement());

  goog.array.forEach(permission_checkbox_el_list, function(permission_checkbox_el){
    permission_checkbox_el.checked = true
  });
};

/**
 * @param {goog.events.Event} e
 * @private
 */
bitex.ui.APIKeyDataEntry.prototype.onClearAll_ = function(e) {
  e.preventDefault();

  var permission_checkbox_el_list =
      goog.dom.getElementsByClass('api-key-data-entry-form-permissions-check', this.getElement());

  goog.array.forEach(permission_checkbox_el_list, function(permission_checkbox_el){
    permission_checkbox_el.checked = false
  });
};

/**
 * @param {goog.events.Event} e
 * @private
 */
bitex.ui.APIKeyDataEntry.prototype.onCancel_ = function(e) {
  e.preventDefault();
  this.dispatchEvent(bitex.ui.APIKeyDataEntry.EventType.CANCEL);
};

/**
 * @param {goog.events.Event} e
 * @private
 */
bitex.ui.APIKeyDataEntry.prototype.onSubmit_ = function(e) {
  e.preventDefault();

  var error_list = this.uniform_.validate();
  if (error_list.length > 0) {
    e.stopPropagation();
  } else {
    this.dispatchEvent( bitex.ui.APIKeyDataEntry.EventType.SUBMIT);
  }
};

