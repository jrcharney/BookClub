/**
 * @file models/Family.js
 * @desc A Family is a group of Users created by another user to manage User accounts associated with a parent family User.
 * @TODO Should we create a FamilyList and FamilyListItem class?  Probably FamilyParentUser and FamilyChildUser?
 */
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';

class Family extends Model {}

Family.init();

export default Family;