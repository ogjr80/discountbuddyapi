var dbApp = angular.module('dbApp'); 

dbApp.controller('DiscountsController',['$scope','$http','$location','$routeParams', function($scope,$http,$location,$routeParams){
	console.log('Discounts Controller Initialized'); 

	$scope.getDiscounts = function(){
		$http.get('/api/discounts').success(function(response){
			$scope.discounts = response; 
			console.log($scope.discounts); 
		})
	}

	$scope.getDiscount = function(){
		console.log('details controller initialized')
		var id = $routeParams.id; 
		$http.get('/api/discounts/'+id).success(function(response){
			$scope.discount = response; 
		})
	}
}]); 

