/**
 * @file models/UserFavoriteBook
 * @desc The user can add an Book to their favorites.
 */
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connections.js';

class UserFavoriteBook extends Model {}

UserFavoriteBook.init(
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
        book_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'book',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user_favorite_book'
    }
);

export default UserFavoriteBook;
