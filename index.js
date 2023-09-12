const rock = "rock"
const scissors = "scissors"
const paper = "paper"

const choices = [rock, paper, scissors]

const toTitleCase = (word) => word[0].toUpperCase() + word.slice(1);

function getComputerChoice(){
    // random return of rock, paper or scissors
    return choices[(Math.floor(Math.random()* choices.length))]
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
if ((playerSelection === rock && computerSelection === scissors) || (playerSelection === paper && computerSelection === rock) || (playerSelection === scissors && computerSelection === paper)) {
    return `You Win! ${toTitleCase(playerSelection)} beats ${computerSelection}`
} else if(playerSelection === computerSelection){
    return `It's a draw, both picked ${computerSelection}`
}
return `You Lose! ${toTitleCase(computerSelection)} beats ${playerSelection}`

}
const computerSelection = getComputerChoice()
const playerSelection = "rOck"


console.log(playRound(playerSelection, computerSelection))

function game(){
    //
}

