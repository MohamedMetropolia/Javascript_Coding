'use strict';
let doggies = [];
for (let i = 0; i < 6; i++) {
  doggies.push(prompt(`Please, enter the name of dog #${i + 1}`));
}
doggies.sort();
doggies.reverse();
for (let j = 0; j < doggies.length; j++) {
  document.querySelector('#target').innerHTML += `<li>${doggies[j]}</li>`;
}