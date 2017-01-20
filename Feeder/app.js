var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';
var path1 = require('path');

router.use(function (req, res, next) {
    console.log("/" + req.method);
    next();
});


router.get("/", function (req, res) {
    res.sendFile(path + "index.html");
});

router.get("/about", function (req, res) {
    res.sendFile(path + "about.html");
});

router.get("/contact", function (req, res) {
    res.sendFile(path + "contact.html");
});


app.use("/", router);

// first parameter is the mount point, second is the location in the file system


//app.use("*", function (req, res) {
//    res.sendFile(path + "404.html");
//});



app.use('/', express.static(path1.join(__dirname + '/public')));



//router.get('/static', function (req, res) {
//      res.sendFile(path.join(__dirname, 'public', 'SP.js'));
//  });

app.listen(3000, function () {
    console.log("Live at Port 3000");
});