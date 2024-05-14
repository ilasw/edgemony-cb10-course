// box model
// flex-relative-absolute, quando usarli?
// Responsive

// PowerShell or Terminal
// node -v -> 20.0.1

// JVM Java Virtual Machine per altri linguaggi su browser

// JS è un linguaggio *interpretato*

/* 
    Questo è un commento multi-linea in JS 
*/

// https://it.wikipedia.org/wiki/Principio_di_Pareto

// Questo è come si dichiara una variabile in JS
var nome = "Luca";

// di default all'interno dei browser abbiamo un oggetto console
// che permette di interagire con la console di "ispeziono elemento"

// così ne scriviamo uno
console.log("Ciao");
console.log(nome);

// in questo modo cancelliamo i messaggi precedenti
console.clear();

// possiamo mandare un messaggio visivo all'utente tramite un alert
// alert("Ciao mondo!");

// Variables
// sono spazi di memoria, riconoscibili da un nome definito, che contengono un dato;

// questo da errore perché let non può essere letto prima
console.log(totaleCarrello);

// inizializzazione di variabile senza un valore assegnato
// abbiamo quindi un contenitore, etichettato con nome "totaleCarrello" senza alcun valore
var totaleCarrello;

// assegnato un valore
totaleCarrello = 1;

console.log("totaleCarrello");
console.log(totaleCarrello);

// console.log(cartTotal);

// let ha le stesse feature di var, ma non può essere letta prima della definizione
// una variabile con lo stesso nome non può essere creata nello stesso ambiente;
let cartTotal;

cartTotal = 1;

console.log("cartTotal"); // "" quando usiamo gli apici ' " ci riferiamo ad una stringa
console.log(cartTotal);

cartTotal = 4;
console.log(cartTotal);

// Const a differenza di let, non permette di riassegnare il valore della mia variabile
const total = 10;

// total = 0;

console.clear();

console.log(typeof NaN);

console.log(4 - 2);

// Conversione type

const string = "ciao";
const number = Number(string);

console.log("number", number);
console.log(typeof number);

console.log(typeof string);

const stringifiedNumber = String(number);

const boolean = Boolean(string);

console.clear();

// Operatori
// + - * / "**" %
const modulo = 4 % 3;
console.log("risultato modulo", modulo);

let somma = 0;
somma = 1 + somma;
// si può scrivere in forma breve così:
somma += 1;

console.log(somma);

// somma++ che ++somma aggiungono 1 alla variabile;
const nuovaSomma = somma++; // identico a somma += 1;
console.log(nuovaSomma);

console.log(somma++);

// Attenzione perché non funziona con il const
// const sum = 0;
// ++sum;

// --- Stringhe ---
