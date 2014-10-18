// This file was automatically generated from merchant.soy.
// Please don't edit this file by hand.

goog.provide('bitex.ui.Merchant.templates');

goog.require('soy');


bitex.ui.Merchant.templates.WithdrawFieldContent = function(opt_data) {
  return '<div class="ui-field-contain"><label class="control-label">' + soy.$$escapeHtml(opt_data.field['label']) + '</label><input class="withdraw-field" data-uniform-validators="' + soy.$$escapeHtml(opt_data.field['validator']) + '" type="' + soy.$$escapeHtml(opt_data.field['type']) + '" name="' + soy.$$escapeHtml(opt_data.field['name']) + '" placeholder="' + soy.$$escapeHtml(opt_data.field['placeholder']) + '" value="' + soy.$$escapeHtml(opt_data.field['value']) + '"/></div>';
};
