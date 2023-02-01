import { Book } from "../models/Book.js";

const bookData = [
    {
    title:'The Girl with the Dragon Tattoo',
    id: 1,
    },
    {
    title:'The Stand',
    id: 2,
    },
    {
    title:'War and Peace',
    id: 3,
    },
    {
    title:'The Lord of the Rings' ,
    id: 4,
    },
    {
    title:'The Divine Comedy',
    id: 5,
    },      
]

const seedBooks = () => Book.bulkCreate(bookData);

export default seedBooks;

