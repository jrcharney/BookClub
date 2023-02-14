/**
 * @file models/index.js
 * @desc The file that puts all those other models together!
 * @TODO Add more classes
 * @TODO Should we group classes at export? (Can we?)
 */

// To organize this better, let's export or classes in groups and indicate how many classes are in that group.
// The current count of classes is 39.

// Basic Items (6)
import User from './main/User.js';
import Book from './Book.js';
import Author from './main/Author.js';
import Tag from './tag_models/Tag.js';
import Category from './category/Category.js';
import Comment from './Comment.js';

// Relationships between Basic Items (5)
import BookAuthor from './main/BookAuthor.js';
import BookTag from './tag_models/BookTag.js';
import BookCategory from './category/BookCategory.js';
import AuthorTag from './tag_models/AuthorTag.js'
import CategoryEchelon from './category/CategoryEchelon.js';

// User classes (2)
import UserProfile from './user/UserProfile.js';
import UserSettings from './user/UserSettings.js';

// Friends (5)
import Friend from './friend_models/Friend.js';
import FriendTag from './friend_models/FriendTag.js';
import FriendList from './friend_models/FriendList.js';
import FriendListItem from './friend_models/FriendListItem.js';
import FriendListTag from './friend_models/FriendListTag.js';

// Clubs (8)
import Club from './club/Club.js';
import ClubTag from './club/ClubTag.js';
import ClubMember from './club/ClubMember.js';
import BookClub from './club/BookClub.js';
import AuthorClub from './club/AuthorClub.js';
import ClubList from './club/ClubList.js';
import ClubListItem from './ClubBookListItem.js';
import ClubListTag from './club/ClubListTag.js'

// BookLists (6)
import BookList from './book_list/BookList.js';
import BookListItem from './BookListItem.js';
import BookListTag from './BookListTag.js';
import ClubBookList from './club/ClubBookList.js';
import ClubBookListItem from './ClubBookListItem.js';
import UserBookList from './book_list/UserBookList.js';

// Families (2)
import Family from './family/Family.js';
import FamilyUser from './family/FamilyUser.js';

// User Favorites (6)
import UserFavoriteAuthor from './user_favorite_models/UserFavoriteAuthor.js';
import UserFavoriteBook from './UserFavoriteBook.js';
import UserFavoriteClub from './UserFavoriteClub.js';
import UserFavoriteTag from './UserFavoriteTag.js';
// TODO: UserFavoriteCategory?
import UserFavoriteBookList from './UserFavoriteBookList.js';
import UserFavoriteClubList from './UserFavoriteClubList.js';

// Message Boards (6)
import Board from './club_board/Board.js';
import Topic from './Topic.js';
import Post from './Post.js';
import PostReply from './PostReply.js';
import Poll from './Poll.js';
import PollItem from './PollItem.js';
// TODO: UserFavoriteBoard
// TODO: UserFavoriteTopic
// TODO: UserFavoritePost

// Staff (1)
import StaffUser from './admin/StaffUser.js';

export default { 
    User, Book, Author, Tag, Category, Comment, 
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
