$(function(){  
    $.ajax({
        url:"http://127.0.0.1:6220/products",
        type:"get",
        dataType:"json",
        success: function(result) {
            console.log(result.data)
            var products=result.data;
            var html="";
            for(var p of products){
                var {lid,lg,price,title,subtitle}=p;
                html+=`<div class="item">
                <i class="AD">
                    <img src="img/product/mainpro.png" >
                </i>
                <div class="pic-box">
                    <div class="pic-box-inner">
                        <div class="pic">
                            <a href="detalis.html?lid=${lid}">
                                <img src="${p.lg}" >
                            </a>
                        </div>
                    </div>
                </div>
                <div class="ctx-box">
                    <p class="line-wrap g-clearfix">
                        <a class="line" href="javascript:;">在线询价</a>
                    </p>
                    <p class="line-1">新<span class="red">核桃</span>**价 <span class="red">纸皮核桃 新疆喀什地区原产地休闲零食</span>...</p>
                    <div class="line-2 g-clearfix" >
                        <div class="line-left f1">
                            <a href="javascript:;" class="shopname">
                                <span>${p.subtitle}</span>
                            </a>
                        </div>
                        <div class="line-right">
                            <a href="javascript:;" title="企业信息已核审">
                                    <img src="img/product/ysh.png" >
                            </a>
                            <a class="bcp_img" title="权威机构认证，对企业真实度进行核实">
                                <img src="img/product/no_bcp.png" >
                            </a>
                        </div>
                    </div>
                    <div class="line-3 g-clearfix">
                        <div class="f1">
                                <a href="javvascript:;">
                                    <img src="img/product/s_jphy.png" >
                                </a>
                        </div>
                        <div class="fr">
                            <span class="qq">
                                    <a href="javascript:;" class="qq1">
                                        <img src="img/product/qq.png" >
                                    </a>
                            </span>
                        </div>
                    </div>
                    </div>
            </div>`;
            $("#plist").html(html);
            }

        }
     })
})