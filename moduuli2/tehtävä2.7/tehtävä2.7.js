'use strict';

const ul = document.createElement('ul');
ul.setAttribute("id", "list")
document.body.appendChild(ul)

function dice(sides) {
    return Math.floor((Math.random() * sides) + 1)
}

const sides = parseInt(prompt('Enter the number of sides on the die.'));

let result = 0
while (result !== sides) {
    result = dice(sides)
    if (result !== sides) {
        const li = document.createElement('li');
        li.innerHTML = result;
        ul.appendChild(li);
    }
}
const li = document.createElement('li');
li.innerHTML = result;
ul.appendChild(li);

