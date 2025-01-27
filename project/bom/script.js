const mainDiv = document.getElementById('main');
function getData ()
{
    fetch("https://dummyjson.com/quotes/random")// fetch is used to connect link it will return promise
        .then((res => res.json())) // if promise resolved and return new promise
        .then((data)=>displayData(data)) //new promise resolved
        .catch((err) => console.log(err)) //if promise rejected
}
setInterval(getData, 1000)
function displayData (data)
{
    mainDiv.textContent = '';
    const quoteEle = document.createElement('h1');
    const authorEle = document.createElement('p');
    quoteEle.textContent = data.quote;
    authorEle.textContent = data.author;
    mainDiv.append(quoteEle,authorEle)
}