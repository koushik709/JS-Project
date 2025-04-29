const NumgberValue = document.querySelectorAll('.NumgberValue');
const playGame = document.querySelector('.playGame');
const playGameDiv = document.querySelector('.playGameDiv');
const gameBody = document.querySelector('.gameBody');
const newGame = document.querySelector('.newGame');
const countDown = document.querySelector('.countDown');
let resultBG = document.querySelector('.resultBG');
let resultDiv = document.querySelector('.resultDiv');
let newGameAgain = document.querySelector('.newGameAgain');



const arrNum = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
let currentScore = 1;
const swapNum = (l1,l2) => {
    let x;
    x = arrNum[l1];
    arrNum[l1] = arrNum[l2];
    arrNum[l2] = x;
}
const callSwap = ()=>{
    for(let j=0;j<25;j++){
        swapNum(Math.floor(Math.random()*5), Math.floor(Math.random()*24));
    }
    let xl;
    let lst = Math.floor(Math.random()*12);
    xl = arrNum[lst];
    arrNum[lst] = arrNum[arrNum.length-1];
    arrNum[arrNum.length-1] = xl;
}
const newGameFun = ()=>{
    callSwap();
    for(let k=0;k<25;k++){
        NumgberValue[k].textContent = arrNum[k];
    }
    NumgberValue.forEach((el,i) => {
        el.style.opacity = '1';
    });
    currentScore = 1;
    //console.log(arrNum);
}
const resultGame = ()=>{
    resultBG.classList.contains('hidden')? resultBG.classList.remove('hidden'): resultBG.classList.add('hidden');
    resultDiv.classList.contains('hidden')? resultDiv.classList.remove('hidden'): resultDiv.classList.add('hidden');;
    document.querySelector('.resultText').textContent = `Time Out! You have counted till ${currentScore - 1}. Please click "Play Again" to start a new game 😍`;
}
let myTime;
const countStart = ()=> {
    clearInterval(myTime);
    let x = 30;
    myTime = setInterval(() => {
        x--;
        if(x<10){
            countDown.innerHTML = `0${x}`;
            !countDown.closest('h1').classList.contains('rd') ? countDown.closest('h1').classList.add('rd') : countDown.closest('h1').classList.add('rd');
        } else {
            countDown.innerHTML = x;
            countDown.closest('h1').classList.contains('rd') ? countDown.closest('h1').classList.remove('rd') : countDown.closest('h1').classList.remove('rd');
        }
        if(x==0){
            clearInterval(myTime);
            resultGame();
        }
    }, 1000);
    //myTime();
}
newGame.onclick = function(){
    countDown.innerHTML = `30`;
    document.querySelectorAll('td')
    .forEach(el=>{
        el.classList.remove('rightClick');
        el.classList.remove('WrongClick');
    });
    newGameFun();
    countStart();
}

playGame.addEventListener('click', ()=>{
    newGameFun();
    if(!playGameDiv.classList.contains('hidden')){
        playGameDiv.classList.add('hidden');
    }
    if(gameBody.classList.contains('hidden')){
        gameBody.classList.remove('hidden');
        console.log('okay');
    }else{
        console.log('not okay');
    }
    countStart();
});
resultDiv.addEventListener('click', ()=>{
    newGameFun();
    countStart();
    resultGame();
});

let scoreValue = 0;

NumgberValue.forEach((el,i) => {
    el.addEventListener('click', ()=>{
        let textt = el.textContent;
        if(currentScore==Number(textt)){
            currentScore++;
            el.closest('td').classList.add('rightClick');
            setTimeout(function(){el.closest('td').classList.remove('WrongClick');},300);
            if(currentScore==25){
                resultBG.classList.contains('hidden')? resultBG.classList.remove('hidden'): resultBG.classList.add('hidden');
                resultDiv.classList.contains('hidden')? resultDiv.classList.remove('hidden'): resultDiv.classList.add('hidden');;
                document.querySelector('.resultText').textContent = `WOW! Your have counted till ${currentScore - 1}. Please click "Play Again" to start a new game 😍`;
            }
        } else {
            el.closest('td').classList.add('WrongClick');
            setTimeout(function(){el.closest('td').classList.remove('rightClick');},300);
        }
    });
});

newGameAgain.addEventListener('click', ()=>{
    document.querySelectorAll('td')
    .forEach(el=>{
        el.classList.remove('rightClick');
        el.classList.remove('WrongClick');
    });
    newGameFun();
    countStart();
});





