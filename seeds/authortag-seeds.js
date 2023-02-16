import AuthorTag from "../models/tag/AuthorTag";

const authorTagData = [
    {
        author_id: 1,
        tag_id: 1,
    },
    {
        author_id: 6,
        tag_id: 1,
    },
    {
        author_id: 7,
        tag_id: 1,
    },
    {
        author_id: 1,
        tag_id: 23,
    },
    {
        author_id: 2,
        tag_id: 26,
    },
    {
        author_id: 2,
        tag_id: 5,
    },
    {
        author_id: 2,
        tag_id: 27,
    },
    {
        author_id: 3,
        tag_id: 24,
    },
    {
        author_id: 4,
        tag_id: 22,
    },
    {
        author_id: 4,
        tag_id: 10,
    },
    {
        author_id: 5,
        tag_id: 24,
    },
    {
        author_id: 8,
        tag_id: 25,
    },
];

const seedAuthorTags = () => AuthorTag.bulkCreate(authorTagData);

export default seedAuthorTags;