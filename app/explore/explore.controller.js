'use strict';

angular.module('GoInvestApp')
	.controller('ExploreCtrl', function ($http, $scope, $firebaseObject) {

		console.log('ExploreCtrl');

		$scope.portfolios = [{
			'name': 'JPM Japan C GBP Hdg Net Acc',
			'user': 'Neil Woodford',
			'return': 2.45,
			'selected': false,
		},
		{
			'name': 'Old Mutual UK Mid Cap R Acc',
			'user': 'Sheldon Cooper',
			'return': 2.02,
			'selected': false,
		},
		{
			'name': 'Schroder European Alpha Plus Inc',
			'user': 'Joey Tribbiani',
			'return': 1.55,
			'selected': false,
		},
		{
			'name': 'Baillie Gifford Global Discovery Inc',
			'user': 'Ross Geller',
			'return': -0.31,
			'selected': false,
		},
		{
			'name': 'Baillie Gifford Global Discovery Inc',
			'user': 'Leonard Hofstader',
			'return': -1.22,
			'selected': false,
		},
		]
	});