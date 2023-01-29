/**
 * @file models/BookClub.js
 * @desc A BookClub is a Club to discuss a Book.
 */
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';

class BookClub extends Model {}

BookClub.init();

export default BookClub;