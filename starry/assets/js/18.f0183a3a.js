(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{165:function(s,a,t){"use strict";t.r(a);var n=t(0),r=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"sql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sql","aria-hidden":"true"}},[s._v("#")]),s._v(" SQL")]),s._v(" "),t("h2",{attrs:{id:"mysql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql","aria-hidden":"true"}},[s._v("#")]),s._v(" mysql")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("\n"),t("span",{attrs:{class:"token comment"}},[s._v("-- mysql terminal login")]),s._v("\nmysql "),t("span",{attrs:{class:"token operator"}},[s._v("-")]),s._v("u root "),t("span",{attrs:{class:"token operator"}},[s._v("-")]),s._v("p\nmysql "),t("span",{attrs:{class:"token operator"}},[s._v("-")]),s._v("u dev "),t("span",{attrs:{class:"token operator"}},[s._v("-")]),s._v("pdev\n\n"),t("span",{attrs:{class:"token comment"}},[s._v("-- 创建用户")]),s._v("\n"),t("span",{attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("USER")]),s._v(" "),t("span",{attrs:{class:"token string"}},[s._v("'dev'")]),s._v("@'localhost"),t("span",{attrs:{class:"token string"}},[s._v("' IDENTIFIED BY '")]),s._v("dev"),t("span",{attrs:{class:"token string"}},[s._v("';\nCREATE USER '")]),s._v("dev01"),t("span",{attrs:{class:"token string"}},[s._v("'@'")]),t("span",{attrs:{class:"token number"}},[s._v("127.0")]),t("span",{attrs:{class:"token number"}},[s._v(".0")]),t("span",{attrs:{class:"token number"}},[s._v(".1")]),t("span",{attrs:{class:"token string"}},[s._v("' IDENTIFIED BY '")]),s._v("dev01"),t("span",{attrs:{class:"token string"}},[s._v("';\nCREATE USER '")]),s._v("dev02"),t("span",{attrs:{class:"token string"}},[s._v("'@'")]),t("span",{attrs:{class:"token operator"}},[s._v("%")]),t("span",{attrs:{class:"token string"}},[s._v("' IDENTIFIED BY '")]),s._v("dev02"),t("span",{attrs:{class:"token string"}},[s._v("';\n\n-- 赋予权限\nGRANT ALL ON test.* TO `dev`@`localhost` WITH GRANT OPTION;\nGRANT ALL ON test.* TO `dev02`@`%` WITH GRANT OPTION;\nGRANT ALL ON *.* TO `dev`@`localhost` WITH GRANT OPTION;\n\n-- 删除用户单个权限\n\nREVOKE INSERT, UPDATE, DELETE ON app_db.* FROM '")]),s._v("app_write"),t("span",{attrs:{class:"token string"}},[s._v("';\n\n-- 删除用户及权限\n\ndrop user dev@'")]),s._v("localhost"),t("span",{attrs:{class:"token string"}},[s._v("';\ndrop user dev01@'")]),t("span",{attrs:{class:"token number"}},[s._v("127.0")]),t("span",{attrs:{class:"token number"}},[s._v(".0")]),t("span",{attrs:{class:"token number"}},[s._v(".1")]),t("span",{attrs:{class:"token string"}},[s._v("';\ndrop user dev02@'")]),t("span",{attrs:{class:"token operator"}},[s._v("%")]),t("span",{attrs:{class:"token string"}},[s._v("';\n-- 修改密码\nALTER USER '")]),s._v("dev"),t("span",{attrs:{class:"token string"}},[s._v("'@'")]),t("span",{attrs:{class:"token operator"}},[s._v("%")]),t("span",{attrs:{class:"token string"}},[s._v("' IDENTIFIED WITH mysql_native_password BY '")]),s._v("passwd"),t("span",{attrs:{class:"token string"}},[s._v("';\n-- 创建数据库\ncreate database mydata;\n\n-- DROP database mydata;\n\nuse mydata;\n\nCREATE TABLE IF NOT EXISTS `user`(\n`id` INT UNSIGNED AUTO_INCREMENT,\n`name` VARCHAR(100) NOT NULL,\n`tel` VARCHAR(40) NOT NULL,\n`date` DATE,\nPRIMARY KEY ( `id` )\n)ENGINE=InnoDB DEFAULT CHARSET=utf8;\n\nCREATE TABLE IF NOT EXISTS djq(\n`id` INT NOT NULL,\n`name` VARCHAR(100) NOT NULL,\n`date` DATE,\nPRIMARY KEY ( `id` )\n)ENGINE=InnoDB DEFAULT CHARSET=utf8;\n\nCREATE TABLE `djq` (\n`name` varchar(100) NOT NULL,\n`date` date DEFAULT NULL,\n`lala` int(11) DEFAULT NULL,\n`djq` varchar(30) NOT NULL,\n`djqs` varchar(30) NOT NULL DEFAULT '")]),s._v("董建强"),t("span",{attrs:{class:"token string"}},[s._v('\'\n) ENGINE=InnoDB DEFAULT CHARSET=utf8\n\n-- DROP TABLE user ;\n\nINSERT INTO user\n(name, tel, date)\nVALUES\n("董建强", "10010", NOW());\n\nINSERT INTO user\nVALUES\n("董建强 4", "10010", NOW());\n\nINSERT INTO user\n(name, tel, date)\nVALUES\n("董建强 1", "10010", NOW()),("董建强 2", "10010", NOW());\n\nINSERT INTO djq\nVALUES\n(\'')]),t("span",{attrs:{class:"token number"}},[s._v("3")]),t("span",{attrs:{class:"token string"}},[s._v('\', "lala"+NOW(), NOW());\n\n-- DELETE FROM djq;\n\nINSERT INTO user\n(name, tel, date)\nVALUES\n("董建强 1", "10010", NOW()),("董建强 2", "10010", NOW());\n\nshow create TABLE djq;\nCREATE TABLE `djq` (\n`name` varchar(100) NOT NULL,\n`date` date DEFAULT NULL,\n`lala` int(11) DEFAULT NULL,\n`djq` varchar(30) NOT NULL,\n`djqs` varchar(30) NOT NULL DEFAULT \'')]),s._v("董建强"),t("span",{attrs:{class:"token string"}},[s._v("'\n) ENGINE=InnoDB DEFAULT CHARSET=utf8\n\nCREATE TABLE `campaignDayHour` (\n`name` varchar(100) NOT NULL,\n`date` datetime DEFAULT NULL\n) ENGINE=InnoDB DEFAULT CHARSET=utf8\nCREATE TABLE `campaignDayHour1` (\n`name` varchar(100) NOT NULL,\n`date` VARCHAR(50) NOT NULL,\n`hour` VARCHAR(50) NOT NULL\n) ENGINE=InnoDB DEFAULT CHARSET=utf8\n\nDROP TABLE campaignDayHour1;\ninsert into campaignDayHour1 values ('")]),s._v("elm1"),t("span",{attrs:{class:"token string"}},[s._v("','")]),t("span",{attrs:{class:"token number"}},[s._v("2018")]),t("span",{attrs:{class:"token operator"}},[s._v("-")]),t("span",{attrs:{class:"token number"}},[s._v("07")]),t("span",{attrs:{class:"token operator"}},[s._v("-")]),t("span",{attrs:{class:"token number"}},[s._v("19")]),t("span",{attrs:{class:"token string"}},[s._v("','")]),t("span",{attrs:{class:"token number"}},[s._v("2018")]),t("span",{attrs:{class:"token operator"}},[s._v("-")]),t("span",{attrs:{class:"token number"}},[s._v("07")]),t("span",{attrs:{class:"token operator"}},[s._v("-")]),t("span",{attrs:{class:"token number"}},[s._v("19")]),s._v(" "),t("span",{attrs:{class:"token number"}},[s._v("01")]),t("span",{attrs:{class:"token string"}},[s._v("'),\n('")]),s._v("elm1"),t("span",{attrs:{class:"token string"}},[s._v("','")]),t("span",{attrs:{class:"token number"}},[s._v("2018")]),t("span",{attrs:{class:"token operator"}},[s._v("-")]),t("span",{attrs:{class:"token number"}},[s._v("07")]),t("span",{attrs:{class:"token operator"}},[s._v("-")]),t("span",{attrs:{class:"token number"}},[s._v("19")]),t("span",{attrs:{class:"token string"}},[s._v("','")]),t("span",{attrs:{class:"token number"}},[s._v("2018")]),t("span",{attrs:{class:"token operator"}},[s._v("-")]),t("span",{attrs:{class:"token number"}},[s._v("07")]),t("span",{attrs:{class:"token operator"}},[s._v("-")]),t("span",{attrs:{class:"token number"}},[s._v("19")]),s._v(" "),t("span",{attrs:{class:"token number"}},[s._v("08")]),t("span",{attrs:{class:"token string"}},[s._v("'),('")]),s._v("elm1"),t("span",{attrs:{class:"token string"}},[s._v("','")]),t("span",{attrs:{class:"token number"}},[s._v("2018")]),t("span",{attrs:{class:"token operator"}},[s._v("-")]),t("span",{attrs:{class:"token number"}},[s._v("07")]),t("span",{attrs:{class:"token operator"}},[s._v("-")]),t("span",{attrs:{class:"token number"}},[s._v("20")]),t("span",{attrs:{class:"token string"}},[s._v("','")]),t("span",{attrs:{class:"token number"}},[s._v("2018")]),t("span",{attrs:{class:"token operator"}},[s._v("-")]),t("span",{attrs:{class:"token number"}},[s._v("07")]),t("span",{attrs:{class:"token operator"}},[s._v("-")]),t("span",{attrs:{class:"token number"}},[s._v("20")]),s._v(" "),t("span",{attrs:{class:"token number"}},[s._v("00")]),t("span",{attrs:{class:"token string"}},[s._v("'),('")]),s._v("elm1"),t("span",{attrs:{class:"token string"}},[s._v("','")]),t("span",{attrs:{class:"token number"}},[s._v("2018")]),t("span",{attrs:{class:"token operator"}},[s._v("-")]),t("span",{attrs:{class:"token number"}},[s._v("07")]),t("span",{attrs:{class:"token operator"}},[s._v("-")]),t("span",{attrs:{class:"token number"}},[s._v("21")]),t("span",{attrs:{class:"token string"}},[s._v("','")]),t("span",{attrs:{class:"token number"}},[s._v("2018")]),t("span",{attrs:{class:"token operator"}},[s._v("-")]),t("span",{attrs:{class:"token number"}},[s._v("07")]),t("span",{attrs:{class:"token operator"}},[s._v("-")]),t("span",{attrs:{class:"token number"}},[s._v("21")]),s._v(" "),t("span",{attrs:{class:"token number"}},[s._v("08")]),t("span",{attrs:{class:"token string"}},[s._v("')\n-- show 1-100 随机数\ninsert into campaignDayHour values ('")]),s._v("elm1"),t("span",{attrs:{class:"token string"}},[s._v("','")]),t("span",{attrs:{class:"token number"}},[s._v("2018")]),t("span",{attrs:{class:"token operator"}},[s._v("-")]),t("span",{attrs:{class:"token number"}},[s._v("07")]),t("span",{attrs:{class:"token operator"}},[s._v("-")]),t("span",{attrs:{class:"token number"}},[s._v("16")]),s._v(" "),t("span",{attrs:{class:"token string"}},[s._v("')\n\nselect _ from campaignDayHour where date BETWEEN '")]),t("span",{attrs:{class:"token number"}},[s._v("2018")]),t("span",{attrs:{class:"token operator"}},[s._v("-")]),t("span",{attrs:{class:"token number"}},[s._v("07")]),t("span",{attrs:{class:"token operator"}},[s._v("-")]),t("span",{attrs:{class:"token number"}},[s._v("16")]),s._v(" "),t("span",{attrs:{class:"token number"}},[s._v("08")]),t("span",{attrs:{class:"token string"}},[s._v("' AND '")]),t("span",{attrs:{class:"token number"}},[s._v("2018")]),t("span",{attrs:{class:"token operator"}},[s._v("-")]),t("span",{attrs:{class:"token number"}},[s._v("07")]),t("span",{attrs:{class:"token operator"}},[s._v("-")]),t("span",{attrs:{class:"token number"}},[s._v("19")]),s._v(" "),t("span",{attrs:{class:"token number"}},[s._v("09")]),t("span",{attrs:{class:"token string"}},[s._v("';\nselect _ from campaignDayHour1 where date >='")]),t("span",{attrs:{class:"token number"}},[s._v("2018")]),t("span",{attrs:{class:"token operator"}},[s._v("-")]),t("span",{attrs:{class:"token number"}},[s._v("07")]),t("span",{attrs:{class:"token operator"}},[s._v("-")]),t("span",{attrs:{class:"token number"}},[s._v("16")]),s._v(" "),t("span",{attrs:{class:"token number"}},[s._v("01")]),t("span",{attrs:{class:"token string"}},[s._v("' AND date <='")]),t("span",{attrs:{class:"token number"}},[s._v("2018")]),t("span",{attrs:{class:"token operator"}},[s._v("-")]),t("span",{attrs:{class:"token number"}},[s._v("07")]),t("span",{attrs:{class:"token operator"}},[s._v("-")]),t("span",{attrs:{class:"token number"}},[s._v("18")]),s._v(" "),t("span",{attrs:{class:"token number"}},[s._v("01")]),t("span",{attrs:{class:"token string"}},[s._v("';\nselect _ from campaignDayHour1 where hour >='")]),t("span",{attrs:{class:"token number"}},[s._v("2018")]),t("span",{attrs:{class:"token operator"}},[s._v("-")]),t("span",{attrs:{class:"token number"}},[s._v("07")]),t("span",{attrs:{class:"token operator"}},[s._v("-")]),t("span",{attrs:{class:"token number"}},[s._v("19")]),s._v(" "),t("span",{attrs:{class:"token number"}},[s._v("01")]),t("span",{attrs:{class:"token string"}},[s._v("' AND hour <='")]),t("span",{attrs:{class:"token number"}},[s._v("2018")]),t("span",{attrs:{class:"token operator"}},[s._v("-")]),t("span",{attrs:{class:"token number"}},[s._v("07")]),t("span",{attrs:{class:"token operator"}},[s._v("-")]),t("span",{attrs:{class:"token number"}},[s._v("20")]),s._v(" "),t("span",{attrs:{class:"token number"}},[s._v("0")]),t("span",{attrs:{class:"token string"}},[s._v("';\nselect _ from campaignDayHour1 where hour >='")]),t("span",{attrs:{class:"token number"}},[s._v("2018")]),t("span",{attrs:{class:"token operator"}},[s._v("-")]),t("span",{attrs:{class:"token number"}},[s._v("07")]),t("span",{attrs:{class:"token operator"}},[s._v("-")]),t("span",{attrs:{class:"token number"}},[s._v("19")]),s._v(" "),t("span",{attrs:{class:"token number"}},[s._v("01")]),t("span",{attrs:{class:"token string"}},[s._v("' AND hour <='")]),t("span",{attrs:{class:"token number"}},[s._v("2018")]),t("span",{attrs:{class:"token operator"}},[s._v("-")]),t("span",{attrs:{class:"token number"}},[s._v("07")]),t("span",{attrs:{class:"token operator"}},[s._v("-")]),t("span",{attrs:{class:"token number"}},[s._v("20")]),s._v(" "),t("span",{attrs:{class:"token number"}},[s._v("00")]),t("span",{attrs:{class:"token string"}},[s._v("';\n\nINSERT INTO djq\nVALUES\n('")]),t("span",{attrs:{class:"token number"}},[s._v("5")]),t("span",{attrs:{class:"token string"}},[s._v("', FLOOR(RAND()\\*100), NOW());\n\nINSERT INTO djq\nVALUES\n('")]),t("span",{attrs:{class:"token number"}},[s._v("5")]),t("span",{attrs:{class:"token string"}},[s._v("', FLOOR(1+RAND()\\*100), NOW());\n\n-- remove table column name;\nALTER TABLE DJQ DROP djq;\n\n-- add table column name and datatype\nALTER TABLE DJQ add djq VARCHAR(30) not NULL ;\n\n-- set default value\nALTER TABLE DJQ add djqs VARCHAR(30) not NULL DEFAULT '")]),s._v("董建强' "),t("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{attrs:{class:"token comment"}},[s._v("-- select")]),s._v("\n"),t("span",{attrs:{class:"token keyword"}},[s._v("select")]),s._v(" \\"),t("span",{attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("from")]),s._v(" djq"),t("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("h2",{attrs:{id:"允许-mysql-远程登录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#允许-mysql-远程登录","aria-hidden":"true"}},[s._v("#")]),s._v(" 允许 mysql 远程登录")]),s._v(" "),t("h3",{attrs:{id:"安装好-mysql8-x-后，登陆-mysql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装好-mysql8-x-后，登陆-mysql","aria-hidden":"true"}},[s._v("#")]),s._v(" 安装好 mysql8.x 后，登陆 mysql:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("\nmysql -u root -p\nuse mysql"),t("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nGRANT ALL ON *.* TO "),t("span",{attrs:{class:"token string"}},[s._v("'root'")]),s._v("@"),t("span",{attrs:{class:"token string"}},[s._v("'%'")]),t("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n\n\n")])])]),t("h2",{attrs:{id:"web-sql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#web-sql","aria-hidden":"true"}},[s._v("#")]),s._v(" web sql")]),s._v(" "),t("h3",{attrs:{id:"计算并且检测是否是-0"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#计算并且检测是否是-0","aria-hidden":"true"}},[s._v("#")]),s._v(" 计算并且检测是否是 0")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("IFNULL"),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{attrs:{class:"token function"}},[s._v("SUM")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("localSpend"),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{attrs:{class:"token operator"}},[s._v("/")]),t("span",{attrs:{class:"token function"}},[s._v("SUM")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("conversions"),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{attrs:{class:"token number"}},[s._v("0")]),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" avgCPA"),t("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])])]),t("h3",{attrs:{id:"设置索引"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置索引","aria-hidden":"true"}},[s._v("#")]),s._v(" 设置索引")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("INDEX")]),s._v(" index_name "),t("span",{attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" table_name "),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("column_name"),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),t("h3",{attrs:{id:"查询某列最大最小值"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查询某列最大最小值","aria-hidden":"true"}},[s._v("#")]),s._v(" 查询某列最大最小值")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{attrs:{class:"token function"}},[s._v("MIN")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{attrs:{class:"token keyword"}},[s._v("date")]),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" small"),t("span",{attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{attrs:{class:"token function"}},[s._v("MAX")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{attrs:{class:"token keyword"}},[s._v("date")]),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" big "),t("span",{attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" table_name\n")])])]),t("h3",{attrs:{id:"分组"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分组","aria-hidden":"true"}},[s._v("#")]),s._v(" 分组")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" orgId "),t("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("campaignId"),t("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{attrs:{class:"token function"}},[s._v("SUM")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("taps"),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" taps"),t("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{attrs:{class:"token function"}},[s._v("SUM")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("conversions"),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" conversions"),t("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{attrs:{class:"token function"}},[s._v("SUM")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("impressions"),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" impressions"),t("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{attrs:{class:"token function"}},[s._v("SUM")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("localSpend"),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" localSpend\n"),t("span",{attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" CamPaignDayReports_5ebd0316_b0b9_11e6_9649_0e72c199bffc\n"),t("span",{attrs:{class:"token keyword"}},[s._v("group")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("by")]),s._v(" orgId "),t("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("campaignId\n")])])]),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" orgId "),t("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("campaignId"),t("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{attrs:{class:"token function"}},[s._v("SUM")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("taps"),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" taps"),t("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{attrs:{class:"token function"}},[s._v("SUM")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("conversions"),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" conversions"),t("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{attrs:{class:"token function"}},[s._v("SUM")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("impressions"),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" impressions"),t("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{attrs:{class:"token function"}},[s._v("SUM")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("localSpend"),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" localSpend\n"),t("span",{attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" CamPaignDayReports\n"),t("span",{attrs:{class:"token keyword"}},[s._v("group")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("by")]),s._v(" orgId "),t("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("campaignId\n")])])]),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" orgId "),t("span",{attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{attrs:{class:"token keyword"}},[s._v("date")]),t("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{attrs:{class:"token function"}},[s._v("SUM")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("taps"),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" taps"),t("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{attrs:{class:"token function"}},[s._v("SUM")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("conversions"),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" conversions"),t("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{attrs:{class:"token function"}},[s._v("SUM")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("impressions"),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" impressions"),t("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{attrs:{class:"token function"}},[s._v("SUM")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("localSpend"),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" localSpend\n"),t("span",{attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" CamPaignDayReports\n"),t("span",{attrs:{class:"token keyword"}},[s._v("group")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("by")]),s._v(" orgId "),t("span",{attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{attrs:{class:"token keyword"}},[s._v("date")]),s._v("\n")])])]),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" aa"),t("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("orgId"),t("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("bb"),t("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("storefront"),t("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{attrs:{class:"token function"}},[s._v("SUM")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("aa"),t("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("taps"),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" taps"),t("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{attrs:{class:"token function"}},[s._v("SUM")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("aa"),t("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("conversions"),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" conversions"),t("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{attrs:{class:"token function"}},[s._v("SUM")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("aa"),t("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("impressions"),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" impressions"),t("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{attrs:{class:"token function"}},[s._v("SUM")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("aa"),t("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("localSpend"),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" localSpend\n"),t("span",{attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" Campaigns "),t("span",{attrs:{class:"token keyword"}},[s._v("as")]),s._v(" bb\n"),t("span",{attrs:{class:"token keyword"}},[s._v("left")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("join")]),s._v(" CamPaignDayReports "),t("span",{attrs:{class:"token keyword"}},[s._v("as")]),s._v(" aa\n"),t("span",{attrs:{class:"token keyword"}},[s._v("on")]),s._v(" aa"),t("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("orgId"),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("bb"),t("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("orgId "),t("span",{attrs:{class:"token operator"}},[s._v("and")]),s._v(" aa"),t("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("campaignId"),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("bb"),t("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("campaignId\n"),t("span",{attrs:{class:"token keyword"}},[s._v("group")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("by")]),s._v(" aa"),t("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("orgId"),t("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("bb"),t("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("storefront\n")])])]),t("h3",{attrs:{id:"合并查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#合并查询","aria-hidden":"true"}},[s._v("#")]),s._v(" 合并查询")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" aa"),t("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("orgId "),t("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("aa"),t("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("campaignId"),t("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{attrs:{class:"token function"}},[s._v("SUM")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("bb"),t("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("taps"),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" taps"),t("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{attrs:{class:"token function"}},[s._v("SUM")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("bb"),t("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("conversions"),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" conversions"),t("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{attrs:{class:"token function"}},[s._v("SUM")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("bb"),t("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("impressions"),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" impressions"),t("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{attrs:{class:"token function"}},[s._v("SUM")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("bb"),t("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("localSpend"),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" localSpend "),t("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("aa"),t("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("appName\n"),t("span",{attrs:{class:"token keyword"}},[s._v("FROM")]),s._v("  Campaigns "),t("span",{attrs:{class:"token keyword"}},[s._v("as")]),s._v(" aa\n\n"),t("span",{attrs:{class:"token keyword"}},[s._v("left")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("join")]),s._v(" CamPaignDayReports "),t("span",{attrs:{class:"token keyword"}},[s._v("as")]),s._v("  bb\n"),t("span",{attrs:{class:"token keyword"}},[s._v("on")]),s._v(" aa"),t("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("orgId"),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("bb"),t("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("orgId "),t("span",{attrs:{class:"token operator"}},[s._v("and")]),s._v(" aa"),t("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("campaignId"),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("bb"),t("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("campaignId\n\n"),t("span",{attrs:{class:"token keyword"}},[s._v("where")]),s._v(" aa"),t("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("campaignStatus "),t("span",{attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{attrs:{class:"token string"}},[s._v("'PAUSED'")]),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{attrs:{class:"token operator"}},[s._v("and")]),s._v(" bb"),t("span",{attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{attrs:{class:"token keyword"}},[s._v("date")]),s._v(" "),t("span",{attrs:{class:"token operator"}},[s._v(">=")]),t("span",{attrs:{class:"token string"}},[s._v("'2018-04-06'")]),s._v(" "),t("span",{attrs:{class:"token operator"}},[s._v("and")]),s._v(" bb"),t("span",{attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{attrs:{class:"token keyword"}},[s._v("date")]),s._v(" "),t("span",{attrs:{class:"token operator"}},[s._v("<=")]),t("span",{attrs:{class:"token string"}},[s._v("'2018-04-10'")]),s._v("\n\n"),t("span",{attrs:{class:"token keyword"}},[s._v("group")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("by")]),s._v(" aa"),t("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("orgId "),t("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("aa"),t("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("campaignId\n")])])])])}],!1,null,null,null);a.default=r.exports}}]);