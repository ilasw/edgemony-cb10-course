/*

- Scriviamo una function potenza che accetta due parametri: base ed esponente. Facciamo tornare alla funzione il numero "base" moltiplicato per se stesso tante volte quante indicate dall'esponente

```js

function potenza(base, esponente){

    for(let i=0; i < espontente, i++){
        // ...
    }

}

// output:
potenza(4,2)    // 16
potenza(5,3)    // 125
potenza(1, 100) // 1

// bonus point prevediamo anche l'elevamento a potenza con esponente 0.


```

- Bonus point (opzionale):
il fattoriale (n!) in matematica è il prodotto di un numero intero per tutti i numeri precedenti positivi (!==0).
esempio: 5! (fattoriale di 5) è 5 * 4 * 3 * 2 * 1 = 120

scriviamo una funzione ricorsia che calcola il fattoriale di un numero passato tramite parametro e lo stampa in console.

```js

function factorial(n){

}

factorial(5) // 120
factorial(4) // 24

```

*/


// puliamo la console:
function clear() {
    console.clear();
}

clear() // fa stessa cosa di console.clear()


// Capitalize:
function capitalize(string) {

    if (typeof string !== 'string') {
        console.warn('Devi passare una stringa valida');
        return '';
    }

    const firstLetter = string.at(0);
    const rest = string.substring(1);

    return `${firstLetter.toUpperCase()}${rest.toLowerCase()}`;
}

// output 
console.log(capitalize('ciao'));     // Ciao
console.log(capitalize('mondo'));    // Mondo
console.log(capitalize('Mondo'));    // Mondo
console.log(capitalize('TEST'));     // Test


clear();

// Numero minore:

function min(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        console.warn('Dovresti passare un numero vero per avere un risultato vero!')
        return NaN;
    }

    // return (x < y) ? x : y;

    if (x < y) {
        return x;
    }

    return y;
}

console.log(min(1, 3));     // 1;
console.log(min(5, -3));    // -3;
console.log(min(100, 20));  // 20;


// Potenza:
// bonus: valutare esponente 0;
clear();

function potenza(base, esponente) {
    checkType(base, 'number');
    // checkType(esponente, 'number');

    if (esponente === 0) return 1;

    let output = 1;

    for (let i = 1; i <= esponente; i++) {
        output = output * base;
    }

    return output;
}

// output:
console.log(potenza(4, 2))  // 16
console.log(potenza(5, 3))  // 125
console.log(potenza(1, 100))  // 1


// possiamo scrivere una function in fondo al file ed usarla su.
// Hoisting: la capacità di JS di portare in cima al file le dichiarazioni di var/functions
function checkType(input, type) {
    if (typeof input === type) {
        return true;
    }

    throw new Error(`${input} deve essere di tipo ${type}`);
    return false;
}


clear()

// Approfondimento functions:

// richiamare funct() darebbe errore, perchè siamo sotto le costrizione di una "const".

// possiamo salvare una "funzione anonima" dentro una variaible
const funct = function () {
    console.log('funzione anonima');
}

console.log(funct); // log della variable che ha dentro una function

funct(); // invocando la function dentro la mia variabile

// Self calling function
(function () {
    const funct = 'ciao';
    console.log('funct', funct);

    console.log('funzione anonima');

})(); // invocando la function dentro la mia variabile

// arguments
(function () {
    clear();

    function log() {
        console.log(arguments) // è un object iterabile;

        const messages = Array.from(arguments); // array from converte un iterabile ad array
        console.log(messages.join(' '));
    }

    console.log('ciao', 'mondo', '!');
    log('ciao', 'mondo', '!');
})();


// per poter leggere tutti i parametri di una function posso usare
// - "arguments" che mi torna un iterable
// - metto nei parametri "(...MiaVaribile)" e MiaVariabile diventa un array con tutti i parametri passati
// "..." ha come nome quello di "rest operator"
function sum(...numbers) {
    console.log(numbers);
    // const numbers = Array.from(arguments);
    let output = 0;

    for(let number of numbers){
        output += number;
    }

    return output;
}

console.log(sum())
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8));


(function(){

    clear();

    // Function anonime

    const classic = function(){
        console.log(this);
    }

    console.log(classic());

    // ES6 >=
    // Arrow functions

    // sono sembre anonime, per cui omettiamo il nome
    // la keyword "function" non serve, ma si capisce che è una func perché abbiamo "=>"
    // viene fatto un return di quello che sta dopo la "freccia"
    // non abbiamo arguments;
    const arrow = (a, b) => (a + b);
    
    // function classicSum (a, b){
    //      return a + b;
    // }

    console.log(arrow(1, 2)); // 3
    
    // posso usare le {} dopo la "=>", ma così perdo il return implicito e dovrò dichiararlo io 
    const arrow2 = (a, b) => {
        console.log(a, b);
        return (a + b);
    };

    arrow2(1, 2); // invocazione arrow function "arrow2";

    // return implicito di un object
    const chiSei = () => ({fistName: 'luca'})
    console.log(chiSei())

})()

// D.O.M. Document Object Model

// document.body è un object che si riferisce al <body> della pagina
// lo posso modificare come un object normale

/*

document.body.className = 'bg-black'
document.body.style.padding = '100px';
document.body.style.backgroundColor = 'rebeccapurple';
document.body.style.color = 'white';
document.body.innerHTML = '<h1>Ciao mondo!</h1>';


let message = 'ciao'
document.body.onclick = function(){
    console.log(message);
}



#### Direzioni
Scriviamo una function che prende in parametro una serie indefinita di indicazioni, per ogni indicazione stampare un console.log

nb: le indicazione possono essere solo "su" "giù" "sinistra" "destra"

```js

function indicazioni(...directions){

}

indicazioni('su', 'su', 'sinistra'); 
// output:
// 'su'
// 'su'
// 'sinistra'
```


#### Contare le direzioni

scrivere una function partendo da quella di prima, per ogni direzione salvare dentro un oggetto il numero di indicazioni uguali.


function contaIndicazioni(...directions){
    const directions = { su: 0, giu: 0, ... };

    // fare un ciclo per ogni direction...

    return directions;
}


#### Conta il click

scriviamo una function che conta quante volte viene eseguita. Attacchiamo questa function all'evento click sul body usando document.body.onclick.

```js
let count = 0;
const countClick = () => {
    
} 

document.body.onclick = countClick;

// output:
// click -> 1
// click -> 2
// click -> 3

```



#### Bonus: Ripasso Array

Scrivere una function che data una stringa in input possa sostituire ogni carattere con il suo indice nell'alfabeto.

esempio: 
a = 1;
b = 2;

console.log(alphabetPosition('Rosso di sera, bel tempo si spera'))
// output: "18 15 19 19 15 4 9 19 5 18 1 2 5 12 20 5 13 16 15 19 9 19 16 5 18 1"

tips: 

```js
const indexForEachLetter = {
    a: 1,
}
const input = 'Rosso di sera, bel tempo si spera';


function alphabetPosition(string){
    let output = '';

    for(let letter of string){
        const value = indexForEachLetter[...];

    }

    return output;    
}
```


*/
