# 3:nodejs数据请求

## 数据请求

前台数据可以通过form、ajax、jsonp等方式提交，都是通过http协议。而后台获取前台提交的数据处理方式是一样的，只是请求方式get和post不同会导致后台接收方式不同  

请求方式：  
1.GET  数据在url中，最多提交32k的数据  
2.POST 数据不在url中，提交数据量比GET大得多  

POST数据和GET数据后台接收的格式是一样的

### 原生nodejs接收GET数据

get方式通过url提交数据,所以通过req.url获取请求数据进行处理  

serverGet.js

	```js
	const http = require('http');
	
	// 打开静态文件formGet.html，提交用户名为dengzhao、密码为123456的数据，get方式提交后url为/aaa?user=dengzhao&pass=111111
	// 这里就需要获取get数据
	http.createServer((req,res) => {
	
	  console.log(req.url); //get方式通过url提交,所以通过req.url获取请求数据
	
	  if(req.url.indexOf('?') !== -1){ //url地址有?,用来区分/favicon.ico的情况
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
	```
浏览器直接访问静态文件formGet.html提交数据，cmd控制台输出提交的数据

### Query Strings查询字符串

querystring.parse() 方法能把一个 URL 查询字符串（str）解析成一个键值对的集合  

```js
	const querystring = require('querystring');
	
	var json = querystring.parse('foo=bar&abc=xyz&abc=123');
	console.log(json); //{ foo: 'bar', abc: [ 'xyz', '123' ] }
```

利用querystring.parse()可以简化server.js中处理查询字符串的操作

### URL：处理url数据

url.js  

```js
	const urlLib = require('url');
	// url.parse() 方法会解析一个 URL 字符串并返回一个 URL 对象
	
	var obj=urlLib.parse("http://www.baidu.com/index?a=12&b=5", true); //true时query属性会解析成一个对象，而不是一个字符串
	
	console.log(obj);
	console.log(obj.pathname, obj.query);
```
解析url字符串返回地址和数据

**利用URL模块最大简化用户提交数据获取**

serverGet3.js

```js
	const http = require('http');
	const urlLib = require('url');
	
	//获取get数据
	http.createServer((req,res) => {
	  var urls = urlLib.parse(req.url, true);
	  var url = urls.pathname;
	  var GET = urls.query;
	  console.log(url,GET); //结果/aaa { user: 'dengzhao', pass: '123456' }
	
	  res.write('aaa');
	  res.end();
	}).listen(8088);
	
	console.log('Server running at http://127.0.0.1:8088/');
```
访问formGet.html提交数据，最大程度简化了server.js

### nodejs接收POST数据  

post数据分段发送，nodejs接收的时候也需要分段接收  

> req.on('data',function(data){})  
> req.on('end',function(data){})  

**通过on绑定事件：**  

data事件，有一段数据到达的时候触发一次(触发很多次)  
因为数据是一段一段的，所以接收data参数后需要拼起来  

**end事件，数据全部到达的时候触发(触发一次)**  

serverPost.js  

```js
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
```
nodejs处理post请求数据，在data事件里接收数据进行拼接，在end事件里面处理完整的拼接数据