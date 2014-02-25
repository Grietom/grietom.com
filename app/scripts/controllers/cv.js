'use strict';

/*global app*/

app.controller('CvCtrl', function ($scope, $location) {
	$scope.title = 'Cv & Resume';
	$scope.selection = null;

	$scope.viewChange = function (view) {
		$scope.selection = view;
	};

	$scope.isActive = function(route) {
		return route === $location.path();
	};
});