// ************Variables**********

let parola;
parola = prompt("Inserisci una parola")
let parolaReverse= ""
let risultato = ispalindromo(parola);
// console.log(risultato);

// **********Condition********

if (risultato === true) {
    alert("La parola che hai inserito è un palindromo")
} else {
    alert("Mi dispiace, la parola che hai inserito non è un palindromo")
}

// ************Function**************

function ispalindromo() {
    for (let c = parola.length -1; c >= 0; c--) {
        parolaReverse += parola[c]             
    }
    // console.log(parolaReverse)
    if (parola == parolaReverse) {
        return true
        // risultato = alert("La parola è un palindromo")
    }
    return false    
}


