$(document).ready(function(){
		var rv = /[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}/;
	var valueDefault = $('#email').val();
	$('#email').focus(function(){
		if ($(this).val() == valueDefault){$(this).val('')}
	}).blur(function(){
		if ($(this).val() == ''){$(this).val(valueDefault);}
		if ($(this).val() == valueDefault){$(this).css({"border":"1px solid #494949"})}
		else if ($(this).val().search(rv) == -1){$(this).css({"border":"1px solid #c00"})}
		else if($(this).val().search(rv) != -1){$(this).css({"border":"1px solid #0a0"})}
																		
		$("#my_button").click(function(){
			$(this).attr("disabled","disabled")
		})
	})
	$('#gallery').hide()
	$('#my_button').click(function(e){
		if(confirm("Вы уверены")){
			return true;
		}
		else{
			e.preventDefault()
		}
	})
	var smallImg = $('#small a');
	var bigImg = $('#big img');
	i=1
	smallImg.click(function(e){
		e.preventDefault();
		if(bigImg.attr('src') != $(this).attr('href')){bigImg.hide().attr("src",$(this).attr("href")).load(function(){bigImg.fadeIn(2000)});$('#small a').css({'border':'none','opacity':'1'}).fadeTo(0,1);;$(this).css({'border':'1px solid red','opacity':'0.6'})}

	})
	$('#hideGallery').click(function(){
		if (i == 0){
		$(this).text("Показать галерею");
		$('#gallery').slideUp(2000);
		i++
	}
		else if(i == 1){
		$(this).text("Скрыть галерею");
		$('#gallery').slideDown(2000);
			i--
	}})
	
})


	/*
	Методы для форм:
	.val(value) - для (если не указан параметр) получения  или (если параметр указан) изменения значения input   
	Выборки для форм:
	:input - выбор input
	:text - выбор всех input type="text"
	:password - выбор всех input type="password"
	:radio - выбор всех input type="radio"
	:checkbox - выбор всех input type="chexbox"
	:submit - выбор всех input type="submit"
	:image - выбор всех input type="image"
	:reset - выбор всех input type="reset"
	:button - выбор всех input type="button"
	:file выбор - всех input type="file"
	:hidden - выбор всех input type="hidden"
	:chekhed - выбор всех отмеченых radio и checkbox
	:selected - выбор выюраного select
	
	Методы с событиями:
	preventDefault() - предотвратить стандартное поведение объекта
	Свойства событий
	pageX - координаты по оси Х от края браузера
	pageY - координаты по оси Y от края браузера
	screenX - координаты по оси Х от края экрана
	screenY - координаты по оси Y от края экрана
	altKey - была ли нажата кнопка alt
	shiftKey - была ли нажата кнопка shift
	ctrlKey - была ли нажата кнопка ctrl
	target - объект, отрегировший на событие
	События jQuery
 hover(funcMouseOver,funcMouseDown) - действие при наведении - funcMouseOver, при отведении - funcMouseOut
 toggle(funcClisk,funcClick2) - действие при нажатии - funcClisk, при повторном нажатии funcClisk2
 
 События которые отслеживает браузер
 
	Связаное с мышью:
	mouseover - наведение на обьект
	mouseout - отведение от элемента(противоположное onmouseover)
	click - щелчек мышью
	mousedown - нажали на мышь но не отпустили
	mouseup - оспустили кнопку мыши 
	~~click=onmousedown+onmouseup~~
	dblclick - двойное нажатие мышью
	mousemove - наведение мышью
	
	Cвязаное с формами
	submit - нажатие на кнопку type="submit"\
	focus - форма активна
	blur - форма неактивна
	change - с формой чтото произошло(например вы ввели какой-либо символ или нажали на чекбокс)
	reset - при нажатии на кнопку type="reset"
	
	Связаное с клавиатурой
	keypress - полныое нажатие на кнопку
	keydown - опустить палец на кнопку
	keyup - поднять палец с кнопки
	~~keypress=keydown+keyup~~
	
	Связаное с браузером
	load - после загрузки файла
	resize - после изменения размера окна
	scroll - после прокручивания страницы(ползунок справа или колесико мыши)
	unload - при выходе из страницы(на другую или из браузера) 
	
	*/
/*jQuery методы(вызываются через точку по формуле $("Выбока jQuery").названиеМетода(атрибуты)  ):

		.attr(nameAttr,newValue)-получение аттрибута указаного в первом параметре или изменение его значения на второй параметр
		.removeAttr(nameAttr)-удаления аттрибута указаного в параметре
		.css()-Работа с css(пояснения снизу)
			{
				.css(nameProperty,newValue)-получение свойства заданого в nameProperty или изменение его значения на newValue(если он указан)
				.css({
				"property1":"value1",
				"property2":"value2",
				"property3":"value3",
				...
				})- изменение нескольких значений свойств(property1,property2,property3) на соответственые значения(value1,value2,value3)
				ПРИМЕР:$('#mainDiv').css({
				"color":"#33ffa9",
				"bacground-color":"rgb(0,255,0)",
				"font-size":"20px"
				})
					}

		.addClass(className)-создать класс className
		.removeClass(className)-удалить класс className
		.animate({"property1":"value1"...},time)-тоже что и css но изменение происходит в течении time
		.before(html)- вставляет html код перед выбраным элементом 	.after(html)- вставляет html код после выбраного элементa
		.preped(html) - вставляет html код внутри выбранного элемента перед другими дочернеми элементами
		.append(html) - вставляет html код внутри выбранного элемента после других дочерних элементов
		.each(func)-переберает все элементы выборки и делает с ним то что записано в функции func
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
		.slideDown(time)-появление (элемент приходит сверху вниз) параметр для указания за сколько времени появится элемент если не указан то сразу
		
*/
/*Выбока jQuery (и css)
	
		$('#id'); - Выбор по ID
		$('.class'); - Выбор по classу
		$('tag'); - Выбор по тегу
		$('.ranclass,#randid,div')- Выбор элементов с class = 'ranclass', id="randid" и все тгеи div
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
 