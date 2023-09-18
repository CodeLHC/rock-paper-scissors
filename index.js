const rock = 'rock';
const scissors = 'scissors';
const paper = 'paper';

const choices = [rock, paper, scissors];

const toTitleCase = (word) => word[0].toUpperCase() + word.slice(1);
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (
    (playerSelection === rock && computerSelection === scissors) ||
    (playerSelection === paper && computerSelection === rock) ||
    (playerSelection === scissors && computerSelection === paper)
  ) {
    playerScore++;
    return `You Win! ${toTitleCase(
      playerSelection
    )} beats ${computerSelection}`;
  } else if (playerSelection === computerSelection) {
    return `It's a draw, both picked ${computerSelection}`;
  }
  computerScore = computerScore + 1;
  return `You Lose! ${toTitleCase(computerSelection)} beats ${playerSelection}`;
}

const showRound = document.getElementById('showRound');
const showScores = document.getElementById('showScores');
const showFinalResult = document.getElementById('showFinalResult');
const buttons = document.querySelectorAll('.btn');
const tryAgainDiv = document.getElementById('tryAgain');
const tryAgainButton = document.getElementById('tryAgainButton');

function hideButtons(buttons) {
  buttons.forEach((btn) => {
    btn.style.visibility = 'hidden';
  });
}

function showButtons(buttons) {
  buttons.forEach((btn) => {
    btn.style.visibility = 'visible';
  });
}

function finalScore() {
  if (playerScore === 5) {
    showScores.innerText = '';
    showFinalResult.innerText = `Final score:
  Player: ${playerScore}    Computer: ${computerScore}
  You won! Congrats!`;
    hideButtons(buttons);
  } else if (computerScore === 5) {
    showScores.innerText = '';
    showFinalResult.innerText = `Final score:
  Player: ${playerScore}    Computer: ${computerScore}
  Computer won! Better luck next time.`;
    hideButtons(buttons);
  }
}

function showTryAgain() {
  if (playerScore === 5 || computerScore === 5) {
    tryAgainButton.removeAttribute('hidden');
  }
}

buttons.forEach((currentbtn) => {
  currentbtn.addEventListener('click', (e) => {
    const roundResult = playRound(e.target.innerHTML, getComputerChoice());
    showRound.innerText = roundResult;
    const scoreContent = `Current score:
   Player: ${playerScore}    Computer: ${computerScore}`;
    showScores.innerText = scoreContent;
    finalScore();
    showTryAgain();
  });
});

tryAgainButton.addEventListener('click', (e) => {
  showButtons(buttons);
  tryAgainButton.setAttribute('hidden', true);
  playerScore = 0;
  computerScore = 0;
  showRound.innerText = '';
  showScores.innerText = '';
  showFinalResult.innerText = '';
});
