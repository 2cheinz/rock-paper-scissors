// Create a function to randomly generate a choice for the computer using Math.random()
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;

    if (computerChoice === 1) {
        console.log(`Computer chooses Rock`);
        return 1;
    } else if (computerChoice === 2) {
        console.log('Computer chooses Paper');
        return 2;
    } else {
        console.log('Computer chooses Scissors');
        return 3;
    }
}

function playRound (computerSelection, playerSelection){
    if (computerSelection === 1 && playerSelection === 'rock' || computerSelection === 2 && playerSelection === 'paper' || computerSelection === 3 && playerSelection === 'scissors'){
        console.log('It is a tie');
    }
    else if (computerSelection === 1 && playerSelection === 'scissors' || computerSelection === 2 && playerSelection === 'rock' || computerSelection === 3 && playerSelection === 'paper'){
        console.log('Computer wins!');
    }
    else {
        console.log('Player wins!')
    }
}

let computerSelection = getComputerChoice();
let playerSelection = 'rock';

console.log(`User selects ${playerSelection}`)
console.log(computerSelection)

playRound(computerSelection, playerSelection);





























