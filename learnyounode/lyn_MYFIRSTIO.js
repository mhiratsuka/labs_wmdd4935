	let fs = require("fs")
	let file = fs.readFileSync(process.argv[2]);
	let result = file.toString().split("\n").length - 1;

console.log(result);

