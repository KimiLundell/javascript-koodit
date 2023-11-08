'use strict';
const name = prompt('What is your name?');
const number = Math.floor(Math.random() * 4);
if (number == 0) {
  document.querySelector('#target').innerHTML = name + ', you are Ravenclaw.';
} else if (number == 1) {
  document.querySelector('#target').innerHTML = name + ', you are Gryffindor.';
} else if (number == 2) {
  document.querySelector('#target').innerHTML = name + ', you are Hufflepuff.';
} else {
  document.querySelector('#target').innerHTML = name + ', you are Slytherin.';
}