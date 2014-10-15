// This file was automatically generated from market_view_table.soy.
// Please don't edit this file by hand.

goog.provide('bitex.ui.market_view_table.templates');

goog.require('soy');


bitex.ui.market_view_table.templates.MarketViewTable = function(opt_data) {
  var output = '';
  /** @desc Method field header */
  var MSG_UNNAMED_62 = goog.getMsg('Pair');
  /** @desc Method field header */
  var MSG_UNNAMED_64 = goog.getMsg('Last');
  /** @desc Method field header */
  var MSG_UNNAMED_66 = goog.getMsg('Bid');
  /** @desc Method field header */
  var MSG_UNNAMED_68 = goog.getMsg('Ask');
  /** @desc Method field header */
  var MSG_UNNAMED_70 = goog.getMsg('Volume (BTC)');
  /** @desc Method field header */
  var MSG_UNNAMED_72 = goog.getMsg('Volume');
  /** @desc Method field header */
  var MSG_UNNAMED_74 = goog.getMsg('High');
  /** @desc Method field header */
  var MSG_UNNAMED_76 = goog.getMsg('Low');
  output += '<div class="row-fluid"><div class="span12"><table id="' + soy.$$escapeHtml(opt_data.id) + '_table" class="table table-bordered table-condensed"><thead><tr><th> ' + MSG_UNNAMED_62 + '</th><th> ' + MSG_UNNAMED_64 + ' </th><th> ' + MSG_UNNAMED_66 + ' </th><th> ' + MSG_UNNAMED_68 + ' </th><th> ' + MSG_UNNAMED_70 + ' </th><th> ' + MSG_UNNAMED_72 + ' </th><th> ' + MSG_UNNAMED_74 + ' </th><th> ' + MSG_UNNAMED_76 + ' </th></tr></thead><tbody>';
  var instList30 = opt_data.instruments;
  var instListLen30 = instList30.length;
  for (var instIndex30 = 0; instIndex30 < instListLen30; instIndex30++) {
    var instData30 = instList30[instIndex30];
    output += '<tr data-symbol="' + soy.$$escapeHtml(instData30['Symbol']) + '" ><td>' + soy.$$escapeHtml(instData30['Description']) + ' </td><td><span class="bitex-model" data-model-key="formatted_last_price_' + soy.$$escapeHtml(instData30['Symbol']) + '"></span></td><td><span class="bitex-model" data-model-key="formatted_bid_' + soy.$$escapeHtml(instData30['Symbol']) + '"></span></td><td><span class="bitex-model" data-model-key="formatted_ask_' + soy.$$escapeHtml(instData30['Symbol']) + '"></span></td><td><span class="bitex-model" data-model-key="formatted_volume_sell_' + soy.$$escapeHtml(instData30['Symbol']) + '"></span></td><td><span class="bitex-model" data-model-key="formatted_volume_buy_' + soy.$$escapeHtml(instData30['Symbol']) + '"></span></td><td><span class="bitex-model" data-model-key="formatted_max_' + soy.$$escapeHtml(instData30['Symbol']) + '"></span></td><td><span class="bitex-model" data-model-key="formatted_min_' + soy.$$escapeHtml(instData30['Symbol']) + '"></span></td></tr>';
  }
  output += '</tbody></table></div></div>';
  return output;
};
