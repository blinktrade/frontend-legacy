// This file was automatically generated from advanced_order_entry.soy.
// Please don't edit this file by hand.

goog.provide('bitex.ui.AdvancedOrderEntry.templates');

goog.require('soy');


bitex.ui.AdvancedOrderEntry.templates.AdvancedOrderEntry = function(opt_data) {
  var output = '';
  /** @desc Amount label in Advanced Order Entry */
  var MSG_UNNAMED_119 = goog.getMsg('Amount:');
  /** @desc Advanced Order Entry Label */
  var MSG_UNNAMED_121 = goog.getMsg('Amount');
  /** @desc 'Price per label' in Order Entry */
  var MSG_UNNAMED_123 = goog.getMsg('Price per ');
  /** @desc Advanced Order Entry Label */
  var MSG_UNNAMED_125 = goog.getMsg('Price');
  /** @desc Total label in Order Entry */
  var MSG_UNNAMED_127 = goog.getMsg('Total:');
  /** @desc Advanced Order Entry Label */
  var MSG_UNNAMED_129 = goog.getMsg('Total');
  /** @desc Client ID label in Order Entry */
  var MSG_UNNAMED_131 = goog.getMsg('Client ID');
  /** @desc Advanced Order Entry Label */
  var MSG_UNNAMED_133 = goog.getMsg('Client ID');
  output += '<form id="' + soy.$$escapeHtml(opt_data.id) + '" class="well span6 advanced-order-entry" data-uniform-control-holder-class="uniform-control-holder"><input id="' + soy.$$escapeHtml(opt_data.id) + '_symbol" type="hidden" name="symbol" value="' + soy.$$escapeHtml(opt_data.symbol) + '"><input id="' + soy.$$escapeHtml(opt_data.id) + '_side" type="hidden" name="side" value="' + soy.$$escapeHtml(opt_data.side) + '"><input id="' + soy.$$escapeHtml(opt_data.id) + '_type" type="hidden" name="type" value="' + soy.$$escapeHtml(opt_data.type) + '"><input id="' + soy.$$escapeHtml(opt_data.id) + '_is_broker" type="hidden" value="' + soy.$$escapeHtml(opt_data.is_broker) + '"><input id="' + soy.$$escapeHtml(opt_data.id) + '_broker_id" type="hidden" name="broker_id" value="' + soy.$$escapeHtml(opt_data.broker_id) + '"><div class="row-fluid uniform-control-holder"><div class="span5"> <span>' + MSG_UNNAMED_119 + '</span></div><div class="span6"><div class="input-prepend input-block-level"><span id="' + soy.$$escapeHtml(opt_data.id) + '_amount_sign" class="add-on advanced-order-entry-amount-sign">' + soy.$$escapeHtml(opt_data.amount_currency_symbol) + '</span><input id="' + soy.$$escapeHtml(opt_data.id) + '_amount" name="amount" type="text" class="input-block-level" data-uniform-label="' + MSG_UNNAMED_121 + '" data-uniform-validators="validateNumber; required" data-uniform-filters="positive_number" value="" required/></div></div></div><div class="row-fluid uniform-control-holder"><div class="span5"> <span>' + MSG_UNNAMED_123 + '<span class="advanced-order-entry-amount-sign">' + soy.$$escapeHtml(opt_data.amount_currency_symbol) + '</span>:</span></div><div class="span6"><div class="input-prepend input-block-level"><span id="' + soy.$$escapeHtml(opt_data.id) + '_price_sign" class="add-on advanced-order-entry-price-sign">' + soy.$$escapeHtml(opt_data.price_currency_symbol) + '</span><input id="' + soy.$$escapeHtml(opt_data.id) + '_price" name="price" type="text" class="input-block-level" data-uniform-label="' + MSG_UNNAMED_125 + '" data-uniform-validators="validateNumber; required" data-uniform-filters="positive_number" required/></div></div></div><div class="row-fluid uniform-control-holder"><div class="span5"><span>' + MSG_UNNAMED_127 + '</span></div><div class="span6"><div class="input-prepend input-block-level"><span class="add-on advanced-order-entry-price-sign">' + soy.$$escapeHtml(opt_data.price_currency_symbol) + '</span><input id="' + soy.$$escapeHtml(opt_data.id) + '_total" name="total" type="text" class="input-block-level" data-uniform-label="' + MSG_UNNAMED_129 + '" data-uniform-validators="validateNumber; required" data-uniform-filters="positive_number" required/></div></div></div><div class="row-fluid uniform-control-holder"><div class="span5"><input id="' + soy.$$escapeHtml(opt_data.id) + '_client_id" name="client_id" type="text" value="' + ((opt_data.client_id) ? soy.$$escapeHtml(opt_data.client_id) : '') + '" class="input-block-level" label="' + MSG_UNNAMED_131 + '" data-uniform-label="' + MSG_UNNAMED_133 + '"' + ((opt_data.is_broker) ? 'data-uniform-validators="required"' : 'style="display:none" disabled') + '/></div><div class="span5"><button id="' + soy.$$escapeHtml(opt_data.id) + '_action" class="btn ' + ((opt_data.side == 1) ? 'btn-success' : 'btn-danger') + ' btn-execution">';
  if (opt_data.side == 1) {
    /** @desc Buy button in Order Entry */
    var MSG_UNNAMED_135 = goog.getMsg('BUY');
    output += MSG_UNNAMED_135;
  } else {
    /** @desc Sell button in Order Entry */
    var MSG_UNNAMED_137 = goog.getMsg('SELL');
    output += MSG_UNNAMED_137;
  }
  output += '</button></div></div></form>';
  return output;
};
