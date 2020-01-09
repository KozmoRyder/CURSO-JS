'use strict'

//EVENTOS del ratón.

//LOAD

addEventListener('load',function(){

    function cambiarColor(){
        var bg=boton.style.background;
        if(bg=="green"){
            boton.style.background="red";
        }else{
            boton.style.background="green";
        }
    }
    
    var boton = document.querySelector("#boton");
    
    //evento click
    
    boton.addEventListener('click',function(){
        cambiarColor();
    })
    
    //evento mouseover
    
    boton.addEventListener('mouseover',function(){
        boton.style.background = "yellow";
    })
    
    //evento mouseout
    boton.addEventListener('mouseout',function(){
        boton.style.background = "#CCC";
    })
    
    
    //focus
    var input = document.querySelector('#campo_nombre')
    input.addEventListener('focus',function(){
        console.log('[focus] Estás dentro del input')
    })
    
    //blur
    var input = document.querySelector('#campo_nombre')
    input.addEventListener('blur',function(){
        console.log('[blur] Estás fuera del input')
    })
    
    //keydown
    
    var input = document.querySelector('#campo_nombre')
    input.addEventListener('keydown',function(event){
        console.log('[keydown] Estás pulsando la tecla',String.fromCharCode(event.keyCode))
    })
    
    //keypress
    var input = document.querySelector('#campo_nombre')
    input.addEventListener('keypress',function(event){
        console.log('[keypress] Tecla presionada',String.fromCharCode(event.keyCode))
    })
    
    //keyup
    var input = document.querySelector('#campo_nombre')
    input.addEventListener('keyup',function(event){
        console.log('[keyup] Tecla soltada',String.fromCharCode(event.keyCode))
    })
    
    
})
