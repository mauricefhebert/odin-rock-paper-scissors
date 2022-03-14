'use strict';
const message = document.querySelector('.message');
const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');

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
    message.textContent = 'The game is Tie';
    playerScore++, computerScore++;
  }
  //? Check if the player index of the player selection is equal to a win combination
  else if (winMap[playerSelection] === computerSelection) {
    message.textContent = `You win this round! ${playerSelection} beat ${computerSelection}`;
    playerScore++;
  } else {
    message.textContent = `You lose this round! ${computerSelection} beat ${playerSelection}`;
    computerScore++;
  }
  document.querySelector('.player-score').textContent = playerScore;
  document.querySelector('.computer-score').textContent = computerScore;
}

document.querySelectorAll('.btn').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    let playerSelection;
    if (e.currentTarget.textContent == 'rock') playerSelection = 'rock';
    if (e.currentTarget.textContent == 'paper') playerSelection = 'paper';
    if (e.currentTarget.textContent == 'scissors') playerSelection = 'scissors';
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
  });
});
