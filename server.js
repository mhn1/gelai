var http = require("http");
var url = require("url");
var fs = require("fs");
var path = require("path");
var server = http.createServer(function(request,response){

	var method = request.method;
	var pathname = url.parse(request.url,true).pathname;

	if(pathname=="/"){
		pahtname = "/index.html";

	}
	if(pathname !="favicon.icon"){
	fs.readFile("public"+pathname,function(err,data){
		if(err){
			console.log("读取文件失败");
			response.writeHead(404,"error",{})
			response.end();
		}else{
			var style = path.extname("public"+pathname);
			var mine = ""
			switch(style){
				case ".html" : mine = "text/html;charset=utf8";
				break;
				case ".css" : mine = "text/css;charset=utf8";
				break;
				case ".js" : mine = "application/x-javascript";
				break;
				case ".json" : mine = "application/json";
				break;
				case ".jpg" : mine = "images/jpeg";
				break;
				case ".png" : mine = "images/png";
				break;
				case ".gif" : mine = "images/gif";
				break;
				default:mine=""
				break;
			}
			if(mine !==""){
				response.writeHead(200,"ok",{
					"Content-Type":mine
				})
			}
			response.end(data);
		}
	})
}
})

server.listen(8888,function(args){
	console.log("server is running");
})