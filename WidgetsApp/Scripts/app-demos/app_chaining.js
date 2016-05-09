angular.module("WidgetApp", [])
	.controller("HomeCtrl", function ($q) {

		var youngLady = $q.defer();

		var youngMan = youngLady.promise;

		youngMan.then(function (result) {
			console.log("she said yes! time to get married!");

			var callPeople = $q.defer();

			setTimeout(function () {
				callPeople.resolve("called all 2 people");
			}, 2000);

			return callPeople.promise;

		}).then(function (results) {

			console.log(results);
			console.log("pay cellphone bill...");

		}).catch(function () {
			console.log("she said no! not getting married... :(");
		});

		setTimeout(function () {

			console.log("she is going to say yes");
			youngLady.resolve("her parents are making her");

		}, 2000);

		console.log("young man is waiting...");

	});