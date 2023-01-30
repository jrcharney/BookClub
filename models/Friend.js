/**
 * @file models/Friend
 * @desc Allow a User to create a friendship between another user.
 * @TODO We'll explain why this table exists later.
 * @TODO User Friend Request should probably be its own class. This class would verify that there is a friendship.
 */
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';

class Friend extends Model {}

Friend.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_id : {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        user_friend_id : {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
    },
    {
        sequelize,
        timestamps: true,   // Enable timestamp fields. (I was hoping to do this anyway)
        createdAt: true,    // Creates a createdAt field that will set a timestamp on record creation
        updatedAt: true,    // Creates a updatedAt field that will update a timestamp on record update 
        freezeTableName: true,
        underscored: true,
        modelName: 'friend'
    }
);

export default Friend;