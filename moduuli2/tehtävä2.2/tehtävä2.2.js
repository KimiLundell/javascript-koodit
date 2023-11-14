'use strict';

const ol = document.createElement('ol');
ol.setAttribute("id","ol")
const participants = parseInt(prompt('Enter the number of participants.'));

for (let i = 0; i < participants; i++) {
  const name = prompt('Enter participant name.');
  const li = document.createElement('li');
  li.innerHTML= name;
  ol.appendChild(li);
}
document.getElementById('list').appendChild(ol)



