const express=require('express');
const cookieParser=require('cookie-parser');
const cookieSession=require('cookie-session');

var server=express();
server.listen(8088);
console.log('Server running at http://127.0.0.1:8088/');


//cookie
server.use(cookieParser());
server.use(cookieSession({
  name: 'sess', //修改session名
  keys: ['aaa', 'bbb', 'ccc'], //多组秘钥，必填
  maxAge: 2*3600*1000
}));

server.use('/', function (req, res){
  //设置session
  if(req.session['count']==null){
    req.session['count']=1;
  }else{
    req.session['count']++;
  }

  //读取session
  console.log(req.session['count']);

  res.send('ok');
});