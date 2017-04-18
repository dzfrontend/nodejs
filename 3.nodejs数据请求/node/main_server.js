//GET POST 文件系统综合起来的js文件
const http = require('http');
const urlLib = require('url'); //解析url
const querystring = require('querystring'); //解析数据
const fs = require('fs'); //文件系统

http.createServer((req,res) => {
	//GET发送的数据
	var urlParse = urlLib.parse(req.url,true);
	var url = urlParse.pathname;
	const GET = urlParse.query;
	console.log(url,GET);
	
	//POST发送的数据
	var str = '';
	req.on('data',(data) => {
		str += data;
	});
	req.on('end',() => {
		const POST = querystring.parse(str);
		console.log(POST);
		//文件请求
		var file_name = './www' + url; //不再是req.url而是实际地址，因为还可能带参数
		fs.readFile(file_name,(err,data) => {
			if(err){
				res.write('404');
			}else{
				res.write(data);
			}
			res.end();
		});
	});
}).listen(8088);
console.log('Server running at http://127.0.0.1:8088/');