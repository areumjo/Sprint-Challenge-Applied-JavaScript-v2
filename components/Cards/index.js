// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(data => {
        console.log('checking if it works:', data.data.articles);
        const articleObj = data.data.articles;
        const js = articleObj.javascript;
        const bs = articleObj.bootstrap;
        const tech = articleObj.technology;
        const jq = articleObj.jquery;
        const node = articleObj.node;
        console.log(js, bs,tech, jq,node)
        js.forEach( ele => cardCompo.appendChild(addArticle(ele)));
        bs.forEach( ele => cardCompo.appendChild(addArticle(ele)));
        tech.forEach( ele => cardCompo.appendChild(addArticle(ele)));
        jq.forEach( ele => cardCompo.appendChild(addArticle(ele)));
        node.forEach( ele => cardCompo.appendChild(addArticle(ele)));
    })
    .catch(error => {
        console.log('API is currently down, try again later', error);
    })

const cardCompo = document.querySelector('.cards-container');

function addArticle(obj) {
    const card = document.createElement('div');
    
    const title = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const imgAuthor = document.createElement('img');
    const spanAuthor = document.createElement('span');

    card.classList.add('card');
    title.classList.add('headline');
    author.classList.add('author')
    imgContainer.classList.add('img-container')

    title.textContent=obj.headline;
    imgAuthor.src=obj.authorPhoto;
    spanAuthor.textContent=`By ${obj.authorName}`;

    card.appendChild(title);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(imgAuthor);
    author.appendChild(spanAuthor);

    return card;
}
