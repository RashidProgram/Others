<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>PHP</title>
    </head>
    <body>
<?php
  echo "Привет мир<br />";   
  echo "Привет мир!<br />";   
  echo "Сегодня ".date("y.m.d")."<br />"; 
$my_variable = 100;
        echo $my_variable."<br/>";
$my_variable = 99;
        echo $my_variable."<br/>";
 $a = 100; #целое число - integer,int
 $b = 10.32;#дробь - float
 $v = "PHP";#сторока - string,str
 $c = array(
     'name' => 'Rashid',
     'surname'=>'Velihanov',
     'age'=>13,
     'byear'=>2004,
    'school'=>'false',
    'universiti'=>'false'
     ); #массив - array
        echo $c['universiti'];
        
        $weather = 'дождь';
        if($weather == 'снег'){
            echo 'Сейчас '.$weather.' лучше никуда не ехать';}      
        if($weather == 'ясно'){
            echo 'Сейчас '.$weather.' можно ехать куда хочешь';}        
        if($weather == 'дождь'){
            echo 'Сейчас '.$weather.' лучше никуда не ехать';}      
        if($weather == 'облачно'){
            echo 'Сейчас '.$weather.' можно ехать но погода может испортиться';}
    echo '<br/>';
        $year = 21;
        if($year >= 24){
            echo 'Входите';
        }
        else {
            echo 'Вы молодой';
        }
        
        for($i = 0;$i <= 10;$i++){
            echo $i.'<br />';
        }
        echo 'Информация о пользователе: ';
        foreach($c as $value)
        {
            echo $value." ";
        }
 ?>
    </body>
 </html>