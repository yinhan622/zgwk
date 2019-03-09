(function(){
    //找到搜索框的位置
  var text=document.querySelector("div.seek .input input")
  var btn=text.nextElementSibling;  
  //console.log(btn);
    btn.onclick=function(){
      //  alert("疼");
     // var input=btn.previousElementSibling;
      //console.log(input.value="你好");
        if(text.value.trim()!==""){
           location.href=`http://127.0.0.1:5500/product.html?kw=${text.value}`
        }else{
            alert("请输入关键字");
        }
    }
    text.onkeyup=function(e){
        if(e.keyCode==13)
        btn.onclick();
    }
   
})()
