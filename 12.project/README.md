# 说明

这是一个用来熟悉nodejs的demo，express+ejs实现简单前后台功能

#### 项目起步

> 适合nodejs入门   
> 关于mysql数据库的设计与创建，可以查看数据字典文件  
> 关于数据库基础知识，可以查看数据库笔记文件

#### 项目目录结构
	
	-www 前端资源
	-route 路由拆分
	 --/admin 后台路由
	 --/web 前台api接口
	-template ejs模板文件
	 --/admin 后台管理模板文件
	server.js 入口文件

#### 项目运行
	
	> npm install
	> 在mysql数据库中新建'learn'数据库，用Navicat导入learn.sql文件  
	> 命令行运行npm start或者node server.js  
	> http://localhost:8080/index.html访问前台网站，http://localhost:8080/admin访问后台管理网站，后台默认登录账号admin，密码admin


#### 项目架构

	> server.js为入口文件，里面包含了各种使用的插件，route为总的路由；
	> 路由分为前台api接口路由和后台管理系统页面路由；
	> 前台api接口路由提供数据接口，数据渲染部分在static里面的html文件完成，用了angular循环；
	> 后台管理系统路由，route/admin/index.js为入口文件，里面又拆分了页面子路由。
