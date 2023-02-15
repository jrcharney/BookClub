import Author from "../models/main/Author.js";

const authorData = [
    {
        id: 1,
        first_name: "Stieg",
        last_name:  "Larsson",
        dob:        "1954-08-15",
        dod:        "2004-11-09",
        information: "Larsson was from Sweden. Internationally, his most notable work was The Millennium Trillogy featuring Lisbeth Salander and Mikael Blomkvist.",
    },
    {
        id: 2,
        first_name:  "Stephen",
        last_name:   "King",
        pen_name:    "Richard Bachman",
        dob: "1947-09-21",
        information: "The celebrated King of Horror. TRIVIA: Richard Bachman was Stephen King's nom de plume in his earlier work.",
    },
    {
        id: 3,
        first_name: "Leo",
        last_name:  "Tolstoy",
        dob: "1828-09-09",
        dod: "1910-11-20",
    },
    {
        id: 4,
        first_name: "J.R.R.",
        last_name:  "Tolkien",
        dob: "1892-01-03",
        dod: "1973-09-02",
        information: "Best known for his high fantasy works The Hobbit and The Lord of The Rings",
    },
    {
        id: 5,
        first_name: "Dante",
        last_name:  "Alighieri",
        information: "Initially an Italian Poet.",
    },
    {
        id: 6,
        first_name: "David",
        last_name: "Lagercrantz",
        dob: "1962-09-04",
        information: "David Lagercrantz wrote the fourth, fifth, and sixth books in Stieg Larsson's Millennium novels after Larsson passed away in 2004."
    },
    {
        id: 7,
        first_name: "Karin",
        last_name: "Smirnoff",
        dob: "1964-09-22",
        information: "Karin Smirnoff wrote the seventh book in Stieg Larsson's Millennium series. She will write the eighth and ninth novels in the future."
    },
    {
        id: 8,
        first_name: "Gabrielle",
        last_name: "Zevin",
        dob: "1977-10-14"
    }
    // TODO: Add more data!
]


const seedAuthors = () => Author.bulkCreate(authorData);

export default seedAuthors;