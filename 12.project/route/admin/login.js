const express = require('express')
const common = require('../../libs/common')
const mysql = require('mysql')

var db = mysql.createPool({host: 'localhost', user: 'root', password: 'mysql', database: 'learn'})

module.exports = function(){
	var router = express.Router()
	
	// get请求登录页面
	router.get('/',(req,res) =>{
		res.render('admin/login.ejs',{})
	})
	// post请求登录
	router.post('/',(req,res) =>{
		var username = req.body.username
		var password = common.md5(req.body.password+common.MD5_SUFFIX)
		db.query(`SELECT * FROM admin_table WHERE username='${username}'`, (err,data) =>{
			if(err){
				res.status(500).send('database err').end()
			}else{
				if(data.length === 0){
					res.status(400).send('no this admin').end()
				}else{
					if(data[0].password === password){
						//成功跳转首页存储sessionID
						req.session['admin_id']=data[0].ID;
            			res.redirect('/admin/');
					}else{
						res.status(400).send('the password is incorrect').end()
					}
				}
			}
		})
	})

	return router
} 