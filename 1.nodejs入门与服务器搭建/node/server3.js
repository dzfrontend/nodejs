const http = require('http'); //导入http模块，http这个模块变量后面不会去改它，所以用const定义常量

var server = http.createServer(function(req,res){
	console.log(req.url); //req.url请求url
	switch(req.url) {
		case '/1.html':
			res.write('访问的是1.html');
			break;
		case '/2.html':
			res.write('访问的是2.html');
			break;
		default:
			res.write('404');
			break;
	}
	res.end();
});

//监听listen(),里面放端口号
server.listen(8888);
console.log('Server running at http://127.0.0.1:8888/');