(function(){
var form=document.forms[0];
var input=form.elements[form.length-2];
input.onclick=function(){
    var log=form.elements[form.length-1];
    log.className="reg-bg";
}
})()