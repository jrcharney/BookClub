/**
 * @file models/index.js
 * @desc The file that puts all those other models together!
 * @TODO Add more classes
 * @TODO Should we group classes at export? (Can we?)
 */

// To organize this better, let's export or classes in groups and indicate how many classes are in that group.
// The current count of classes is 39.

import {Author, Book, BookAuthor, Comment, User} from "./main";
//import * as Admin from "./admin";
//import * as BookList from "./book_list"
//import * as Category from "./category";
//import * as Club from "./club";
//import * as ClubBoard from "./club_board";
//import * as ClubBookList from "./club_book_list"
//import * as ClubList from "./club_list"
//import * as Family from "./family"
//import * as Friend from "./friend"
import {Tag, AuthorTag, BookTag} from "./tag"
import {UserProfile, UserSettings} from "./user"
//import * as UserBookList from "user_book_list"
//import * as UserFavorite from "user_favorite"

export default {
    Author, Book, BookAuthor, Comment, User,
    Tag, AuthorTag, BookTag,
    UserProfile, UserSettings
}