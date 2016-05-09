(function (angular) {

	angular.module("WidgetsApp.Constants", []);
	angular.module("WidgetsApp.Services", ["WidgetsApp.Constants"]);
	angular.module("WidgetsApp.Controllers", ["WidgetsApp.Services"]);

	angular.module("WidgetsApp", ["ui.router","WidgetsApp.Controllers"]);



})(angular);