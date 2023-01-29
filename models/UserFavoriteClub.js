/**
 * @file models/UserFavoriteClub
 * @desc The user can add an Author to their favorites.
 */
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';

class UserFavoriteClub extends Model {}

UserFavoriteClub.init();

export default UserFavoriteClub;