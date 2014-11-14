'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
.controller('HomeCtrl', ['$scope', function($scope) {

}])
.controller('ExpenseAddCtrl', ['$scope', 'categoryList', 'expenseService',
	function($scope, categoryList, expenseService) {
		$scope.categories = categoryList;
		$scope.submit = function(){
			expenseService.saveExpense($scope.expense);
		}
	}])
.controller('SummaryViewCtrl', ['$scope', 'categoryList', 'expenseService', function($scope, categoryList, expenseService) {
	$scope.expenses = expenseService.getExpense();
	$scope.summaryData = [];
	var categories=categoryList;
	categories.forEach(function(item) {
		var catTotal = expenseService.getCategoryTotal(item);
		$scope.summaryData.push({
			category: item,
			amount: catTotal
		});

	});
}])
.controller('NavigationCtrl',['$scope' ,'$location',function($scope,$location){
  var navigator = function(incrementer) {
    var pages = ['/', '/expense-add', '/summary-view'];
   $scope.slidingDirection = (incrementer === 1) ? 'slide-right' : 'slide-left';
    var nextUrl = "";
    var currentPage = $location.path();
    var lastPageIndex = pages.length - 1;
    var pageIndex = pages.indexOf(currentPage);
    var direction = pageIndex + incrementer;
    if (direction === -1) direction = lastPageIndex;
    if (direction > lastPageIndex) direction = 0;
    nextUrl = pages[direction];
    $location.url(nextUrl);
  };
  $scope.goLeft = function() {
    navigator(-1);
};
$scope.goRight = function() {
    navigator(1);
};
}])

