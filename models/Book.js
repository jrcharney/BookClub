/**
 * @file models/Book.js
 * @desc Model for a Book
 * @note Author is not included in this object because some books have more than one Author. BookAuthor.js will bridge between Books and Authors.
 * @TODO Publisher data
 */
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connections.js';

export default class Book extends Model {}

Book.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {                   // Book Title
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        isbn: {                    // ISBN number.
            type: DataTypes.STRING,
            allowNull: false,           // This identification is required
            validate: {
                notEmpty: true,         // TODO: need to establish a validation format, probably with regex
            }
        },
        loc: {                     // Library of Congress Classification Outline identification (See https://www.loc.gov/aba/publications/FreeLCC/freelcc.html)
            type: DataTypes.STRING,
            allowNull: true,
            validate: {}            // TODO: need to set up a format for validation
        },
        dewey : {                  // Dewey Decimal Classifcation (See https://www.oclc.org/content/dam/oclc/dewey/resources/summaries/deweysummaries.pdf)
            type: DataTypes.STRING,
            allowNull: true,
            validate: {}            // TODO: need to set up a format for validation
        },
        pub_year : {                         // year this book was published
            type: DataTypes.INTEGER,    // TODO: There isn't a DataType.YEAR...yet. For now, I'm just going to save this as an integer
            allowNull: true,
            validate: {}                // TODO: Create a way to verify a year.
        },
        description: {                  // Book information. Write something about this book.
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
        modelName: 'book'
    }
);


