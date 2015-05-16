'use strict';

angular.module('GoInvestApp')
	.controller('TestCtrl', function ($http, $scope, $firebaseArray) {

		console.log('TestCtrl');

	  var ref = new Firebase("https://gonehacking-goinvest.firebaseio.com/test");

	  $scope.messages = $firebaseArray(ref);

		$scope.addMessage = function() {
	    $scope.messages.$add({
	      text: $scope.newMessageText
	    });
	    $scope.newMessageText = '';
	  };

	})