
document.getElementById("genera").addEventListener("click", function () {

    const km = document.getElementById("km").value;
    const age = document.getElementById("seleziona-etá").value;

    let ticketPrice = km * 0.21;

    if (age < 18) {
        ticketPrice *= 0.8;
    }

    else if (age >= 65) {
        ticketPrice *= 0.6
    }
    ticketPrice = ticketPrice.toFixed(2);
    console.log(`Il prezzo del biglietto é : ${ticketPrice} €`)

});


const form = document.querySelector("form");
const km = document.getElementById("km");
const age = document.getElementById("seleziona-etá");
const pulsante = document.getElementById("genera");
const kmpercorsi = document.getElementById("km-percorsi");
const prezzobiglietto = document.getElementById("prezzo-biglietto");

form.addEventListener('submit', function(event){
    //evita il refresh pagina
    event.preventDefault();

    kmpercorsi.innerHTML = km.value
    prezzobiglietto.innerHTML = ticketPrice.value
});