goog.provide('bitex.ui.WebCamQR');

goog.require('bitex.ui.WebCamQR.templates');
goog.require('goog.ui.Component');

/**
 * @param {Object} opt_model
 * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
 *
 * @extends {goog.ui.Component}
 * @constructor
 */
bitex.ui.WebCamQR = function(element_result, opt_model, opt_domHelper){
  goog.base(this, opt_domHelper);

  this.element_result = element_result;
};
goog.inherits(bitex.ui.WebCamQR, goog.ui.Component);

/**
 * @const
 * @type {number}
 * @private
 */
bitex.ui.WebCamQR.prototype.INTERVAL_ = 250;

/**
 * @type {string}
 */
bitex.ui.WebCamQR.prototype.element_result;

/**
 * @type {object}
 * @private
 */
bitex.ui.WebCamQR.prototype.stream_;

/** @override */
bitex.ui.WebCamQR.prototype.decorateInternal = function(element) {
  this.setElementInternal(element);
};

/** @override */
bitex.ui.WebCamQR.prototype.createDom = function() {
  var el = goog.soy.renderAsElement(bitex.ui.WebCamQR.templates.Video, {
    id: this.makeId('webcam_qr')
  });

  this.setElementInternal(el);
};

/** @override */
bitex.ui.WebCamQR.prototype.enterDocument = function() {
  goog.base(this, 'enterDocument');

  var id = this.makeId('webcam_qr');

  this.video_  = goog.dom.getElement(id+'_video');
  this.canvas_ = goog.dom.getElement(id+'_canvas');
  this.setUserMedia_();

  this.context_ = this.canvas_.getContext('2d');
  this.width_   = this.canvas_.width;
  this.height_  = this.canvas_.height;
};

bitex.ui.WebCamQR.prototype.destroy = function() {
  this.stream_.getVideoTracks()[0].stop();

  goog.dom.removeChildren(this.getElement());
};

bitex.ui.WebCamQR.prototype.setUserMedia_ = function() {
  navigator.getUserMedia  = navigator.getUserMedia
                         || navigator.webkitGetUserMedia
                         || navigator.mozGetUserMedia
                         || navigator.msGetUserMedia
                         || navigator.oGetUserMedia;

  if(navigator.getUserMedia) {
    navigator.getUserMedia({
      video: true,
      audio: false
    }, this.handleVideo_.bind(this), this.handleError_.bind(this));
  }
};

bitex.ui.WebCamQR.prototype.handleVideo_ = function(stream) {
  this.stream_    = stream;
  this.video_.src = window.URL.createObjectURL(stream);

  this.interval_ = setInterval(this.saveImage_.bind(this), this.INTERVAL_);
};

bitex.ui.WebCamQR.prototype.handleError_ = function(error) {
  console.error(error);
  this.destroy_();
};

bitex.ui.WebCamQR.prototype.drawImage_ = function() {
  if(this.video_.paused || this.video_.ended) {
    return false;
  }

  this.context_.drawImage(this.video_, 0, 0, this.width_, this.height_);
};

bitex.ui.WebCamQR.prototype.saveImage_ = function() {
  this.drawImage_();
  try {
    this.decodeImage_();
  } catch (e) {}
};

bitex.ui.WebCamQR.prototype.decodeImage_ = function() {
  window.qrcode.decode(this.canvas_, function(result) {
    goog.dom.forms.setValue(this.element_result, result.replace('bitcoin:',''));

    this.destroy();

    clearInterval(this.interval_);
  }.bind(this));
};

