/**
 * @file models/BookListItem.js
 * @desc A BookListItem is a Book assigned to a BookList.
 */
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';

class BookListItem extends Model {}

BookListItem.init();

export default BookListItem;