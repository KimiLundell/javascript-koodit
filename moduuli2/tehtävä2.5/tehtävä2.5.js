'use strict';

let list = []
let includes = false
while (includes == false) {
    const number = parseInt(prompt('Enter a number.'));
    includes = list.includes(number)

    if (includes == false) {
        list.push(number)
    }
}
list.sort((a, b) => a - b);
console.log(list)