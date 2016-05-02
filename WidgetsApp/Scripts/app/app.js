"use strict";

angular.module("WidgetApp", [])
	
	.controller("HomeCtrl", function ($scope) {

		$scope.sportItems = [
			"Ken Griffey, Jr. Baseball Card",
			"Football Picture of Eric",
			"Jerry Rice Signed Jersey",
			"2011 Poster Cricket World Cup"
		];

		window.addSportItem = function (nsi) {
			console.log("it fired off!")
			$scope.$apply(function () {
				$scope.sportItems.push(nsi);
			});
			//$scope.$digest();
			console.log($scope);
		};

	});