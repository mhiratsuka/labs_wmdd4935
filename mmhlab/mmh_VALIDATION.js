	const Hapi = require("hapi");
    const Joi = require("joi");
    
    const server = new Hapi.Server();

    server.connection({
        host: "localhost",
        port: Number(process.argv[2] || 8080)
    });

    server.route({ 
                   method:"GET", 
                   path: "/chickens/{breed}", 
                   config: {
                        handler: (request, reply) => { 
                        reply('You asked for the chicken ' +  request.params.breed);
                        },
                        validate: {
                            params: {
                            breed: Joi.string().required()
                        }
                    }
                 }
    });


    server.start(function (err){
    	if(err){
			return console.error(err);
		  }
    });



