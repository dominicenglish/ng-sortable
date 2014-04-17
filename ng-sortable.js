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

    app.directive('dragSort', [function() {
        return {
            scope: {
                'itemArray': '=dragSort',
                'onUpdate': '&'
            },
            controller: function($scope) {
                $scope.onUpdate = function(event) {
                    var item = event.item;
                    var originalPosition = angular.element(item).attr('position');
                    var slice = Array.prototype.slice;
                    var itemList = slice.call($scope.container.children());
                    var newPosition = itemList.indexOf(item);
                    var scopeItem = $scope.itemArray.splice(originalPosition, 1)[0];
                    $scope.itemArray.splice(newPosition, 0, scopeItem);
                    $scope.$apply();
                    $scope.onUpdate();
                };
            },
            link: function(scope, element, attrs) {
                scope.container = element;
                var sort = new Sortable(element[0], {
                    onUpdate: scope.onUpdate
                });
            }
        };
    }]);

    return app;
}));