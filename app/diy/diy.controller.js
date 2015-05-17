'use strict';

angular.module('GoInvestApp')
	.controller('DiyCtrl', function ($http, $scope, $firebaseObject) {

		console.log('DiyCtrl');

		$scope.asset_search = "";

		$scope.assets = [{
			'name': "AAPL - Apple Inc.",
			'sector': "Technology"
		},
		{
			'name': "GOOG - Google Inc",
			'sector': "Technology"
		},
		{
			'name': "BLK - BlackRock, Inc.",
			'sector': "Finance"
		},
		{
			'name': "VOD - Vodafone Group plc",
			'sector': "Telecommunications"
		},
		{
			'name': "GSK - GlaxoSmithKline plc",
			'sector': "Healthcare"
		},

		];

	})