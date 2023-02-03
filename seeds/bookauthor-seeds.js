import { BookAuthor } from "../models/BookAuthor.js";
// import { Book } from "../models/Book.js";
// import { Author } from "../models/Author.js";

const bookAuthorData = [
    {
    book_id: 1,
    author_id: 1,
    },
    {
    book_id: 2,
    author_id: 2,
    },
    {
    book_id: 3,
    author_id: 3,
    },
    {
    book_id: 4,
    author_id: 4,
    },
    {
    book_id: 5,
    author_id: 5,
    },      
]

const seedBookAuthor = () => BookAuthor.bulkCreate(bookAuthorData);

export default seedBookAuthor;

