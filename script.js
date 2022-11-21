const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const reset = document.getElementById('reset');

const playerRock = document.getElementById('player-rock');
const playerPaper = document.getElementById('player-paper');
const playerScissors = document.getElementById('player-scissors');

const computerRock = document.getElementById('computer-rock');
const computerPaper = document.getElementById('computer-paper');
const computerScissors = document.getElementById('computer-scissors');

const scoreOne = document.getElementById('score-one');
const scoreTwo = document.getElementById('score-two');

const response = document.getElementById('response');

const play = document.getElementById('play');

let pSelector = '';
let compSelector = '';

let playerScore = 0;
let computerScore = 0;

rock.addEventListener('click', function () {
    pSelector = 'Rock';
    playerRock.style.display = 'block';
    playerPaper.style.display = 'none';
    playerScissors.style.display = 'none';

    computerRock.style.display = 'none';
    computerPaper.style.display = 'none';
    computerScissors.style.display = 'none';
    

});

paper.addEventListener('click', function () {
    pSelector = 'Paper';
    playerPaper.style.display = 'block';
    playerRock.style.display = 'none';
    playerScissors.style.display = 'none';
   
    computerRock.style.display = 'none';
    computerPaper.style.display = 'none';
    computerScissors.style.display = 'none';
});

scissors.addEventListener('click', function () {
    pSelector = 'Scissors';
    playerScissors.style.display = 'block';
    playerRock.style.display = 'none';
    playerPaper.style.display = 'none';

    computerRock.style.display = 'none';
    computerPaper.style.display = 'none';
    computerScissors.style.display = 'none';
});


function computerSelector() {



    let randomNumber = Math.floor((Math.random() * 3) + 1);
    if (randomNumber == 1) {
        compSelector = 'Rock';
        computerRock.style.display = 'block'
        computerPaper.style.display = 'none'
        computerScissors.style.display = 'none'

    } else if (randomNumber == 2) {
        compSelector = 'Paper';
        computerPaper.style.display = 'block'
        computerRock.style.display = 'none'
        computerScissors.style.display = 'none'

    } else if (randomNumber == 3) {
        compSelector = 'Scissors';
        computerScissors.style.display = 'block'
        computerRock.style.display = 'none'
        computerPaper.style.display = 'none'
    }
    // secondResponse.innerHTML = compSelector;

    if (pSelector === compSelector) {
        result.innerHTML = 'Draw';
    } else if (pSelector === 'Rock' && compSelector === 'Paper' ||
        pSelector === 'Paper' && compSelector === 'Scissors' ||
        pSelector === 'Scissors' && compSelector === 'Rock') {
        result.innerHTML = 'You Lose!';
        computerScore += 1;
        scoreOne.innerHTML = playerScore;
        scoreTwo.innerHTML = computerScore;
    } else {
        result.innerHTML = 'You Win!'
        playerScore += 1;
        scoreOne.innerHTML = playerScore;
        scoreTwo.innerHTML = computerScore;
    }
 
}


play.addEventListener('click', computerSelector);



reset.addEventListener('click', function () {
    
    scoreOne.innerHTML = 0;
    scoreTwo.innerHTML = 0;
    playerScore = 0;
    computerScore = 0;
    pSelector = '';
    compSelector = '';
    
    result.innerHTML = '?';

    playerRock.style.display = 'none';
    playerPaper.style.display = 'none';
    playerScissors.style.display = 'none';
    computerRock.style.display = 'none';
    computerPaper.style.display = 'none';
    computerScissors.style.display = 'none';

});

