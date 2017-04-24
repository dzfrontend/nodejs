# 7:express中cookie和session

cookie、session概述：  

http是无状态的，在请求两次的情况下无法判断是否是同一个用户  

**cookie：**  
	在浏览器保存一些数据，每次向服务器发送请求的时候都会带过来  
	缺点:保存在客户端，可以通过js修改，不安全,存储空间有限

**session：**  
	在服务端保存数据，安全，存储空间无限  
	session不能独立存在，基于cookie实现 => cookie中会有一个session的ID，服务器利用sessionid找到session文件读取，写入  
	隐患：session劫持，因为session_id在客户端的cookie中可以被看见，可以通过加密解决  

## cookie  

**a.发送/设置cookie**  
res.secret='签名字符串'; //如果需要签名，需要cookie-parser中间件  
res.cookie(名字, 值, {path: '/', maxAge: 毫秒, signed: true/false});

**b.读取cookie**  

cookie-parser中间件  
server.use(cookieParser('签名秘钥'));  
server.use(function (){
	req.cookies		未签名版
	req.signedCookies	签名版
});

**c.删除cookie**  
res.clearCookie(名字);    

**未签名发送cookie**

```
const express = require('express');

var server = express();
server.listen(8088);
console.log('Server running at http://127.0.0.1:8088/');

// 发送cookie
server.use('/aaa/a.html',(req,res) => { //访问/aaa/a.html路径才会设置cookie，或者访问父级的路径也会设置cookie（在Path为空的情况下）
	res.cookie('user', 'red', {maxAge: 20*24*3600*1000});
  	res.send('ok');
})
``` 

浏览器访问地址 http://127.0.0.1:8088/aaa/a.html 或 http://127.0.0.1:8088 ，查看浏览器的cookie就可以看到已设置的cookie  

**签名发送与读取cookie**  

```
const express = require('express');
const cookieParser=require('cookie-parser');

var server = express();
server.listen(8088);
console.log('Server running at http://127.0.0.1:8088/');


// 签名发送cookie
server.use(cookieParser('wesdfw4r34tf'));

server.use('/', function (req, res){
  req.secret='wesdfw4r34tf'; //签名秘钥
  res.cookie('user', 'blue', {signed: true}); //signed签名为true

  //读取cookie
  console.log('签名cookie：', req.signedCookies)
  console.log('无签名cookie：', req.cookies);

  res.send('ok');
});

```
浏览器访问http://127.0.0.1:8088/查看页面cookie  

**删除cookie**  

```
const express = require('express');

var server = express();
server.listen(8088);
console.log('Server running at http://127.0.0.1:8088/');


server.use('/', function (req, res){
  res.clearCookie('user');
  res.send('ok');
});
```  

浏览器访问http://127.0.0.1:8088/看不到原来页面cookie  

## session  

安装cookie-parser和cookie-session中间件  

server.use(cookieParser());  
server.use(cookieSession({
	keys: [.., .., .., ..] //秘钥必填
}));  
server.use('/', function (req,res){
	res.session['xxx'] = 值; //设置某个session
	res.session['xxx']; //读取某个session
	delete res.session['xxx']; //删除某个session
});  

下面实现浏览器被访问次数

```
const express=require('express');
const cookieParser=require('cookie-parser');
const cookieSession=require('cookie-session');

var server=express();
server.listen(8088);
console.log('Server running at http://127.0.0.1:8088/');


//cookie
server.use(cookieParser());
server.use(cookieSession({
  name: 'sess', //修改session名
  keys: ['aaa', 'bbb', 'ccc'], //多组秘钥，必填
  maxAge: 2*3600*1000
}));

server.use('/', function (req, res){
  //设置session
  if(req.session['count']==null){
    req.session['count']=1;
  }else{
    req.session['count']++;
  }

  //读取session
  console.log(req.session['count']);

  res.send('ok');
});
```

浏览器访问 http://127.0.0.1:8088/ ，每访问一次控制台会输出一次服务器被访问次数

