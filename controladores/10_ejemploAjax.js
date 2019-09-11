angular
	.module('apiApp', [])
	.controller('apiAppCtrl', ['$http', controladorPrincipal]);

function controladorPrincipal($http){
	var vm=this;
	vm.buscaEnRegion = function(){
		$http.get(vm.url).success(function(respuesta){
			//console.log("res:", respuesta);
			vm.paises = respuesta;
		});
	}
}