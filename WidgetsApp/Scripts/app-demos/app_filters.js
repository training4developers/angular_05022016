angular.module("WidgetApp", [])
	.filter("cchUpperCase", function () {

		return function (value) {

			return String(value).toUpperCase();

		};

	})
	.filter("cchAppend", function () {

		return function (value, strToAppend) {
			return String(value) + String(strToAppend);
		};

	})
	.controller("HomeCtrl", function ($scope, $timeout) {

		$scope.message = "!Hola!";


	});