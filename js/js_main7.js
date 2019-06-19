$(window).ready(function () {

// //1. Добавляю новый элемент на страницу
//     let $newContent =  $(
//         '<h1>Заголовок</h1>' +
//         '<p>Обзац с текстом</p>' +
//         '<ul>' +
//         '<li>Пункт 1</li>' +
//         '<li>Пункт 2</li>' +
//         '<li>Пункт 3</li>' +
//         '</ul>'
//     );
//     $newContent.hide();  //скрываю
//     $('#testBox').html($newContent); //добавляю в разметку
//
// //2. При клике на элемента появляется новый элемент
//     $('#testBox').on('click', function () {
//       $newContent.fadeToggle();
//     });

// 3. примеры новых элементов
$('#testBox').html('<h4 class="sfg">.html() - Новый заголовок</h4>');
$('#testBox').append('<p>.append() - добавить <b>в конец</b> списка</p>');
$('#testBox').prepend('<p>.prepend() - добавить <b>в начало</b> списка</p>');
$('#testBox').after('<p>.after() - добавить <b>после указанного</b> тега</p>');
$('#testBox').before('<p>.before() - добавить <b>перед указанным</b> тегом</p>');

// Обёртка
$('#textNoWrap').wrap('<div class="pinkBorder"></div>');
//$('#textInWrap').unwrap();
//$('#textInWrap').unwrap('.greenBorder');
//$('#textInWrap').unwrap('.blueBorder');  // через уровень не пройдёт

// Удаление елементов со страницы
//$('#toDeleteEmpry').empty();  //удаляет содержимое (текстовый узел)
//$('#toDeleteRemove').remove(); // удаляет полностью элемент

// Клонирование елементов
// let $cloneElem = $('#testBox').clone();


// Немного всё вместе
//     let $cloneElem;
// $('#testBox').on('click', function () {
//     $cloneElem = $(this).clone();
//     $cloneElem.addClass('greenBorder');
//     $cloneElem.text('Новый элемент');
//     $(this).after($cloneElem);
//     $cloneElem.on('click', function () {
//         $(this).toggleClass('greenBorder').toggleClass('blueBorder');
//     });
//     $cloneElem.on('dblclick', function () {
//         $cloneElem.remove();
//     })
// });



});