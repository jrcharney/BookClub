/**
 * @file models/UserBookList.js
 * @desc Create a User Book List by creating a relationship between a User and a BookList.
 * @TODO This class still exists because we need a table to associate a User with a BookList.
 */
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';

class UserBookList extends Model {}

UserBookList.init();

export default UserBookList;