"use strict";

const list = document.querySelector("#target")
const first = document.createElement('li')
const second = document.createElement('li')
const third = document.createElement('li')

first.innerHTML = "First item"
list.appendChild(first)
second.innerHTML = "Second item"
list.appendChild(second)
third.innerHTML = "Third item"
list.appendChild(third)

second.classList.add('my-item');