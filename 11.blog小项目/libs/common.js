/*
* 将后台的时间戳(秒为单位)用js转化为显示的时间(毫秒为单位)
*/
function toDouble(n){
	return n<10 ? '0'+n : ''+n;
}
module.exports = {
	time2date: function(timestamp){
		var oDate = new Date()
		oDate.setTime(timestamp)
		return toDouble(oDate.getFullYear())+'-'+toDouble(oDate.getMonth()+1)+'-'+toDouble(oDate.getDate())+'-'+toDouble(oDate.getHours())+'-'+toDouble(oDate.getMinutes())+'-'+toDouble(oDate.getSeconds())
	}
}
