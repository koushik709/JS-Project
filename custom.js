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



getStart.addEventListener('click', () =>{
    welcomePage.style.display = 'none';
    gamePage.style.display = 'block';
});

var randomNumber = Math.trunc(Math.random());
console.log(randomNumber);

let scoreValue = 0;
let movesValue = 10;
inputNumber.value = '';
inputNumber.addEventListener('keypress', (e) => {
    if(e.value == ''){
        submitNumber.disabled = true;
    } else {
        submitNumber.disabled = false;
    }
});

submitNumber.addEventListener('click', () => {

    let inputValue = Number(inputNumber.value);
    console.log(typeof inputValue, "Moves left = " + movesValue);

    if(inputValue == randomNumber){
        var roundValue = Number(checkRound.textContent);
        console.log(roundValue);
        movesValue = 10;

        roundValue += 1;
        scoreValue += 5;


        checkRound.innerHTML = roundValue;
        checkScore.innerHTML = scoreValue;
        checkMoves.innerHTML = movesValue;
        infoCardAnimOne.classList.add('infoCardAnim');
        infoCardAnimTwo.classList.add('infoCardAnim');
        infoCardAnimThree.classList.add('infoCardAnim');
        notificationText.classList.add('successResult');
        setInterval(function() {
            infoCardAnimOne.classList.remove('infoCardAnim');
            infoCardAnimTwo.classList.remove('infoCardAnim');
            infoCardAnimThree.classList.remove('infoCardAnim');
            notificationText.classList.remove('successResult');
        }, 3000);

        randomNumber = Math.trunc(Math.random() * 10 + 2);
        suggestText.style.color = "#4cff5f"
        suggestText.innerHTML = `Yeeee You did a <br> great Job!`
        suggestText.style.color = "#FF7474"
        //setInterval(function() {suggestText.innerHTML = "Let's Do it Again"}, 3000);
        inputNumber.innerHTML = '';
        // console.log("This is the new random number" + randomNumber, "Moves left = ");
    } else {
        movesValue -= 1;
        checkMoves.innerHTML = movesValue;
        suggestText.innerHTML = `Opps this is a wrong Answer.`;
        infoCardAnimTwo.classList.add('infoCardAnim');
        setInterval(function() {
            infoCardAnimTwo.classList.remove('infoCardAnim');
            suggestText.innerHTML = `Try Again`;
        }, 3000);
        setInterval(function() {
            suggestText.innerHTML = `Try Again`;
        }, 5000);
    }

    if(movesValue == 0){
        infoCardAnimOne.classList.add('infoCardAnim');
        infoCardAnimTwo.classList.add('infoCardAnim');
        infoCardAnimThree.classList.add('infoCardAnim');
        setInterval(function() {
            infoCardAnimOne.classList.remove('infoCardAnim');
            infoCardAnimTwo.classList.remove('infoCardAnim');
            infoCardAnimThree.classList.remove('infoCardAnim');
        }, 5000);
        roundValue = 1;
        scoreValue = 0;
        movesValue = 10;
        checkRound.innerHTML = roundValue;
        checkScore.innerHTML = scoreValue;
        checkMoves.innerHTML = movesValue;
        suggestText.innerHTML = `The answer was <br> <b>${randomNumber}<b>`
        setInterval(function() {suggestText.innerHTML = "Let's try again"}, 4000);
        randomNumber = Math.trunc(Math.random() * 10 + 3);
    }
    inputNumber.value = '';
});

resetButton.addEventListener('click', () => {
    roundValue = 1;
    scoreValue = 0;
    movesValue = 10;
    checkRound.innerHTML = roundValue;
    checkScore.innerHTML = scoreValue;
    checkMoves.innerHTML = movesValue;
    suggestText.innerHTML = `New Round <br> Started`;
    infoCardAnimOne.classList.add('infoCardAnim');
    infoCardAnimTwo.classList.add('infoCardAnim');
    infoCardAnimThree.classList.add('infoCardAnim');
    setInterval(function() {
        infoCardAnimOne.classList.remove('infoCardAnim');
        infoCardAnimTwo.classList.remove('infoCardAnim');
        infoCardAnimThree.classList.remove('infoCardAnim');
    }, 2000);
});


function checkHint (x) {
    x.innerHTML = `Try between 0 to 10`;
}

function checkHintDone(x){
    x.innerHTML = `🤣🤣🤣🤣🤣🤣`
}