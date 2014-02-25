'use strict';

/*global app*/

/**
 * Changes the image from the nav element to text when mouse is hovered over it.  Works only on desktop
 * @return {object} returns an object that contains the logic
 */
app.directive('changeElementWhenHovered', function() {
  return {
    restrict: 'A', // A = Attribute, C = CSS Class, E = HTML Element, M = HTML Comment
    /*scope = current view scope, element = the html element that is being modified, attributes = whatever paraneters are given*/
    link: function(scope, element, attributes) {
      var original = element.attr('src');
      var replacement = attributes.tempsrc;

      element.bind('mouseenter', function() {
        console.log(original);
        console.log(replacement);
        console.log(attributes);
        console.log(element.attr('src'));
        element.attr('src', replacement);
        scope.$apply();

      });

      element.bind('mouseleave', function() {
        element.attr('src', original);
        scope.$apply();
      });

    }
  };
});