# ng-sortable
===========

Angular directive to enable drag and drop sorting. Works on touch devices. Utilises https://github.com/RubaXa/Sortable

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
Simply add the `drag-sort` directive to the list parent element
```html
<div class="list-container" drag-sort>
    <div class="list-item"></div>
    <div class="list-item"></div>
</div>
```

If you are using `ng-repeat` to output an array of items you can also an array reference to the `drag-sort` directive. The directive will then take car of updating the array order after each order change.
```html
<div class="list-container" drag-sort="items">
    <div class="list-item" ng-repeat="item in items">{{item}}</div>
</div>
```

There is an optional `onUpdate` method that will be run after order updates are complete.
```html
<div class="list-container" drag-sort="items" on-update="myOnUpdateMethod()">
    <div class="list-item" ng-repeat="item in items">{{item}}</div>
</div>
```

