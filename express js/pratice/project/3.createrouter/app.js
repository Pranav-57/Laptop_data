var express = require('express')
var app = express()
const course = require('./course')

app.use('/course', course)

app.get('/', function(req,res){
    res.send('Hello Everyone')
})

app.listen(8000)