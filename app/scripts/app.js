'use strict';

var app = angular.module('grietomcomApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ngAnimate'
]);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        title: 'Home',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/aboutme', {
        title: 'About Me',
        templateUrl: 'views/aboutme.html',
        controller: 'AboutmeCtrl'
      })
      .when('/cv', {
        title: 'Resume & CV',
        templateUrl: 'views/cv.html',
        controller: 'CvCtrl'
      })
      .when('/contact', {
        title: 'Contact Me',
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

      /*remove the hashtag from url if html5 history is supported. !!Doesnt work with route titles!!*/
    // if(window.history && window.history.pushState){
    //   $locationProvider.html5Mode(true);
    // }
  });

app.run(['$location', '$rootScope', function($location, $rootScope) {
  $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
    /*jshint unused:false*/
    $rootScope.title = current.$$route.title;
  });
}]);