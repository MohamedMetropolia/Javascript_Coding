'use strict';

const answer = confirm('Do you want to calculate the square root of a number?');

if (!answer) {
  document.getElementById(
      'target').innerHTML = `The square root could not be calculated.`;
}

if (answer) {
  let num = Number(prompt('Enter a number to calculate the square root.'));
  if (num > 0) {
    let root = Math.sqrt(num);
    document.getElementById(
        'target').innerHTML = `Square root of ${num} is ${root.toFixed(2)}`;
  } else {
    document.getElementById(
        'target').innerHTML = `The square root could not be calculated.`;
  }
}