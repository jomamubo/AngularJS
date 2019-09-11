angular
	.module('myApp',[])
	.controller('cocheController', function () {
	    this.concesionarios = [
	    	{nombre: "Safamotor", ciudad:"Malaga"},
	    	{nombre: "Mosa", ciudad:"Sevilla"},
	    	{nombre: "Albaicin", ciudad:"Granada"}
	    ];
		this.coche = {
	        marca: "Audi",
	        modelo: "A3",
	     };
		    
	     this.nombreCompletoDelCoche = function() {
	         var x;
	         x = this.coche; 
	         return x.marca + " " + x.modelo;
	     };
	});