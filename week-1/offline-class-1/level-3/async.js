const fs = require('fs');
//filesysytem module

fs.readFile("a.txt", 'utf8', function(err, data){
    console.log(data);
})

console.log("Hello World");
//async code