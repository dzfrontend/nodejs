// 把html当做模板存起来，用readFile来读模板，模板格式为.jade结尾的文件
/*
jade.renderFile('模板文件名', 参数)
参数有{pretty:true}的话可以起到美化html标签的作用，显示成易于开发者浏览的html标签
*/

const jade = require('jade')

var html = jade.renderFile('./view/jade.jade',{pretty:true});

console.log(html);

//运行该js文件，控制台会解析jade.jade里面的模板到控制台
/*
结果为：
<doctyle>
  <html>
    <head>
      <title>jade-demo</title>
    </head>
    <body>
      <p>hello world</p>
    </body>
  </html>
</doctyle>
*/