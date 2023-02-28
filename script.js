
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

let computerChoice = getComputerChoice();
let playerChoice = prompt("Rock, Paper, or Scissors?");

function compareSelection(playerSelection, computerSelection) {
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