'use strict';

angular.module('GoInvestApp')
	.controller('DiyCtrl', function ($http, $scope, $firebaseObject) {

		console.log('DiyCtrl');

		$scope.asset_search = "";

		$scope.assets_added = [];

		$scope.assets = [{
			'name': "AAPL - Apple Inc.",
			'sector': "Technology"
		},
		{
			'name': "GOOG - Google Inc",
			'sector': "Technology"
		},
		{
			'name': "SDRC - Schroders plc",
			'sector': "Financials"
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

		$scope.selectTotal = 0;

 		$scope.riskData = [
 				['Equities', 100]
 		]

		$scope.riskData = [];

		$scope.addAsset = function(asset) {
			for (var a in $scope.assets) {
				if ($scope.assets[a] == asset) {
					$scope.assets.splice(a, 1);
					$scope.assets_added.push(asset);
					$scope.selectTotal++;
					// $scope.$apply();
				}
			}
 		};
 		$scope.removeAsset = function(asset) {
			for (var a in $scope.assets_added) {
				if ($scope.assets_added[a] == asset) {
					$scope.assets_added.splice(a, 1);
					$scope.assets.push(asset);
					$scope.selectTotal--;
					// $scope.apply();
				}
			}
 		};


 		$scope.riskSelection = {
 			'Equities': 0,
 			'Alternative': 0,
 			'Bonds': 0,
 			'Cash': 0
 		}

		$scope.chartConfig = {
				chart: {
									plotBackgroundColor: null,
									plotBorderWidth: null,
									plotShadow: false
							},
							title: "Assets",
							tooltip: {
									pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
							},
							plotOptions: {
									pie: {
											allowPointSelect: true,
											cursor: 'pointer',
											dataLabels: {
													enabled: false
											},
											showInLegend: true
									}
							},
							series: [{
									type: 'pie',
									name: 'Assets',
									data: [
							 				['Equities', 100]
							 		]
							}]
			};

	})