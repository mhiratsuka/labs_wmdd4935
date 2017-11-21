	const fs = require("fs");
	const path = require("path");

 	module.exports = function(dir, fileEx, callback){
 		let files = [];

 		fs.readdir(dir, function(err, list) {
	 		if(err){
	 			return callback(err);
	 		}

	 		for (let i in list) {
	 			if (path.extname(list[i]) === "." + fileEx) {
	 			files.push(list[i])
	 			}
	 		}
	 		callback(null, files);
	 	});
 	}
