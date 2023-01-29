/**
 * @file models/UserProfile.js
 * @desc Allow a User to create a UserProfile that can be public.
 * @TODO Make sure that anything private is put in the UserSettings.js
 */
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';

class UserProfile extends Model {}

UserProfile.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            }
        },
        first_name: {                   // First Name
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                max: 128                // Limit the length of the first name
            }
        },
        last_name: {                    // Last Name
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                max: 128                // Limit the length of the last name
            }
        },
        dob : {                         // Date of Birth
            type: DataTypes.DATEONLY,   // DATEONLY will accept YYYY-MM-DD, (Does DATE from MySQL)
            allowNull: true,
            validate: {
                isDate: true
            }
        },
        // TODO: dod?
        location: {                     // The location of the user
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                max: 128                // Limit location of 128 characters
            }
        },
        about: {                  // A short autobiography. Write something about yourself.
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                max: 5000           // Maybe limit this to about 5000 characters
            }                // TODO: Do we need a validator for this?
        }
    },
    {
        sequelize,
        timestamps: true,   // Enable timestamp fields.
        createdAt: true,    // Creates a createdAt field that will set a timestamp on record creation
        updatedAt: true,    // Creates a updatedAt field that will update a timestamp on record update 
        freezeTableName: true,
        underscored: true,
        modelName: 'user_profile'
    }
);

export default UserProfile;