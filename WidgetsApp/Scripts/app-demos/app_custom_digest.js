
var scope = {
	watches: []
};

function cchBindDir() {

	var element = document.querySelector("[cch-bind]");

	addWatch(scope, element.getAttribute("cch-bind"),
		function (newValue, oldValue, scope) {
			element.innerText = newValue;
		});

}

function cchModelDir() {

	var element = document.querySelector("[cch-model]");
	var prop = element.getAttribute("cch-model");

	addWatch(scope, prop,
		function (newValue, oldValue, scope) {
			element.value = newValue;
		});

	element.addEventListener("keyup", function () {

		scope[prop] = element.value;
		digest(scope);

	});

}


function addWatch(scope, prop, ui) {
	scope.watches.push({
		prop: prop,
		ui: ui,
		lastValue: null
	});
}

function digest(scope) {

	scope.watches.forEach(function (watch) {
		var newValue = scope[watch.prop];
		if (newValue !== watch.lastValue) {
			watch.ui(newValue, watch.lastValue, scope);
			watch.lastValue = newValue;
		}

	});

}

scope.message = "Hi Class!";
cchBindDir();
cchModelDir();
digest(scope);