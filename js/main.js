// ***PALIDROMA***

// ************Variables**********
// let parola;
// parola = prompt("Inserisci una parola")
// let parolaReverse = ""
// // ****provo a passare parola come argomento****
// let risultato = ispalindromo(parola);
// console.log(risultato)
// // console.log(risultato);

// // **********Condition********

// if (risultato === true) {
//     alert("La parola che hai inserito è un palindromo")
// } else {
//     alert("Mi dispiace, la parola che hai inserito non è un palindromo")
// }

// // ************Function**************

// function ispalindromo(word) {
//     for (let c = word.length - 1; c >= 0; c--) {
//         console.log(c)
//         parolaReverse += parola[c]
//     }
//     // console.log(parolaReverse)
//     if (parola == parolaReverse) {
//         return true
//         // risultato = alert("La parola è un palindromo")
//     }
//     return false
// }


// ***Pari e Dispari***


// creo prompt per memorizzare i dati inseriti dall'utente
let sceltaUtente = prompt("Ciao, scegli se pari o dispari")
console.log(sceltaUtente)
// uso parseInt per trasformare la stringa in numero
let numeroUtente = parseInt(prompt("Scegli un numero da 1 a 5"));
console.log(numeroUtente)
// uso isNan nel caso l'utente non abbia inserito un numero
if (isNaN(numeroUtente)) {
    alert("Quello che hai inserito, non è un numero!")
}



let numeroComputer = getRandomNumber();
console.log(numeroComputer)


let sommaPlayers = (numeroUtente + numeroComputer)
console.log("somma players",sommaPlayers)


// creo funzione per numero random
function getRandomNumber() {   

    let numero = Math.floor((Math.random() * 5) + 1);
    // console.log(numero)
    return numero;
}

// creo funzione per stabilire se la somma dei due numeri è pari e dispari
function pariDispari(sommaNumeri) {
    if (sommaNumeri % 2 == 0) {
        return true
    } 
    return false
}

let risultatoFinale = pariDispari(sommaPlayers)
console.log("il risultato finale è ",risultatoFinale)    
    
    
    



