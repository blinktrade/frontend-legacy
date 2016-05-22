goog.provide('bootstrap3.Tab');

goog.require('goog.ui.Tab');
goog.require('bootstrap3.TabRenderer');

/**
 * Tab control, designed to be hosted in a {@link goog.ui.TabBar}.
 * @param {goog.ui.ControlContent} content Text caption or DOM structure to display as the tab's caption (if any).
 * @param {string|function|undefined} opt_content used when href is not an AJAX URL
 * @param {goog.ui.TabRenderer=} opt_renderer Optional renderer used to render or decorate the tab.
 * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM hepler, used for document interaction.
 * @constructor
 * @extends {goog.ui.Tab}
 */
bootstrap3.Tab = function(content, opt_content, opt_renderer, opt_domHelper) {
    goog.ui.Tab.call(this, content, opt_renderer || bootstrap3.TabRenderer.getInstance(), opt_domHelper)

	/**
	 * @type {string|Function|undefined}
	 * @private
	 */
	this.tabPaneContent_ = opt_content;
};
goog.inherits(bootstrap3.Tab, goog.ui.Tab);

//bootstrap3.Tab.prototype.setSelected = function(select) {
//	var parent = this.getParent();
//	if( parent ) {
//		if( select ) {
//			parent.handleTabSelect();
//		} else {
//			parent.handleTabUnselect();
//		}
//	}
//};

/**
 *
 * @param {string} href #id of element within page, or URL to load by AJAX
 */
bootstrap3.Tab.prototype.setHref = function( href ) {
	if( href !== undefined ) {
		if( href[0] == '#' ) {
			this.setId( href.replace('#', 'tab_') );
		}

		this.href_ = href; // || 'javascript:;';
	}
};

bootstrap3.Tab.prototype.getHref = function() {
	return this.href_;
};

/**
 * @returns {string}
 */
bootstrap3.Tab.prototype.getTabPaneContent = function() {
	if( 'function' == typeof this.tabPaneContent_ ) {
		return this.tabPaneContent_(this, this.href_);
	} else {
		return this.tabPaneContent_;
	}
};
