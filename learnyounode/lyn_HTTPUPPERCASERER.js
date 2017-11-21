	const http = require("http");
	const map = require("through2-map");
	let portNum = process.argv[2];

	const server = http.createServer(function (req, res) {
       res.writeHead(200, {"content-type" : "text/plain" });

       if(req.method != "POST"){
       		return res.end("Request is not POST.\n");
       }

       req.pipe(map(function(chunk){
       		return chunk.toString().toUpperCase();
       })).pipe(res);
    });

    server.listen(portNum);

	


	