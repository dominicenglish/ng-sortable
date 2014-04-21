# ng-sortable
===========

Angular directive to enable drag and drop sorting for ng-repeat. Works on touch devices. Utilises https://github.com/RubaXa/Sortable

## Install
Clone files from github or install with bower
```
bower install --save dominicenglish/ng-sortable
```

Include the Sortable script as well as the ng-sortable script
```html
<script src='/bower_components/Sortable/Sortable.js'></script>
<script src='/bower_components/ng-sortable/ng-sortable.js'></script>
```

Add ng-sortable as an angular dependency
```javascript
angular.module('myApp', ['de.ng-sortable']);
```

## Usage
Two basic steps:
- Add the `ng-sortable` directive to the list parent element and assign it the array you plan to loop over.
- Add an `ng-sortable-item-selector` attribute to the list parent and provide a selector for your child elements.
```html
<div class="list-container" ng-sortable="items" ng-sortable-item-selector=".list-item">
    <div class="list-item" ng-repeat="item in items">{{item}}</div>
</div>
```

There is an optional `ng-sortable-on-change` method that will be run after a change in order has been completed.
```html
<div class="list-container" ng-sortable="items" ng-sortable-item-selector=".list-item" ng-sortable-on-change="myOnChangeMethod()">
    <div class="list-item" ng-repeat="item in items">{{item}}</div>
</div>
```

