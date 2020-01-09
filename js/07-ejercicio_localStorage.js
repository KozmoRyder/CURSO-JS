let formulario = document.querySelector("#formPeliculas");

formulario.addEventListener('submit',function(){
    console.log('entra');
    let titulo =  document.querySelector('#addpelicula').value.trim()
    if (titulo.length >= 1){
        localStorage.setItem(titulo,titulo);
    }
});

let ul = document.querySelector('#peliculasList')
for(let i in localStorage){
    if(typeof localStorage[i] == 'string'){
        console.log(localStorage.find(elem => elem == titulo).length);
        
        if(localStorage.find(elem => elem == titulo).length != 0){
            alert('Esa pelicula ya está cargada');
        }
       
        let li = document.createElement("li");
        li.append(localStorage[i]);
        ul.append(li);
    }
    
    
    
}