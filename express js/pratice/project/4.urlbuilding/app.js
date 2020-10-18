const express = require('express')
const app = express()

// app.use(express.static('public'))

// app.get('/', function(req,res){
//     res.sendFile('base.html')
// })

app.get('/:id', function(req,res){
    res.send("id "+req.params.id)
})

app.listen(8000)