'use strict';
const dice = parseInt(prompt('How many dice?'));
let sum = 0;
for (let i = 0; i < dice; i++) {
  const number = Math.floor(Math.random() * 6) + 1;
  sum += number;
}
document.querySelector('#target').innerHTML = sum;
