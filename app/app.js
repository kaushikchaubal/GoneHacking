'use strict';

console.log('app.js');

angular.module('GoInvestApp', ['firebase', 'ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .when('/test', {
        templateUrl: 'app/test/test.html',
      })
      .otherwise({
        redirectTo: '/'
      });
  })
;