var os = require('os');


console.log('Welcome to Nodejs');

var cpus = os.cpus().length;

var freeMem = os.freemem();

var uptime = os.uptime();
console.log(cpus, freeMem, uptime);

var { readFile, readFileSync, unlink, fstat} = require('fs');

var sync = readFileSync('./app.js');

readFile('./app.js',(error, content) => {
    console.log(error, content.toString());
})