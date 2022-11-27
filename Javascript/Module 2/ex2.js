'use strict';
const p = prompt('Please, enter the amount of participants');
let p_list = [];
for (let i = 0; i < p; i++) {
  p_list.push(prompt(`Please, enter the name of participant #${i + 1}`));
}
p_list.sort();
for (let j = 0; j < p_list.length; j++) {
  document.querySelector('#target').innerHTML += `<li>${p_list[j]}</li>`;
}