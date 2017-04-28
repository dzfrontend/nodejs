const express=require('express');
const consolidate=require('consolidate'); //不再需要引入jade和ejs模板引擎，直接引入consoledate

var server=express();

server.listen(8088);
console.log('Server running at http://127.0.0.1:8088/');

// 配置模板引擎
//输出什么东西
server.set('view engine', 'html');
//模板文件放在哪儿
server.set('views', './views');
//哪种模板引擎
// server.engine('html', consolidate.jade);
server.engine('html', consolidate.ejs); //在这里使用哪个模板就可以灵活切换

//接收用户请求
server.get('/', function (req, res){
  res.render('ejs.ejs', {name: 'blue'});
});

//访问http://127.0.0.1:8088/就可以输出./views/ejs.ejs的结果