/**
 * @file models/UserSettings.js
 * @desc A User as a set of private settings that they can apply when using this site.
 * @NOTE This is one of the few data objects that should be plural
 * @NOTE UserSettings controls what is displayed on a UserProfile
 * @TODO UserSettings should have an option to display/hide age, gender, etc. on a UserProfile
 */
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';

class UserSettings extends Model {}

UserSettings.init(
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
        age_restriction: {
            type: DataTypes.INTEGER,    // TODO: Consider making this an ENUM?
            // TODO: set a defaultValue, preferably based on dob/age
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        show_real_name: {                    // Display your real name? If false, show user name only.
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        show_location: {          // Display your location?
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        show_dob: {                 // Display Birthday?
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        show_age: {          // Display Age?
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        show_favorite_authors: {          // Display favorite authors?
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        show_favorite_Books: {          // Display favorite books?
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        show_favorite_clubs: {          // Display favorite clubs?
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        show_favorite_books: {          // Display favorite books?
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        show_favorite_book_lists: {          // Display favorite book lists?
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        show_favorite_club_lists: {          // Display favorite club lists?
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        show_clubs: {                   // Display club memberships?
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        show_about: {          // User's autobio?
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
    },
    {
        sequelize,
        timestamps: true,   // Enable timestamp fields.
        createdAt: true,    // Creates a createdAt field that will set a timestamp on record creation
        updatedAt: true,    // Creates a updatedAt field that will update a timestamp on record update 
        freezeTableName: true,
        underscored: true,
        modelName: 'user_settings'
    }
);

export default UserSettings;
