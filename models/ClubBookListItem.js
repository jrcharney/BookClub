/**
 * @file models/ClubBookListItem.js
 * @desc A ClubBookListItem is a BookListItem for a ClubBookList added by a ClubMember of a Club.
 */
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';

class ClubBookListItem extends Model {}

ClubBookListItem.init();

export default ClubBookListItem;