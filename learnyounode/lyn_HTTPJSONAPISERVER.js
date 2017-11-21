	const http = require("http");
	const url = require("url");
	let portNum = process.argv[2];

	function parsetime(time){
		return {
			"hour": time.getHours(),
			"minute": time.getMinutes(),
			"second":time.getSeconds()
		};
	}

	function unixtime(time){
		return { "unixtime": time.getTime()};
	}

	const server = http.createServer(function (req, res) {
		if(req.method == "GET"){
       		res.writeHead(200, {"content-type" : "application/json" });
       		let parseUrl = url.parse(req.url, true);
        	let time = new Date(parseUrl.query["iso"]);
        	let result;

        	if(parseUrl.pathname == "/api/parsetime") {
        		result = parsetime(time);
        		console.log(result);
        	} else if (parseUrl.pathname == "/api/unixtime") {
        		result = unixtime(time);
        		console.log(result);
        	}

        	res.write(JSON.stringify(result) + " ");
        	res.end();
        }
    });

    server.listen(portNum);

	


	