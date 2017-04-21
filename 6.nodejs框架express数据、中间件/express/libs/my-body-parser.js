const querystring = require('querystring');

/*
module.exports = function(req,res,next){
	var str = '';
	req.on('data',function(data){
		str += data;
	});
	req.on('end',function(){
		req.body = querystring.parse(str);
		next();
	})
};*/

//外部引入该模块然后
//形式一:server.use(mybodyParser);

/*
module.exports = function(){
	return function(req,res,next){
		var str = '';
		req.on('data',function(data){
			str += data;
		});
		req.on('end',function(){
			req.body = querystring.parse(str);
			next();
		})
	};
}*/

//外部使用形式二:server.use(mybodyParser());

module.exports = {
	urlencoded:function(){
		return function(req,res,next){
			var str = '';
			req.on('data',function(data){
				str += data;
			});
			req.on('end',function(){
				req.body = querystring.parse(str);
				next();
			})
		};
	}
}

//外部使用形式三:server.use(mybodyParser.urlencoded());