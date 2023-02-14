/**
 * @file model/user_book_list/index.js
 * @info Group models for user book lists...which is just that one model.
 * Following in a consistent import pattern, there is an index.js file here.
 */
import UserBookList from "./UserBookList.js";
import User from "../main/User.js";
import BookList from "../book_list/BookList.js";

User.hasMany(UserBookList,{
    foreignKey: 'user_id'
});
UserBookList.belongsTo(User,{
    foreignKey: 'user_id'
});
BookList.belongsTo(UserBookList,{
    foreignKey: 'book_list_id'
});
UserBookList.hasMany(BookList,{
    foreignKey: 'book_list_id'
});

export default {UserBookList}