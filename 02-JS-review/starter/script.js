const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// Destructuring

const book = getBook(3);
book;
const { title, author, genres, pages, reviews, hasMovieAdaptation } = book; // Needs to match field names in JSON

const [primaryGenre, secondaryGenre, ...otherGenres] = genres; // Takes nth element of the array by default

primaryGenre;
secondaryGenre;
otherGenres;

// Rest and Spead with ...
const addNewGenretoArray = [...genres, "New Genre"]; // ... operator can rest or spread properties
addNewGenretoArray;

// Template Literals with ` and ${VARIABLE}

const bookSummary = `The title of this book is ${title} written by ${author}. It contains ${pages} total pages. The primary genrre is ${genres[0]}`;
bookSummary;

// Ternaries CONDITION ? Result if TRUE : Result if FALSE

const pagesOver1000 = pages > 1000 ? "over 1000" : "under 1000";
pagesOver1000;

// Arrow Functions
function addFive(num) {
  return num + 5;
}

const oldNum = 5;
const newNum = addFive(oldNum);
newNum;
const addFiveArrowFunc = (oldNum) => oldNum + 5;

const newNumArrowFunc = addFiveArrowFunc(oldNum);
newNumArrowFunc;

// Short-Circuiting Logical Operators

console.log(true && "Hello World"); // Outputs second value if it is TRUE
console.log(false && "Hello World"); // Short-circuits on first value if it is FALSE

console.log(true || "Hello World"); // Short circuits on first value if is TRUE
console.log(false || "Hello World"); // Outputs second value if it is FALSE

console.log(0 ?? "Hello World"); //?? operator works as OR logical operator but will not short-circuit on '' or 0 values

// Optional Training

function getReviewCount(book) {
  const goodReadsReviewCount = book.reviews.goodreads?.reviewsCount ?? 0;
  const libraryThingReviewCount = book.reviews.librarything?.reviewsCount ?? 0; // JS will not evaluate anything after ? if expression before is NaN

  goodReadsReviewCount;
  libraryThingReviewCount;

  return goodReadsReviewCount + libraryThingReviewCount;
}

console.log(getReviewCount(book));

// Array methods (Map, Filter, Reduce, Sort)

const newBooks = getBooks();

const doubleNums = [1, 2, 3, 4, 5].map((num) => num * 2); // Map method, provide callback function that is applied to every element in array
doubleNums;

const bookTitles = newBooks.map((book) => book.title);
bookTitles;

const importantBookData = newBooks.map((book) => {
  return {
    title: book.title,
    author: book.author,
    reviewCount: getReviewCount(book),
  };
});

importantBookData;

const longBooks = newBooks.filter((book) => book.pages > 500); // Filter method, provide filter condition that is applied to every element in array
longBooks;

const totalPages = newBooks.reduce(
  // Reduce method, pass in accumulator and reduce operation
  (accumulator, book) => accumulator + book.pages,
  0
);
totalPages;

const testArray = [5, 3, 1, 9, 7];
const sortedAscending = testArray.slice().sort((a, b) => a - b);
const sortedDescending = testArray.slice().sort((a, b) => b - a);

sortedAscending;
sortedDescending;
testArray;

const sortedByPages = newBooks.slice().sort((a, b) => a.pages - b.pages);

sortedByPages;

// Working with immutable arrays
// Create new instead of mutating existing data
const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J.K. Rowling",
};

const booksAfterAdding = [...newBooks, newBook];
booksAfterAdding;

//Asychronous Javascript

fetch("https://jsonplaceholder.typicode.com/todos/5") // Initial state of fetch is a promise, use then method to process data once its available
  .then((res) => res.json())
  .then((data) => console.log(data));

async function getToDos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/10");
  const data = await res.json();
  console.log(data);
}

getToDos();
