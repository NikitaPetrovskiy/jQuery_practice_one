$(document).ready(function () {

$('#formSum').on('submit', function (event) {
     event.preventDefault();  //  отменяем отправку формы

    let numberOne, numberTwo, summ;
      numberOne = $('#numberOne').val(); // присваиваем переменным значение инпутов
      numberTwo = $('#numberTwo').val();
      numberOne = parseInt(numberOne); //по дефолту значение из инпутов это строка
      numberTwo = parseInt(numberTwo); // этим методом преобразуем их в число

    if (isNaN(numberOne) || !Number(numberOne)) numberOne = 0; // проверки на отсутствие числа
    if (isNaN(numberTwo) || !Number(numberTwo)) numberTwo = 0;

    summ = numberOne + numberTwo
      $('#sumResult').text(summ); // выводим результат
});
});