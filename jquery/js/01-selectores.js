$(document).ready(function(){
 
    //Selector de ID
    var rojo = $("#rojo").css("background","red")
                         .css("color","white");
    var amarillo = $("#amarillo").css("background","yellow")
                                 .css("color","white");
    var verde = $("#verde").css("background","green")
                           .css("color","white");
    
    //Selector de clases

    var mi_clase = $(".zebra").css("padding","5px")

    console.log(mi_clase);

    mi_clase.css("border","5px dashed black")

    $('.sin_borde').click(function(){
        $(this).addClass('zebra')
    })

    //Selector por etiqueta
    var parrafos = $('p').css("cursor",'pointer');

    parrafos.click(function(){
    let that = $(this);
    if(!that.hasClass('grande')){
        that.addClass('grande')
    }else{
        that.removeClass('grande')
    }
       
    })

    //Selector de atributo
    $('[title="Google"]').css('background','#ccc');
    $('[title="Facebook"]').css('background','blue');

    //Otros
    //$('p, a').addClass('margen-superior');
    //var busqueda = $("#caja").find('.resaltado');
    var busqueda = $("#caja .resaltado");
        console.log(busqueda);


});

