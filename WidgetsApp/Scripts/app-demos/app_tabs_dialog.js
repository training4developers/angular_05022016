angular.module("WidgetApp", ["ngSanitize"])

	.directive("tabs", function ($compile) {

		return {
			restrict: "E",
			controller: function ($scope, $element, $attrs) {

				$scope.tabs = [];

				this.addTab = function (tabId, tabCaption, tabContent) {

					$scope.tabs.push({
						tabId: tabId,
						tabCaption: tabCaption,
						tabContent: tabContent
					});

				};

			},
			link: function (scope, element, attrs) {

				element.empty();

				scope.activeTabId = attrs.activeTabId;

				scope.activateTab = function (tabId) {
					scope.activeTabId = tabId;
				};

				var tpl = "<div class='tabs'><ul><li ng-repeat='tab in tabs' ng-class='{ active: activeTabId === tab.tabId }'><a href='#' ng-click='activateTab(tab.tabId);'>{{tab.tabCaption}}</a></li></ul>";
				tpl += "<div ng-repeat='tab in tabs' ng-if='activeTabId === tab.tabId' ng-bind-html='tab.tabContent'></div></div>";

				var linkingFn = $compile(tpl);
				var domElements = linkingFn(scope);
				element.replaceWith(domElements);

			}
		}

	})

	.directive("tab", function () {

		return {
			restrict: "E",
			require: "^^tabs",
			link: function (scope, element, attrs, ctrl) {

				ctrl.addTab(attrs.id, attrs.caption, element.html());

			}
		}

	})

	.controller("HomeCtrl", function ($scope, $timeout) {


	});
