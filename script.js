
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1

    switch (computerChoice) {
        case 1:
            return ("Rock");
        case 2:
            return ("Paper");
        case 3:
            return ("Scissors");
    }
}

const rounds = prompt("How many rounds would you like to play?", 5);
const choices = ["Rock", "Paper", "Scissors"];

// Game scores
let playerWins = 0;
let computerWins = 0;
let ties = 0;

// Game outcomes
let playerWin;
let computerWin;
let tie;

function formatString(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function validateInput(str) {
    if (str === "") {
        console.log("Player did not decide on a choice.");
    } else if (!str) {
        console.log("Game has been canceled.");
    } else if (!choices.includes(formatString(str))) {
        console.log("Player gave an invalid choice.");
    } else {
        return formatString(str);
    }
}

function playRound(playerSelection, computerSelection) {
    const playerWin = "Player win";
    const computerWin = "Cmputer win";
    const tie = "Tie";

    if (playerSelection == "Rock" && computerSelection == "Scissors") {
        return playerWin;
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        return playerWin;
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        return playerWin;
    } else if (playerSelection == computerSelection) {
        return tie;
    } else {
        return computerWin;
    }
}

if (choices.includes(playerChoice)) {
    let result = playRound(playerChoice, computerChoice);
    console.log(`Result: ${result}`);
    console.log(`Player Choice: ${playerChoice}`);
    console.log(`PC Choice: ${computerChoice}`);
}