angular.module("WidgetApp", [])
	.directive("personForm", function ($compile) {

		return {
			template: "<input ng-model='editPerson.firstName'><br>" + 
				"<input ng-model='editPerson.lastName'><br>" +
				"<button ng-click='savePerson()'>Save Person</button>",
			scope: {
				//editPerson: "=thePerson",
				savePerson: "&savePerson"
			},
			link: function (scope) {

			}

		};

	})

	.controller("HomeCtrl", function ($scope) {

		$scope.aPerson = {
			firstName: "Bob",
			lastName: "Martin"
		};

		$scope.updatePerson = function ($event, editPerson) {
			console.log($event);
			console.log(editPerson);
		};

	});
