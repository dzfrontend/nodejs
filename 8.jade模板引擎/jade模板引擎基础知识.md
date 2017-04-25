# jade模板引擎基础知识  

express模板引擎：jade模板引擎和ejs模板引擎

jade模板引擎: 破坏式，侵入式模板引擎，和普通的html,css不能共存

ejs模板引擎：非侵入式，不会破坏原来的html,css


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
```
doctyle html
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
```
<!DOCTYPE html><html><head><title>jade-demo</title></head><body><p>hello world</p></body></html>
```
编译时加一个参数 -P  结果如下
```
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
下面的例子通过这种方法来演示。

### jade.renderFile  

把html当做模板存起来，用readFile来读模板，模板格式为.jade结尾的文件   

jade.renderFile('模板文件名', 参数)  
　　参数有{pretty:true}的话可以起到美化html标签的作用，显示成易于开发者浏览的html标签  

jade.jade模板
```
doctyle html
  html
    head
      title jade-demo
    body
      p hello world
```  

jade.js文件
```
const jade = require('jade')

var html = jade.renderFile('./view/jade.jade',{pretty:true});

console.log(html);

```  
运行该js文件，控制台会解析jade.jade里面的模板到控制台  

结果为:
```
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
a(href="=") 官网 解析成=> <a href="">官网</a>

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

json写法: (class= ['aaa', 'left-warp', 'active'])
```
### id和class简单写法  

例子
```
div.box
div#div1
```























