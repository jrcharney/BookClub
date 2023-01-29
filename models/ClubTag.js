/**
 * @file models/FriendTag.js
 * @desc Assign Tags to Clubs to make them easier to find and to associate what topics the club generally talks about.
 */
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';

class ClubTag extends Model {}

ClubTag.init();

export default ClubTag;