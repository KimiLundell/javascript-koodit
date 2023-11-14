'use strict';

const ul = document.createElement('ul');
ul.setAttribute("id", "list")
document.body.appendChild(ul)

function dice() {
    return Math.floor((Math.random() * 6) + 1)
}

let result = 0
while (result !== 6) {
    result = dice()
    if (result !== 6) {
        const li = document.createElement('li');
        li.innerHTML = result;
        ul.appendChild(li);
    }
}
const li = document.createElement('li');
li.innerHTML = result;
ul.appendChild(li);

