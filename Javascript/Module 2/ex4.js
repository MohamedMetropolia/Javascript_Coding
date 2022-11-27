'use strict';
let p;
let num_list = [];
while (true) {
  p = prompt('Please, enter a number');
  if (p != 0) {
    num_list.push(p);
  } else {
    break;
  }
}
num_list.sort();
num_list.reverse();
for (let i = 0; i < num_list.length; i++) {
  console.log(num_list[i]);
}