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

    app.directive('ngSortable', [function() {
        return {
            scope: {
                'itemArray': '=ngSortable',
                'listItem': '@',
                'orderChanged': '&'
            },
            link: function(scope, element, attrs) {
                scope.container = element;
                var sort = new Sortable(element[0], {
                    draggable: scope.listItem,
                    onUpdate: function(event) {

                        var element = event.item;
                        var originalPosition = angular.element(element).attr('ng-sortable-pos');
                        var slice = Array.prototype.slice;
                        var elementList = slice.call(scope.container.children());
                        var newPosition = elementList.indexOf(element);
                        var itemArrayClone = scope.itemArray.slice();
                        var movedItem = itemArrayClone.splice(originalPosition, 1)[0];
                        itemArrayClone.splice(newPosition, 0, movedItem);
                        scope.itemArray = itemArrayClone;
                        scope.$apply();
                        scope.orderChanged();
                    }
                });
            }
        };
    }]);

    return app;
}));