/**
 * @file models/UserBookList.js
 * @desc Create a User Book List by creating a relationship between a User and a BookList.
 * @TODO This class still exists because we need a table to associate a User with a BookList.
 * @note BookList name and visibility should be in the BookList class.
 */
import { Model, DataTypes } from 'sequelize';
import sequelize from '../../config/connections.js';

class UserBookList extends Model {}


UserBookList.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_id : {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        book_list_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'book_list',
                key: 'id'
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user_book_list'
    }
);

export default UserBookList;