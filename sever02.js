var http = require("http");
var url = require("url");
var path = require("path");
var fs = require("fs");

// var num = 0;

var server = http.createServer(function(req,res){
	// 获取请求路径pathname
	// num ++;
	// console.log("")
	// var ip = req.connection.remotaAddress;
	var reqMethod = req.method;
	var Murl = req.url;
	var pathname = url.parse(Murl,true).pathname;
	var query = url.parse(Murl,true).query;
	// 为了提供首页
	if(pathname=='/'){
		pathname='/index.html'
	}
	if(pathname !="favicon.icon");{
	fs.readFile("public"+pathname,function(err,data){
		if(err){
			console.log("读取文件失败");
			response.writeHead(404,"error",{})
			response.end();
		}else{
			// 获取文件类型
			var style = path.extname("public"+pathname);
			var mime = ""
			switch(style){
				case ".html" : mime = "text/html;charset=utf8";
				break;
				case ".css" : mime = "text/css;charset=utf8";
				break;
				case ".js" : mime = "application/x-javascript";
				break;
				case ".json" : mime = "application/json";
				break;
				case ".jpg" : mime = "image/jpeg;";
				break;
				case ".png" : mime = "image/png;";
				break;
				case ".gif" : mime = "image/gif;";
				break;
				default: mime=""
				break;
			}
			if(mime !==""){
				res.writeHead(200,"ok",{
					"Content-Type":mime
				})
			}
			res.end(data);
			/*
			url 解析url字符串
			querystring 解析查询字符串  name=1&age=2&
			*/

		}
	})
}
})


server.listen(8080, function(args) {
	console.log("server is running")
	// body
})
