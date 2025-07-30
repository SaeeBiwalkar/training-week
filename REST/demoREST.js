/* 
//Case 2 : Displaying the static pages which donot require any database or dynamic content
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Welcome to the home page!");
    } else if (req.url === "/about") {
        res.end("Welcome to the about page!");
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end("Page not found!");
    }
});

//here re.end shows that communication stops there
//res.end always takes a string or buffer as an argument

server.listen(3000, () => {
    console.log("Server is running at http://localhost:3000 or /about");
});

*/

/*
//Case 3: Displaying content from a file
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile("hello.txt", "utf8", (err, data) => {
        if (err) {
            res.writeHead(500);
            res.end("Error reading file");
        }else {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(data);
        }
    });
});

server.listen(3001, () => {
    console.log("Server is running at http://localhost:3001");
});
*/

//Case 4: displaying the data in JSON format using REST API
const http = require('http');

const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },  
    { id: 3, name: 'Alice Johnson' },
    { id: 4, name: 'Bob Brown' }
];

const server = http.createServer((req, res) => {
    if (req.url === '/api/users' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(users));
        //end always takes a string or buffer as an argument so we have to convert the array to a string using JSON.stringify
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

server.listen(3002, () => {
    console.log('Server is running at http://localhost:3002/api/users');
});