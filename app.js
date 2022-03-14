'use strict';
//? This is use to check the winner of the game instead of a if...else
const winMap = { rock: 'scissors', scissors: 'paper', paper: 'rock' };

//? Track user and ai score
let playerScore = 0;
let computerScore = 0;

//? Generate a random choice for the computer player
function computerPlay() {
  const randomNumber = Math.floor(Math.random() * 3);
  const computerChoice = ['rock', 'paper', 'scissors'];
  return computerChoice[randomNumber];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log('The game is Tie');
    playerScore++;
    computerScore++;
  }
  //? Check if the player index of the player selection is equal to a win combination
  else if (winMap[playerSelection] === computerSelection) {
    console.log(`You win this round! ${playerSelection} beat ${computerSelection}`);
    playerScore++;
  } else {
    console.log(`You lose this round! ${computerSelection} beat ${playerSelection}`);
    computerScore++;
  }
}

// function game(round) {
//   for (let i = 0; i < round; i++) {
//     const playerSelection = prompt('Choose between rock, paper or scissors').toLowerCase();
//     const computerSelection = computerPlay();
//     console.log(playRound(playerSelection, computerSelection));
//   }
//   console.log('Player Score ' + playerScore);
//   console.log('Computer Score ' + computerScore);
//   playerScore > computerScore ? console.log('You win the game!') : console.log('You lose the game!');
// }

// game(5);
