<<<<<<< HEAD
var http = require("http"); //load the package
http.createServer(function (request, response) {
response.writeHead(200, {'Content-Type': 'text/plain'});
response.end('Hello World my name is saee\n');
=======
var http = require("http"); //load the package
http.createServer(function (request, response) {
response.writeHead(200, {'Content-Type': 'text/plain'});
response.end('Hello World my name is saee\n');
>>>>>>> 5bfcf05 (Initial Commit)
}).listen(4233);