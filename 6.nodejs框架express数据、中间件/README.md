# 6:express数据接收、中间件

概述：  

1.服务器端接收数据：GET、POST接收数据  
2.链式操作next  
3.中间件：使用use、自定义中间件

## 数据接收：接收GET、POST数据

接收GET数据--无需中间件  
req.query

接收POST数据--需要中间件"body-parser"  
server.use(bodyParser.urlencoded({}));  
server.use(function (req,res){
	req.body
});

### 接收GET数据  

代码在formGet.html和serverGet.js里  

serverGet.js  

```
//接收GET数据
const express = require('express')

var server = express();
server.listen(8088);

//GET
server.use('/get',(req,res) => {
	//接收的GET数据
	console.log(req.query); //{ user: 'dengzhao', pass: '111111' }
});

console.log('Server running at http://127.0.0.1:8088/');
```

node运行js文件，formGet.html提交数据，服务端就会接收到Get方式提交的数据  

### 接收POST数据  

代码在formPost.html和serverPost.js里  

serverPost.js  

```
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
```  

node运行js文件，formPost.html提交数据，服务端就会接收到Post方式提交的数据  

## 链式操作  

server.use(function (req, res, next){});  
server.get(function (req, res, next){});  
server.post(function (req, res, next){});  

多一个next参数实现链式操作  

```
const express=require('express');

var server=express();
server.listen(8088);

server.use('/', function (req, res, next){
  console.log('a');

  next(); //加上next实现链式操作，下面的use会继续执行
});

//不加next链式操作则下面的use不会执行
server.use('/', function (req, res, next){
  console.log('b');
});

console.log('Server running at http://127.0.0.1:8088/');
```

## 中间件  

上面POST获取数据 => 用到中间件body-parser  
中间件需要用use方法 => express().use()  

中间件是如何实现的?  

### 自定义中间件  

下面实现接收POST数据的自定义中间件  

serverBodyParser.js
```
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
```

自定义中间件需要提炼出来，详见serverBodyParser2.js和libs/my-body-parser.js



