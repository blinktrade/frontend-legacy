goog.provide('bootstrap3.TabRenderer');

goog.require('goog.ui.TabRenderer');

/**
 * Rounded corner tab renderer for {@link goog.ui.Tab}s.
 * @constructor
 * @extends {goog.ui.TabRenderer}
 */
bootstrap3.TabRenderer = function() {
	goog.ui.TabRenderer.call(this);
};
goog.inherits(bootstrap3.TabRenderer, goog.ui.TabRenderer);
goog.addSingletonGetter(bootstrap3.TabRenderer);

/**
 * @const
 * @type {string}
 */
bootstrap3.TabRenderer.CSS_CLASS = '';

///**
// * @const
// * @type Object.<goog.ui.Component.State, string>
// */
//bootstrap3.TabRenderer.CLASS_BY_STATE = goog.object.create(
//	goog.ui.Component.State.DISABLED, 'disabled',
//	goog.ui.Component.State.SELECTED, 'active'
//);
//
///**
// * @const
// * @type Object.<string, goog.ui.Component.State>
// */
//bootstrap3.TabRenderer.STATE_BY_CLASS = goog.object.transpose(bootstrap3.TabRenderer.CLASS_BY_STATE);

/**
 * Returns the CSS class name to be applied to the root element of all tabs
 * rendered or decorated using this renderer.
 * @return {string} Renderer-specific CSS class name.
 * @override
 */
bootstrap3.TabRenderer.prototype.getCssClass = function() {
	return bootstrap3.TabRenderer.CSS_CLASS;
};

bootstrap3.TabRenderer.prototype.createDom = function(tab) {
	var dom = tab.getDomHelper(),
		element = dom.createDom('li',
								tab.isActive() ? 'active' :
									!tab.isEnabled() ? 'disabled' : null,
								dom.createDom('a', {'href':tab.getHref()},
									tab.getCaption()));

	this.setAriaStates(tab, element);

	var tooltip = tab.getTooltip();
	if (tooltip) {
		// Only update the element if the tab has a tooltip.
		this.setTooltip(element, tooltip);
	}

	element.firstElementChild.tabIndex = -1;
	return element;
};

bootstrap3.TabRenderer.prototype.decorate = function(tab, element) {
	element = bootstrap3.TabRenderer.superClass_.decorate.call(this, tab, element);
	element.firstElementChild.tabIndex = -1;
	return element;
};

/**
 * Updates the appearance of the control in response to a state change.
 * @param {goog.ui.Control} control Control instance to update.
 * @param {goog.ui.Component.State} state State to enable or disable.
 * @param {boolean} enable Whether the control is entering or exiting the state.
 * @override
 */
bootstrap3.TabRenderer.prototype.setState = function(control, state, enable) {
	// BootstrapUI applies ui-tabs-selected ui-state-active
	// this.getCssClass() returns ui-state, but we need to handle ui-tabs-selected here
	switch( state ) {
		case goog.ui.Component.State.SELECTED:
//		if( !enable ) {
			this.enableClassName( control, 'active', enable );
//		}
//		this.enableClassName( control, 'ui-tabs-selected', enable );
			if( enable ) {
				var tabBar = control.getParent();
//					tabs = tabBar.getParent();
				//bootstrap3.Tabs.logger_.info('selected tab, calling doSelectTab_(), ', control, ', tabBar: ', tabBar);
				//tabs.doSelectTab_( control );

				//goog.style.showElement( goog.dom.getElement( href.getFragment() ), enable );
			}
			break;
		case goog.ui.Component.State.ACTIVE:
			if( enable ) {
				this.enableClassName( control, 'active', enable );
			}
			break;
		default:
			bootstrap3.TabRenderer.superClass_.setState.call(this, control, state, enable);
	}
};
