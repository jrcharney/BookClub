/**
 * @file models/BookListTag.js
 * @desc A BookListTag is a Tagg assigned to a BookList. Many tags can be applied to a book list.
 */
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';

class BookListTag extends Model {}

BookListTag.init();

export default BookListTag;