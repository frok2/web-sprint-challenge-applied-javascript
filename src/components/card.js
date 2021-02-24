import axios from 'axios';

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  let cardDiv = document.createElement('div')
  let headline = document.createElement('div')
  let author = document.createElement('div')
  let imgContainter = document.createElement('div')
  let img = document.createElement('img')
  let span = document.createElement('span')

  headline.classList.add('headline')
  author.classList.add('author')
  imgContainter.classList.add('img-container')
  cardDiv.classList.add('card')

  headline.textContent = article['headline']
  span.textContent = 'By: '+(article['authorName'])
  img.src = article['authorPhoto']
  console.log(article)


  imgContainter.appendChild(img)
  author.appendChild(imgContainter)
  author.appendChild(span)
  cardDiv.appendChild(headline)
  cardDiv.appendChild(author)
  // mainDiv.appendChild(cardDiv)
  
  return cardDiv
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  let articles;
  let element = document.querySelector(selector)


  axios.get('https://lambda-times-api.herokuapp.com/articles')
        .then(data => {
          articles = data['data']['articles']
          Object.keys(articles).forEach(elem => {
            articles[elem].forEach (article => {
              let result = Card(article);
              // console.log(article)
              element.appendChild(result)
            })
          })
        })
        .catch(err => console.log(err))



      }
export { Card, cardAppender }