/**
 * @file models/UserFavoriteTag
 * @desc The user can add an Tag to their favorites.
 */
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';

class UserFavoriteTag extends Model {}

UserFavoriteTag.init();

export default UserFavoriteTag;