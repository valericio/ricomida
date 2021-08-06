/* Valericio Carrasco */
$(document).ready(function(){
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    });

    /* doble clic y alerta*/
    $("#enviarCorreo").dblclick(function(){
        alert("El correo fue enviado correctamente...");  
     });

    /* un click y cambio color a los H3*/
    $("h3").on("dblclick",function(){
        $(this).css({
            "color":"red",
        });
    });

    /* click en el titulo de la tarjeta y desaparece el texto de la tarjeta*/
    $(".card-title").click(function(){
        $(".card-text").toggle();
        $(".card-img-top").toggle();
    });

   })