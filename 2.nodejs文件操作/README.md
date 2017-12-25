# 2:文件操作

## 文件操作：fs模块，全称File System 

### fs.readFile()

fs.readFile()是一个异步操作  

readFile(文件名,回调函数)  

  回调函数有两个参数err和data，分别表示错误信息和读取信息  

fs.js文件

```js
const fs = require('fs'); //导入fs模块

//readFile(文件名,回调函数)
fs.readFile('file.txt',function(err,data){
  if(err){
    console.log('读取失败');
  }else{
    console.log(data.toString());
  }
});
```

运行该js文件会出来二进制数据，所以需要data.toString()才能真正显示文件内容

### fs.writeFile()

writeFile(文件名,内容,回调函数)  

fs2.js文件

```js
const fs = require('fs');

//writeFile(文件名,内容,回调函数)
fs.writeFile('file2.txt','这是写入的内容',function(err){
  if(err){
    console.log('写入失败');
  }
});
```  
运行该js文件就可以向文件写入内容

### fs配合服务器

fs文件系统和服务器模块http配合可以解决用户访问地址的请求。当访问服务器的时候，读取文件信息写入浏览器。  

比如访问node/www文件夹下的index.html文件  req.url 对应 '/index.html'  
也就是/www/index.html路径，可以写为'/www'+req.url  

发现'/www'+req.url可以理解为访问www文件夹下的任意文件  

server.js文件
```js
const fs = require('fs');
const http = require('http');

var server = http.createServer((req,res) => {
  //不用swith了，新建一个www文件夹保存被访问文件
  //访问index.html req.url => '/index.html'
  //读取./www/index.html 也就是 './www'+req.url
  var file_name = './www'+req.url;
  fs.readFile(file_name,function(err,data){
    if(err){
      res.write('404');
    }else{
      res.write(data);
    }
    res.end();
  });
});
server.listen(8088);
console.log('Server running at http://127.0.0.1:8088/');
```  
node server.js运行该js文件，浏览器访问http://127.0.0.1:8088/index.html，或者访问www目录下存在的文件，浏览器会读取到相应内容