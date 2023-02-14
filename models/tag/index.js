/**
 * @file models/tag/index.js
 * @info Group the major tag models together.
 * It would still be nice to integrate these with the main models
 */
import Tag from "./Tag.js";
import Author from "../main/Author.js";
import Book from "../main/Book.js";
import AuthorTag from "./AuthorTag.js";
import BookTag from "./BookTag.js";

// TODO: Make sure these relationships are correct

Book.hasMany(BookTag,{
    foreignKey: 'book_id'
});
BookTag.hasOne(Book,{
    foreignKey: 'book_id'
});
Tag.belongsTo(BookTag,{
    foreignKey: 'tag_id'
});
BookTag.hasMany(Tag,{
    foreignKey: 'tag_id'
});

Author.hasMany(AuthorTag,{
    foreignKey: 'author_id'
});
AuthorTag.hasOne(Author,{
    foreignKey: 'author_id'
});
Tag.belongsTo(AuthorTag,{
    foreignKey: 'tag_id'
});
AuthorTag.hasMany(Tag,{
    foreignKey: 'tag_id'
});

export default {Tag, AuthorTag, BookTag}