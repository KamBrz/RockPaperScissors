// Create a RockPaperScissors game
// 1. Randomise hand for computer
// 2. Make user hand choice based on HTML button
// 3. Compare hands
// 4. Log results

function computerChoice() {
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  if (randomNumber === 1) {
    return 'rock';
  } else if (randomNumber === 2) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

const buttonR = document.querySelector('#rock');
const buttonP = document.querySelector('#paper');
const buttonS = document.querySelector('#scissors');

const results = document.querySelector('#result');
const playerResult = document.querySelector('#player-score');
const computerResult = document.querySelector('#computer-score');
const drawResult = document.querySelector('#draw-score');

buttonR.addEventListener('click', () => {
  playRound('rock');
});
buttonP.addEventListener('click', () => {
  playRound('paper');
});
buttonS.addEventListener('click', () => {
  playRound('scissors');
});

let playRound = (playerHand) => {
  let computerHand = computerChoice();
  if (playerHand === computerHand) {
    drawScore++;
    results.textContent = "It's a draw!";
  } else if (
    (playerHand === 'rock' && computerHand === 'scissors') ||
    (playerHand === 'paper' && computerHand === 'rock') ||
    (playerHand === 'scissors' && computerHand === 'paper')) {
    playerScore++;
    results.textContent = `You win, ${playerHand} beats ${computerHand}`;
  } else {
    computerScore++;
    results.textContent = `You lose, ${computerHand} beats ${playerHand}`;
  }
  results.style.color = '';
  updateScores();
  if (playerScore === 5 || computerScore === 5) {
    endGame();
  }
};

const updateScores = () => {
  playerResult.textContent = `Player wins = ${playerScore}`;
  computerResult.textContent = `Computer wins = ${computerScore}`;
  drawResult.textContent = `Draws = ${drawScore}`;
};

const endGame = () => {
  if (playerScore > computerScore) {
    results.textContent = 'Congratulations, you won the game!';
    results.style.color = 'red';
  } else {
    results.textContent = 'Machine won the game!';
    results.style.color = 'blue';
  }
  playerScore = 0;
  computerScore = 0;
  drawScore = 0;
  updateScores();
};