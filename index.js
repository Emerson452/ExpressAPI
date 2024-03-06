//imports
var express = require('express');

//initialisation du server 
var port = process.env.PORT || 5000
var server = express();

//configurer les routes 
server.get('/', function (req, res) {
    res.json({message: "Bienvenue sur notre API"})
})

server.get('/user', function (req, res) {
    res.json({ message: "Ton token a été vérifié" });
});

//launch server
server.listen(port, () => {
    console.log("Server is running !");
});
