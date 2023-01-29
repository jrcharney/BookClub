/**
 * @file models/ClubBookList.js
 * @desc A ClubBookList is a BookList created by a ClubMember for a Club.
 * @Note There is no ClubBookListTag. Tags should be assigned to the BookList associated with the ClubBookList via the BookListTag.
 * @Note This table associates a ClubMember (not a User) and a Club with a BookList.
 */
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';

class ClubBookList extends Model {}

ClubBookList.init();

export default ClubBookList;