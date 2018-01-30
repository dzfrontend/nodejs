const crypto = require('crypto')

module.exports = {
    MD5_SUFFIX: 'zhao', //md5加密后缀，自己设置的防止md5被破解
    md5: function(str){
        var obj = crypto.createHash('md5')
        obj.update(str)
        return obj.digest('hex')
    }
}