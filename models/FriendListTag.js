/**
 * @file models/FriendListTag.js
 * @desc Assign tags to a FriendList to make them easier to find.
 */
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';

class FriendListTag extends Model {}

FriendListTag.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        friend_list_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'friend_list',
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
        modelName: 'friend_list_tag'
    }
);

export default FriendListTag;