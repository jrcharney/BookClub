import Book from "../models/main/Book.js";

// Note: pub_year is a STRING type because I didn't want to deal with the hassle of creating an abstract data type that only accepted years which sequelize didn't bother to add.
// PSA: Don't use the ISBN on Amazon. Open Library won't accept it
const bookData = [
    {
        id: 1,
        title:  "The Girl with the Dragon Tattoo",
        pub_year: "2005",
        isbn:   "9780307269751",
        // author: "Stieg Larsson"
    },
    {
        id: 2,
        title:  "The Stand",
        isbn:   "9780385121682",
        pub_year: "1978"
        //author: "Stephen King"
    },
    {
        id: 3,
        title:  "War and Peace",
        isbn:   "1400079985",
        pub_year: "1867"
        //author: "Leo Tolstoy"
    },
    {
        id: 4,
        title:  "The Hobbit, or There and Back Again",
        isbn:   "0618260307",
        pub_year: "1937"
        //author: "J.R.R. Tolkien"
    },
    {
        id: 5,
        title: "The Divine Comedy",
        isbn:   "9798627115764",
        pub_year: "1320"
        //author: "Dante Allegri"
    },
    {
        id: 6,
        title: "The Girl Who Played with Fire",
        pub_year: "2006",
        isbn: "9780307269980",
    },
    {
        id: 7,
        title: "The Girl Who Kicked the Hornets' Nest",
        pub_year: "2007",
        isbn: "9780606264747",
    },
    {
        id: 8,
        title: "The Girl in the Spider's Web",
        pub_year: "2015",
        isbn: "9780385354288",
    },
    {
        id: 9,
        title: "The Girl Who Takes an Eye for an Eye",
        pub_year: "2017",
        isbn: "9780451494320",
    },
    {
        id: 10,
        title: "The Girl Who Lived Twice",
        pub_year: "2019",
        isbn: "9780451494344",
    },
    {
        id: 11,
        title: "The Girl in the Eagle's Talons",
        pub_year: "2022",
        isbn: "9780593536698",
        description: "An English translation by Sarah Death will be published August 29, 2023."
    },
    {
        id: 12,
        title: "Tomorrow, and Tomorrow, and Tomorrow",
        pub_year: "2022",
        isbn: "9780593321201",
        description: "Over the course of three decades, the relationship between two friends changes as they develop a Japanese-themed game that draws critical attention."
    },
    {
        id: 13,
        title: "The Lord of the Rings",
        pub_year: "1954",
        isbn: "9780544003415",
        description: "The Lord of the Rings is an epic high-fantasy novel divided into three volumes (The Fellowship of the Ring, The Two Towers, and The Return of the King)"
    },
    // TODO: Add more books!
    // Also, there is no      
]

const seedBooks = () => Book.bulkCreate(bookData);

export default seedBooks;

