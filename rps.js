// Create a function to randomly generate a choice for the computer using Math.random()
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;

    if (computerChoice === 1) {
        console.log(`Computer chooses Rock`);
    } else if (computerChoice === 2) {
        console.log('Computer chooses Paper');
    } else {
        console.log('Computer chooses Scissors');
    }
}

getComputerChoice()





























