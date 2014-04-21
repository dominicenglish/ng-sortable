(function(angular, Sortable, factory) {
    'use strict';

    if (typeof define === 'function' && define.amd) {
        define(['angular'], function(angular) {
            return factory(angular, Sortable);
        });
    } else {
        return factory(angular, Sortable);
    }
}(angular || null, Sortable || null, function(angular, Sortable) {
    var app = angular.module('de.ng-sortable', []);

    app.directive('ngSortable', ['$parse', '$timeout', function($parse, $timeout) {
        return {
            scope: {
                'itemArray': '=ngSortable',
                'listItemSelector': '@ngSortableItemSelector',
                'orderChanged': '&ngSortableOnChange'
            },
            link: function(scope, element, attrs) {
                var container = element,
                    originalContainerContent,
                    sort,
                    slice = Array.prototype.slice;

                // Create rubaxa sortable list
                sort = new Sortable(element[0], {
                    draggable: scope.listItemSelector,
                    onUpdate: onUpdate
                });

                // Events for when a drag begins
                container
                    .on('mousedown', onGrab)
                    .on('touchstart', onGrab)
                    .on('selectstart', onGrab);

                // When a drag event is begun
                function onGrab(event) {
                    // Save the current state of the list
                    originalContainerContent = container.contents();
                }

                // When the list order is updated
                function onUpdate(event) {
                    // Get the item that was clicked on
                    var clickedItem = angular.element(event.item);

                    // Get the Angular scope attached to the clicked element
                    var itemScope = clickedItem.scope();

                    // Get the original position of the dragged element
                    var originalPosition = itemScope.$index;

                    // Get the current order of dom nodes
                    var elementList = slice.call(container.children());

                    // Get the new position of the dragged element
                    var newPosition = elementList.indexOf(clickedItem[0]);

                    // Reset position of all dom elements (so ng-repeat's comments
                    // don't get broken). Note that append works here because the
                    // appended elements are references and so pull the re-ordered
                    // elements back into the original order.
                    container.append(originalContainerContent);

                    scope.$apply(function() {
                        // Adjust ng-repeat's array to match the drag changes
                        var movedItem = scope.itemArray.splice(originalPosition, 1)[0];
                        scope.itemArray.splice(newPosition, 0, movedItem);
                    });

                    // Call the user provided on change method
                    scope.orderChanged();
                }
            }
        };
    }]);

    return app;
}));