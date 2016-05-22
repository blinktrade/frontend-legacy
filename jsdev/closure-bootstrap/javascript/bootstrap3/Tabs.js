goog.provide('bootstrap3.Tabs');

goog.require('bootstrap3.TabBarRenderer');
goog.require('bootstrap3.TabRenderer');
goog.require('bootstrap3.utils');

goog.require('goog.dom');
goog.require('goog.events.EventTarget');
goog.require('goog.ui.TabBar');
goog.require('goog.net.XhrIo');
goog.require('goog.Uri');
goog.require('goog.History');
goog.require('goog.net.cookies');
goog.require('goog.debug.Logger');

/**
 * @fileoverview Based on JQueryTabs, but uses styles from http://twitter.github.com/bootstrap/components.html#navs:
 *
 * <pre>
 * 	&lt;div id="profileTabs">
 &lt;ul class="nav nav-tabs">
 &lt;li>&lt;a href="#searchTab">Search</a></li>
 &lt;li>&lt;a href="ajax/saved_search.html">Saved Profile&lt;/a></li>
 &lt;li>&lt;a href="#addTabTab">Add&lt;/li>
 &lt;/ul>
 &lt;div id="searchTab">
 &lt;/div>
 &lt;div id="addTabTab">
 &lt;/div>
 &lt;/div>
 </pre>
 @author Nicholas Albion
 */

/**
 * JQueryUI-style tabs container with Bootstrap styling - based on goog.ui.TabPane
 *
 * @param {string=} opt_cookieName - eg: 'tab-index'. Provide a name if the last selected tab should be saved in a cookie and #
 * @param {string=} opt_class 'nav-stacked' or 'nav-justified'
 * @param {goog.ui.ContainerRenderer=} opt_renderer Renderer used to render or
 *     decorate the container; defaults to {@link goog.ui.ContainerRenderer}.
 * @param {goog.dom.DomHelper=} opt_domHelper DOM helper, used for document interaction.
 *
 * @extends {goog.ui.Disposable} rather than Component or Container (this class manages a goog.ui.TabBar and the panes)
 * @constructor
 */
bootstrap3.Tabs = function( opt_cookieName, opt_class, opt_renderer, opt_domHelper ) {
//	this.setLocation('nav-stacked' == opt_class ? goog.ui.TabBar.Location.START : goog.ui.TabBar.Location.TOP);
//	goog.ui.Container.call(this, this.getOrientation(),
//						opt_renderer || bootstrap3.TabsRenderer.getInstance(), opt_domHelper);
//	goog.ui.Component.call(this, opt_domHelper);
	goog.Disposable.call(this);

	/**
	 * @type {goog.ui.TabBar.Location}
	 * @private
	 */
	this.location_ = 'nav-stacked' == opt_class ?
				//goog.dom.classes.has(element, 'nav-stacked') ?
				goog.ui.TabBar.Location.START :
				goog.ui.TabBar.Location.TOP;

	this.tabBar_ = new goog.ui.TabBar( this.location_,
										opt_renderer || bootstrap3.TabBarRenderer.getInstance() );

	this.extraClass_ = opt_class;

	/**
	 * DomHelper used to interact with the document, allowing components to be
	 * created in a different window.  This property is considered protected;
	 * subclasses of Component may refer to it directly.
	 * @type {goog.dom.DomHelper}
	 * @protected
	 * @suppress {underscore}
	 */
//	this.dom_ = opt_domHelper || goog.dom.getDomHelper();

	/**
	 * @type {string|undefined}
	 */
	this.cookieName_ = opt_cookieName;

//	/**
//	 * @type {goog.History}
//	 * @private
//	 */
//	this.history_ = new goog.History();

//  /**
//   * @type {Array.<string>}
//   * @private
//   */
//  this.tabElements_ = [];

//  /**
//   * @type {Object.<string, Element>}
//   * @private
//   */
//  this.contentPanes_ = {};
};
goog.inherits(bootstrap3.Tabs, goog.Disposable);

/**
 * @type {goog.debug.Logger}
 * @private
 */
bootstrap3.Tabs.logger_ = goog.debug.Logger.getLogger('bootstrap3.Tabs');

