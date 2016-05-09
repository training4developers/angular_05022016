if (premium) {
	homeCtrl.$inject = ["goodstuff", "$scope"];
} else {
	homeCtrl.$inject = ["crapstuff", "$scope"];

}
function homeCtrl($log, $scope) {

	$scope.message = "Hi Class!!";

	$log.log("something is logged");

}


angular.module("WidgetApp", [])
	.controller("HomeCtrl", homeCtrl);