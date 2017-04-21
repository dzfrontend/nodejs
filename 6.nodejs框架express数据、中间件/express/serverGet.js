//接收GET数据
const express = require('express')

var server = express();
server.listen(8088);

//GET
server.use('/get',(req,res) => {
	//接收的GET数据
	console.log(req.query); //{ user: 'dengzhao', pass: '111111' }
});

console.log('Server running at http://127.0.0.1:8088/');