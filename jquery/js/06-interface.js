$(document).ready(function(){

    //Mover elemento por la pagina
    $('.elemento').draggable();

    //redimensionar elemento
    $('.elemento').resizable();

    //Seleccionar Elementos
    //$('.lista-seleccionable').selectable();

    //Reordenar Lista
    $('.lista-seleccionable').sortable({
        update: function(event, ui){
            console.log("La lista a cambiado")
        }
    })

    //Arrastrar y soltar elemento
    $('#elemento-movido').draggable();
    $('#area').droppable({
        drop: function(){
            console.log("Has soltado algo dentro del area")
        }
    });
    //Tooltip
    $(document).tooltip();

    //Dialog   
    $("#lanzar-popup").click(function(){
        $("#popup").dialog();
    })
    
    //Datepicker
    $("#calendario").datepicker();

    //Tabs
    $("#pestanias").tabs();


})