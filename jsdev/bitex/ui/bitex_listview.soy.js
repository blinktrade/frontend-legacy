// This file was automatically generated from bitex_listview.soy.
// Please don't edit this file by hand.

goog.provide('bitex.ui.ListView.templates');

goog.require('soy');


bitex.ui.ListView.templates.ListView = function(opt_data) {
  return '<div ' + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '" ' : '') + ' >' + ((opt_data.show_search) ? '<form class="ui-filterable"><div class="ui-input-search ui-shadow-inset ui-input-has-clear ui-body-inherit ui-corner-all"><input data-type="search" ' + ((opt_data.search_placeholder) ? 'placeholder="' + soy.$$escapeHtml(opt_data.search_placeholder) + '"' : '') + ' data-lastval=""><a href="#" class="ui-input-clear ui-btn ui-icon-delete ui-btn-icon-notext ui-corner-all ui-input-clear-hidden"></a></div></form>' : '') + '<ul data-role="listview"' + ((opt_data.show_search) ? 'data-filter="true"' : '') + ((opt_data.search_placeholder) ? 'data-filter-placeholder="' + soy.$$escapeHtml(opt_data.search_placeholder) + '"' : '') + 'class="ui-listview ui-listview-inset ui-corner-all ui-shadow ' + ((opt_data.base_class) ? soy.$$escapeHtml(opt_data.base_class) : '') + '" data-inset="true"></ul></div>';
};
