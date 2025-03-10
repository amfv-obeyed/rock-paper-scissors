
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

let computerScore = 0
let humanScore = 0

function playRound(humanChoice, computerChoice) {
    (humanChoice == humanChoice.toLowerCase())
     if (humanChoice == computerChoice) {
        console.log('Tie!')
        return 'tie'
     } else if (computerChoice == 'rock') {
        if (humanChoice == 'paper') {
            console.log('you win! paper beats rock');
            humanScore++
            return 'win'
        } else if (humanChoice == 'scissors') {
            console.log('you lose! rock beats scissors!');
            computerScore++
            return 'loss'
        } else {
            console.log('invalid choice');
            return 'invalid'
        } 
    } 
    else if (computerChoice == 'paper') {
            if (humanChoice == 'rock') {
                console.log('you lose! paper beats rock!');
                computerScore++
                return 'loss'
            } else if (humanChoice == 'scissors') {
                console.log('you win! scissors beats paper!');
                humanScore++
                return 'win'
            } else {
                console.log('invalid choice');
                return 'invalid'
            }
        } 
        else if (computerChoice == 'scissors') {
            if (humanChoice == 'rock') {
                console.log('you win! rock beats scissors!');
                humanScore++
                return 'win'
            } else if (humanChoice == 'paper') {
                console.log('you lose! scissors beats paper!');
                computerScore++
                return 'loss'
            } else {
                console.log('invalid choice');
                return 'invalid'
            }
        }    
}


function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()
        console.log('--------------')
        playRound(humanSelection, computerSelection)
        console.log('Human Choice', humanSelection)
        console.log('Computer Choice', computerSelection) 
        console.log('Human Score', humanScore) 
        console.log('Computer Score', computerScore)
} 
if (humanScore > computerScore) {
    console.log('game end! you win!')
} else if (computerScore > humanScore) {
    console.log('game end! you lose! try again!')
} else {
    console.log('tie!')
}

}
playGame()