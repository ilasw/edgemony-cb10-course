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

const MAX_SCORE = 3;

let score = 0;

const answer = prompt('Quale è il migliore amico dell\'uomo tra: cane, gatto, topo, aquila?');
console.log(answer);
switch(answer){
    case 'cane':
        score += 3;
        break;
    case 'gatto':
    case 'topo':
    case 'aquila':
        score = Math.max(0, score - 1);
        break;
    default: 
        alert('Devi rispondere con uno dei quattro precedenti!');
        score -= 1;
}

console.log('Nuovo score dopo una domanda: ', score)

if(score === MAX_SCORE){
    console.log("Sei il nuovo campione!");
}

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

