const http = require('http'); //导入http模块，http这个模块变量后面不会去改它，所以用const定义常量

var server = http.createServer(function(){
	console.log('有人访问了');
});//creatServer创建一个服务器，每当有访问就会执行createServer

//监听listen(),里面放端口号
server.listen(8888);
console.log('Server running at http://127.0.0.1:8888/');