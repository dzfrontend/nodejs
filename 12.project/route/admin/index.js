const express = require('express')
const common = require('../../libs/common')
const mysql = require('mysql')

var db = mysql.createPool({host: 'localhost', user: 'root', password: 'mysql', database: 'learn'})

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

    // admin
	router.get('/',(req,res) =>{
		res.render('admin/index.ejs',{})
    })
    // admin/login
    router.use('/login',require('./login')())
    // admin/banners
    router.use('/banners',require('./banners')())
	return router
} 