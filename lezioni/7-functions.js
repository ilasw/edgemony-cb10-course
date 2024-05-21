/*

Dato questo object:

```js
const coder = {
    firstName: 'Luca', // coppia chiave - valore : "firstName" - "Luca"
    lastName: 'Pagliaro',
    age: 29,
    skills: ['JavaScript', 'HTML', 'CSS'],
    address: {
        city: 'Catania',
        zipCode: '95100'
    }
};
```

vorrei scrivere del codice che possa:

- Stampiamo in console tutte le chiavi presenti dentro il mio oggetto.
    ```
    // output aspettato:
    "firstName"
    "lastName"
    "age"
    "skills"
    "address"
    ```

- Per ogni proprietà presente dentro il nostro object, controlliamo la chiave. Se la prima lettera è una vocale stampiamo in console la chiave ed il suo valore.
    ```
    // output aspettato:
    age: 29
    address: [object Object]
    ```

*/

const coder = {
    firstName: 'Luca', // coppia chiave - valore : "firstName" - "Luca"
    lastName: 'Pagliaro',
    age: 29,
    skills: ['JavaScript', 'HTML', 'CSS'],
    address: {
        city: 'Catania',
        zipCode: '95100'
    }
};

// stampare un console.log per ogni skill presente in coder.skills 

// for(let i = 0; i < coder.skills.length; i++){
//  const item = coder.skills[i];
//  console.log(item);
// }

// const array = coder.skills;
// for(let i = 0; i < array.length; i++){
//     const item = array[i];
//     console.log(item);
// }

for(let item of coder['skills']){
    const a = 'b';
    console.log(item);
}

// for(let index in coder['skills']){
//     const item = coder.skills.at(index);
//     console.log(index, item);
// }


// coder: {...coder, address: { ...address, country: 'Italy', street: 'Via Edgemony 1' } }

// const country = prompt('Da quale nazione vieni?');
// const street = prompt('In quale via abiti?');

// // Nuova proprietà
// coder.address.country = country;
// coder.address['street'] = street;

// console.log(`${coder}`);

// stampare oggetto portato a stringa in console
// console.log(JSON.stringify(coder));
// console.log(JSON.parse(`{"name": "object"}`));
// JSON -> JavaScript Object Notation


// Salviamo su una key dinamica:

// const key = prompt('Chiave'); // '123'
// const value = prompt('Valore'); // 'pippo'

// const key = 'disney123';
// const value = 'pippo';

// const numbers = '0123456789';

// const hasKeyNumber = (/([0-9])+/).test(key);
// console.log(hasKeyNumber);

// for(let char of key){
//     console.log(char);
//     const charToNumber = Number(char);
//     const isCharANumber = Number.isInteger(charToNumber);
//     console.log('is number:', Number.isInteger(charToNumber));

//     if(isCharANumber){
//         alert('non voglio numeri come chiave');
//         break;
//     }
// }

// if(typeof key === 'string'){
//     coder[key] = value;
// }


// let isKeyValid = false; // questa si chiama "flag"
// let key;

// while(!isKeyValid){
//     key = prompt('Nome della chiave');
    
//     const hasKeyNumber = (/([0-9])+/).test(key);

//     isKeyValid = !hasKeyNumber;
// }

// console.log('key', key);

console.clear();

const keys = Object.keys(coder);
console.log(keys);

const values = Object.values(coder);
console.log(values);

const entries = Object.entries(coder);
console.log(entries); // torna un array con ogni elemento che é un array [key, value]
// array di dimensioni fisse: Tupla

const vocali = 'aeiou';

for(let key in coder){
    const firstLetterLowecase = key.at(0).toLowerCase();
    const value = coder[key];
    
    // const isFirstLetterVocale = vocali.indexOf(firstLetterLowecase) > -1;
    const isFirstLetterVocale = vocali.includes(firstLetterLowecase);

    if(isFirstLetterVocale){
        console.log(`${key}: ${JSON.stringify(value)}`);
    }
}

// --- 

const array = [1,2,3];
array.reverse(); // modifica array invertendo gli elementi
const reversed = array.toReversed() // ne crea uno nuovo che ha invertiti, non modifica quello iniziale

