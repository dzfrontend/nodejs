const express=require('express');
const static=require('express-static');
const cookieParser=require('cookie-parser');
const cookieSession=require('cookie-session');
const bodyParser=require('body-parser');
const multer=require('multer');
const consolidate=require('consolidate');
const mysql=require('mysql');
const commonLibs = require('./libs/common')

// 连接数据库
const db = mysql.createPool({host: 'localhost', user: 'root', password: 'mysql', database: 'blog'})

var server=express();
server.listen(8080);

//1.解析cookie
server.use(cookieParser('sdfasl43kjoifguokn4lkhoifo4k3'));

//2.使用session
var arr=[];
for(var i=0;i<100000;i++){
  arr.push('keys_'+Math.random());
}
server.use(cookieSession({name: 'zns_sess_id', keys: arr, maxAge: 20*3600*1000}));

//3.post数据
server.use(bodyParser.urlencoded({extended: false}));
server.use(multer({dest: './www/upload'}).any());

//4.配置模板引擎
//输出什么东西
server.set('view engine', 'html');
//模板文件放在哪个文件夹
server.set('views', './template');
//哪种模板引擎
server.engine('html', consolidate.ejs);


//接收用户请求，请求同一个地址的数据依次查询数据库获得，用next()实现链式操作
server.get('/', (req, res, next) => {
	//查询banner数据
	res.banners = []
	db.query('SELECT * FROM banner_table', (err,data) => {
		if(err){
			res.status(500).send('database error').end();
		}else{
			res.banners = data;
		}
		next();
	});
});
server.get('/', (req, res, next)=>{
  //查询文章列表
  res.articles = []
  db.query('SELECT ID,title,summary FROM article_table', (err, data)=>{
    if(err){
      res.status(500).send('database error').end();
    }else{
      res.articles=data;
    }
    next();
  });
});
server.get('/', (req,res) => { 
	res.render('index.ejs', {banners: res.banners, articles: res.articles})
})

server.get('/article', (req,res) => {
	// console.log(req.query.id);
	
	if(req.query.id){
		// 点赞更新数据库操作
		if(req.query.act === 'like'){
			db.query(`UPDATE article_table SET n_like=n_like+1 WHERE ID=${req.query.id}`,(err,data) =>{
				if(err){
					res.status(500).send('数据库出错').end()
				}else{
					// 显示文章
					db.query(`SELECT * FROM article_table WHERE ID=${req.query.id}`, (err,data) =>{
						if(err){
							res.status(500).send('数据有问题').end()
						}else{
							if(data.length === 0){
								res.status(404).send('文章内容为空').end()
							}else{
								var articleData = data[0]
								articleData.date = commonLibs.time2date(articleData.post_time) //获取转化后的时间
								articleData.content = articleData.content.replace(/^/gm, '<p>').replace(/$/gm, '</p>'); //行首行尾加上p标签
								res.render('conText.ejs',{
									article_data: articleData
								})
							}
						}
					})	
				}
			})
		}else{
			// 显示文章
			db.query(`SELECT * FROM article_table WHERE ID=${req.query.id}`, (err,data) =>{
				if(err){
					res.status(500).send('数据有问题').end()
				}else{
					if(data.length === 0){
						res.status(404).send('文章内容为空').end()
					}else{
						var articleData = data[0]
						articleData.date = commonLibs.time2date(articleData.post_time) //获取转化后的时间
						articleData.content = articleData.content.replace(/^/gm, '<p>').replace(/$/gm, '</p>'); //行首行尾加上p标签
						res.render('conText.ejs',{
							article_data: articleData
						})
					}
				}
			})
		}
	}else{
	    res.status(404).send('您请求的文章找不到').end();
	}

})

//5.请求静态资源目录
server.use(static('./www'));
//访问http://127.0.0.1:8080/就可以输出./template/index.ejs的结果