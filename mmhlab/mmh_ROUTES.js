	const Hapi = require("hapi");
    const server = new Hapi.Server();

    server.connection({
        host: "localhost",
        port: Number(process.argv[2] || 8080)
    });

    server.route({ path: "/{name}", 
    			   method:"GET", 
    			   handler: function (req, rep) {
    			   		rep("Hello " + req.params.name);
    			   }
    });

    server.start(function (err){
    	if(err){
			return console.error(err);
		}
    });