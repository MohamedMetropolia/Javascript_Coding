'use strict';
let p;
let num_list = [];
while (true) {
  p = prompt('Please, enter a number');
  if (!num_list.includes(p)) {
    num_list.push(p);
  } else {
    break;
  }
}
num_list.sort(function(a, b) {
  return a - b;
});
for (let i = 0; i < num_list.length; i++) {
  console.log(num_list[i]);
}