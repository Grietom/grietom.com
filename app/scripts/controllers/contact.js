'use strict';


/*global app*/

app.controller('ContactCtrl', function ($scope, $location, $http) {
	$scope.title = 'Contact';
	$scope.contact = {
		email: '',
		message: ''
	};

	$scope.isActive = function(route) {
		return route === $location.path();
	};

	$scope.sendmail = function(){
		$http.post('http://grietom.com/main/rest', $scope.contact)
			.success(function (a, b, c) {
				console.log('Success');
				console.log($scope.contact);
				console.log(a);
				console.log(b);
				console.log(c);
			})
			.error(function (a, b, c) {
				console.log('Error');
				console.log($scope.contact);
				console.log(a);
				console.log(b);
				console.log(c);
			});
	};
});