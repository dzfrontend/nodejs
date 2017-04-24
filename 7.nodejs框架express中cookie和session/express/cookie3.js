const express = require('express');

var server = express();
server.listen(8088);
console.log('Server running at http://127.0.0.1:8088/');


server.use('/', function (req, res){
  res.clearCookie('user');
  res.send('ok');
});

//浏览器访问http://127.0.0.1:8088/看不到原来页面cookie