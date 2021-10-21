var area = require('./area');

var circle_area = area.circle(10);

console.log(circle_area);

var buffer1 = Buffer.alloc(12);
var buffer2 = Buffer.allocUnsafe(12);

buffer1.write("hello World");
console.log(buffer1.toString());

