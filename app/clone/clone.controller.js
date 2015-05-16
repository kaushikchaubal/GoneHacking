'use strict';

angular.module('GoInvestApp')
	.controller('CloneCtrl', function ($http, $scope, $firebaseObject) {

		console.log('CloneCtrl');

	  var ref = new Firebase("https://gonehacking-goinvest.firebaseio.com/");

	  // download the data into a local object
	  var syncObject = $firebaseObject(ref);

	  // putting a console.log here won't work, see below
	  syncObject.$bindTo($scope, "data");

	})