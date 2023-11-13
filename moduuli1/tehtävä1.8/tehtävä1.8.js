'use strict';
let start = parseInt(prompt('Enter the starting year.'));
let end = parseInt(prompt('Enter the end year.'));

const ul = document.createElement('ul');
while (start < end) {
  start += 4;
  const li = document.createElement('li');
  li.innerHTML= start;
  ul.appendChild(li);
}
document.getElementById('lista').appendChild(ul)