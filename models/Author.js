/**
 * @file model/Author.js
 * @desc Model for the Author class
 * @TODO Adjust the lenghts on first, last, and pen name fields.
 */
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';

class Author extends Model {}

Author.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {                   // First Name
            type: DataTypes.STRING,
            allowNull: true,            // First name can be null if there is no first name.
            validate: {
                notEmpty: false,
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
        pen_name: {                     // Nom de plume. e.g. what Mark Twain was for Samuel L. Clemens.
            type: DataTypes.STRING,
            allowNull: true,
            max: 128,                   // Limit the length of a pen name
            validate: {
                is: /^[ .a-z]+$/i,      // Validate a name using regular expression
            }
        },
        dob : {                         // Date of Birth
            type: DataTypes.DATEONLY,   // DATEONLY will accept YYYY-MM-DD, (Does DATE from MySQL)
            allowNull: true,
            validate: {
                isDate: true
            }
        },
        dod : {                         // Date of Death
            type: DataTypes.DATEONLY,
            allowNull: true,
            validate: {
                isDate: true
            }
        },
        information: {                  // Author information. Write something about this person.
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {}                // TODO: Do we need a validator for this?
        }
    },
    {
        sequelize,
        timestamps: true,   // Enable timestamp fields. (I was hoping to do this anyway)
        createdAt: true,    // Creates a createdAt field that will set a timestamp on record creation
        updatedAt: true,    // Creates a updatedAt field that will update a timestamp on record update 
        freezeTableName: true,
        underscored: true,
        modelName: 'author'
    }
);

export default Author;
