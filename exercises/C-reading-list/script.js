function readingList(books) {
  // Write your code here...
  let content = document.querySelector("#content");
  let newBookList = document.createElement("ul");
  content.appendChild(newBookList);

  books.forEach(function (obj) {

    let newList = document.createElement("li");
    newBookList.appendChild(newList);
    let title = document.createElement("p");
    title.innerText = obj["title"];
    newList.appendChild(title);
    newList.style.width = "13rem";
    let author = document.createElement("p");
    author.innerText = obj["author"];
    newList.appendChild(author);
    let bookCover = document.createElement("img");
    bookCo.src = obj["bookCover"];
    bookCo.style.height = "12rem";
    bookCo.style.width = "12rem";
    newList.appendChild(bookCover);

    if (obj["alreadyRead"]) {
      newList.style.backgroundColor = "red";
    } else {
      newList.style.backgroundColor = "green";
    }
  });
}



const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    bookCover: "https://miro.medium.com/max/2400/1*jWEeNZykeAAlvRmRB7ruQQ.jpeg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    bookCover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1295465264l/8884400.jpg",

  },

  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    bookCover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1401432508l/4099.jpg",
  }
];

readingList(books);