'use strict';

console.log('app.js');

angular.module('GoInvestApp', ['firebase', 'ngRoute', 'highcharts-ng'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .when('/intro', {
        templateUrl: 'app/intro/index.html',
        controller: 'IntroCtrl'
      })
      .when('/explore', {
        templateUrl: 'app/explore/index.html',
        controller: 'ExploreCtrl'
      })
      .when('/diy', {
        templateUrl: 'app/diy/index.html',
        controller: 'DiyCtrl'
      })
      .when('/league', {
        templateUrl: 'app/league/index.html',
        controller: 'LeagueCtrl'
      })
      .when('/portfolio', {
        templateUrl: 'app/portfolio/index.html',
        controller: 'PortfolioCtrl'
      })
      .when('/clone', {
        templateUrl: 'app/clone/index.html',
        controller: 'CloneCtrl'
      })
      .when('/admin', {
        templateUrl: 'app/admin/index.html',
        controller: 'AdminCtrl'
      })
      .when('/test', {
        templateUrl: 'app/test/test.html',
        controller: 'TestCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
;