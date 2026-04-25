/* Game Logic */



function getComputerChoice() {
    const randomNumber = Math.random();
    if (randomNumber < 0.3333) {
        return "rock"
    } else if (randomNumber >= 0.3333 && randomNumber <= 0.6667) {
        return "scissors"
    } else {
        return "paper"
    }
}

// function getHumanChoice() {
//     const result = prompt("Enter either rock, paper, or scissors");
//     return result;
// }

function playRound(humanChoice, computerChoice) {
    let lowerCase = humanChoice.toLowerCase();

    if (computerChoice == "rock") {
        if (lowerCase == "scissors") {
            computerScore += 1;
            return "You lose! Rock beats scissors."
        } else if (lowerCase == "rock") {
            return "It's a tie!"
        } else if (lowerCase == "paper") {
            humanScore += 1;
            return "You win! Paper beats rock";
        }
    }

    if (computerChoice == "scissors") {
        if (lowerCase == "scissors") {
            return "It's a tie!"
        } else if (lowerCase == "rock") {
            humanScore += 1;
            return "You win! rock beats scissors";
        } else if (lowerCase == "paper") {
            computerScore += 1;
            return "You lose! scissors beats paper."
        }
    }

    if (computerChoice == "paper") {
        if (lowerCase == "scissors") {
            humanScore += 1;
            return "You win! scissors beats paper";
        } else if (lowerCase == "rock") {
            computerScore += 1;
            return "You lose! paper beats rock."
        } else if (lowerCase == "paper") {
            return "It's a tie!";
        }
    }
}

let humanScore = 0;
let computerScore = 0;


/* Interactivity Work */

const rockButton = document.querySelector("#rock-button");
const scissorsButton = document.querySelector("#scissors-button");
const paperButton = document.querySelector("#paper-button");

rockButton.addEventListener("click", (event) => {
    const computerSelection = getComputerChoice();
    console.log(`computer choice is:  ${computerSelection}`);
    const result = playRound("rock", computerSelection);
    console.log(result);

});