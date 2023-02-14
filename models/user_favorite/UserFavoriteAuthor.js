/**
 * @file models/UserFavorite
 * @desc The user can add an Author to their favorites.
 */
import { Model, DataTypes } from 'sequelize';
import sequelize from '../../config/connections.js';

class UserFavoriteAuthor extends Model {}

UserFavoriteAuthor.init(
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
        author_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'author',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user_favorite_author'
    }
);

export default UserFavoriteAuthor;
