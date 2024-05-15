# Edgemony CB10 - Exercises

## Mercoledì 15/05
- AirBnB best practices: https://github.com/airbnb/javascript


### Esercizi

#### Nome e Cognome
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

#### Quizzone - Qui usiamo lo switch dove possibile
    - Creiamo una variabile `let score = 0;`;
    - Proponiamo all'utente, tramite prompt, 4 domande di cultura generale e raccogliamo le sue risposte in altrettante variabili;
    - Per ogni risposta corretta aggiungiamo al `score` 3 punti, per ogni errata togliamo 1 punto;
    - Alla fine delle 4 domande mostriamo il pungeggio complessivo;
    - Poi se le hai indovinate tutte mostra un alert "Sei il nuovo campione!"

----


## Esercizi 14/05

- definiamo variabile che contiene una stringa
    - Usiamo i doppi apici e salviamo la stringa: `Ciao Mondo!`
    - Usiamo i singoli apici e salviamo la stringa:` Mio zio viene dalla città di l'Aquila`
        - Occhio ad usare un escape per i singoli apici dentro la stringa!!
    - Usiamo il backtick per concatenare le due stringhe precendti dentro una nuova, usiamo anche "l'andata a capo" 

- Creiamo una nuova variabile in cui inseriamo una variabile precedente che modifichiamo portato il tutto in maiuscolo (`.toUpperCase()`) 
- Definiamo una variabile e salviamo all'interno un dato passato dall'utente tramite `prompt()`
    - Facciamo un console.log del dato precedento portato a lowercase

- Chiediamo al nostro user un numero da uno a 10 tramite prompt e solo se maggiore di 7 esclamare in console che ha vinto!
    - tips:

        ```js 
        prompt('Dammi un numero da uno a dieci!'); // occhio che il prompt torna una stringa!!
        if([...] > 7 ){

        }
        ```