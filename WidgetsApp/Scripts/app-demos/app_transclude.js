angular.module("WidgetApp", [])
	.directive("myDir", function ($compile) {

		return {
			//transclude: true,
			//template: "<h1>{{message}}</h1>",
			//templateUrl: "/Content/partials/demo.html",
			compile: function (tElement) {

				var tpl = tElement.html();
				tElement.empty();

				console.log(tpl);

				return function (scope, element) {

					function transclude(cloneFn) {

						var linkingFn = $compile(tpl);
						var domElements = linkingFn(scope);
						cloneFn(domElements);

					}

					transclude(function (clone) {
						element.append(clone);
					});
					transclude(function (clone) {
						element.append(clone);
					});
					transclude(function (clone) {
						element.append(clone);
					});
					transclude(function (clone) {
						element.append(clone);
					});
				};
			}
		};

	})

	.controller("HomeCtrl", function ($scope) {
		$scope.message = "WidgetApp!";
	})
	.run(function ($templateCache) {

		$templateCache.put("/Content/partials/demo.html", "<h1>{{message}}</h1>");

	});
