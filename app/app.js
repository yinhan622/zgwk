
const express = require("express");
const pool = require("./pool");

var app = express();
app.listen(3000); 
app.use(express.static("public"));
const cors = require("cors");
app.use(cors({
  origin:["http://127.0.0.1:8080",
  "http://localhost:8080"],
  credentials:true
}));
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}))
//功能一:home 组件轮播图片  
app.get("/imageList",(req,res)=>{
   var list = [
     {id:1,img_url:"http://127.0.0.1:3000/img1/slider-1.jpg"},
     {id:2,img_url:"http://127.0.0.1:3000/img1/slider-2.jpg"},
   ];
   res.send(list); 
});
//功能二:获取新闻列表分页显示
app.get("/HuoList",(req,res)=>{
  var pno=req.query.pno;
  var pageSize=req.query.pageSize
  //2:设置默认值  pno 1 pageSize 7
  if(!pno){
    pno = 1;
  }
  if(!pageSize){
    pageSize = 7;
  }
  //3:创sql语句 
  var sql = " SELECT id,title,img_url";
  sql +=" ,ctime,point";
  sql +=" FROM kth_huo";
  sql +=" LIMIT ?,?";
  var ps = parseInt(pageSize);
  //(2-1)*7= 7
  var offset = (pno-1)*pageSize;
  pool.query(sql,[offset,ps],(err,result)=>{
     if(err)throw err;
     res.send({code:1,data:result});
  })
  //4:返回 
});
//功能三:获取新闻列表分页显示
app.get("/products",(req,res)=>{
  //1:参数 pno pageSize
  var pno = req.query.pno;
  var pageSize = req.query.pageSize;
  //2:允许使用默认值  1 7  15:15
  if(!pno){pno=1}
  if(!pageSize){pageSize=7}
  //3:sql
 var sql = " SELECT l.lid,l.title,";
 sql+=" l.price,p.lg";
 sql+=" FROM kth_laptop l,kth_laptop_pic p";
 sql+=" WHERE l.lid = p.laptop_id";
 sql+=" GROUP BY l.lid";
 sql+=" LIMIT ?,?";
 //4:json 
 var offset = (pno-1)*pageSize;
 pageSize = parseInt(pageSize);
 pool.query(sql,[offset,pageSize],(err,result)=>{
   if(err)throw err;
   res.send({code:1,data:result});
 }) 
});
//功能四:获取一条活动信息
app.get("/findNewsInfo",(req,res)=>{
  var id=req.query.id;
  var reg=/^\d{1,}$/;//验证 id是否是数组
  if(!reg.test(id)){
   res.send({code:-1,msg:"格式有误"});
   return;//函数不在执行   如果错了 就停止
  }
  var sql="SELECT id ,title,content,ctime,img_url FROM kth_huo WHERE id=? "
  pool.query(sql,[id],(err,result)=>{
    if(err) throw err;
    res.send({code:1,data:result});
  });
});
//功能五： 活动评论
app.get("/getComment",(req,res)=>{
  var nid=req.query.nid;
  var pno=req.query.pno;
  var pageSize=req.query.pageSize;
  if(!pno){
    pno=1;
  }
  if(!pageSize){
    pageSize=6;
  }
  var sql="SELECT id,content,ctime,nid FROM kth_comment WHERE nid=? LIMIT ?,?";
  var  offset=(pno-1)*pageSize;
  pageSize=parseInt(pageSize);
  pool.query(sql,[nid,offset,pageSize],(err,result)=>{
    if(err)throw err;
    res.send({code:1,data:result});
  })
});
//功能六： 发表评论
app.post("/addcomment",(req,res)=>{
var nid=req.body.nid;
var content=req.body.content;
var sql="INSERT INTO kth_comment VALUES(null,?,now(),?)";
pool.query(sql,[content,nid],(err,result)=>{
  if(err)throw err;
  if(result.affectedRows>0){
  res.send({code:1,msg:"评论发表成功"});
    }else{
      res.send({code:-1,msg:"评论发表失败"});
    }
  })
})
//功能七:获取商品详细信息
app.get("/findProduct",(req,res)=>{
  //1:参数 pid
  var pid = req.query.pid;
  //2:sql  SELECT lname,price FROM xz_laptop WHERE //lid=?
  var sql =" SELECT title,price,lg FROM kth_laptop";
      sql+=" WHERE lid = ?";
  //3:json {code:1,data:[]}
  pool.query(sql,[pid],(err,result)=>{
     if(err)throw err;
     res.send(result);
  })
});

//功能八:用户登录
app.get("/login",(req,res)=>{
 var uname = req.query.uname;
 var upwd = req.query.upwd;
 var sql = " SELECT id FROM kth_login";
      sql+=" WHERE uname = ? AND upwd = md5(?)";
 pool.query(sql,[uname,upwd],(err,result)=>{
    if(err)throw err;  
    if(result.length==0){
      res.send({code:-1,msg:"用户名或密码有误"});
    }else{
      var id=result[0].id;
      req.session.uid=id;
      console.log(req.session.uid);
      //将用户登录凭证保存在服务器端 session对象中
      res.send({code:1,msg:"登录成功"});
    }
 });
})


