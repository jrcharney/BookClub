/**
 * @file club/index.js
 * @info The group of Club models
 * @note Club models that handle message board stuff are in club_board folder.
 * @note ClubList models that allow a user to organize what clubs they belong to are in the club_list folder.
 * @note ClubBookList models that allow a club to organize a book list are in the club_book_list folder.
 */
import Club from "./Club.js";
import ClubMember from "./ClubMember.js";
import ClubTag from "./ClubTag.js";
import AuthorClub from "./AuthorClub.js";
import BookClub from "./BookClub.js";
import User from "../main/User.js";
import Author from "../main/Author.js";
import Book from "../main/Book.js";
import Tag from "../tag/Tag.js";

// TODO: Need to review these relationships
// A user can create many Clubs
User.hasMany(Club,{
    foreignKey: 'user_id'
});

// A club belongs to the user who created it
Club.belongsTo(User,{
    foreignKey: 'user_id'
});

// A ClubMember is attatched to one User
ClubMember.hasOne(User,{
    foreignKey: 'user_id'
});

// A User is attached to one ClubMember
User.belongsTo(ClubMember,{
    foreignKey: 'user_id'
})

ClubMember.belongsToMany(Club,{
    foreignKey: 'club_id'
})

Club.hasMany(ClubMember,{
    foreignKey: 'club_id'
});

AuthorClub.belongsTo(Club,{
    foreignKey: 'club_id'
});
AuthorClub.belongsTo(Author,{
    foreignKey: 'author_id'
});

BookClub.belongsTo(Club,{
    foreignKey: 'club_id'
});
BookClub.belongsTo(Book,{
    foreignKey: 'book_id'
});

Club.hasMany(ClubTag,{
    foreignKey: 'club_id'
});
ClubTag.belongsToMany(Club,{
    foreignKey: 'club_id'
});
ClubTag.hasOne(Tag,{
    foreignKey: 'tag_id'
});
Tag.belongsToMany(ClubTag,{
    foreignKey: 'tag_id'
});

export default {Club, ClubMember, ClubTag, AuthorClub, BookClub}