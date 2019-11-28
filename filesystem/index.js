var http = require("http");
var fs   = require("fs");

http.createServer(function (request, response){

	// Baca File
	fs.readFile("index.html", (error, data) => {
		if (error) throw error;

		// kirim response
		response.writeHead(200,{"Content-Type" : "text/html"});
		response.write(data);
		response.end();

	});
}).listen(8000);

console.log("Server berjalan pada http://localhost:8000");