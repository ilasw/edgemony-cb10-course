// Stringhe in JS

// insieme di characters, iterabili;
const prefix = "+39";

// const stringSingle = 'L\'aquila'; // possiamo fare l'escape di un apice usando il backslash prima
// const stringDouble = prefix + "85280740321"; // \n si usa per andare a capo
const stringDouble = prefix.concat("85280740321"); // \n si usa per andare a capo

console.log(prefix);
console.log(stringDouble);

console.log("length prefix", prefix.length);
console.log("length stringDouble", stringDouble.length);

// posso accedere usando "String".at()
console.log("first char:", prefix.at(2)); //
// [] si leggono come "che sta all'indice [x]"
console.log(prefix[0]);
let index = 0;
console.log(prefix[index]);

const text = "lorem ipsum";
const textUppercase = text.toUpperCase();
console.log("text:", text);
console.log("text uppercase:", textUppercase);

// Backtick alt + 9 + 6
// Tastiera dev esempio: https://github.com/linuxiamo/devs-kb-layout-ita
// EcmaScript 6 -> ES6 -> ES2015

// stringhe mulilinea senza uso di \n
const backtick = `
${prefix}ciao ${12}
`; // si chiama template litteral

// Same as: "\n"+prefix+'ciao\n'

console.clear();
console.log("backtick string:", backtick);

const domain = "google";
const extension = "com";

console.log(`https://${domain}.${extension}`);

// Number
console.clear();

const pippo = "ciao";
const isValidNumber = Number.isNaN(pippo);

console.log("numero da controllare", pippo);
console.log("isValidNumber", isValidNumber);

// const userNumber = prompt("Dimmi un numero"); // null | string
// // se vogliamo avere un boolean invece possiamo usare:
// // confirm('Sei sicuro di voler uscire?')
//
// const userInputToNumber = Number(userNumber);
// console.log("input:", userNumber);
// console.log("è un numero valido?", Number.isInteger(userNumber));

/*
(2.23232).toFixed(2)
// -> 2.23
(2.1).toFixed(2)
// -> 2.10
*/

const numberToString = (932313431).toString();
console.log(numberToString[0]);

// Boolean
console.clear();
console.log(Boolean("ciao"));

false; // false
true; // true

// Numeri in boolean
Boolean(21321); // true
Boolean(0); // false sempre ogni 0
Boolean(NaN); // false

// Stringhe
Boolean("fkkfme"); // true
Boolean(""); // false solo la stringa vuota

// Null & Undefined
Boolean(null);
Boolean(undefined);

// A cosa serve null
let user; // undefined se non definito
// utente logga:
user = "Luca";
// utente slogga:
user = null;

console.log(typeof null);

// if

// if keyword riservata
// https://creately.com/diagram/example/hbsuu9311/if-then-flow-chart
// parentesi tonde dove risiede la condizione da analizzare
// parentesi graffe che è il corpo dell'if
// Operatori di comparazione: > >= < <= == != tornano sempre booleano
if (3 > 4) {
  console.log("Conosci la matematica!");
} else {
  console.log("Ti metto 17/30, bocciato!");
}

if (3 > 1) {
  console.log("altra cosa");
}

/*

Esercizi:
- definiamo variabile che contiene una stringa
    - Usiamo i doppi apici e salviamo la stringa: Ciao Mondo!
    - Usiamo i singoli apici e salviamo la stringa: Mio zio viene dalla città di l'Aquila
        - Occhio ad usare un escape per i singoli apici dentro la stringa!!
    - Usiamo il backtick per concatenare le due stringhe precendti dentro una nuova, usiamo anche "l'andata a capo" 

- Creiamo una nuova variabile in cui inseriamo una variabile precedente che modifichiamo portato il tutto in maiuscolo (.toUpperCase()) 
- Definiamo una variabile e salviamo all'interno un dato passato dall'utente tramite prompt()
    - Facciamo un console.log del dato precedento portato a lowercase

- Chiediamo al nostro user un numero da uno a 10 tramite prompt e solo se maggiore di 7 esclamare in console che ha vinto!
    - tips:
        prompt('Dammi un numero da uno a dieci!'); // occhio che il prompt torna una stringa!!
        if([...] > 7 ){

        }

*/
