import TagType from "../models/tag/TagType";
// NOTE: I though about using an enum. This was just a better exercise.

const tagTypeData = [
    {
        id: 1,
        name: "author",
        description: "Tags associated with an author"
    },
    {
        id: 2,
        name: "book",
        description: "Tags associated with a book"
    },
    {
        id: 3,
        name: "tag",
        description: "General tags, keywords, tropes"
    },
    {
        id: 4,
        name: "character",
        description: "Tags associated with a book character or person"
    },
    {
        id: 5,
        name: "category",
        description: "Tag associated with a category or genre of books"
    },
    {
        id: 6,
        name: "series",
        description: "Tag associated with books or authors of a specific series of books"
    },
    {
        id: 7,
        name: "subject",
        description: "Tag associated with a particular subject (generally for non-fiction)"
    }
];

const seedTagTypes = () => TagType.bulkCreate(tagTypeData);

export default seedTagTypes;