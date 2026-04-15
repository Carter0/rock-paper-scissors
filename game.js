
function getComputerChoice() {
    const randomNumber = Math.random();
    if (randomNumber < 0.3333) {
        return "rock"
    } else if (randomNumber >= 0.3333 || randomNumber <= 0.6667) {
        return "scissors"
    } else {
        return "paper"
    }
}

function getHumanChoice() {
    const result = prompt("Enter either rock, paper, or scissors");
    return result;
}

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


function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const result = playRound(humanSelection, computerSelection);
        console.log(result);
    }
}

playGame();

console.log("player score is: ");
console.log(humanScore);

console.log("computer score is: ");
console.log(computerScore);
