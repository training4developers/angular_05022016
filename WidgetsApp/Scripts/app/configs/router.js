(function (angular) {

	config.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"];

	function config($stateProvider, $urlRouterProvider, $locationProvider) {

		$urlRouterProvider.otherwise("/");

		$stateProvider
			.state("home", {
				url: "/",
				controller: "home",
				templateUrl: "/Content/partials/app/home.html"
			})
			.state("view", {
				url: "/widgets/:widgetId",
				controller: "viewWidget",
				templateUrl: "/Content/partials/app/view.html"
			})
			.state("about", {
				controller: "about",
				templateUrl: "/Content/partials/app/about.html"
			})
			.state("about.detail", {
				url: "/about",
				views: {
					mission: {
						controller: "mission",
						templateUrl: "/Content/partials/app/mission.html"
					},
					team: {
						controller: "team",
						templateUrl: "/Content/partials/app/team.html"
					},
					history: {
						controller: "history",
						templateUrl: "/Content/partials/app/history.html"
					}
				}
			})
		;

	}

	angular.module("WidgetsApp.Services")
		.config(config);




})(angular);