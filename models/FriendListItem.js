/**
 * @file models/FriendListItem.js
 * @desc Items on a FriendLists. FriendListItems are basically Friends.
 */
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';

class FriendListItem extends Model {}

FriendListItem.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        friend_list_id : {      // Note: A friend list is associated with a user.
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        name : {                   // Friend List Name
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                max: 128            // Limit the length of the title to 128 charactrers
            }
        },
        friend_id : {           // The id of the friend not the user
            type: DataTypes.INTEGER,
            references: {
                model: 'friend',
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
        modelName: 'friend_list_item'
    }
);

export default FriendListItem;