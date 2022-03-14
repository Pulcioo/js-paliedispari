console.log("JS OK")

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// L'utente sceglie pari o dispari
const pari = 'pari'
const dispari = 'dispari'

let pariDispari = prompt('Scegli pari o dispari');
if (pariDispari === pari || pariDispari === dispari) {
    console.log('Hai scelto:', pariDispari)
} else {
    pariDispari = prompt('Devi scrivere pari o dispari!')
    console.log('Hai scelto:', pariDispari)
}

// L'utente sceglie un numero da 1 a 5
let numeroUtente = parseInt(prompt('Inserisci un numero da 1 a 5'));
if (numeroUtente >= 1 && numeroUtente <= 5) {
    console.log('Il tuo numero è:', numeroUtente)
} else {
    numeroUtente = parseInt(prompt('Devi inserire un numero da 1 a 5!'))
    console.log('Il tuo numero è:', numeroUtente)
}

// genero un numero random grazie alla funzione apposita scritta sotto
const numeroRandom = generaNumeroRandom(1, 5);
console.log('Il numero random generato è:', numeroRandom);

// sommo i due numeri (numeroUtente + numeroRandom)
const sommaUtenteERandom = numeroUtente + numeroRandom
console.log('La somma del tuo numero e del numero random è:', sommaUtenteERandom)

// dichiaro chi ha vinto
if (sommaPariODispari(sommaUtenteERandom) === pariDispari) {
    console.log('Congratulazioni hai vinto!')
} else {
    console.log('Hai perso!')
}



/////////////// FUNZIONI ///////////////
// creo funzione per generare un numero random da 1 a 5
function generaNumeroRandom(min, max) {
    const range = max - min + 1;
    const risultatoRandom = Math.floor(Math.random() * range) + min;
    return risultatoRandom;

}

// creo funzione per stabilire se la somma dei due numeri è pari o dispari
function sommaPariODispari(numero) {
    if (numero % 2 !== 0) {
        return 'dispari'
    } else {
        return 'pari';
    }
}
