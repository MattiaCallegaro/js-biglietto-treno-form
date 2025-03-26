const form = document.querySelector("form");
const kmInput = document.getElementById("km");
const ageInput = document.getElementById("seleziona-etá");
const pulsanteGenera = document.getElementById("genera");
const pulsanteAnnulla = document.getElementById("annulla");
const kmPercorsiElement = document.getElementById("km-percorsi");
const ticketPriceElement= document.getElementById("prezzo-biglietto");
const nomeUtenteElement = document.getElementById("nome-cognome");
const nomeInput = document.getElementById("nome-cognome-output");
document.getElementById("genera").addEventListener( "click", function () {
    
    const km = document.getElementById("km").value;
    const age = document.getElementById("seleziona-etá").value;
    const nomeUtente = nomeInput.value;

    let ticketPrice = km * 0.21;

    if (age < 18) {
        ticketPrice *= 0.8;
    }

    else if (age >= 65) {
        ticketPrice *= 0.6
    }

    ticketPrice = ticketPrice.toFixed(2);

    kmPercorsiElement.textContent = km + " km";
    ticketPriceElement.textContent = ticketPrice + " €";
    nomeUtenteElement.textContent = nomeUtente;

    console.log(`Il prezzo del biglietto é : ${ticketPrice} €`)

});

document.getElementById("annulla").addEventListener( "click", function () {
    document.getElementById("km").value =" " ;
    document.getElementById("seleziona-etá").value =" " ;
    document.getElementById("nome-cognome-output").value=" ";


});







