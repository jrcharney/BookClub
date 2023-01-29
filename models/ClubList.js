/**
 * @file models/ClubList.js
 * @desc Allow a user to organize the Clubs that they are part of. They can use ClubListTag to assign tags to this list.
 */
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';

class ClubList extends Model {}

ClubList.init();

export default ClubList;