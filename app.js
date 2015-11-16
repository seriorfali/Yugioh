var express       = require('express')
var app           = express()
var logger        = require('morgan')
var bodyParser    = require ('body-parser')
var mongoose      = require ('mongoose')

// App configurations.
app.set("view engine", "ejs");

// Middleware.
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(ejsLayouts);
app.use("/assets", express.static(__dirname + "/assets"));
app.use(function(req, res, next) {
  console.log("A request has been made.");
  next();
});

app.get('/' function(req,res){
  res.send('This is our Cafe list');
})

var cafeRoutes = require('./routes/cafeRoutes.js')
app.use('/cafes', cafeRoutes)

app.listen(3000, function() {
  console.log('Server is now running on port 3000!');
});
