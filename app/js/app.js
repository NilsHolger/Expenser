'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
  'ngTouch',
  'ngAnimate'
]).
config(['$routeProvider',
 function($routeProvider) {
  $routeProvider.when('/',{
  	templateUrl: 'partials/home.html',
  	 controller: 'HomeCtrl'
  	});	
  $routeProvider.when('/expense-add',{
  	templateUrl: 'partials/expense-add.html',
  	 controller: 'ExpenseAddCtrl'
  	});
  $routeProvider.when('/summary-view', {
  	templateUrl: 'partials/summary-view.html',
  	 controller: 'SummaryViewCtrl'
  	});
  $routeProvider.otherwise({
  	redirectTo: '/'
  });
}]);
