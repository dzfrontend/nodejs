# 4:nodejs模块化

## 模块化  

1.系统模块：http、querystring、url  
2.自定义模块  
3.包管理器

### 系统模块

系统模块见nodejs官网api，常见的nodejs系统模块有：  

Crypto	加密  
Events	事件  
Net		网络操作  
OS		操作系统信息  
Path	处理文件路径  
Stream	流操作  
Timers	定时器  
ZLIB	压缩  

### 自定义模块  

自定义模块也就是导出模块  

require引入自己的模块(js)需要加上相对路径./，放在node_modules文件夹里面则不需要加相对路径。所以
自定义模块，统一都放到node_modules里面  

	1.require路径如果有"./"，从当前目录找  
	2.如果没有"./"，先从系统模块，再从node_modules找  

对外输出东西加上exports 如exports.变量  

	exports.xxx=??;
	exports.xxx=??;
	exports.xxx=??;

对外批量输出东西module.exports={}  
	
	module.exports={
		xxx:	??,
		xxx:	??,
		xxx:	??
	};  

### npm