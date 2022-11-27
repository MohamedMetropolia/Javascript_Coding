'use strict';

const sides = prompt('Please, enter the number of sides');

function rollDice(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

let num_rolled = 0;
while (num_rolled != sides) {
  num_rolled = rollDice(sides);
  document.querySelector('#target').innerHTML += `<li>${num_rolled}</li>`;
}