/**
 * @file models/FriendTag.js
 * @desc Assign Tags to Friends to make them easier to remember and find.
 */
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';

class FriendTag extends Model {}

FriendTag.init();

export default FriendTag;