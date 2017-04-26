const ejs=require('ejs');

//ejs循环模板
ejs.renderFile('./view/ejs3.ejs', {json: {arr: [
  {user: 'blue', pass: '123456'},
  {user: 'zhangsan', pass: '654321'},
  {user: 'xiaoming', pass: '999999'},
]}}, function (err, data){
  console.log(data);
});