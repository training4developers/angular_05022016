angular.module("WidgetApp", [])
	.directive("myDir", function ($compile) {

		return {

			compile: function (tElement, tAttrs) {

				tElement.append("<div>Compile: {{message}}</div>");

				// post-link
				return function (scope, element, attrs) {

					scope.message = "Hi Class!";

					var linkingFn = $compile("<div>PostLink: {{message}}</div>");
					var domElements = linkingFn(scope);

					element.append(domElements);

				}

			}

		};

	})

	.controller("HomeCtrl", function ($scope) {
		$scope.message = "WidgetApp!";
	});