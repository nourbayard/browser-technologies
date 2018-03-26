// Credits aan: Alex van der Wal, Sam Guliker en Servin Nissen

// Alle modules die nodig zijn voor het project
var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var ejs = require('ejs')
var port = 3029
var request = require('request')

// Geeft aan dat de view engine ESJ templates moet renderen als default
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
//render css files
// app.use(express.static("public"));


app.get('/', function (req, res) {
  console.log('skuuuurt')
  res.render("index", { point: point});
})

// Dit zijn een paar dingen die al in het lijstje/array klaar zitten (point = elk puntje in de lijst/bullet point)
var point = ["Brood (gesneden)", "Kaas (jong belegen)", "Ketchup"];

//Placeholder voor verwijderde lijst onderdelen
var complete = ["is klaaaar nu"];

// post route voor toegevoegde lijst dingen
app.post('/toevoegen', function (req, res) {
    var newPoint = req.body.newpoint;
// voegt het nieuwe lijst ding toe aan de array door de post
    point.push(newPoint);
    res.redirect("/");
});

app.post("/verwijder", function(req, res) {
    var deletePoint = req.body.checkbox;
    if (typeof deletePoint === "string") {
        complete.push(deletePoint);
        // kijkt of het bestaande bullenpoint al bestaat in de lijst wanneer gechecked, daarna verwijderd die m
        point.splice(point.indexOf(deletePoint), 1);
    } else if (typeof deletePoint === "object") {
        for (var i = 0; i < deletePoint.length; i++) {
            complete.push(deletePoint[i]);
            point.splice(point.indexOf(deletePoint[i]), 1);
        }
    }
    res.redirect("/");
});

// render de ejs & laat de toegevoegde bulletpoint zien
app.get("/", function(req, res) {
    res.render("index", { point: point });
});

// app luistert naar de port
app.listen(port, function() {
  console.log("aye aye de webserver gestart op http://localhost:" + port);
})
