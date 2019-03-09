//1.ʹ��exprexx����web������
const express = require('express');
const pool = require("./pool");
const bodyParser = require('body-parser');
//����·��ģ��

var app=express();
var server=app.listen(6220);

const cors = require("cors");
app.use(cors({
  origin:["http://127.0.0.1:8080",
  "http://localhost:8080"],
  credentials:true
}));
//1:下载 express-session 并且配置
const session = require("express-session");
app.use(session({
  secret:"128位随机字符", //安全字符串
  resave:false,          //每次请求是否都更新数据
  saveUninitialized:true, //初始化时保存数据
  cookie:{
    maxAge:1000 * 60 * 60 * 8
  }
}));
//2.ʹ��body-parser�м��
app.use(bodyParser.urlencoded({extended:false}));
//3.�йܾ�̬��Դ��publicĿ¼��
app.use(express.static('public'));

//功能一:home 组件轮播图片  
app.get("/imagelist",(req,res)=>{
  var rows=[
    {code:1,img_url:"http://127.0.0.1:6220/img/rBADvVv7pmCADlMLAAF8p5aND80970.jpg"},
    {code:1,img_url:"http://127.0.0.1:6220/img/rBADvVv7V1uAZxTBAAHaly66VTA004.png"},
    {code:1,img_url:"http://127.0.0.1:6220/img/rBADvVv-YeaAHyNYAAI0vyCkZGg587.jpg"},
    {code:1,img_url:"http://127.0.0.1:6220/img/rBADvVvyGXCAGUTCAADjvECgGwk085.jpg"},
  ];
  res.send(rows);
})
//功能一:home 九宫格
app.get("/icons",(req,res)=>{
  var rows=[
    {id:1,img:"http://127.0.0.1:6220/icons/grid-01.png",title:"美食"},
    {id:2,img:"http://127.0.0.1:6220/icons/grid-02(1).png",title:"灯具"},
    {id:3,img:"http://127.0.0.1:6220/icons/grid-03.png",title:"结婚"},
    {id:4,img:"http://127.0.0.1:6220/icons/grid-04.png",title:"卡拉OK"},
    {id:5,img:"http://127.0.0.1:6220/icons/grid-05.png",title:"找工作"},
    {id:6,img:"http://127.0.0.1:6220/icons/grid-06.png",title:"辅导"},
    {id:7,img:"http://127.0.0.1:6220/icons/grid-07.png",title:"汽车保养"},
    {id:8,img:"http://127.0.0.1:6220/icons/grid-08.png",title:"租房"},
    {id:9,img:"http://127.0.0.1:6220/icons/grid-09.png",title:"装修"},
  ];
  res.send(rows);
})
app.get("/zglist",(req,res)=>{
  var rows=[
    {id:1,fname:"零食",log:"http://127.0.0.1:6220/img/rBADu1wXvUeAbK8gAAAZE__IiTY046.jpg",title:"橘子"},
    {id:2,fname:"水果",log:"http://127.0.0.1:6220/img/rBADvFs8NJ6AcOj2AAAVL6oivw0213.jpg",title:"火龙果"},
    {id:3,fname:"粮油",log:"http://127.0.0.1:6220/img/rBADvFvQFnqAVwV5AAAKtbmQd9A452.jpg",title:"犁"},
    {id:4,fname:"蔬菜",log:"http://127.0.0.1:6220/img/rBADu1wXvUeAbK8gAAAZE__IiTY046.jpg",title:"石榴"},
    {id:5,fname:"饮料",log:"http://127.0.0.1:6220/img/rBADvFwPIFOALJFjAABdCTLZZaU557.png",title:"饼干"},
     {id:6,fname:"饮料",log:"http://127.0.0.1:6220/img/rBADu1wXvUeAbK8gAAAZE__IiTY046.jpg",title:"饼干"},
     {id:7,fname:"饮料",log:"http://127.0.0.1:6220/img/rBADu1wXvUeAbK8gAAAZE__IiTY046.jpg",title:"饼干"},
     {id:8,fname:"饮料",log:"http://127.0.0.1:6220/img/rBADu1wXvUeAbK8gAAAZE__IiTY046.jpg",title:"饼干"},
     {id:9,fname:"饮料",log:"http://127.0.0.1:6220/img/rBADu1wXvUeAbK8gAAAZE__IiTY046.jpg",title:"饼干"},
     {id:10,fname:"饮料",log:"http://127.0.0.1:6220/img/rBADu1wXvUeAbK8gAAAZE__IiTY046.jpg",title:"饼干"}
  ];
  res.send(rows);
})

//功能三:微信小程序 美食列表分页查询
app.get("/shoplist",(req,res)=>{
  //1.参数
  var pno=req.query.pno;
  var pageSize=req.query.pageSize; 
  if(!pno){
    pno=1;
  } 
  if(!pageSize){
    pageSize=7;
  } 
  //1.2创建变量保存执行进度
  var progress=0;
  //1.3创建变量最终发送JS对象
  var obj={code:1}
  //2.sql语句 
  var sql="SELECT id,img_url,name,tel,addr,time,star FROM zgwk_shop LIMIT ?,?" ;
  var offset=(pno-1)*pageSize;
  pageSize=parseInt(pageSize);
  pool.query(sql,[offset,pageSize],(err,result)=>{
    if(err)throw err;
    progress+=50;//进度值加50
    obj.data=result;//保存当前内容
    if(progress==100){//如果进度值100
      res.send(obj);//发送
    }
  });

  //sql查询总页数
  var sql="SELECT count(id) as c  FROM zgwk_shop";
  //3.返回结果
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    var ps=Math.ceil(result[0].c/pageSize);
    progress+=50;
    obj.pageCount=ps;
    if(progress==100){
      res.send(obj);
    }
  });
})
