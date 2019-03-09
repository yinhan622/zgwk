SET NAMES UTF8;
DROP DATABASE IF EXISTS kth;
CREATE DATABASE kth CHARSET=UTF8;
USE kth;


CREATE TABLE kth_huo(
  id INT PRIMARY KEY AUTO_INCREMENT,
  title  VARCHAR(255),
  img_url  VARCHAR(255),
  ctime  DATETIME,
  point   INT,
  content VARCHAR(2000)
);

INSERT INTO kth_huo VALUES(null,'奶瓶喝啤酒','http://127.0.0.1:3000/img/huolist/cart/hd-1.jpg',now(),0,'摇滚乐源于美国。直到今天，美国摇滚乐仍然受到青年人的喜爱。摇滚乐是由一种称为“布鲁斯”的爵士乐演变而来的。摇滚乐又称摇摆舞音乐或摇摆乐、滚石乐等，是当今西方世界极其盛行的流行音乐。');
INSERT INTO kth_huo VALUES(null,'练就肺活量','http://127.0.0.1:3000/img/huolist/cart/hd-2.jpg',now(),0,'摇滚乐源于美国。直到今天，美国摇滚乐仍然受到青年人的喜爱。摇滚乐是由一种称为“布鲁斯”的爵士乐演变而来的。摇滚乐又称摇摆舞音乐或摇摆乐、滚石乐等，是当今西方世界极其盛行的流行音乐。');
INSERT INTO kth_huo VALUES(null,'开发小脑','http://127.0.0.1:3000/img/huolist/cart/hd-3.jpg',now(),0,'一摇滚乐源于美国。直到今天，美国摇滚乐仍然受到青年人的喜爱。摇滚乐是由一种称为“布鲁斯”的爵士乐演变而来的。摇滚乐又称摇摆舞音乐或摇摆乐、滚石乐等，是当今西方世界极其盛行的流行音乐。');
INSERT INTO kth_huo VALUES(null,'摇一摇擂台赛','http://127.0.0.1:3000/img/huolist/cart/hd-4.jpg',now(),0,'摇滚乐源于美国。直到今天，美国摇滚乐仍然受到青年人的喜爱。摇滚乐是由一种称为“布鲁斯”的爵士乐演变而来的。摇滚乐又称摇摆舞音乐或摇摆乐、滚石乐等，是当今西方世界极其盛行的流行音乐。');
INSERT INTO kth_huo VALUES(null,'中秋节','http://127.0.0.1:3000/img/huolist/cart/hd-5.jpg',now(),0,'摇滚乐源于美国。直到今天，美国摇滚乐仍然受到青年人的喜爱。摇滚乐是由一种称为“布鲁斯”的爵士乐演变而来的。摇滚乐又称摇摆舞音乐或摇摆乐、滚石乐等，是当今西方世界极其盛行的流行音乐。');
INSERT INTO kth_huo VALUES(null,'比基尼派对','http://127.0.0.1:3000/img/huolist/cart/hd-6.jpg',now(),0,'摇滚乐源于美国。直到今天，美国摇滚乐仍然受到青年人的喜爱。摇滚乐是由一种称为“布鲁斯”的爵士乐演变而来的。摇滚乐又称摇摆舞音乐或摇摆乐、滚石乐等，是当今西方世界极其盛行的流行音乐。');
INSERT INTO kth_huo VALUES(null,'万圣节活动','http://127.0.0.1:3000/img/huolist/cart/hd-7.jpg',now(),0,'摇滚乐源于美国。直到今天，美国摇滚乐仍然受到青年人的喜爱。摇滚乐是由一种称为“布鲁斯”的爵士乐演变而来的。摇滚乐又称摇摆舞音乐或摇摆乐、滚石乐等，是当今西方世界极其盛行的流行音乐。');
INSERT INTO kth_huo VALUES(null,' 欧冠之夜','http://127.0.0.1:3000/img/huolist/cart/hd-8.jpg',now(),0,'摇滚乐源于美国。直到今天，美国摇滚乐仍然受到青年人的喜爱。摇滚乐是由一种称为“布鲁斯”的爵士乐演变而来的。摇滚乐又称摇摆舞音乐或摇摆乐、滚石乐等，是当今西方世界极其盛行的流行音乐。');
INSERT INTO kth_huo VALUES(null,' 萤火虫之夜','http://127.0.0.1:3000/img/huolist/cart/hd-9.jpg',now(),0,'摇滚乐源于美国。直到今天，美国摇滚乐仍然受到青年人的喜爱。摇滚乐是由一种称为“布鲁斯”的爵士乐演变而来的。摇滚乐又称摇摆舞音乐或摇摆乐、滚石乐等，是当今西方世界极其盛行的流行音乐。');
INSERT INTO kth_huo VALUES(null,'生日趴','http://127.0.0.1:3000/img/huolist/cart/hd-11.jpg',now(),0,'摇滚乐源于美国。直到今天，美国摇滚乐仍然受到青年人的喜爱。摇滚乐是由一种称为“布鲁斯”的爵士乐演变而来的。摇滚乐又称摇摆舞音乐或摇摆乐、滚石乐等，是当今西方世界极其盛行的流行音乐。');
INSERT INTO kth_huo VALUES(null,'求婚现场','http://127.0.0.1:3000/img/huolist/cart/hd-12.jpg',now(),0,'摇滚乐源于美国。直到今天，美国摇滚乐仍然受到青年人的喜爱。摇滚乐是由一种称为“布鲁斯”的爵士乐演变而来的。摇滚乐又称摇摆舞音乐或摇摆乐、滚石乐等，是当今西方世界极其盛行的流行音乐。');
INSERT INTO kth_huo VALUES(null,'商务包场','http://127.0.0.1:3000/img/huolist/cart/hd-s1.jpg',now(),0,'摇滚乐源于美国。直到今天，美国摇滚乐仍然受到青年人的喜爱。摇滚乐是由一种称为“布鲁斯”的爵士乐演变而来的。摇滚乐又称摇摆舞音乐或摇摆乐、滚石乐等，是当今西方世界极其盛行的流行音乐。');
CREATE TABLE kth_laptop_pic(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  laptop_id INT,                        
  lg VARCHAR(128)             
);
INSERT INTO kth_laptop_pic VALUES
(NULL, 1, 'img/cart/f-1.jpg'),
(NULL, 2, 'img/cart/f-3.jpg'),
(NULL, 3, 'img/cart/f-5.jpg'),
(NULL, 4, 'img/cart/f-6.jpg'),
(NULL, 5, 'img/cart/f-7.jpg'),
(NULL, 6, 'img/cart/f-8.jpg'),
(NULL, 7, 'img/cart/f-09.jpg'),
(NULL, 8, 'img/cart/f-10.jpg'),
(NULL, 9, 'img/cart/f-11.jpg'),
(NULL, 10, 'img/cart/f-12.jpg'),
(NULL, 11, 'img/cart/f-14.jpg'),
(NULL, 12, 'img/cart/f-15.jpg'),
(NULL, 13, 'img/cart/f-16.jpg'),
(NULL, 14, 'img/cart/f-17.jpg'),
(NULL, 15, 'img/cart/f-4.jpg'),
(NULL, 16, 'img/cart/f-13.jpg')
CREATE TABLE kth_laptop(
  lid INT PRIMARY KEY AUTO_INCREMENT,
  title  VARCHAR(255),         
  price DECIMAL(10,2),
   lg VARCHAR(128)                
);
INSERT INTO kth_laptop VALUES
(NULL,'火焰鸡翅',38,'img/cart/f-1.jpg'),
(NULL,'香辣豆干',14,'img/cart/f-3.jpg'),
(NULL,'卤牛腱',38,'img/cart/f-5.jpg'),
(NULL,'扎啤',8,'img/cart/f-6.jpg'),
(NULL,'烤面包片',3,'img/cart/f-7.jpg'),
(NULL,'五花肉熔岩烧',39,'img/cart/f-8.jpg'),
(NULL,'秘制羊腿排',42,'img/cart/f-9.jpg'),
(NULL,'锡纸脑花',33,'img/cart/f-10.jpg'),
(NULL,'烤羊排',68,'img/cart/f-11.jpg'),
(NULL,'疙瘩汤',16,'img/cart/f-12.jpg'),
(NULL,'烤鸡手',3,'img/cart/f-14.jpg'),
(NULL,'烤方便面',12,'img/cart/f-15.jpg'),
(NULL,'泰椒炒饭',18,'img/cart/f-16.jpg'),
(NULL,'烤藕片',4,'img/cart/f-17.jpg'),
(NULL,'啤酒瓶装',10,'img/cart/f-4.jpg'),
(NULL,'黄金王耗',40,'img/cart/f-13.jpg')

# 评价表
CREATE TABLE kth_comment(
  id INT PRIMARY KEY AUTO_INCREMENT,
  content VARCHAR(50),
  ctime DATETIME,
  nid INT
);
INSERT INTO kth_comment VALUES
(null,'赞一个1',now(),1),
(null,'赞一个2',now(),1),
(null,'赞一个3',now(),1),
(null,'赞一个4',now(),1),
(null,'赞一个5',now(),1),
(null,'赞一个6',now(),1),
(null,'赞一个7',now(),1),
(null,'赞一个8',now(),1),
(null,'赞一个9',now(),1),
(null,'赞一个10',now(),1),
(null,'赞一个11',now(),1),
(null,'赞一个12',now(),1),
(null,'赞一个13',now(),1),
(null,'赞一个14',now(),1)

CREATE TABLE kth_login(
   id INT PRIMARY KEY AUTO_INCREMENT,
   uname VARCHAR(25),
   upwd VARCHAR(32)
);
INSERT INTO kth_login VALUES(NULL,"tom",md5("123"));
CREATE TABLE kth_cat(
   id INT PRIMARY KEY AUTO_INCREMENT,
   count INT,
   price DECIMAL(10,2),
   pid INT,
   uid INT
);

