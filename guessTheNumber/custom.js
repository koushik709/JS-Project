var getStart = document.querySelector('.startButton');
var welcomePage = document.querySelector('.welcomePage');
var gamePage = document.querySelector('.gamePage');
var inputNumber = document.getElementById('numberBoxx');
var submitNumber = document.querySelector('.submitButton');
var checkRound = document.querySelector('.roundCheck');
var checkMoves = document.querySelector('.movesCheck');
var checkScore = document.querySelector('.scoreCheck');
var notificationText = document.querySelector('.notificationText');
var suggestText = document.querySelector('.suggestionText');
var resetButton = document.querySelector('.resetButton');
var infoCardAnimOne = document.querySelector('.ic1');
var infoCardAnimTwo = document.querySelector('.ic2');
var infoCardAnimThree = document.querySelector('.ic3');

function displayMessage(message, color = '#rgb(0 143 15)') {
    suggestText.innerHTML = message;
    suggestText.style.color = color;
}

function animateCards() {
    infoCardAnimOne.classList.add('infoCardAnim');
    infoCardAnimTwo.classList.add('infoCardAnim');
    infoCardAnimThree.classList.add('infoCardAnim');
    setTimeout(function () {
        infoCardAnimOne.classList.remove('infoCardAnim');
        infoCardAnimTwo.classList.remove('infoCardAnim');
        infoCardAnimThree.classList.remove('infoCardAnim');
    }, 2000);
}

function resetGame() {
    roundValue = 1;
    scoreValue = 0;
    movesValue = 10;
    checkRound.innerHTML = roundValue;
    checkScore.innerHTML = scoreValue;
    checkMoves.innerHTML = movesValue;
    displayMessage('New Round <br> Started');
    animateCards();
}

getStart.addEventListener('click', () => {
    welcomePage.style.display = 'none';
    gamePage.style.display = 'block';
});

let randomNumber = Math.trunc(Math.random() * 10) + 1;
console.log(randomNumber);

let scoreValue = 0;
let movesValue = 10;

inputNumber.addEventListener('input', () => {
    submitNumber.disabled = inputNumber.value === '';
});

submitNumber.addEventListener('click', () => {
    let inputValue = Number(inputNumber.value);
    console.log(typeof inputValue, "Moves left = " + movesValue);
    if (inputValue < 1 || inputValue > 10) {
        displayMessage('Please enter a number between 1 and 10', '#ff0000');
        console.log('Invalid input!');
        return;
    } else {
        if (inputValue === randomNumber) {
            let roundValue = Number(checkRound.textContent);
            roundValue++;
            scoreValue += 5;
            movesValue = 10;
    
            checkRound.innerHTML = roundValue;
            checkScore.innerHTML = scoreValue;
            checkMoves.innerHTML = movesValue;
    
            displayMessage('Yeeee You did a <br> great Job!', '#4cff5f');
            animateCards();
    
            randomNumber = Math.trunc(Math.random() * 10) + 1;
        } else {
            movesValue--;
            checkMoves.innerHTML = movesValue;
            displayMessage('Oops, this is a wrong answer.');
            infoCardAnimTwo.classList.add('infoCardAnim');
    
            setTimeout(function () {
                infoCardAnimTwo.classList.remove('infoCardAnim');
                displayMessage('Try Again!');
            }, 3000);
        }
    
        if (movesValue === 0) {
            displayMessage(`The answer was <br> <b>${randomNumber}</b>`);
            animateCards();
    
            setTimeout(function () {
                displayMessage("Let's try again");
            }, 4000);
    
            resetGame();
            randomNumber = Math.trunc(Math.random() * 10) + 1;
        }
    
    }
    inputNumber.value = '';

});

resetButton.addEventListener('click', resetGame);

function checkHint(x) {
    x.innerHTML = 'Try between 0 to 10';
}

function checkHintDone(x) {
    x.innerHTML = '🤣🤣🤣🤣🤣🤣';
}
