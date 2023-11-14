'use strict';

const ol = document.createElement('ol');
ol.setAttribute("id","list")
document.body.appendChild(ol)

const namelist = [];

for (let i = 0; i < 6; i++) {
  const name = prompt('Enter dog name.');
  namelist.push(name)
}
namelist.sort();
namelist.reverse();
for (name of namelist){
  const li = document.createElement('li');
  li.innerHTML= name;
  ol.appendChild(li);
}



