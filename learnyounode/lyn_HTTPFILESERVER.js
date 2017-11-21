	const http = require("http");
	const fs = require("fs");
	let portNum = Number(process.argv[2]);
	let filePath = process.argv[3];

	const server = http.createServer(function (req, res) {
       res.writeHead(200, {"content-type" : "text/plain" });
       let file = fs.createReadStream(filePath, {encoding: "utf8"});
       file.pipe(res);
    });

    server.listen(portNum);

	