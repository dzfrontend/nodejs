const ejs=require('ejs');

// include的使用
ejs.renderFile('./view/ejs5.ejs', {}, function (err, data){
  console.log(data);
});
