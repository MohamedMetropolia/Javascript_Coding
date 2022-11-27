'use strict';

let draw;
let studentName = prompt('Please enter your name:');
let choice = Math.floor(Math.random() * 4 + 1);

switch (choice) {
  case 1:
    draw = 'Gryffindor';
    break;

  case 2:
    draw = 'Ravenclaw';
    break;

  case 3:
    draw = 'Hufflepuff';
    break;

  case 4:
    draw = 'Slytherin';
    break;
}

document.getElementById(
    'target').innerHTML = `${studentName}, you belong to house ${draw}.`;