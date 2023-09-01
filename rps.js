let playerScore = 0
let computerScore = 0

// Create a function to randomly generate a choice for the computer using Math.random()
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;

    if (computerChoice === 1) {
        computerChoice = 'ROCK';
        console.log(computerChoice);
        return computerChoice;
    } else if (computerChoice === 2) {
        computerChoice = 'PAPER';
        console.log(computerChoice);
        return computerChoice;
    } else {
        computerChoice = 'SCISSORS';
        console.log(computerChoice);
        return computerChoice;
    }
}

// Create a function to generate user's input to being case insensitive
function getUserChoice(weapon){
    return weapon.toUpperCase();
}

// Play one round of RPS
function playRound (computerSelection, playerSelection){
    console.log(computerSelection);
    console.log(playerSelection);
    if (computerSelection === 'ROCK' && playerSelection === 'ROCK' || computerSelection === 'PAPER' && playerSelection === 'PAPER' || computerSelection === 'SCISSORS' && playerSelection === 'SCISSORS'){
        return('It is a tie');
    }
    else if (computerSelection === 'ROCK' && playerSelection === 'SCISSORS' || computerSelection === 'PAPER' && playerSelection === 'ROCK' || computerSelection === 'SCISSORS' && playerSelection === 'PAPER'){
        computerScore++;
        return('Computer wins!');
    }
    else {
        playerScore++;
        return('Player wins!');

    }
}

function game(){
    let playerSelection = prompt('Make your selection', 'Rock');
    playerSelection = getUserChoice(playerSelection);
    let computerSelection = getComputerChoice();
    console.log(`User selects ${playerSelection}`);
    console.log(`Computer selects ${computerSelection}`);
    let roundResult = playRound(computerSelection, playerSelection);
    console.log(roundResult);
    console.log(playerScore);
    console.log(computerScore);
}

game();





























