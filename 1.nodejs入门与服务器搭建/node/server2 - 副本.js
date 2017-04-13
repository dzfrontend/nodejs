const http = require('http'); //导入http模块，http这个模块变量后面不会去改它，所以用const定义常量

// var server = http.createServer(function(request,response){
var server = http.createServer(function(req,res){
	res.write('写入成功'); //write()向浏览器写东西
	res.end(); //end()结束
});

//监听listen(),里面放端口号
server.listen(8888);
console.log('Server running at http://127.0.0.1:8888/');