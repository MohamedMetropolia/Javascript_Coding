'use strict';
let num = [];
for (let i = 0; i < 5; i++) {
  num.push(prompt('Enter a number'));
}

for (let j = 5; j >= 0; j--) {
  console.log(num[j]);
}
