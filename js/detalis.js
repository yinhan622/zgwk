(function(){
/*************购物车****************/
var btns=document.querySelectorAll("div.spec-wrap dl dd  span a");
//遍历btns中每个按钮，为其绑定单击事件的处理函数
for(var btn of btns){
    btn.onclick=function(){
    var btn=this; //当前触发事件的btn
    //查找要修改的元素 value值
    var input=btn.parentNode.children[1];
    //查找要修改的元素 库存数量
    var count=btn.parentNode.parentNode.previousElementSibling;
    var n=parseInt(input.value);  
    //如果btn内容为+ 就n++ 
    if(btn.innerHTML=="+"){
    n++;
    count.innerHTML--;
        }else  if(n>0){
    n--;
    count.innerHTML++;
    }
    //获取的值放回value里
    input.value=n;
    //修改小计: 
    var pirce=parseInt( btn.parentNode.parentNode.previousElementSibling.previousElementSibling.innerHTML);
    //小计sub=数量n*单价price
    var sub//总价格
    
    //var pic=document.querySelector("table.order>tbody>tr>td>p:first-child>span:last-child").innerHTML=`￥${sub}`;
    //2个input标签
    var vals=document.querySelectorAll("div.spec-wrap dl dd span input");
    console.log(vals);
    var total=0;//采购总数
    //遍历每个一个input中间订购数量  
    for(var val of vals){
        total+=parseFloat(val.value);
        sub=total*pirce;
    }
    //采购总数的位置
    document.querySelector("table.order>tbody>tr>td>p:first-child>span:first-child")
    .innerHTML=`${total}`;
    //采购总数的价格
    document.querySelector("table.order>tbody>tr>td>p:first-child>span:last-child").innerHTML=`￥${sub}`;

}

}
/*******************放大镜************************/
//查找触发事件  点击小图片 换成大图片
var uls=document.querySelectorAll("#spec>.spec-img>ul>li");

//2.绑定单击事件
for(var li of uls){
li.onclick=function(){
    var li=this;
    //3.查找要修改的元素  中图片位置img
    var src=li.querySelector("span>i>a>img").getAttribute("src");

    //4.修改元素 替换中图片
    document.querySelector(".img-left>a>div span i img").setAttribute("src",src);
    //5.找到大图片位置
    var div= document.querySelector("#div-g");
// console.log(div);
    div.style.background=`url('${src}') no-repeat`;
 //中图片遮罩层元素

var mImg= document.querySelector("#super-mask")

mImg.onmouseover=function(){
    
    document.querySelector("#mask").className='';
    document.querySelector("#div-g").className='';
    
} 


mImg.onmouseout=function(){
    
    document.querySelector("#mask").className='none';
    document.querySelector("#div-g").className='none';
}

var mask= document.querySelector("#mask");
mImg.onmousemove=function(e){
    var offsetX=e.offsetX;
    var offsetY=e.offsetY;

    var top=offsetY-176/2;
    var left=offsetX-176/2;
    if(top<0){top=0;}  
    else if(top>176){top=176;}
    if(left<0) {left=0;}
    else if(left>176) {left=176;}

   // mask.style.top=`${top}px`;
    //mask.style.left=`${left}px`;
    var mask= document.querySelector("#mask");
    console.log(mask);
    mask.setAttribute("style",`top:${top}px; left:${left}px`);

    var div=document.querySelector("#div-g");
      
  //div.setAttribute("style",`background-position:-${left*2}px  -${top*2}px`);
  div.style.backgroundPosition=`-${left*2}px  -${top*2}px`;
    
}

    
}}
})()