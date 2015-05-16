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



  $scope.chartSeries = [
    {"name": "Some data", "data": [1, 2, 4, 7, 3]},
    {"name": "Some data 3", "data": [3, 1, null, 5, 2], connectNulls: true},
    {"name": "Some data 2", "data": [5, 2, 2, 3, 5], type: "column"},
    {"name": "My Super Column", "data": [1, 1, 2, 3, 2], type: "column"}
  ];


  $scope.chartConfig = {
    options: {
      chart: {
        type: 'areaspline'
      },
      plotOptions: {
        series: {
          stacking: ''
        }
      }
    },
    series: $scope.chartSeries,
    title: {
      text: 'Hello'
    },
    credits: {
      enabled: true
    },
    loading: false,
    size: {}
  }

	})