/**
 * @type {goog.ui.TabBar}
 * @private
 */
bootstrap3.Tabs.prototype.tabBar_;

/**
 * @type {HTMLDivElement}
 * @private
 */
bootstrap3.Tabs.prototype.visibleContentPane_;

/**
 * @type {goog.History}
 * @private
 */
bootstrap3.Tabs.prototype.history_;

bootstrap3.Tabs.prototype.fade = true;

/**
 * @type {goog.events.Key}
 * @private
 */
bootstrap3.Tabs.prototype.selectHandlerKey_;

///**
// * @param {Element} element Element to decorate.
// */
//bootstrap3.Tabs.prototype.decorate = function(element) {
//	this.decorateInternal(element);
//	this.enterDocument();
//};

///**
// * @override
// */
//bootstrap3.Tabs.prototype.createDom = function() {
//	this.decorateInternal( /** @type {HTMLLIElement} */ (this.dom_.createElement('ul')) );
//};

/**
 * @param {HTMLUlElement} tabBarEl
 * @param {HTMLElement} containerElement - parent node of tabBarEl
 */
bootstrap3.Tabs.prototype.createAndAddContentWrapperElement = function( tabBarEl, containerElement ) {
	var contentWrapperEl = this.tabBar_.getDomHelper().createDom('div',
		this.tabBar_.getOrientation() == goog.ui.Container.Orientation.VERTICAL ?
			'tab-content col-sm-10' : 'tab-content');

	var location = this.tabBar_.getLocation();
	if( location == goog.ui.TabBar.Location.BOTTOM ||
		location == goog.ui.TabBar.Location.END )
	{
		goog.dom.insertSiblingBefore( contentWrapperEl, tabBarEl );
	} else {
		containerElement.appendChild( contentWrapperEl );
	}

	return contentWrapperEl;
};


/**
 * Decorates the given element as a TabBar and associates TabPanes with each Tab.
 * @param {Element} containerElement Element to decorate.
 * @override
 */
bootstrap3.Tabs.prototype.decorate = function(containerElement) {
//	this.setElementInternal(element);

	var tabBarEl = goog.dom.classes.has(containerElement, 'nav') ?
						containerElement :
						goog.dom.getElementByClass('nav', containerElement); // goog.dom.getFirstElementChild(element);

//	goog.dom.setFocusableTabIndex( tabBarEl, false );

//	goog.ui.registry.setDecoratorByClassName( 'tab',
//		function() {
//			return new goog.ui.Tab(null, bootstrap3.Tabs.TabRenderer.getInstance());
//		}
//	);

	var selectedTabIndex = this.calculateSelectedTabIndex(tabBarEl);

//	this.addChild( this.tabBar_, false );
	//this.tabBar_.setFocusable(false);
	//this.tabBar_.setParent( this );
	if( !this.tabBar_.isInDocument() ) {
		try {
			this.tabBar_.decorate( tabBarEl );
		} catch( e ) {
			console.error(e);
		}
	}

	this.initialiseTabPanesFromTabs( tabBarEl,
		goog.dom.getElementsByTagNameAndClass('li', undefined, tabBarEl),
		selectedTabIndex );

	// addChild(child, opt_render)
	// addChildAt(child, insertionIndex, opt_render)

	this.tabBar_.setSelectedTabIndex( selectedTabIndex );		// or this.tabBar_.setSelectedTab( selectedTab );

	this.listenToTabEvents_();
};

/**
 * @param {HTMLELement} containerElement
 */
bootstrap3.Tabs.prototype.render = function( containerElement ) {
	this.tabBar_.render( containerElement );

	var tabBarEl = this.tabBar_.getElement();
	if( this.extraClass_ ) {
		goog.dom.classes.add(tabBarEl, this.extraClass_);
	}

	this.createAndAddContentWrapperElement( tabBarEl, containerElement );

	this.decorate(containerElement);
};

/**
 * If an &lt;input> control with id="history_state" is found in the page,
 * parse the value as either:
 * 	- JSON: <code>{"${cookieName_}": index, ...}</code>
 * 	- or as a 0-based index
 * Otherwise, attempt to read the cookie
 * @param {HTMLElement} tabBarEl
 * @returns {number}
 */
