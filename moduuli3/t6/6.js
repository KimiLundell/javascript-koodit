'use strict';
const button = document.querySelector('button')
function click(evt){
    alert('Button Clicked');
}
button.onclick = click;