const ejs=require('ejs');

ejs.renderFile('./view/ejs.ejs', {name: 'blue'}, function (err, data){
  console.log(data);
});
//运行该js文件，查看输出结果