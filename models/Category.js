/**
 * @file model/Category.js
 * @desc Model for the Category class
 * @TODO How about categories with sub categories. (This will definitely make it different than the Tag class. It will need to be a tree structure.)
 */
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';

class Category extends Model {}

Category.init(
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
                is: /^[ .a-z]+$/i,      // Validate a category name using regular expression // TODO: eventually use a better regex validator
                max: 64            // Limit our category size to 64 characters max
            }
        },
        description: {                    // A short category description. (This is more VARCHAR than TEXT.)
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                max: 255            // Limit our category size to 255 characters max (It's supposed to be short.)
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
        modelName: 'category'
    }
);

export default Category;
