	let fs = require("fs");
	let path = require("path");

	let dir = process.argv[2];
	let extension =  "." + process.argv[3];

	fs.readdir(dir, function(err, list) {
	  list.forEach(function(file) {
	  if (path.extname(file) === extension) {
console.log(file);
	}
	  });
	});

	