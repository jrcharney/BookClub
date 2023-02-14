import Author from "../models/main/Author.js";

const authorData = [
    {
    first_name: "Stieg",
    last_name:  "Larsson",
    dob:        "1954-08-15",
    dod:        "2004-11-09",
    information: "Larsson was from Sweden. Internationally, his most notable work was The Millennium Trillogy featuring Lisbeth Salander and Mikael Blomkvist.",
    id: 1,
    },
    {
    first_name:  "Stephen",
    last_name:   "King",
    pen_name:    "Richard Bachman",
    dob: "1947-09-21",
    information: "The celebrated King of Horror. TRIVIA: Richard Bachman was Stephen King's nom de plume in his earlier work.",
    id: 2,
    },
    {
    first_name: "Leo",
    last_name:  "Tolstoy",
    dob: "1828-09-09",
    dod: "1910-11-20",
    id: 3,
    },
    {
    first_name: "J.R.R.",
    last_name:  "Tolkien",
    dob: "1892-01-03",
    dod: "1973-09-02",
    information: "Best known for his high fantasy works The Hobbit and The Lord of The Rings",
    id: 4,
    },
    {
    first_name: "Dante",
    last_name:  "Alighieri",
    information: "Initially an Italian Poet.",
    id: 5,
    },
    // TODO: Add more data!
]


const seedAuthors = () => Author.bulkCreate(authorData);

export default seedAuthors;