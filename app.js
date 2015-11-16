var express       = require('express')
var app           = express()
var logger        = require('morgan')
var bodyParser    = require ('body-parser')
var mongoose      = require ('mongoose')

// Mongoose connection goes here

app.use(logger('dev'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.get('/' function(req,res){
  res.send('This is our Cafe list')
})

var cafeRoutes = require('./routes/cafeRoutes.js')
app.use('/cafes', cafeRoutes)

app.listen(3000)
console.log('Server is now running on port 3000!')
