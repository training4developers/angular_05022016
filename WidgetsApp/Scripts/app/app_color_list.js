angular.module("WidgetApp", [])
	.controller("HomeCtrl", function ($scope) {
		
		$scope.colors = ['green', 'white', 'saffron', 'red', 'blue','brown','black','orange','hot pink','maroon','none'];

		$scope.addColor = function () {
			$scope.colors.push($scope.newColor);
			$scope.newColor = "";
		};


		$scope.countries = [
			{ code: "IN", name: "India", continent: "Asia" },
			{ code: "US", name: "United States", continent: "North America" },
			{ code: "BR", name: "Brazil", continent: "South America" },
			{ code: "FR", name: "France", continent: "Europe" },
			{ code: "MX", name: "Mexico", continent: "North America" },
			{ code: "JP", name: "Japan", continent: "Asia" },
			{ code: "CO", name: "Columbia", continent: "South America" }
		];


	});