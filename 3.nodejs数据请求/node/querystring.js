const querystring = require('querystring');
// querystring.parse() 方法能把一个 URL 查询字符串（str）解析成一个键值对的集合

var json = querystring.parse('foo=bar&abc=xyz&abc=123');
console.log(json); //{ foo: 'bar', abc: [ 'xyz', '123' ] }