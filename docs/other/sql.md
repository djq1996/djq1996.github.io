---
sidebar: 'auto'
---

# SQL

## mysql8

```sql

-- mysql terminal login
mysql -u root -p
mysql -u dev -pdev


-- 创建用户 密码必须大小写加符号 八位
CREATE USER 'dev'@'localhost' IDENTIFIED BY 'dev';
CREATE USER 'dev1'@'127.0.0.1' IDENTIFIED BY 'Dev1123.';
CREATE USER 'dev2'@'%' IDENTIFIED BY 'dev02';

-- 赋予权限
GRANT ALL ON test.* TO `dev`@`localhost` WITH GRANT OPTION;
GRANT ALL ON test.* TO `dev02`@`%` WITH GRANT OPTION;
GRANT ALL ON *.* TO `dev`@`localhost` WITH GRANT OPTION;
-- 查看权限

SHOW GRANTS FOR [name];
SHOW GRANTS FOR 'dev1'@'localhost';

-- 删除用户单个权限

REVOKE INSERT, UPDATE, DELETE ON app_db.* FROM 'app_write';

-- 删除用户及权限

drop user dev@'localhost';
drop user dev01@'127.0.0.1';
drop user dev02@'%';
-- 修改密码
ALTER USER 'dev'@'%' IDENTIFIED WITH mysql_native_password BY 'passwd';
-- 创建数据库
create database mydata;

-- DROP database mydata;

use mydata;

CREATE TABLE IF NOT EXISTS `user`(
`id` INT UNSIGNED AUTO_INCREMENT,
`name` VARCHAR(100) NOT NULL,
`tel` VARCHAR(40) NOT NULL,
`date` DATE,
PRIMARY KEY ( `id` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS djq(
`id` INT NOT NULL,
`name` VARCHAR(100) NOT NULL,
`date` DATE,
PRIMARY KEY ( `id` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `djq` (
`name` varchar(100) NOT NULL,
`date` date DEFAULT NULL,
`lala` int(11) DEFAULT NULL,
`djq` varchar(30) NOT NULL,
`djqs` varchar(30) NOT NULL DEFAULT '董建强'
) ENGINE=InnoDB DEFAULT CHARSET=utf8

-- DROP TABLE user ;

INSERT INTO user
(name, tel, date)
VALUES
("董建强", "10010", NOW());

INSERT INTO user
VALUES
("董建强 4", "10010", NOW());

INSERT INTO user
(name, tel, date)
VALUES
("董建强 1", "10010", NOW()),("董建强 2", "10010", NOW());

INSERT INTO djq
VALUES
('3', "lala"+NOW(), NOW());

-- DELETE FROM djq;

INSERT INTO user
(name, tel, date)
VALUES
("董建强 1", "10010", NOW()),("董建强 2", "10010", NOW());

show create TABLE djq;
CREATE TABLE `djq` (
`name` varchar(100) NOT NULL,
`date` date DEFAULT NULL,
`lala` int(11) DEFAULT NULL,
`djq` varchar(30) NOT NULL,
`djqs` varchar(30) NOT NULL DEFAULT '董建强'
) ENGINE=InnoDB DEFAULT CHARSET=utf8

CREATE TABLE `campaignDayHour` (
`name` varchar(100) NOT NULL,
`date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8
CREATE TABLE `campaignDayHour1` (
`name` varchar(100) NOT NULL,
`date` VARCHAR(50) NOT NULL,
`hour` VARCHAR(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8

DROP TABLE campaignDayHour1;
insert into campaignDayHour1 values ('elm1','2018-07-19','2018-07-19 01'),
('elm1','2018-07-19','2018-07-19 08'),('elm1','2018-07-20','2018-07-20 00'),('elm1','2018-07-21','2018-07-21 08')
-- show 1-100 随机数
insert into campaignDayHour values ('elm1','2018-07-16 ')

select _ from campaignDayHour where date BETWEEN '2018-07-16 08' AND '2018-07-19 09';
select _ from campaignDayHour1 where date >='2018-07-16 01' AND date <='2018-07-18 01';
select _ from campaignDayHour1 where hour >='2018-07-19 01' AND hour <='2018-07-20 0';
select _ from campaignDayHour1 where hour >='2018-07-19 01' AND hour <='2018-07-20 00';

INSERT INTO djq
VALUES
('5', FLOOR(RAND()\*100), NOW());

INSERT INTO djq
VALUES
('5', FLOOR(1+RAND()\*100), NOW());

-- remove table column name;
ALTER TABLE DJQ DROP djq;

-- add table column name and datatype
ALTER TABLE DJQ add djq VARCHAR(30) not NULL ;

-- set default value
ALTER TABLE DJQ add djqs VARCHAR(30) not NULL DEFAULT '董建强' ;

-- select
select \* from djq;
```

## 允许 mysql 远程登录

### 安装好 mysql8.x 后，登陆 mysql:

```bash

mysql -u root -p
use mysql;
GRANT ALL ON *.* TO 'root'@'%';



```

## web sql

### 计算并且检测是否是 0

```sql
IFNULL(SUM(localSpend)/SUM(conversions) ,0) AS avgCPA,
```

### 设置索引

```sql
CREATE INDEX index_name ON table_name (column_name)
```

### 查询某列最大最小值

```sql
SELECT MIN(date) AS small,MAX(date) AS big FROM table_name
```

### 分组

```sql
SELECT orgId ,campaignId, SUM(taps) AS taps, SUM(conversions) AS conversions, SUM(impressions) AS impressions, SUM(localSpend) AS localSpend
FROM CamPaignDayReports_5ebd0316_b0b9_11e6_9649_0e72c199bffc
group by orgId ,campaignId
```

```sql
SELECT orgId ,campaignId, SUM(taps) AS taps, SUM(conversions) AS conversions, SUM(impressions) AS impressions, SUM(localSpend) AS localSpend
FROM CamPaignDayReports
group by orgId ,campaignId
```

```sql
SELECT orgId ,date, SUM(taps) AS taps, SUM(conversions) AS conversions, SUM(impressions) AS impressions, SUM(localSpend) AS localSpend
FROM CamPaignDayReports
group by orgId ,date
```

```sql
SELECT aa.orgId,bb.storefront, SUM(aa.taps) AS taps, SUM(aa.conversions) AS conversions, SUM(aa.impressions) AS impressions, SUM(aa.localSpend) AS localSpend
FROM Campaigns as bb
left join CamPaignDayReports as aa
on aa.orgId=bb.orgId and aa.campaignId=bb.campaignId
group by aa.orgId,bb.storefront
```

### 合并查询

```sql
SELECT aa.orgId ,aa.campaignId, SUM(bb.taps) AS taps, SUM(bb.conversions) AS conversions, SUM(bb.impressions) AS impressions, SUM(bb.localSpend) AS localSpend ,aa.appName
FROM  Campaigns as aa

left join CamPaignDayReports as  bb
on aa.orgId=bb.orgId and aa.campaignId=bb.campaignId

where aa.campaignStatus in ('PAUSED') and bb.date >='2018-04-06' and bb.date <='2018-04-10'

group by aa.orgId ,aa.campaignId
```
