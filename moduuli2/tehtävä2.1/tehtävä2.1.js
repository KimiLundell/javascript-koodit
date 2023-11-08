'use strict';
const list1 = [];
const list2 = [];

for (let i = 0; i < 5; i++) {
  const number = parseInt(prompt('Give a number.'));
  list1.push(number);
}
for (let i = 0; i < 5; i++) {
  list2.push(list1.pop());
}
console.log(list2);