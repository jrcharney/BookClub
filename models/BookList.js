/**
 * @file modeles/BookList.js
 * @desc Create a list of books. 
 * @note A user can directly create one of these, but a club will need to associate a BookList as a ClubBookList.
 */
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';

class BookList extends Model {}

BookList.init();

export default BookList;