// querystring简化处理字符串操作
const http = require('http');
const querystring = require('querystring');

//获取get数据
http.createServer((req,res) => {

	console.log(req.url);

	if(req.url.indexOf('?') !== -1){ //url地址有?，用来区分/favicon.ico的情况
		var arr = req.url.split('?');
		//arr => ['/aaa','user=dengzhao&pass=111111']
		var url = arr[0];

		var GET = {};
		GET = querystring.parse(arr[1]);
	}else{
		var url = req.url;
		var GET = {};
	}
	
	console.log(url,GET); // cmd输出/aaa { user: 'dengzhao', pass: '123456' }

	res.write('get请求成功');
	res.end();
}).listen(8088);

console.log('Server running at http://127.0.0.1:8088/');
