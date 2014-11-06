goog.provide('bootstrap.Accordion');

goog.require('goog.events');

bootstrap.Accordion.closeAll = function(){
  var accordion_toggle_elements = goog.dom.getElementsByClass('accordion-toggle', document.body) ;
  goog.array.forEach(accordion_toggle_elements, function(element) {
    goog.dom.classes.add(element,'collapsed');
  });

  var accordion_body_elements = goog.dom.getElementsByClass('accordion-body', document.body) ;
  goog.array.forEach(accordion_body_elements, function(element) {
    goog.dom.classes.remove(element,'in');
    goog.style.setHeight(element, 0); // TODO: animate this
  });

};

bootstrap.Accordion.install = function() {
  goog.events.listen(document.body, goog.events.EventType.CLICK , function(e) {
    var accordion_element = e.target;

    var is_accordion_toggle = false;

    if (goog.dom.classes.has(accordion_element, 'accordion-toggle')) {
      is_accordion_toggle = true;
    } else {
      accordion_element = goog.dom.getAncestorByClass(accordion_element, 'accordion-toggle');

      if (goog.isDefAndNotNull(accordion_element)) {
        is_accordion_toggle = true;
      }
    }

    if (!is_accordion_toggle) {
      return;
    }

    e.preventDefault();
    e.stopPropagation();

    var accordion_group_element = goog.dom.getAncestorByClass(accordion_element, 'accordion-group');
    var accordion_body_element = goog.dom.getElementByClass('accordion-body', accordion_group_element) ;

    var is_collapsed = goog.dom.classes.has( accordion_element, 'collapsed' );
    if (is_collapsed ) {
      // lets close all other accordions
      bootstrap.Accordion.closeAll();

      // lets open the current accordion
      goog.dom.classes.add(accordion_body_element,'in');
      goog.style.setHeight(accordion_body_element, "auto"); // TODO: animate this
      goog.dom.classes.remove(accordion_element,'collapsed');
    } else {
      // let's close the current accordion
      goog.dom.classes.remove(accordion_body_element,'in');
      goog.style.setHeight(accordion_body_element, 0); // TODO: animate this
      goog.dom.classes.add(accordion_element,'collapsed');
    }
  });
};