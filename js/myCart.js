(function(){

var log=document.querySelector("div.middle_content div div:last-child span:last-child");

log.onclick=function(){
    var log=this;
    var div=document.getElementById("login");
    div.className="";
}
var  X=document.getElementById("login_close");
X.onclick=function(){
    var div=document.getElementById("login");
    div.className="login";
}
})()