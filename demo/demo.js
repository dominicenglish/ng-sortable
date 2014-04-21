angular.module('sortable', ['de.ng-sortable'])

.controller('sortableController', function($scope) {
    var items = ['hello', 'there', 'how', 'are', 'you'];
    $scope.items = items;

    $scope.orderChanged = function() {
        console.log('order changed!');
    };

    $scope.$watchCollection('items', function(newItems, oldItems) {
        console.log('old', oldItems);
        console.log('new', newItems);
    });
});