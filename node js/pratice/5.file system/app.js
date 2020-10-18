var fs = require('fs')

// if the file id present then it print data and if not the print error.
// fs.readFile('calc.js','utf8',function(err,data){
//     console.log(err)
//     console.log(data)
// })

// if file is present the write into file and not then create and the write into file.
// if data is already present in the file then it remove the data and write the data into that file.
// fs.writeFile('calc.js','console.log("Done")',function(err,data){
//     console.log(err);
//     console.log(data);
// })

// it append the data at last line of data which is already present in the file. 
// fs.appendFile('calc.js','console.log("data through appendFile method")',function(err,data){
//     console.log(err);
//     console.log(data);
// })

// delete the file.
// fs.unlink('calc.js',function(err){
//     console.log(err)
// })

// copy the data of one file to another file.
fs.copyFileSync('calc.js','calc1.js')