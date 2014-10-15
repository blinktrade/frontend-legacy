// This file was automatically generated from change_password.soy.
// Please don't edit this file by hand.

goog.provide('bitex.ui.ChangePassword.templates');

goog.require('soy');


bitex.ui.ChangePassword.templates.ChangePassword = function(opt_data) {
  var output = '';
  /** @desc Change password view title on change password component */
  var MSG_UNNAMED_43 = goog.getMsg('Change Your password');
  /** @desc Old Password label on change password component */
  var MSG_UNNAMED_45 = goog.getMsg('Current password');
  /** @desc Password label on change password component */
  var MSG_UNNAMED_47 = goog.getMsg('New password');
  /** @desc Confirm new password label on change password component */
  var MSG_UNNAMED_49 = goog.getMsg('Confirm new password');
  /** @desc change password button on change password component */
  var MSG_UNNAMED_51 = goog.getMsg('Change Password');
  output += '<div class="section-title"><h3 class="bitex-view-title">' + MSG_UNNAMED_43 + ' </h3></div><div id="' + soy.$$escapeHtml(opt_data.id) + '"><div class="clearfix"><label for="' + soy.$$escapeHtml(opt_data.id) + '_oldpassword">' + MSG_UNNAMED_45 + '</label><div class="input"><input autocapitalize="off" autocorrect="off" id="' + soy.$$escapeHtml(opt_data.id) + '_oldpassword" name="username" type="password" ></div></div><div class="clearfix"><label for="' + soy.$$escapeHtml(opt_data.id) + '_password">' + MSG_UNNAMED_47 + '</label><div class="input"><input id="' + soy.$$escapeHtml(opt_data.id) + '_password" placeholder="" name="password" type="password"></div></div><div class="clearfix"><label for="' + soy.$$escapeHtml(opt_data.id) + '_repeat_password">' + MSG_UNNAMED_49 + '</label><div class="input"><input id="' + soy.$$escapeHtml(opt_data.id) + '_repeat_password" placeholder="" name="repeat_password" type="password"></div></div><div class="actions"><button id="' + soy.$$escapeHtml(opt_data.id) + '_change" class="btn btn-primary">' + MSG_UNNAMED_51 + '</button></div></div>';
  return output;
};
