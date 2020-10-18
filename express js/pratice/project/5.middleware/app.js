const express = require('express')
const app = express()

function middle(req,res,next){
    // res.send('middle')
    console.log('middle');
    next()
}

app.use(middle)

app.get('/',function(req,res){
    res.send('hello')
}).listen(8000)