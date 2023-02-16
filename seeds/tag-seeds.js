import Tag from "../models/tag/Tag.js";

// id: Integer
// name: (required): String (unique!)
// desciption: (optional): String

const tagData = [
    {
        id: 1,
        name: "millennium",
        tag_type_id: 6
    },
    {
        id: 2,
        name: "lisbeth salander",
        tag_type_id: 4,
    },
    {
        id: 3,
        name: "mikael blomkvist",
        tag_type_id: 4
    },
    {
        id: 4,
        name: "mystery",
        tag_type_id: 5
    },
    {
        id: 5,
        name: "suspense",
        tag_type_id: 5
    },
    {
        id: 6,
        name: "thriller",
        tag_type_id: 5
    },
    {
        id: 7,
        name: "techno-thriller",
        tag_type_id: 5
    },
    {
        id: 8,
        name: "hacker",
        tag_type_id: 3
    },
    {
        id: 9,
        name: "female protagonist",
        tag_type_id: 3
    },
    {
        id: 10,
        name: "Lord of the Rings",
        tag_type_id: 6
    },
    {
        id: 11,
        name: "high-fantasy",
        tag_type_id: 5
    },
    {
        id: 12,
        name: "epic adventure",
        tag_type_id: 3
    },
    {
        id: 13,
        name: "gandalf",
        tag_type_id: 4
    },
    {
        id: 14,
        name: "wizards",
        tag_type_id: 3
    },
    {
        id: 15,
        name: "bilbo baggins",
        tag_type_id: 4
    },
    {
        id: 16,
        name: "elves",
        tag_type_id: 3
    },
    {
        id: 17,
        name: "dwarves",
        tag_type_id: 3
    },
    {
        id: 18,
        name: "hobbits",
        tag_type_id: 3
    },
    {
        id: 19,
        name: "frodo baggins",
        tag_type_id: 4
    },
    {
        id: 20,
        name: "gollum",
        tag_type_id: 4
    },
    {
        id: 21,
        name: "samwise gamgee",
        tag_type_id: 4
    },
    {
        id: 22,
        name: "jrr tolkien",
        tag_type_id: 1
    },
    {
        id: 23,
        name: "stieg larsson",
        tag_type_id: 1
    },
    {
        id: 24,
        name: "classic literature",
        tag_type_id: 5
    },
    {
        id: 25,
        name: "gabrielle zevin",
        tag_type_id: 1
    },
    {
        id: 26,
        name: "stephen king",
        tag_type_id: 1
    },
    {
        id: 27,
        name: "horror",
        tag_type_id: 5,
    },
    {
        id: 28,
        name: "technology",
        tag_type_id: 7
    },
    {
        id: 29,
        name: "coming-of-age",
        tag_type_id: 3,
    },
    {
        id: 30,
        name: "video games",
        tag_type_id: 3,
    },
    {
        id: 31,
        name: "platonic romance",
        tag_type_id: 3,
    },
    {
        id: 32,
        name: "friendship",
        tag_type_id: 3,
    },
];

const seedTags = () => Tag.bulkCreate(tagData);

export default seedTags;