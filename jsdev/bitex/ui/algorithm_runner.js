goog.provide('bitex.ui.AlgorithmRunner');
goog.provide('bitex.ui.AlgorithmRunner.EventType');

goog.require('bitex.ui.AlgorithmRunner.templates');
goog.require('goog.ui.Component');

goog.require('goog.dom.forms');
goog.require('goog.style');

goog.require('uniform.Uniform');

/**
 * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
 *
 * @extends {goog.ui.Component}
 * @constructor
 */
bitex.ui.AlgorithmRunner = function(opt_domHelper) {
  goog.base(this, opt_domHelper);

  this.uniform_ = new uniform.Uniform();
};
goog.inherits(bitex.ui.AlgorithmRunner, goog.ui.Component);

/**
 * @type {uniform.Uniform}
 * @private
 */
bitex.ui.AlgorithmRunner.prototype.uniform_;

/**
 * @type {Object}
 * @private
 */
bitex.ui.AlgorithmRunner.prototype.algo_definition_;

/**
 * @type {string}
 * @private
 */
bitex.ui.AlgorithmRunner.prototype.algo_;

/**
 * @type {Array.<string>}
 * @private
 */
bitex.ui.AlgorithmRunner.prototype.error_list_;


/**
 * @enum {string}
 */
bitex.ui.AlgorithmRunner.EventType = {
  PARAMS: 'algo-runner-params',
  STOP: 'algo-runner-stop',
  PARAMS_ERROR: 'algo-runner-params-error'
};


/**
 * Name of base CSS class
 * @type {string}
 * @private
 */
bitex.ui.AlgorithmRunner.BASE_CSS_CLASS_ = goog.getCssName('algo-runner');


/**
 * Returns base CSS class. This getter is used to get base CSS class part.
 * All CSS class names in component are created as:
 *   goog.getCssName(this.getBaseCssClass(), 'CLASS_NAME')
 * @return {string} Base CSS class.
 */
bitex.ui.AlgorithmRunner.prototype.getBaseCssClass = function() {
  return bitex.ui.AlgorithmRunner.BASE_CSS_CLASS_;
};

/** @override */
bitex.ui.AlgorithmRunner.prototype.decorateInternal = function(element) {
  this.setElementInternal(element);
};

/** @override */
bitex.ui.AlgorithmRunner.prototype.createDom = function() {

  var el = goog.soy.renderAsElement(bitex.ui.AlgorithmRunner.templates.AlgorithmRunner, {
    id: this.makeId('algo'),
    instanceID: this.getModel().instanceID,
    symbol: this.getModel().symbol,
    algorithmDefinition: this.getModel().algorithmDefinition,
    status: this.getModel().status
  });
  this.setElementInternal(el);
};

/** @override */
bitex.ui.AlgorithmRunner.prototype.enterDocument = function() {
  goog.base(this, 'enterDocument');

  this.uniform_.decorate( goog.dom.getElement( this.makeId('algo_form') ) );

  var handler = this.getHandler();
  handler.listen(goog.dom.getElement(this.makeId('algo_btn_update_params') ), goog.events.EventType.CLICK, this.onBtnParams_);
  handler.listen(goog.dom.getElement(this.makeId('algo_btn_stop') ), goog.events.EventType.CLICK, this.onBtnStop_);

  this.setStatus( this.getModel().status );
};


/**
 * @return {string}
 */
bitex.ui.AlgorithmRunner.prototype.getInstanceID = function() {
  return this.getModel().instanceID;
};

/**
 * @param {string} instance_id.
 */
bitex.ui.AlgorithmRunner.prototype.setInstanceID = function( instance_id ) {
  this.getModel().instanceID = instance_id;
  var instance_id_el = goog.dom.getElement(this.makeId('algo_instance_id'));

  goog.dom.setTextContent(instance_id_el, instance_id);
};

/**
 * @param {string} status.
 */
bitex.ui.AlgorithmRunner.prototype.setStatus = function(status) {
  this.getModel().status = status;

  var param_button_el = goog.dom.getElement(this.makeId('algo_btn_update_params'));
  var stop_button_el = goog.dom.getElement(this.makeId('algo_btn_stop'));

  /**
   * @desc button label on algorithm runner
   */
  var MSG_ALGO_RUNNER_BUTTON_LABEL_START = goog.getMsg('Start');

  /**
   * @desc button label on algorithm runner
   */
  var MSG_ALGO_RUNNER_BUTTON_LABEL_STARTING = goog.getMsg('Starting...');

  /**
   * @desc button label on algorithm runner
   */
  var MSG_ALGO_RUNNER_BUTTON_LABEL_UPDATE = goog.getMsg('Update');

  /**
   * @desc button label on algorithm runner
   */
  var MSG_ALGO_RUNNER_BUTTON_LABEL_STOP = goog.getMsg('Stop');


  /**
   * @desc button label on algorithm runner
   */
  var MSG_ALGO_RUNNER_BUTTON_LABEL_STOPPING = goog.getMsg('Stoping...');

  goog.style.showElement(stop_button_el, ( status == '2' || status == '3' ));
  goog.dom.forms.setDisabled( stop_button_el, (  status == '0' || status == '1' || status == '3' )  );
  goog.dom.forms.setDisabled( param_button_el, (  status == '1' || status == '3' ) );

  switch(status) {
    case '0':
      goog.dom.setTextContent(param_button_el, MSG_ALGO_RUNNER_BUTTON_LABEL_START);
      goog.dom.setTextContent(stop_button_el, MSG_ALGO_RUNNER_BUTTON_LABEL_STOP);
      break;
    case '1':
      goog.dom.setTextContent(param_button_el, MSG_ALGO_RUNNER_BUTTON_LABEL_STARTING);
      goog.dom.setTextContent(stop_button_el, MSG_ALGO_RUNNER_BUTTON_LABEL_STOP);
      break;
    case '2':
      goog.dom.setTextContent(param_button_el, MSG_ALGO_RUNNER_BUTTON_LABEL_UPDATE);
      goog.dom.setTextContent(stop_button_el, MSG_ALGO_RUNNER_BUTTON_LABEL_STOP);
      break;
    case '3':
      goog.dom.setTextContent(param_button_el, MSG_ALGO_RUNNER_BUTTON_LABEL_UPDATE);
      goog.dom.setTextContent(stop_button_el, MSG_ALGO_RUNNER_BUTTON_LABEL_STOPPING);
      break;
  };


};

/**
 * @return {Array.<string>}
 */
bitex.ui.AlgorithmRunner.prototype.getErrorList = function() {
  return this.error_list_;
};


/**
 * @param {goog.events.Event} e
 */
bitex.ui.AlgorithmRunner.prototype.onBtnStop_ = function(e){
  e.stopPropagation();
  e.preventDefault();

  this.dispatchEvent(bitex.ui.AlgorithmRunner.EventType.STOP);
};

/**
 * @param {goog.events.Event} e
 */
bitex.ui.AlgorithmRunner.prototype.onBtnParams_ = function(e){
  e.stopPropagation();
  e.preventDefault();

  this.error_list_ = this.uniform_.validate();
  if (this.error_list_.length > 0) {
    this.dispatchEvent(bitex.ui.AlgorithmRunner.EventType.PARAMS_ERROR);
    return;
  }

  this.getModel().params = this.uniform_.getAsJSON();

  this.dispatchEvent(bitex.ui.AlgorithmRunner.EventType.PARAMS);
};


