let express = require('express');
let app = express();


app.use(express.static('public'));

app.get('/', function (req, res) {
  res.setHeader('Content-type', 'text/html');
  res.render('accueil.ejs', {p1 : "active", p2 : "ppp", p3 : "ppp", css : '/CSS/accueil.css'});
})
.get('/equipe/:nom', function (req, res) {
  res.setHeader('Content-type', 'text/html');
  res.render('equipe.ejs', {nom_eq : req.params.nom, p1 : "ppp", p2 : "ppp", p3 : "ppp", css : '/CSS/equipe.css'});
})
.get('/event', function (req, res) {
  res.setHeader('Content-type', 'text/html');
  res.render('event.ejs', {p1 : "ppp", p2 : "active", p3 : "ppp", css : '/CSS/event.css'});
})

.get('/forum', function (req, res) {
  res.setHeader('Content-type', 'text/html');
  res.render('forum.ejs', {p1 : "ppp", p2 :"ppp", p3 : "active", css : '/CSS/forum.css'});
});






app.use(function(req, res, next){
res.setHeader('Content-Type', 'text/html');
res.status(404).send('**ET BIM UN 404 DANS TA GUEUL !!**');
})
.listen(3010);
