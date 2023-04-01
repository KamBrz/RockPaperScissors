//Rock-Paper-Scissors game
//User inputs choice through a prompt
//Computer inputs choice randomly based on array [rock,paper,scissors]
//Choices get compared with a win/lose/draw result
//Results get added up over 5 games
//Final result displayed to the player



//Randomise computer selection based on array & return item from an array
// function getComputerChoice() {
//     let arrChoice = ["rock","paper","scissors"];
//     let randomise = Math.floor(Math.random()*arrChoice.length);
//     return randomWord = arrChoice[randomise];
// }

// //Compare player and computers hands

// function compareHands (playerSelection) {
//     const computerSelection = getComputerChoice();
//     if (playerSelection === computerSelection) {
//         return ("It's a draw!");
//     } else if (
//         playerSelection === "rock" && computerSelection === "scissors" ||
//         playerSelection === "paper" && computerSelection === "rock" ||
//         playerSelection === "scissors" && computerSelection === "paper"
//     ){
//         return (`You win! ${playerSelection} beats ${computerSelection}!`)
//     } else {
//         return (`You lose! ${computerSelection} beats ${playerSelection}!`)
//     }
// }

// const totalRounds = 5;
// let playerScore = 0;
// let computerScore = 0;
// let drawScore = 0; 


// function game() {
//     for (let i = 0; i < 99; i++) {
//         const playerSelection = prompt("Choose: Rock, Paper, or Scissors?").toLowerCase();
//         const roundResult = compareHands(playerSelection);
//         if (roundResult.startsWith ("You win")) {
//             playerScore++;
//         } else if (roundResult.startsWith("You lose")) {
//             computerScore++;
//         } else {
//             drawScore++;
//         }
//         console.log(`User score: ${playerScore}`);
//         console.log(`Computer score: ${computerScore}`);
//         console.log(`Draws: ${drawScore}`);
//     }

//     if (playerScore > computerScore) {
//         console.log(`You win ${playerScore}:${computerScore}`);
//     } else if (computerScore > playerScore) {
//         console.log(`You lose ${computerScore}:${playerScore}`)
//     } else {
//         console.log("It's a draw!")
//     }
// }

// game();