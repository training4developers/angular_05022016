angular.module("WidgetApp", [])
	.controller("HomeCtrl", function ($q) {

		var d1 = $q.defer();
		var d2 = $q.defer();
		var d3 = $q.defer();
		var d4 = $q.defer();

		$q.all([d1.promise, d2.promise, d3.promise, d4.promise])
			.then(function (data) {
				console.log("all have completed");
			}).catch(function (data) {
				console.dir(data);
				console.log("one rejected");
			});

		setTimeout(function () {
			console.log("d1 resolved");
			d1.resolve("a");
		}, 2000);

		setTimeout(function () {
			console.log("d2 resolved");
			d2.resolve("b");
		}, 4000);

		setTimeout(function () {
			console.log("d3 resolved");
			d3.resolve("c");
		}, 6000);

		setTimeout(function () {
			console.log("d4 resolved");
			d4.resolve("d");
		}, 8000);



	});