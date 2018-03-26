// Credits aan: Alex van der Wal, Sam Guliker en Servin Nissen

// Alle modules die nodig zijn voor het project
var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var ejs = require('ejs')
var port = 3029
var request = require('request')

// Geeft aan dat de view engine ESJ templates moet renderen als default
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  console.log('skuuuurt')
  res.render('index')
})


// app luistert naar de port
app.listen(port, function() {
  console.log("aye aye de webserver gestart op http://localhost:" + port);
})
