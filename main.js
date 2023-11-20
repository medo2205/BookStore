let books = [[], []];

addBook(1, "Start with why", "Simon Sinek", 80.0, 13);
addBook(2, "But how do it know", "J. Clark Scott", 59.9, 22);
addBook(3, "Clean Code", "Robert Cecil Martin", 50.0, 5);
addBook(4, "Zero to One", "Peter Thiel", 45.0, 12);
addBook(5, "You don't know JS", "Kyle Simpson", 39.9, 9);

let bookToSearch = searchBook("author", "Kyle Simpson");

console.log("Book Information:");
console.log(bookToSearch);

sellBook("But how do it know", 2, 200);


function addBook(id, title, author, price, quantity) {//adding a book
  books.push([id, title, author, price, quantity]);
}

function searchBook(byWhat, value) {//searching a book
  for (let book of books) {
    switch (byWhat) {
      case "id":
        if (book[0] == value)
          return book;
        break;
      case "title":
        if (book[1] == value) 
          return book;
        break;
      case "author":
        if (book[2] == value) 
          return book;
        break;
    }
  }
  return null;
}

function sellBook(title, quantity, balance) {//selling a book
  let book = searchBook("title", title);

  if (book &&  book[3] * quantity <= balance && book[4] >= quantity ) {
    book[4] -= quantity;
    balance -= book[3] * quantity;
    console.log(`${quantity} units have been sold of: ${title}`);
    console.log(`Price: ${book[3] * quantity}`);
    console.log(`Remaining Balance: ${balance}`);
  } else {
    console.log("Error");
  }
}


  
