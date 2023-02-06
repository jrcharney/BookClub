/**
 * @file models/index.js
 * @desc The file that puts all those other models together!
 * @TODO Add more classes
 * @TODO Should we group classes at export? (Can we?)
 */

// To organize this better, let's export or classes in groups and indicate how many classes are in that group.
// The current count of classes is 39.

// Basic Items (5)
import User from './User.js';
import Book from './Book.js';
import Author from './Author.js';
import Tag from './Tag.js';
import Category from './Category.js';

// Relationships between Basic Items (5)
import BookAuthor from './BookAuthor.js';
import BookTag from './BookTag.js';
import BookCategory from './BookCategory.js';
import AuthorTag from './AuthorTag.js'
import CategoryEchelon from './CategoryEchelon.js';

// User classes (2)
import UserProfile from './UserProfile.js';
import UserSettings from './UserSettings.js';

// Friends (5)
import Friend from './Friend.js';
import FriendTag from './FriendTag.js';
import FriendList from './FriendList.js';
import FriendListItem from './FriendListItem.js';
import FriendListTag from './FriendListTag.js';

// Clubs (8)
import Club from './Club.js';
import ClubTag from './ClubTag.js';
import ClubMember from './ClubMember.js';
import BookClub from './BookClub.js';
import AuthorClub from './AuthorClub.js';
import ClubList from './ClubList.js';
import ClubListItem from './ClubBookListItem.js';
import ClubListTag from './ClubListTag.js'

// BookLists (6)
import BookList from './BookList.js';
import BookListItem from './BookListItem.js';
import BookListTag from './BookListTag.js';
import ClubBookList from './ClubBookList.js';
import ClubBookListItem from './ClubBookListItem.js';
import UserBookList from './UserBookList.js';

// Families (2)
import Family from './Family.js';
import FamilyUser from './FamilyUser.js';

// User Favorites (6)
import UserFavoriteAuthor from './UserFavoriteAuthor.js';
import UserFavoriteBook from './UserFavoriteBook.js';
import UserFavoriteClub from './UserFavoriteClub.js';
import UserFavoriteTag from './UserFavoriteTag.js';
// TODO: UserFavoriteCategory?
import UserFavoriteBookList from './UserFavoriteBookList.js';
import UserFavoriteClubList from './UserFavoriteClubList.js';

// Message Boards (6)
import Board from './Board.js';
import Topic from './Topic.js';
import Post from './Post.js';
import PostReply from './PostReply.js';
import Poll from './Poll.js';
import PollItem from './PollItem.js';
// TODO: UserFavoriteBoard
// TODO: UserFavoriteTopic
// TODO: UserFavoritePost

// Staff (1)
import StaffUser from './StaffUser.js';

// Relationships

// User and UserProfile has a one-to-one relationship
// User and UserSettings has a one-to-one relationship
User.hasOne(UserProfile);
User.hasOne(UserSettings);
UserProfile.belongsTo(User);
UserSettings.belongsTo(User);

Author.hasMany(Book, {through: BookAuthor});
Book.belongsToMany(Author, {through: BookAuthor});

Author.hasMany(Tag, {through: AuthorTag});
Tag.belongsToMany(Author, {through: AuthorTag});

Book.hasMany(Tag, {through: BookTag});
Tag.belongsToMany(Book, {through: BookTag});

Club.hasOne(User);          // A Club has one User who is the Creator of the Club
User.hasMany(Club);         // A User can create many Clubs
Club.hasMany(ClubMember);
ClubMember.belongsToMany(Club);
ClubMember.hasOne(User);        // A ClubMember is a User
User.hasOne(ClubMember);       // A User should only have one ClubMember associated with it (TODO: Could it have more?)

Club.hasMany(Tag, {through: ClubTag});
Tag.belongsToMany(Club, {through: ClubTag});

Club.hasOne(Book, {through: BookClub});
Book.belongsToMany(Club, {through: BookClub});      // There can be more than one club discussing the same book

Club.hasOne(Author, {through: AuthorClub});
Author.belongsToMany(Club, {through: AuthorClub});  // There can be more than one club discussing the same author

Club.hasMany(Board);                // A Club has many Boards
Board.belongsTo(Club);              // A Board belongs to a Club
Board.belongsTo(ClubMember);        // A Board is created by a ClubMember
ClubMember.hasMany(Board);          // A ClubMember can be part of many Boards
Board.hasMany(Topic);               // A Board has many Topics
Topic.belongsTo(Board);             // A Topic belongs to a Board
Topic.belongsTo(ClubMember);        // A Topic is created by a ClubMember
ClubMember.hasMany(Topic);          // A ClubMember can be part of many Topics
Poll.belongsTo(Topic);              // A Poll may belong to a Topic
Topic.hasOne(Poll);                 // A Topic can have at most one Poll
Poll.belongsTo(ClubMember);         // A Poll is created by a ClubMember
ClubMember.hasMany(Poll);           // A ClubMember can create many Polls
Poll.hasMany(PollItem);             // A Poll can have many Poll Items
PollItem.belongsTo(Poll);           // A PollItem can only belong to one Poll.
Topic.hasMany(Post);                // A Topic can have many Posts.
Post.belongsTo(Topic);              // A Post belongs to one topic.
Post.belongsTo(ClubMember);         // A Post is created by a ClubMember.
ClubMember.hasMany(Post);           // A Club Member can create many Posts.
PostReply.belongsToMany(Post);      // A Post Reply can be in response to at least one Post
Post.hasMany(PostReply);            // A Post can have many Post Replies




export default { 
    User, Book, Author, Tag, Category, 
    BookAuthor , BookTag, BookCategory, AuthorTag, CategoryEchelon,
    UserProfile, UserSettings,
    Friend, FriendTag,
    FriendList, FriendListItem, FriendListTag,
    BookList, BookListItem, BookListTag,
    UserBookList,
    Club, ClubTag, ClubMember, BookClub, AuthorClub,
    ClubList, ClubListItem, ClubListTag,
    ClubBookList, ClubBookListItem,
    Family, FamilyUser,
    UserFavoriteAuthor, 
    UserFavoriteBook, 
    UserFavoriteClub, 
    UserFavoriteTag, 
    UserFavoriteBookList, 
    UserFavoriteClubList,
    Board, Topic, Post, PostReply, Poll, PollItem,
    StaffUser
}
