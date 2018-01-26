<!DOCTYPE html>
<html>
<head>
    <style>@import url(https://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900,900italic);

* {
    margin: 0;
    padding: 0;
}

body {
    background-color: #f7f7f7;
    font-family: 'Roboto', sans-serif;
}

#headerWrap {
    width: 100%;
    float: left;
    border-bottom: 1px solid #b5b7ba;
    background-color: #dfdfdf;
}

#header {
    width: 1300px;
    margin: 0 auto;
    height: 50px;
    text-align: center;
    padding-top: 18px;
}

#header #selected {
    color: #000;
}

#center {
    width: 100%;
    float: left;
    margin: 0 auto;
}

#header a {
    color: #4d4d4d;
    font-size: 20px;
    font-weight: 100;
    text-align: left;
    text-decoration: none;
    height: 30px;
    line-height: 30px;
    display: inline-block;
}

#header span {
    padding: 0 38px;
}

#contentWrap {
    width: 100%;
    float: left;
}

#content {
    height: 806px;
    width: 1300px;
    margin: 0 auto;
}

#content h1 {
    width: 100%;
    float: left;
    text-align: center;
    color: #2e353d;
    font-size: 40px;
    font-weight: 300;
    margin-top: 63px;
    margin-bottom: 75px;
}

#content h3 {
    color: #242424;
    font-size: 35px;
    font-weight: 300;
    text-align: left;
    margin-left: 41px;
    margin-bottom: 52px;
}

#content h5 {
    color:  #242424;
    font-size: 24px;
    text-align: left;
}

#content img {
    margin-left: 17px;
}

#content #box_text {
    width: 671px;
    background-color: #ffffff;
    float: right;
    padding: 49px 48px 51px 76px;
}

#content #box_text p {
    color: #242424;
    font-size: 24px;
    font-weight: 100;
    text-align: left;
    margin-bottom: 31px;
}

#content #box_text a  {
    color: #40678a;
    font-size: 24px;
    font-weight: 100;
    text-align: center;
    text-decoration: none;
    padding-right:30px;
}


#content .media {
    margin-right: 0;
}

#content #box {
    background-color: #ffffff;
    width: 1238px;
    height: 446px;
    margin: 170px auto 0 auto;
    padding-top: 37px;
    padding-left: 38px;
}

#content #box p {
    color: #242424;
    font-size: 24px;
    font-weight: 100;
    text-align: left;
    margin-top: 37px;
    margin-bottom: 30px;
}

#content #box input {
    border: 1px solid #a0a0a0;
    background-color: #f5f5f5;
    width: 457px;
    height: 34px;
    padding-left:10px;
    font-size:20px;
    font-weight: 100;
    margin-bottom: 12px;
}

#content #box a {
    display: block;
    float: left;
    background-color:  #8cbbd3;
    color:  #ffffff;
    font-size: 24px;
    font-weight: 300;
    text-align: center;
    text-decoration: none;
    margin-top: 30px;
    padding:11px 51px;
}

#content #box a:hover {
    background-color: #5ba1d3;
}

#footer {
    background-color: #434445;
    width: 100%;
    float: left;
    height: 140px;
    text-align: center;
    color: #a4a4a4;
    font-size: 20px;
    font-weight: 100;
    line-height: 140px;
}

#footer a {
    color: inherit;
}</style>
    <meta charset="utf-8">
    <title>Личный сайт студента GeekBrains</title>
    <link rel="stylesheet" href="style.css">
    <script>
        var correctAnswersCount = 0;
        function askQuestion(textBoxId, answer) {
            var userAnswer = document.getElementById(textBoxId).value;
            userAnswer = userAnswer.toLowerCase();
            if (userAnswer == answer) {
                correctAnswersCount++;
            }
            document.getElementById(textBoxId).value = '';
        }

        function playPuzzle() {
            askQuestion('userAnswer1', 'елка');
            askQuestion('userAnswer2', 'капуста');
            document.getElementById('result').innerHTML = 'Вы угадали ' + correctAnswersCount + ' загадок';
            correctAnswersCount = 0;
        }
    </script>
</head>
<body>
    <div id="headerWrap">
        <div id="header">
            <a href="index.html">Главная</a>
            <span>/</span>

            <a href="puzzle.html">Загадки</a>
            <span>/</span>

            <a href="#">Угадайка</a>
            <span>/</span>

            <a href="guess-2.html">Угадайка мультиплеер</a>
        </div>
    </div>

    <div id="contentWrap">
        <div id="content">
            <div id="center">
                <h1>Игра в загадки</h1>
                <div id="box">
                    <p id="result"></p>

                    <p>Зимой и летом одним цветом?</p>
                    <input type="text" id="userAnswer1">
                    
                    <p>Сто одежек и все без застежек?</p>
                    <input type="text" id="userAnswer2">
                    
                    <br><br>
                    <a href="#" onclick="playPuzzle();">
                        Ответить
                    </a>
                </div>
            </div>
        </div>
    </div>

    <div id="footer">
        Copyright © 2016 <a href="https://geekbrains.ru/">GeekBrains</a>
    </div>
</body>
</html>