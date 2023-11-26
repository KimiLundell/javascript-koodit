'use strict';
const tvform = document.querySelector('#tvform')
tvform.addEventListener('submit', async function (evt) {
    evt.preventDefault();
    const search = document.querySelector('input[id=query]').value;
    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${search}`);
        const jsondata = await response.json();
        console.log(jsondata);
    } catch (error) {
        console.log(error.message);
    }
})