/**
 * @file models/UserSettings.js
 * @desc A User as a set of private settings that they can apply when using this site.
 * @NOTE This is one of the few data objects that should be plural
 * @NOTE UserSettings controls what is displayed on a UserProfile
 * @TODO UserSettings should have an option to display/hide age, gender, etc. on a UserProfile
 */
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';

class UserSettings extends Model {}

UserSettings.init();

export default UserSettings;
