# Edgemony CB10 - Exercises

## Venerdì 24/05

### Esercizi:

#### Creazioni elementi:

Aggiungiamo al nostro HTML tramite JS due nuovi elementi: un h1 ed un paragrafo.
Usiamo il metodo document.createElement per creare i vari elementi 
Per inserirli nella pagina usiamo rispettivamente: insertAdjacentElement() per h1, e append() per il `<p>`.


#### Button contatore dinamico:

- Aggiungiamo nella nostra pagina, dopo il paragrafo, un `<button>0</button>`.
- Al button associamo un evento `onmouseenter` che cambierà lo style del button (sperimentiamo un po');
- Al button associamo un altro evento `onclick` che al click aumenta di uno il numero inserito nel proprio innerHTML;


#### Lista di nomi:

Insieriamo all'interno della pagina HTML un elemento form secondo quanto riportato sotto:

```html

<form>
    <div>
        <label for="nomi">Lista nomi e cognomi</label>
        <input 
            id="nomi" 
            name="nomi" 
            type="text" 
            minlength="3" 
            autocomplete="off" 
        />
    </div>

    <button type="submit">Invia</button> 
</form>

<ul class="list"></ul>

```

Usiamo JS per inserire all'evento `onsubmit` una function che:
- previene il comportamento di default del form.
- Quindi prendere il valore dell'input, controllare che sia una stringa valida e che abbia almeno uno spazio all'interno;
- Se il valore è valido creare un elemento <li> e inserirlo dentro l'elemento `.list` (vedi HTML)
- Aggiungere una function al `onclick` del nuovo elemento <li> e stampare un console.log() quando viene eseguito il click.

```js

const formEl = // ...;
const inputEl = // ...;

formEl.onsubmit = function(event){

    event. /// eseguiamo un particolare metodo...

    const inputValue = // ...

    if(...){
        
    }
}

```


----


## Giovedì 23/05

### Esercizi


#### Selettori

- Usando il querySelector prendiamo l'elemento con id `heading` ed eseguiamo un console.log

```
// output <h1>...</h1>
```

- Per ogni elemento `button` presente in pagina stampiamo in console il suo testo.

```js

const buttonEls = document.querySelectorAll('button');

for(...){
    console.log(...);
}

// output 
// cancel
// Click me!
```

#### Contatore

- salviamo due variabili con dentro i riferimenti ai due button della pagina `resetBtn` e `clickBtn`;
- inseriamo una function dentro l'evento `onclick` di `clickBtn` e per ogni click:
- leggiamo il valore attuale del proprio innerHTML
    - convertiamo il valore a numero, se NaN portiamolo a 0;
    - incrementiamo il valore precedente e salviamolo in innerHTML;

- inseriamo una function dentro l'evento `onclick` di `resetBtn` e per ogni click impostiamo innerHTML di `clickBtn` a "0";

```js

const resetBtn = document.querySelector(..);
const clickBtn = document.querySelector(..);

resetBtn.onclick = function(){
    // portare clickBtn.innerHTML a "0"
}

clickBtn.onclick = function(){
    // se stringa portare clickBtn.innerHTML a "0"
    // se numero incrementare e salvare il valore
}


```


## Mercoledì 22/05

### Esercizi


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

```js

function contaIndicazioni(...directions){
    const directions = { su: 0, giu: 0, ... };

    // fare un ciclo per ogni direction...

    return directions;
}

```

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

----


## Martedì 21/05

### Esercizi


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

----

## Lunedì 20/05

### Esercizi


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

----

## Venerdì 17/05
- Voca.js: https://vocajs.pages.dev/

### Esercizi

#### Trova il positivo:
dato un array di numeri [-1, -2, -10, 2, 5];

scriviamo due cicli for che soddisfano ognuno una condizione:
1. Stampare in console solo i numeri > 0
2. Deve interrompere al primo numero > 0 l'esecuzione del for (break)

----

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
elemento ad indice i === elemento ad indice fine meno (i * -1) -1 /// length - i - 1 

```js
for(){

    if( elemento corrisponde a...){}

    isLast = index === length -1;

    if(elemento è l'ultimo dell'array...){

    }
}
```


## Giovedì 16/05
- Voca.js: https://vocajs.pages.dev/


### Esercizi

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

----


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

- Mostriamo tramite alert "Ciao + [Nome] + [Cognome]"


#### Quizzone - Qui usiamo lo switch dove possibile

- Creiamo una variabile `let score = 0;`;
- Proponiamo all'utente, tramite prompt, 4 domande di cultura generale e raccogliamo le sue risposte in altrettante variabili;
- Per ogni risposta corretta aggiungiamo al `score` 3 punti, per ogni errata togliamo 1 punto;
- Alla fine delle 4 domande mostriamo il pungeggio complessivo;
- Poi se le hai indovinate tutte mostra un alert "Sei il nuovo campione!"

----


#### Esercizi 14/05

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
