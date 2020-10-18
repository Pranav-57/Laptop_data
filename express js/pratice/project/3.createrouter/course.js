const express = require('express')
const router = express.Router()

router.get('/', function(req,res){
    var out = `<h1>Hello</h1>` 
    out += `<h1>Hiii</h1>` 
    res.send(out) 
})

router.get('/django', function(req,res){
    var out = `<h1>Hello</h1>` 
    out += `<h1>Django</h1>` 
    res.send(out) 
})

module.exports = router