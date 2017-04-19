//const mod = require('./mod.js'); //如果没有放到node_modules文件夹下引入则需要加上相对路径

// const mod = require('./mod'); //可以省略.js

const mod = require('mod.js'); //放到node_modules文件夹下不需要相对路径

console.log(mod.a);
