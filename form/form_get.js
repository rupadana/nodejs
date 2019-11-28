var http = require('http');
var url  = require('url');
var fs   = require('fs');

http.createServer( function (request, response) {
	var q = url.parse(request.url, true);

	if(q.pathname == "/search/" && request.method === "GET"){
		//ambil parameter dari URL
		var keyword = q.query.keyword;

		if( keyword ){
			// Ambil data dari form dengan metode GET
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write("<h3>Search Results:</h3>");
            response.write("<p>Anda mencari: <b>" + keyword + "</b></p>");
            response.write("<pre>Tidak ada hasil! Maaf website ini masih dalam pengembangan</pre>")
            response.end("<a href='/search/'>Kembali</a>");
		}else {
            // tampilkan form search
            fs.readFile('search.html', (err, data) => {
                if (err) { // kirim balasan error
                    response.writeHead(404, {'Content-Type': 'text/html'});
                    return response.end("404 Not Found");
                } 
                // kirim form search.html
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.write(data);
                return response.end();
            });
        }
	}
}).listen(8000);
console.log("Server berjalan di http://localhost:8000");