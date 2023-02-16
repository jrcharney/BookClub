import BookTag from "../models/tag/BookTag";

const bookTagData = [
    {
        book_id: 1,
        tag_id: 1
    },
    {
        book_id: 1,
        tag_id: 2
    },
    {
        book_id: 1,
        tag_id: 3
    },
    {
        book_id: 1,
        tag_id: 4
    },
    {
        book_id: 1,
        tag_id: 5
    },
    {
        book_id: 1,
        tag_id: 6
    },
    {
        book_id: 1,
        tag_id: 7
    },
    {
        book_id: 1,
        tag_id: 8
    },
    {
        book_id: 1,
        tag_id: 23
    },
    {
        book_id: 2,
        tag_id: 26
    },
    {
        book_id: 2,
        tag_id: 27
    },
    {
        book_id: 2,
        tag_id: 5
    },
    {
        book_id: 3,
        tag_id: 24
    },
    {
        book_id: 4,
        tag_id: 10
    },
    {
        book_id: 4,
        tag_id: 11
    },
    {
        book_id: 4,
        tag_id: 12
    },
    {
        book_id: 4,
        tag_id: 13
    },
    {
        book_id: 4,
        tag_id: 14
    },
    {
        book_id: 4,
        tag_id: 15
    },
    {
        book_id: 4,
        tag_id: 16
    },
    {
        book_id: 4,
        tag_id: 17
    },
    {
        book_id: 4,
        tag_id: 18
    },
    {
        book_id: 4,
        tag_id: 20
    },
    {
        book_id: 4,
        tag_id: 22
    },
    {
        book_id: 5,
        tag_id: 24
    },

    {
        book_id: 6,
        tag_id: 1
    },
    {
        book_id: 6,
        tag_id: 2
    },
    {
        book_id: 6,
        tag_id: 3
    },
    {
        book_id: 6,
        tag_id: 4
    },
    {
        book_id: 6,
        tag_id: 5
    },
    {
        book_id: 6,
        tag_id: 6
    },
    {
        book_id: 6,
        tag_id: 7
    },
    {
        book_id: 6,
        tag_id: 8
    },
    {
        book_id: 6,
        tag_id: 23
    },

    {
        book_id: 7,
        tag_id: 1
    },
    {
        book_id: 7,
        tag_id: 2
    },
    {
        book_id: 7,
        tag_id: 3
    },
    {
        book_id: 7,
        tag_id: 4
    },
    {
        book_id: 7,
        tag_id: 5
    },
    {
        book_id: 7,
        tag_id: 6
    },
    {
        book_id: 7,
        tag_id: 7
    },
    {
        book_id: 7,
        tag_id: 8
    },
    {
        book_id: 7,
        tag_id: 23
    },

    {
        book_id: 8,
        tag_id: 1
    },
    {
        book_id: 8,
        tag_id: 2
    },
    {
        book_id: 8,
        tag_id: 3
    },
    {
        book_id: 8,
        tag_id: 4
    },
    {
        book_id: 8,
        tag_id: 5
    },
    {
        book_id: 8,
        tag_id: 6
    },
    {
        book_id: 8,
        tag_id: 7
    },
    {
        book_id: 8,
        tag_id: 8
    },
    {
        book_id: 8,
        tag_id: 23
    },

    {
        book_id: 9,
        tag_id: 1
    },
    {
        book_id: 9,
        tag_id: 2
    },
    {
        book_id: 9,
        tag_id: 3
    },
    {
        book_id: 9,
        tag_id: 4
    },
    {
        book_id: 9,
        tag_id: 5
    },
    {
        book_id: 9,
        tag_id: 6
    },
    {
        book_id: 9,
        tag_id: 7
    },
    {
        book_id: 9,
        tag_id: 8
    },
    {
        book_id: 9,
        tag_id: 23
    },

    {
        book_id: 10,
        tag_id: 1
    },
    {
        book_id: 10,
        tag_id: 2
    },
    {
        book_id: 10,
        tag_id: 3
    },
    {
        book_id: 10,
        tag_id: 4
    },
    {
        book_id: 10,
        tag_id: 5
    },
    {
        book_id: 10,
        tag_id: 6
    },
    {
        book_id: 10,
        tag_id: 7
    },
    {
        book_id: 10,
        tag_id: 8
    },
    {
        book_id: 10,
        tag_id: 23
    },

    {
        book_id: 11,
        tag_id: 1
    },
    {
        book_id: 11,
        tag_id: 2
    },
    {
        book_id: 11,
        tag_id: 3
    },
    {
        book_id: 11,
        tag_id: 4
    },
    {
        book_id: 11,
        tag_id: 5
    },
    {
        book_id: 11,
        tag_id: 6
    },
    {
        book_id: 11,
        tag_id: 7
    },
    {
        book_id: 11,
        tag_id: 8
    },
    {
        book_id: 11,
        tag_id: 23
    },

    {
        book_id: 12,
        tag_id: 25
    },
    {
        book_id: 12,
        tag_id: 28
    },
    {
        book_id: 12,
        tag_id: 29
    },
    {
        book_id: 12,
        tag_id: 30
    },
    {
        book_id: 12,
        tag_id: 31
    },
    {
        book_id: 12,
        tag_id: 32
    },

    {
        book_id: 13,
        tag_id: 10
    },
    {
        book_id: 13,
        tag_id: 11
    },
    {
        book_id: 13,
        tag_id: 12
    },
    {
        book_id: 13,
        tag_id: 13
    },
    {
        book_id: 13,
        tag_id: 14
    },
    {
        book_id: 13,
        tag_id: 15
    },
    {
        book_id: 13,
        tag_id: 16
    },
    {
        book_id: 13,
        tag_id: 17
    },
    {
        book_id: 13,
        tag_id: 18
    },
    {
        book_id: 13,
        tag_id: 19
    },
    {
        book_id: 13,
        tag_id: 20
    },
    {
        book_id: 13,
        tag_id: 21
    },
    {
        book_id: 13,
        tag_id: 22
    },
];

const seedBookTags = () => BookTag.bulkCreate(bookTagData);

export default seedBookTags;