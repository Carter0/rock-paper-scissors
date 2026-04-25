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

const buttons = document.querySelectorAll("button");


// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener("click", (event) => {
        const buttonName = event.target.textContent;
        const computerSelection = getComputerChoice();

        switch (buttonName) {
            case "Rock":
                const result1 = playRound("rock", computerSelection);
                console.log(result1);
                break;

            case "Scissors":
                const result2 = playRound("scissors", computerSelection);
                console.log(result2);
                break;

            case "Paper":
                const result3 = playRound("paper", computerSelection);
                console.log(result3);
                break;

            default:
                console.log("some other button clicked");
        }
    });
});