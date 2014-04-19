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
- Add an `ng-sortable-pos` attribute to each child element which matches its array index.
```html
<div class="list-container" ng-sortable="items">
    <div class="list-item" ng-repeat="item in items" ng-sortable-pos="{{$index}}">{{item}}</div>
</div>
```

There is an optional `order-changed` method that will be run after a change has been completed.
```html
<div class="list-container" ng-sortable="items" order-changed="myOnUpdateMethod()">
    <div class="list-item" ng-repeat="item in items" ng-sortable-pos="{{$index}}">{{item}}</div>
</div>
```

