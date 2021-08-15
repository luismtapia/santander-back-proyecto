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

    // bind "hide and show vertical menu" event to top right icon button 
    $('.ui.toggle.button').click(function() {
        $('.ui.vertical.menu').toggle("250", "linear")
    });
});