# Mysql基础知识

数据库的一些基础知识参考文档：

存储引擎：https://dev.mysql.com/doc/refman/5.7/en/storage-engine-setting.html

字符集、编码：https://dev.mysql.com/doc/refman/5.7/en/charset.html

数据类型：https://dev.mysql.com/doc/refman/5.7/en/data-types.html

主键：https://dev.mysql.com/doc/refman/5.7/en/primary-key-optimization.html

自动增长：https://dev.mysql.com/doc/refman/5.7/en/example-auto-increment.html

索引：https://dev.mysql.com/doc/refman/5.7/en/column-indexes.html

## 概述

### 存储引擎

数据在计算机上存储的方式

MySQL常见存储引擎：InnoDB、MyISAM等

* InnoDB的优势在于提供了良好的事务处理、崩溃修复能力和并发控制。缺点是读写效率较差，占用的数据空间相对较大

* MyISAM的优势在于占用空间小，处理速度快。缺点是不支持事务的完整性和并发性

### 字符集、编码

指数据库存储的数据的编码

* 字符集一般选择utf8或者utf8mb4，utf8mb4支持更多的unicode字符

数据库除了要存储数据，还要对数据进行排序，比较等操作，不同的校对规则会有不同的结果

* 排序规则一般选择utf8mb4_unicode_ci：基于标准的Unicode来排序和比较，能够在各种语言之间精确排序


### 数据类型

数据存储的类型

* 数字类型：INTEGER, INT, SMALLINT, TINYINT, MEDIUMINT, BIGINT, DECIMAL, NUMERIC, FLOAT, DOUBLE

* 日期时间类型：DATE, DATETIME, TIMESTAMP, TIM, YEAR

* 字符串类型：CHAR, VARCHAR, BINARY, VARBINARY, BLOB, TEXT, ENUM, SET

### 主键

表中的一个或多个字段，它的值用于唯一地标识表中的某一条记录，用来保持数据的完整性

* 一个表只能有一个主键

* 主键可以是一个字段，也可以由多个字段组成

* 主键值不能重复

### 自增

添加数据的时候由数据库自动设置的值，一般在设计表的时候会设置一个自动增加字段作为主键

### 索引

对表中一列或多列（注意是列）的值进行排序的一种结构，使用索引课快速访问表中特定的信息

* 加快对表中记录的查找或排序


## 数据库操作

### 初始化

* 连接

```sql
-- 以root用户登录，输入密码进入
mysql -u root -p
```

* 查看所有数据库

```sql
show databases;
```

* 创建新的数据库

```sql
create database <database>;
```

* 选择要操作的数据库

```sql
use <database>;
```
### 创建表

以创建user表为例：

```sql
create databse test;
use test;

-- 创建user表：存储引擎为InnoDB，字符集为utf8mb4，排序规则为utf8mb4_bin，UNSIGNED无符号表示正数，id为主键，INDEX为索引
CREATE TABLE user(
	`id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
	`username` VARCHAR(50) NOT NULL DEFAULT '',
	`age` TINYINT UNSIGNED NOT NULL DEFAULT 0,
	`gender` ENUM('男', '女') NOT NULL DEFAULT '男',
	PRIMARY KEY (`id`),
	INDEX uname(`username`),
	INDEX age(`age`),
	INDEX gender(`gender`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
```

### 添加数据

语法：

> INSERT INTO `table_name` (`field1`, ...`fieldN`) VALUES (value1, ...valueN);

* 单条添加

```sql
INSERT INTO `user` (`username`, `age`, `gender`) VALUES ('kimoo', 30, '男');
```

* 批量添加

```sql
INSERT INTO `user` (`username`, `age`, `gender`) VALUES ('reci', 6, '女'),('zMouse', 35, '男');
```

### 删除数据

语法：

> DELETE FROM `table_name` [WHERE];

```sql
DELETE FROM `user`; -- 删除所有，格外小心
DELETE FROM `user` WHERE `id`=8;
```


### 更新数据

语法：

> UPDATE `table_name` SET `field` = 'fieldValue' [WHERE];

```sql
UPDATE `user` SET `age` = 5 WHERE `id`=2;
```

### 查询数据

语法：

> SELECT column_name,column_name FROM `table_name` [WHERE];

* 普通查询

```sql
SELECT username,age,gender FROM user;
SELECT * FROM user;	-- * 通配符，但是不推荐，因为性能不好
```

* 去重查询 DISTINCT

```sql
SELECT DISTINCT gender FROM user; -- 去重gender
SELECT DISTINCT gender,username FROM user;	-- 如果gender和username值完全一样的话，会被去重
```

* 分组查询 GROUP BY

```sql
SELECT gender, count(gender) as count FROM user GROUP BY gender;
```

* 条件查询

WHERE后面可以带上很多运算符：如AND, BETWEEN, LIKE, >= 等等

AND

```sql
SELECT * FROM user WHERE gender='男' AND age<20;
```

BETWEEN

```sql
SELECT * FROM user WHERE age BETWEEN 1 AND 30;
```

LIKE, 一般需要配合指定的通配符来运行：%表示任意一个或多个字符，_表示一个任意字符

```sql
SELECT * FROM user WHERE username LIKE 'o%';
```

IN, 范围选择

```sql
SELECT * FROM user WHERE username='zMouse' OR username='reci';
SELECT * FROM user WHERE username IN ('zMouse','reci'); -- 等价于上面的sql
```

BETWEEN、LIKE、IN 都有对应的 NOT 

```sql
SELECT * FROM user WHERE username NOT IN ('zMouse','reci');
```

正则REGEXP

```sql
SELECT * FROM user WHERE age REGEXP '3|1';
SELECT * FROM user WHERE username REGEXP '^o';
```

排序ORDER BY, ASC从小到大，DESC从大到小

```sql
SELECT * FROM user ORDER BY age DESC, id DESC;
```

限制偏移LIMIT, OFFSET, 用于分页

```sql
SELECT * FROM user LIMIT 2 OFFSET 1;
```

函数

```sql
SELECT * FROM user WHERE username='zmouse';	-- 当前数据校对使用的区分大小写的模式
SELECT * FROM user WHERE UCASE(username)=UCASE('zmouse'); -- UCase()函数用来将小写字母转化为大写字母
```

### 多表查询

再创建一张message表

```sql
CREATE TABLE message(
	`id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
	`uid` INT(11) UNSIGNED NOT NULL DEFAULT 0,
	`content` VARCHAR(50) NOT NULL DEFAULT '',
	PRIMARY KEY (`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
```

```sql
SELECT * FROM user,message;

SELECT * FROM user,message WHERE user.id=message.uid;

SELECT * FROM user JOIN message ON user.id=message.uid;	-- 同上

SELECT * FROM user LEFT JOIN message ON user.id=message.uid;

SELECT * FROM user RIGHT JOIN message ON user.id=message.uid;

SELECT USER.id as uid, user.username, USER.age, USER.gender, message.id as message_id, message.content FROM user LEFT JOIN message ON user.id=message.uid;

```



