/**
 * @file models/FriendListItem.js
 * @desc Items on a FriendLists. FriendListItems are basically Friends.
 */
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';

class FriendListItem extends Model {}

FriendListItem.init();

export default FriendListItem;