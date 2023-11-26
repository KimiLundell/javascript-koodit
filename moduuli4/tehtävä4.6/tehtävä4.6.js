'use strict';

const jokeform = document.querySelector('#jokeform')
jokeform.addEventListener('submit', async function (evt) {
    evt.preventDefault();
    const search = document.querySelector('input[name=q]').value;
    try {
        const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${search}`);
        const jsondata = await response.json();
        for(let i = 0; i < jsondata.total; i++){
            const article = document.createElement('article');
            const p = document.createElement('p');
            p.innerHTML = jsondata.result[i].value;
            article.appendChild(p)
            document.body.appendChild(article)
        }
    } catch (error) {
        console.log(error.message);
    }
})