var fs = require('fs');

fs.unlink('filebarusaya.txt', function (err) {
	if (err) throw err;
	console.log("File dihapus!");
})