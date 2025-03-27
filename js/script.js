//recupero elementi DOM
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
    //valori recuperati dal form
    const km = document.getElementById("km").value;
    const age = document.getElementById("seleziona-etá").value;
    const nomeUtente = nomeInput.value;

    //definisco la costante moltiplicativa
    let ticketPrice = km * 0.21;

    //definisco i prezzi in base all'età
    if (age < 18) {
        ticketPrice *= 0.8;
    }

    else if (age >= 65) {
        ticketPrice *= 0.6
    }
   
    //permetto di visualizzzare il testo javascript a schermo
    ticketPriceElement.innerHTML =`<strong>${ticketPrice.toFixed(2)}</strong>` ;
    nomeUtenteElement.innerText = nomeUtente;
    kmPercorsiElement.innerText = km;

});
    //creo la funzione annulla per cancellare tutti i valori inseriti.
    document.getElementById("annulla").addEventListener( "click", function () {

    document.getElementById("km").value =" " ;
    document.getElementById("seleziona-etá").value =" " ;
    document.getElementById("nome-cognome-output").value=" ";
    


});







