goog.provide('bitex.view.CardView');
goog.require('bitex.view.View');
goog.require('bitex.ui.CardList');
goog.require('bitex.ui.CardDataEntry');

goog.require('bitex.templates');

/**
 * @param {*} app
 * @param {goog.dom.DomHelper=} opt_domHelper
 * @constructor
 * @extends {bitex.view.View}
 */
bitex.view.CardView = function(app, opt_domHelper) {
  bitex.view.View.call(this, app, opt_domHelper);

};
goog.inherits(bitex.view.CardView, bitex.view.View);

/**
 * @type {bitex.ui.CardList}
 */
bitex.view.CardView.prototype.card_list_;

bitex.view.CardView.prototype.enterView = function() {
  goog.base(this, 'enterView');
  this.recreateComponents_();
};

bitex.view.CardView.prototype.exitView = function() {
  goog.base(this, 'exitView');
  this.destroyComponents_();
};

bitex.view.CardView.prototype.enterDocument = function() {
  goog.base(this, 'enterDocument');

  var handler = this.getHandler();
  var new_card_button_el = goog.dom.getElement('id_btn_new_card');
  if (goog.isDefAndNotNull(new_card_button_el)) {
    handler.listen(new_card_button_el, goog.events.EventType.CLICK, this.onNewCardButtonClick_);
  }

  handler.listen(this, bitex.ui.CardList.EventType.REVOKE_API_KEY, this.onDisableCard_);
};

/**
 * @override
 * @protected
 */
bitex.view.CardView.prototype.exitDocument = function() {
  goog.base(this, 'exitDocument');
  this.destroyComponents_();
};


/**
 * @param {goog.events.Event} e
 * @private
 */
bitex.view.CardView.prototype.onDisableCard_ = function(e){
  var card_key = e.target.getAPIKey();
  var conn = this.getApplication().getBitexConnection();
  var requestId = parseInt( 1e7 * Math.random(), 10 );
  var handler = this.getHandler();

  conn.revokeAPIKey(card_key, requestId);
  handler.listenOnce(conn, bitex.api.BitEx.EventType.API_KEY_REVOKE_RESPONSE + '.' + requestId, function(e){
    this.card_list_.reload();
  }, this);
};

/**
 * @private
 */
bitex.view.CardView.prototype.onNewCardButtonClick_ = function(){
  if (this.getChildCount() > 1){
    this.removeChildAt(1, true);
  }
  var model = this.getApplication().getModel();
  var card_model = {};
  card_model['methods'] = [];

  goog.object.forEach(model.get('Broker')['WithdrawStructure'], function(withdrawal_methods, currency){
    goog.array.forEach(withdrawal_methods, function(withdrawal_method){
      if(!this.getApplication().isCryptoCurrency(currency)) {
        card_model['methods'].push({
            'id': withdrawal_method['method'],
            'currency': currency,
            'description': withdrawal_method['description'],
            'method': withdrawal_method['method'],
            'fields': withdrawal_method['fields']
        });
      }

    }, this);
  }, this);


  var data_entry = new bitex.ui.CardDataEntry(card_model);

  this.addChild(data_entry, true);
  goog.style.showElement(this.getChildAt(0).getElement(), false);
  goog.style.showElement(goog.dom.getElement('id_btn_new_card'), false);

  var handler = this.getHandler();
  var conn = this.getApplication().getBitexConnection();
  var requestId = parseInt(1e7 * Math.random(), 10);


  handler.listenOnce(data_entry, bitex.ui.CardDataEntry.EventType.CANCEL, function(){
    this.removeChildAt(1, true);
    goog.style.showElement(goog.dom.getElement('id_btn_new_card'), true);
    goog.style.showElement(this.getChildAt(0).getElement(), true);
  }, this);

  handler.listenOnce(data_entry, bitex.ui.CardDataEntry.EventType.SUBMIT, function(e){

    var label  = e.target.getLabel();
    var cardId = e.target.getCardID();

    goog.style.showElement(goog.dom.getElement('id_btn_new_card'), true);
    goog.style.showElement(this.getChildAt(0).getElement(), true);

    conn.requestCreateCard(label, cardId);

  }, this);

  handler.listenOnce(conn, bitex.api.BitEx.EventType.API_KEY_CREATE_RESPONSE + '.' + requestId, function(e){
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
    var MSG_CARD_CREATED_DIALOG_TITLE = goog.getMsg('API Key Created');

    this.getApplication().showDialog(dlgContent,MSG_CARD_CREATED_DIALOG_TITLE);

    this.card_list_.reload();
  }, this);
};


/**
 * @private
 */
bitex.view.CardView.prototype.recreateComponents_ = function() {
  var handler = this.getHandler();

  this.card_list_ = new bitex.ui.CardList();
  handler.listen(this.card_list_,
                 bitex.ui.DataGrid.EventType.REQUEST_DATA,
                 this.onApiListRequestData_);

  handler.listen(this.getApplication().getBitexConnection(),
               bitex.api.BitEx.EventType.API_KEY_LIST_RESPONSE, this.onApiKeyListResponse_);

  this.addChild(this.card_list_, true);

  goog.style.showElement(goog.dom.getElement('id_btn_new_card'), true);
  goog.style.showElement(this.getChildAt(0).getElement(), true);
};

bitex.view.CardView.prototype.destroyComponents_ = function( ) {
  var handler = this.getHandler();

  if (goog.isDefAndNotNull(this.card_list_)) {
    handler.unlisten(this.card_list_,
                     bitex.ui.DataGrid.EventType.REQUEST_DATA,
                     this.onApiListRequestData_);

    handler.unlisten(this.getApplication().getBitexConnection(),
                     bitex.api.BitEx.EventType.API_KEY_LIST_RESPONSE, this.onApiKeyListResponse_);
  }

  this.removeChildren(true);
};

bitex.view.CardView.prototype.onApiListRequestData_ = function(e) {
  var page = e.options['Page'];
  var limit = e.options['Limit'];

  var conn = this.getApplication().getBitexConnection();
  conn.requestAPIKeyList(page, limit);
};

/**
 * @param {goog.events.Event} e
 */
bitex.view.CardView.prototype.onApiKeyListResponse_ = function(e) {
  if (!goog.isDefAndNotNull(this.card_list_)) {
    return;
  }

  var msg = e.data;
  this.card_list_.setResultSet(msg['ApiKeyListGrp'], msg['Columns']);
};
