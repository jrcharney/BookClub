import Book from "../models/main_models/Book.js";

const bookData = [
    {
    title:'The Girl with the Dragon Tattoo',
    isbn:"0307949486",
    author: "Stieg Larsson"
    },
    {
    title:'The Stand',
    isbn:"0525616713",
    author: "Stephen King"
    },
    {
    title:'War and Peace',
    isbn: "1400079985",
    author: "Leo Tolstoy"
    },
    {
    title:'The Hobbit' ,
    isbn:"0618260307",
    author: "J.R.R. Tolkien"
    },
    {
    title:'The Divine Comedy',
    isbn:"9798627115764" ,
    author: "Dante Allegri"
    },      
]

const seedBooks = () => Book.bulkCreate(bookData);

export default seedBooks;

