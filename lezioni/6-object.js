/*
#### Trova il positivo:
dato un array di numeri [-1, -2, -10, 2, 5];

scriviamo due cicli for che soddisfano ognuno una condizione:
1. Stampare in console solo i numeri > 0
2. Deve interrompere al primo numero > 0 l'esecuzione del for (break)


[-1, -2, -10, 2, 5];

for each item in array:

    if: item > 0 
        then break the for each;

    else console.log()

*/

const array = [-1, -2, -10, 2, 5, 14, -12, 0];

const ultimo = array.at(-1); // mi prende l'ultimo elemento


// 1.
// for(let i = 0; i < array.length; i++){
//     const item = array[i];

//     if(item < 0){
//         continue;
//     }

//     console.log('numero:',item);
// }

// 2.
// -1, -2, -10, 2, ...
// for(let i = 0; i < array.length; i++){
//     const item = array[i]; // 2

//     if(item > 0){
//         console.log('primo numero > 0:', item);
//         break;
//     }

//     console.log('numero <= 0: ', item);
// }

/*
#### Palindromi:
abbiamo visto come si trova una parola palindroma, ma non l'abbiamo fatto in modo efficente.
Quello che dovremo fare invece è: prendere una parola dall'utente tramite prompt, scomporla in array
ed usare un for per poter controllare se è palindroma.

nel caso in cui non troviamo corrispondenza usiamo dal for e stampiamo in console.log un messaggio.
se nell'ultimo carattere della parola non abbiamo riscontrato errori stampiamo un console.log con "Successo! è un palindromo!"


tips:
ogni carattere è uguale al suo elemento specchio nella parola
elemento ad indice 0 === elemento ad indice fine meno -1
elemento ad indice 1 === elemento ad indice fine meno -2
elemento ad indice 2 === elemento ad indice fine meno -3
elemento ad indice i === elemento ad indice fine meno (i * -1) -1 /// **length - i - 1**

parola = 'simocomis';

per ogni lettera di "parola":
    lettera = parola[indice];

    se "lettera" = lettera che sta ad indice opposto
        -> significa che questa lettera è palindroma, passiamo a controllare la successiva

        else: break; -> comunicare che la parola non è palindroma

 p alerm o
 p === o -> se p != o allora la parola non è sicuramente palindroma, exit! 

 a nn a
 a == a ? -> lo è quindi controlliamo la prossima
 n == n ? -> lo è quindi controlliamo la prossima
 n == n ? -> lo è quindi controlliamo la prossima
 a == a ? -> lo è quindi tutta la parola è palindroma

*/

const parola = 'simocomis';

const lettera = 0;
console.log('lettera', lettera);
const indice = 0;

for(let indice = 0; indice < parola.length; indice++){
    // console.log(lettera); // da errore!
    const lettera = parola[indice];

    const indiceOpposto = parola.length - 1 - indice;
    const letteraOpposta = parola.at(indiceOpposto);

    console.log('lettera dentro il for:', lettera)

    if(lettera === letteraOpposta){
        // console.log(`lettera "${lettera}" è uguale a "${letteraOpposta}"`);
    }else{
        // console.log(`lettera "${lettera}" NON è uguale a "${letteraOpposta}"`);
        console.log('parola non palindroma');
        break;
    }

    const isLast = indice === (parola.length - 1);
    if(isLast){
        console.log(`Successo! "${parola}" è un palindromo!`)
    }
}

// qui abbiamo errore perché usiamo una var con scope non disponibile
// console.log('indiceOpposto', indiceOpposto);

console.log('lettera', lettera);

// 11.13


console.clear();

// --- Objects

// Sono un tipo ti dato che trova il suo utilizzo nel ragruppare valori tramite "chiavi"

const object = {}; // "shift" + "alt gr" + "è"

const luca = {
    // 0: 'Sono lo zero!',
    // snake_case: '',
    // 'kebab-case': 'Kebab',
    firstName: 'Luca', // coppia chiave - valore : "firstName" - "Luca"
    lastName: 'Pagliaro',
    age: 29,
    skills: ['JavaScript'],
    address: {
        city: 'Catania',
        zipCode: '95100'
    }
};

console.log(luca); // { firstName: "...", }
console.log(luca.firstName); // luca
console.log(luca['firstName']); // luca
console.log('voglio mettere 0 come indice:', luca[0]); // luca

console.log(luca['address'])

const address = luca['address'];

// se voglio leggere lo zip code?
console.log(address['zipCode'])
// or
console.log(luca['address']['zipCode'])
// or
console.log(luca.address.zipCode);


// se voglio leggere l'array dentro l'object?
const skills = luca.skills;

// const fistSkill = skills.at(0);
// or
const fistSkill = luca.skills.at(0);

const fabio = {skills: ['Front-end']};
const marilu = {skills: ['Back-end']};

console.log(fabio.skills.at(0));
console.log(marilu.skills.at(0));

const prop = 'firstName';
console.log(luca[prop]);

console.clear();

const obj = {};
obj['firstName'] = 'Pippo';
obj['lastName'] = 'Baudo';

console.log(obj.currentlyInActivity);

console.log('obj', obj);

// obj['currentlyInActivity'] = true 
obj.currentlyInActivity = true;


if(!obj.currentlyInActivity){
    obj.currentlyInActivity = true;
}


console.log('has obj a property "age"?', obj.hasOwnProperty('age'));

obj.age = 'matusalemme';
console.log('has obj a property "age"?', obj.hasOwnProperty('age'));
console.log('has obj a property "age"?', 'age' in obj); // in controlla se 'age' esiste dentro obj, torna boolean

console.log(array);
console.log(1 in array); // controllo se array ha un indice 1

// per cancellare proprietà
delete obj.age; // obj.age -> undefined;
obj.age = undefined; // semanticamente non corretto, ma funziona uguale

// if(null) // non passa

// const obj1 = {};
// const obj2 = {};

// console.log(obj1 == obj2);

console.clear();

// for...in
for(let key in luca){ // "firstName"
    // console.log('chiave', key);

    // "firstName"
    const value = luca[key]; // per ogni chiave prendiamo il valore che sta dentro l'object alla [chiave]
    console.log(`${key}: ${value}`);
}

// // For...in/of si usano dentro gli array
// for(let value of array){
//     console.log(value); // qui dentro abbiamo il valore 
//     ['ciao'] // ->se l'array è questo viene stampato solo "ciao"
// }

// for(let index in array){
//     console.log(index); // 0, 1, 2, 3
//     ['ciao'] // ->se l'array è questo viene stampato solo 0
// }

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

- stampare un console.log per ogni skill presente in coder.skills 
    ```
    // output aspettato:
    'JavaScript'
    'HTML'
    'CSS'
    ```

- salvare dentro "coder.address" due nuove proprietà da chidere all'utente tramite prompt: "country" e "street".
  Eseguiamo poi un console.log per controllare tutto sia OK.

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

- Chiediamo all'utente, tramite prompt, cosa vuole salvare dentro il nostro object e (tramite un altro prompt) quale valore voglia inserire. Salviamo quindi una nuova proprietà con chiave/valore presi dai prompt.

    ```js
    const key = prompt('...');
    const value = prompt('...');

    coder[...] = ...;
    ```

*/