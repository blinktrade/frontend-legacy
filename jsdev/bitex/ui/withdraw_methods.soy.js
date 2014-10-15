// This file was automatically generated from withdraw_methods.soy.
// Please don't edit this file by hand.

goog.provide('bitex.ui.withdraw_methods.templates');

goog.require('soy');


bitex.ui.withdraw_methods.templates.WithdrawMethods = function(opt_data) {
  var output = '';
  /** @desc Methods column header */
  var MSG_UNNAMED_84 = goog.getMsg('Currency');
  /** @desc Methods column header */
  var MSG_UNNAMED_86 = goog.getMsg('Name');
  /** @desc Methods column header */
  var MSG_UNNAMED_88 = goog.getMsg('Disclaimer');
  /** @desc Methods column header */
  var MSG_UNNAMED_90 = goog.getMsg('Fees');
  /** @desc Methods column header */
  var MSG_UNNAMED_92 = goog.getMsg('Actions');
  /** @desc Method edit action */
  var MSG_UNNAMED_94 = goog.getMsg('edit');
  /** @desc Method delete action */
  var MSG_UNNAMED_96 = goog.getMsg('delete');
  /** @desc Save withdraw_structure button */
  var MSG_UNNAMED_98 = goog.getMsg('Save');
  /** @desc Cancel withdraw_structure button  */
  var MSG_UNNAMED_100 = goog.getMsg('Cancel');
  /** @desc Add withdraw method */
  var MSG_UNNAMED_102 = goog.getMsg('Add withdraw method');
  /** @desc Saving status message on the save withdraw structure */
  var MSG_UNNAMED_104 = goog.getMsg('Saving...');
  output += '<div class="row-fluid"><div class="span12"><table id="' + soy.$$escapeHtml(opt_data.id) + '_table" class="table table-condensed table-hover"><thead><tr><th> ' + MSG_UNNAMED_84 + '</th><th> ' + MSG_UNNAMED_86 + '</th><th> ' + MSG_UNNAMED_88 + ' </th><th> ' + MSG_UNNAMED_90 + '</th><th> ' + MSG_UNNAMED_92 + ' </th></tr></thead><tbody>';
  var methodList21 = opt_data.methods;
  var methodListLen21 = methodList21.length;
  for (var methodIndex21 = 0; methodIndex21 < methodListLen21; methodIndex21++) {
    var methodData21 = methodList21[methodIndex21];
    output += '<tr data-withdraw-currency="' + soy.$$escapeHtml(methodData21['currency']) + '"  data-withdraw-method="' + soy.$$escapeHtml(methodData21['method']) + '"><td>' + soy.$$escapeHtml(methodData21['currency_description']) + '</td><td>' + soy.$$escapeHtml(methodData21['description']) + '</td><td>' + soy.$$escapeHtml(methodData21['disclaimer']) + '</td>' + ((methodData21['has_fixed_fee']) ? '<td>' + soy.$$escapeHtml(methodData21['formatted_percent_fee']) + '% + ' + soy.$$escapeHtml(methodData21['formatted_fixed_fee']) + '</td>' : '<td>' + soy.$$escapeHtml(methodData21['formatted_percent_fee']) + '%</td>') + '<td><div class="btn-group"><button class="btn btn-mini btn-success withdraw-methods-action-edit withdraw-method-action">' + MSG_UNNAMED_94 + '</button><button class="btn btn-mini btn-danger withdraw-methods-action-delete withdraw-method-action">' + MSG_UNNAMED_96 + '</button></div></td></tr>';
  }
  output += '</tbody></table><div class="withdraw-methods-show-when-dirty-state pull-right" ><button  class="btn btn-large btn-success withdraw-methods-action-save">' + MSG_UNNAMED_98 + '</button> <button class="btn btn-large btn-danger withdraw-methods-action-cancel">' + MSG_UNNAMED_100 + '</button></div><div class="withdraw-methods-show-when-clean-state btn-group pull-right "><a class="btn btn-primary btn-small dropdown-toggle" data-toggle="dropdown" href="#"><i class="icon-white icon-plus"></i> ' + MSG_UNNAMED_102 + '</a><ul class="dropdown-menu">';
  var currList62 = opt_data.currencies;
  var currListLen62 = currList62.length;
  for (var currIndex62 = 0; currIndex62 < currListLen62; currIndex62++) {
    var currData62 = currList62[currIndex62];
    output += '<li><a href="" data-withdraw-currency="' + soy.$$escapeHtml(currData62['code']) + '" class="withdraw-methods-action-add withdraw-method-action" >' + soy.$$escapeHtml(currData62['description']) + '</a></li>';
  }
  output += '</ul></div><div class="withdraw-methods-show-when-saving-state span4 pull-right" ><div class="progress progress-success progress-striped active"><div class="bar" style="width: 100%">' + MSG_UNNAMED_104 + '</div></div></div><div class="clearfix"></div></div></div>';
  return output;
};
