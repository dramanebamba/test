var express = require('express');
var session = require('cookie-session'); // Charge le middleware de sessions
var bodyParser = require('body-parser'); // Charge le middleware de gestion des paramètres
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var app = express();

//Définition du dossier public
app.use(express.static('public'));


/* On affiche la todolist et le formulaire */
app.get('/', function(req, res) {
    res.render('index.ejs');
})

app.get('/responsive', function(req, res) {
    res.render('responsive.ejs');
})

app.get('/backgrounds', function(req, res) {
    res.render('backgrounds.ejs');
})

/* On redirige vers la todolist si la page demandée n'est pas trouvée */
app.use(function(req, res, next){
    res.redirect('/');
})

.listen(8080);
console.log("http://localhost:8080");
