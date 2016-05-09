angular.module("WidgetApp", [])
	.controller("ParentCtrl", function ($scope) {

		$scope.o = {};


	})
	.controller("ChildCtrl", function ($scope) {

		$scope.showScope = function () {
			console.dir($scope);
		};

	});