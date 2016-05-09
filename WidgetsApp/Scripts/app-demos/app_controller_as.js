angular.module("WidgetApp", [])
	.controller("HomeCtrl", function ($scope, $timeout, $document) {

		var vm = this;
		vm.doIt = doIt;
		vm.message = "Hi Class!";

		$scope.$watch

		//$timeout(function () {
		//	vm.doIt();
		//}, 1000);


		function doIt() {
			console.log("Hi Class!");
			vm.message = "Bye Class!";
		}

		console.dir($scope);

	});