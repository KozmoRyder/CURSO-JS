//LocalStorage


//Comprobar disponibilidad de LocalStorage
if(typeof(Storage) !== 'undefined'){
    console.log('Localstorage disponible');
}else{
    console.log('Incompatible con LocalStorage');
}

//Guardar datos

localStorage.setItem("titulo","Curso de JS");

//Recuperar Elemento
document.querySelector('#peliculas').innerHTML= localStorage.getItem("titulo");

//Guardar Objetos
let usuario = {
    nombre: "Lautaro Biondi",
    email: "lbiondi@ergorenova.com"
};

localStorage.setItem("usuario", JSON.stringify(usuario));

//Recuperar Objetos

usuario = JSON.parse(localStorage.getItem("usuario"));
console.log(usuario);

document.querySelector('#datos').append(usuario.nombre);

//Limpiar LocalStorage

localStorage.clear();
