/**
 * @file models/FamilyUser.js
 * @desc A FamilyUser is a User that is part of a Family created by another User.
 * @TODO Should we create a FamilyList and FamilyListItem class?
 */
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';

class FamilyUser extends Model {}

FamilyUser.init();

export default FamilyUser;