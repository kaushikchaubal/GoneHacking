'use strict';

angular.module('GoInvestApp')
.controller('MainCtrl', function ($http, $scope, $firebaseObject) {
// .controller('MainCtrl', function ($http, $scope, 'firebase') {
	  var ref = new Firebase("https://gonehacking-goinvest.firebaseio.com/");

	  // download the data into a local object
	  var syncObject = $firebaseObject(ref);

	  // putting a console.log here won't work, see below
	  syncObject.$bindTo($scope, "data");

	});