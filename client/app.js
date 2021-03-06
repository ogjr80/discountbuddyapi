var dbApp = angular.module('dbApp', ['ngRoute']); 

dbApp.config(function($routeProvider){
	$routeProvider.when('/', {
		controller: 'DashboardController',
		templateUrl: 'views/dashboard.html'
	})
	.when('/stores',{
		controller: 'StoresController', 
		templateUrl: 'views/stores.html'
	})
	.when('/stores/details/:id',{
		controller: 'StoresController', 
		templateUrl: 'views/store_details.html'
	})
	.when('/discounts', {
		controller: 'DiscountsController', 
		templateUrl: 'views/discounts.html'
	})
	.when('/discounts/details/:id', {
		controller: 'DiscountsController', 
		templateUrl: 'views/discount_details.html'
	})
	.when('/stores/add', {
		controller: 'StoresController', 
		templateUrl: 'views/stores_add.html'
	})
	.when('/discounts/add',{
		controller: 'DiscountsController', 
		templateUrl: 'views/discounts_add.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});