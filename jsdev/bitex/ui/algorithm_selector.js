goog.provide('bitex.ui.AlgorithmSelector');
goog.provide('bitex.ui.AlgorithmSelector.EventType');

goog.require('bitex.ui.AlgorithmSelector.templates');
goog.require('goog.ui.Component');

goog.require('goog.dom.forms');
goog.require('goog.style');
goog.require('goog.string');

goog.require('goog.fs.FileReader');

/**
 * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
 *
 * @extends {goog.ui.Component}
 * @constructor
 */
bitex.ui.AlgorithmSelector = function(opt_domHelper) {
  goog.base(this, opt_domHelper);

  this.last_error_ = null;

};
goog.inherits(bitex.ui.AlgorithmSelector, goog.ui.Component);

/**
 * @type {string}
 * @private
 */
bitex.ui.AlgorithmSelector.prototype.last_error_;

/**
 * @type {Object}
 * @private
 */
bitex.ui.AlgorithmSelector.prototype.algo_definition_;

/**
 * @type {string}
 * @private
 */
bitex.ui.AlgorithmSelector.prototype.algo_;

/**
 * @enum {string}
 */
bitex.ui.AlgorithmSelector.EventType = {
  ERROR: 'algo-selector-error',
  SELECTED_ALGO: 'selected-algo'
};


/**
 * Name of base CSS class
 * @type {string}
 * @private
 */
bitex.ui.AlgorithmSelector.BASE_CSS_CLASS_ = goog.getCssName('algo-selector');


/**
 * Returns base CSS class. This getter is used to get base CSS class part.
 * All CSS class names in component are created as:
 *   goog.getCssName(this.getBaseCssClass(), 'CLASS_NAME')
 * @return {string} Base CSS class.
 */
bitex.ui.AlgorithmSelector.prototype.getBaseCssClass = function() {
  return bitex.ui.AlgorithmSelector.BASE_CSS_CLASS_;
};

/** @override */
bitex.ui.AlgorithmSelector.prototype.decorateInternal = function(element) {
  this.setElementInternal(element);
};

/** @override */
bitex.ui.AlgorithmSelector.prototype.createDom = function() {

  var el = goog.soy.renderAsElement(bitex.ui.AlgorithmSelector.templates.AlgorithmSelector, {
    id: this.makeId('algo')
  });
  this.setElementInternal(el);
};

/** @override */
bitex.ui.AlgorithmSelector.prototype.enterDocument = function() {
  goog.base(this, 'enterDocument');

  var handler = this.getHandler();

  handler.listen( goog.dom.getElement(this.makeId('algo_file')), goog.events.EventType.CHANGE, this.onChangeFile_ );
  handler.listen( goog.dom.getElement(this.makeId('algo_btn_clear')), goog.events.EventType.CLICK, this.onClearFile_ );
};

/**
 * @param  {goog.events.Event} e
 */
bitex.ui.AlgorithmSelector.prototype.onChangeFile_ = function(e) {
  var btn_browse_container_el = goog.dom.getElement(this.makeId('algo_btn_browse_container'));
  var btn_clear_el = goog.dom.getElement(this.makeId('algo_btn_clear'));
  var filename_el = goog.dom.getElement(this.makeId('algo_filename'));
  var file = e.target.files[0];

  if (goog.isDefAndNotNull(file)) {
    goog.dom.forms.setValue(filename_el,file.name );
    goog.style.showElement(btn_clear_el, true);
    goog.style.showElement(btn_browse_container_el, false);

    goog.fs.FileReader.readAsText(file).addCallback(this.onAlgoFileLoaded_, this);
  }
};

/**
 * @return {string=}
 */
bitex.ui.AlgorithmSelector.prototype.getLastError = function(){
  return this.last_error_;
};

/**
 * @return {Object}
 */
bitex.ui.AlgorithmSelector.prototype.getAlgoDefinition = function(){
  return this.algo_definition_;
};

