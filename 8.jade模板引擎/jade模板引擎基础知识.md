# jade模板引擎基础知识  

express模板引擎：jade模板引擎和ejs模板引擎

>jade模板引擎: 破坏式，侵入式模板引擎，和普通的html,css不能共存

>ejs模板引擎：非侵入式，不会破坏原来的html,css


## 安装

### 
1.肯定要有node.js环境啦

2.然后
```
npm install jade -g
```
全局安装  

3.安装到本地
```
npm install jade --save
```

## 基础语法

jade采用类ruby语法用缩进关系控制

缩进两格  标签与内容之间空一格

例子

index.jade  

```jade

	doctype html
	html
	  head
	    title jade-demo
	  body
	    p hello world
```  
在命令行运行

```
	$ jade index.jade
```
即可编译出一个index.html文件
内容如下

```html

	<!DOCTYPE html><html><head><title>jade-demo</title></head><body><p>hello world</p></body></html>
```

编译时加一个参数 -P  结果如下

```html

	<!DOCTYPE html>
	<html>
	  <head>
	    <title>jade-demo</title>
	  </head>
	  <body>
	    <p>hello world</p>
	  </body>
	</html>
```

再加一个 -w 后缀，即可实现实时编译  

上述代码也可以通过在js代码中添加jade.renderFile('模板文件名', 参数)来读模板文件，用node运行js代码就可以看到jade的解析结果。
下面的例子为这种方法。

### jade.renderFile  

把html当做模板存起来，用readFile来读模板，模板格式为.jade结尾的文件   

>jade.renderFile('模板文件名', 参数)  

　　参数有{pretty:true}的话可以起到美化html标签的作用，显示成易于开发者浏览的html标签  

　　参数也可以是传递到jade模板里面的变量，用逗号分隔  
　　　如jade.renderFile('模板文件名',{pretty:true,a:1})  
　　　jade模板中span #{a}就会输出为< span >1< /span >

jade.jade模板

```jade

	doctyle html
	  html
	    head
	      title jade-demo
	    body
	      p hello world
```  

jade.js文件

```js

	const jade = require('jade')
	
	var html = jade.renderFile('./view/jade.jade',{pretty:true});
	
	console.log(html);

```  
运行该js文件，控制台会解析jade.jade里面的模板到控制台  

结果为:

```html

	<doctyle>html
	  <html>
	    <head>
	      <title>jade-demo</title>
	    </head>
	    <body>
	      <p>hello world</p>
	    </body>
	  </html>
	</doctyle>
```

### 属性和内容  

属性放在()里面，多个属性用逗号分隔  
内容空个格，直接往后堆  

	script(src="a.js") 解析成=> <script src="a.js"></script>  
	a(href="") 官网 解析成=> <a href="">官网</a>

### style和class

style可以用1.属性写法 2.json格式写法

例子  

```

	style="width:200px;height:200px;background:red;"
	
	属性写法:(style="width:200px;height:200px;background:red")
	
	json写法:(style= {width: '200px', height: '200px', background: 'red'})
```

class可以用1.属性写法 2.数组写法  

例子

```

	class="aaa left-swrap active"
	
	属性写法：(class="aaa left-warp active")
	
	数组写法: (class= ['aaa', 'left-warp', 'active'])
```
### id和class简单写法  

例子

```

	div.box
	div#div1
```

### |和.

|在jade里表示原样输出东西  

例子

```

	aaa 会当作自定义标签输出为 <aaa></aaa>
	
	加上|的话，|aaa 会原样输出为aaa
```

.在jade里表示下一级的内容原样输出  

例子 

```
	
	script.
	　alert('这里是js代码');
```

### include  

```

	include + 文件名 比如include a.js可以引入a.js文件直接显示到页面中，而不是通过http请求的方式引入
```

### jade模板循环

>循环模板直接用for循环  

jade3.js

```js

	const jade = require('jade')
	
	var html = jade.renderFile('./view/jade3.jade',{pretty:true,
		arr:['aaa','bbb','ccc','ddd']
	});
	
	console.log(html);
```  

jade3.jade

```jade

	html
	  head
	  body
	    <!-- jade模板循环：-表示执行代码 div #{arr[i]}获取传递参数arr[i]可以简写成div=arr[i] -->
	    <!-- 运行jade3.js查看循环结果 -->
	    -for(var i=0;i<arr.length;i++)
	      div=arr[i]
```

jade3.js的输出结果为

```html

	<html>
	  <head></head>
	  <body>
	    <div>aaa</div>
	    <div>bbb</div>
	    <div>ccc</div>
	    <div>ddd</div>
	  </body>
	</html>
```

### 非转义输出html

jade模板默认转义html内容，非转义输出html加上!

jade4.js

```js

	const jade = require('jade')
	
	var html = jade.renderFile('./view/jade4.jade',{pretty:true,
		content:"<h3>h3标签在jade中默认转义输出，现在需要非转义输出</h3>"
	});
	
	console.log(html);
```
jade4.jade

```jade

	doctype html
	html
	  head
	  body
		// 转义输出
	    div=content
		// 非转义输出
	    div!=content
```

jade4.js的输出结果为

```html

	<!DOCTYPE html>
	<html>
	  <head></head>
	  <body>
	    <div>&lt;h3&gt;h3标签在jade中默认转义输出，现在需要非转义输出&lt;/h3&gt;</div>
	    <div><h3>h3标签在jade中默认转义输出，现在需要非转义输出</h3></div>
	  </body>
	</html>
```
发现转义输出带有html转义标签

### if语句

见jade5.js和jade5.jade文件

### switch...case语句

见jade6.js和jade6.jade文件












