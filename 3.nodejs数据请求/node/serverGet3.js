// url最简化url处理
const http = require('http');
const urlLib = require('url');

//获取get数据
http.createServer((req,res) => {
	var urls = urlLib.parse(req.url, true);
	var url = urls.pathname;
	var GET = urls.query;
	console.log(url,GET); //结果/aaa { user: 'dengzhao', pass: '123456' }

	res.write('get请求成功');
	res.end();
}).listen(8088);

console.log('Server running at http://127.0.0.1:8088/');