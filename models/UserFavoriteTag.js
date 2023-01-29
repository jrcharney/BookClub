/**
 * @file models/UserFavoriteTag
 * @desc The user can add an Tag to their favorites.
 */
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';

class UserFavoriteTag extends Model {}

UserFavoriteTag.init(
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
        tag_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'tag',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user_favorite_tag'
    }
);

export default UserFavoriteTag;
