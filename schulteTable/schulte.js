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

const swapNum = (l1,l2) => {
    let x;
    x = arrNum[l1];
    arrNum[l1] = arrNum[l2];
    arrNum[l2] = x;
}
const callSwap = ()=>{
    //let randomNum = [Math.floor(Math.random()*25), Math.floor(Math.random()*20),Math.floor(Math.random()*15),Math.floor(Math.random()*10),Math.floor(Math.random()*5),Math.floor(Math.random()*2)];
    //let arrNumSize = arrNum.length+1;
    for(let j=0;j<25;j++){
        //randomNum[j]==randomNum[j+1] ? swapNum(randomNum[j],randomNum[j+1]):swapNum(randomNum[j+1],randomNum[j]);
        //randomNum[j]==randomNum[j+2] ? swapNum(randomNum[j],randomNum[j+2]):swapNum(randomNum[j+2],randomNum[j]);
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
    console.log(arrNum);
}
const resultGame = ()=>{
    resultBG.classList.contains('hidden')? resultBG.classList.remove('hidden'): resultBG.classList.add('hidden');
    resultDiv.classList.contains('hidden')? resultDiv.classList.remove('hidden'): resultDiv.classList.add('hidden');;
}
const countStart = ()=> {
    let x = 30;
    let myTime = setInterval(() => {
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


NumgberValue.forEach((el,i) => {
    //el.preventDeafult();

});