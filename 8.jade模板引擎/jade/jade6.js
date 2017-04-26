const jade = require('jade')

var html = jade.renderFile('./view/jade6.jade',{pretty:true});

console.log(html);
