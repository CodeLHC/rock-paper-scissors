const rock = 'rock';
const scissors = 'scissors';
const paper = 'paper';

const choices = [rock, paper, scissors];

let playerScore = 0;
let computerScore = 0;

const toTitleCase = (word) => word[0].toUpperCase() + word.slice(1);

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
  // seperate into variable to make it easier to read
}
//const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (
    (playerSelection === rock && computerSelection === scissors) ||
    (playerSelection === paper && computerSelection === rock) ||
    (playerSelection === scissors && computerSelection === paper)
  ) {
    playerScore = playerScore + 1;
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
buttons.forEach((currentbtn) => {
  currentbtn.addEventListener('click', (e) => {
    const roundResult = playRound(e.target.innerHTML, getComputerChoice());

    showRound.innerText = roundResult;
    const scoreContent = `Current score:
   Player: ${playerScore}    Computer: ${computerScore}`;
    showScores.innerText = scoreContent;
    if (playerScore === 5) {
      showFinalResult.innerText = 'You won! Congrats!';
    } else if (computerScore === 5) {
      showFinalResult.innerText = 'Computer won! Better luck next time.';
    }
  });
});
