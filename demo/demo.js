angular.module('sortable', ['de.ng-sortable'])

.controller('sortableController', function($scope) {
    $scope.items = ['hello', 'there', 'how', 'are', 'you'];
});