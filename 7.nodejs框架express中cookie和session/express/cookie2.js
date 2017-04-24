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

//浏览器访问http://127.0.0.1:8088/查看页面cookie