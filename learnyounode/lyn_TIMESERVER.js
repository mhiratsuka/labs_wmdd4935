	const net = require("net");
	let portNum = Number(process.argv[2]);

	function currentTime(){
		let d = new Date();
		let month = ("0" + (d.getMonth() + 1)).slice(-2);
		let date = ("0" + d.getDate()).slice(-2);
		let hour = ("0" + d.getHours()).slice(-2);
		let mins = ("0" + d.getMinutes()).slice(-2);

		return d.getFullYear() + "-" + 
			month + "-" + 
			date + " " + 
			hour + ":" + 
			mins
	}

	const server = net.createServer(function (socket) {
       socket.end(currentTime() + '\n');
    });

    server.listen(portNum);

	