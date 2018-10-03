const path = require("path");

//import the list of friend entries
const friendData = require("../app/data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });

    //posting a new friend entry
    app.post("/api/friends", function (req, res) {
        console.log(req.body);

        //capture the user input objext
        const userInput = req.body;

        const userResponse = userInput.scores;

        //determining the best friend match
        const matchName = " ";
        const matchPhoto = " ";
        totalDifference = 1000;

        //run through all existing friends
        for (var i = 0; i < friendData.length; i++) {

            //calculating the differences for each question
            const diff = 0;
            for (var j = 0; j <userInput.scores[j]; j++) {
            diff += Math.abs(friends[i].scores[j] - userResponses[j]);
            }

            if (diff < totalDifference) {
                diff = totalDifference;
                matchName = friends[i].name;
                matchPhoto = friends[i].photo;
            }


        }
        //adds new user to /api/friends
        friendData.push(userInput);

        // send back to browser the best friend match
        res.json({status: 'OK', matchName: matchName, matchPhoto: matchPhoto});

    });












}