array.join(', ;'); // 1, 2, 3
array.toString(); // 1,2,3

// --- Function 

// Servono a definire porzioni di codice eseguibile ed estendibile. 
// Si possono riusare quante volte si vuole;

console.clear();

// keyword "function" che identifica il costrutto
// nome della funzione
// parametri -> sono dati che possiamo passare alla function che saranno disponibili al suo interno
// corpo della function messo tra {}
// "return" da la possibilità alla function di tornare un dato usabile da altre parti 
function sum (a, b){
    const result = a + b;

    return result; // il dato che viene ritornato è quello che sarà l'output della function
    // se non ho il return la function torna di default `undefined`
}

// Posso eseguire una function solo tramite le ();
const mySum = sum(1, 2); // qui si "invoca" la function "sum". 

console.log(sum); // torna il valore della function, non viene eseguito nulla

console.log(sum()); // in questo caso: eseguo la function ed assegno: a = undefined; b=undefined;

console.log(sum(1)); // in questo caso: eseguo la function ed assegno: a = 1; b=undefined;

console.log(sum(1, 2)); // in questo caso: eseguo la function ed assegno: a = 1; b=2;

// function di log
function log(message = 'ciao mondo'){
    console.log(message)
    // non ho un return quindi il return è implicitamente "undefined"
}

console.clear();

// log; // leggi la function che si chiama log, ma non fare nulla
// log(log(log)); 
// log('Ciao Mondo!');

const hello = log('ciao mondo');
console.log(hello);


function calcolaTeoremaPitagora(lato1, lato2){

    const lato1AlQuadrato = lato1 * lato1; // 9
    const lato2AlQuadrato = lato2 * lato2; // 16
    const risultato = Math.sqrt(lato1AlQuadrato + lato2AlQuadrato); // v 9 + 16;

    console.log('lato1AlQuadrato', lato1AlQuadrato);
    console.log('lato2AlQuadrato', lato2AlQuadrato);
    console.log(risultato);

    return risultato;
}

const ipotenusa = calcolaTeoremaPitagora(3, 4);

console.log('ipotenusa', ipotenusa);


/// concateniamo due stringhe:

console.clear();

function concat(prefix, suffix){
    if(typeof prefix !== 'string' || typeof suffix !== 'string'){
        console.warn('Mi vuoi prendere in giro??')
        return 'Bip-Bup errore!';
    }

    // const risultato = prefix + suffix;
    const risultato = `${prefix} ${suffix}`;

    return risultato;
}

const dueStringhe = concat('Ciao', 'mondo');
console.log(dueStringhe);

const dueStringhe2 = concat('O bella', 'ciao');
console.log(dueStringhe2);

const error = concat(1, null);
console.log(error);

// --- ricorsività
console.clear();

function countdown(start){

    if(start === 0){
        return console.log(`🎉`)
    }

    console.log(start);
    return countdown(start-1);
}

// countdown(1); // 1 -> 🎉
// countdown(2); // 2 -> 1 -> 🎉
// countdown(10); // 10 -> 9 -> ... -> 2 -> 1 -> 🎉

function sommaRicorsiva(count){
    if(count === 0){
        return 0;
    }

    return sommaRicorsiva(count-1) + count;
}

console.log(sommaRicorsiva(10));



/*

- Scriviamo ed eseguamo una funzione che permetta di fare rapidamente un console.clear()

```js

function clear(){
    ...
}

clear() // fa stessa cosa di console.clear()

```

- Scriviamo ed eseguamo una funzione che possa data una stringa tornarne una nuova con la prima lettera maiuscola, il resto minuscolo.

```js

function capitalize(string){
    return // ...;
}

// output 
capitalize('ciao');     // Ciao
capitalize('mondo');    // Mondo
capitalize('Mondo');    // Mondo
capitalize('TEST');     // Test

```

- Scrivere una function che dati due parametri in ingresso controlla se siano numeri e torna il numero più piccolo:

```js

function min(a, b){

    return //...
}

console.log(min(1, 3));     // 1;
console.log(min(5, -3));    // -3;
console.log(min(100, 20));  // 20;

```

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