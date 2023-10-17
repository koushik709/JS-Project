'use strict';

// Select Element
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting Condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const resetGame = () => {
    playing = true;
    document.querySelector(`#score--0`).textContent = 0;
    document.querySelector(`#score--1`).textContent = 0;
    document.querySelector(`#current--0`).textContent = 0;
    document.querySelector(`#current--1`).textContent = 0;
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
    activePlayer = 0;
    currentScore = 0;
    scores = [0, 0];
    diceEl.classList.add('hidden');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
}

const switchPlayer = () => {
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    currentScore = 0
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}


// Rolling Dice Functionality
btnRoll.addEventListener('click', () => {
    if(playing){
        // Generating a random dice roll
        var dice = Math.trunc(Math.random() * 6) + 1;
        console.log(dice);
    
        // Display Dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;
    
        // Check The number if it is one
        if(dice !== 1){
            // if it is one we will switch to the next player
            currentScore += dice;
            document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
        } else {
            // Switch to next player
            switchPlayer();
        }
    }
});



btnHold.addEventListener('click', function(){
    if(playing){
        // Add current score to active score
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    
    
        // check if player score is  >=100
        if(scores[activePlayer]>=20){
            playing = false;

            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            diceEl.classList.add('hidden');
            btnNew.computedStyleMap.backgroundColor = "#ffffff";
        } else {
            // switchPlayer();
            switchPlayer();
        }
    }
});


btnNew.addEventListener('click', function(){
    resetGame();
});