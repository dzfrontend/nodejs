const http = require('http');

// 打开静态文件formGet.html，提交用户名为dengzhao、密码为123456的数据，get方式提交后url为/aaa?user=dengzhao&pass=111111
// 这里就需要获取get数据
http.createServer((req,res) => {

	console.log(req.url); //get方式通过url提交,所以通过req.url获取请求数据

	if(req.url.indexOf('?') !== -1){ //url地址有?，用来区分/favicon.ico的情况
		var arr = req.url.split('?');
		//arr => ['/aaa','user=dengzhao&pass=111111']
		var url = arr[0];

		var arr2 = arr[1].split('&');
		//arr2 => ['user=dengzhao','pass=123456']

		var GET = {}; //用来存储被切割的请求数据
		// 将get数据变成key value的json形式
		for(var i=0;i<arr2.length;i++){
			var arr3 = arr2[i].split('=');
			GET[arr3[0]] = arr3[1];
		}
	}else{
		var url = req.url;
		var GET = {};
	}
	
	console.log(url,GET); // cmd输出/aaa { user: 'dengzhao', pass: '123456' }

	res.write('get请求成功');
	res.end();
}).listen(8088);

console.log('Server running at http://127.0.0.1:8088/');
