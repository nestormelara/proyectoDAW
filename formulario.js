
function init (){
document.getElementById("enviar").onclick = function (){
validar();
limpiarCampos ();
}

}//init

function validar(){
	
	nombre = document.getElementById("nombre").value;
	pais = document.getElementById("pais").value;
	correo = document.getElementById("correo").value;
	
	if(!(validar_letrasyespacios(nombre)) || (nombre == null || nombre.length == 0 || /^\s+$/.test(nombre))){
		alert('El campo nombre no permite numeros');
		alert('este campo es obligatorio');
		return false;
		}
		else if(!(validar_letrasyespacios(pais)) || (pais == null || pais.length == 0 || /^\s+$/.test(pais))){
			alert('El campo pais no permite numeros');
			alert('este campo es obligatorio');
			return false;
		}
alert('Su mensaje ha sido enviado correctamente');

var caja = document.getElementById("caja1");

//guardamos el contenido en una variable
var texto = document.getElementById("mensaje").value;
texto.toString();

var nom = document.getElementById("nombre").value;
nom.toString();

var day = new Date();
var fecha = day.getDate () + "/" +(day.getMonth()+1) + "/" + day.getFullYear ();
//creamos un objeto con el contenido guardado
var usuario = document.createTextNode(nom);
var contenido = document.createTextNode(texto);
var ff = document.createTextNode(fecha);
var es = document.createTextNode(espacio);

//creamos un nuevo div
var caja2 = document.createElement("div");
caja2.setAttribute("class","comentario");

caja2.appendChild(contenido);
caja2.appendChild(usuario);
caja2.appendChild(ff);


document.getElementById("caja1").appendChild(caja2);
return true;
}




function validar_letrasyespacios(campo){
	var expresion = new RegExp("^[a-zA-ZÑñ ]*$", "g");
	return expresion.test(campo);
}


function limpiarCampos (){
document.getElementById("nombre").value = "";
document.getElementById("pais").value = "";
document.getElementById("correo").value = "";
document.getElementById("mensaje").value = "";
}


window.onload = init; 