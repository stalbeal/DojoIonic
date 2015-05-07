angular.module('lector.controllers',['ionic','ngCordova'])
.controller('lectorController', function ($scope, $cordovaBarcodeScanner) {
	$scope.leerCodigo=function () {
		//funcion que lee la imagen
		$cordovaBarcodeScanner.scan().then(function (imagenEscaneada) {
			alert(imagenEscaneada.text());// Después de leer la imagen
		}, function (error) {
			alert("Ha ocurrido un error: "+error);//En caso de error
		});
	}
});