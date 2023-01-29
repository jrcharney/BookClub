/**
 * @file models/Friend
 * @desc Allow a User to create a friendship between another user.
 * @TODO We'll explain why this table exists later.
 */
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';

class Friend extends Model {}

Friend.init();

export default Friend;