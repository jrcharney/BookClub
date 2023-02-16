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
import TagType from "./TagType.js";

// TODO: Make sure these relationships are correct

Author.belongsToMany(Tag, {
    through: AuthorTag
});

Book.belongsToMany(Tag, {
    through: BookTag
});

Tag.belongsToMany(Author,{
    through: AuthorTag
});

Tag.belongsToMany(Book,{
    through: BookTag
});

Author.hasMany(AuthorTag,{
    foreignKey: 'author_id'
});

Book.hasMany(BookTag,{
    foreignKey: 'book_id'
});

AuthorTag.hasOne(Author,{
    foreignKey: 'author_id',
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
});

AuthorTag.hasMany(Tag,{
    foreignKey: 'tag_id',
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
});

BookTag.hasOne(Book,{
    foreignKey: 'book_id',
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
});

BookTag.hasMany(Tag,{
    foreignKey: 'tag_id',
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
});

Tag.belongsTo(AuthorTag,{
    foreignKey: 'tag_id'
});

Tag.belongsTo(BookTag,{
    foreignKey: 'tag_id'
});

Tag.hasOne(TagType,{
    foreignKey: 'tag_type_id'
});
TagType.belongsToMany(Tag,{
    foreignKey: 'tag_type_id'
});

export default {Tag, AuthorTag, BookTag, TagType}