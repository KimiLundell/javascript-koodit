  'use strict';
  const answer = confirm('Should I calculate the square root?');
  if (answer == true) {
    const number = parseInt(prompt('Type a number.'));
    if (number < 0) {
      document.querySelector('#target').innerHTML = 'The square root of a negative number is not defined.';
    } else {
      const square = Math.sqrt(number);
      document.querySelector('#target').innerHTML = square.toString();
    }
  } else {
    document.querySelector('#target').innerHTML = 'The square root is not calculated.';
  }