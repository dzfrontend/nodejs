# 说明

这是一个用来熟悉nodejs的demo，express+ejs实现简单前后台功能

#### 项目起步

> 适合nodejs入门   
> 关于mysql数据库的设计与创建，可以查看数据字典文件  
> 关于数据库基础知识，可以查看数据库笔记文件

#### 项目目录结构
	
	-www 前端静态资源
	-route 路由拆分
	 --/admin 后台路由
	 --/web 前台路由
	-template ejs模板文件
	 --/admin 后台管理模板文件
	 --/web 前台模板文件
	server.js 入口文件

#### 项目运行
	
	> npm install
	> 在mysql数据库中新建'learn'数据库，用Navicat导入learn.sql文件  
	> 命令行运行npm start或者node server.js  
	> http://localhost:8080/访问前台网站，http://localhost:8080/admin访问后台管理网站，后台默认登录账号admin，密码admin


#### 项目架构
