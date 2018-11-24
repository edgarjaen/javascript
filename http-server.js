var http = require('http'),
	PORT= 8888,
	StatusHTTP={
			ok:200,
			NotFound:404
		};

http.createServer(function(request, response){
	response.writeHead(StatusHTTP.ok,{"Content-Type":"text/html"});
	response.write('NotFound',StatusHTTP.NotFound);
	console.log(request);
	response.end();
}).listen(PORT);