goog.provide('bitex.view.APIView');
goog.require('bitex.view.View');
goog.require('bitex.ui.ApiList');

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
};

/**
 * @override
 * @protected
 */
bitex.view.APIView.prototype.exitDocument = function() {
  goog.base(this, 'exitDocument');
  this.destroyComponents_();
};

bitex.view.APIView.prototype.recreateComponents_ = function() {
    var handler = this.getHandler();

    this.api_list_ = new bitex.ui.ApiList();
    handler.listen(this.api_list_,
                   bitex.ui.DataGrid.EventType.REQUEST_DATA,
                   this.onApiListRequestData_);

    handler.listen(this.getApplication().getBitexConnection(),
                 bitex.api.BitEx.EventType.API_KEY_LIST_RESPONSE, this.onTradeRankResponse_);

    this.addChild(this.api_list_, true);
};

bitex.view.APIView.prototype.destroyComponents_ = function( ) {
    var handler = this.getHandler();

    if (goog.isDefAndNotNull(this.api_list_) ) {
      handler.unlisten(this.api_list_,
                       bitex.ui.DataGrid.EventType.REQUEST_DATA,
                       this.onApiListRequestData_);

      handler.unlisten(this.getApplication().getBitexConnection(),
                       bitex.api.BitEx.EventType.API_KEY_LIST_RESPONSE, this.onTradeRankResponse_);
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
bitex.view.APIView.prototype.onTradeRankResponse_ = function(e) {
  if (!goog.isDefAndNotNull(this.api_list_) ) {
    return
  }

  var msg = e.data;
  this.api_list_.setResultSet( msg['ApiKeyListGrp'], msg['Columns'] );
};
