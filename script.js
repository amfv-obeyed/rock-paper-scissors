
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3)
    if (computerChoice == 0) {
        return "rock"
    } if (computerChoice == 1) {
        return "paper"
    } if (computerChoice == 2) {
        return "scissors"
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper or Scissors?")
    return humanChoice
}

function playRound(humanChoice, computerChoice) {
    humanChoice == humanChoice.toLowerCase()
     if (humanChoice == computerChoice) {
        console.log('Tie!')
     } else if (computerChoice == 'rock') {
        if (humanChoice == 'scissors') {
            console.log('you lose! rock beats scissors!');
        } else if (humanChoice == 'paper') {
            console.log('you win! paper beats rock!');
        } else {
            console.log('invalid choice');
        } 
    } 
    else if (computerChoice = 'paper') {
            if (humanChoice == 'rock') {
                console.log('you lose! paper beats rock!');
            } else if (humanChoice == 'scissors') {
                console.log('you win! scissors beats paper!');
            } else {
                console.log('invalid choice');
            }
        } 
        else if (computerChoice == 'scissors') {
            if (humanChoice == 'rock') {
                console.log('you win! rock beats scissors!');
            } else if (humanChoice == 'paper') {
                console.log('you lose! scissors beats paper!');
            } else {
                console.log('invalid choice');
            }
        }    
}

function playGame() {
    const humanSelection = getHumanChoice()
    const computerSelection = getComputerChoice()
    for (let i = 0; i < 5; i++) {
        playRound(humanSelection, computerSelection)
        console.log()
        console.log()
        console.log()
}
playGame()