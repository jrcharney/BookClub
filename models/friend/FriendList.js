/**
 * @file model/FriendList.js
 * @Info Allow a user to organize their friends in lists. ("How do I know this person? Oh, we went to high school.")
 * @TODO Should we organize like this for Family members (FamilyUser)?
 */
import { Model, DataTypes } from 'sequelize';
import sequelize from '../../config/connections.js';

class FriendList extends Model {}

FriendList.init(
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
        name : {                   // Friend List Name
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                max: 128            // Limit the length of the title to 128 charactrers
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
        modelName: 'friend_list'
    }
);

export default FriendList;