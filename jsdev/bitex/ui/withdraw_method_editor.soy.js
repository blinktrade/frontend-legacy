// This file was automatically generated from withdraw_method_editor.soy.
// Please don't edit this file by hand.

goog.provide('bitex.ui.withdraw_method_editor.templates');

goog.require('soy');


bitex.ui.withdraw_method_editor.templates.WithdrawMethodFieldLineEditor = function(opt_data) {
  var output = '';
  /** @desc Client option on side select */
  var MSG_UNNAMED_365 = goog.getMsg('Client');
  /** @desc Broker option on side select */
  var MSG_UNNAMED_367 = goog.getMsg('Broker');
  /** @desc Field name */
  var MSG_UNNAMED_369 = goog.getMsg('Name');
  /** @desc Field name */
  var MSG_UNNAMED_371 = goog.getMsg('Label');
  /** @desc Text option on type select */
  var MSG_UNNAMED_373 = goog.getMsg('Text');
  /** @desc Field delete action */
  var MSG_UNNAMED_375 = goog.getMsg('delete');
  output += '<tr id="' + soy.$$escapeHtml(opt_data.id) + '_field_' + soy.$$escapeHtml(opt_data.idx) + '"><td><select id="' + soy.$$escapeHtml(opt_data.id) + '_field_side_' + soy.$$escapeHtml(opt_data.idx) + '" class="withdraw-method-editor-field-side"><option value="client" ' + ((opt_data.data['side'] == 'client') ? 'selected' : '') + '>' + MSG_UNNAMED_365 + '</option><option value="broker" ' + ((opt_data.data['side'] == 'broker') ? 'selected' : '') + '>' + MSG_UNNAMED_367 + '</option></select></td><td><input id="' + soy.$$escapeHtml(opt_data.id) + '_field_name_' + soy.$$escapeHtml(opt_data.idx) + '" type="text" class="input-block-level withdraw-method-editor-field-name"  data-uniform-label="' + MSG_UNNAMED_369 + '" data-uniform-filters="non_space"  data-uniform-validators="required ; validateAlphaNum"  placeholder="" required value="' + soy.$$escapeHtml(opt_data.data['name']) + '"></td><td><input id="' + soy.$$escapeHtml(opt_data.id) + '_field_label_' + soy.$$escapeHtml(opt_data.idx) + '" type="text" class="input-block-level withdraw-method-editor-field-label"  data-uniform-label="' + MSG_UNNAMED_371 + '"  data-uniform-validators="required" placeholder="" required value="' + soy.$$escapeHtml(opt_data.data['label']) + '"></td><td><input id="' + soy.$$escapeHtml(opt_data.id) + '_field_placeholder_' + soy.$$escapeHtml(opt_data.idx) + '" type="text" class="input-block-level withdraw-method-editor-field-placeholder" placeholder="" value="' + soy.$$escapeHtml(opt_data.data['placeholder']) + '"></td><td><select id="' + soy.$$escapeHtml(opt_data.id) + '_field_type_' + soy.$$escapeHtml(opt_data.idx) + '" class="withdraw-method-editor-field-type"><option value="text" ' + ((opt_data.data['type'] == 'text') ? 'selected' : '') + '>' + MSG_UNNAMED_373 + '</option></select></td><td><select id="' + soy.$$escapeHtml(opt_data.id) + '_field_validator_' + soy.$$escapeHtml(opt_data.idx) + '" class="withdraw-method-editor-field-validator"><option value="required" ' + ((opt_data.data['validator'] == 'required') ? 'selected' : '') + ' >Required</option><option value="validateEmail" ' + ((opt_data.data['validator'] == 'validateEmail') ? 'selected' : '') + ' >Email</option><option value="validateNumber" ' + ((opt_data.data['validator'] == 'validateNumber') ? 'selected' : '') + ' >Number</option><option value="validateInteger" ' + ((opt_data.data['validator'] == 'validateInteger') ? 'selected' : '') + ' >Integer</option><option value="validateAlpha" ' + ((opt_data.data['validator'] == 'validateAlpha') ? 'selected' : '') + ' >Alpha</option><option value="validateUsername" ' + ((opt_data.data['validator'] == 'validateUsername') ? 'selected' : '') + ' >Username</option><option value="validateAlphaNum" ' + ((opt_data.data['validator'] == 'validateAlphaNum') ? 'selected' : '') + ' >Alpha Numeric</option><option value="validateAddress" ' + ((opt_data.data['validator'] == 'validateAddress') ? 'selected' : '') + '  >BTC Address</option></select></td><td><input id="' + soy.$$escapeHtml(opt_data.id) + '_field_value_' + soy.$$escapeHtml(opt_data.idx) + '" type="text" class="input-block-level withdraw-method-editor-field-value" placeholder="" value="' + soy.$$escapeHtml(opt_data.data['value']) + '"></td><td><button id="' + soy.$$escapeHtml(opt_data.id) + '_field_delete_' + soy.$$escapeHtml(opt_data.idx) + '" data-index="' + soy.$$escapeHtml(opt_data.idx) + '" class="btn btn-mini btn-danger withdraw-method-editor-field-action-delete withdraw-method-editor-field-action">' + MSG_UNNAMED_375 + '</button></td></tr>';
  return output;
};


