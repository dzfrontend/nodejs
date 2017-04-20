const express = require('express');
const expressStatic=require('express-static'); //处理非接口的静态文件

//创建服务
var server = express();
//监听
server.listen(8088);

//处理静态资源请求，不是静态资源则走下面接口
server.use(expressStatic('./www'));

//处理接口请求
//用户数据当做假数据
var users={
  'blue': '123456',
  'zhangsan': '654321',
  'lisi': '987987'
};
server.get('/login',(req,res) =>{

	/*
	//原生nodejs，express里面直接用req.query
	var obj=urlLib.parse(req.url, true);
    const GET=obj.query;
    */

	var user=req.query['user'];
	var pass=req.query['pass'];
	  if(users[user]==null){
	    res.send({ok: false, msg: '此用户不存在'});
	  }else{
	    if(users[user]!=pass){
	      res.send({ok: false, msg: '密码错了'});
	    }else{
	      res.send({ok: true, msg: '成功'});
	    }
	  }
});


console.log('Server running at http://127.0.0.1:8088/');