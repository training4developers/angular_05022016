angular.module("WidgetApp", [])
	.directive("cchRepeat", function () {

		return {

			transclude: 'element',
			compile: function (tElement, tAttrs) {

				var tokens = tAttrs.cchRepeat.split(" ");
				var itemName = tokens[0];
				var collectionName = tokens[2];
				var collectionExpr = tokens.splice(2).join(" ");

				return function (scope, element, attrs, ctrl, transclude) {

					var lastElement = element;
					var elements = [];

					scope.$watchCollection(collectionName, function (newList, oldList, scope) {

						elements.forEach(function (element) {
							angular.element(element).scope().$destroy();
							element.remove();
						});
						lastElement = element;

						scope.$eval(collectionExpr).forEach(function (item) {

							var childScope = scope.$new();

							childScope[itemName] = item;

							transclude(childScope, function (clone) {
								lastElement.after(clone);
								lastElement = clone;
								elements.push(clone);
							});

						});


					});


				};

			}

		}


	})
	.controller("HomeCtrl", function ($scope, $timeout) {

		$scope.colors = ["red", "blue", "green"];

		$timeout(function () {
			console.log("pushed orange");
			$scope.colors.push("orange");
		}, 2000);

	});
