var app= angular.module('employeeList',[])

app.controller("listCtrl", function($scope,dataService){
	
	$scope.items = dataService.getItems();

	$scope.addItem = function(){
		dataService.addItem($scope.item);

		$scope.item ="";

	};
	$scope.removeItem = function(item){
    	dataService.removeItem(item);
  	}

});