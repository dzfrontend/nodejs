const jade = require('jade')

var html = jade.renderFile('./view/jade2.jade',{pretty:true});

console.log(html);
