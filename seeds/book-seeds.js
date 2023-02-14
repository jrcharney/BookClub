import Book from "../models/main/Book.js";

const bookData = [
    {
        title:  "The Girl with the Dragon Tattoo",
        isbn:   "0307949486",
        id: 1,
        // author: "Stieg Larsson"
    },
    {
        title:  "The Stand",
        isbn:   "0525616713",
        id: 2,
        //author: "Stephen King"
    },
    {
        title:  "War and Peace",
        isbn:   "1400079985",
        id: 3,
        //author: "Leo Tolstoy"
    },
    {
        title:  "The Hobbit",
        isbn:   "0618260307",
        id: 4,
        //author: "J.R.R. Tolkien"
    },
    {
        title: "The Divine Comedy",
        isbn:   "9798627115764" ,
        id: 5
        //author: "Dante Allegri"
    },
    // TODO: Add more books!
    // Also, there is no      
]

const seedBooks = () => Book.bulkCreate(bookData);

export default seedBooks;

