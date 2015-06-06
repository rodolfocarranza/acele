// JavaScript Document
$(document).ready(function(e) {
	// watchID se refiere a la aaceleracion 'actual'
	
	var watchID = null; 
	document.addEventListener("deviceready", Dispositivo_listo, false);
	
	//cuando esta listo el dispositivo
	function Dispositivo_listo() {
		comienza() ;
	}
	
	//Empieza la 'observacion' de la aceleracion 
	function Comienza() {
		
		//Empieza la aceleracion cada 2 segundos
		//
		var opciones = { frequency: 2000 };
		
		watchID = navigator-accelerometer.watchAcceleration(correcto, error, opciones);
		navigator.geolocation.getCurrentPosition(Localiza, ErrorLocalizacion);
	}
//detiene la 'observacion' de la aceleracion

function Detente() {
	if (watchID) {
		navigator.accelerometer.clearWatch(watchID);
		watchID=null;
	}
}

//correcto: Toma una captura de la aeleracion
function correcto(aceleration) {
	var element = document.getElementById('acelerometro');
	
	element.innerHTML='aceleracion en X: ' + acceleration.x + '<br />' +
	'aceleracion en Y: ' + acceleration.y + '<br />' +
	'aceleracion en Z: ' + acceleration.z + '<br />' +
	'intervalo: '  + acceleration.timestamp + '<br />';
}

//error:falla al obtener la aceleracion
function Error () {
	alert('error!');
}
//exito al localizar
function Localiza(posicion) {
	var element = document.getElementById('geolocalizacion');
	element.innerHTML ='Latitud: '  +  posicion.coords.latitude   +  ' <br/>' +
	'Longitud: '  + posicion.coords.longitude  + ' <br/>' +
	'Altitud: '  + posicion.coords.altitude  + ' <br/>' +
	'Precision: '  + posicion.coords.accuracy  + ' <br/>' +
	'Precision de Altitud: '  + posicion.coords.altitudeAccuracy + ' <br/>' +
	'Direccion: '  + posicion.coords.heading  + ' <br/>' +
	'Velocidad: '  + posicion.coords.speed  + ' <br/>' +
	'Intervalo: '  + posicion.timestamp  + ' <br/>';
}
//error en la geolalalizacion
function ErrorLocalizacion(error) {
	alert('codigo: '  +error.code + '\n' +
	'mensaje: ' + error.message + '\n');
}
});//documento ready