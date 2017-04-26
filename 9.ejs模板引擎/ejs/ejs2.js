const ejs=require('ejs');

//参数传递还可以是json
ejs.renderFile('./view/ejs2.ejs', {json: {arr: [
  {user: 'blue', pass: '123456'},
  {user: 'zhangsan', pass: '654321'},
  {user: 'xiaoming', pass: '999999'},
]}}, function (err, data){
  console.log(data);
});
