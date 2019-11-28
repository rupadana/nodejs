var fs = require('fs');

fs.open('filebarusaya.txt', 'w+', function (err, file) {
	if (err) throw err;

	// konten yang akan kita tulis
	let konten = "Halo saya rupadana";

	// tulis konten ke file tersebut
	fs.writeFile(file, konten, (err) => {
		if (err) throw err;
		console.log("Saved!")
	});

	// baca file
	fs.readFile(file, (err, data) => {
        if (err) throw err;
        console.log(data.toString('utf8'));
    });
});