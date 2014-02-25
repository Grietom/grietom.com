'use strict';

/*global app*/

app.controller('AboutmeCtrl', function ($scope, $location) {
	$scope.selection = null;
	$scope.title = 'About Me';

	$scope.viewChange = function (view) {
		$scope.selection = view;
	};

	$scope.isActive = function(route) {
		return route === $location.path();
	};

});