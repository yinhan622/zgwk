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


INSERT INTO zgwk_user VALUES(NULL,'tom',md5('111111'),'13616795285','汤姆','1');
INSERT INTO zgwk_user VALUES(NULL,'jerry',md5('222222'),'15662304186','吉姆','0');
INSERT INTO zgwk_user VALUES(NULL,'linday',md5('333333'),'15553578182','琳琳','1');


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
CREATE TABLE zgwk_product{
	
}
/** 商品详情 **/
CREATE TABLE zgwk_product(
	lid INT PRIMARY KEY AUTO_INCREMENT,
	family_fid VARCHAR(32),
	title  VARCHAR(128),
	subtitle VARCHAR(128),
	price DECIMAL(10,2), 
	lg  VARCHAR(128) 

);
INSERT INTO zgwk_product VALUES(NULL,2,'商洛蓝秦岭深山原生态农家自种老树核桃礼盒装2.5kg','商洛盛泽农林科技发展有限公司',14,'http://127.0.0.1:6220/img/product/rBADvFrNxV-AZE1hAAC6DjgwQeM326.jpg');
INSERT INTO zgwk_product VALUES(NULL,2,'野生老核桃 野生原味薄皮休闲零食核桃 营养价值高孕...','富平县贝嘉森迪农业开发有限公司',92,'http://127.0.0.1:6220/img/product/rBADvFuweseAW2WiAAC03c-PIQI558.jpg');
INSERT INTO zgwk_product VALUES(NULL,2,'【陕西特产】新鲜青皮核桃 去皮核桃五斤包邮','富平县贝嘉森迪农业开发有限公司',60,'http://127.0.0.1:6220/img/product/wKgGTFmmcvKAcw5qAAEsy2vhas0852.jpg');
INSERT INTO zgwk_product VALUES(NULL,2,'散装核桃大量批发 红河散装核桃 绿色天然核桃散装 ...','富平县贝嘉森迪农业开发有限公司',10,'http://127.0.0.1:6220/img/product/wKgGTFlnOpyAHItzAAETmlQKybY682.jpg');
INSERT INTO zgwk_product VALUES(NULL,2,'光头李记炒核桃190g椒盐奶香手剥核桃酥脆可口休闲孕...','富平县贝嘉森迪农业开发有限公司',13,'http://127.0.0.1:6220/img/product/rBADvVpdWRaAXw-yAAWgG1lxA7o781.jpg');
INSERT INTO zgwk_product VALUES(NULL,2,'新货大核桃仁加工 原味散装核桃仁 原味核桃仁批发1斤...','富平县贝嘉森迪农业开发有限公司',13,'http://127.0.0.1:6220/img/product/rBADu1xqnyyAL0B4AACLgYq1I2g073.jpg');
INSERT INTO zgwk_product VALUES(NULL,2,'核桃苗价格有核桃苗出售当年结果核桃苗3公分核桃树种植...','富平县贝嘉森迪农业开发有限公司',13,'http://127.0.0.1:6220/img/product/rBADvFoqNpKAKz86AAHwI0rLK8g980.jpg');
INSERT INTO zgwk_product VALUES(NULL,2,'金脑袋 琥珀核桃仁袋装250g 芝麻味 坚果炒货零食...','富平县贝嘉森迪农业开发有限公司',13,'http://127.0.0.1:6220/img/product/rBADvFoqNpKAKz86AAHwI0rLK8g980.jpg');
INSERT INTO zgwk_product VALUES(NULL,2,'供应韩城特产核桃 原生核桃去皮 现卖现摘果园直发 ...','富平县贝嘉森迪农业开发有限公司',13,'http://127.0.0.1:6220/img/product/rBADvFoqNpKAKz86AAHwI0rLK8g980.jpg');
INSERT INTO zgwk_product VALUES(NULL,2,'光头李记炒核桃190g椒盐奶香手剥核桃酥脆可口休闲孕...','富平县贝嘉森迪农业开发有限公司',13,'http://127.0.0.1:6220/img/product/rBADvFoqNpKAKz86AAHwI0rLK8g980.jpg');
INSERT INTO zgwk_product VALUES(NULL,2,'光头李记炒核桃190g椒盐奶香手剥核桃酥脆可口休闲孕...','富平县贝嘉森迪农业开发有限公司',13,'http://127.0.0.1:6220/img/product/rBADvFoqNpKAKz86AAHwI0rLK8g980.jpg');
INSERT INTO zgwk_product VALUES(NULL,2,'光头李记炒核桃190g椒盐奶香手剥核桃酥脆可口休闲孕...','富平县贝嘉森迪农业开发有限公司',13,'http://127.0.0.1:6220/img/product/rBADvFoqNpKAKz86AAHwI0rLK8g980.jpg');
INSERT INTO zgwk_product VALUES(NULL,2,'光头李记炒核桃190g椒盐奶香手剥核桃酥脆可口休闲孕...','富平县贝嘉森迪农业开发有限公司',13,'http://127.0.0.1:6220/img/product/rBADvFoqNpKAKz86AAHwI0rLK8g980.jpg');
INSERT INTO zgwk_product VALUES(NULL,2,'光头李记炒核桃190g椒盐奶香手剥核桃酥脆可口休闲孕...','富平县贝嘉森迪农业开发有限公司',13,'http://127.0.0.1:6220/img/product/rBADvFoqNpKAKz86AAHwI0rLK8g980.jpg');


/** 商品图片 **/

CREATE TABLE zgwk_pic(
	pid INT PRIMAYR KEY AUTO_INCREMENT,
	sid INT,
	
);















