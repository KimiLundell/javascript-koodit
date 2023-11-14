'use strict';

const ul = document.createElement('ul');
ul.setAttribute("id","list")
document.body.appendChild(ul)

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
  ul.appendChild(li);
}



