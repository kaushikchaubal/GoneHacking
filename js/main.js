var app = angular.module("GoInvestApp", ["firebase"]);

app.controller("MainCtrl", function($scope, $firebaseObject) {
  var ref = new Firebase("https://gonehacking-goinvest.firebaseio.com/");

  // download the data into a local object
  $scope.data = $firebaseObject(ref);

  // putting a console.log here won't work, see below
  syncObject.$bindTo($scope, "data");

});