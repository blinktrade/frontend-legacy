goog.provide('bitex.view.APIView');
goog.require('bitex.view.View');
goog.require('bitex.ui.ApiList');
goog.require('bitex.ui.APIKeyDataEntry');

goog.require('bitex.templates');

/**
 * @param {*} app
 * @param {goog.dom.DomHelper=} opt_domHelper
 * @constructor
 * @extends {bitex.view.View}
 */
bitex.view.APIView = function(app, opt_domHelper) {
  bitex.view.View.call(this, app, opt_domHelper);

};
goog.inherits(bitex.view.APIView, bitex.view.View);

/**
 * @type {bitex.ui.ApiList}
 */
bitex.view.APIView.prototype.api_list_;

bitex.view.APIView.prototype.enterView = function() {
  goog.base(this, 'enterView');
  this.recreateComponents_();
};

bitex.view.APIView.prototype.exitView = function() {
  goog.base(this, 'exitView');
  this.destroyComponents_();
};

bitex.view.APIView.prototype.enterDocument = function() {
  goog.base(this, 'enterDocument');

  var handler = this.getHandler();
  var new_api_key_button_el = goog.dom.getElement('id_btn_new_api_key');
  if (goog.isDefAndNotNull(new_api_key_button_el)) {
    handler.listen(new_api_key_button_el, goog.events.EventType.CLICK, this.onNewApiKeyButtonClick_);
  }

  handler.listen(this, bitex.ui.ApiList.EventType.REVOKE_API_KEY, this.onRevokeApi_);
};

/**
 * @override
 * @protected
 */
bitex.view.APIView.prototype.exitDocument = function() {
  goog.base(this, 'exitDocument');
  this.destroyComponents_();
};


/**
 * @param {goog.events.Event} e
 * @private
 */
bitex.view.APIView.prototype.onRevokeApi_ = function(e){
  var api_key = e.target.getAPIKey();
  var conn = this.getApplication().getBitexConnection();
  var requestId = parseInt( 1e7 * Math.random() , 10 );
  var handler = this.getHandler();

  conn.revokeAPIKey(api_key, requestId);
  handler.listenOnce(conn, bitex.api.BitEx.EventType.API_KEY_REVOKE_RESPONSE + '.' + requestId, function(e){
    this.api_list_.reload();
  }, this);
};

/**
 * @private
 */
bitex.view.APIView.prototype.onNewApiKeyButtonClick_ = function(){
  if (this.getChildCount() > 1){
    this.removeChildAt(1, true);
  }
  var model = this.getApplication().getModel();
  var api_model = {};
  api_model['is_broker'] = model.get('IsBroker');
  api_model['is_msb'] = model.get('IsMSB');
  api_model['deposit_methods'] = [];
  api_model['withdrawal_methods'] = [];
  goog.array.forEach(model.get('DepositMethods'), function(deposit_method) {
    api_model['deposit_methods'].push({
      'id': deposit_method.id,
      'currency': deposit_method.currency,
      'description':deposit_method.description });
  }, this);
  
  goog.object.forEach(model.get('Broker')['WithdrawStructure'], function (withdrawal_methods, currency){
    goog.array.forEach(withdrawal_methods, function(withdrawal_method){
      api_model['withdrawal_methods'].push({
        'id': withdrawal_method['method'],
        'currency': currency,
        'description': withdrawal_method['description']
      });
    }, this );
  }, this);



  var data_entry = new bitex.ui.APIKeyDataEntry(api_model);


  this.addChild(data_entry, true);
  goog.style.showElement(this.getChildAt(0).getElement(), false);
  goog.style.showElement(goog.dom.getElement('id_btn_new_api_key'), false);

  var handler = this.getHandler();
  var conn = this.getApplication().getBitexConnection();
  var requestId = parseInt( 1e7 * Math.random() , 10 );


  handler.listenOnce( data_entry,  bitex.ui.APIKeyDataEntry.EventType.CANCEL, function(){
    this.removeChildAt(1, true);
    goog.style.showElement(goog.dom.getElement('id_btn_new_api_key'), true);
    goog.style.showElement(this.getChildAt(0).getElement(), true);
  }, this);

  handler.listenOnce( data_entry,  bitex.ui.APIKeyDataEntry.EventType.SUBMIT, function(e){
    var label = e.target.getLabel();
    var permissions = e.target.getPermissionList();
    var ip_white_list = e.target.getIPWhiteList();

    conn.requestCreateAPIKey(label, permissions, ip_white_list, true, requestId );

    this.removeChildAt(1, true);
    goog.style.showElement(goog.dom.getElement('id_btn_new_api_key'), true);
    goog.style.showElement(this.getChildAt(0).getElement(), true);
  }, this);

  handler.listenOnce( conn, bitex.api.BitEx.EventType.API_KEY_CREATE_RESPONSE + '.' + requestId, function(e){
    var msg = e.data;
    var dlgContent = bitex.templates.APIKeyCreatedDialogContent({
      label     : msg['Label'] ,
      key       : msg['APIKey'],
      password  : msg['APIPassword'],
      secret    : msg['APISecret']
    });

    /**
     * @desc title of the API Key created dialog
     */
    var MSG_API_KEY_CREATED_DIALOG_TITLE = goog.getMsg('API Key Created');

    this.getApplication().showDialog(dlgContent,MSG_API_KEY_CREATED_DIALOG_TITLE);

    this.api_list_.reload();
  }, this);
};


/**
 * @private
 */
bitex.view.APIView.prototype.recreateComponents_ = function() {
  var handler = this.getHandler();

  this.api_list_ = new bitex.ui.ApiList();
  handler.listen(this.api_list_,
                 bitex.ui.DataGrid.EventType.REQUEST_DATA,
                 this.onApiListRequestData_);

  handler.listen(this.getApplication().getBitexConnection(),
               bitex.api.BitEx.EventType.API_KEY_LIST_RESPONSE, this.onApiKeyListResponse_);

  this.addChild(this.api_list_, true);

  goog.style.showElement(goog.dom.getElement('id_btn_new_api_key'), true);
  goog.style.showElement(this.getChildAt(0).getElement(), true);
};

bitex.view.APIView.prototype.destroyComponents_ = function( ) {
    var handler = this.getHandler();

    if (goog.isDefAndNotNull(this.api_list_) ) {
      handler.unlisten(this.api_list_,
                       bitex.ui.DataGrid.EventType.REQUEST_DATA,
                       this.onApiListRequestData_);

      handler.unlisten(this.getApplication().getBitexConnection(),
                       bitex.api.BitEx.EventType.API_KEY_LIST_RESPONSE, this.onApiKeyResponse_);
    }

    this.removeChildren(true);
};

bitex.view.APIView.prototype.onApiListRequestData_ = function(e) {
  var page = e.options['Page'];
  var limit = e.options['Limit'];

  var conn = this.getApplication().getBitexConnection();
  conn.requestAPIKeyList(page, limit);
};

/**
 * @param {goog.events.Event} e
 */
bitex.view.APIView.prototype.onApiKeyListResponse_ = function(e) {
  if (!goog.isDefAndNotNull(this.api_list_) ) {
    return
  }

  var msg = e.data;
  this.api_list_.setResultSet( msg['ApiKeyListGrp'], msg['Columns'] );
};
