var dbApp = angular.module('dbApp'); 

dbApp.controller('StoresController',['$scope','$http','$location','$routeParams', function($scope,$http,$location,$routeParams){
	console.log('Stores Controller Initialized'); 

	$scope.getStores = function(){
		$http.get('/api/stores').success(function(response){
			$scope.stores = response; 
			console.log($scope.stores); 
		})
	}

	$scope.getStore = function(){
		console.log('details controller initialized')
		var id = $routeParams.id; 
		$http.get('/api/stores/'+id).success(function(response){
			$scope.store = response; 
		})
	}
	$scope.addStore = function(){
		console.log('Posting Stores')
		$http.post('/api/stores/', $scope.store).success(function(response){
			window.location.href="/#stores";
		});
	}
}]); 



