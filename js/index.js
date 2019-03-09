window.onload=function(){
     var wrap=document.getElementById("container");//轮播图父元素
     var prev=document.getElementById("prev");
     var next=document.getElementById("next");
     var div=document.getElementById('container-1');//轮播图父元素外层
  


        /*轮播图左边按钮*/
    prev.onclick=function(){
        index++;
        if(index>4){
        index=0;
        }
        showCurrent();
        animate(-760);
    }
    /*轮播图右边按钮*/
    next.onclick=function(){
        index--;
        if(index<0){
        index=4;
        }
        showCurrent()
        animate(760);
    }

      /*轮播图左右边按钮*/
   function animate(offset){
       var newLeft=parseInt(wrap.style.left)+offset;
       wrap.style.left=newLeft+"PX";
       if(newLeft<-3040){
           wrap.style.left=0+"px";
       }
       if(newLeft>0){
           wrap.style.left=-3040+"px";
       }
   }
 


    /*轮播定时器按钮*/
   var timer=setInterval(function(){prev.onclick()},1500);

   div.onmouseover=function(){
    clearInterval(timer);
    }
    div.onmouseout=function(){
    timer=setInterval(function(){prev.onclick()},1500);
     }
 /*轮播定时器按钮*/
    var index=0;
     var dots=wrap.nextElementSibling.children;//控制标
      console.log(dots);
        function showCurrent(){
            for(var i=0,len=dots.length;i<len;i++){
                dots[i].className="";
            }
            dots[index].className="on"
        }
       
}  
/*点击控制标*/
for (var i = 0, len = dots.length; i < len; i++){
    (function(i){
        dots[i].onclick = function () {
            var dis = index - i;
            if(index == 4 && parseInt(wrap.style.left)!==-3800){
                dis = dis - 5;     
            }
            //和使用prev和next相同，在最开始的照片5和最终的照片1在使用时会出现问题，导致符号和位数的出错，做相应地处理即可
            if(index == 0 && parseInt(wrap.style.left)!== -760){
                dis = 5 + dis;
            }
            wrap.style.left = (parseInt(wrap.style.left) +  dis * 760)+"px";
            index = i;
            showCurrent();
        }
    })(i);  
    
    
   
}

