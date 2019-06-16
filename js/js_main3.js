$(document).ready(function (){

    /**     JQuery - РАБОТА СОБЫТИЯМИ И CSS КЛАССАМИ  */
    $('#addGreen').on('click', function () {
       $('#testBox').addClass('greenBg');
    });
    $('#removeGreen').on('click', function () {
       $('#testBox').removeClass('greenBg');
    });
    $('#toggleGreen').on('click', function () {
        $('#testBox').toggleClass('greenBg');
    });
    // пример ниже считается плохой практикой, так как css свойства должны
    // храниться в отдельном файле css
    $('#customCss').on('click', function () {
        $('#testBox').css('border', 'solid 3px red');
    })
});