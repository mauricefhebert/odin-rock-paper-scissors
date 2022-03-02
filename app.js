'use strict';
//? This is use to check the winner of the game instead of a if...else
const winMap = { rock: 'scissors', scissors: 'paper', paper: 'rock' };
function computerPlay() {
  const randomNumber = Math.floor(Math.random() * 3);
  const computerChoice = ['rock', 'paper', 'scissors'];
  return computerChoice[randomNumber];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log('The game is Tie');
  } else if (winMap[playerSelection] === computerSelection) {
    console.log(`You win this round! ${playerSelection} beat ${computerSelection}`);
  } else {
    console.log(`You lose this round! ${computerSelection} beat ${playerSelection}`);
  }
}
const playerSelection = prompt('Choose between rock, paper or scissors').toLowerCase();
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
