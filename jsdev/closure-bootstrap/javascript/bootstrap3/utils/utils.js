goog.provide('bootstrap3.utils');

/**
 * @param {goog.events.BrowserEvent} event
 * @param {Element} element - the element we think we've moused out of
 * @return {boolean} true if leaving <code>element</code>,
 * 		false if moused into a child of <code>element</code> (and therefore still within <code>element</code>)
 */
bootstrap3.utils.checkMouseOut = function( event, element ) {
	// this is the element we've moved to
	var reltg = event.relatedTarget || event.target; // || event.toElement;
	while( reltg != undefined && reltg.tagName != 'BODY' ){
		if (reltg == element ){ return false; }
		reltg = reltg.parentNode;
	}
	return true;
};

/**
 * @param {Element} element
 * @return {number}
 */
bootstrap3.utils.indexOfElementWithinParent = function( element ) {
	var index = 0;

	while( element ) {
		element = goog.dom.getPreviousElementSibling( element );
		index++;
	}
	return index - 1;
};

/**
 * @see http://jsperf.com/getelements-by-tagname-and-attribute/3
 * @see #goog.dom.getElementsByTagNameAndClass_
 * @see #goog.dom.query
 * @param {string|null|undefined} opt_tag
 * @param {string} attrName
 * @param {string} attrValue
 * @param {Document | Element | null | undefined} opt_el
 * @return {{length: number}} Array-like list of elements (only a length
 *     property and numerical indices are guaranteed to exist).
 */
bootstrap3.utils.getElementsByTagNameAndAttribute = function( opt_tag, attrName, attrValue, opt_el ) {
	var parent = opt_el || document;

	if( goog.dom.canUseQuerySelector_(parent) ) {
		var query = '[' + attrName + '=' + attrValue + ']';
		if( opt_tag ) {
			query = opt_tag + query;
		}
		return parent.querySelectorAll(query);
	}

	var els = parent.getElementsByTagName(opt_tag || '*'),
		n = 0,	// index in matchingEls
		matchingEls = [];

	for (var i = 0, el; el = els[i]; i++) {
		if( el.getAttribute( attrName ) == attrValue ) {
			matchingEls[n++] = el;
		}
	}
	return matchingEls;
};
