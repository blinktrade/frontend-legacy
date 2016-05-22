goog.provide('bootstrap3.TabBarRenderer');

goog.require('goog.ui.TabBarRenderer');
goog.require('bootstrap3.TabRenderer');
goog.require('bootstrap3.Tab');

/**
 * Renderer for {@link goog.ui.TabBar}s, based on the {@code goog.ui.TabBarRenderer} code.
 * <pre>
 *   &lt;div class="ui-tabs ui-widget ui-widget-content ui-corner-all">
 *     ...(tabs here)...
 *   &lt;/div>
 * </pre>
 * @constructor
 * @extends {goog.ui.TabBarRenderer}
 * @author Nicholas Albion
 */
bootstrap3.TabBarRenderer = function() {
	goog.ui.TabBarRenderer.call(this);
};
goog.inherits(bootstrap3.TabBarRenderer, goog.ui.TabBarRenderer);
goog.addSingletonGetter(bootstrap3.TabBarRenderer);

/**
 * Default CSS class to be applied to the root element of components rendered
 * by this renderer.
 * @type {string}
 */
bootstrap3.TabBarRenderer.CSS_CLASS = 'nav';


/**
 * Returns the CSS class name to be applied to the root element of all tab bars
 * rendered or decorated using this renderer.
 * @return {string} Renderer-specific CSS class name.
 * @override
 */
bootstrap3.TabBarRenderer.prototype.getCssClass = function() {
	return bootstrap3.TabBarRenderer.CSS_CLASS;
};

///**
// * Creates the location-to-class lookup table.
// * @private
// */
//bootstrap3.TabBarRenderer.prototype.createClassByLocationMap_ = function() {
//	/**
//	 * Map of locations to location-specific structural class names,
//	 * precomputed and cached on first use to minimize object allocations
//	 * and string concatenation.
//	 * @type {Object}
//	 * @private
//	 */
//	this.classByLocation_ = goog.object.create(
////		goog.ui.TabBar.Location.TOP, goog.getCssName(baseClass, 'top'),
////		goog.ui.TabBar.Location.BOTTOM, goog.getCssName(baseClass, 'bottom'),
//		goog.ui.TabBar.Location.START, 'nav-stacked', //goog.getCssName(baseClass, 'start'),
//		goog.ui.TabBar.Location.END, 'nav-stacked'); //goog.getCssName(baseClass, 'end'));
//};

/**
 * @param {goog.ui.TabBar}
 */
bootstrap3.TabBarRenderer.prototype.getClassNames = function(tabBar) {
	var classNames = ['nav', 'nav-tabs'];
	if( tabBar.getOrientation() == goog.ui.Container.Orientation.VERTICAL ) {
		classNames.push('nav-stacked');
		classNames.push('col-sm-2');
	}
//	if (!tabBar.isEnabled()) {
//		classNames.push('disabled');
//	}
	return classNames;
};

bootstrap3.TabBarRenderer.prototype.createDom = function(tabBar) {
	var element = tabBar.getDomHelper().createDom('ul',
		this.getClassNames(tabBar).join(' '));

//	goog.dom.setFocusableTabIndex(element, false);
	return element;
};

/**
* Default implementation of {@code canDecorate}; returns true if the element
* is a DIV, false otherwise.
* @param {Element} element Element to decorate.
* @return {boolean} Whether the renderer can decorate the element.
* @override
*/
bootstrap3.TabBarRenderer.prototype.canDecorate = function(element) {
	return element.tagName == 'UL';
}; 

bootstrap3.TabBarRenderer.prototype.getDecoratorForChild = function(element) {
	if( element.tagName == 'LI' ) {
		return new bootstrap3.Tab(element.innerText, bootstrap3.TabRenderer.getInstance());
	} else {
		goog.ui.registry.getDecorator(element);
	}
};
