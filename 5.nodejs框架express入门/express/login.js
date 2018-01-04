/**
* 用express实现下面的登录接口：
* login?user=xxx&pass=xxx返回 => {ok:true/false,msg:'原因'}
**/
const express = require('express');
const expressStatic=require('express-static'); //处理非接口的静态文件

var server = express();
server.listen(8088);

/*
* 处理get接口请求
*/
//users假数据当作数据库登录账号密码数据
var users={
  'blue': '123456',
  'zhangsan': '654321',
  'lisi': '987987'
};
server.get('/login',(req,res) =>{
	/*
		//下面为原生nodejs处理参数，express里面直接用req.query
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

//处理静态资源请求，不是静态资源则走下面接口
server.use(expressStatic('./www'));
console.log('Server running at http://127.0.0.1:8088/');

// 浏览器访问http://localhost:8088/form.html提交账号密码，测试get请求登录接口