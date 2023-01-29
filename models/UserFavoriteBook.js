/**
 * @file models/UserFavoriteBook
 * @desc The user can add an Book to their favorites.
 */
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';

class UserFavoriteBook extends Model {}

UserFavoriteBook.init();

export default UserFavoriteBook;