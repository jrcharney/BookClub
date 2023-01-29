/**
 * @file models/ClubList.js
 * @desc Allow a user to organize the Clubs that they are part of. They can use ClubListTag to assign tags to this list.
 */
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';

class ClubList extends Model {}

ClubList.init(
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
        name : {                   // Club List Name
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                max: 128            // Limit the length of the title to 128 charactrers
            }
        },
        is_public : {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true      // Book Lists are visible by default.
        }
    },
    {
        sequelize,
        timestamps: true,   // Enable timestamp fields. (I was hoping to do this anyway)
        createdAt: true,    // Creates a createdAt field that will set a timestamp on record creation
        updatedAt: true,    // Creates a updatedAt field that will update a timestamp on record update 
        freezeTableName: true,
        underscored: true,
        modelName: 'book_list'
    }
);

export default ClubList;