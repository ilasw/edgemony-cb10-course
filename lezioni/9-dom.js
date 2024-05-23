/*

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

// "su" "giù" "sinistra" "destra"

// const map = {
//     su: 1,
//     giù: 1,
//     sinistra: 1,
//     destra: 1,
// }

// Console.log per ogni indicazione:
function indicazioni(...directions) {
    const map = {};
    const check = ['su', 'giù', 'sinistra', 'destra'];

    for (let i = 0; i < directions.length; i++) {
        const direction = directions[i];
        // const isValid = map.hasOwnProperty(direction);
        // const isValid = direction in map;
        // const isValid = typeof map[direction] === 'number';
        // const isValid = Object.keys(map).includes(direction);

        const isValid = check.includes(direction);

        if(isValid){
            // map[direction] =  map[direction] ?? 0; // nullish coaleshing operator
            map[direction] ??= 0; // nullish coaleshing operator
            map[direction] += 1;
        }
    }

    return map;
}

console.log(indicazioni('su', 'su', 'ciao', 'sinistra', 'destra', 'destra'));
// output:
// 'su'
// 'su'
// 'sinistra'

console.clear();

// console.log(null ??= 'ero null');
// // (null === null || typeof null === 'undefined') ? 'ero null' : null;

// console.log(false ?? 'ero false')
// console.log(false || 'ero false')


console.clear();
//

// let count = 0;
// const countClick = () => {
//     count += 1;
//     console.log(count);
// } 

// document.onclick = countClick;


// Criptare stringa

const alphabet = 'abcdefghijklmnopqrstuvwxyz';

// mettendo (string = '') diciamo che se string non viene passato, ha come valore di default ''
function alphabetPosition(string = ''){
    let output = '';
    string = string.toLowerCase();
    
    for(let char of string){
        const indexOfChar = alphabet.indexOf(char);
        const isValid = indexOfChar > -1;

        if(indexOfChar > -1){
            output += (indexOfChar+1) + ' ';
        }else{
            output += char;
        }

        // output += (isValid) ? ((indexOfChar+1) + ' ') : char;
    }

    return output;
}

console.log(alphabetPosition('Rosso di sera, bel tempo si spera'))
// "18 15 19 19 15 4 9 19 5 18 1 2 5 12 20 5 13 16 15 19 9 19 16 5 18 1"

alphabetPosition();

// leetcode || codewars

console.clear();

// 

// possiamo fare il log del body usando
console.log(document.body);
// se vogliamo vedere le sue props usiamo usiamo invece
console.dir(document.body);

// per selezionare un elemento possiamo usare il querySelector()
const headingEl = document.querySelector('#heading'); // in questo caso stiamo selezionando un elemento con id="heading"
const heading = 'Mio nuovo titolo';

// querySelector torna 2 possibi valori: (HTMLElement | null)
// document.querySelector('#app > div > button');

// per fare ricerca multipla usiamo in querySelectorAll('button');

const buttonEls = document.querySelectorAll('button');

// Ogni elemento del DOM ha la possibilità di cercare al suo interno:
const scriptEls = document.body.querySelectorAll('script');

// oppure
const containerEl = document.body.querySelector('.container'); // prendiamo il primo container

if(containerEl){
    const buttonsInContainerEls = containerEl.querySelectorAll('button'); //tutti i button dentro il container
}


console.clear();

console.log(document.body);
console.log(document.body.querySelector('.container button'));

const buttonsEls = document.body.querySelectorAll('.container button');
const array = Array.from(buttonsEls);

// usiamo come array
for(let el of array){
    console.log('el:', el);
    el.innerHTML = 'pollice';
}

const everyButtonHas3Chars = array.every(function(button){
    return button.innerHTML.length > 2;
});

console.log(everyButtonHas3Chars)

// lavoriamo su iterabile
for(let button of buttonsEls){
    console.log('button:', button);
}

// ----

const cancel = document.body.querySelector('.container button');

if(cancel){
    console.log(cancel.innerHTML);
    cancel.innerHTML = '<span>Non voglio più! Non mi va!</span>';

    cancel.onclick = function (){
        console.log(typeof cancel.innerHTML); // sempre stringa
        console.log('vecchio html:', cancel.innerHTML);
        cancel.innerHTML = '<span class="2">Sono un nuovo button!</span>';
    }
}

function changeEl(){
    if(!cancel) return;

    console.log(cancel);
}


/*

inseriamo in HTML il seguente codice dentro il body:

```html

<div class="container">
    <h1 title="Titolo" id="heading">Ciao classe!</h1>
    <h2 id="kicker">benvenuti nel mondo del DOM</h2>
    <p class="description">Testo a caso</p>

    <button>Canel</button>
    <button>Click me!</button>
</div>

```

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

*/