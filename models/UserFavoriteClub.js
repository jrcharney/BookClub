/**
 * @file models/UserFavoriteClub
 * @desc The user can add an Author to their favorites.
 */
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';

class UserFavoriteClub extends Model {}

UserFavoriteClub.init(
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
        club_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'club',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user_favorite_club'
    }
);

export default UserFavoriteClub;
