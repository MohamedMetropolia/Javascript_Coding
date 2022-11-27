'use strict';

let n1 = Number(prompt('Enter number 1.'));
let n2 = Number(prompt('Enter number 2.'));
let n3 = Number(prompt('Enter number 3.'));

let sum = (n1 + n2 + n3);
let product = n1 * n2 * n3;
let avg = (sum / 3).toFixed(2);
document.getElementById('target').innerHTML = `The sum of the numbers is ${sum},
                                              The product of the numbers is ${product},
                                              The average of the numbers is ${avg}.`;