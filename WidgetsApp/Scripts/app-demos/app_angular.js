angular.module("WidgetApp", [])
	.controller("HomeCtrl", function ($scope) {
		$scope.message = "WidgetApp!";

		$scope.person = {
			firstName: "Phil",
			lastName: "Collins",
			gender: "male",
			age: 60,
			occupation: "percussionist"
		};

		$scope.edit = function () {
			$scope.editMode = true;
			$scope.editPerson = angular.extend({}, $scope.person);
		};

		$scope.save = function () {
			$scope.editMode = false;
			angular.extend($scope.person, $scope.editPerson);
		}

		$scope.cancel = function () {
			$scope.editMode = false;
		}

		//var parent = {
		//	getFullName: function () {
		//		return this.firstName + " " + this.lastName;
		//	}
		//};

		//var child = Object.create(parent);
		//child.firstName = "Bob";
		//child.lastName = "Smith";
		//child.address = {
		//	street: "123 Oak Lane",
		//	city: "Amherst",
		//	state: "VA",
		//	zipCode: "12345"
		//};

		//var childCopy = angular.copy({}, child);
		//console.log(child.address === childCopy.address);
		//console.log(Object.getPrototypeOf(child) === Object.getPrototypeOf(childCopy));


		$scope.countries = [
			{ code: "DE", name: "Germany", continent: "Europe" },
			{ code: "CN", name: "China", continent: "Asia" },
			{ code: "IN", name: "India", continent: "Asia" },
			{ code: "US", name: "United States", continent: "North America" }
		];

	});