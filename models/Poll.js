/**
 * @file model/Poll.js
 * @desc create a Poll that can be in a Topic
 * @note A Poll will have an association with a Topic.
 */
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connections.js';

class Poll extends Model {}

Poll.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        topic_id : {
            type: DataTypes.INTEGER,
            references: {
                model: 'topic',
                key: 'id'
            }
        },
        created_by : {
            type: DataTypes.INTEGER,
            references : {
                model: 'club_member',
                key: 'id'
            }
        },
        question: {                  // Our poll question
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                max: 128            // Limit our question to 128 characters.
            }
        },
        expiredAt : {
            type: DataTypes.DATE,
            allowNull: false,
            // TODO: defaultValue should be about a week from when the poll was created.
            validate : {
                isDate: true
            }
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

export default Poll;