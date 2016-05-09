angular.module("WidgetApp", [])
	.directive("cchRepeat", function () {

		return {

			transclude: true,
			compile: function (tElement, tAttrs) {

				var tokens = tAttrs.cchRepeat.split(" ");
				var itemName = tokens[0];
				var collectionName = tokens[2];
				var collectionExpr = tokens.splice(2).join(" ");
				console.log(collectionExpr);

				return function (scope, element, attrs, ctrl, transclude) {

					var childScopes = [];

					scope.$watchCollection(collectionName, function (newList, oldList, scope) {

						element.empty();
						childScopes.forEach(function (childScope) {
							childScope.$destroy();
						});
						childScopes = [];

						scope.$eval(collectionExpr).forEach(function (item) {

							var childScope = scope.$new();

							childScope[itemName] = item;

							transclude(childScope, function (clone) {
								element.append(clone);
							});

							childScopes.push(childScope);

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
