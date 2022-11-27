'use strict';

function even(num_array) {
  const evenArray = [];
  for (let i = 0; i < num_array.length; i++) {
    if (num_array[i] % 2 === 0) {
      evenArray.push(num_array[i]);
    }
  }
  return evenArray;
}

const num_list = [2,7,4];
const even_list = even(num_list);
console.log(`Original List: ${num_list}`);
console.log(`Even List: ${even_list}`);