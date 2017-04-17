const http = require('http');
const querystring = require('querystring');

//获取get数据
http.createServer((req,res) => {
	//req获取前台请求数据
	//get方式通过url提交,所以通过req.url获取请求数据
	console.log(req.url);
	if(req.url.indexOf('?') !== -1){ //url地址有?情况 ，避免/favicon.ico的情况
		var arr = req.url.split('?');
		var url = arr[0]; //arr[0] => 地址 '/aaa'
		//arr[0] => 地址 '/aaa'    arr[1] => 数据 'user=dengzhao%pass=123456'

		var GET = {};
		GET = querystring.parse(arr[1]);
	}else{
		var url = req.url;
		var GET = {};
	}
	
	console.log(url,GET); //结果/aaa { user: 'dengzhao', pass: '123456' }

	res.write('aaa');
	res.end();
}).listen(8088);

console.log('Server running at http://127.0.0.1:8088/');
