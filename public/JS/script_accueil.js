let slide = document.getElementById('slide');
let x = 0 - 700;
let droite = true;
let stop = false;
let nom_filtre = document.getElementById('nom_filtre');
let filtre_categorie = document.getElementById('filtre_categorie');
let categorie_fermer = true;
slide.style.left = x + "px";


if (!stop) {
window.setInterval(function () {
if (x === (0 - 1400)) {
droite = false;
}
  if (x > (0 - 1400) && droite) {
    x -= 700;
  slide.style.left = x + "px";
  }
  if (x === 0) {
  droite = true;
  }
  if (x < 0 && !droite) {
    x += 700;
  slide.style.left = x + "px";
  }
}, 5000)
}


// **********************************Bouton***********************************S
function droite_fleche() {
if (x > (0 - 1400)) {
  x -= 700;
slide.style.left = x + "px";
stop = true;
window.setTimeout(stop, 3000)
function stop() {
  stop = false;
}
}
}

function gauche() {
if (x < 0) {
  x += 700;
slide.style.left = x + "px";
window.setTimeout(stop, 3000)
function stop() {
  stop = false;
}
}
}

// Catégorie

function RPG() {
nom_filtre.innerHTML = "RPG";
filtre_categorie.style.display = "none";
categorie_fermer = true;
}
function Simulation() {
nom_filtre.innerHTML = "Simulation";
filtre_categorie.style.display = "none";
categorie_fermer = true;
}
function Combat() {
nom_filtre.innerHTML = "Combat";
filtre_categorie.style.display = "none";
categorie_fermer = true;
}
function Plateforme() {
nom_filtre.innerHTML = "Plateforme";
filtre_categorie.style.display = "none";
categorie_fermer = true;
}
function Gestion() {
nom_filtre.innerHTML = "Gestion";
filtre_categorie.style.display = "none";
categorie_fermer = true;
}

function cache() {
if (categorie_fermer) {
  filtre_categorie.style.display = "flex";
  categorie_fermer = false;
}else if (!categorie_fermer) {
  filtre_categorie.style.display = "none";
  categorie_fermer = true;
}
}
