const express = require('express')

var server = express()
server.listen(8088);
console.log('Server running at http://127.0.0.1:8088/');

// 路由：
// 例：访问目录/user里面的资源，浏览器访问http://127.0.0.1:8088/user/1.html，浏览器显示user1

// 1.创建路由Router
var routeUser = express.Router()
// 2.将Router添加到server
server.use('/user',routeUser)
// 3.对应请求的页面
routeUser.get('/1.html', (req,res) => {
    res.send('user1')
})