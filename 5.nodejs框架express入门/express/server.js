const express = require('express');

//创建服务
var server = express();

//处理请求
server.use('/express.html',(req,res) =>{ //当访问根目录时响应，相当于http.createServer
	res.send('服务器访问成功'); //send()相当于write()，功能和write()一样，加了一些功能
	res.end();
});


//监听
server.listen(8088);

console.log('Server running at http://127.0.0.1:8088/');