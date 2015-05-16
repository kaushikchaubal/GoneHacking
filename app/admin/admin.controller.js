'use strict';

angular.module('GoInvestApp')
	.controller('AdminCtrl', function ($http, $scope, $firebaseArray) {

		console.log('AdminCtrl');

	  var ref = new Firebase("https://gonehacking-goinvest.firebaseio.com/test2");

	  $scope.messages = $firebaseArray(ref);

		$scope.addMessage = function() {
	    $scope.messages.$add({
	      text: $scope.newMessageText
	    });
	    $scope.newMessageText = '';
	  };

	})