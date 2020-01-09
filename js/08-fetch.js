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

    getInfo()
    .then(data => {
        console.log(data);
    })
function getInfo(){

    var profesor ={
        nombre: "Victor",
        apellido: "Robles"
    }
    return new Promise((resolve,reject) => {
        var profesor_string = JSON.stringify(profesor);

        if(typeof profesor_string != 'string') return reject('error');
        return resolve (profesor_string); 

    });
}