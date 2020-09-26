const fs = require('fs')  
const file = process.argv[2]  
  
fs.readFile(file, function (err, contents) { 
    let lines = contents.toString().split('\n').length - 1  

    err?
console.log(err) :

  console.log(lines)  
})