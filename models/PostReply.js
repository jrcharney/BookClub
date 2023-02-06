/**
 * @file models/PostReply.js
 * @desc Associate two posts. One that is a reply to another.
 */
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connections.js';

class PostReply extends Model {}

PostReply.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        post_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'post',
                key: 'id'
            }
        },
        reply_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'post',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'post_reply'
    }
);

export default PostReply;