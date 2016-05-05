angular.module("WidgetApp", [])
	.directive("myDir", function ($compile) {

		return {
			template: "MyDir Scope Id: {{$id}}<br>Msg: {{msg}}<br>" +
				"<input ng-model='msg' type='text'><br>" + 
				"{{upperCaseMsg}}<br>" + 
				"<button ng-click='clickMe()'>Click Me</button><br>" + 
				"<input ng-model='person.firstName'>",
			scope: {
				msg: "=myDir",
				upperCaseMsg: "@oneWay",
				clickMe: "&clickMe"
			},
			link: function (scope) {

			}

		};

	})

	.controller("HomeCtrl", function ($scope) {
		$scope.message = "WidgetApp!";

		$scope.doIt = function () {
			console.log("do it");
		};

	})
	.run(function ($templateCache) {

		$templateCache.put("/Content/partials/demo.html", "<h1>{{message}}</h1>");

	});
