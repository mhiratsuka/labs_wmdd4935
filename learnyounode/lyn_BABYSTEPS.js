	let num = 0;

	for(let i = 2; i < process.argv.length; i++){
		num = num + Number(process.argv[i]);
	}

console.log(num);

