var fs = require("fs");

// buat file dengan nama filesaya.txt
fs.appendFile("filesaya.txt",'Hello dari Rupadana', function (err) {
	if (err) throw err;
	console.log('Tersimpan!');
});