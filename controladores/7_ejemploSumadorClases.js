angular
.module('acumuladorApp', [])
.controller("acumuladorAppCtrl", controladorPrincipal);

function controladorPrincipal(){
	//esta función es mi controlador
	var vm = this;
	vm.total = 0;
	//scope.cuanto = 0;
	vm.tamTitular = "titularpeq";
	vm.sumar = function(){
		vm.total += parseInt(vm.cuanto);
	}
	vm.restar = function(){
		vm.total -= parseInt(vm.cuanto);
	}
	vm.clases = ["uno", "dos", "tres"];
};