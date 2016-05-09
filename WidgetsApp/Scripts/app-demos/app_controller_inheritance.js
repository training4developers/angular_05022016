"use strict";

class BaseController {

	constructor($log) {
		this.$log = $log;
	}

	doIt(msg) {
		this.$log.log(msg);
	}

}

class HomeController extends BaseController {

	static get $inject() {
		return ["$log","$scope"];
	} 

	constructor($log,$scope) {
		super($log);

		$scope.message = "Hi Class!";

		this.doIt("Hi Class!");


	}

}
 

//function BaseController($log) {

//	this.doIt = function (msg) {
//		$log.log(msg);
//	};

//}

////function baseController($log) {
////	return {
////		doIt: function (msg) {
////			$log.log(msg);
////		}
////	};
////}

//function HomeController($log, $scope, baseController) {
//	angular.extend(this, baseController);

//	//this._super.call(this, $log, $scope);

//	$scope.message = "Hi Class!";

//	this.doIt($scope.message);

//}

//HomeController.$inject = ["$log","$scope","baseController"];
//HomeController.prototype = Object.create(BaseController);
//HomeController.prototype.constructor = HomeController;
//HomeController.prototype._super = BaseController;


angular.module("WidgetApp", [])
	.factory("baseController", function ($log) {

		return {
			doIt: function (msg) {
				$log.log(msg);
			}
		};

	})
	.controller("HomeCtrl", HomeController);