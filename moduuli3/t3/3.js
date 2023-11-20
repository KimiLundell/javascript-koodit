'use strict';
let names = ['John', 'Paul', 'Jones'];
let list =document.querySelector("#target");

for (let i = 0; i < names.length; i++){
  let li = document.createElement('li');
  li.innerHTML = names[i];
  list.appendChild(li);
}