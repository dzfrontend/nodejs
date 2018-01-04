# 5:express入门

## 入门  

### 安装

通过 npm init 命令为你的应用创建一个 package.json 文件:  
>npm init

安装 Express 并将其保存到依赖列表中:  
>npm install express --save

### 对比原生nodejs  

**express保留了原生的功能，添加了一些方法(如send)，增强了原来的功能**  

下面用express创建一个服务器

//1.创建服务  
>var server=express();

//2.监听  
>server.listen(8080);

//3.处理请求  
>server.use('地址', function (req, res){
});

```js
	const express = require('express');
		
	//创建服务
	var server = express();
	
	//处理请求
	server.use('/express.html',(req,res) =>{ //当访问url时响应，相当于http.createServer
	  res.send('服务器访问成功'); //send()相当于原生中的write()
	  res.end();
	});
	
	//监听
	server.listen(8088);
	
	console.log('Server running at http://127.0.0.1:8088/');
```
当访问 http://127.0.0.1:8088/express.html 的时候，浏览器会输出服务器访问成功

## express实现登录  

用express实现下面的登录接口：

/login?user=xxx&pass=xxx
返回 => {ok:true/false,msg:'原因'}

### 接收数据
3种方法：  
>.get('/地址', function (req, res){});  
>.post('/地址', function (req, res){});  
>.use('/地址', function (req, res){});

### express中间件  

express有些没有的功能需要中间件来完成，可以当做插件  

express-static中间件处理静态文件
  
	安装：npm install express-static --save 
	使用：server.use(expressStatic('./www')) 这样访问www存在的文件都可以被访问到  

实现登录接口代码在www文件夹和login.js里面