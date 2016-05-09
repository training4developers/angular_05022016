angular.module("WidgetApp", [])
	.directive("cchRequired", function () {

		return {
			require: "ngModel",
			link: function (scope, element, attrs, ngModelCtrl) {

				function validate(value) {
					if (value != null && String(value).length > 0) {
						ngModelCtrl.$setValidity("cch-required", true);
						return value;
					} else {
						ngModelCtrl.$setValidity("cch-required", false);
						return;
					}
				}

				ngModelCtrl.$formatters.push(validate);
				ngModelCtrl.$parsers.push(validate);
			}
		}


	})
	.controller("HomeCtrl", function ($scope, $timeout) {

		$scope.submit = function () {

			console.log($scope);

		};


	});