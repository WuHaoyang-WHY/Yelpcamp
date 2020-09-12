var express = require("express");
var app = express();
var bodyParser = require("body-parser");
port = 3000;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));

var campgrounds = [
    {name: 'Haoyang', image:"https://placekitten.com/g/400/200"},
    {name: 'Haoyang', image:"https://placekitten.com/g/300/200"},
    {name: 'Haoyang', image:"https://placekitten.com/g/500/200"},
    {name: 'Haoyang', image:"https://placekitten.com/g/200/200"},
    {name: 'Haoyang', image:"https://placekitten.com/g/400/300"},
    {name: 'Haoyang', image:"https://placekitten.com/g/400/200"},
    {name: 'Haoyang', image:"https://placekitten.com/g/400/200"},
    {name: 'Haoyang', image:"https://placekitten.com/g/400/200"},
    {name: 'user2', image:"https://placekitten.com/g/400/200"}
];

app.get("/", function (req, res) {
    res.render("landing");
    
});

app.get("/campgrounds", function (req, res) {

    res.render('campgrounds',{campgrounds:campgrounds});
});

app.post("/campgrounds", function (req, res) {
    var name = req.body.name;
    var image = req.body.image;
    var newcampground = {name: name, image:image};
    campgrounds.push(newcampground);

    res.redirect("/campgrounds");
});


app.get("/campgrounds/new", function (req, res) {
    res.render("new.ejs");
});




app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});