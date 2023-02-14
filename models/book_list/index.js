/**
 * @file book_list/index.js
 * @info The group of models that are used for Book Lists
 * @note For models where a user can organize book lists, see the user_book_list folder. (I know that sounds a bit convoluted.)
 * @note For models where a club can organize book lists, see the club_book_list folder.
 */
import BookList from "./BookList.js";
import BookListItem from "./BookListItem.js"
import BookListTag from "./BookListTag.js"
import Book from "../main/Book.js";
import Tag from "../tag/Tag.js";

BookListItem.hasOne(Book, {
    foreignKey: 'book_id'
});

BookListTag.hasOne(Tag, {
    foreignKey: 'tag_id'
});

BookListItem.belongsToMany(BookList,{
    foreignKey: 'book_list_id'
})

// TODO: I need to clarify what I mean here.
/*
BookList.hasMany(Book, {
    through: BookListItem
})
*/

export default {BookList, BookListItem, BookListTag}