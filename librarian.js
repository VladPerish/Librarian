var library = [
  { title: "Norse Mythology", year: "2017", author: "Neil Gaiman", publisher: "W. W. Norton & Company" },
  { title: "The Old Man and the Sea", year: "1952", author: "Ernest Hemingway", publisher: "Charles Scribner's Sons" },
  { title: "Mythos: A Retelling of the Myths of Ancient Greece", year: "1981", author: "Stephen Fry", publisher: "Penguin" },
  { title: "The Mythical Man-Month", year: "1975", author: "Fred Brooks", publisher: "Addison-Wesley" },
  { title: "The Pragmatic Programmer", year: "1999", author: "Andy Hunt and Dave Thomas", publisher: "The Pragmatic Bookshelf	" },
  { title: "A SOng of Ice and Fire", Year: "1996", author: "G.R.R Martin", publisher: "Bantam Books" },

];

/* Task 1 */
function getBookTitle( index ){
  //add code
  return library[index].title;
}

console.log(getBookTitle(3));

/* Task 3 */
function addBook( book ){
  library.push(book);
  return library;
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
 library.sort(function(a, b) {
    var author1 = a.author.toLowerCase(), author2 = b.author.toLowerCase()

    if(author1 < author2) return -1;

    if(author1 > author2) return 1;

    return 0;
 });
  return library;
}

console.log(bookByAuthor());

/* Task 5 */
function findByTitle( title ){

  var matches= [];

  var pat= new RegExp(title);
  //add code
  for (var i = 0; i < library.length; i++) {
    if (library[i].title.match(pat)) {

      matches[i]=library[i].title;

    }
  }
  for (var i = 0; i < matches.length; i++) {
     console.log(matches[i]);
  }
}

console.log(findByTitle("Man"));
console.log(findByTitle("Myth"));
