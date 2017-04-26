const jade = require('jade')

var html = jade.renderFile('./view/jade5.jade',{pretty:true});

console.log(html);
