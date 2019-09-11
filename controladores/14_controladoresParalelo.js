angular.module("app", [ "ngRoute" ])
	.config(function($routeProvider) {
	    $routeProvider
	        .when("/", {
	            controller: "appCtrl",
	            controllerAs: "vm",
	            templateUrl: "home.html"
	        })
	        .when("/descargas", {
	            controller: "appCtrl",
	            controllerAs: "vm",
	            templateUrl: "descargas.html"
	        })
	        .when("/opciones", {
	            controller: "appCtrl",
	            controllerAs: "vm",
	            templateUrl: "opciones.html"
	        });
	})
	.controller("appCtrl", function($location) {
		var map = this;
		map.estoy = function(ruta) {
			return $location.path() == ruta;
		}
	});