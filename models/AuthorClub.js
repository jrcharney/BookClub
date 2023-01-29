/**
 * @file models/AuthorClub.js
 * @desc An AuthorClub is a Club to discuss an Author.
 */
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';

class AuthorClub extends Model {}

AuthorClub.init();

export default AuthorClub;