# 10:express整合

前面讲到express：

1.express基础：用到express和express-static  

2.数据交互：用到body-parser中间件  

3.cookie、session：用到cookie-parser和cookie-session中间件  

4.模板引擎：用到jade和ejs

整合这些知识点的文件在server.js里面

然后讲上传文件中间件multer  

## multer中间件实现文件上传  

>body-parser　解析post数据　　解析的是form属性为enctype="application/x-www-form-urlencoded"的数据，也就是普通的表单数据  

>multer　　　 解析post文件　　解析的是form属性为enctype="multipart/form-data"的数据  

### 安装

```
npm install multer --save  
```

### 使用  

具体见代码upload.html和server_file.js  

## express模板引擎适配

在express中想要灵活切换各种模板引擎，也就是使用不同的模板引擎，需要进行适配  

需要consolidate ,不再需要引入jade和ejs模板引擎，直接引入consoledate  

### consoledate  

consolidate https://www.npmjs.com/package/consolidate 模板引擎整合库  

看上面网址的文档结合server_consolidate.js就可以看懂consoledate模板引擎整合