/**
 * @file models/user_favorite/index.js
 * @info Grouping all the User Favorite models in one folder
 */
import User from "../main/User.js";
import Author from "../main/Author.js"
import Book from "../main/Book.js"
import BookList from "../book_list/BookList.js"
import Club from "../club/Club.js"
import ClubList from "../club_list/ClubList.js"
import Tag from "../tag/Tag.js";
import UserFavoriteAuthor from "./UserFavoriteAuthor.js"
import UserFavoriteBook from "./UserFavoriteBook.js"
import UserFavoriteBookList from "./UserFavoriteBookList.js"
import UserFavoriteClub from "./UserFavoriteClub.js"
import UserFavoriteClubList from "./UserFavoriteClubList.js"
import UserFavoriteTag from "./UserFavoriteTag.js"

// TODO: Make sure all these relationships are correct

User.hasMany(UserFavoriteAuthor,{
    foreignKey: 'user_id'
});

User.hasMany(UserFavoriteBook,{
    foreignKey: 'user_id'
});

User.hasMany(UserFavoriteBookList,{
    foreignKey: 'user_id'
});

User.hasMany(UserFavoriteClub,{
    foreignKey: 'user_id'
});

User.hasMany(UserFavoriteClubList,{
    foreignKey: 'user_id'
});

User.hasMany(UserFavoriteTag,{
    foreignKey: 'user_id'
});

Author.hasMany(UserFavoriteAuthor,{
    foreignKey: 'author_id'
});

Book.hasMany(UserFavoriteBook,{
    foreignKey: 'book_id'
});

BookList.hasMany(UserFavoriteBookList,{
    foreignKey: 'book_list_id'
});

Club.hasMany(UserFavoriteClub,{
    foreignKey: 'club_id'
});

ClubList.hasMany(UserFavoriteClubList,{
    foreignKey: 'club_list_id'
});

Tag.hasMany(UserFavoriteTag,{
    foreignKey: 'tag_id'
});

UserFavoriteAuthor.hasOne(User,{
    foreignKey: 'user_id'
});
UserFavoriteBook.hasOne(User,{
    foreignKey: 'user_id'
});
UserFavoriteBookList.hasOne(User,{
    foreignKey: 'user_id'
});
UserFavoriteClub.hasOne(User,{
    foreignKey: 'user_id'
});
UserFavoriteClubList.hasOne(User,{
    foreignKey: 'user_id'
});
UserFavoriteTag.hasOne(User,{
    foreignKey: 'user_id'
});

UserFavoriteAuthor.hasOne(Author,{
    foreignKey: 'author_id'
});
UserFavoriteBook.hasOne(Book,{
    foreignKey: 'book_id'
});
UserFavoriteBookList.hasOne(BookList,{
    foreignKey: 'book_list_id'
});
UserFavoriteClub.hasOne(Club,{
    foreignKey: 'club_id'
});
UserFavoriteClubList.hasOne(ClubList,{
    foreignKey: 'club_list_id'
});
UserFavoriteTag.hasOne(Tag,{
    foreignKey: 'tag_id'
});

export default {
    UserFavoriteAuthor,
    UserFavoriteBook,
    UserFavoriteBookList,
    UserFavoriteClub,
    UserFavoriteClubList,
    UserFavoriteTag
}