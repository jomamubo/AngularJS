angular.module("app", ["ngRoute"])
	.controller("appCtrl", function(){
		var vm = this;
		vm.colores = ["green", "blue", "orange"];
	});