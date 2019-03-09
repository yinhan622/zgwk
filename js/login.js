
(function(){// 登录
//1.查到触发事件元素

    var form=document.forms[0];
    var txtName=form.username;
    var txtPwd=form.pwd;
    console.log(txtName,txtPwd);
    //2.绑定单击事件元素
    txtPwd.onfocus=txtName.onfocus=function(){
        //3.查找要修改 的元素
        var div=this.parentNode.nextElementSibling;
        //4.修改元素
       div.className="";
    }
   
    var a,b;
    txtName.onblur=function(){
        var div=this.parentNode.nextElementSibling;
        div.className="vali_info";
        var reg=/^\w{1,10}$/;
        if(reg.test(this.value)){
           // div.className="vali_success";
            return a=true;
        }else{
         //   div.className="vali_fail";
            return a=false;
        }
    }
   
    
    txtPwd.onblur=function(){
        var div=this.parentNode.nextElementSibling;
        div.className="vali_info";
        var reg=/^\w{1,6}$/;
        if(reg.test(this.value)){
           // div.className="vali_success";
            return b=true;
        }else{
          //  div.className="vali_fail";
            return b=false;
        } 
    }
    //查找提交按钮
    var  butSubmint=form.elements[form.length-1];
    console.log(butSubmint);
    butSubmint.onclick=function(){
        console.log(txtName.value)
        if(!a){
            console.log(txtName.value)
            txtName.focus();
        }else if(!b){
            txtPwd.focus();
        }else{
            console.log(3)
            form.submit();
        }  
        
    }
    form.onsubmit=function(e){
        if(txtName.value!=/^\w{1,10}$/)
        {e.preventDefault();
        }else if(
        txtPwd.value!=/^\w{1,6}$/)
        {e.preventDefault();}

    }
  
})()







