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

function validateInput(str) {
    let formattedString = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

    if (str === "") {
        console.log("Player did not decide on a choice. Skipping game.");
    } else if (!str) {
        console.log("Game has been canceled. Skipping game.");
    } else if (!choices.includes(formattedString)) {
        console.log("Player gave an invalid choice. Skipping game.");
    } else {
        return formattedString;
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

    recordGameResults(matchResult);
    return matchResult;
}

function recordGameResults(result) {
    if (result == playerWin) { playerWins++ }
    if (result == computerWin) { computerWins++ }
    if (result == tie) { ties++ }
}

function printOverallResult(round) {
    console.log("[]=== MATCH RESULTS ===[]]");
    console.log(`Rounds played: ${round}`);
    console.log(`Ties: ${ties}`);
    console.log(`Player wins: ${playerWins}`);
    console.log(`Computer wins: ${computerWins}`);
}

function game(rounds) {
    for (let i = 0; i < rounds; i++) {
        let promptPlayer = prompt("Rock, Paper, or Scissor");
        let computerChoice = getComputerChoice();
        let playerChoice = validateInput(promptPlayer);

        if (choices.includes(playerChoice)) {
            playRound(playerChoice, computerChoice);
        }
    }
    printOverallResult(rounds);
}

game(rounds);