<template>
    <div class="app-index">
    <!--轮播图-->
        <mt-swipe>
        <mt-swipe-item v-for="item of list" :key="item.id"> 
            <img src="../img/banner/slider-1.jpg" >
        </mt-swipe-item>
        </mt-swipe>
        <!--特色展示-->
        <div class="">
            <div class="item-title">
                <h1>特色展示</h1>
                <h3>Featured display</h3>
            </div>
             <div class="col-4">
                <div class="item item-music">
                    <img src="../img/icon-1.png" class=".item-pad-1" >
                    <h2>音乐</h2>
                    <p>啤酒让人麻醉，音乐让人清醒，摇摆灯光深 夜美味，低吟浅唱亦或是引亢高歌。手持啤酒，碌着烧烤，一起哼唱，充分释放</p>
                </div>
            </div>
             <div class="col-4">
                <div class="item item-music">
                    <img src="../img/icon-2-2.png" class=".item-pad-1" >
                    <h2>音乐</h2>
                    <p>音乐和啤酒就是绝配，搭配天生的华尔兹舞步现场氛围快速升温，让您体验一样与众不同的烧烤盛宴，手持啤酒，碌着烧烤</p>
                </div>
            </div>
            <div class="col-4">
                <div class="item item-music">
                    <img src="../img/icon-3.png" class=".item-pad-1" >
                    <h2>聚会</h2>
                    <p>音乐和啤酒就是绝配，搭配天生的华尔兹舞步现场氛围快速升温，让您体验一样与众不同的烧烤盛宴，手持啤酒，碌着烧烤</p>
                </div>
            </div>
        </div>
        <!--更要强调-->
        <section id="Taste">
            <div class="container">
                <img class="item-taste" src="../img/in-title.png"></h2>
                <div class="taste-text">
                    <h3>要味道</h3>
                    <p>一店撸遍全球，现串现烤，想怎么吃就怎么吃。鲜香麻辣，浓油赤酱，满足每个挑剔的吃货。尽情撸串，酣畅淋漓，体味人间美食。</p>
                </div>
                <div class="">
                    <div class="col-12">
                        <div class="item-ad-img">
                            <img src="../img/ad-1.jpg" alt="要味道">
                        </div>
                    </div>
                </div>
                <div class="taste-text">
                    <h3>更要腔调</h3>
                    <p>大口撸串，放肆喝酒，尽情high唱，这里没有规矩，没有界限，追求自由和释放才是属于年轻人自己的腔调</p>
                </div>
                <div class="">
                    <div class="col-12">
                        <div class="item-ad-img">
                            <img src="../img/ad-2.jpg" alt="要味道">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <div class="items">
                            <img src="../img/f-1.png" >
                            <h3>半成品输出，极速配送</h3>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="items">
                            <img src="../img/f-2.png" >
                            <h3>半成品输出，极速配送</h3>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="items">
                            <img src="../img/f-3.png" >
                            <h3>半成品输出，极速配送</h3>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="items">
                            <img src="../img/f-4.png" >
                            <h3>半成品输出，极速配送</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    </div>
</template>
<script>

export default {
  data(){
      return{
          list:[
              {id:1,img_url:"../img/banner/slider-1.jpg"},
              {id:2,img_url:"../img/banner/slider-1.jpg"}
          ]
      }
  }
}
</script>
<style >
.app-index{height:300px;width:100%;margin:0 auto;}
.app-index img{width:100%;height:300px;}


.item-title{text-align:center;padding-top:20px;} 
.item-title h1{color:#fff;font-weight:normal;margin:0;font-size:22px;}
.item-title h3{color:#fff;font-weight:200;margin-top:0;font-size:16px;}

/*音乐 */
.item-music{
    background:url(../img/icon-music.jpg) no-repeat center center ;
}
.item{height:auto;margin-bottom:10px;}
.item-pad-1{background-size:200px;height:150px;}
.item h2{ padding-bottom: 20px;font-size: 18px;
    color: #fff; font-weight: 200;text-align:center;
}
 .item p {margin: 0; font-size: 14px;color: #e6e6e6;font-weight: 200;
}
/*要味道 */
#Taste {
    background: #000000;
    margin-bottom: 10px;
}
.item-taste {
    overflow: hidden;
    margin: 20px auto 0;
    width: 300px;
    height: 65px;
    text-align: center;
    text-indent: -999px;
   
}
.item-ad-img {
    padding-top: 10px;
}
.item-ad-img img {
    width: 100%;
    height: 100%;
    display: block;
    border: none;
}
.taste-text {
    text-align: center;
}
.taste-text h3 {
    font-size: 22px;
    color: #fff;}
.taste-text p {
    font-weight: 200;
    font-size: 16px;
    color: #fff;
}


.items {
    position: relative;
    padding: 15px 10px 10px 50px;
    margin-bottom: 20px;
    margin-top: 20px;
}
.items img {
    max-width: 100%;
    height: 50px;
    left: 0;
    position: absolute;
    top: 0;
    width: 43px;
}
.items h3 {
    font-weight: 200;
    color: #d7d7d7;
    font-size: 16px;
    margin: 0;
    padding-left: 20px;
}
   @media (max-width:767px){
       .col-3 {width: 25%;}
       .item-title h1{
           font-size:18px;color:#fff;font-weight:normal;margin-bottom:0;
       }
      .item-title h3{
          font-size:16px;color:#fff;font-weight:normal;margin-top:0;
      } 
       .col-4,.col-3 {
            float: left;
            min-height: 1px;
            padding-left: 80px;
             width: 60%;
            margin:0 auto;
            
        }
      .container>img{width:70%;margin-left:100px;height:20%;}
   }
    @media (min-width:768px){
        .item {
            height: auto;
            padding: 15px 10px 30px 10px;
        }
        .col-4,.col-3 {
            width: 20%;
            float: left;
            min-height: 1px;
            padding-left: 15px;
            padding-right: 15px;
            position: relative;
            margin-left: 10%;
        }
        .row {
    margin-left: -15px;
    margin-right: -15px;
}
        
    }
    
</style>