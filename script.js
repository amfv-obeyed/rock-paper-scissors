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





