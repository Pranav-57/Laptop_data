var http = require('http')

http.createServer(function(req,res){
    // res.write("<h1> Hello World </h1>")
    // res.end()

    // res.end("<h1> Hello World </h1>")

    res.writeHead(200,{'Content-Type':'text/html'})
    res.write("<h1> Hello World </h1>")
    res.end()
}).listen(8000)