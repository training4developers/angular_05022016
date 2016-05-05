angular.module("WidgetApp", [])
	.directive("myDir", function ($compile) {

		return {
			restrict: "EACM",
			link: function (scope, element) {
				element.after("Hi Class!");
			}
		};

	})

	.controller("HomeCtrl", function ($scope) {
		$scope.message = "WidgetApp!";
	});