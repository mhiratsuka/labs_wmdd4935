	const Hapi = require("hapi");
	const Vision = require("vision");
    const Path = require("path");
    const Rot13 = require("rot13-transform");
    const Fs = require("fs");
    
    const server = new Hapi.Server();

    server.connection({
        host: "localhost",
        port: Number(process.argv[2] || 8080)
    });

    server.route({ 
                   method:"GET", 
                   path: "/", 
                   handler: (request, reply) =>{ 
                        let f = Fs.createReadStream(Path.join(__dirname, "mmh_streams.txt"));
                        reply(f.pipe(Rot13()));
                   }
    });


    server.start(function (err){
    	if(err){
			return console.error(err);
		}
    });


