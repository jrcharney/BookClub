/**
 * @file models/ClubListTag.js
 * @desc A ClubList is a Tag that a user can assign to a ClubList so the user can identify what Clubs are part of that list.
 */
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';

class ClubListTag extends Model {}

ClubListTag.init();

export default ClubListTag;