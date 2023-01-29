/**
 * @file models/FriendListTag.js
 * @desc Assign tags to a FriendList to make them easier to find.
 */
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';

class FriendListTag extends Model {}

FriendListTag.init();

export default FriendListTag;