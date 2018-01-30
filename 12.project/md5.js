/**
 * md5使用例子，封装函数在libs/common.js里
 */
const crypto = require('crypto') //nodejs原生模块

var obj = crypto.createHash('md5')

obj.update('admin')

var str = obj.digest('hex')

console.log(str)