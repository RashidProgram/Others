
$(document).ready(function() {
  $('#moto_table tbody tr:odd').css('color','red');
$('#moto_table tbody tr:even').css('color','yellow');
$('img:not(#div_for_img img)').css ('border','1px solid blue');
$('div:has(>fieldset)').css('color','green');
$('p:contains(Мотоцикл)').css('color','#FF4500');
$('#div_for_img img:first').css('border','1px solid Aqua');
$('#div_for_img img:last').css('border','1px solid Aqua');
  $('div:hidden').css('background','red'); 
    $('#main_h1').text('техт измененный с помощью jQueru')
    var head_img = $('#forheader img');
    head_img = $('img:first');
    head_img = $('img[alt="Хедер"]')
    head_img.fadeOut(2000).fadeIn(2000);
    var myLink = $('#my_links li:last a');
 myLink.hide().text('Это новый текст ссылки').show(2000);
    $('img:not(:first)').hide(5000).show(5000);
    function razmerElemena(idElement){
        var forresults = $('#forresults'); 
        var Elementvit = $('#'+idElement);
                forresults.text(Elementvit.width()+' '+Elementvit.height());
    }
    razmerElemena('div_for_img');
    function out(elementId,timeOut){
        try{
            timeOut = parseInt(timeOut);
            if(timeOut < 500 || timeOut > 10000){
                return false;}
            else{
                try{$('#'+elementId).fadeOut(timeOut) }
                catch(e){return false;}}
        
            }
        
        catch(e){
            return false
        }}
        
    out("img_1",'9999')
	$("#div_for_img").css({"border":"2px solid #cc0000","height":"auto"}).animate({"width":"450"},5000)

$("#div_for_img img:odd:first").css("border","1px solid #ff0000").animate({"border-width":"5px"},5000).fadeOut(5000)
var dfr = $('#div_for_img');
dfr.before("<p>Тест вставлен с помощью before()</p>");
dfr.after("<p>Тест вставлен с помощью after()</p>");
dfr.prepend("<p>Тест вставлен с помощью preped()</p>");
dfr.append("<p>Тест вставлен с помощью append()</p>");

$("img").each(function(){
		if($(this).width()> 400){
				$(this).slideToggle(3000);
		}
});

});

/*jQuery команды
Методы(вызываются через точку по формуле $("Выбока jQuery").названиеМетода(атрибуты)  ):
		.text(newText)-получение или изменение текста(если указан атрибут)
		.hide(time)-исчезновение (элемент уходит в левый верхний угол) параметр для указания за сколько времени исчезнет элемент если не указан то сразу
		.show(time)-повление (элемент появляется из левого верхнего угола) параметр для указания за сколько времени появится элемент если не указан то сразу
		.height(newHeight)-получение или изменение высоты(если указан параметр)
		.width(newWidth)-получение или изменение ширины(если указан параметр)
		.html(htmlTags)-получение или изменение html кода(если указан параметр)
		.fadeOut(time)-исчезновение (элемент становится прозрачным и исчезает)параметр для указания за сколько времени исчезнет элемент если не указан то сразу
		.fadeIn(time)-повление (у элемента увеличивается прозрачность) параметр для указания за сколько времени появится элемент если не указан то сразу
		.fatoTo(time,visibity)-повление\исчезновение методы fadeIn() и fadeOut() в одном, первый параметр  кол-во времени а второй уровень прозрачности
		.slideUp(time)-исчезновение (элемент уходит снизу вверх) параметр для указания за сколько времени исчезнет элемент если не указан то сразу
		.slideDown(time)-исчезновение (элемент приходит сверху вниз) параметр для указания за сколько времени появится элемент если не указан то сразу
		.attr(nameAttr,newValue)-получение аттрибута указаного в первом параметре или изменение его значения на второй параметр
		.removeAttr(nameAttr)-удаления аттрибута указаного в параметре
		.css()
			{
				.css(nameProperty,newValue)-получение свойства заданого в nameProperty или изменение его значения на newValue(если он указан)
				.css({
				"property1":"value1",
				"property2":"value2",
				"property3":"value3",
				...
				})- изменение нескольких значений свойств(property1,property2,property3) на соответственые значения(value1,value2,value3)
				ПРИМЕР:$(#mainDiv).css({
				"color":"#33ffa9",
				"bacground-color":"rgb(0,255,0)",
				"font-size":"20px"
				})
					}

		.addClass(className)-создать класс className
		.removeClass(className)-удалить класс className
		.animate({"property1":"value1"...},time)-тоже что и css но изменение происходит в течении time
		.before(html)- вставляет html код перед выбраным элементом 		.after(html)- вставляет html код после выбраного элементf
		.preped(html) - вставляет html код внутри выбранного элемента перед другими дочернеми элементами
		.append(html) - вставляет html код внутри выбранного элемента после других дочерних элементов
		.each(func)-переберает все элементы выборки и делает с ним то что записано в функции func
*/
/*Выбока jQuery (и css)
		$('#id'); - Выбор по ID
		$('.class'); - Выбор по classу
		$('tag'); - Выбор по тегу
		$('.ranclass,#randid,div')- Выбор элементов с class = 'ranclass', id="randid" и div`ы 
		$('.RandomClaas > p); - Выбор дочерних элементов "P" из тега с class = "RandomClaas"  
		$('#RandomId + p'); - Выбор следуещего тега "P" после тега с id = "RandomId"
		$('.ProstoClass #ProstoId'); - Выбор тегов с id 'ProstoId' вложенных в тег с classом "ProstoClass"
		$('span[id]') - Выбор тегов span у которых есть атрибут id
		$('img[width = 200]'); - Выбор тегов img у которых атрибут width = 200
		$('a[href^= https://]'); - Выбор тегов a у которых атрибут href начинается с "https://"
		$('link[href$= .css]'); - Выбор тегов link у которых атрибут href заканчивается с ".css"
		$('script[src*= jquery]'); - Выбор тегов script у которых в каком-либо месте атрибут src имеет "jquery"
		$('script[src^= images/]'); - Выбор тегов img у которых в начале атрибут src имеет "images/"
		$('#moto_table tbody tr:odd'); - четные теги tr которые находятся внутри tbody а tbody который находится в теге с id '#moto_table'
		$('#moto_table tbody tr:even'); - нечетные теги tr которые находятся внутри tbody а tbody который находится в теге с id '#moto_table'
		$('img:not(#div_for_img img)') - выбраны все теги img кроме находящихся  в теге с  id "#div_for_img"
		$('div:has(fieldset)'); - все теги имеющие внутри себя тег fieldset
		$('p:contains(Мотоцикл)') - все теги Р у которых есть в текстовом узле есть слово Мотоцикл
		$('#div_for_img img:last') - последний тег img находящийся внутри тега с id "div_for_img"
		$('#div_for_img img:first') - первый тег img находящийся внутри тега с id "div_for_img"
		$('div:visibility') - только видимые теги div
		$('div:hidden') - только невидимые теги div
		
*/

