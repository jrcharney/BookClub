/**
 * @file models/ClubListItem.js
 * @desc An ClubListItem is a Club that the User can associate with a ClubBookList.
 */
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';

class ClubListItem extends Model {}

ClubListItem.init();

export default ClubListItem;