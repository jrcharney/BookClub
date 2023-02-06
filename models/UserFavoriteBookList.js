/**
 * @file models/UserFavoriteBookList.js
 * @desc The user can add a BookList to their favorites.
 */
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connections.js';

class UserFavoriteBookList extends Model {}

UserFavoriteBookList.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            }
        },
        user_book_list_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user_book_list',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user_favorite_book_list'
    }
);

export default UserFavoriteBookList;
