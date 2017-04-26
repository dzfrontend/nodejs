const jade = require('jade')

var html = jade.renderFile('./view/jade4.jade',{pretty:true,
	content:"<h3>h3标签在jade中默认转义输出，现在需要非转义输出</h3>"
});

console.log(html);
