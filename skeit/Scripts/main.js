function clickOko() {
  var q = document.getElementById("okoImg");
  
  console.log(q.getAttribute("src"))
  if (q.getAttribute("src") == "images/okoOpen.png"){
    q.removeAttribute("src");
    q.setAttribute("src","images/okoClose.png");
     jQuery("#userPass").attr('type','password');

  }
  else if (q.getAttribute("src") == "images/okoClose.png"){
    q.setAttribute("src","images/okoOpen.png");
    jQuery("#userPass").attr('type','text');

}}
