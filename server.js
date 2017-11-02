// Importing all dependencies
var express = require("express");
var bodyParser = require("body-parser");
var expressHandleBars = require("express-handlebars");
var routes = require("./controllers/burgers_controller.js");

// Declaring port
var port = process.env.PORT || 8080;

// Initializing express app
var app = express();

var db = require("./models");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Setting handlebars as templating engine 
app.engine("handlebars", expressHandleBars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// app.enable('view cache');

// Setting the root path
app.use("/", routes);

// Listening on declared port
db.sequelize.sync({ force: true }).then(function() {
  app.listen(port, function() {
    console.log("App listening on PORT " + port);
  });
});
 