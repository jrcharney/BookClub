/**
 * @file models/FriendTag.js
 * @desc Assign Tags to Clubs to make them easier to find and to associate what topics the club generally talks about.
 */
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connections.js';

class ClubTag extends Model {}

ClubTag.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        club_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'club',
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
        modelName: 'club_tag'
    }
);

export default ClubTag;