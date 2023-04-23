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

// creo prompt per memorizzare i dati inseriti dall'utente(scelta pari/dispari)
let sceltaUtente = prompt("Ciao, scegli se pari o dispari")
sceltaUtente = sceltaUtente.toLowerCase();
let pariDispariUtente;

// condizione per assicurarmi che l'utente inserisca i dati in maniera corretta
if (sceltaUtente == "pari") {
    pariDispariUtente = true
} else if(sceltaUtente == "dispari") {
    pariDispariUtente = false
} else {
    pariDispariUtente = null
}

while (pariDispariUtente == null ) {
    alert("Non hai scelto nè pari nè dispari, ritenta!")
    sceltaUtente = prompt("Ciao, scegli se pari o dispari")
    sceltaUtente = sceltaUtente.toLowerCase();
    if (sceltaUtente == "pari") {
        pariDispariUtente = true
    } else if(sceltaUtente == "dispari") {
        pariDispariUtente = false
    } else {
        pariDispariUtente = null
    }
}
console.log("scelta utente",sceltaUtente)

console.log("L'utente ha scelto ", pariDispariUtente)        

// creo prompt per memorizzare il num scelto e uso parseInt per trasformare la stringa in numero
let numeroUtente = parseInt(prompt("Scegli un numero da 1 a 5"));
console.log("ok, hai inserito il seguente num", numeroUtente)
// uso isNan nel caso l'utente non abbia inserito un numero
while (isNaN(numeroUtente) || (numeroUtente < 1) || (numeroUtente > 5)) {
    alert("Quello che hai inserito non è un numero, o non è un numero compreso tra 1 e 5!")
    numeroUtente = parseInt(prompt("Scegli un numero da 1 a 5"));        
}
console.log("ora sì, hai inserito un numero, che è ", numeroUtente)



// creo numero randomico invoncando la funzione apposita
let numeroComputer = getRandomNumber();
console.log("Il num che ha scelto il computer è ", numeroComputer)
alert("Il num che ha scelto il computer è "+numeroComputer)


let sommaPlayers = (numeroUtente + numeroComputer)
console.log("somma players",sommaPlayers)
alert("La somma dei due numeri è "+sommaPlayers)

// creo funzione per numero random approssimato e compreso tra 1 e 5
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
console.log("il risultato finale è ", risultatoFinale) 

// creo condizione per informare il player del risultato
if (risultatoFinale == pariDispariUtente) {
    alert("Complimenti, hai vinto!")
} else {
    alert("Mi dispiace, hai perso!")
}




    
        

    
    
    



