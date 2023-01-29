/**
 * @file models/UserFavorite
 * @desc The user can add an Author to their favorites.
 */
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';

class UserFavoriteAuthor extends Model {}

UserFavoriteAuthor.init();

export default UserFavoriteAuthor;