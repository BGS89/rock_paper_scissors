// BUTTONS
const selectorButton = document.querySelectorAll('.option');
const play = document.getElementById('play');
const reset = document.getElementById('reset');

// ICONS
const hands = document.querySelectorAll('.play');
const compHands = document.querySelectorAll('.cplay');

// SCORES
const scoreOne = document.getElementById('score-one');
const scoreTwo = document.getElementById('score-two');
const result = document.getElementById('result');

let playerScore = 0;
let computerScore = 0;

let playerOne = '';

// CLEAR ICONS
const clearPlayer = () => {
    hands[0].style.display = 'none';
    hands[1].style.display = 'none';
    hands[2].style.display = 'none';
}

const clearComp = () => {
    compHands[0].style.display = 'none';
    compHands[1].style.display = 'none';
    compHands[2].style.display = 'none';
}

// PLAYER HAND SELECTION
selectorButton.forEach(button => {
    button.addEventListener('click', function () {
        playerOne = button.id;
        clearPlayer();
        switch (button.id) {
            case 'rock':
                hands[0].style.display = 'block';
                break;
            case 'paper':
                hands[1].style.display = 'block';
                break;
            case 'scissors':
                hands[2].style.display = 'block';
                break;
        }
    })
})

// COMPUTER HAND SELCTION
play.addEventListener('click', function () {
    clearComp()
    // Generate random number
    let randomNumber = Math.floor((Math.random() * 3) + 1);
    // Apply random number to rock paper or scissors
    switch (randomNumber) {
        case 1:
            computer = 'rock';
            compHands[0].style.display = 'block'
            break;
        case 2:
            computer = 'paper';
            compHands[1].style.display = 'block';
            break;
        case 3:
            computer = 'scissors';
            compHands[2].style.display = 'block';
            break; 
    }

    // Compare to player choice 
    if (playerOne.length < 1) {
        alert('Please select Rock, Paper or Scissors');
        clearComp();
    } else if (playerOne === computer) {
        result.innerHTML = 'Draw';
    } else if (playerOne === 'rock' && computer === 'paper' ||
        playerOne === 'paper' && computer === 'scissors' ||
        playerOne === 'scissors' && computer === 'rock') {
        result.innerHTML = 'You Lose!';
        computerScore += 1;
        scoreTwo.innerHTML = computerScore;
    } else {
        result.innerHTML = 'You Win!';
        playerScore += 1;
        scoreOne.innerHTML = playerScore;
    }
});

// RESET GAME
reset.addEventListener('click', function () {
    clearComp();
    clearPlayer();
    scoreOne.innerHTML = 0;
    scoreTwo.innerHTML = 0;
    playerScore = 0;
    computerScore = 0;
    playerOne = '';
})

