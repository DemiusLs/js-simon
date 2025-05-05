const startStr = document.getElementById("start-str");
const startBtn = document.getElementById("start-btn");
const memoStr = document.getElementById("memo-str");
const timerStr = document.getElementById("timer-str");
const outputStr = document.getElementById("out-str");
// Variabili del form
const gameForm = document.getElementById("game-form");
const num1Str = document.getElementById("num1");
const num2Str = document.getElementById("num2");
const num3Str = document.getElementById("num3");
const num4Str = document.getElementById("num4");
const num5Str = document.getElementById("num5");
const formBtn = document.getElementById("form-btn")










// variabili di programma
const maxTime = 5;
modifyInner(timerStr, maxTime)

let quizArr = [];
let memoArr = [];
let resArray = [];
let gameStarted = false;
let timerOn = false;

// Frase di output


const outStr = document.getElementById("out-str")


// funzione al click del tasto start

startBtn.addEventListener("click", gameStart);
gameForm.addEventListener("submit", gameEnd)


// Dichiarazione delle funzioni che lavorano su variabili globali

function gameStart() {


    //cambiare il testo di startStr    
    modifyInner(startStr, "Memorizza i numeri sottostanti")
    //modifico anche il testo del bottone
    modifyInner(startBtn, "Restart")
    // console.log(arrRandom(5, -100, 100));
    //generare i numeri da stampare visualizzare i numeri generati 
    quizArr = arrRandom(5, -100, 100)
    //visualizzo i numeri generati
    modifyInner(memoStr, quizArr);
    //copio i dati per mostrarli succesivamente
    memoArr = quizArr;

    //far partire il timer
    timer(maxTime);


}


/**
 * Dato un elemento dom, cambia il suo innerText
 *
 * @param {HTMLElement} elem 
 * @param {string} string 
 */
function modifyInner(elem, string) {
    elem.innerHTML = string
};


function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    // The maximum is inclusive and the minimum is inclusive
}


/**
 * Crea un array di lunghezza num valori random compresi fra min e max
 *
 * @param {number} num 
 * @param {number} min 
 * @param {number} max 
 * @returns {{}} 
 */
function arrRandom(num, min, max) {
    let array = [];


    for (i = 0; array.length < num; i++) {

        let randomNum = getRandomInt(min, max);

        if (!array.includes(randomNum)) {
            array.push(randomNum)

        }

    }

    return array
}


/**
 * Questa funzione fa partire il timer e agisce direttamente sulla variabile globale gameStarded
 * modifica gli innerHtml degli elementi memoStr e timerStr per visualizzare le fasi del gioco
 *Sinceramente non mi piace agire direttamente sulla variabe, cercare un altro modo
 * 
 * @param {number} maxTime 
 */
function timer(maxTime) {
    let count = maxTime

    if (!gameStarted) {
        timerOn = true
        gameStarted = true;
        gameForm.classList.add("d-none")
        intervalId = setInterval(function () {

            if (count === 0) {
                clearInterval(intervalId)
                modifyInner(memoStr, "Inserisci i dati negli spazi sottostanti, </b> non importa l'ordine in cui li inserisci ")
                modifyInner(outStr, "")
                gameForm.reset();
                gameStarted = false

                gameForm.classList.remove("d-none")

            } else {
                count--
            }

            modifyInner(timerStr, count)
        }, 1000)

    } else {
        gameStarted = false;
        clearInterval(intervalId);
        count = maxTime;
        modifyInner(timerStr, count);
        modifyInner(memoStr, "hai premuto reset, ripremilo per restartare il gioco")
        gameForm.classList.add("d-none")
    }

    console.log(gameStarted)

}


/**
 * Description placeholder
 *
 * @param {*} event 
 * 
 * 
 * 
 */
function gameEnd(event) {

    event.preventDefault();

    let newArr = []


    if (gameStarted) {
        modifyInner(outputStr, `Aspetta che il timer sia arrivato a 0`)


    } else {

        for (i = 0; i < gameForm.length - 1; i++) {


            let quizNum = parseInt(gameForm[i].value)


            if (quizArr.includes(quizNum)) {


                quizArr = quizArr.filter(function (el) {
                    return el !== quizNum;
                });



                newArr.push(quizNum)
                console.log("nerArr", newArr);
                console.log("quizArr", quizArr);


            }
        }

        if (newArr.length != 0) {
            modifyInner(outputStr, `Complimenti hai vinto, hai indovinato ${newArr.length} numeri su 5 </b>
                       numeri da indovinare ${memoArr}  numeri indovinati ${newArr}`)
        } else {
            modifyInner(outputStr, `Mi spiace ma non hai indovinato nessun numero, ritenta`)
        }

    }


}





