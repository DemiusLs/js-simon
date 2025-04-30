const startStr = document.getElementById("start-str");
const startBtn = document.getElementById("start-btn");
const memoStr = document.getElementById("memo-str");
const timerStr = document.getElementById("timer-str");
// Variabili del form
const num1Str = document.getElementById("num1");
const num2Str = document.getElementById("num2");
const num3Str = document.getElementById("num3");
const num4Str = document.getElementById("num4");
const num5Str = document.getElementById("num5");
const formBtn = document.getElementById("form-btn")

// Frase di output

const outStr = document.getElementById("out-str")


// funzione al click del tasto start

startBtn.addEventListener("click", gameStart)

// Dichiarazione delle funzioni

function gameStart() {
    //cambiare il testo di startStr    
    modifyInner(startStr, "Memorizza i numeri sottostanti")
    //generare i numeri da stampare
    getRandomInt(-100,100) 

    //visualizzare i numeri generati
    //far partire il timer

}


/**
 * Dato un elemento dom, cambia il suo innerText
 *
 * @param {HTMLElement} elem 
 * @param {string} string 
 */
function modifyInner(elem, string) {
    elem.innerText = string
};


function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    // The maximum is inclusive and the minimum is inclusive
}

function arrRandom(num) {

    for(i = 0 ; i < num ; i++){
        
    }
}
