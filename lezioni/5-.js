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
Per farlo prima usiamo il metodo split delle stringhe che trasforma una stringa in array 
e poi controlliamo se esiste un metodo per invertire gli elementi... 

```js 

constr string = prompt('...');

// controlliamo se è una stringa valida prima!

const array = string.split()

```

*/


// const risposte = []; // salviamo tutte le risposte
// let score = 0;
// let risposta;

// // // 0°
// // risposte.push(
// //     prompt('Dimmi qualcosa')
// // );
// // score += (risposte.at(-1) === 'ciao') ? 3 : -1;

// // // 1° Domanda
// // risposta = prompt('Seleziona la capitale italiana: Roma, Milano, Napoli, Palermo');
// // score += (risposta === 'Roma') ? 3 : -1;
// // risposte.push(risposta);

// // // 2°
// // risposta = prompt('Quale corso preferisci tra: Edgemony, altri');
// // score += (risposta === 'Edgemony') ? 3 : -1;
// // risposte.push(risposta);

// // if(score === 6){
// //     console.log('Sei un campione!');
// // }

// const totaleRisposte = risposte.length;
// const risposteToString = risposte.join('", "');
// console.log(`Hai risposta a ${totaleRisposte} domande, 
// le tue risposte sono state: "${risposteToString}"`) // mostriamo tutte le risposte

// const risposteToHTML = risposte.join('</li>\n\t<li>');
// console.log(`<ul>
//     <li>${risposteToHTML}</li>
// </ul>`);


/// ---- Esercizio 2

const vocali = ['a', 'e', 'i', 'o', 'u'];
let parola;

// parola = prompt('Dimmi una parola');

// null -> false
// "" -> false
// "ewrwer" -> true

if(parola){
    const firstChar = parola.trimStart().at(0).toLowerCase();
    const isVocale = vocali.includes(firstChar);
    console.log(isVocale ? 'vocale' : 'consonante');
    // " Ursula"
}

// ----- Reverse

const string = 'anna';
const chars = string.split(''); // [c i a o]
const reverseChars = chars.reverse(); // [o a i c]
const reverseString = reverseChars.join(''); // "oaic"

console.log(reverseString);
// console.log(string.split('').reverse().join(''));

const isPalindomo = string === reverseString;
console.log(isPalindomo ? `${string} è palindromo` : 'ritententa con una parola palindroma');


// Pausa 10.08 - 10.18

// Iniziamo con i cicli
// For - While

console.clear();
console.log('prima del for');

// Condizione iniziale; Condizione di uscita; Cosa eseguire alla fine di ogni loop
// questo for si legge testualmente così:
// - data una variabile i = 0;
// - fino a quando i < 3;
// - voglio eseguire il codice del corpo del for
// - alla fine sommare i += 1;
// - controllare se i < 3
// - se i < 3 eseguire corpo
// - aumentare i di 1;
for( let i = 0; i < 3; i++ ){
    console.log('valore attuale:', i);
}

// contiamo da 10 a 0;
// for( let i = 10; i >= 0; i-- ){
//     console.log('valore attuale:', i);
// }

console.log('fine del for!');

// quiz:

const domande = [
    'Capitale di Italia', 
    'Presidente della Republica', 
    'Anno vittoria ultimo mondiale per Italia'
];
const risposte = [
    'Roma', 
    'Mattarella', 
    '2006'
];

const quanteDomande = domande.length; // 3
let score = 0;

console.clear();
for(let indice = 0; indice < quanteDomande; indice++){
    
    // 0 -> domande[0]
    // indice ++; 
    // 1 -> domande[1]
    // indice ++; 
    // 2 -> domande[2]
    // indice ++; 
    // --- qui indice diventa 3 e non è più possibile entrare dentro il corpo del for.

    const domandaCorrente = domande.at(indice);
    const rispostaCorretta = risposte.at(indice);
    
    const risposta = prompt(domandaCorrente);
    const punteggioDomanda = risposta === rispostaCorretta ? 3 : -1;

    score += punteggioDomanda;

    console.log(domandaCorrente, '-', risposta,'-', punteggioDomanda);

    if(score < 0){
        console.log('forse dovresti ripassare!')
        break;
    }

}

console.log('punteggio complessivo', score);


// Esempio di for nested
const array = [1, 2, 3, [1, 2, 3]];
console.log(array);

for(let i = 0; i < array.length; i++){

    const item = array[i];
    console.log('array item', item);

    if(Array.isArray(item)){

        console.log('item è un array');

        // item = [1,2,3]; // length -> 3

        for(let innerIndex= 0; innerIndex < item.length; innerIndex++){

            console.log('inner item', item[innerIndex]);
            array.push(item[innerIndex]);
        
        }

    }

}


// While

let i = 0;

// come il for prima controlla e dopo esegue, non esegue se la condizione non passa
while(i < 3){
    console.log('while value:', i);
    i++;
}

// variante in cui prima viene eseguito il body, e poi controllata la condition prima di ciclare nuovamente
// tendenzialmente abbandonata come strada.
do{

}while(false);

// for(let i = 0; i < 3; i++){ }


// break; || continue;

console.clear();
for(let i = 1; i <= 10; i++){
    //i : 0, 1, 2

    if(i === 9){
        // interrompe sia l'esecuizion del body attuale sia quelle della rimanenza del for
        break;
    }

    if(i % 2 !== 0){
        // il continue interrompe l'esecuizione del body corrente e passa alla prossima esecuzione
        continue;
    }

    // se è partito il continue questo non verrà eseguito
    console.log('indice i: ', i);
}

// Esercizi:

/*

Trova il positivo:
dato un array di numeri [-1, -2, -10, 2, 5];

scriviamo due cicli for che soddisfano ognuno una condizione:
1. Stampare in console solo i numeri > 0
2. Deve interrompere al primo numero > 0 l'esecuzione del for (break)

----

Palindromi:
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

----


*/