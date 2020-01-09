'use strict'

//BOM- BROWSER OBJECT MODEL
function getBom(){
    console.log(window.innerHeight);
    console.log(window.innerWidth);
    console.log(window.location);
}
getBom();

function redirect(url){
    window.location.href = url;
}

function abrirVentana(url){
    window.open(url);
}