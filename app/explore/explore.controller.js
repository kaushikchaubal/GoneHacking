'use strict';

angular.module('GoInvestApp')
	.controller('ExploreCtrl', function ($http, $scope, $firebaseObject) {

		console.log('ExploreCtrl');

		$scope.portfolios = [{
			'name': 'Portfolio Name 1',
			'user': 'User name',
			'return': 2.45,
		},
		{
			'name': 'Portfolio Name 2',
			'user': 'User name',
			'return': -1.02,
		},
		{
			'name': 'Portfolio Name 3',
			'user': 'User name',
			'return': 2.45,
		},
		{
			'name': 'Portfolio Name 4',
			'user': 'User name',
			'return': 2.45,
		},
		]
	});