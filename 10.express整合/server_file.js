const express=require('express');
const bodyParser=require('body-parser');
const multer=require('multer');
const fs=require('fs'); //上传文件用到fs的rename，具体见rename.js
const pathLib=require('path'); //上传文件使用path目的是获取后缀名，具体见path.js


var server=express();

//用bodyParser错误，已经不能解析上传的post文件
//server.use(bodyParser.urlencoded({extended: false}));


//multer的dest指定文件上传路径
var objMulter=multer({dest: './www/upload/'});


//.any()接收任何文件 如果是.single('表单的name值')则是只接收指定name值表单的文件
server.use(objMulter.any());


//请求http://localhost:8088/的处理
server.post('/', function (req, res){

  console.log(req.files);

  //1.获取原始文件扩展名
  var oldName = req.files[0].path;
  var newName= oldName + pathLib.parse(req.files[0].originalname).ext;

  //2.上传的文件没有后缀名，需要重命名临时文件 如'./www/upload/dfb33662df86c75cf4ea8197f9d419f9' + '.png'
  fs.rename(req.files[0].path, newName, function (err){
    if(err)
      res.send('上传失败');
    else
      res.send('成功');
  });

});

server.listen(8088);
