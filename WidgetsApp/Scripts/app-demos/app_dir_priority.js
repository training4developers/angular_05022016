
//document.querySelector("[ng-app]").addEventListener("DOMContentLoaded", function () {

//	var appElement = document.querySelector("[ng-app]");

//	angular.bootstrap(appElement, [appElement.attr("ng-app")]);
//})

angular.module("WidgetApp", [])
	.directive("firstDir", function () {

		return {
			priority: 10,
			controller: function () {
				console.log("first dir");
			}
		};

	})
	.directive("secondDir", function () {

		return {
			priority: 20,
			controller: function () {
				console.log("second dir");
			}
		};

	})
	.controller("HomeCtrl", function ($scope) {

	});
