import Book from "../models/Book.js";

const bookData = [
    {
    title:'The Girl with the Dragon Tattoo',
    id: 1,
    isbn:"0307949486"
    },
    {
    title:'The Stand',
    id: 2,
    isbn:"0525616713"
    },
    {
    title:'War and Peace',
    id: 3,
    isbn: "1400079985"
    },
    {
    title:'The Hobbit' ,
    id: 4,
    isbn:"0618260307"
    },
    {
    title:'The Divine Comedy',
    id: 5,
    isbn:"9798627115764" 
    },      
]

const seedBooks = () => Book.bulkCreate(bookData);

export default seedBooks;