bitex.ui.withdraw_method_editor.templates.WithdrawMethodEditor = function(opt_data) {
  var output = '';
  /** @desc Method name label */
  var MSG_UNNAMED_377 = goog.getMsg('Method name');
  /** @desc Method description label */
  var MSG_UNNAMED_379 = goog.getMsg('Description');
  /** @desc Method disclaimer label */
  var MSG_UNNAMED_381 = goog.getMsg('Disclaimer');
  /** @desc Method Fees label */
  var MSG_UNNAMED_383 = goog.getMsg('Fees');
  /** @desc Percent fee placeholder */
  var MSG_UNNAMED_385 = goog.getMsg('Percent fee');
  /** @desc Fixed fee placeholder */
  var MSG_UNNAMED_387 = goog.getMsg('Fixed fee');
  /** @desc Method fields header */
  var MSG_UNNAMED_389 = goog.getMsg('Custom fields');
  /** @desc Method field header */
  var MSG_UNNAMED_391 = goog.getMsg('Side');
  /** @desc Method field header */
  var MSG_UNNAMED_393 = goog.getMsg('Name');
  /** @desc Method field header */
  var MSG_UNNAMED_395 = goog.getMsg('Label');
  /** @desc Method field header */
  var MSG_UNNAMED_397 = goog.getMsg('Placeholder');
  /** @desc Method field header */
  var MSG_UNNAMED_399 = goog.getMsg('Type');
  /** @desc Method field header */
  var MSG_UNNAMED_401 = goog.getMsg('Validator');
  /** @desc Method field header */
  var MSG_UNNAMED_403 = goog.getMsg('Value');
  /** @desc Method field header */
  var MSG_UNNAMED_405 = goog.getMsg('Actions');
  /** @desc Add field button label */
  var MSG_UNNAMED_407 = goog.getMsg('Add field');
  /** @desc Method fields header */
  var MSG_UNNAMED_409 = goog.getMsg('Limits');
  /** @desc Limit table field header */
  var MSG_UNNAMED_411 = goog.getMsg('Verification Level');
  /** @desc Limit table field header */
  var MSG_UNNAMED_413 = goog.getMsg('Enabled');
  /** @desc Limit table field header */
  var MSG_UNNAMED_415 = goog.getMsg('Min');
  /** @desc Limit table field header */
  var MSG_UNNAMED_417 = goog.getMsg('Max');
  /** @desc Limit table field header */
  var MSG_UNNAMED_431 = goog.getMsg('Min');
  /** @desc Limit table field header */
  var MSG_UNNAMED_433 = goog.getMsg('Max');
  output += '<div class="row-fluid"><div class="span12"><form id="' + soy.$$escapeHtml(opt_data.id) + '" class="form-horizontal span6"  data-uniform-control-holder-class="control-group"><fieldset><div class="control-group"><label class="control-label">' + MSG_UNNAMED_377 + '</label><div class="controls"><input id="' + soy.$$escapeHtml(opt_data.id) + '_name"  type="text" class="input-block-level"  data-uniform-validators="required; validateAlphaNum" data-uniform-filters="non_space" placeholder="" required value="' + soy.$$escapeHtml(opt_data.model['method']) + '"></div></div><div class="control-group"><label class="control-label">' + MSG_UNNAMED_379 + '</label><div class="controls"><input id="' + soy.$$escapeHtml(opt_data.id) + '_description"  type="text" class="input-block-level" data-uniform-validators="required" placeholder="" required value="' + soy.$$escapeHtml(opt_data.model['description']) + '"></div></div><div class="control-group"><label class="control-label">' + MSG_UNNAMED_381 + '</label><div class="controls"><input id="' + soy.$$escapeHtml(opt_data.id) + '_placeholder"  type="text" class="input-block-level" placeholder="" value="' + soy.$$escapeHtml(opt_data.model['disclaimer']) + '"></div></div><div class="control-group"><label class="control-label">' + MSG_UNNAMED_383 + '</label><div class="controls"><div class="row-fluid"><div class="span6"><div class="input-append"><input id="' + soy.$$escapeHtml(opt_data.id) + '_percent_fee" type="text" class="input-block-level" autocomplete="off" maxlength="4" data-uniform-filters="positive_number" data-uniform-validators="required ; validateNumber; validateMin 0; validateMax 25" label="' + MSG_UNNAMED_385 + '" required value="' + soy.$$escapeHtml(opt_data.model['percent_fee']) + '"><span class="add-on">%</span></div></div><div class="span6"><div class="input-prepend"><span class="add-on">' + soy.$$escapeHtml(opt_data.model['currency']) + '</span><input id="' + soy.$$escapeHtml(opt_data.id) + '_fixed_fee" type="text" class="input-block-level" autocomplete="off" data-uniform-filters="positive_number" data-uniform-validators="required ; validateNumber; validateMin 0" label="' + MSG_UNNAMED_387 + '" required value="' + soy.$$escapeHtml(opt_data.model['fixed_fee']) + '"></div></div></div></div></div><div class="control-group"><table id="' + soy.$$escapeHtml(opt_data.id) + '_table" class="table table-condensed table-bordered table-hover"><thead><tr><td colspan="7" style="text-align: center">' + MSG_UNNAMED_389 + '</td></tr><tr><th> ' + MSG_UNNAMED_391 + '</th><th> ' + MSG_UNNAMED_393 + ' </th><th> ' + MSG_UNNAMED_395 + ' </th><th> ' + MSG_UNNAMED_397 + ' </th><th> ' + MSG_UNNAMED_399 + ' </th><th> ' + MSG_UNNAMED_401 + ' </th><th> ' + MSG_UNNAMED_403 + ' </th><th> ' + MSG_UNNAMED_405 + ' </th></tr></thead><tbody>';
  var fieldList185 = opt_data.model['fields'];
  var fieldListLen185 = fieldList185.length;
  for (var fieldIndex185 = 0; fieldIndex185 < fieldListLen185; fieldIndex185++) {
    var fieldData185 = fieldList185[fieldIndex185];
    output += bitex.ui.withdraw_method_editor.templates.WithdrawMethodFieldLineEditor({id: opt_data.id, idx: fieldIndex185, data: fieldData185});
  }
  output += '</tbody></table><button id="' + soy.$$escapeHtml(opt_data.id) + '_add" class="btn btn-primary"><i class="icon-white icon-plus"></i> ' + MSG_UNNAMED_407 + '</button></div><div class="control-group"><table id="' + soy.$$escapeHtml(opt_data.id) + '_limits" class="table table-condensed table-bordered table-hover"><thead><tr><td colspan="4" style="text-align: center">' + MSG_UNNAMED_409 + '</td></tr><tr><th>' + MSG_UNNAMED_411 + '</th><th>' + MSG_UNNAMED_413 + '</th><th>' + MSG_UNNAMED_415 + '</th><th>' + MSG_UNNAMED_417 + '</th></tr></thead><tbody>';
  for (var level214 = 0; level214 < 6; level214++) {
    output += '<tr>';
    switch (level214) {
      case 0:
        /** @desc Limit table field header */
        var MSG_UNNAMED_419 = goog.getMsg('Unverified');
        output += '<td>' + MSG_UNNAMED_419 + '</td>';
        break;
      case 1:
        /** @desc Limit table field header */
        var MSG_UNNAMED_421 = goog.getMsg('Pending');
        output += '<td>' + MSG_UNNAMED_421 + '</td>';
        break;
      case 2:
        /** @desc Limit table field header */
        var MSG_UNNAMED_423 = goog.getMsg('Progress');
        output += '<td>' + MSG_UNNAMED_423 + '</td>';
        break;
      case 3:
        /** @desc Limit table field header */
        var MSG_UNNAMED_425 = goog.getMsg('Verified - Level I');
        output += '<td>' + MSG_UNNAMED_425 + '</td>';
        break;
      case 4:
        /** @desc Limit table field header */
        var MSG_UNNAMED_427 = goog.getMsg('Verified - Level II');
        output += '<td>' + MSG_UNNAMED_427 + '</td>';
        break;
      case 5:
        /** @desc Limit table field header */
        var MSG_UNNAMED_429 = goog.getMsg('Verified - Level III');
        output += '<td>' + MSG_UNNAMED_429 + '</td>';
        break;
    }
    output += '<td><input id="' + soy.$$escapeHtml(opt_data.id) + '_level_' + soy.$$escapeHtml(level214) + '_enabled" type="checkbox" class="withdraw-method-editor-limit-enabled"' + ((opt_data.model['limits'] && opt_data.model['limits'][level214] && opt_data.model['limits'][level214]['enabled']) ? 'checked' : '') + '/></td><td><input id="' + soy.$$escapeHtml(opt_data.id) + '_level_' + soy.$$escapeHtml(level214) + '_min" name="min_' + soy.$$escapeHtml(level214) + '" type="text" autocomplete="off" class="input-small withdraw-method-editor-limit-max" data-uniform-label="' + MSG_UNNAMED_431 + '" data-uniform-validators="validateNumber; validateMin 0" data-uniform-filters="positive_number" data-uniform-meta="display If ' + soy.$$escapeHtml(opt_data.id) + '_level_' + soy.$$escapeHtml(level214) + '_enabled == \'on\'; enable If ' + soy.$$escapeHtml(opt_data.id) + '_level_' + soy.$$escapeHtml(level214) + '_enabled == \'on\'" value="' + ((opt_data.model['limits'] && opt_data.model['limits'][level214] && opt_data.model['limits'][level214]['min']) ? soy.$$escapeHtml(opt_data.model['limits'][level214]['min']) : '0') + '"' + ((opt_data.model['limits'] && opt_data.model['limits'][level214] && ! opt_data.model['limits'][level214]['enabled']) ? 'style="display: none;" disabled' : '') + '/></td><td><input id="' + soy.$$escapeHtml(opt_data.id) + '_level_' + soy.$$escapeHtml(level214) + '_max" name="max_' + soy.$$escapeHtml(level214) + '" type="text" autocomplete="off" class="input-small withdraw-method-editor-limit-max" data-uniform-label="' + MSG_UNNAMED_433 + '" data-uniform-validators="validateNumber" data-uniform-filters="positive_number" data-uniform-meta="display If ' + soy.$$escapeHtml(opt_data.id) + '_level_' + soy.$$escapeHtml(level214) + '_enabled == \'on\'; enable If ' + soy.$$escapeHtml(opt_data.id) + '_level_' + soy.$$escapeHtml(level214) + '_enabled == \'on\'"" value="' + ((opt_data.model['limits'] && opt_data.model['limits'][level214] && opt_data.model['limits'][level214]['max']) ? soy.$$escapeHtml(opt_data.model['limits'][level214]['max']) : '') + '"' + ((opt_data.model['limits'] && opt_data.model['limits'][level214] && ! opt_data.model['limits'][level214]['enabled']) ? 'style="display: none;" disabled' : '') + '/></td></tr>';
  }
  output += '</tbody></table></div></fieldset></form></div></div>';
  return output;
};
