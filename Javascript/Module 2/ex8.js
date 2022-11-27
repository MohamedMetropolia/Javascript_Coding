'use strict';

function concat(names) {
  let word = '';
  for (let i = 0; i < names.length; i++) {
    word += names[i];
  }
  return word;
}

const names = concat(['Johnny', 'DeeDee', 'Joey', 'Marky']);
document.querySelector('#target').innerHTML += `${names}`;