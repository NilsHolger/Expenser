'use strict';

angular.module('myApp.services', []).
value('categoryList',["Food", "Sports", "Fuel", "Public Transport", "Groceries", "Entertainment"])
.factory('expenseService',[function() {
	var prefix = 'manageexpenses';
	return {
		saveExpense: function(data) {
			var timeStamp = Math.round(new Date().getTime());
			var key = prefix + timeStamp;

			data = JSON.stringify(data);
			localStorage[key] = data;
		},
		getExpense: function() {
			var expenses = [];
			var prefixLength = prefix.length;
			Object.keys(localStorage)
			.forEach(function(key) {
				if (key.substring(0, prefixLength) == prefix) {
					var item = window.localStorage[key];
					item = JSON.parse(item);
					expenses.push(item);
				}
			});

			return expenses;
		},
		getCategoryTotal: function(category) {
			var categoryTotal = 0;
			var prefixLength = prefix.length;
			Object.keys(localStorage)
			.forEach(function(key) {
				if (key.substring(0, prefixLength) == prefix) {
					var item = localStorage[key]
					item = JSON.parse(item)
					if (item.category == category) {
						categoryTotal += parseFloat(item.amount);
					}

				}

			});
			return categoryTotal;
		}
	};
}]);
