const http = require('http')
const querystring = require('querystring')

http.createServer((req,res) => {

	// data事件：一段数据达到就会触发一次
	var i=0;
	var str = ''; //接收的拼接数据
	req.on('data',(data) => {
		console.log(`第${i++}次接收数据`);
		str += data;
	});

	//end事件：数据全部达到触发
	req.on('end', () => {
		console.log(str); //接收完所有数据后的拼接数据
		var Jdata = querystring.parse(str);
		console.log(Jdata);
	});

	res.write('post请求成功');
	// res.end();
}).listen(8088);

console.log('Server running at http://127.0.0.1:8088/');