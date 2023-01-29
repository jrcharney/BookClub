/**
 * @file modeles/BookList.js
 * @desc Create a list of books. 
 * @note A user can directly create one of these, but a club will need to associate a BookList as a ClubBookList.
 */
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';

class BookList extends Model {}

BookList.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name : {                   // Book List Name
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

export default BookList;
