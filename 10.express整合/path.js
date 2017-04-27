const path=require('path');

var str='c:\\wamp\\www\\a.html';

var obj=path.parse(str);

//base      文件名部分'a.html'
//ext       扩展名'.html'
//dir       路径'c:\\wamp\\www'
//name      文件名部分'a'
console.log(obj);
