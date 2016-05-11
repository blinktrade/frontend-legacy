goog.provide('bitex.ui.Dialog');
goog.provide('bitex.ui.Dialog.ButtonSet');
goog.require('bitex.ui.Dialog.templates');

goog.require('goog.a11y.aria');
goog.require('goog.ui.Dialog');
goog.require('goog.style');

/**
 * It's not a great solution for overriding createDom like this
 * but looks like it's the only way
 * @constructor
 * @extends goog.ui.Dialog
 */
bitex.ui.Dialog = function() {
  goog.ui.Dialog.call(this, 'modal');
};
goog.inherits(bitex.ui.Dialog, goog.ui.Dialog);

/**
 * @suppress {accessControls}
 */
bitex.ui.Dialog.prototype.createDom = function() {
  var dom = this.getDomHelper();
  var element = goog.soy.renderAsElement( bitex.ui.Dialog.templates.Dialog, {
    id               : this.makeId('dialog'),
    title            : this.getTitle()
  });
  this.setElementInternal(element);

  goog.dom.classes.add(element, this.getCssClass());
  goog.dom.setFocusableTabIndex(element, true);
  goog.style.showElement(element, false);

  // Manages the DOM for background mask elements.
  this.manageBackgroundDom_();
  this.createTabCatcher_();


  this.titleEl_ = dom.getElementByClass('modal-header', this.getElement());
  this.titleCloseEl_ = dom.getElementByClass('close', this.titleEl_);
  this.titleTextEl_ = dom.getElementByClass('modal-title', this.titleEl_);
  this.contentEl_ = dom.getElementByClass('modal-body', this.getElement());
  this.buttonEl_ = dom.getElementByClass('modal-footer', this.getElement());
  this.titleId_ = this.titleId_ = this.titleEl_.id;

  goog.a11y.aria.setRole(element, 'dialog');
  goog.a11y.aria.setState(element, 'labelledby', this.titleId_ || '');

  // If setContent() was called before createDom(), make sure the inner HTML of
  // the content element is initialized.
  if (this.getContent()) {
      this.contentEl_.innerHTML = this.getContent();
  }
  goog.style.showElement(this.titleCloseEl_, this.getHasTitleCloseButton());

  // Render the buttons.
  if (this.buttons_) {
      this.buttons_.attachToElement(this.buttonEl_);
      var buttons = this.buttons_.getAllButtons();
      for (var i = 0; i < buttons.length; i++) {
          goog.dom.classes.add(buttons[i], 'btn');
      }
  }
  goog.style.showElement(this.buttonEl_, !!this.buttons_);
  this.setBackgroundElementOpacity(this.getBackgroundElementOpacity());
};

bitex.ui.Dialog.prototype.onShow = function(){
  goog.base(this, 'onShow');
  var modal = this.getElement();

  modal.style.display = 'block';
  if(!goog.dom.classlist.contains(modal, 'in')) {
    setTimeout(function() {
      goog.dom.classlist.add(modal, 'in');
    }, 10);
  }
};

/**
 * @suppress {accessControls}
 * @param {number} opacity
 */
bitex.ui.Dialog.prototype.setBackgroundElementOpacity = function(opacity) {
  goog.base(this, 'setBackgroundElementOpacity', opacity);

  if (this.getElement()) {
    var bgEl = this.getBackgroundElement();
    goog.dom.classes.add(bgEl, "modal-dialog-bg");
  }
};

/**
 * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper; see {@link
 *    goog.ui.Component} for semantics.
 * @constructor
 * @extends goog.ui.Dialog.ButtonSet
 */
bitex.ui.Dialog.ButtonSet = function(opt_domHelper) {
  goog.ui.Dialog.ButtonSet.call(this, opt_domHelper);
};
goog.inherits(bitex.ui.Dialog.ButtonSet, goog.ui.Dialog.ButtonSet);


/**
 * Renders the button set inside its container element.
 */
bitex.ui.Dialog.ButtonSet.prototype.render = function() {
  if (this.element_) {
    this.element_.innerHTML = '';
    var domHelper = goog.dom.getDomHelper(this.element_);
    goog.structs.forEach(this, function(caption, key) {
      var button = domHelper.createDom('button', {'name': key}, caption);
      if (key == this.defaultButton_) {
        button.className = 'btn btn-primary';
      } else {
        button.className = 'btn';
      }
      this.element_.appendChild(button);
    }, this);
  }
};


/**
 * @desc Standard caption for the dialog 'Print' button.
 * @private
 */
bitex.ui.Dialog.MSG_DIALOG_PRINT_ = goog.getMsg('Print');


/**
 * @desc Standard caption for the dialog 'Download' button.
 * @private
 */
