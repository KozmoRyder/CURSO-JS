$(document).ready(function(){

    var caja = $('#caja')
    $('#mostrar').hide();
    
    $('#mostrar').click(function(){
        $(this).hide();
        $('#ocultar').show();
        $('#caja').show('normal');

    })
    $('#ocultar').click(function(){
        $(this).hide();
        $('#mostrar').show();
        $('#caja').hide('normal');

    })
    $('#animar').click(function(){
        caja.animate({marginLeft: '500px',
                      fontSize: '40px',
                      height: '110px'
                    },'slow')
                .animate({
                    borderRadius: '900px',
                    marginTop: '80px'
                },'slow')
                .animate({
                    marginLeft: '0px',
                    borderRadius: '100px',
                    marginTop: '0px'
                },'slow')
                .animate({marginLeft: '500px',
                      fontSize: '40px',
                      height: '110px'
                    },'slow')
    })
})