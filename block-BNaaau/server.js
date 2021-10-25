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

// Q 8 

var http = require('http');

var PORT = 8000;

var server = http.createServer(handleRequest);

function handleRequest(req, res){
 res.writeHead(201,{'content-type': 'text/html'})
 res.end(<h3>Welcome to altcampus</h3>);
}

server.listen(PORT, () => {
    console.log('server listening on port' + PORT)    
});

// Q 9

var http = require('http');

var PORT = 8888;

var server = http.createServer(handleRequest);

function handleRequest(req, res){
 res.writeHead(201,{'content-type': 'application/json'})
 res.end(JSON.stringify({
     success: true,
     message: 'Welcome to Nodejs'
 }));
}

server.listen(PORT, () => {
    console.log('server listening on port' + PORT)    
});


// Q 10

var http = require('http');

var PORT = 5050;

var server = http.createServer(handleRequest);

function handleRequest(req, res){
    console.log(req.method);
 res.writeHead(201,{'content-type': 'text/html'})
 res.end('<h2>posted for first time </h2>');
}

server.listen(PORT, () => {
    console.log('server listening on port' + PORT)    
});


// Q 11

var http = require('http');

var PORT = 2345;

var server = http.createServer(handleRequest);

function handleRequest(req, res){
    if(req.method === 'GET' && req.url === '/'){
        res.setHeader('content-type', 'text/plain');
        res.end('Ravindra');
    } else if(req.method === 'GET' && req.url === '/about'){
        res.setHeader('content-type', 'text/html');
        res.end('<h2>Ravindra</h2>')
    }else{
      res.statusCode = 404;
      res.end('page Not Found');
    }
}

server.listen(PORT, () => {
    console.log('server listening on port' + PORT)    
});


// Q 12

var http = require('http');

var fs = require('fs');

var PORT = 2345;

var server = http.createServer(handleRequest);

function handleRequest(req, res){
  if(req.method === 'GET' && req.url === './users'){
      res.setHeader('content-Type', 'text/html');
      fs.createReadStream('./form.html').pipe(res);
  } 
  if(req.method === 'POST' && req.url === '/users'){
      res.end('Posted for the second time');
  } 
}

server.listen(PORT, () => {
    console.log('server listening on port' + PORT)    
});


// Q 13 

var http = require('http');

var fs = require('fs');

var url = require('url');

var PORT = 2345;

var server = http.createServer(handleRequest);

function handleRequest(req, res){
   var parsedUrl = url.parse(req.url, true);
   console.log(parsedUrl.pathname, req.url);
   console.log(parsedUrl);
   res.setHeader('content-Type', 'application/json')
   res.end(JSON.stringify(parsedUrl.query))
}

server.listen(PORT, () => {
    console.log('server listening on port' + PORT)    
});