bitex.ui.Dialog.MSG_DIALOG_DOWNLOAD_ = goog.getMsg('Download');

/**
 * The standard buttons (keys associated with captions).
 * @enum {!{key: string, caption: string}}
 */
bitex.ui.Dialog.ButtonSet.DefaultButtons = {
  PRINT: {
    key: 'print',
    caption: bitex.ui.Dialog.MSG_DIALOG_PRINT_
  },
  DOWNLOAD: {
    key: 'download',
    caption: bitex.ui.Dialog.MSG_DIALOG_DOWNLOAD_
  }
};

/**
 * Creates a new ButtonSet with a single 'OK' button, which is also set with
 * cancel button semantics so that pressing escape will close the dialog.
 * @return {!bitex.ui.Dialog.ButtonSet} The created ButtonSet.
 */
bitex.ui.Dialog.ButtonSet.createOk = function() {
  return new bitex.ui.Dialog.ButtonSet().
      addButton(goog.ui.Dialog.ButtonSet.DefaultButtons.OK, true, true);
};

/**
 * @return {!bitex.ui.Dialog.ButtonSet} The created ButtonSet.
 */
bitex.ui.Dialog.ButtonSet.createPrintOk = function() {
  return new bitex.ui.Dialog.ButtonSet().
      addButton(bitex.ui.Dialog.ButtonSet.DefaultButtons.PRINT).
      addButton(goog.ui.Dialog.ButtonSet.DefaultButtons.OK, true, true);
};

/**
 * @return {!bitex.ui.Dialog.ButtonSet} The created ButtonSet.
 */
bitex.ui.Dialog.ButtonSet.createDownloadPrintOk = function() {
  return new bitex.ui.Dialog.ButtonSet().
      addButton(bitex.ui.Dialog.ButtonSet.DefaultButtons.DOWNLOAD).
      addButton(bitex.ui.Dialog.ButtonSet.DefaultButtons.PRINT).
      addButton(goog.ui.Dialog.ButtonSet.DefaultButtons.OK, true, true);
};


/**
 * Creates a new ButtonSet with 'OK' (default) and 'Cancel' buttons.
 * @return {!bitex.ui.Dialog.ButtonSet} The created ButtonSet.
 */
bitex.ui.Dialog.ButtonSet.createOkCancel = function() {
  return new bitex.ui.Dialog.ButtonSet().
      addButton(goog.ui.Dialog.ButtonSet.DefaultButtons.OK, true).
      addButton(goog.ui.Dialog.ButtonSet.DefaultButtons.CANCEL, false, true);
};

/**
 * Creates a new ButtonSet with 'Cancel' button.
 * @return {!bitex.ui.Dialog.ButtonSet} The created ButtonSet.
 */
bitex.ui.Dialog.ButtonSet.createCancel = function() {
  return new bitex.ui.Dialog.ButtonSet().
      addButton(goog.ui.Dialog.ButtonSet.DefaultButtons.CANCEL, false, true);
};


/**
 * Creates a new ButtonSet with 'Yes' (default) and 'No' buttons.
 * @return {!bitex.ui.Dialog.ButtonSet} The created ButtonSet.
 */
bitex.ui.Dialog.ButtonSet.createYesNo = function() {
  return new bitex.ui.Dialog.ButtonSet().
      addButton(goog.ui.Dialog.ButtonSet.DefaultButtons.YES, true).
      addButton(goog.ui.Dialog.ButtonSet.DefaultButtons.NO, false, true);
};


/**
 * Creates a new ButtonSet with 'Yes', 'No' (default), and 'Cancel' buttons.
 * @return {!bitex.ui.Dialog.ButtonSet} The created ButtonSet.
 */
bitex.ui.Dialog.ButtonSet.createYesNoCancel = function() {
  return new bitex.ui.Dialog.ButtonSet().
      addButton(goog.ui.Dialog.ButtonSet.DefaultButtons.YES).
      addButton(goog.ui.Dialog.ButtonSet.DefaultButtons.NO, true).
      addButton(goog.ui.Dialog.ButtonSet.DefaultButtons.CANCEL, false, true);
};


/**
 * Creates a new ButtonSet with 'Continue', 'Save', and 'Cancel' (default)
 * buttons.
 * @return {!bitex.ui.Dialog.ButtonSet} The created ButtonSet.
 */
bitex.ui.Dialog.ButtonSet.createContinueSaveCancel = function() {
  return new bitex.ui.Dialog.ButtonSet().
      addButton(goog.ui.Dialog.ButtonSet.DefaultButtons.CONTINUE).
      addButton(goog.ui.Dialog.ButtonSet.DefaultButtons.SAVE).
      addButton(goog.ui.Dialog.ButtonSet.DefaultButtons.CANCEL, true, true);
};

