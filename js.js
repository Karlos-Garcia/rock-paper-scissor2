function getComputerChoice () {
    let number = Math.ceil(Math.random() * 3);
    
    if (number == 1) {
        return ("rock");
    }
    else if (number == 2) {
        return ("paper");
    }
    else {
        return ("scissor");
    }
}

function getHumanChoice () {
    let choice = prompt("rock, paper, or scissor?");
    let insensitiveChoice = choice.toLowerCase();
    if (insensitiveChoice == "rock") {
        return ("rock");
    }
    else if (insensitiveChoice == "paper") {
        return ("paper");
    }
    else if (insensitiveChoice == "scissor") {
        return ("scissor");
    }
}

function playGame () {
    let humanScore = 0;
    let computerScore = 0;

    function playRound (humanChoice, computerChoice) {
        if (computerChoice == "paper" && humanChoice == "scissor" || computerChoice == "rock" && humanChoice == "paper" || computerChoice == "scissor" && humanChoice == "rock") {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`)
            humanScore++;
            console.log(`computer: ${computerScore}`)
            console.log(`human: ${humanScore}`)
            return humanScore;
            return computerScore;
        }
        else if (computerChoice == "rock" && humanChoice == "scissor" || computerChoice == "paper" && humanChoice == "rock" || computerChoice == "scissor" && humanChoice == "paper") {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
            computerScore++
            console.log(`computer: ${computerScore}`)
            console.log(`human: ${humanScore}`)
            return humanScore;
            return computerScore;
        }
        else {
            console.log("It's a tie")
            console.log(`computer: ${computerScore}`)
            console.log(`human: ${humanScore}`)
            return humanScore;
            return computerScore;
        }
    }

    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
}

playGame()