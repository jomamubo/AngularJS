angular
	.module('apiApp', [])
	.controller('apiAppCtrl', ['$scope',  '$http', '$sce', controladorPrincipal]);

function controladorPrincipal($scope, $http, $sce){
	var vm=this;
	vm.orden = false;
	vm.campo = "employee_name";
	// var url = "http://api.openbeerdatabase.com/v1/beers.json?callback=JSON_CALLBACK";
	// var url="http://api.geonames.org/citiesJSON?north=44.1&south=-9.9&east=-22.4&west=55.2&lang=de&username=demo";
	
	
	vm.buscaEmpleados = function(){
		
		var url="http://dummy.restapiexample.com/api/v1/";
		
		// Si ha introducido algo en el cuadro de busqueda
		if(vm.id){
			url = "http://dummy.restapiexample.com/api/v1/employee/" + vm.id;
		}else{
			url = "http://dummy.restapiexample.com/api/v1/employees";
		}
		
		url += "?callback=JSON_CALLBACK";
		
		var trustedUrl = $sce.trustAsResourceUrl(url);
		
		console.log("Llamamos a " + trustedUrl);
		
		// Conectándonos con .jsonp, puede darnos error si el servidor del que traemos los datos
		// no acepta solicitudes "cross domain". En el caso de este ejemplo, el servidor que consultamos
		// nos da este error, por lo que solo podemos hacer la consulta con .get
		
		// $http.jsonp(trustedUrl).success(function(respuesta){
		$http.get(trustedUrl).success(function(respuesta){
			console.log("res:", respuesta);
			vm.empleados = respuesta;
		})
		.error(function(error){
			console.log("error=" + error);
		});
	}
}