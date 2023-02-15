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

const playerScoreElement = document.querySelector(".playerScore");
let playerScore = 0;

const compScoreElement = document.querySelector(".compScore");
let computerScore = 0;

playerScoreElement.innerHTML = playerScore;
compScoreElement.innerHTML = computerScore;

const header = document.querySelector(".header");

let playerWin = false;
let computerWin = false;
let gameEnd = false;

function checkWin () {
    if (playerScore == 5) {
        playerWin = true;
        return playerWin;
    } else if (computerScore == 5) {
        computerWin = true;
        return computerWin;
    } else {
        playerWin = false;
        computerWin = false;
    }
}

function displayResult (playerSelection, computerSelection) {
    if (gameEnd == true) {
        return;
    }
    outer: if (win == 1) {
        playerScore ++;
        playerScoreElement.innerHTML = playerScore;
        if (checkWin()) {
            message = "Congratulations! You won five rounds!"
            header.innerHTML = message;
            computerScore = 0;
            playerScore = 0;
            gameEnd = true;
            break outer;
        }
        message = `${toFirstUpper(playerSelection)} beats ${computerSelection}.`;
        header.innerHTML = message;
    } else if (win == 0) {
        message = `You draw.`;
        header.innerHTML = message;
    } else {
        computerScore ++;
        compScoreElement.innerHTML = computerScore;
        if (checkWin()) {
            message = "Oh no, you lost!";
            header.innerHTML = message;
            computerScore = 0;
            playerScore = 0;
            gameEnd = true;
            break outer;
        }
        message = `${toFirstUpper(computerSelection)} beats ${playerSelection}.`;
        header.innerHTML = message;
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

//resets score display after game end
const reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
    playerScoreElement.innerHTML = "0";
    compScoreElement.innerHTML = "0";
    gameEnd = false;
})

// takes a lowercase word and changes the first letter to uppercase
function toFirstUpper(choice) {
    let firstChar = choice.substring(0, 1);
    let restOfString = choice.slice(1);
    firstChar = firstChar.toUpperCase();
    return firstChar + restOfString;
}

let message = "";

// runs a full game of five rounds
//game();