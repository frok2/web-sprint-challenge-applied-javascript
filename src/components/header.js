const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

    let header = document.createElement('div');
    let dateSpan = document.createElement('span');
    let h1 = document.createElement('h1');
    let tempSpan = document.createElement('span');

    header.classList.add('header')
    dateSpan.classList.add('date')
    tempSpan.classList.add('temp')

    h1.textContent = title;
    dateSpan.textContent = date;
    tempSpan.textContent = temp;

    header.appendChild(dateSpan);
    header.appendChild(h1);
    header.appendChild(tempSpan);
    


    // console.log(header)

    return header

}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  // Header('sdfsd','sdfdf','sdfdf')

    let test = document.querySelector(selector)
    
    test.appendChild(Header('Lambda Times','2/23/2021','98degreeeeees'))

 
  // selected.appendChild(Header('title', 'mon', '100'))
  

}



export { Header, headerAppender }
