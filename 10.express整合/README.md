# 10:express整合

前面讲到express：

1.express基础：用到express和express-static  

2.数据交互：用到body-parser中间件  

3.cookie、session：用到cookie-parser和cookie-session中间件  

4.模板引擎：用到jade和ejs

整合这些知识点的文件在server.js里面。下面要讲到上传文件的中间件multer  

## multer中间件  

body-parser　解析post数据　　解析的是form属性为enctype="application/x-www-form-urlencoded"的数据，也就是普通的表单数据  

multer　　　 解析post文件　　解析的是form属性为enctype="multipart/form-data"的数据  

### 安装
```
npm install multer --save  
```

### 使用  

具体见代码upload.html和server_file.js