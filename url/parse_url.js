var url = require('url');
var adr = 'http://localhost/cari?nama=rupadana';
var q = url.parse(adr,true);

// hasil parse URL
console.log("protocol: " + q.protocol);
console.log("hostname: " + q.hostname);
console.log("pathname: " + q.pathname);
console.log("params: " + q.search);

var qdata = q.query; // ambil query string sebagai objek 
console.log(qdata);