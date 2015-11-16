var
  express = require('express'),
  app     = express()

// App configurations.
app.set("view engine", "ejs");

// Middleware.
app.use(ejsLayouts);
app.use("/assets", express.static(__dirname + "/assets"));
app.use(function(req, res, next) {
  console.log("A request has been made.");
});

// To start server on port 3000 of localhost.
app.listen(3000, function() {
  console.log("Server running on 3000.");
});
