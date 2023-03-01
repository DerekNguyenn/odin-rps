
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
const playerWin = "Player win";
const computerWin = "Computer win";
const tie = "Tie";

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
    let matchResult;

    if (playerSelection == "Rock" && computerSelection == "Scissors") {
        matchResult = playerWin;
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        matchResult = playerWin;
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        matchResult = playerWin;
    } else if (playerSelection == computerSelection) {
        matchResult = tie;
    } else {
        matchResult = computerWin;
    }

    // Results for a single match
    console.log(`Player Choice: ${playerSelection}`);
    console.log(`PC Choice: ${computerSelection}`);
    console.log(`Result: ${matchResult}`);

    return matchResult;
}

// if (choices.includes(playerChoice)) {
//     let result = playRound(playerChoice, computerChoice);
//     console.log(`Result: ${result}`);
//     console.log(`Player Choice: ${playerChoice}`);
//     console.log(`PC Choice: ${computerChoice}`);
// }