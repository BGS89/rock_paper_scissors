const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

const response = document.getElementById('response');

const play = document.getElementById('play');


let pSelector = '';
let compSelector = '';


rock.addEventListener('click', function(){
    pSelector = 'Rock';
    firstResponse.innerHTML = pSelector;

});

paper.addEventListener('click', function(){
    pSelector = 'Paper';
    firstResponse.innerHTML = pSelector;
});

scissors.addEventListener('click', function(){
    pSelector = 'Scissors';
    firstResponse.innerHTML = pSelector;
});

function computerSelector(){
    let randomNumber = Math.floor((Math.random() * 3) +1);
    if (randomNumber == 1){
        compSelector = 'Rock';
    } else if (randomNumber == 2){
        compSelector = 'Paper'
    } else if (randomNumber == 3){
        compSelector = 'Scissors';
    }
    secondResponse.innerHTML = compSelector;
    
    // if(firstResponse === )
}




play.addEventListener('click', computerSelector);







//MATH RANDOM TO SELECT ROCK PAPER SCISSORS
//WIN/LOSE/DRAW
//UPDATE SCORE 