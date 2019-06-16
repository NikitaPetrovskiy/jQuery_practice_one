$(document).ready(function () {

     /**    JQuery - АНИМАЦИЯ, СКРЫТИЕ И ПОКАЗ ЭЛЕМЕНТОВ  */

     // .animate(); -- Изменить свойство css с анимацией
     // .animate({css props}, duration in ms);
     $('#customWidth').on('click', function () {
        $('#testBox').animate({'width': '150px'}, 2500 );
        $('#testBox').animate({'height':  '150px'}, 1000);
     });
     $('#customOpacity').on('click', function () {
        $('#testBox').animate({'opacity': '0'}, 1500);
     });

     // .hide(time); -- скрытие
     // .delay(time) -- задержка
     // .show(time); -- показ
    $('#hide').on('click', function () {
       $('#testBox').hide(1000);
    });
    $('#show').on('click', function () {
       $('#testBox').show(1500);
    });
    $('#hideAndShow').on('click', function () {
       $('#testBox').hide(1000).delay(1000).show(1000);
    });

    // .fadeOut() -- скрытие
    // .fadeIn()  -- показ
    // .fadeToggle() -- скрытие или показ
    $('#fadeOut').on('click', function () {
       $('#testBox').fadeOut(1500);
    });
    $('#fadeIn').on('click', function () {
       $('#testBox').fadeIn(1500);
    });
    $('#fadeToggle ').on('click', function () {
        $('#testBox').fadeToggle(1500);
    });

    // .slideUp() --
    // .slideDown() --
    // .slideToggle() --
    $('#slideUp').on('click', function () {
       $('#testBox').slideUp(1000);
    });
    $('#slideDown').on('click', function () {
        $('#testBox').slideDown(1000);
    });
    $('#slideToggle').on('click', function () {
        $('#testBox').slideToggle(1000);
    });
});