'use strict';
const year = parseInt(prompt('Enter a year.'));
if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
  document.querySelector('#target').innerHTML = 'Year is a leap year.';
} else {
  document.querySelector('#target').innerHTML = 'Year is not a leap year.';
}