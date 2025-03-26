
//Calcolare il prezzo del biglietto




//Sconti etá
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
//Human price



//Risultato


