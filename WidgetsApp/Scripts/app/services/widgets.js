(function (angular) {

	factory.$inject = ["$http","WIDGETS_API_URL"];

	function factory($http, WIDGETS_API_URL) {
		return {
			getAll: function () {
				return $http.get(WIDGETS_API_URL).catch(function (results) {
				});
			},
			get: function (widgetId) {
				return $http.get(WIDGETS_API_URL + "/" + encodeURIComponent(widgetId));
			},
			insert: function (widget) {
				return $http.post(WIDGETS_API_URL, widget);
			},
			update: function (widget) {
				return $http.put(WIDGETS_API_URL + "/" + encodeURIComponent(widget.id), widget);
			},
			delete: function (widgetId) {
				return $http.delete(WIDGETS_API_URL + "/" + encodeURIComponent(widgetId));
			}
		};
	}

	angular.module("WidgetsApp.Services")
		.factory("widgets", factory);

})(angular);

