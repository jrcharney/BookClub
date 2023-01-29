/**
 * @file model/Tag.js
 * @desc Model for the Tag class
 */
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';

class Tag extends Model {}

Tag.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {                   // Category name
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,               // TODO: Hopefully this works. I wanted these to be unique
            validate: {
                notEmpty: true,
                max: 64            // Limit our tag size to 64 characters max
                // NOTE: I was going to apply a regex validator, but then I got thinking about other characters that could be used in tags.
                // TODO: Write a better regex validator
                // is: /^[ .a-z]+$/i,      // Validate a tag name using regular expression
            }
        },
        description: {                    // A short tag description. (This is more VARCHAR than TEXT.)
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                max: 255            // Limit our tag size to 255 characters max (It's supposed to be short.)
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
        modelName: 'tag'
    }
);

export default Tag;
