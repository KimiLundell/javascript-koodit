'use strict';

const numberlist = [];
var number = parseInt(prompt('Enter a number.'))
while (number != 0) {
    numberlist.push(number)
    number = parseInt(prompt('Enter a number.'))
}
numberlist.sort((a, b) => b - a);
console.log(numberlist)