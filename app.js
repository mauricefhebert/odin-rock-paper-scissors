'use strict';

function computerPlay() {
  const randomNumber = Math.floor(Math.random() * 3);
  const computerChoice = ['rock', 'paper', 'scissors'];
  return computerChoice[randomNumber];
}

function playRound(playerSelection, computerSelection) {}

const playerSelection = 'rock';
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
