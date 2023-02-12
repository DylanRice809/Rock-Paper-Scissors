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

let win;

// provides main function for playing a round
function playRound (playerSelection, computerSelection) {
    //Compare player choice to the computer's choice, and return a string displaying the results
    if (playerSelection == "rock") {
        switch (true) {
            case (computerSelection == "scissors"):
                return 1
            case (computerSelection == "paper"):
                return -1;
            default:
                return 0;
        }
    } else if (playerSelection == "paper") {
        switch (true) {
            case (computerSelection == "rock"):
                return 1;
            case (computerSelection == "scissors"):
                return -1;
            default:
                return 0;
        }
    } else if (playerSelection == "scissors") {
        switch (true) {
            case (computerSelection == "paper"):
                return 1;
            case (computerSelection == "rock"):
                return -1;
            default:
                return 0;
        }
    } else {
        return (win = null);
    }
}

// create a function to play five rounds to make up a game
function game () {
    for (let i = 0; i < 5; i++) {
        // recieves user's choice for input
        let playerChoice = prompt("Choose: Rock, Paper, or Scissors");
        playerChoice = playerChoice.toLowerCase();
        let computerChoice = getComputerChoice(getRandom());
        // plays a round
        console.log(playRound(playerChoice, computerChoice));
    }
}

function displayResult (playerSelection, computerSelection) {
    if (win == 1) {
        message = `You win, ${playerSelection} beats ${computerSelection}.`;
        victory.innerHTML = message;
    } else if (win == 0) {
        message = `You draw.`;
        victory.innerHTML = message;
    } else {
        message = `You lose, ${playerSelection} beats ${computerSelection}.`;
        victory.innerHTML = message;
    }
}

let playerChoice = "";
let computerChoice = "";

//runs a game when rock button pressed
const rock = document.querySelector(".rock");
rock.addEventListener("click", () => {
    playerChoice = "rock";
    computerChoice = getComputerChoice(getRandom());
    win = playRound(playerChoice, computerChoice);
    console.log(win)
    displayResult(playerChoice, computerChoice);
})

//runs a game when paper button pressed
const paper = document.querySelector(".paper");
paper.addEventListener("click", () => {
    playerChoice = "paper";
    computerChoice = getComputerChoice(getRandom());
    win = playRound(playerChoice, computerChoice);
    console.log(win)
    displayResult(playerChoice, computerChoice);
})

//runs a game when scissors button pressed
const scissors = document.querySelector(".scissors");
scissors.addEventListener("click", () => {
    playerChoice = "scissors";
    computerChoice = getComputerChoice(getRandom());
    win = playRound(playerChoice, computerChoice);
    console.log(win)
    displayResult(playerChoice, computerChoice);
})

const victory = document.querySelector(".results");
let message = "";

// runs a full game of five rounds
//game();