/**
 * @return {string}
 */
bitex.ui.AlgorithmSelector.prototype.getAlgo = function(){
  return this.algo_;
};


/**
 * @param  {string} content
 */
bitex.ui.AlgorithmSelector.prototype.onAlgoFileLoaded_  = function(content){
  var begin_definition = content.indexOf('-----BEGIN ALGO DEFINITION-----');
  var end_definition = content.indexOf('-----END ALGO DEFINITION-----');

  var begin_algo = content.indexOf('-----BEGIN ALGO-----');
  var end_algo = content.indexOf('-----END ALGO-----');

  if (begin_definition < 0 || end_definition < 0 || begin_algo < 0 || end_algo < 0) {
    this.last_error_ = 'Invalid algorithm definition';
    this.dispatchEvent(bitex.ui.AlgorithmSelector.EventType.ERROR);
    return;
  }

  var algo_definition = content.substring( begin_definition + 31, end_definition);
  algo_definition = goog.string.stripNewlines(algo_definition);

  try {
    var algorithm = goog.json.parse(algo_definition);

    if (!goog.isDefAndNotNull(algorithm)) {
      this.onClearFile_(content);

      this.last_error_ = 'Invalid algorithm definition';
      this.dispatchEvent(bitex.ui.AlgorithmSelector.EventType.ERROR);
      return;
    }
  } catch( error ) {
    this.onClearFile_(content);
    this.last_error_ = error.message;
    this.dispatchEvent(bitex.ui.AlgorithmSelector.EventType.ERROR);
    return;
  }

  if (!goog.isDefAndNotNull(algorithm['id'])) {
    this.onClearFile_(content);
    this.last_error_ = 'Invalid field:id';
    this.dispatchEvent(bitex.ui.AlgorithmSelector.EventType.ERROR);
    return;
  }

  if (!goog.isDefAndNotNull(algorithm['description'])) {
    this.onClearFile_(content);
    this.last_error_ = 'Invalid field:description';
    this.dispatchEvent(bitex.ui.AlgorithmSelector.EventType.ERROR);
    return;
  }

  if (!goog.isDefAndNotNull(algorithm['params'])) {
    this.onClearFile_(content);
    this.last_error_ = 'Invalid field:params';
    this.dispatchEvent(bitex.ui.AlgorithmSelector.EventType.ERROR );
    return;
  }

  if (!goog.isDefAndNotNull(algorithm['constructor'])) {
    this.onClearFile_(content);
    this.last_error_ = 'Invalid field:constructor';
    this.dispatchEvent(bitex.ui.AlgorithmSelector.EventType.ERROR);
    return;
  }

  if (!goog.isDefAndNotNull(algorithm['destructor'])) {
    this.onClearFile_(content);
    this.last_error_ = 'Invalid field:destructor';
    this.dispatchEvent(bitex.ui.AlgorithmSelector.EventType.ERROR);
    return;
  }

  this.algo_definition_ = algorithm;
  this.algo_ = content.substring( begin_algo + 20, end_algo);
  this.dispatchEvent(bitex.ui.AlgorithmSelector.EventType.SELECTED_ALGO);
};

/**
 * @param  {goog.events.Event} e
 */
bitex.ui.AlgorithmSelector.prototype.onClearFile_ = function(e) {
  var btn_browse_container_el = goog.dom.getElement(this.makeId('algo_btn_browse_container'));
  var btn_clear_el = goog.dom.getElement(this.makeId('algo_btn_clear'));
  var filename_el = goog.dom.getElement(this.makeId('algo_filename'));
  var file_el = goog.dom.getElement(this.makeId('algo_file'));

  goog.dom.forms.setValue(filename_el,"" );
  goog.dom.forms.setValue(file_el,"" );
  goog.style.showElement(btn_clear_el, false);
  goog.style.showElement(btn_browse_container_el, true);
};
