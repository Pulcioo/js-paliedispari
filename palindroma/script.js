console.log("JS OK")

// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// Chiedo all'utente di inserire una parola
let parolaUtente = prompt('Inserisci una parola')
console.log('La tua parola:', parolaUtente)

// Inverto la parola inserita dall'utente
parolaInvertita = parolaUtente.split('').reverse().join('')
console.log('La tua parola invertita:', parolaInvertita);

// Vedo se la parola è palindroma
const parolaPalindroma = palindromaONo(parolaUtente)

if (parolaPalindroma === 'palindroma') {
    console.log('La parola è palindroma')
} else {
    console.log('La parola non è palindroma')
}

// creo una funzione
function palindromaONo(parola) {
    if (parola === parolaInvertita) {
        return 'palindroma';
    } else {
        return 'non';
    }
}

