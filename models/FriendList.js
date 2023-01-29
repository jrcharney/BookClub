/**
 * @file model/FriendList.js
 * @Info Allow a user to organize their friends in lists. ("How do I know this person? Oh, we went to high school.")
 * @TODO Should we organize like this for Family members (FamilyUser)?
 */
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';

class FriendList extends Model {}

FriendList.init();

export default FriendList;