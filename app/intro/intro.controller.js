'use strict';

angular.module('GoInvestApp')
	.controller('IntroCtrl', function ($http, $scope, $firebaseObject) {

		console.log('IntroCtrl');

	  var ref = new Firebase("https://gonehacking-goinvest.firebaseio.com/");

	  // download the data into a local object
	  var syncObject = $firebaseObject(ref);

	  // putting a console.log here won't work, see below
	  syncObject.$bindTo($scope, "data");

	})