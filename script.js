
const prix_siege = 80;

const formulaire1 = document.getElementById("formulaire1");
  const namepassager = document.getElementById("nomdepassager");
const seatSelect = document.getElementById("seatSelect");

let reservations = [];


function remplirliste() {
    seatSelect.innerHTML = '<option value="">-- Choisir un siège --</option>';

for (let i = 1; i <= 20; i++) {
let occup = false;

for (let j = 0; j < reservations.length; j++) {
if (reservations[j].siege === i) {
occup = true;
}}

if (occup === false) {seatSelect.innerHTML += '<option value="' + i + '">' + i + "</option>";
}
}}


function afficher() {



for (let j = 0; j < reservations.length; j++) {
const div = document.querySelector('[data-seat="' + reservations[j].siege + '"]');
div.classList.add("occupied");
div.innerHTML = reservations[j].siege + "<small> " + reservations[j].nom + "</small>";
}
const occupes = reservations.length;

document.getElementById("nombreLibres").textContent = 20 - occupes;
document.getElementById("compteurLibres").textContent = 20 - occupes;
document.getElementById("nombreOccupes").textContent = occupes;
document.getElementById("chiffreAffaire").textContent = occupes * prix_siege + " DH";

remplirliste();
}
// Partie reservation
formulaire1.addEventListener("submit", function(event) {
event.preventDefault();

const nomPassager = namepassager.value.trim();
let numero = Number(seatSelect.value);

if (nomPassager === "") {
alert("Veuillez remplir ce champs");
return;
}


for (let i = 0; i < reservations.length; i++) {
if (reservations[i].nom.toLowerCase() === nomPassager.toLowerCase()) {
alert("Ce nom existe déjà.");
return;
}
}



//qjouter//
reservations.push({
siege: numero,
nom: nomPassager
});

afficher();
alert("Réservation réussie !");
formulaire1.reset();
});

afficher();