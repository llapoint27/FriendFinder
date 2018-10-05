var path = require("path");

//import the list of friend entries
var friendData = require("../app/data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });

    //posting a new friend entry
    app.post("/api/friends", function (req, res) {
        console.log(req.body);

        //capture the user input objext
        var userInput = req.body;

        var userResponse = userInput.scores;

        //determining the best friend match
        var matchName = " ";
        var matchPhoto = " ";
        totalDifference = 500;
        //picked high number to work with

        //run through all existing friendData
        for (var i = 0; i < friendData.length; i++) {

            //calculating the differences for each question
            var diff = 0;
            for (var j = 0; j <userInput.scores[j]; j++) {
            diff += Math.abs(friendData[i].scores[j] - userResponse[j]);
            }

            if (diff < totalDifference) {
                diff = totalDifference;
                matchName = friendData[i].name;
                matchPhoto = friendData[i].photo;
            }
        }
        //adds new user to /api/friends
        friendData.push(userInput);

        // send back to browser the best friend match
        res.json({
                status: 'OK',
                matchName: matchName, 
                matchPhoto: matchPhoto
                });
    });

}

