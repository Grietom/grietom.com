'use strict';


/*global app*/

app.controller('ContactCtrl', function ($scope, $location, $http) {
	$scope.title = 'Contact';
	$scope.message = {
		style: '',
		message: ''
	};
	$scope.contact = {
		email: '',
		message: ''
	};

	$scope.isActive = function(route) {
		return route === $location.path();
	};

	$scope.sendmail = function(){

		$http.post('/main/rest/index.php/sendmail', $scope.contact)
			.success(function (data) {
				$scope.message.style = 'alert-success';
				// $scope.message.error = 1;
				$scope.message.message = data;
			})
			.error(function (data) {
				$scope.message.style = 'alert-error';
				// $scope.message.error = 0;
				$scope.message.message = data;
			});
	};

	window.scope = $scope;
});