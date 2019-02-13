# Sequelize

koa2 + sequelize + mysql + vue实现的简易留言板

Sequelize是一款基于Nodejs功能强大的ORM框架，支持异步的数据库框架，同时支持PostgreSQL, MySQL, SQLite and MSSQL多种数据库。

* [官方文档](http://docs.sequelizejs.com/)

* 基本使用可以看看[这里](https://segmentfault.com/a/1190000011583608)

## 项目运行

安装环境nodejs, mysql

server端需要初始化数据库

```
cd ./server

// 安装依赖
npm install

// 安装sequelize-cli
npm install -g sequelize-cli

// 创建board_develop数据库
sequelize db:create board_develop

// 启动
npm start 

// 根据server/migations里迁移文件生成对应的数据库表
npm run migrate

// 根据server/seeders里种子文件初始化表数据
npm run seed
```

之后就只需要npm start

client端

```
cd ./client

npm install

npm start
```

## 项目结构

* sequelize-cli全局安装后, server/config  server/migtations server/models server/seeders文件夹等都是sequelize init命令初始化的生成的

* 更多sequelize-cli命令可以直接命令行直接输入sequelize查看，比如创建board_develop数据库的命令sequelize db:create board_develop

* 连接数据库的配置在server/config中

* 这个项目中sequelize创建的mysql数据库表在server/models文件夹中，然后给数据库表添加了主键，给表建立关联关系

* 如何自动生成模型文件和迁移文件：例如sequelize model:create --name Users --attributes username: String会自动在server/models和server/migrations文件夹下创建users表的模型文件和迁移文件的初始文件

* server/migrations下面文件的作用是运行sequlize db:migrate命令后将迁移文件生成对应数据库表，server/seeders下面文件的作用是运行sequelize db:seed:all命令后初始化数据，server/models下面文件的作用是供sequelize查询数据库

