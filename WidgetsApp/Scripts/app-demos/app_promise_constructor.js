angular.module("WidgetApp", [])
	.config(function ($provide) {

		$provide.decorator("$q", function ($delegate) {

			function q(fn) {

				var defer = $delegate.defer();

				fn(defer.resolve, defer.reject);
				return defer.promise;
			}

			angular.extend(q, $delegate);
			return q;

		});

	})
	.controller("HomeCtrl", function ($q) {

		var youngMan = $q(function (resolve, reject) {

			setTimeout(function () {

				console.log("she is going to say yes");
				resolve("her parents are making her");

			}, 2000);

		});

		youngMan.then(function (result) {
			console.log("she said yes! time to get married!");

			function callPeople() {

				var callPeople = $q.defer();

				setTimeout(function () {
					callPeople.resolve("called all 2 people");
				}, 2000);

				return callPeople.promise;

			}


		}).then(function (results) {

			console.log(results);
			console.log("pay cellphone bill...");

		}).catch(function () {
			console.log("she said no! not getting married... :(");
		});



		console.log("young man is waiting...");

	});