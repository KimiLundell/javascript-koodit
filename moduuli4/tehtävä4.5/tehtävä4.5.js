'use strict';

async function fetchjoke() {
    try {
        const response = await fetch(`https://api.chucknorris.io/jokes/random`);
        const jsondata = await response.json();
        console.log(jsondata.value);
    } catch (error) {
        console.log(error.message);
    }
}
fetchjoke()