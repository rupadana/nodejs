var http = require("http");
var fs   = require("fs");

http.createServer(function (request, response){

	// Baca File
	fs.readFile("index.html", (err, data) => {
		if (err) throw err;

		// kirim response
		response.writeHead(200,{"Content-Type" : "text/html"});
		response.write(data);
		response.end();

	});
}).listen(8000);

console.log("Server berjalan pada http://localhost:8000");