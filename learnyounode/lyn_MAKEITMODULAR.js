	const filter = require("./filter.js");
	const dir = process.argv[2];
	const fileEx =  process.argv[3];

	filter(dir, fileEx, function(err, list){
		if(err){
			throw err;
		}

		list.forEach(function(files){
console.log(files);
		})

	});
	