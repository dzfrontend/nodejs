//接收POST数据
const express = require('express')
// const bodyParser=require('body-parser');\
const querystring = require('querystring');

var server = express();
server.listen(8088);


// body-parser
// server.use(bodyParser.urlencoded());

// 不用中间件body-parser自己实现中间件
server.use(function(req,res,next){
	var str = '';
	req.on('data',function(data){
		str += data;
	});
	req.on('end',function(){
		req.body = querystring.parse(str);
		next();
	})
});


//POST
server.use('/post',(req,res) => {
	//接收的POST数据
	console.log(req.body); //{ user: 'dengzhao', pass: '111111' }
});

console.log('Server running at http://127.0.0.1:8088/');