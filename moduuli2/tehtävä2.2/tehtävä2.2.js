'use strict';

const ol = document.createElement('ol');
ol.setAttribute("id","list")
document.body.appendChild(ol)

const participants = parseInt(prompt('Enter the number of participants.'));
const namelist = [];

for (let i = 0; i < participants; i++) {
  const name = prompt('Enter participant name.');
  namelist.push(name)
}
namelist.sort();
for (name of namelist){
  const li = document.createElement('li');
  li.innerHTML= name;
  ol.appendChild(li);
}



