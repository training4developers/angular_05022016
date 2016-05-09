function widgets() {
	this.doIt = function () {
		console.log("did it!");
	};
}

angular.module("WidgetApp", [])
	.factory("st", function ($rootScope) {

	})
	.provider("logger", function () {
		var prefix = "";
		return {
			setPrefix: function (newPrefix) {
				prefix = newPrefix;
			},
			// factory function
			$get: function () {

				return {
					log: function (msg) {
						console.log(prefix + msg);
					}
				};
			}
		}
	})
	.config(function (loggerProvider) {
		loggerProvider.setPrefix("WidgetApp> ");
	})
	.config(function ($controllerProvider) {

		$controllerProvider.register("HomeCtrl", function ($scope, logger) {

			logger.log("Hi Everyone!");


		});

	});