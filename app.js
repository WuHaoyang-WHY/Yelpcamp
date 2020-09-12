var express = require("express");
var app = express();
port = 3000;

app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("landing");
    
});

app.get("/campgrounds", function (req, res) {
    var campgrounds = [
        {name: 'Haoyang', image:"https://placekitten.com/g/200/300"},
        {name: 'user2', image:""}
    ];

    res.render('campgrounds',{campgrounds:campgrounds});
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});