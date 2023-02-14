/**
 * @file models/PollItem.js
 * @desc A poll Item is an option in a Poll.
 */
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connections.js';

class PollItem extends Model {}

PollItem.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        poll_id : {
            type: DataTypes.INTEGER,
            references: {
                model: 'poll',
                key: 'id'
            }
        },
        answer: {                   // A poll answer
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                max: 128            // Limit our question to 128 characters.
            }
        },
        votes : {
            type: DataTypes.INTEGER,
            allowNull: false,
            // TODO: How should we validate this?
        }
    },
    {
        sequelize,
        timestamps: true,   // Enable timestamp fields. (I was hoping to do this anyway)
        createdAt: true,    // Creates a createdAt field that will set a timestamp on record creation
        updatedAt: true,    // Creates a updatedAt field that will update a timestamp on record update 
        freezeTableName: true,
        underscored: true,
        modelName: 'poll'
    }
);

export default PollItem;