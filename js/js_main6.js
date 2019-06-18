
$(document).ready(function () {

//1.  Получим значение атрибута src у картинки
    let $srcValue = $('#imgHolder img').attr('src');
    //alert($srcValue);
    let $carImage = $('#imgHolder img');

//2. поменяем значение атрибута у картинки
    $('.colorBlue').on('click', function () {
        $carImage.attr('src', 'images/blue.png');
    });
    $('.colorBronze').on('click', function () {
        $carImage.attr('src', 'images/bronze.png');
    });
    $('.colorRed').on('click', function () {
        $carImage.attr('src', 'images/red.png');
    });
    $('.colorWhite').on('click', function () {
        $carImage.attr('src', 'images/white.png');
    });
    $('.colorGrey').on('click', function () {
        $carImage.attr('src', 'images/grey.png');
    });
    $('.colorBlack').on('click', function () {
        $carImage.attr('src', 'images/black.png');
    });
    // так же можно сделать, что бы был плавный переход между картинками
    //например:
    // $('.colorBlue').on('click', function () {
    //     $carImage.fadeOut(100, function () {
    //         $carImage.attr('src', 'images/blue.png')
    //             .fadeIn(100);
    //     });
    //
    // });
    // $('.colorBronze').on('click', function () {
    //     $carImage.fadeOut(100, function () {
    //         $carImage.attr('src', 'images/bronze.png')
    //             .fadeIn(100);
    //     });
    // });

//3. ЕДИНОЕ действие для всех цветов
//     $('.colorsSelector').on('click', function () {
//        let imagPath;
//         //imagPath = $('data-img-path');
//        imagPath = $(this).attr('data-img-path');
//        //console.log(imagPath);
//         $('#imgHolder img').attr('src', imagPath);
//     });
    // но тут не выводится undefined, как я понимаю не работает метод atrr
    // и data



});