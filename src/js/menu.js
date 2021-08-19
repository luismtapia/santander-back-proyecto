import { getAleatoria, getCategorias, getCategoriasLength } from './search';
getCategoriasLength();

$('.ui .item').on('click', function() {
    $('.ui .item').removeClass('active');
    $(this).addClass('active');
});

$(document).ready(function() {
    $('.computer.only .dropdown.item')
        .popup({
            inline: true,
            hoverable: true,
            position: 'bottom left',
            delay: {
                show: 300,
                hide: 800
            }
        });
    $('.ui.dropdown').dropdown();
    $('.ui.accordion').accordion();
    $('.ui.circular.icon.button').popup();

    // bind "hide and show vertical menu" event to top right icon button 
    // toggle para mostrar o ocultar acordion de semantic-ui
    $('#hamburguesa').click(function() {
        $('#menu').toggle("250", "linear")
    });
    $('#buscar').click(function() {
        $('#busqueda').toggle("swing")
    });

    
});