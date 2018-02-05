var library = [
  { title: "Norse Mythology", year: "2017", author: "Neil Gaiman", publisher: "W. W. Norton & Company" },
  { title: "The Old Man and the Sea", year: "1952", author: "Ernest Hemingway", publisher: "Charles Scribner's Sons" },
  { title: "Mythos: A Retelling of the Myths of Ancient Greece", year: "1981", author: "Stephen Fry", publisher: "Penguin" },
  { title: "The Mythical Man-Month", year: "1975", author: "Fred Brooks", publisher: "Addison-Wesley" },
  { title: "The Pragmatic Programmer", year: "1999", author: "Andy Hunt and Dave Thomas", publisher: "The Pragmatic Bookshelf	" }
  /* Task 2 */
];

/* Task 1 */
function getBookTitle( index ){
  //add code
  return library[index].title;
}

console.log(getBookTitle(3));

/* Task 3 */
function addBook( book ){
  library.push= book;
}

var newBook = {
  title:"The Lord of The Rings",
  year:"1933",
  author:"J. R. R. Tolkein",
  publisher:"Noobs"
};
console.log(addBook(newBook));
// console.log(getBookTitle(5));

/* Task 4 */

function bookByAuthor(){



  //add code
}

console.log(bookByAuthor());

/* Task 5 */
function findByTitle( title ){

  var pat= new RegExp(title);
  //add code
  for (var i = 0; i < library.length; i++) {
    if (library[i].title.match(pat)) {

      return library[i].title;

    }
  }
}

console.log(findByTitle("Man"));
console.log(findByTitle("myth"));
