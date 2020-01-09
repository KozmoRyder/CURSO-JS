// Fetch(ajax) y peticiones a servicios/ apis rest
let usuarios = [];

let div_usuarios = document.querySelector('#usuarios');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(data => data.json())
    .then(data =>{
        usuarios = data;
        console.log(usuarios);

        usuarios.map((usuarios, i) =>{
            let nombre = document.createElement('h2');

            nombre.innerHTML = i+" " + usuarios.name;
            div_usuarios.appendChild(nombre);
        })
    });