
$(document).ready(function () {

    /**         JQuery СОБЫТИЯ (базовые)    */
    /*
    .click(); --- клик
    .dblclick(); --- даблКлик
    .mouseenter(); --- когда навели внутрь элемента
    .mouseLeave(); ---  когда увели курсор из элемента
    .focus(); ---  когда элемент в фокусе
    .blur();  --- когда елемент уходит из фокуса
    .change(); --- когда изменяем что нибудь
    .keyup(); --- кода отпускаем (поднимаем) клавишу
    */

    //$('#button-1').click(function () {
    //    console.log('Hello!');
    //});
    //$('#button-1').click( function () {
    //    $('#top-header').toggleClass('pinkColor');
    //});
    /**  Но лучше использовать Метод .on(); Этот метод работает с любыми элементами на странице,
         например если мы только что добавили элемент на страницу (ajax).
    */
    //$('#button-1').on('click', function () {
    //    $('#top-header').toggleClass('pinkColor');
    //});
    //$('#button-1').on('dblclick', function () {
    //    $('#top-header').toggleClass('pinkColor');
    //});
    //$('#testArea').on('mouseenter', function () {
    //    $('#testArea').toggleClass('orangeBg');
    //});
    /**  Ключевое слово this работает внутри функции, так как он автоматически
         начинает работать в контексте выбранного элементе
     */
    //$('#testArea').on('mouseleave', function () {
    //    $(this).toggleClass('orangeBg');
    //});

    /**     Форма  */
    //$('#inputName').on('focus', function () {
    //    $(this).addClass('focus');
    //});
    //$('#inputName').on('change', function () {
    //    //$('#textHolder').text('Hello! write your text!');
    //    $('#textHolder').text($(this).val());
    //});
    //$('#inputName').on('blur', function () {
    //    $(this).val('');
    //    $(this).removeClass('focus');
    //});

    //$('#inputName').on('keyup', function () {
    //    $('#textHolder').text($(this).val());
    //})

    /**     Отлавливаем клавиши
         Коды клавиш и символов http://jquery.page2page.ru/index.php5/Коды_символов_и_клавиш
     */
    //$('#inputName').on('keyup', function (e) {
    //   if (e.which === 27) {
    //       $('#textHolder').text('');
    //   }
    //});

});