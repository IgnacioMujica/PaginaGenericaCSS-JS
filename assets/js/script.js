/*Evento forma*/

/*MANEJO ERROR LLENADO FORMA*/
$('#boton-forma').click(function() {
    if ((!$('#texto-nomre').val()) || (!$('#texto-asunto').val()) || (!$('#texto-forma').val())) {
        alert('Por favor Complete todos los campos  del formulario de contacto.');
        return false;

    }
    else {
        alert("Su mensaje ha sido enviado!");
    }
});


$('.nav-link').click(function () {
    $('.nav-link').removeClass('active');
    $(this).addClass('active');
});

/*Tooltips*/
$('i').tooltip();


$('.carousel').carousel({
    interval: 10000
});

