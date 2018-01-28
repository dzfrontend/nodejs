const express = require('express')

module.exports = function(){
	var router = express.Router()
	
	// 检查登录状态
	router.use( (req,res,next) =>{
		if(!req.session['admin_id'] && req.url !== '/login'){ //req为什么有session？
			res.redirect('/admin/login')
		}else{
			next()
		}
	})
	// get请求登录页面
	router.get('/login',(req,res) =>{
		res.render('admin/login.ejs',{})
	})
	// 
	router.get('/',(req,res) =>{
		res.render('admin/index.ejs',{})
	})
	return router
} 