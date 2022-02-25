// Goal: To play a simple game of RPS vs. the computer
let userScore = 0;
let computerScore = 0;
//write a simple function that returns the computer's choice at random
function computerPlay(){
    const computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice === 1){
        return 'Rock';
    } else if (computerChoice === 2){
        return 'Paper';
    } else (computerChoice === 3)
        return 'Scissors';
    }
    

function playRound(playerSelection, computerSelection){
    if (
        playerSelection === 'ROCK' && computerSelection === 'ROCK' ||
        playerSelection === 'PAPER' && computerSelection === 'PAPER' ||
        playerSelection === 'SCISSORS' && computerSelection === 'SCISSORS'
        )
        {    
        return 'Tie';
    } else if (
        playerSelection === 'ROCK' && computerSelection === 'PAPER' ||
        playerSelection === 'PAPER' && computerSelection === 'SCISSORS' ||
        playerSelection === 'SCISSORS' && computerSelection === 'ROCK'
        )
    {
        userScore++;
        return `You lose! ${playerSelection} loses to ${computerSelection}!`;
    } else (
        playerSelection === 'ROCK' && computerSelection === 'SCISSORS' ||
        playerSelection === 'PAPER' && computerSelection === 'ROCK' ||
        playerSelection === 'SCISSORS' && computerSelection === 'PAPER'
        )
        computerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}!`;
}
const playerSelection = prompt('What is your weapon of choice?').toUpperCase();
const computerSelection = computerPlay().toUpperCase();
console.log(playRound(playerSelection, computerSelection));
//return a string that declares winner of round "You lose! ${} beats ${}"
//we want playerSelection parameter to be case insensitive .toUpperCase()

function game() {
 playRound(playerSelection, computerSelection);
 for(let i = 0; i < 5; i++);
}  
console.log(game());


































