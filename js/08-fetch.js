// Fetch(ajax) y peticiones a servicios/ apis rest
let usuarios = [];

let div_usuarios = document.querySelector('#usuarios');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(data => data.json())
    .then(users => {
        usuarios = users;
        console.log(usuarios);

        usuarios.map((user, i) => {
            let nombre = document.createElement('h2');

            nombre.innerHTML = i + " " + user.name;
            div_usuarios.appendChild(nombre);

            document.querySelector('.loading').style.display = "none";
        })
    });