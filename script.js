const quote = document.getElementById('quote');

const getQuote = ()=> {

    fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
        quote.innerHTML = (`${data.content} — ${data.author}`)
    })
};

quote.addEventListener('click', ()=> getQuote());
getQuote();