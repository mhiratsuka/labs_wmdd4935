	const http = require("http");
	const bl = require("bl");
	let urls = [process.argv[2], process.argv[3], process.argv[4]];
	let results = [];
	let count = 0;

	//disply results
	function printResults(){
		for(let i = 0; i < results.length; i++){
				console.log(results[i]);
		}
	}

	// http.get() function 
	function httpGet(urls, index){
		http.get(urls[index], function(res){
			res.pipe(bl(function(err, data){
				if(err){
					return console.error(err);
				}
				
				results[index] = data.toString();
				count = count + 1;
				
				if(count == urls.length){
					printResults();
				}
			}));
		});
	}

	// request httpGet until the number of request reaches the urls.length 
	for(let i = 0; i < urls.length; i++){
			httpGet(urls, i);
	}

