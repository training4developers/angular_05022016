angular.module("WidgetApp", [])
	.controller("HomeCtrl", function ($scope, $timeout) {

		//$scope.$watch("message", function (newValue, oldValue, scope) {

		//	console.log("new value: ", newValue);
		//	console.log("old value: ", newValue);

		//});

		//$scope.$watchGroup(["person.firstName","person.lastName"], function (newValues, oldValues, scope) {

		//	console.log("person:");
		//	console.log(newValues);

		//});

		$scope.colors = ["red", "blue", "green"];

		$scope.$watchCollection("colors", function (newList, oldList, scope) {
			console.dir(newList);
		});

		$timeout(function () {
			$scope.colors.push("orange");
		}, 2000);

	});