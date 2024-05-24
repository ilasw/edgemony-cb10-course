/*

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

function query(selector){
    return document.body.querySelector(selector);
}

function queryAll(selector){
    return document.body.querySelectorAll(selector);
}

const headingEl = query('#heading');
console.log(headingEl);

// const buttonEls = document.body.querySelectorAll('button');
const buttonEls = queryAll('.container button');

for(let buttonEl of buttonEls){
    console.log('--- button ---');
    console.log(buttonEl);
    console.log(buttonEl.innerHTML);
}

// const alertBtn = query('[data-trigger="alert"]');
// if(alertBtn){
//     alertBtn.onclick = function(){
//         console.log('ciao!!')
//     }
// }

console.clear();

const resetBtn = document.querySelector('[data-reset]');
const clickBtn = document.querySelector('[data-increment]');

console.log(this); // window

if(resetBtn && clickBtn){

    resetBtn.onclick = function(){
        // portare clickBtn.innerHTML a "0"
        console.log('click sul reset');
        const currentWidth = clickBtn.getBoundingClientRect().width;
        clickBtn.style.minWidth = `${currentWidth}px`;

        clickBtn.innerHTML = 0; // questo viene portato a stringa

        // clickBtn.click();
    }

    clickBtn.onclick = function () {
        // dentro this ho l'elemento a cui è agganciato l'evento.
        // console.log('dentro il click', this);

        // leggiamo il valore attuale del proprio innerHTML
        const html = this.innerHTML; // same as `clickBtn.innerHTML`

        //- convertiamo il valore a numero, se NaN portiamolo a 0;
        // const htmlToNumber = Number(html);
        // const count = Number.isNaN(htmlToNumber) ? 0 : count;

        const count = Number(html) || 0;
        
        // - incrementiamo il valore precedente e salviamolo in innerHTML;
        this.innerHTML = count + 1;
    };

    // this = window;
}

const coder = {
    firstName: 'Luca',
    getFirstName: function () {
        return this.firstName;
    }
}

console.log(this);
console.log(coder.getFirstName());


// Sfruttare il this per stampare l'HTML dei button al hover:
// resetBtn.onmouseenter = logInnerHTML;
// clickBtn.onmouseenter = logInnerHTML;

// function logInnerHTML (){
//     console.log(this.innerHTML);
// }


// reset della pagina

const containerEl = query('.container');
containerEl.remove();

const appEl = document.querySelector('#app');

// Questo sostituisce tutto, vorrei aggiungere solo degli elementi mantenendo quelli di prima
// appEl.innerHTML = `<div>
//     <h1>Ecco la pagina della fenice</h1>
// </div>`;

appEl.insertAdjacentHTML('afterbegin', `
<div>
    <h1>Ecco la pagina della fenice</h1>
    <p>Ciao</p>
</div>
`);

const h1El = appEl.querySelector('h1');

h1El.style.fontSize = '1.5rem';


// Creare un elemento da 0
const newH2El = document.createElement('h2');

newH2El.className = 'text-big';

h1El.insertAdjacentElement('afterend', newH2El);
// h1El.append(newH2El);

newH2El.innerHTML = 'Sono un h2';

newH2El.onclick = function(){
    console.log(this.innerHTML);
}

// Form

const formEl = document.querySelector('form');
const inputEl = document.querySelector('input');
const previewEl = document.getElementById('preview');

let nome = '';
let cognome = 'Pagliaro';

console.log('valore iniziale', inputEl.value);

inputEl.oninput = function(event){
    console.log(event);
    console.log('Stai digitando:', this.value);

    nome = this.value;

    // previewEl.innerHTML = nome.toUpperCase() + ' ' + cognome;
}

formEl.onsubmit = function(event) {

    event.preventDefault(); // impediamo che la pagina venga ricaricata
    console.log(event);

    const text = inputEl.value;
    console.log('hai digitato:', text);

    const elementEl = document.createElement('li');
    elementEl.innerHTML = text;
    previewEl.insertAdjacentElement('beforeend', elementEl);


    // reset input
    inputEl.value = '';

/*

#### Creazioni elementi:

Aggiungiamo al nostro HTML tramite JS due nuovi elementi: un h1 ed un paragrafo.
Usiamo il metodo document.createElement per creare i vari elementi 
Per inserirli nella pagina usiamo rispettivamente: insertAdjacentElement() per h1, e append() per il <p>.


#### Button contatore dinamico:

- Aggiungiamo nella nostra pagina, dopo il paragrafo, un <button>0</button>.
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


*/


}