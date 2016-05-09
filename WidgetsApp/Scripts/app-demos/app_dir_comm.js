angular.module("WidgetApp", [])
	.controller("firstDirCtrl", function ($scope, $element, $attrs) {

		this.doIt = function () {
			console.log("do it!");
		};
	})
	.directive("firstDir", function () {

		return {
			controller: "firstDirCtrl"
		};

	})
	.directive("secondDir", function () {

		return {
			require: ["?^^firstDir","secondDir"],
			controller: function() {
				this.doIt2 = function() {
					console.log("do it 2");
				};
			},
			link: function (scope, element, attrs, ctrl) {
				console.dir(ctrl);
				ctrl[0].doIt();
				ctrl[1].doIt2();

			}
		}

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
