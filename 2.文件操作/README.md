#2:文件操作

## 文件操作：fs模块，全称File System 

### fs.readFile()

fs.readFile()是一个异步操作  

readFile(文件名,回调函数)  

  回调函数有两个参数err和data，分别表示错误信息和读取信息  

fs.js文件

```
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

运行该js文件会出来二进制数据<Buffer d5 e2 ca c7 d2 bb b8 f6 74 78 74 ce c4 bc fe>，所以需要data.toString()才能真正显示文件内容

### fs.writeFile()

writeFile(文件名,内容,回调函数)  

fs2.js文件

```
const fs = require('fs'); //导入fs模块

//writeFile(文件名,内容,回调函数)
fs.writeFile('file2.txt','这是写入的内容',function(err){
	if(err){
		console.log('写入失败');
	}
});
```  
运行该js文件就可以向文件写入内容
