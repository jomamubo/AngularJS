angular
	.module("app", [])
	.controller("appCtrl", function(){
	   	var vm = this;
		//podríamos inicializar valores del modelo
		vm.activo = false;
		vm.avisar = function(){
			alert("cambié");
		}
	});