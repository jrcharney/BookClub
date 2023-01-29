/**
 * @file models/ClubListTag.js
 * @desc A ClubList is a Tag that a user can assign to a ClubList so the user can identify what Clubs are part of that list.
 */
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';

class ClubListTag extends Model {}

ClubListTag.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        club_list_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'club_list',
                key: 'id'
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
        modelName: 'club_list_tag'
    }
);

export default ClubListTag;