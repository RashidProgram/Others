<!DOCTYPE HTML>
<html lang="ru">
<head>

 <link type="text/css" rel="stylesheet" href="../format.css">
     <link type="text/css" rel="stylesheet" href="../format2.css">
    <meta charset="utf-8">
    <title> Изучаем язык JavaScript</title>
 </head>
<body>

   <div class="head_part">
    <div id="menu">
	<ul>
		<li><a href="index.html" class="current">home</a></li>
		<li><a href="index2.html">about us</a></li>
		<li><a href="index_2.html">services</a></li>
		<li><a href="index3.html">solutions</a></li>
		<li><a href="index4.html">contact us</a></li>			<li><a href="index.php">phpfail</a></li>					
	</ul>
</div>

       <!-- <ul class="vert_menu">

   <li class="vert_menu_item"> <a href="index.html">Первый сайт</a>  
<li class="vert_menu_item"> <a href="index_2.html">    Второй сайт</a></li>
        <li class="vert_menu_item"><a href="index3.html">Третий сайт</a></li>
 </ul>-->
       
    <div class="Privetstvie">
     <script> 
        
        if(person=prompt('Введите свое имя'))
      document.write('Здравствуйте ' + person) 
     else document.write("Здравствуйте ,гость")</script> 
    </div>
           <div class="horisontal_menu">
               <span class='hlmenu'><a href="https://google.com">Google</a></span>
               <span class='hlmenu'><a href="https://yandex.com">Yandex </a></span>
               <span class='hlmenu'><a href="https://youtube.com">Youtube</a></span>
               <span class='hlmenu'><a href="https://vk.com">VK</a></span>
               <span class='hlmenu'><a href="https://unium.ru">unium</a></span>
               <span class='hlmenu'><a href="https://ru.wikipedia.org">wikipedia</a></span>   
      
            </div>
          <div class="logo"><img src="../logo.png"></div>

          <div class="slogon"> На лице  любимой промелькнула тень, <br />
И вспыхнул взгляд, такой обычно кроткий.<br />
Последнее, что помню я в тот день-<br />
            Был черный диск чугунной сковородки!<br /> 
            
            
            </div>
            
            </div>
            
            
           
          <div class="middle">

 
          <p id="paragraph"></p>
<button onclick="myFyction()" >Vizvati funcciu</button>
      
 
 
 <script> 
   
    function myFyction() {  a = 2;
    b = 3;
   z = a + b
 document.getElementById('paragraph').innerHTML = z;
    
   
   //var = numberType = 56;
   //var = StringType = 'Строка'
   
  // x = StringType + numberType + numberType; 
   

}
 
 </script>
               <a href="index_2.html">Новый проект</a>
 <script>

var x = 4;
 var y = 7; 
  if(x > y)
   document.write('true');
  else
   document.write('<br><br>Falce');
 var z;  
  z = 2;
  document.write('<br><br><br><br>')
           switch(z) {
   case 1: document.write('result = 1'); break;
   case 2: document.write('result = 2'); break;
   case 3: document.write('result = 3'); break;
   case 4: document.write('result = 4'); break;
   case 5: document.write('result = 5'); break;
   case 6: document.write('result = 6'); break;
   case 7: document.write('result = 7'); break;
   
break;
   default: document.write('Eror') ; 
 
  document.write('<br><br><br><br>');
  x != y ? document.write('YES') : document.write('NO ') ;}

  </script>
 <br><br> <br>
<script>
 {
    var i;               
for(i = 0; i <= 10; i++)
document.write(i+'<br>') ;
 }
 </script>
 <script>
  var x = 0 ;
 while(x > 20 ){
  document.write(x + '<br>') 
 }
 </script>


 <form name="formx" action="" method=""> 
Введите пароль (не больше 8 символов)
  <input id='formx'type="password" placeholder="Поиск..." title='Введите' maxlength="8"/>
	<br />
	<br />
<input type="text" name="a" placeholder="0"  id="a" size="4px" value=''/>
	<input type="button" onclick="summa()" class="X" value="+" /> 
  <input  type="button" onclick="raznost()" class="X" value="-"/> 
  <input type="text" value="" placeholder="0"  name="b"  class="b" size="4px"/> =
     <input type="text" placeholder="0" value="" class="otvet"name="otvet" size=9px />
  
      <pre>         <input type="button" class="X" onclick="chastnoe()" value="/" /> <input  type="button" class="X" onclick="proizvedenie()" value="X"/> 
       </pre>


	
 <div class="kalkulator">Калькулятор</div>
     </form>
 <noscript>Вы отключили скрипт пожалуйста зайдите в настройки доп. настройки разрешать JavaScript </noscript>
 <script>
var n;
  var m;                            
  var u ;
function summa() {
    
  n=eval (document.formx.a.value)  ;
   m=eval (document.formx.b.value);
 u=n+m 
 document.formx.otvet.value =u ; 
}
  function raznost() {
 n=eval (document.formx.a.value)  ;
   m=eval (document.formx.b.value);
 u=n-m 
 document.formx.otvet.value =u ; 
}
    function chastnoe() {
 n=eval (document.formx.a.value)  ;
   m=eval (document.formx.b.value);
 u=n/m 
 document.formx.otvet.value =u ; 
}
    function proizvedenie() {
  n=eval (document.formx.a.value)  ;
   m=eval (document.formx.b.value); 
 u=n*m 
 document.formx.otvet.value =u ; 
}
    
  //if(confirm("Вы уверены,"+ person )) 
  //  alert('Здравствуйте,'+ person);
   // else
   //  alert(person + ' не уверен'); 
   

  </script> 
 <script>
  var sts = "sts" 
  var arr = new Array(sts,1.23,3.42,false) ;
  document.write(arr[0] +"<br />"+ arr[2]);
  document.write(arr[0] +"<br />"+ arr[1]);
 
 
 </script>
   <script> 
        
               
               
               
               
               
               
               
               
               </script>
            </div>
        <div>
    
              
              
  
          
          </div>
          <div class="copyright_line">2017unium</div>  
          
     
</body>
</html>

