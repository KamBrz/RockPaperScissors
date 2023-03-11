//Rock-Paper-Scissors game
//User inputs choice through a prompt
//Computer inputs choice randomly based on array [rock,paper,scissors]
//Choices get compared with a win/lose/draw result
//Results get added up over 5 games
//Final result displayed to the player

//User inputs choice through a prompt
let playerSelection = prompt("Choose: Rock, Paper, or Scissors?").toLowerCase();

//Randomise computer selection based on array & return item from an array
function getComputerChoice() {
    let arrChoice = ["rock","paper","scissors"];
    let randomise = Math.floor(Math.random()*arrChoice.length);
    return returnItem = arrChoice[randomise];
}

//Compare player and computers hands

function compareHands () {
    const computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
        return ("It's a draw!");
    } else if (
        playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "scissors" && computerSelection === "paper"
    ){
        return (`You win! ${playerSelection} beats ${computerSelection}!`)
    } else {
        return (`You lose! ${computerSelection} beats ${playerSelection}!`)
    }
}