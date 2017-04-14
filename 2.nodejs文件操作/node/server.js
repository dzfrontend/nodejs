const fs = require('fs');
const http = require('http');

var server = http.createServer((req,res) => {
	//不用swith了，新建一个www文件夹保存被访问文件
	//访问index.html req.url => '/index.html'
	//读取./www/index.html 也就是 './www'+req.url
	var file_name = './www'+req.url;
	fs.readFile(file_name,function(err,data){
		if(err){
			res.write('404');
		}else{
			res.write(data);
		}
		res.end();
	});
});
server.listen(8088);
console.log('Server running at http://127.0.0.1:8088/');
