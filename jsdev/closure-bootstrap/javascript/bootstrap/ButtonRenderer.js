goog.provide('bootstrap.ButtonRenderer');

goog.require('goog.ui.NativeButtonRenderer');
goog.require('goog.ui.registry');
goog.require('goog.ui.Component.State');


/**
 * @constructor
 * @extends {goog.ui.NativeButtonRenderer}
 */
bootstrap.ButtonRenderer = function() {
    goog.ui.NativeButtonRenderer.call(this);
};
goog.inherits(bootstrap.ButtonRenderer, goog.ui.NativeButtonRenderer);
goog.addSingletonGetter(bootstrap.ButtonRenderer);

/**
 * @const
 * @type string
 */
bootstrap.ButtonRenderer.CSS_CLASS = 'btn';

goog.ui.registry.setDecoratorByClassName(bootstrap.ButtonRenderer.CSS_CLASS,
    function() {
        return new goog.ui.Button(null, bootstrap.ButtonRenderer.getInstance());
    });

/**
 * @inheritDoc
 */
bootstrap.ButtonRenderer.prototype.getClassForState = function(state) {
    switch(state){
      case goog.ui.Component.State.DISABLED:
        return 'disabled';
      case goog.ui.Component.State.HOVER:
        return 'hover';
      case goog.ui.Component.State.ACTIVE:
      case goog.ui.Component.State.CHECKED:
        return 'active';
      case goog.ui.Component.State.SELECTED:
        return 'selected';
      case goog.ui.Component.State.FOCUSED:
        return 'focused';
      case goog.ui.Component.State.OPENED:
        return 'open';
    }
};

/**
 * Overrides {@link goog.ui.ButtonRenderer#canDecorate} by returning true only
 * if the element is an HTML button.
 * @param {Element} element Element to decorate.
 * @return {boolean} Whether the renderer can decorate the element.
 * @override
 */
bootstrap.ButtonRenderer.prototype.canDecorate = function(element) {
  return true;
};

/**
 * @inheritDoc
 */
bootstrap.ButtonRenderer.prototype.getCssClass = function() {
  return bootstrap.ButtonRenderer.CSS_CLASS;
};
