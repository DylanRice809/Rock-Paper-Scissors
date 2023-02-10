// selects a random number between 1 and 3
function getRandom () {
    return Math.floor(Math.random()*3) + 1;
}

// chooses what the computer will play
function getComputerChoice (number) {
    switch (true) {
        case (number == 1):
            return "rock";
        case (number == 2):
            return "paper";
        case (number == 3):
            return "scissors";    
    }
}

// recieves user's choice for input
let playerChoice = prompt("Choose: Rock, Paper, or Scissors");
playerChoice = playerChoice.toLowerCase();

// provides main function for playing a round
function playRound (playerSelection, computerSelection) {
    //Compare player choice to the computer's choice
    if (playerSelection == "rock") {
        switch (true) {
            case (computerSelection == "scissors"):
                return `You win! ${playerSelection} beats ${computerSelection}.`;
            case (computerSelection == "paper"):
                return `You lose! ${computerSelection} beats ${playerSelection}.`;
            default:
                return `It's a draw. You both chose ${playerSelection}.`;
        }
    } else if (playerSelection == "paper") {
        switch (true) {
            case (computerSelection == "rock"):
                return `You win! ${playerSelection} beats ${computerSelection}.`;
            case (computerSelection == "scissors"):
                return `You lose! ${computerSelection} beats ${playerSelection}.`;
            default:
                return `It's a draw. You both chose ${playerSelection}.`
        }
    } else if (playerSelection == "scissors") {
        switch (true) {
            case (computerSelection == "paper"):
                return `You win! ${playerSelection} beats ${computerSelection}.`;
            case (computerSelection == "rock"):
                return `You lose! ${computerSelection} beats ${playerSelection}.`;
            default:
                return `It's a draw. You both chose ${playerSelection}.`
        }
    } else {
        return "You don't seem to have entered anything";
    }
}

// plays a round
console.log(playRound(playerChoice, getComputerChoice(getRandom())));