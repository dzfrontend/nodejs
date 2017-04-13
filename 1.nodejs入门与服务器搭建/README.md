## 1.1 nodejs安装

官网下载nodejs文件https://nodejs.org/en ,一步一步安装即可

## 1.2 nodejs运行
cmd命令窗口打开js的当前目录，node xxx.js运行js文件  
JS能用的，NodeJS都能用

## 1.3 nodejs服务器

### http协议

需要了解http协议，对应的nodejs API文档为HTTP

### Sublime Text3 配置 NodeJs 开发环境

可以参考<http://www.jianshu.com/p/ea6ff4f9b3d9>，很详细有用。

### 搭建服务器

node文件夹下面的server.js为以下代码，因为sublime已经安装了nodejs开发环境插件，快捷键Ctrl + B 进行编译，sublime控制台就会打印Server running at http://127.0.0.1:8888/；  

命令行打开server.js所在文件夹路径，运行node server.js，出来Server running at http://127.0.0.1:8888/的打印信息，浏览器访问该地址，又出来有人访问了的打印信息

```
const http = require('http'); //导入http模块，http这个模块变量后面不会去改它，所以用const定义常量

var server = http.createServer(function(){
	console.log('有人访问了');
});//creatServer创建一个服务器，每当有访问就会执行createServer

//监听listen(),里面放端口号
server.listen(8888);
console.log('Server running at http://127.0.0.1:8888/');
```

### createServer两个回调request,response请求和响应

request		请求	输入-请求的信息  
response	响应	输出-输出的东西

server2.js
```
const http = require('http'); //导入http模块，http这个模块变量后面不会去改它，所以用const定义常量

// var server = http.createServer(function(request,response){
var server = http.createServer(function(req,res){
	res.write('写入成功'); //write()向浏览器写东西
	res.end(); //end()结束
});

//监听listen(),里面放端口号
server.listen(8888);
console.log('Server running at http://127.0.0.1:8888/');
```
参数request和response简写成req和res

### 浏览器请求信息request