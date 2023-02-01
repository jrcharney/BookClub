import { Author } from "../models/Author.js";

const authorData = [
    {
    first_name:'Stieg',
    last_name:'Larsson',
    id: 1,
    },
    {
    first_name:'Stephen',
    last_name:'King',
    fisrt_name:'Richard',
    last_name:'Bachman',
    id: 2,
    },
    {
    first_name:'Leo',
    last_name:'Tolstoy',
    id: 3,
    },
    {
    first_name:'J.R.R.',
    last_name:'Tolkien',
    id: 4,
    },
    {
    first_name:'Dante',
    last_name:'Alighieri',
    id: 5,
    },      
]


const seedAuthor = () => Author.bulkCreate(authorData);

export default seedAuthor;