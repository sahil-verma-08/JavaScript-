let num=parseInt((Math.random()*100 +1))
const submit=document.querySelector('#subt')
const userInput=document.querySelector('#guessField  ')
const guessSlot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastresult')
const lowOrHi=document.querySelector('.lowOrHi')
const  startOver=document.querySelector('.rsultParas')
const p= document.createElement("p")


let prevGuess=[]
let numGuess=1

let playgame =true

if (playgame){
    submit.addEventListener("click",function(e){
        e.preventDefault()
       const guess= parseInt (userInput.value)
       validateGuess(guess)
    })
}

function validateGuess(guess){
    // validate the input
    if(isNaN(guess)){
        alert('plz add valid number')
    }
    else if (guess<1   || guess >100 ){
        alert('plz add valid number >1 and <100')
    }
    
    else {
        prevGuess.push(guess)
        if (numGuess===11){
            displayGuess(guess)
            displayMessege(`game over. random numer was ${num}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
    

}
function  checkGuess (guess){
    // give the message after check
    if (guess===num){
        displayMessege('you guess right')
        endGame();
    }
    else if(guess<num){
        displayMessege('your guess in too smaller')
    }
    else if(guess>num){
        displayMessege('your guess in too high')
    }
}

function displayGuess(guess){
    
    userInput.value='';
    guessSlot.innerHTML+=`${guess}, `
    numGuess++ ;
    remaining.innerHTML=`${11-numGuess}`;
}
function  displayMessege (message){
    
    // display the message
    lowOrHi.innerHTML=`<h2> ${message}</h2>`
}
function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
  }
  
  function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
      randomNumber = parseInt(Math.random() * 100 + 1);
      prevGuess = [];
      numGuess = 1;
      guessSlot.innerHTML = '';
      remaining.innerHTML = `${11 - numGuess} `;
      userInput.removeAttribute('disabled');
      startOver.removeChild(p);
  
      playGame = true;
    });
  }