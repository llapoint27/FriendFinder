const path = require("path");

//Import the list of friend entries
const friendData = require("../app/data/friends");

module.exports = function(app){
    app.get("/api/friends", function(req, res){
        res.json(friendData);
        console.log(friendData);
    });
}

// app.post("/api/friends", function(req, res){


// });