bootstrap3.Tabs.prototype.calculateSelectedTabIndex = function(tabBarEl) {
	var selectedTabIndex = 0,
		historyCtrl = /** @type {HTMLInputElement=} */(goog.dom.getElement('history_state')),
		selectedTabId;
	if( historyCtrl == null ) {
		if( this.cookieName_ ) {
			selectedTabId = goog.net.cookies.get(this.cookieName_, '0');
		}
	} else if( historyCtrl.value ) {
		var historyValue = historyCtrl.value;
		if( historyValue.charAt(0) == '{' ) {
			if( this.cookieName_ ) {
				historyValue = historyValue.replace(/'/g, '"');
				selectedTabId = JSON.parse(historyValue)[this.cookieName_];
			}
		} else {
			selectedTabId = historyCtrl.value;
		}
		this.history_ = new goog.History( false, undefined, historyCtrl );
		//(historyToken is mapped to selectedTabIndex on the server if the cookie "tab-index" is set) var historyToken = this.history_.getToken();
	}

	if( selectedTabId !== undefined ) {
		if( /^tab_/.test(selectedTabId) ) {
			var selectedTab = this.tabBar_.getChild(selectedTabId);
			if( selectedTab ) {
				selectedTabIndex = this.tabBar_.indexOfChild(selectedTab);
			}
		} else {
			selectedTabIndex = parseInt( selectedTabId );
		}
	}

	if( selectedTabIndex == 0 ) {
		var active = tabBarEl.getElementsByClassName('active')[0];
		selectedTabIndex = bootstrap3.utils.indexOfElementWithinParent(active);
	}
	return selectedTabIndex;
};

/**
 * @param {string} tabId
 */
bootstrap3.Tabs.prototype.storeTabIdInHistory = function( tabId ) {
	var historyValue = (this.history_ ? this.history_.getToken() : window.location.hash) || {};
	// update the historyValue with tabId or {this.cookieName_: tabId}
	if( this.cookieName_ ) {
//		var underscore = tabId.indexOf('_');
//		tabIndex = tabIndex || underscore < 0 ? '0' : tabId.substring( 3, underscore ); 	// tabX_content
//			tabIndex = bootstrap3.utils.indexOfElementWithinParent()
		goog.net.cookies.set( this.cookieName_, '#' + tabId ); //tabIndex );

		if( /^tab_/.test(historyValue) ) {
			historyValue = historyValue.substring(1);
		}
		if( historyValue[0] == '{' ) {
			historyValue = JSON.parse(historyValue);
			historyValue[this.cookieName_] = tabId;
		} else {
			bootstrap3.Tabs.logger_.warning('overwriting history: ', historyValue);
			historyValue = {};
		}
		historyValue[this.cookieName_] = tabId;
		historyValue = JSON.stringify(historyValue);
	} else {
		historyValue = tabId;
	}

	//bootstrap3.Tabs.logger_.info('updating URL hash: ' + tabId); // + ', scrollTop: ' + scrollTop);
	if( this.history_ ) {
// TODO: decorate() actually expects an integer or a JSON string, eg: {cookieName:index,...}
		this.history_.setToken(historyValue);
	} else {
//					var uri = goog.Uri.parse(window.location);
//					uri.setFragment( tabId );
//					window.location = uri.toString();
		window.location.hash = '#' + historyValue;
	}
};


/**
 * @param {HTMLULElement} tabBarEl
 * @param {Array.<HTMLLIElement>} tabElements
 * @param {number} selectedTabIndex
 */
bootstrap3.Tabs.prototype.initialiseTabPanesFromTabs = function(tabBarEl, tabElements, selectedTabIndex) {
	var contentWrapperEl;

	// add the class names to each of the tab panes.
	// Function passed to forEach: (element, index, array)
	goog.array.forEach( tabElements, function(tabElement, index) {
		//tabElement.className = 'tab';
		//tabElement.onclick = function(){ return false; };
		var a = goog.dom.getFirstElementChild(tabElement),
			href = new goog.Uri(a.href);
//		if( !tabElement.id ) {
//			tabElement.id = 'tab' + index;
//		}
		a.onclick = function() { return false; };
		if( href.hasFragment() ) {
			// Content has already been provided, but we only want to show the selected tab
			var contentPaneId = href.getFragment(),
				contentPane = /** @type {HTMLElement} */(goog.dom.getElement( contentPaneId ));
			if( !contentPane ) {
				if( !contentWrapperEl ) {
					contentWrapperEl = goog.dom.getElementByClass( 'tab-content', tabBarEl.parentNode ) ||
						this.createAndAddContentWrapperElement( tabBarEl, tabBarEl.parentNode );
				}

				contentPane = goog.dom.createDom('div', {'id': contentPaneId});
				contentPane.innerHTML = this.tabBar_.getChildAt(index).getTabPaneContent();
				contentWrapperEl.appendChild( contentPane );
			}

			if( index != selectedTabIndex ) {
				goog.dom.classes.remove( tabElement, 'in', 'active' );
			}
				this.showTabContentPane_( contentPane, index == selectedTabIndex, tabElement.id );
//			if( this.fade ) {
//				if( index == selectedTabIndex ) {
//					goog.dom.classes.add( contentPane, 'tab-pane', 'fade', 'in', 'active' );
//				} else {
//					goog.dom.classes.add( contentPane, 'tab-pane', 'fade' );
//				}
//			} else {
//				if( index == selectedTabIndex ) {
//					goog.dom.classes.add( contentPane, 'tab-pane', 'active' );
//				} else {
//					goog.dom.classes.add( contentPane, 'tab-pane' );
//				}
//			}
			//goog.style.showElement( contentPane, false );
			bootstrap3.Tabs.decorateContentPane( contentPane, this.fade );
		}
	}, this );
};


/**
 * Attempt to automatically decorate the downloaded content
 * @param {HTMLElement} contentPane
 * @param {boolean} fade
 */
bootstrap3.Tabs.decorateContentPane = function( contentPane, fade ) {
	var elementToDecorate = contentPane.id != null ? contentPane : goog.dom.getFirstElementChild( contentPane );

	if( fade ) {
		goog.dom.classes.add( elementToDecorate, 'tab-pane', 'fade' );
	} else {
		goog.dom.classes.add( elementToDecorate, 'tab-pane' );
	}

	bootstrap3.Tabs.logger_.fine('decorateContentPane ' + elementToDecorate.id);
	var decorator = goog.ui.registry.getDecorator( elementToDecorate );
	if( decorator ) {
		decorator.decorate(elementToDecorate);
	}
};


/**
 * @param {string} title
 * @param {string} href - the URL (#id of element within page, or URL to load by AJAX)
 * @param {string|function|undefined} opt_content used when href is not an AJAX URL
 */
bootstrap3.Tabs.prototype.addChild = function( title, href, opt_content ) {
	var tab = new bootstrap3.Tab(title, opt_content );
//		match = /#(.+)/.exec(href);
//		tab.id_
	// Need to set href before calling addChild() because the renderer uses the href.
	tab.setHref( href );
	this.tabBar_.addChild( tab, true );
//	// seems more likely for this.tabs_.getChild(href) to work if we call
//	// setHref() after addChild(href)
//	tab.setHref( href );
};

/**
 * @param {goog.ui.Tab} tab
 * @param {boolean|undefined} opt_unrender
 * @return {goog.ui.Component|null}
 */
bootstrap3.Tabs.prototype.removeChild = function( tab, opt_unrender ) {

	// Remove the associated content pane from the DOM
	var tabElement = tab.getElement(),
		a = goog.dom.getFirstElementChild(tabElement),
		href = new goog.Uri(a.href);

	if( href.hasFragment() ) {
		var fragment = href.getFragment();
		bootstrap3.Tabs.logger_.fine('removing tab content pane' + fragment );
		var contentPane = goog.dom.getElement( fragment );

//I don't think we need to deselect the tab - hopefully the super impl will take care of that
//		if( contentPane === this.visibleContentPane_ ) {
//			this.doSelectTab_( this.tabBar_.get )
//		}
		goog.dom.removeNode( contentPane );
	}

//	this.showTabContentPane_( this.visibleContentPane_, false );

	// Remove the tab
	return bootstrap3.Tabs.superClass_.removeChild.call(this, tab, opt_unrender);
};


///**
// * Configures the container after its DOM has been rendered, and sets up event handling.
// * Overrides {@link goog.ui.Component#enterDocument}.
// * @override
// */
//bootstrap3.Tabs.prototype.enterDocument = function() {
//	this.history_ = new goog.History();

//	var tabs = this;

// Handle clicks on each tab
//	goog.events.listen( this.tabBar_, goog.ui.Component.EventType.SELECT,
//		function(e) {
//			var tab = e.target;
////			bootstrap3.Tabs.logger_.info('SELECT event: ' + tab);
////			tabs.doSelectTab_(tab);
//		}
//	);
//};

bootstrap3.Tabs.prototype.disposeInternal = function() {
//	bootstrap3.Tabs.superClass_.disposeInternal.call(this);

	goog.events.unlistenByKey(this.selectHandlerKey_);

	this.tabBar_.dispose();
	delete this.tabBar_;
//if the compiler complains about this.tabBar_.getHandler()
//	this.removeAllListeners();
//	if (this.eventHandler_) {
//		this.eventHandler_.dispose();
//		delete this.eventHandler_;
//	}
};

//bootstrap3.Tabs.prototype.getHandler = function() {
//	return new goog.events.EventHandler();
//};

bootstrap3.Tabs.prototype.listenToTabEvents_ = function() {
	// Listen for SELECT, UNSELECT, DISABLE, and HIDE events dispatched by tabs.
//	this.tabBar_.getHandler().
	this.selectHandlerKey_ = goog.events.listen(this.tabBar_,
												goog.ui.Component.EventType.SELECT,
												this.handleTabSelect, false, this);
//		listen(this, goog.ui.Component.EventType.DISABLE, this.handleTabDisable).
//		listen(this, goog.ui.Component.EventType.HIDE, this.handleTabHide);
//		[goog.events.EventType.SELECT, goog.events.EventType.CLICK],
//		goog.bind(this.tabBar_.setSelectedTab, this.tabBar_, tab));
};

//if the compiler complains about this.tabBar_.getHandler()
//bootstrap3.Tabs.prototype.getHandler = function() {
//	if (!this.eventHandler_) {
//		this.eventHandler_ = new goog.events.EventHandler(this);
//	}
//	return this.eventHandler_;
//};
//
//bootstrap3.Tabs.prototype.removeAllListeners = function() {
//	if (this.eventHandler_) {
//		this.eventHandler_.removeAll();
//	}
//};


bootstrap3.Tabs.prototype.setStacked = function(stacked) {
	this.tabBar_.setLocation(stacked ? goog.ui.TabBar.Location.START : goog.ui.TabBar.Location.TOP);
};

bootstrap3.Tabs.prototype.setOrientation = function(orientation) {
	var element = this.tabBar_.getElement();
	if( element ) {
		goog.dom.classes.enable( element, 'nav-stacked',
								goog.ui.Container.Orientation.VERTICAL == orientation );
	}
	this.tabBar_.orientation_ = orientation;
};


/**
 * @returns {goog.ui.TabBar}
 */
bootstrap3.Tabs.prototype.getTabBar = function() {
	return this.tabBar_;
};

///** Make this work with Component/Container.addChild( this, boolean ) */
//bootstrap3.Tabs.prototype.getParent = function() {
//	return this.parent_; //tabBar_.getParent();
//};
//bootstrap3.Tabs.prototype.setParent = function(parent) {
//	this.parent_ = parent; //tabBar_.setParent(parent);
//};
//bootstrap3.Tabs.prototype.getId = function() {
//	return this.tabBar_.getId();
//};

/**
 * @param {number} selectedTabIndex
 */
bootstrap3.Tabs.prototype.setSelectedTabIndex = function (selectedTabIndex) {
	this.tabBar_.setSelectedTabIndex( selectedTabIndex );
};

/**
 * @param {function(goog.ui.Tab, number=)} f
 */
bootstrap3.Tabs.prototype.forEachTab = function( f ) {
	this.tabBar_.forEachChild( f );
};


bootstrap3.Tabs.prototype.handleTabSelect = function(e) {
	this.doSelectTab_( e.target );
};


/**
 * If the selected tab has a fragment URL, show the content pane with an ID matching the fragment.
 * Otherwise,
 * @param {goog.ui.Tab} tab
 * @private
 */
bootstrap3.Tabs.prototype.doSelectTab_ = function( tab ) {
	var tabElement = tab.getElement(),
		a = goog.dom.getFirstElementChild(tabElement),
		href = new goog.Uri(a.href),
		tabs = this;

	this.showTabContentPane_( /** @type {!HTMLDivElement} */(this.visibleContentPane_), false );
	if( href.hasFragment() ) {
		var fragment = href.getFragment();
		bootstrap3.Tabs.logger_.fine('re open tab ' + fragment );
		var contentPane = /** @type {!HTMLDivElement} */(goog.dom.getElement( fragment ));
		this.showTabContentPane_( contentPane, true, fragment );
	} else {
		bootstrap3.Tabs.logger_.fine('download content for tab ' + href);
		goog.net.XhrIo.send( href, function(event) {
			if( event.target.isSuccess() ) {
				// inject the content as a new div and update the <a>'s href to point at the tabPane
				var html = event.target.getResponseText(),
					tabPaneId = tab.getId() + '_content',
					contentPane = /** @type {HTMLElement} */(goog.dom.createDom('div', {id: tabPaneId},
						tabs.dom_.htmlToDocumentFragment(html) ));
				// TODO: use the util.getTempFrame() method to insert the responseText into our DOM?

				a.href = '#' + tabPaneId;
				//goog.dom.appendChild( tabElement.parentNode, newNode )
				goog.dom.insertSiblingAfter( contentPane, tabElement.parentNode );
//				goog.dom.classes.add( contentPane, 'tab-panel' );
				tabs.showTabContentPane_( contentPane, true, tabPaneId );
				bootstrap3.Tabs.decorateContentPane( contentPane, tabs.fade );
				tabs.dispatchEvent( new goog.events.Event( goog.events.EventType.LOAD, contentPane ) );
//			} else {
//			 	var status = event.target.getStatus();   		// 404
//			 	var statusText = event.target.getStatusText(); // not found
//				var json = event.target.getResponseJson();
			}
		});
	}
};


/**
 * @param {!HTMLDivElement} contentPane
 * @param {boolean} show
 * @param {string=} tabId - The URL fragment. eg: 'searchTab', 'tab1_content', 'addTabTab'.
 * 							Can be undefined if {@code show} is false
 * @private
 */
bootstrap3.Tabs.prototype.showTabContentPane_ = function( contentPane, show, tabId ) {
	if( contentPane ) {
		//if( show ) { goog.dom.classes.add( contentPane, 'tab-pane', 'fade', 'in', 'active' ); }
		goog.dom.classes.enable( contentPane, 'active', show );
		if( this.fade ) {
			goog.dom.classes.enable( contentPane, 'in', show );
		}

//		goog.style.showElement( contentPane, show );
		if( show ) {
			var scrollTop = window.document.body.scrollTop;

			this.storeTabIdInHistory( tabId );

			// reset the scroll position (setting window.location.hash scrolls to the anchor location)
//			window.document.body.scrollTop = scrollTop;
			window.scrollTo( window.document.body.scrollLeft, scrollTop );

			this.visibleContentPane_ = contentPane;
		}
	}
};


/**
 * @return {number}
 */
bootstrap3.Tabs.prototype.getSelectedTabIndex = function() {
	return this.tabBar_.getSelectedTabIndex();
};

/**
 * @return {Element}
 */
bootstrap3.Tabs.prototype.getCurrentContentPane = function() {
	return this.visibleContentPane_;
};

/**
 * @return {number}
 */
bootstrap3.Tabs.prototype.getMinWidth = function() {
	//return this.tabBar_.getContentElement().clientWidth;
	var el = this.tabBar_.getContentElement(),
		width = 8, //goog.style.getPaddingBox( el ).left * 2,
		i = this.tabBar_.getChildCount();
	while( i-- != 0 ) {
		el = this.tabBar_.getChildAt(i).getContentElement();
		width += (el.offsetWidth + 2);
	}
	return width;
};
