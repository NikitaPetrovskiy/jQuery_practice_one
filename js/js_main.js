

$(document).ready(function () {

    /**         $  это объект jQuery     */


    /**         ОБРАЩАЕМСЯ ПО СЕЛЕКТОРЫ*/
    //$(' ')


    /**        СЕЛЕКТОРЫ        */
    //$('h1').addClass('selected');
    //$('p').addClass('selected');
    //$('h2').addClass('selected');
    //$('ul').addClass('selected');
    //$('li').addClass('selected');

    /**         СЕЛЕКТОРЫ ПО id     */
    //$('#top-header').addClass('selected');
    //$('#second-list-item').addClass('selected');
    //$('#one-more-p').addClass('selected');


    /**         СЕЛЕКТОРЫ ПО class    */
    //$('.header-2').addClass('selected');
    //$('.block').addClass('selected');
    //$('.green').addClass('selected');


    /**         КОМБИНИРОВАННЫЕ СЕЛЕКТОРЫ    */
    //$('ul .green').addClass('selected');
    //$('h3.green').addClass('selected');
    //$('h2 ~ p').addClass('selected');
    //$('#second-list-item ~ li').addClass('selected');
    //$('h2 + p').addClass('selected');


    /**         ПРОСТЫЕ ФИЛЬСТРЫ      */
    //$('p:first').addClass('selected');
    //$('p:last').addClass('selected');
    //$('p:odd').addClass('selected'); //нечетные
    //$('p:even').addClass('selected'); //четные
    //$('p:eq(0)').addClass('selected'); // по номеру (как в массиве)
    //$('p:eq(3)').addClass('selected');


    /**        ФИЛЬТРЫ ПО СОДЕРЖИМОМУ  */
    //$('h3:has(span)').addClass('selected');
    //$('.block:parent').addClass('selected'); //кто является родителем
    //$('.block:empty').addClass('selected'); // пустой


    /**       ФИЛЬТРЫ ПО ОТТРИБУТАМ  */
    //$('a').addClass('selected');
    //$('a[href="http://google.ru"]').addClass('selected'); // по конкретному оттрибуту
    //$('a[href!="http://google.ru"]').addClass('selected'); // не равно определённому оттрибуту
    //$('a[href^="http"]').addClass('selected'); // которые начинаются с определённых оттрибутов
    //$('a[href$=".com"]').addClass('selected'); //которые заканчиваются на определённый оттрибут


    /**    СОВЕТ!  БЫСТРЕЕ ВСЕГО РАБОТАЕТ ПОИСК ПО id. ЛУЧШЕ ВСЕГО ПОЛЬЗОВАТЬ ЭТИМ ПОИСКОМ  */
    /**  ВОТ ПРИМЕР*/

    $('#contacts span .green').addClass('selected');
    /**  ищем конкретко по id  и уже в нем достаём то, что нам нужно
     *   под капом это обрабатывается быстрее и легче*/
    

});