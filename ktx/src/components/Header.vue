<template>
	<header id="header">
		<div class="container">
			<div class="global-nav">
				<button class="navbar-toggle" @click="down">
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<a href="index.html" class="brand">烤天下</a>
				<nav class="navbar">
					<ul class="nav">
						<li class="pc-nav-home">
							<a href="#" class="home-current">首页</a>
						</li>
						<li class="pc-nav-food">
							<a href="#" >招牌美食</a>
						</li>
						<li class="pc-nav-char">
							<a href="#" >特色活动</a>
						</li>
						<li class="pc-nav-join">
							<a href="#" >招商加盟</a>
						</li>
						<li class="pc-nav-ente">
							<a href="#" >企业概况</a>
						</li>
						<li class="pc-nav-menn">
							<a href="#" >联系我们</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</header>
</template>
<script>
	export default{
		data(){
			return {}
		},
		methods:{
		down(e){
			
			}
		}
	}
</script>
<style >
/* 头部*/
#header{background:rgba(17,17,17,0.95);z-index:20; }
.container{
	max-width:1100px;
	margin:0 auto;
	padding-right:15px;
	padding-left:15xp;
}
.container:before,.container:after{display:table;content:"";clear:both;}
.icon-bar{display:block;width:22px;height:2px;
background:#fff;}
/* 烤天下logo*/
.brand{display:block;overflow:hidden;width:101px;height:32px;margin:9px 0;text-indent:-999px;
background:url(../img/site-brand.png)no-repeat center top;
background-size:cover;}
/* 导航栏 标题*/
.nav li:nth-child(6){background:none;}
.nav{margin:5px 0; padding-left:0;}
ul{margin:0;padding:0;}
.nav li:first-child{border-top:0;}
.nav li{background:url(../img/nav.png)no-repeat right;position:relative;list-style:none;}
.home-current{background:url(../img/home.png)no-repeat center center;
background-size:70px; text-indent:-9999px;
}
.nav li a{display:block;padding:20px 15px; font-size:16px; color:#fff;}
a{text-decoration:none;}

/* 三个横线*/
.navbar-toggle{float:right;width:40px;height:32px;margin:9px  0;border:0;padding:5px 9px;background:none;cursor:pointer;}
.icon-bar{display:block;width:22px;height:2px;background:#fff;margin-top:5px;}


@media (max-width:768px) {
.navbar{display:none;}
}
@media (min-width:768px) {

.container{
		width:760px;
	}
.global-nav{
	transition:all .5s;
}
.brand{float:left; width:190px;height:60px;}
.navbar{
	float:right;display:block;margin-right:-15px;border-top:0;
	box-shadow:none;
}
.nav{margin:0;}
.nav li{float:left;border:0;}
.nav li a{padding:20px 15px; line-height:40px;
text-align:center;width:90px;font-weight:200;font-size:14px;}
.navbar-toggle{display:none;}
}




@media (min-width: 992px){
	.container{
		width:970px;
		
	}

}
</style>