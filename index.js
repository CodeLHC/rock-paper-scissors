const rock = 'rock'
const scissors = 'scissors'
const paper = 'paper'

let playerScore = 0
let computerScore = 0

const choices = [rock, paper, scissors]

const toTitleCase = (word) => word[0].toUpperCase() + word.slice(1)

function getComputerChoice () {
  return choices[(Math.floor(Math.random() * choices.length))]
}

function playRound (playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase()
  if ((playerSelection === rock && computerSelection === scissors) || (playerSelection === paper && computerSelection === rock) || (playerSelection === scissors && computerSelection === paper)) {
    playerScore = playerScore+1
    return `You Win! ${toTitleCase(playerSelection)} beats ${computerSelection}`
  } else if (playerSelection === computerSelection) {
  
    return `It's a draw, both picked ${computerSelection}`
  }
  computerScore = computerScore+1
  return `You Lose! ${toTitleCase(computerSelection)} beats ${playerSelection}`
}
const computerSelection = getComputerChoice()


function game () {
for (let i = 0; i<5; i++){
  let playerSelection = prompt("Rock, Paper or Scissors?")

 const result = playRound (playerSelection, computerSelection)
  console.log(`${result}
  Current score:
  Player: ${playerScore}    Computer: ${computerScore}`)
}

if(playerScore > computerScore){
  console.log("You won! Congrats")
} else if (computerScore === playerScore){
  console.log("It's a draw!")
}
else if (computerScore> playerScore){console.log("Computer won! Better luck next time")}
}



console.log(game())
