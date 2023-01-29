/**
 * @file models/UserFavoriteClubList.js
 * @desc The user can add a ClubList to their favorites.
 */
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';

class UserFavoriteClubList extends Model {}

UserFavoriteClubList.init(
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
        club_list_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'club_list',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user_favorite_club_list'
    }
);

export default UserFavoriteClubList;
