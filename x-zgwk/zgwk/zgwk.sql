SET NAMES UTF8;
DROP DATABASE IF EXISTS zgwk;
CREATE DATABASE zgwk CHARSET=UTF8;
USE zgwk;

/** 用户信息 **/
CREATE TABLE zgwk_user(
	uid INT PRIMARY KEY AUTO_INCREMENT,
	uname VARCHAR(32),
	upwd VARCHAR(32),
	phone VARCHAR(16),
	user_name VARCHAR(32),
	gender INT 
);

INSERT INTO zgwk_user VALUES
(NULL,'tom','123456','316996437@qq.com','13616795285','汤姆','1'),
(NULL,'jerry','622197','316996437@qq.com','15662304186','吉姆','0'),
(NULL,'linday','654328','316996437@qq.com','15553578182','琳琳','1'),


/** 商品类别 **/
CREATE TABLE zgwk_class_family (
	fid INT PRIMARY KEY AUTO_INCREMENT,
	fname VARCHAR(32)
);
INSERT INTO zgwk_class_family VALUES
(NULL,"零食"),
(NULL,"水果"),
(NULL,"粮油"),
(NULL,"蔬菜"),
(NULL,"饮料"),
(NULL,"酒类"),
(NULL,"女装"),
(NULL,"男装"),
(NULL,"户外"),
(NULL,"健身"),
(NULL,"饰品"),
(NULL,"工艺"),
(NULL,"家电"),
(NULL,"交通");
/** 商品 **/
CREATE TABLE zgwi_product{
	
}
/** 商品详情 **/
CREATE TABLE zgwi_product_detalis(
	sid INT PRIMARY KEY AUTO_INCREMENT;
	family_fid VARCHAR(32),
	sname VARCHAER(32),
);
INSERT INTO zgwk_class_family VALUES
(NULL,1),
(NULL,1),
(NULL,1),
(NULL,1),

/** 商品图片 **/

CREATE TABLE zgwk_pic(
	pid INT PRIMAYR KEY AUTO_INCREMENT,
	sid INT,
	
);
/** 微信小程序 中国网库 美食表 **/
CREATE TABLE zgwk_shop(
   id INT PRIMARY KEY AUTO_INCREMENT,
   img_url VARCHAR(255),
   name VARCHAR(255),
   tel  VARCHAR(255),
   addr  VARCHAR(255),
   time  VARCHAR(255),
   star INT
);
INSERT INTO zgwk_shop VALUES(NULL,"http://127.0.0.1:6220/img/rBADvFtfw0eAPPOmAAAhAd24c_c887.jpg",'家居','13652448','山东省威海市环翠区','8:00~19:00',91);
INSERT INTO zgwk_shop VALUES(NULL,"http://127.0.0.1:6220/img/rBADvVvG3RyAJxprAAANZyvMQHs360.jpg",'服装','15649252','北京万寿路','8:00~19:00',60);
INSERT INTO zgwk_shop VALUES(NULL,"http://127.0.0.1:6220/img/rBADvFs5vAOASadzAABaHrKLxMw244.jpg",'食品','133333333','北京万寿路','8:00~19:00',80);
INSERT INTO zgwk_shop VALUES(NULL,"http://127.0.0.1:6220/img/rBADvVvbw6uARcd4AABuBG1c0qs101.jpg",'农副水产','133333333','北京万寿路','8:00~19:00',50);
INSERT INTO zgwk_shop VALUES(NULL,"http://127.0.0.1:6220/img/rBADvVtNrTGAVRLsAABFN_kVlKI780.png",'礼品玩具','133333333','北京万寿路','8:00~19:00',66);
INSERT INTO zgwk_shop VALUES(NULL,"http://127.0.0.1:6220/img/rBADvFriiNiAN3aPAAAS_8VnG60570.jpg",'建材','133333333','北京万寿路','8:00~19:00',88);
