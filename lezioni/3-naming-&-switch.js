/*
Esercizi:

- Chiediamo al nostro user un numero da uno a 10 tramite prompt e solo se maggiore di 7 esclamare in console che ha vinto!
    - tips:
        prompt('Dammi un numero da uno a dieci!'); // occhio che il prompt torna una stringa!!
        if([...] > 7 ){

        }
*/

const ciaoMondo = "Ciao Mondo!";
const zio = 'Mio zio viene dalla città di l\'Aquila';

const ciaoMondoDiZio = `${ciaoMondo} 
 ${zio}`;

const CIAO_MONDO = ciaoMondo.toUpperCase();
console.log(CIAO_MONDO);

// const inputUtente = prompt('A cosa stai pensando?');
// console.log(inputUtente); // CORNETTO

// const inputUtenteLowerCase = inputUtente.toLowerCase();
// console.log(inputUtenteLowerCase); // cornetto

// const input = prompt('Per favore, dammi un numero da uno a dieci'); // prompt torna o null oppure stringa
const input = 3;
console.log('input',input);

const inputToNumber = Number(input); // "ciao"/undefined -> NaN, false/null -> 0, true -> 1
console.log('inputToNumber', inputToNumber)

// Operatore logico "&&" torna "true" solo se tutte le condizioni sono true, se la prima condizione è false le altre non vengono neanche controllate
// Operatore logico "||" torna "true" se ALMENO una condizione è true, legge fino a quando ne trova una true.

// if(Number.isInteger(inputToNumber) && inputToNumber <= 10 && inputToNumber > 0){
//     if(inputToNumber > 7){
//         alert('hai vinto!');
//     } else {
//         alert('questa volta ho vinto io, ritenta!'); 
//         // window.location.reload(); // fare il reload della paginaù
//         // window.location = 'https://google.com';
//     }
// }else{
//     console.log('stai barando!');
// }

const MIN_NUMBER = 0;
const MAX_NUMBER = 10;

const isNotANumber =  Number.isNaN(inputToNumber);
const isOutOfRange = inputToNumber <= MIN_NUMBER || inputToNumber > MAX_NUMBER;

if(isNotANumber || isOutOfRange){
    console.log('stai barando!');
}else{
    console.log('siamo giocando');

    if(inputToNumber > 7){
        console.log('hai vinto!')
    }else{
        console.log('hai perso!')
    }
}

// così provo a controllare che la prima sia vera e che almeno una delle due successive sia vera
if(true && (false || true )){

}

// Nomenclature e variabili
Number.MAX_SAFE_INTEGER
const FIXED_CONSTANT_OR_MAGIC_NUMBER = 3.14;
const variable_snake_case = ''; // non è consigliato
'kebab-case' // non si può usare per le variabili, usiamolo per i file invece
const _v4riaBl3 = 0;

const camelCase = ''; // sì, per tutte le variables
const PascalCase = ''; // Dromedary Case solo per le Classi

// booleani dovrebbero iniziare con verbi che rispondono a domande
const isUserLoggedIn = true;
const canEditArticle = false;
const shouldEatAPizza = true;

const bigNumber = 9_999_999; // con i numeri possiamo separare le cifre usando "_", questo viene ignorato da JS

if(canEditArticle){
    console.log('articolo modificato!')
}


// If/Else/Else if + Switch

let firstName = 'luca';
const nameLength = firstName.length;

// Sia almeno 3 caratteri, ha la prima iniziale maiuscola

const firstLetter = firstName[0]; // "l" firstName.at(0) -> copia per valore avviene per tutti i primitivi string/number/boolean/undefined

const OK_CHARS = 'ABCDEFGHILMNOPQRSTUVZW';
const isFirstLetterUppercase = OK_CHARS.includes(firstLetter);

const isFirstLetterUppercase2 = firstLetter == firstLetter.toUpperCase(); // .toUpperCase() mi crea una nuova stringa con il valore maiuscolo

// possiamo usare il "!" prima di un valore per poter prendere il valore boolean opposto -> !true == false |||| !"ciao" == false
const isNotFirstLetterUppercase = !isFirstLetterUppercase;

console.clear();
console.log('firstName', firstName);
console.log('firstLetter', firstLetter);
console.log('firstLetter uppercase', firstLetter.toUpperCase());
console.log('firstLetter', firstLetter);
console.log('isFirstLetterUppercase', isFirstLetterUppercase);
console.log('isFirstLetterUppercase2', isFirstLetterUppercase2, `${firstLetter} == ${firstLetter.toUpperCase()}`);

if(nameLength < 3){
    console.log('Inserire un nome di almeno 3 caratteri');
}else if(isNotFirstLetterUppercase){
    console.log('La prima lettere deve essere una maiuscola!');
} else{
    console.log(`Ciao ${firstName}!`);
}

// Switch

if(true) console.clear();

const test = 'Nicola';

switch(test){ 
    case 'Nicola': {
        console.log('Anche Nicola chiede:');
        // se non metto un break viene eseguito anche il successivo
    }
    case 'Samuele': {
        console.log('domanda first letter');
        break;
     }   
    case 'Lorenzo':{
        console.log('domanda length');
        // break;
    }
    default: {
        console.log('nessuna domanda');
    }
}

// if(test === 'Samuele' || test === 'Nicola'){
//     console.log('...');
// }else if(test === 'Lorenzo'){
//     console.log('...');
// } else{
//     console.log('....');
// }
