var mongoose = require("mongoose"),
    Kitties = require("./models/campground"),
    Comment   = require("./models/comment");

var data = [
    {
        name: "Yumi",
        image:"https://placekitten.com/g/400/200",
        description: "Very very cute cat"
    },
    {
        name: "Yami",
        image:"https://placekitten.com/g/400/300",
        description: "Very very cute cat"
    }

]

function seedDB(){
    //Remove all campgrounds
    Kitties.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
        Comment.remove({}, function(err) {
            if(err){
                console.log(err);
            }
            console.log("removed comments!");
            //add a few campgrounds
            data.forEach(function(seed){
                Kitties.create(seed, function(err, kitties){
                    if(err){
                        console.log(err)
                    } else {
                        console.log("added a campground");
                        //create a comment
                        Comment.create(
                            {
                                text: "This place is great, but I wish there was internet",
                                author: "Homer"
                            }, function(err, comment){
                                if(err){
                                    console.log(err);
                                } else {
                                    kitties.comments.push(comment);
                                    kitties.save();
                                    console.log("Created new comment");
                                }
                            });
                    }
                });
            });
        });
    });
    //add a few comments
}

module.exports = seedDB;