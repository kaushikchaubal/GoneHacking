'use strict';

angular.module('GoInvestApp')
	.controller('TestCtrl', function ($http, $scope, $firebaseArray, $firebaseObject) {

		console.log('TestCtrl');

	  var ref = new Firebase("https://gonehacking-goinvest.firebaseio.com/test");

	  $scope.messages = $firebaseArray(ref);

		$scope.addMessage = function() {
	    $scope.messages.$add({
	      text: $scope.newMessageText
	    });
	    $scope.newMessageText = '';
	  };

		var ref1 = new Firebase("https://gonehacking-goinvest.firebaseio.com/test1/username1");

		$scope.objectData = $firebaseObject(ref1);

	})