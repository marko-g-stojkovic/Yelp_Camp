var mongoose    = require("mongoose"),
    Campground  = require("./models/campground"),
    Comment     = require("./models/comment");

var data = [
    // {
    //     name: "Cloud's Rest",
    //     image: "https://images.unsplash.com/photo-1486082570281-d942af5c39b7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2d06322d7df8c19c1e648c8c3a101d2d&auto=format&fit=crop&w=700&q=60",
    //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
    // },
    // {
    //     name: "Rocky Trees",
    //     image: "https://images.unsplash.com/photo-1432817495152-77aa949fb1e2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a6f210acc36ab5742aa863e7a2240a2a&auto=format&fit=crop&w=700&q=60",
    //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // },
    // {
    //     name: "Mountain View",
    //     image: "https://images.unsplash.com/photo-1484910292437-025e5d13ce87?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b26342fc7cb1addb776c8c86a202afa1&auto=format&fit=crop&w=700&q=60",
    //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
    // }
    ];

function seedDB(){
    //Remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
        //add a few campgrounds
    data.forEach(function(seed){
        Campground.create(seed, function(err, campground){
            if(err){
                console.log(err);
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
                            campground.comments.push(comment);
                            campground.save();
                            console.log("Created new comment");
                        }
                    });
                }
            });
        });
    });
    //add a few comments
}

module.exports = seedDB;