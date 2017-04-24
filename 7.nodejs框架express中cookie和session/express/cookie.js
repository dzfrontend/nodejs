const express = require('express');

var server = express();
server.listen(8088);
console.log('Server running at http://127.0.0.1:8088/');

// 未签名发送cookie
server.use('/aaa/a.html',(req,res) => { //访问/aaa/a.html路径才会设置cookie，或者访问父级的路径也会设置cookie（在Path为空的情况下）
	res.cookie('user', 'red', {maxAge: 20*24*3600*1000});
  	res.send('ok');
});

// 浏览器访问地址 http://127.0.0.1:8088/aaa/a.html 或 http://127.0.0.1:8088 ，查看浏览器的cookie就可以看到已设置的cookie