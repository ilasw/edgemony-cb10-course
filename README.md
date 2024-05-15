# Edgemony CB10 - Exercises

## Mercoledì 15/05
- AirBnB best practices: https://github.com/airbnb/javascript

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