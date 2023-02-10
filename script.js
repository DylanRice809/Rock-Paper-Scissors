// selects a random number between 1 and 3
function getRandom () {
    return Math.floor(Math.random()*3) + 1;
}

// chooses what the computer will play
function getComputerChoice (number) {
    console.log(number);
    switch (true) {
        case (number == 1):
            return "Rock";
        case (number == 2):
            return "Paper";
        case (number == 3):
            return "Scissors";    
    }
}

// assigns the computer choice to a variable
let computerChoice = getComputerChoice(getRandom());
console.log(computerChoice);