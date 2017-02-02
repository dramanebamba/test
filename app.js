var express = require('express');
var https = require('https');
var fs = require('fs');
var session = require('cookie-session'); // Charge le middleware de sessions
var bodyParser = require('body-parser'); // Charge le middleware de gestion des paramètres
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var app = express();

//Définition du dossier public
app.use(express.static('public'));

https.createServer({
        key: fs.readFileSync("/etc/letsencrypt/archive/dramane.fr/privkey1.pem"),
        cert: fs.readFileSync("/etc/letsencrypt/archive/dramane.fr/fullchain1.pem"),
        ca: fs.readFileSync("/etc/letsencrypt/archive/dramane.fr/chain1.pem")
}, app).listen(443);

/* On affiche la todolist et le formulaire */
app.get('/', function(req, res) {
    res.render('pages/index.ejs');
})

app.get('/responsive', function(req, res) {
    res.render('pages/responsive.ejs');
})

app.get('/backgrounds', function(req, res) {
    res.render('pages/backgrounds.ejs');
})

/* On redirige vers la todolist si la page demandée n'est pas trouvée */
app.use(function(req, res, next){
    res.redirect('/');
})

.listen(3000);
console.log("Serveur à l'écoute");
