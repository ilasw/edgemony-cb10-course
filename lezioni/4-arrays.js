/*

### Nome e Cognome
    - Chiediamo all'utente tramite un prompt di inserire il suo nome, poi salviamo il dato in una variabile;
    - Chiediamo all'utente tramite un prompt di inserire il suo cognome, poi salviamo il dato in una variabile;

    - Controlliamo che siano valori validi (non null), con almeno 3 caratteri e mostriamo tramite alert errori specifici;
    - Se abbiamo mostrato un errore ricarichiamo la pagina usando `window.location.reload()`;

    - Prendiamo il nome inserito e salviamo una nuova variabile trasformando la prima lettera in maiuscola, tip:
    ```js
    const firstName = '...';
    const firstLetter; // ...
    const nameWithoutFirstLetter; // ...
    const firstNaneWithCapitalize; // ...
    ```
    - Prendiamo il cognome inserito e salviamo una nuova variabile trasformando la prima lettera in maiuscola;

    - Mostriamo tramite alert "Ciao + [Nome] + [Cognome]";

### Quizzone - Qui usiamo lo switch dove possibile
    - Creiamo una variabile `let score = 0;`;
    - Proponiamo all'utente, tramite prompt, 4 domande di cultura generale e raccogliamo le sue risposte in altrettante variabili;
    - Per ogni risposta corretta aggiungiamo al `score` 3 punti, per ogni errata togliamo 1 punto;
    - Alla fine delle 4 domande mostriamo il pungeggio complessivo;
    - Poi se le hai indovinate tutte mostra un alert "Sei il nuovo campione!"

*/

const inputFirstName = 'adae'; // prompt(`Come ti chiami?`); // null | string
const inputLastName = 'dasdad'; // prompt(`Quale è il tuo cognome?`);

// inputFirstName !== null && inputFirstName.length > 2
// typeof inputFirstName === 'string' && inputFirstName.length > 2

const isFirstNotValid = typeof inputFirstName !== 'string';

if(isFirstNotValid){
    alert('Devi inserire un nome valido!')
    window.location.reload()
}

const isFirstNameLengthNotOK = inputFirstName.length < 3;

if(isFirstNameLengthNotOK) {
    alert('Il nome deve contentere almeno 3 caratteri, per favore riprovare');
    window.localtion.reload();
}

const firstLetterUppercase = inputFirstName.at(0).toUpperCase();
const firstNameWithoutFirstLetter = inputFirstName.substring(1).toLowerCase();

console.log(firstLetterUppercase);
console.log(firstNameWithoutFirstLetter);

// const fullName = firstLetterUppercase.concat(firstNameWithoutFirstLetter);
const fullName = `${firstLetterUppercase}${firstNameWithoutFirstLetter} `;

console.log(fullName);


/*
### Quizzone - Qui usiamo lo switch dove possibile
    - Creiamo una variabile `let score = 0;`;
    - Proponiamo all'utente, tramite prompt, 4 domande di cultura generale e raccogliamo le sue risposte in altrettante variabili;
    - Per ogni risposta corretta aggiungiamo al `score` 3 punti, per ogni errata togliamo 1 punto;
    - Alla fine delle 4 domande mostriamo il pungeggio complessivo;
    - Poi se le hai indovinate tutte mostra un alert "Sei il nuovo campione!"
*/

// const MAX_SCORE = 3;

// let score = 0;

// const answer = prompt('Quale è il migliore amico dell\'uomo tra: cane, gatto, topo, aquila?');
// console.log(answer);
// switch(answer){
//     case 'cane':
//         score += 3;
//         break;
//     case 'gatto':
//     case 'topo':
//     case 'aquila':
//         score = Math.max(0, score - 1);
//         break;
//     default: 
//         alert('Devi rispondere con uno dei quattro precedenti!');
//         score -= 1;
// }

// console.log('Nuovo score dopo una domanda: ', score)

// if(score === MAX_SCORE){
//     console.log("Sei il nuovo campione!");
// }

// ---- 12 minuti - 10.48  ---- 

// ternario

// "operatore ternario" non è altro che una shorthand per un if

const condition = true;

// assegnamo in modo condizionale un valore o l'altro: se true (?) -> Luca  altrimenti (:) -> Ignazio
const name = (condition ? 'Luca' : 'Ignazio');

// eseguiamo in modo condizionale una operazione o l'altra.
condition 
    ? console.log('Ciao mondo') 
    : console.log('Addio mondo :(');


// Si possono mettere operatori ternari dentro altri operatori ternari: ma non fatelo per favore, altrimenti muore una fata.

const age = 13;
const scuola = (age < 10) ? 'Elementari' : ( age < 14 ? 'Medie' : 'Superiori' );

console.log(scuola);


if(typeof inputFirstName !== 'string' || inputFirstName.length < 3){
    const isNameString = typeof inputFirstName == 'string';
    const message = isNameString ? 'Devi inserire almeno 3 caratteri' : 'Devi inserire un valore';
    console.log(message);
}


/*
// Quizzone usando il ternario:

let risposta; 
let score = 0;

risposta = prompt('Capitale di Italia?');
score += (risposta === 'Roma' ? 3 : -1);

risposta = prompt('Migliore amico dell\'uomo?');
score += (risposta === 'cane' ? 3 : -1);

console.log(score)
*/

// ********************
// --- Array :)

// rappresentano un insieme ordinato di elementi di qualsiasi natura. Non sono un tipo di dato primitivo.

const primitiva = 0;
console.log(primitiva === 0);

const array = [-1, 0, 1, 2, 3, false, 'ciao', null, [ 0 , 1 ,2]];
// console.log(array === []); // sempre false, perché l'indirizzo di memoria dei due array è sempre diverso sebbene abbiamo lo stesso contenuto

/*
const array1 = [];
const array2 = [];
const array3 = array1; // il valore viene copiato per referenza

array1 === array2 // false
array1 === array3 // true
array2 === array3 // false
*/

// voglio prendere il primo elemento di un array:
const firstItem = array.at(0); // -1
const firstItem2 = array[0]; // -1

array.length // lunghezza per array

const stringInArray = array[6];

console.log(array);
console.log('array length', array.length);
console.log('string in array length', stringInArray.length);

// array.push() - array.join()

// Esercizi:

/*

Rifacciamo l'esercizio del quiz di ieri in cui chiediamo all'utente di rispondere a domande a risposta multipla, in particolare però:
- Raccogliamo tutte le risposte date dall'utente anche dentro un array "risposte";
- Quando diamo il risultato finale, mostriamo anche tutte le risposte date dall'utente dentro un solo console.log e dentro mettiamo anche la lunghezza del nostro array

```js
const risposte = []; // salviamo tutte le risposte
let score = 0;
let risposta;

risposta = ...;
// aggiungere al nostro array di risposte;


....

console.log() // mostriamo tutte le risposte
```

----

Raccogliamo tramite prompt (eseguito tre volte) 3 parole dall'utente, per ogni parola ricevuta mostriamo in console "vocale" o "consonante" 
in base alla prima lettera. Usiamo un solo console.log per ogni parola sfruttando la potenzialità dell'operatore ternario.

--- 

Data una parola stampiamo in console la parola al rovescio. 
Per farlo prima usiamo il metodo split delle stringhe che trasforma una stringa in array e poi controlliamo se esiste un metodo per invertire gli elementi... 

```js 

constr string = prompt('...');

// controlliamo se è una stringa valida prima!

const array = string.split()

```

*/