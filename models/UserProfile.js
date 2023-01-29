/**
 * @file models/UserProfile.js
 * @desc Allow a User to create a UserProfile that can be public.
 * @TODO Make sure that anything private is put in the UserSettings.js
 */
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';

class UserProfile extends Model {}

UserProfile.init();

export default UserProfile;