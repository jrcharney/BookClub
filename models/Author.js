/**
 * @file model/Author.js
 * @desc Model for the Author class
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
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        last_name: {                    // Last Name
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        pen_name: {                     // Nom de plume. e.g. what Mark Twain was for Samuel L. Clemens.
            type: DataTypes.STRING,
            allowNull: true,
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
