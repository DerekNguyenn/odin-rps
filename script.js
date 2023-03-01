
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1

    switch (computerChoice) {
        case 1:
            return("Rock");
        case 2:
            return("Paper");
        case 3:
            return("Scissors");
    }
}

const choices = ["Rock", "Paper", "Scissors"];
let promptPlayer = prompt("Rock, Paper, or Scissor")
let playerChoice = validateInput(promptPlayer);
let computerChoice = getComputerChoice();

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
    if (playerSelection == "Rock" && computerSelection == "Scissors") {
        console.log("Player win");
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        console.log("Player win");
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        console.log("Player win");
    } else if (playerSelection == computerSelection) {
        console.log("Tie");
    } else {
        console.log("PC win");
    }
}

if (choices.includes(playerChoice)) {
    playRound(playerChoice, computerChoice);
    console.log(`Player Choice: ${playerChoice}`);
    console.log(`PC Choice: ${computerChoice}`);
  }