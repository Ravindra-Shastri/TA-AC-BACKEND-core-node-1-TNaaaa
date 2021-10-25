//Q 1
var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(req, res){
console.log(req, res);
}

server.listen(5000);

//Q 2

var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(req, res){
console.log('My first server in NodeJS');
}

server.listen(5100);

//Q 3
var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(req, res){
console.log(req.headers);
res.end(req.headers['user-agent']);
}

server.listen(5555);

// Q 4

var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(req, res){
console.log(req.method, req.url);
res.end(req.method + req.url);
}

server.listen(5566);

 // Q 5

 var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(req, res){
res.end(JSON.stringify(req.headers));
}

server.listen(7000, () => {
  console.log('server listening on port 7000')  
});

// Q 6 

var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(req, res){
    res.statusCode = 202;
res.end(JSON.stringify(req.headers));
}

server.listen(3333, () => {
    console.log('server listening on port 3333')    
});

// Q 7 

var http = require('http');

var PORT = 8000;

var server = http.createServer(handleRequest);

function handleRequest(req, res){
 res.setHeader('content-type', 'text/html')
res.end(<h3>Welcome to altcampus</h3>);
}

server.listen(PORT, () => {
    console.log('server listening on port' + PORT)    
});

