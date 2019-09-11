angular.module("app", ["ngRoute"])
	
// Definimos una interfaz

	.factory("descargasFactory", function(){
	    var descargasRealizadas = ["Manual de Javascript", "Manual de jQuery", "Manual de AngularJS"];
	
	    var interfaz = {};
	    
	    interfaz.nombre =  "Jose";
	    interfaz.getDescargas = function(){
	            return descargasRealizadas;
	        };
        interfaz.nuevaDescarga = function(descarga){
	            descargasRealizadas.push(descarga);
	        };
	    
        return interfaz;
	})

	.config(['$routeProvider',
		function($routeProvider){
			$routeProvider
				.when("/", {
					templateUrl: "home.html",
					controller: "homeCtrl",
					controllerAs: "vm"
				})
				.when("/descargas", {
					templateUrl: "descargas.html",
					controller: "homeCtrl",
					controllerAs: "vm"
				})
				.when("/opciones", {
					templateUrl: "opciones.html",
					controller: "appCtrl",
					controllerAs: "vm"
				});
		}
	])
	
// inyectamos la interfaz creada en este controlador de aplicacion
	.controller("homeCtrl", ["$scope", "descargasFactory", function($scope, descargasFactory){
	
		var vm = this;
		vm.colores = ["green", "blue", "orange"];
		vm.descargas = descargasFactory.getDescargas();// inicializamos las descargas
	    
	}])

	.controller("appCtrl", ["$scope", "descargasFactory", function($scope, descargasFactory){
		var vm = this;
		vm.colores = ["green", "blue", "orange"];
		$scope.colores = ["green", "blue", "orange"];
		
		// Asignamos a descargas del scope, la funcion getDescargas de la interfaz
		vm.descargas = descargasFactory.getDescargas();
		
		// definimos una nueva funcion fuera de la interfaz
		vm.agregaColor= function(color) {
	         vm.colores.push(color);
	         $scope.colores.push(color);
	     };
	     
	  // Asignamos a nueva Descarga del scope, la funcion de la interfaz
	     vm.nuevaDescarga = descargasFactory.nuevaDescarga; 
	}]);

/*	
	.controller("appCtrl", "descargasFactory", function($scope, descargasFactory){
		var vm = this;
		vm.nombre = descargasFactory.nombre;
		vm.descargas = descargasFactory.getDescargas();
		vm.funciones = {
				guardarNombre: function(){
					descargasFactory.nombre = vm.nombre;
				},
				agregarDescarga: function(){
					descargasFactory.nuevaDescarga(vm.nombreNuevaDescarga);
					vm.mensaje = "Descarga agregada";
				},
				borrarmensjae: function(){
					vm.mensaje = "";
				}
		}
	});
*/