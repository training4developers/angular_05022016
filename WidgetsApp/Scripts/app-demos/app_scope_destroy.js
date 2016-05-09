"use strict";

angular.module("WidgetApp", [])
	.directive("cchClick", function () {

		return {
			scope: {
				clickMe: "&cchClick"
			},
			link: function (scope, element) {

				function clickMe() {
					scope.$apply(function () {
						scope.clickMe();
					});
				}

				scope.$on("$destroy", function () {
					console.log("cch click scope is destroyed");
					element.off("click", clickMe);

				});
				element.on("click", clickMe);



			}
		};

	})
	.controller("HomeCtrl", function () {

		console.log("ran home ctrl");

	})
	.controller("IfCtrl", function ($scope) {

		console.log("ran if ctrl");

		$scope.message = "Hi Class!";

		$scope.$on("$destroy", function () {
			console.log("if ctrl scope is destroyed");
		});

		$scope.doIt = function () {
			$scope.message = "I was clicked!";
			console.log("did it!");
		};

		//$scope.$destroy();

		var childScope = $scope.$new();



	});