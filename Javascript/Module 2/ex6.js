'use strict';
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

let num_rolled = 0;
while (num_rolled !== 6) {
  num_rolled = rollDice();
  document.querySelector('#target').innerHTML += `<li>${num_rolled}</li>`;
}