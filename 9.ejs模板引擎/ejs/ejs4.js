const ejs=require('ejs');

//<%= %> 用于转义的输出 <%- %> 用于非转义的输出
ejs.renderFile('./view/ejs4.ejs', {}, function (err, data){
  console.log(data);
});
