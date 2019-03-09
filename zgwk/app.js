
const express = require('express');
const pool=require("./pool");
const cors=require("cors");

var app=express();
var server=app.listen(6220);

app.use(express.static("public"));

app.use(cors({
  origin:["http://127.0.0.1:5500",
  "http://localhost:5500"],
  credentials:true
}));
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}))
//功能一：商品列表
app.get("/products",(req,res)=>{
  var pno = req.query.pno;
  var pageSize = req.query.pageSize;
  if(!pno){pno=1}
  if(!pageSize){pageSize=8}
  var sql = " SELECT lid,title,";
  sql +=" subtitle,price,lg";
  sql +=" FROM zgwk_product";
  sql +=" LIMIT ?,?";
  var offset = (pno-1)*pageSize;
  pageSize = parseInt(pageSize);
  pool.query(sql,[offset,pageSize],(err,result)=>{
    if(err)throw err;
    res.send({code:1,data:result});
  })
})
//功能一：用户登录
app.get("/login",(req,res)=>{
  var uname=req.query.uname;
  var upwd=req.query.upwd;
  var sql="SELECT uid FROM  zgwk_user WHERE uname=? AND upwd=md5(?)";
  pool.query(sql,[uname,upwd],(err,result)=>{
    if(err)throw err;
    if(result.length==0){
      res.send({code:-1,msg:"用户名或者密码错误"})
    }else{
      res.send({code:1,msg:"登录成功"})
      

    }
  })
})
