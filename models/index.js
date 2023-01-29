/**
 * @file models/index.js
 * @desc The file that puts all those other models together!
 * @TODO Add more classes
 * @TODO Should we group classes at export? (Can we?)
 */

// To organize this better, let's export or classes in groups and indicate how many classes are in that group.
// The current count of classes is 37.

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

// User Favorites (4)
import UserFavoriteAuthor from './UserFavoriteAuthor.js';
import UserFavoriteBook from './UserFavoriteBook.js';
import UserFavoriteClub from './UserFavoriteClub.js';
import UserFavoriteTag from './UserFavoriteTag.js';
// TODO: UserFavoriteCategory?

export default { 
    User, Book, Author, Tag, Category, 
    BookAuthor , BookTag, BookCategory, AuthorTag, CategoryEchelon,
    UserProfile, UserSettings, UserBookList,
    Friend, FriendTag,
    FriendList, FriendListItem, FriendListTag,
    BookList, BookListItem, BookListTag,
    Club, ClubTag, ClubMember, BookClub, AuthorClub,
    ClubList, ClubListItem, ClubListTag,
    ClubBookList, ClubBookListItem,
    Family, FamilyUser,
    UserFavoriteAuthor, UserFavoriteBook, UserFavoriteClub, UserFavoriteTag
}
