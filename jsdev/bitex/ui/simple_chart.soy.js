// This file was automatically generated from simple_chart.soy.
// Please don't edit this file by hand.

goog.provide('bitex.ui.SimpleChart.templates');

goog.require('soy');


bitex.ui.SimpleChart.templates.SimpleChart = function(opt_data) {
  return '<iframe id="HighChartIFrame" allowtransparency="true" src="' + ((opt_data.symbol) ? '/chart.html?s=' + soy.$$escapeHtml(opt_data.symbol) : '') + '" data-symbol="' + ((opt_data.symbol) ? '/chart.html?s=' + soy.$$escapeHtml(opt_data.symbol) : '') + '" style="width: 100%; height: ' + ((opt_data.height) ? soy.$$escapeHtml(opt_data.height) : '400') + 'px" frameborder="0" scrolling="no"></iframe>';
};
