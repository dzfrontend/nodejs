const fs = require('fs'); //导入fs模块

//writeFile(文件名,内容,回调函数)
fs.writeFile('file2.txt','这是写入的内容',function(err){
	if(err){
		console.log('写入失败');
	}
});