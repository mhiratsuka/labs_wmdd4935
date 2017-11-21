	const Hapi = require("hapi");
	const Vision = require("vision");
    const Path = require("path");
    
    const server = new Hapi.Server();

    server.connection({
        host: "localhost",
        port: Number(process.argv[2] || 8080)
    });

    server.register(Vision, function (err) {
        if (err) throw err;
    });

    server.views({
        engines: {
            html: require("handlebars")
        },
        path: Path.join(__dirname, "templates"),
        helpersPath: Path.join(__dirname, "helpers"),
    });



    server.route({ 
                   method:"GET", 
                   path: "/", 
                   handler: {
                        view:  "index_helping.html"
                   }
    });


    server.start(function (err){
    	if(err){
			return console.error(err);
		}
    });


