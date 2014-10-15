// This file was automatically generated from simple_order_entry.soy.
// Please don't edit this file by hand.

goog.provide('bitex.ui.SimpleOrderEntry.templates');

goog.require('soy');


bitex.ui.SimpleOrderEntry.templates.SimpleOrderEntry = function(opt_data) {
  var output = '';
  /** @desc I want to sell */
  var MSG_UNNAMED_77 = goog.getMsg('Quantity');
  /** @desc for a total of */
  var MSG_UNNAMED_79 = goog.getMsg(' for a total of ');
  /** @desc I want to sell */
  var MSG_UNNAMED_81 = goog.getMsg('Total');
  /** @desc Fee label on simple order entry */
  var MSG_UNNAMED_83 = goog.getMsg('Fee');
  /** @desc Price per crypto currency label on simple order entry */
  var MSG_UNNAMED_85 = goog.getMsg(
      'Price per {$cryptocurrencydescription} :',
      {'cryptocurrencydescription': soy.$$escapeHtml(opt_data.cryptocurrencydescription)});
  output += '<form id="' + soy.$$escapeHtml(opt_data.id) + '" class="simple-order-entry well" ><div class="row-fluid"><div class="span10"><div class="row-fluid"><div class="pull-left"><span class="simple-order-entry-text" >';
  if (opt_data.side == 1) {
    /** @desc I want to buy */
    var MSG_UNNAMED_73 = goog.getMsg('I want to buy');
    output += MSG_UNNAMED_73;
  } else {
    /** @desc I want to sell */
    var MSG_UNNAMED_75 = goog.getMsg('I want to sell');
    output += MSG_UNNAMED_75;
  }
  output += '</span><div class="input-prepend uniform-control-holder"><span class="add-on simple-order-entry-price-sign">' + soy.$$escapeHtml(opt_data.crypto_currency_symbol) + '</span><input id="' + soy.$$escapeHtml(opt_data.id) + '_qty" name="qty" data-uniform-label="' + MSG_UNNAMED_77 + '" class="input-small simple-order-entry-qty" data-uniform-validators="validateNumber; required" data-uniform-filters="positive_number" type="text" required/></div></div><div class="pull-left"><span class="simple-order-entry-text" >' + MSG_UNNAMED_79 + '</span><div class="input-prepend uniform-control-holder"><span class="add-on simple-order-entry-price-sign">' + soy.$$escapeHtml(opt_data.currency_symbol) + '</span><input id="' + soy.$$escapeHtml(opt_data.id) + '_total" name="total" data-uniform-label="' + MSG_UNNAMED_81 + '" class="input-small simple-order-entry-total" data-uniform-validators="validateNumber; required" data-uniform-filters="positive_number" type="text" required/></div></div></div><div class="row-fluid"><small>' + MSG_UNNAMED_83 + ' ( ' + soy.$$escapeHtml(opt_data.formatted_fee) + ' ) : <span id="' + soy.$$escapeHtml(opt_data.id) + '_fee"></span>,' + MSG_UNNAMED_85 + '<strong><span id="' + soy.$$escapeHtml(opt_data.id) + '_avg_price"></span></strong></strong></small></div></div><div class="span2"><div class="row-fluid">';
  if (opt_data.side == 1) {
    /** @desc Buy button in Order Entry */
    var MSG_UNNAMED_87 = goog.getMsg('BUY');
    output += '<button id="' + soy.$$escapeHtml(opt_data.id) + '_action_simple" class="btn btn-large btn-success order-entry-action span12">' + MSG_UNNAMED_87 + '</button>';
  } else {
    /** @desc Buy button in Order Entry */
    var MSG_UNNAMED_89 = goog.getMsg('SELL');
    output += '<button id="' + soy.$$escapeHtml(opt_data.id) + '_action_simple" class="btn btn-large btn-danger order-entry-action span12">' + MSG_UNNAMED_89 + '</button>';
  }
  output += '</div></div></div></form>';
  return output;
};
