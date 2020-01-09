'use strict'

function cambiaColor(color){
    caja.style.background = color;
}


//CONSEGUIR ELEMENTOS CON UN ID CONCRETO

//var caja = document.getElementById("micaja");

var caja = document.querySelector("#micaja");

caja.innerHTML = "TEXTO EN LA CAJA DESDE JS"

caja.style.background = "red"
caja.style.padding = "20px"
caja.style.color = "white"
caja.class = "hola"
caja.className ="hola"

console.log(caja);

//Conseguir elementos por su etiqueta

var todosLosDivs = document.getElementsByTagName('div');

var contenidoEnTexto = todosLosDivs[2]; 

contenidoEnTexto.innerHTML = "Otro Texto";

console.log(contenidoEnTexto);