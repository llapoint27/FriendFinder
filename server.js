//Dependencies: a series of useful npm packages that will give our server proper functionality 
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

//Tells node we are connecting to the "express" server
const app = express();

//Defining 3000 port
const PORT = process.env.PORT || 8080;

//Allows the Express app to handle parsing the data within a body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'))

//Creates the routes
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
app.listen(PORT, function() {
  console.log("FriendFinder App listening on PORT: " + PORT);

});
