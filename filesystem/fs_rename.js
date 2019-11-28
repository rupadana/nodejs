var fs = require('fs');

fs.rename("filesaya.txt", "ubahfilesaya.txt", function (err) {
	if (err) throw err;
	console.log("Nama file diubah!");
});