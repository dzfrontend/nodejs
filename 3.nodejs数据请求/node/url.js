const urlLib = require('url');
// url.parse() 方法会解析一个 URL 字符串并返回一个 URL 对象

var obj=urlLib.parse("http://www.baidu.com/index?a=12&b=5", true); //true时query属性会解析成一个对象，而不是一个字符串

console.log(obj);
console.log(obj.pathname, obj.query);