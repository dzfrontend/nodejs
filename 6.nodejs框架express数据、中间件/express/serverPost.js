//接收POST数据
const express = require('express')
const bodyParser=require('body-parser');

var server = express();
server.listen(8088);


// body-parser
server.use(bodyParser.urlencoded({ //下面两个参数可以不写
  extended: false,     		//扩展模式，当extended为false的时候，键值对中的值就为'String'或'Array'形式，为true的时候，则可为任何数据类型
  limit:    2*1024*1024    //限制post数据大小
}));

//POST
server.use('/post',(req,res) => {
	//接收的POST数据
	console.log(req.body); //{ user: 'dengzhao', pass: '111111' }
});

console.log('Server running at http://127.0.0.1:8088/');