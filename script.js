function getComputerChoice() {
    let compAnswer = Math.floor(Math.random() * 3)
    if (compAnswer == 0) {
        return "rock"
    } if (compAnswer == 1) {
        return "paper"
    } if (compAnswer == 2) {
        return "scissors"
    }
}
console.log(getComputerChoice())

function getHumanChoice() {
    let humanAnswer = prompt("Rock, Paper or Scissors?")
    return humanAnswer
}
console.log(getHumanChoice())

let computerScore = 0
let humanScore = 0






