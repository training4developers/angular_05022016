angular.module("WidgetApp", [])
	.filter("setGroupBy", function () {

		return function (list, groupByField) {

			list.forEach(function (item) {
				item.groupBy = item[groupByField]
			});
			return list;
		};

	})
	.directive("groupByDropDown", function ($compile, $filter) {

		return {

			link: function (scope, element, attrs) {

				var option = element.html();

				scope.$watch(attrs.groupBy, function (newGroupByField) {

					var collectionName = attrs.cchOptions.slice(attrs.cchOptions.lastIndexOf(" ") + 1);
					scope[collectionName] = $filter("setGroupBy")(scope[collectionName], newGroupByField);

					var tpl = "<select name='" + attrs.name +
						"' ng-model='" + attrs.ngModel + "' ng-options='" +
						attrs.cchOptions + "'><option value=''>Select One...</option></select>";

					var tempElement = $compile(tpl)(scope);
					element.replaceWith(tempElement);
					element = tempElement;

				});

			}


		};


	})
	.controller("HomeCtrl", function ($scope) {

		$scope.groupByField = 'continent';
		
		$scope.countries = [
			{ code: "IN", name: "India", continent: "Asia", language: 'English' },
			{ code: "US", name: "United States", continent: "North America", language: 'English' },
			{ code: "BR", name: "Brazil", continent: "South America", language: 'Portuguese' },
			{ code: "FR", name: "France", continent: "Europe", language: 'French' },
			{ code: "MX", name: "Mexico", continent: "North America", language: 'Spanish' },
			{ code: "JP", name: "Japan", continent: "Asia", language: 'Japanese' },
			{ code: "CO", name: "Columbia", continent: "South America", language: 'Spanish' }
		];

		$scope.cars = [
			{ id: 1, name: "Toyota Camry",  make: "Toyota", kind: "Car", color: "Red" },
			{ id: 2, name: "Toyota Tundra", make: "Toyota", kind: "Truck", color: "Blue" },
			{ id: 3, name: "Honda Civic", make: "Honda", kind: "Car", color: "Red" },
			{ id: 4, name: "Honda Shadow", make: "Honda", kind: "Motocycle", color: "Yellow" },
			{ id: 5, name: "Ford F150", make: "Ford", kind: "Truck", color: "Blue" },
			{ id: 6, name: "Ford Fusion", make: "Ford", kind: "Car", color: "Red" },
		];

	});
