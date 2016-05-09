(function (angular) {

	controller.$inject = ["$scope", "widgets", "$stateParams", "$state"];

	function controller($scope, widgets, $stateParams, $state) {

		widgets.get($stateParams.widgetId).then(function (results) {
			$scope.widget = results.data;
		});

		$scope.returnToList = function () {

			$state.go("home");


		};

	}

	angular.module("WidgetsApp.Controllers")
		.controller("viewWidget", controller);


})(angular);