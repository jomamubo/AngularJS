angular.module("pruebaApp", ["ngRoute"])
	.controller('pruebaAppCtrl', function($scope, $rootScope){
		
		$scope.scopeNormal = "Esto lo coloco en el scope normal de este controlador...";
		$rootScope.scopeRaiz = "Esto está en el scope raíz";
		
		//sobrescribo una variable del scope
		$scope.algo = "Algo en el scope normal";
		$rootScope.algo = "Algo en el scope raíz";
	});