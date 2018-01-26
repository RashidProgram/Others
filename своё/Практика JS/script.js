function task1(){
document.getElementById('result').innerHTML = ""
var from = document.getElementById('start').value
var end = document.getElementById("end").value
from = parseInt(from)
end = parseInt(end)
for (from; from <= end; from++) {
document.getElementById('result').innerHTML += from + "<br />"
}}

