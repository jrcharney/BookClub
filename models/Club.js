/**
 * @file models/Club.js
 * @desc A Club is a group created by a User to discuss Books, Authors, or subjects.
 * @Note There are plans to expand this to include discussion boards, but we won't build those at this time.
 */
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';

class Club extends Model {}

Club.init();

export default Club;