angular.module("WidgetApp", [])
	.directive("myDir", function () {

		return {
			template: "{{message | uppercase}}",
			link: function (scope) {
				scope.message = "Hi!";
			}
		};

	})
	.directive("myDir", function () {

		return {
			template: "{{message}}",
			link: function (scope) {
				scope.message = "Hi!";
			}
		};

	})
	.config(function ($provide) {

		$provide.decorator("myDirDirective", function ($delegate) {
			console.dir($delegate);

			//$delegate[0].template = "{{message | uppercase}}";

			return $delegate;
		});

		$provide.decorator("$log", function ($delegate) {

			var originalLog = $delegate.log;

			$delegate.log = function (msg) {
				originalLog("MyApp> " + msg);
			};

			return $delegate;
		});

	})
	.controller("HomeCtrl", function($log) {

		$log.log("some interesting message");

	});