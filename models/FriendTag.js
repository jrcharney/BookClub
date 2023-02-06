/**
 * @file models/FriendTag.js
 * @desc Assign Tags to Friends to make them easier to remember and find.
 */
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connections.js';

class FriendTag extends Model {}

FriendTag.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        friend_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'friend',
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
        modelName: 'friend_tag'
    }
);

export default FriendTag;