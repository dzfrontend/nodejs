const express=require('express');

var server=express();
server.listen(8088);

server.use('/', function (req, res, next){
  console.log('a');

  next(); //加上next实现链式操作，下面的use会继续执行
});

server.use('/', function (req, res, next){
  console.log('b');
});

console.log('Server running at http://127.0.0.1:8088/');