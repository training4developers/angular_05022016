angular.module("WidgetApp", [])
	.directive("myDir", function () {

		return {
			link: function (scope, element, attrs) {
				console.dir(attrs);

				attrs.$addClass("some-class");
				attrs.$removeClass("some-class");

				console.log(attrs.$normalize("safe-house"));

				attrs.$observe("myDir", function (newValue) {
					console.log(newValue);
				})
			}
		};

	})
	.controller("HomeCtrl", function ($scope) {

	});
