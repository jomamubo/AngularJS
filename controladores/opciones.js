angular.module("app", [ "ngRoute" ])
	.controller("appCtrl", function($scope){
		var vm = this;
		vm.colores = ["green", "blue", "orange"];
		$scope.colores = ["green", "blue", "orange"];
		
		vm.agregaColor= function(color) {
	         vm.colores.push(color);
	         $scope.colores.push(color);
	     };
	});