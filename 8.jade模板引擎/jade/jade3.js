const jade = require('jade')

var html = jade.renderFile('./view/jade3.jade',{pretty:true,
	arr:['aaa','bbb','ccc','ddd']
});

console.log(html);
