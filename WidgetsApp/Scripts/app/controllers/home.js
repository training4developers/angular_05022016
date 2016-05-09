(function (angular) {

	controller.$inject = ["$scope", "widgets"];

	function controller($scope, widgets) {

		widgets.getAll().then(function (results) {
			$scope.widgets = results.data;
		});

	}

	angular.module("WidgetsApp.Controllers")
		.controller("home", controller);

})(angular);