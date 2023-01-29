/**
 * @file models/ClubMember.js
 * @desc A ClubMember is a User who is a member of a Club.
 * @Note Generate ClubMember lists using this table.
 */
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';

class ClubMember extends Model {}

ClubMember.init();

export default ClubMember;